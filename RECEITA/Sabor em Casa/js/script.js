// ==================== SISTEMA DE FAVORITOS ====================
class FavoritesManager {
    constructor() {
        this.favorites = this.load();
    }

    load() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    save() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    toggle(recipeId) {
        const index = this.favorites.indexOf(recipeId);
        
        if (index === -1) {
            this.favorites.push(recipeId);
            this.showToast('Receita adicionada aos favoritos! ❤️', 'success');
        } else {
            this.favorites.splice(index, 1);
            this.showToast('Receita removida dos favoritos', 'info');
        }
        
        this.save();
        this.updateUI(recipeId);
        return this.isFavorite(recipeId);
    }

    isFavorite(recipeId) {
        return this.favorites.includes(recipeId);
    }

    updateUI(recipeId) {
        const buttons = document.querySelectorAll(`[data-recipe-id="${recipeId}"] .btn-favorite`);
        const isFav = this.isFavorite(recipeId);
        
        buttons.forEach(btn => {
            btn.classList.toggle('active', isFav);
            btn.setAttribute('aria-label', isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
        });
    }

    sortRecipes(recipes) {
        return recipes.sort((a, b) => {
            const aIsFav = this.isFavorite(a.id);
            const bIsFav = this.isFavorite(b.id);
            if (aIsFav && !bIsFav) return -1;
            if (!aIsFav && bIsFav) return 1;
            return 0;
        });
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

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
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Fechar menu ao clicar em um link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Fechar menu ao clicar fora
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }
}

// ==================== SISTEMA DE TIMER ====================
class TimerManager {
    constructor() {
        this.interval = null;
        this.modal = null;
        this.createModal();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.innerHTML = `
            <div class="timer-modal-content">
                <h2>⏰ Timer da Receita</h2>
                <div class="timer-setup">
                    <label>Tempo (minutos):</label>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0;">
                        <button class="btn btn-outline" onclick="timer.adjust(-1)">-</button>
                        <input type="number" id="timer-input" min="1" max="999" value="25" 
                               style="width: 80px; text-align: center; font-size: 1.2rem;">
                        <button class="btn btn-outline" onclick="timer.adjust(1)">+</button>
                    </div>
                </div>
                <div class="timer-display" id="timer-display">00:00</div>
                <div class="timer-controls">
                    <button onclick="timer.start()" class="btn btn-primary">▶️ Iniciar</button>
                    <button onclick="timer.pause()" class="btn btn-secondary">⏸️ Pausar</button>
                    <button onclick="timer.reset()" class="btn btn-outline">🔄 Resetar</button>
                    <button onclick="timer.close()" class="btn btn-outline">❌ Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(this.modal);
    }

    show(minutes = 25) {
        const input = document.getElementById('timer-input');
        const display = document.getElementById('timer-display');
        
        input.value = minutes;
        display.textContent = this.formatTime(minutes * 60);
        this.modal.style.display = 'flex';
    }

    adjust(delta) {
        const input = document.getElementById('timer-input');
        const newValue = Math.max(1, Math.min(999, parseInt(input.value) + delta));
        input.value = newValue;
        
        if (!this.interval) {
            document.getElementById('timer-display').textContent = this.formatTime(newValue * 60);
        }
    }

    start() {
        const minutes = parseInt(document.getElementById('timer-input').value);
        let seconds = minutes * 60;
        const display = document.getElementById('timer-display');
        
        this.interval = setInterval(() => {
            seconds--;
            display.textContent = this.formatTime(seconds);
            
            if (seconds <= 0) {
                this.finish();
            }
        }, 1000);
        
        this.showToast(`Timer iniciado: ${minutes} minutos`, 'success');
    }

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.showToast('Timer pausado', 'warning');
        }
    }

    reset() {
        clearInterval(this.interval);
        this.interval = null;
        
        const minutes = parseInt(document.getElementById('timer-input').value);
        const display = document.getElementById('timer-display');
        
        display.textContent = this.formatTime(minutes * 60);
        display.style.color = '';
        display.style.animation = '';
        
        this.showToast('Timer resetado', 'info');
    }

    finish() {
        clearInterval(this.interval);
        this.interval = null;
        
        const display = document.getElementById('timer-display');
        display.textContent = '⏰ TEMPO!';
        display.style.color = '#e74c3c';
        display.style.animation = 'pulse 1s infinite';
        
        this.playSound();
        this.showToast('⏰ TEMPO ESGOTADO! Sua receita está pronta!', 'warning');
        
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('⏰ Timer Finalizado!', {
                body: 'Sua receita está pronta! Verifique o resultado.',
                icon: 'assets/ICon.svg'
            });
        }
    }

    close() {
        this.modal.style.display = 'none';
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    playSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            console.log('Áudio não suportado:', error);
        }
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

// ==================== SERVIÇO DE IMPRESSÃO ====================
class PrintService {
    static print(recipeId) {
        const recipe = window.ReceitasData.buscarPorId(recipeId);
        if (!recipe) {
            this.showToast('Erro ao carregar receita para impressão', 'error');
            return;
        }
        
        const printWindow = window.open('', '_blank');
        const content = this.generatePrintContent(recipe);
        
        printWindow.document.write(content);
        printWindow.document.close();
        
        printWindow.onload = () => {
            setTimeout(() => printWindow.print(), 500);
        };
        
        this.showToast('Abrindo versão para impressão...', 'info');
    }

    static generatePrintContent(recipe) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>${recipe.nome} - Sabor em Casa</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: white; padding: 20px; }
                    .print-header { text-align: center; margin-bottom: 30px; }
                    .print-title { color: #ff6b35; font-size: 2.5rem; margin-bottom: 10px; font-weight: bold; }
                    .print-meta { display: flex; justify-content: center; gap: 30px; margin: 20px 0; flex-wrap: wrap; }
                    .print-meta span { background: #f5f5f5; padding: 8px 16px; border-radius: 20px; font-weight: 500; }
                    .print-section { margin-bottom: 30px; }
                    .print-section-title { color: #ff6b35; font-size: 1.5rem; margin-bottom: 15px; border-bottom: 2px solid #ff6b35; padding-bottom: 5px; }
                    .print-ingredients { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px; }
                    .print-ingredient { padding: 8px; border: 1px solid #eee; border-radius: 5px; background: #fafafa; }
                    .print-instructions { list-style: none; counter-reset: step-counter; }
                    .print-instructions li { counter-increment: step-counter; margin-bottom: 15px; padding: 10px; background: #f9f9f9; border-left: 4px solid #ff6b35; position: relative; padding-left: 40px; }
                    .print-instructions li:before { content: counter(step-counter); position: absolute; left: 10px; top: 10px; background: #ff6b35; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem; }
                    .print-footer { margin-top: 40px; text-align: center; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
                    .print-actions { text-align: center; margin: 30px 0; }
                    .print-btn { background: #ff6b35; color: white; border: none; padding: 12px 24px; border-radius: 5px; cursor: pointer; font-size: 1rem; margin: 0 10px; }
                    @media print { .print-actions { display: none !important; } body { padding: 0; } }
                </style>
            </head>
            <body>
                <div class="print-header">
                    <h1 class="print-title">${recipe.nome}</h1>
                    <div class="print-meta">
                        <span>⏱️ ${recipe.tempo} minutos</span>
                        <span>📊 ${recipe.dificuldade}</span>
                        <span>🍽️ ${recipe.categoria}</span>
                    </div>
                </div>
                
                <div class="print-actions">
                    <button class="print-btn" onclick="window.print()">🖨️ Imprimir</button>
                    <button class="print-btn" onclick="window.close()">❌ Fechar</button>
                </div>
                
                <div class="print-section">
                    <h2 class="print-section-title">📝 Ingredientes</h2>
                    <div class="print-ingredients">
                        ${recipe.ingredientes.map(item => `
                            <div class="print-ingredient">
                                <strong>${item.quantidade}</strong> ${item.item}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="print-section">
                    <h2 class="print-section-title">👨‍🍳 Modo de Preparo</h2>
                    <ol class="print-instructions">
                        ${recipe.instrucoes.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="print-footer">
                    <p>Receita gerada em ${new Date().toLocaleDateString('pt-BR')} | Sabor em Casa</p>
                </div>
            </body>
            </html>
        `;
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

// ==================== SERVIÇO DE COMPARTILHAMENTO ====================
class ShareService {
    static async share(recipeId, recipeName) {
        const shareData = {
            title: `${recipeName} - Sabor em Casa`,
            text: `Confira esta receita incrível: ${recipeName}`,
            url: `${window.location.origin}/receita.html?id=${recipeId}`
        };
        
        try {
            if (navigator.share) {
                await navigator.share(shareData);
                this.showToast('Receita compartilhada com sucesso!', 'success');
            } else {
                await navigator.clipboard.writeText(shareData.url);
                this.showToast('Link copiado para área de transferência!', 'success');
            }
        } catch (error) {
            console.error('Share error:', error);
            this.fallbackCopy(shareData.url);
        }
    }

    static fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showToast('Link copiado para área de transferência!', 'success');
        } catch {
            this.showToast('Não foi possível compartilhar. Tente novamente.', 'error');
        }
        
        document.body.removeChild(textArea);
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

// ==================== COMPONENTE DE CARD ====================
class RecipeCard {
    static create(recipe) {
        const isFavorite = favorites.isFavorite(recipe.id);
        
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.setAttribute('data-recipe-id', recipe.id);
        
        card.innerHTML = `
            <div class="recipe-card-image">
                <img src="${recipe.imagem}" alt="${recipe.nome}" loading="lazy">
                <button class="btn-favorite btn-favorite-card ${isFavorite ? 'active' : ''}" 
                        onclick="favorites.toggle('${recipe.id}')"
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
                        <button class="btn btn-outline" onclick="timer.show(${recipe.tempo})" title="Timer">
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
        window.location.href = 'receita.html';
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
                        <img src="${recipe.imagem}" alt="${recipe.nome}">
                        <div class="recipe-actions">
                            <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                    onclick="favorites.toggle('${recipe.id}')">
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
                            <button onclick="timer.show(${recipe.tempo})" class="btn btn-outline">
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
        }
    }

    loadMore() {
        const nextCount = Math.min(this.displayedCount + 12, this.filteredRecipes.length);
        const newRecipes = this.filteredRecipes.slice(this.displayedCount, nextCount);
        
        this.displayRecipes(newRecipes);
        this.displayedCount = nextCount;
        this.updateLoadMoreButton();
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

// ==================== FORMULÁRIO DE CONTATO ====================
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Mostra loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simula envio
        setTimeout(() => {
            // Sucesso
            showToast('Mensagem enviada com sucesso! Responderemos em breve.', 'success');
            form.reset();
            
            // Restaura botão
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function showToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== INSTÂNCIAS GLOBAIS ====================
const favorites = new FavoritesManager();
const timer = new TimerManager();

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
    } else if (currentPage === 'contato.html') {
        setupContactForm();
    }
});