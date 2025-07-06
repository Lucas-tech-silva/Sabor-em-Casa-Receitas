// ==================== ARQUIVO PRINCIPAL ====================

// ==================== SISTEMA DE TEMA ====================
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        this.setupToggle();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateIcon(theme);
    }

    updateIcon(theme) {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    setupToggle() {
        const toggle = document.querySelector('.theme-toggle');
        toggle?.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
            this.showToast(`Tema ${newTheme === 'dark' ? 'escuro' : 'claro'} ativado!`, 'info');
        });
    }

    showToast(message, type) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ==================== MENU HAMBURGER ====================
class MenuManager {
    constructor() {
        this.init();
    }

    init() {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileBtn && navMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileBtn.classList.toggle('open');
                navMenu.classList.toggle('mobile-open');
                document.body.classList.toggle('menu-open');
            });

            // Fechar menu ao clicar em um link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileBtn.classList.remove('open');
                    navMenu.classList.remove('mobile-open');
                    document.body.classList.remove('menu-open');
                });
            });

            // Fechar menu ao clicar fora
            document.addEventListener('click', (e) => {
                if (!mobileBtn.contains(e.target) && !navMenu.contains(e.target)) {
                    mobileBtn.classList.remove('open');
                    navMenu.classList.remove('mobile-open');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }
}

// ==================== COMPONENTE DE CARD ====================
class RecipeCard {
    static create(recipe) {
        const isFavorite = favorites.isFavorite(recipe.id);
        
        const card = document.createElement('div');
        card.className = 'recipe-card relative';
        card.setAttribute('data-recipe-id', recipe.id);
        
        card.innerHTML = `
            <div class="recipe-card-image relative">
                <img src="${window.location.pathname.includes('/pages/') ? '../' : ''}${recipe.imagem}" alt="${recipe.nome}" loading="lazy">
                <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleFavorite('${recipe.id}')"
                        style="${isFavorite ? 'background: #e74c3c !important; color: white !important;' : ''}"
                        aria-label="${isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
                    <i class="fas fa-heart"></i>
                </button>
                <div class="recipe-card-badge">${recipe.categoria}</div>
            </div>
            <div class="recipe-card-content">
                <h3 class="recipe-card-title">${recipe.nome}</h3>
                <div class="recipe-card-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.tempo} min</span>
                    <span><i class="fas fa-signal"></i> ${recipe.dificuldade}</span>
                </div>
                <div class="recipe-ingredients">
                    <small>Principais: ${recipe.ingredientes.slice(0, 3).map(ing => ing.item).join(', ')}</small>
                </div>
                <div class="recipe-card-actions">
                    <button class="btn btn-primary" onclick="RecipeDetail.view('${recipe.id}')">
                        <i class="fas fa-eye"></i> Ver Receita Completa
                    </button>
                    <div class="recipe-action-buttons">
                        <button class="btn btn-outline" onclick="PrintService.print('${recipe.id}')" title="Imprimir">
                            <i class="fas fa-print"></i>
                        </button>
                        <button class="btn btn-outline" onclick="window.timer.show(${recipe.tempo})" title="Timer">
                            <i class="fas fa-clock"></i>
                        </button>
                        <button class="btn btn-outline" onclick="ShareService.share('${recipe.id}', '${recipe.nome}')" title="Compartilhar">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
}

// ==================== PÁGINA DE DETALHES ====================
class RecipeDetail {
    static view(recipeId) {
        localStorage.setItem('currentRecipeId', recipeId);
        // Verifica se está na pasta pages ou na raiz
        const currentPath = window.location.pathname;
        if (currentPath.includes('/pages/')) {
            window.location.href = 'receita.html';
        } else {
            window.location.href = 'pages/receita.html';
        }
    }

    static load() {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id') || localStorage.getItem('currentRecipeId');
        
        if (!recipeId) {
            this.showToast('Receita não encontrada', 'error');
            setTimeout(() => window.location.href = 'receitas.html', 2000);
            return;
        }
        
        const recipe = window.ReceitasData.buscarPorId(recipeId);
        if (!recipe) {
            this.showToast('Receita não encontrada', 'error');
            return;
        }
        
        this.display(recipe);
    }

    static display(recipe) {
        const isFavorite = favorites.isFavorite(recipe.id);
        
        document.title = `${recipe.nome} - Sabor em Casa`;
        
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = `
                <button onclick="history.back()" class="btn btn-outline back-button">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
                
                <div class="recipe-header">
                    <div class="recipe-image">
                        <img src="${window.location.pathname.includes('/pages/') ? '../' : ''}${recipe.imagem}" alt="${recipe.nome}">
                        <div class="recipe-actions">
                            <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                    onclick="toggleFavorite('${recipe.id}')"
                                    data-id="${recipe.id}"
                                    style="${isFavorite ? 'background: #e74c3c !important; color: white !important;' : ''}">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="btn-share" onclick="ShareService.share('${recipe.id}', '${recipe.nome}')">
                                <i class="fas fa-share"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="recipe-info">
                        <h1>${recipe.nome}</h1>
                        
                        <div class="recipe-meta">
                            <div class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span>${recipe.tempo} minutos</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-signal"></i>
                                <span>${recipe.dificuldade}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-utensils"></i>
                                <span>${recipe.categoria}</span>
                            </div>
                        </div>
                        
                        <div class="recipe-actions-buttons">
                            <button onclick="PrintService.print('${recipe.id}')" class="btn btn-outline">
                                <i class="fas fa-print"></i> Imprimir
                            </button>
                            <button onclick="window.timer.show(${recipe.tempo})" class="btn btn-outline">
                                <i class="fas fa-clock"></i> Timer
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="recipe-content">
                    <div class="recipe-sidebar">
                        <div class="recipe-ingredients">
                            <h2><i class="fas fa-list"></i> 📝 Ingredientes</h2>
                            <ul id="ingredients-list">
                                ${recipe.ingredientes.map((item, index) => `
                                    <li>
                                        <input type="checkbox" id="ingredient-${index}">
                                        <label for="ingredient-${index}">
                                            <strong>${item.quantidade}</strong> ${item.item}
                                        </label>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="recipe-main">
                        <div class="recipe-instructions">
                            <h2><i class="fas fa-clipboard-list"></i> 👨‍🍳 Modo de Preparo</h2>
                            <ol id="instructions-list">
                                ${recipe.instrucoes.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                        
                        <div class="recipe-tips">
                            <h2><i class="fas fa-lightbulb"></i> Dicas Extras</h2>
                            <ul>
                                <li>Leia toda a receita antes de começar</li>
                                <li>Prepare todos os ingredientes antes de iniciar</li>
                                <li>Use ingredientes frescos para melhor sabor</li>
                                <li>Ajuste temperos conforme seu gosto</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    static showToast(message, type) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ==================== PÁGINA PRINCIPAL ====================
class RecipesPage {
    constructor() {
        this.recipes = [];
        this.filteredRecipes = [];
        this.displayedCount = 0;
        this.filters = { category: '', time: '', difficulty: '', search: '' };
        
        this.elements = {
            searchInput: document.getElementById('search-input'),
            categoryFilter: document.getElementById('category-filter'),
            timeFilter: document.getElementById('time-filter'),
            difficultyFilter: document.getElementById('difficulty-filter'),
            clearFiltersBtn: document.getElementById('clear-filters'),
            recipesGrid: document.getElementById('recipes-grid'),
            noResults: document.getElementById('no-results')
        };
        
        this.init();
    }

    init() {
        this.loadCategories();
        this.loadInitialRecipes();
        this.setupEventListeners();
    }

    loadCategories() {
        const categories = window.ReceitasData.obterCategorias();
        if (this.elements.categoryFilter) {
            this.elements.categoryFilter.innerHTML = '<option value="">Todas Categorias</option>';
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                this.elements.categoryFilter.appendChild(option);
            });
        }
    }

    loadInitialRecipes() {
        this.recipes = window.ReceitasData.receitas;
        this.filteredRecipes = [...this.recipes];
        this.filteredRecipes = favorites.sortRecipes(this.filteredRecipes);
        
        this.displayedCount = Math.min(12, this.filteredRecipes.length);
        this.displayRecipes(this.filteredRecipes.slice(0, this.displayedCount));
        this.updateLoadMoreButton();
    }

    setupEventListeners() {
        // Busca com debounce
        let searchTimer;
        this.elements.searchInput?.addEventListener('input', (e) => {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                this.filters.search = e.target.value.trim();
                this.applyFilters();
            }, 500);
        });

        // Filtros
        this.elements.categoryFilter?.addEventListener('change', (e) => {
            this.filters.category = e.target.value;
            this.applyFilters();
        });
        
        this.elements.timeFilter?.addEventListener('change', (e) => {
            this.filters.time = e.target.value;
            this.applyFilters();
        });
        
        this.elements.difficultyFilter?.addEventListener('change', (e) => {
            this.filters.difficulty = e.target.value;
            this.applyFilters();
        });
        
        this.elements.clearFiltersBtn?.addEventListener('click', () => {
            this.clearFilters();
        });
    }

    applyFilters() {
        this.filteredRecipes = window.ReceitasData.buscarReceitas(
            this.filters.search,
            this.filters.category,
            this.filters.time,
            this.filters.difficulty
        );
        
        this.filteredRecipes = favorites.sortRecipes(this.filteredRecipes);
        
        this.displayedCount = Math.min(12, this.filteredRecipes.length);
        this.elements.recipesGrid.innerHTML = '';
        
        if (this.filteredRecipes.length > 0) {
            this.displayRecipes(this.filteredRecipes.slice(0, this.displayedCount));
            this.updateLoadMoreButton();
            this.elements.noResults.style.display = 'none';
        } else {
            this.elements.noResults.style.display = 'block';
            // Remove o botão carregar mais quando não há resultados
            const loadMoreBtn = document.getElementById('load-more-btn');
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        }
    }

    clearFilters() {
        this.filters = { category: '', time: '', difficulty: '', search: '' };
        
        this.elements.searchInput.value = '';
        this.elements.categoryFilter.value = '';
        this.elements.timeFilter.value = '';
        this.elements.difficultyFilter.value = '';
        
        this.filteredRecipes = [...this.recipes];
        this.filteredRecipes = favorites.sortRecipes(this.filteredRecipes);
        
        this.displayedCount = Math.min(12, this.filteredRecipes.length);
        this.elements.recipesGrid.innerHTML = '';
        
        this.displayRecipes(this.filteredRecipes.slice(0, this.displayedCount));
        this.updateLoadMoreButton();
        this.elements.noResults.style.display = 'none';
        
        // Toast de confirmação
        this.showToast('Filtros limpos! 🧹', 'info');
    }

    displayRecipes(recipes) {
        recipes.forEach(recipe => {
            const card = RecipeCard.create(recipe);
            this.elements.recipesGrid.appendChild(card);
        });
    }

    updateLoadMoreButton() {
        let loadMoreBtn = document.getElementById('load-more-btn');
        
        if (!loadMoreBtn) {
            const container = document.createElement('div');
            container.className = 'load-more-container';
            container.innerHTML = `
                <button id="load-more-btn" class="btn btn-primary">
                    <i class="fas fa-plus"></i> Carregar Mais Receitas
                </button>
            `;
            document.querySelector('.recipes-section .container').appendChild(container);
            loadMoreBtn = document.getElementById('load-more-btn');
            
            loadMoreBtn.addEventListener('click', () => this.loadMore());
        }
        
        const hasMore = this.displayedCount < this.filteredRecipes.length;
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
        
        if (!hasMore && this.filteredRecipes.length > 0) {
            loadMoreBtn.textContent = 'Todas as receitas carregadas! 👨‍🍳';
            loadMoreBtn.disabled = true;
        } else {
            loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Carregar Mais Receitas';
            loadMoreBtn.disabled = false;
        }
    }

    loadMore() {
        const nextCount = Math.min(this.displayedCount + 12, this.filteredRecipes.length);
        const newRecipes = this.filteredRecipes.slice(this.displayedCount, nextCount);
        
        this.displayRecipes(newRecipes);
        this.displayedCount = nextCount;
        this.updateLoadMoreButton();
    }

    showToast(message, type) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ==================== PÁGINA INICIAL ====================
class IndexPage {
    init() {
        const popularRecipes = window.ReceitasData.obterPopulares();
        const grid = document.getElementById('popular-recipes-grid');
        
        if (grid) {
            grid.innerHTML = '';
            popularRecipes.forEach(recipe => {
                const card = RecipeCard.create(recipe);
                grid.appendChild(card);
            });
        }
    }
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa componentes básicos
    new ThemeManager();
    new MenuManager();
    
    // Solicita permissão para notificações
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
    
    // Inicializa página específica
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'receitas.html') {
        new RecipesPage();
    } else if (currentPage === 'index.html' || currentPage === '') {
        new IndexPage().init();
    } else if (currentPage === 'receita.html') {
        RecipeDetail.load();
    }
});