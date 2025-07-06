// ==================== BOTÕES DE AÇÃO ====================

// ==================== SISTEMA DE TIMER ====================
class TimerManager {
    constructor() {
        this.interval = null;
        this.modal = null;
        this.floatingInterval = null;
        this.isRunning = false;
        this.createModal();
        this.checkExistingTimer();
    }

    checkExistingTimer() {
        // Verifica se já existe um timer ativo
        const timerData = localStorage.getItem('activeTimer');
        if (timerData) {
            const data = JSON.parse(timerData);
            const elapsed = Math.floor((Date.now() - data.startTime) / 1000);
            const remaining = data.totalSeconds - elapsed;

            if (remaining > 0) {
                this.restoreTimer(remaining);
            } else {
                localStorage.removeItem('activeTimer');
            }
        }
    }

    restoreTimer(seconds) {
        this.createFloatingTimer(Math.ceil(seconds / 60), seconds);
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.innerHTML = `
            <div class="timer-modal-content">
            <h2 class="text-xl font-semibold mb-4">⏰ Timer da Receita</h2>
            <div class="timer-setup">
                <label class="block mb-2">Tempo (minutos):</label>
                <div class="flex items-center justify-center gap-2.5 my-2.5">
                <button class="btn btn-outline" onclick="timer.adjust(-1)">-</button>
                <input type="number" id="timer-input" min="1" max="999" value="25" class="w-20 text-center text-lg">
                <button class="btn btn-outline" onclick="timer.adjust(1)">+</button>
                </div>
            </div>
            <div class="timer-display text-3xl text-center mb-6" id="timer-display">00:00</div>
            <div class="timer-controls flex justify-center gap-4">
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
        const input = document.getElementById('timer-input');
        if (!input) return;

        const minutes = parseInt(input.value) || 25;
        this.createFloatingTimer(minutes);
        this.close(); // Fecha o modal
        this.showToast(`Timer iniciado: ${minutes} minutos`, 'success');
    }

    createFloatingTimer(minutes, startSeconds = null) {
        // Remove timer existente se houver
        const existingTimer = document.getElementById('mini-timer');
        if (existingTimer) {
            existingTimer.remove();
        }

        let seconds = startSeconds || (minutes * 60);
        const totalSeconds = minutes * 60;
        this.isRunning = true;

        // Salva no localStorage
        localStorage.setItem('activeTimer', JSON.stringify({
            startTime: Date.now(),
            totalSeconds: totalSeconds,
            remainingSeconds: seconds
        }));

        // Cria o timer minimalista
        const miniTimer = document.createElement('div');
        miniTimer.id = 'mini-timer';
        miniTimer.className = 'mini-timer';
        miniTimer.innerHTML = `
            <div class="time">${this.formatTime(seconds)}</div>
            <div class="controls">
                <button onclick="timer.toggleTimer()" title="Pausar/Continuar">⏸️</button>
                <button onclick="timer.closeTimer()" title="Fechar">✕</button>
            </div>
        `;

        document.body.appendChild(miniTimer);

        // Inicia a contagem
        this.floatingInterval = setInterval(() => {
            if (this.isRunning) {
                seconds--;
                const display = miniTimer.querySelector('.time');
                display.textContent = this.formatTime(seconds);

                // Atualiza localStorage
                localStorage.setItem('activeTimer', JSON.stringify({
                    startTime: Date.now() - ((totalSeconds - seconds) * 1000),
                    totalSeconds: totalSeconds,
                    remainingSeconds: seconds
                }));

                if (seconds <= 0) {
                    this.finishTimer();
                }
            }
        }, 1000);
    }

    toggleTimer() {
        this.isRunning = !this.isRunning;
        const btn = document.querySelector('#mini-timer .controls button');
        if (btn) {
            btn.innerHTML = this.isRunning ? '⏸️' : '▶️';
            btn.title = this.isRunning ? 'Pausar' : 'Continuar';
        }
        this.showToast(this.isRunning ? 'Timer retomado' : 'Timer pausado', 'info');
    }

    closeTimer() {
        if (this.floatingInterval) {
            clearInterval(this.floatingInterval);
            this.floatingInterval = null;
        }
        const miniTimer = document.getElementById('mini-timer');
        if (miniTimer) {
            miniTimer.remove();
        }
        this.isRunning = false;
        localStorage.removeItem('activeTimer');
    }

    finishTimer() {
        clearInterval(this.floatingInterval);
        this.floatingInterval = null;
        this.isRunning = false;
        localStorage.removeItem('activeTimer');

        const miniTimer = document.getElementById('mini-timer');
        if (miniTimer) {
            const display = miniTimer.querySelector('.time');
            display.textContent = '⏰ PRONTO!';
            miniTimer.style.background = '#e74c3c';
            miniTimer.style.animation = 'pulse 1s infinite';
        }

        this.playSound();
        this.showToast('⏰ TEMPO ESGOTADO! Sua receita está pronta!', 'success');

        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('⏰ Timer Finalizado!', {
                body: 'Sua receita está pronta! Verifique o resultado.',
                icon: '../assets/ICon.svg'
            });
        }

        // Remove o timer após 5 segundos
        setTimeout(() => this.closeTimer(), 5000);
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
                icon: '../assets/ICon.svg'
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

        // Salva receita para a página de impressão
        localStorage.setItem('printRecipe', JSON.stringify([recipe]));

        // Abre página de impressão e dispara impressão automaticamente
        const currentPath = window.location.pathname;
        const printPath = currentPath.includes('/pages/') ? 'print.html' : 'pages/print.html';
        const printWindow = window.open(`${printPath}?id=${recipeId}`, '_blank');

        // Aguarda carregar e dispara impressão
        printWindow.onload = () => {
            setTimeout(() => {
                printWindow.print();
            }, 1000);
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
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                    @media print { 
                        .print-actions { display: none !important; } 
                        body { padding: 0; margin: 0; }
                        .recipe-image { max-height: 200px; }
                    }
                </style>
            </head>
            <body class="bg-white text-gray-800 p-6">
                <!-- Cabeçalho com imagem -->
                <div class="text-center mb-8">
                    <div class="recipe-image mb-4">
                        <img src="${recipe.imagem}" alt="${recipe.nome}" class="mx-auto rounded-lg shadow-md max-w-md w-full h-48 object-cover">
                    </div>
                    <h1 class="text-4xl font-bold text-orange-500 mb-4">${recipe.nome}</h1>
                    <div class="flex justify-center gap-6 flex-wrap">
                        <span class="bg-gray-100 px-4 py-2 rounded-full font-medium">⏱️ ${recipe.tempo} min</span>
                        <span class="bg-gray-100 px-4 py-2 rounded-full font-medium">📊 ${recipe.dificuldade}</span>
                        <span class="bg-gray-100 px-4 py-2 rounded-full font-medium">🍽️ ${recipe.categoria}</span>
                    </div>
                </div>
                
                <!-- Botões de ação -->
                <div class="print-actions text-center mb-8">
                    <button onclick="window.print()" class="bg-orange-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-orange-600 transition">
                        🖨️ Imprimir
                    </button>
                    <button onclick="window.close()" class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition">
                        ❌ Fechar
                    </button>
                </div>
                
                <!-- Layout em duas colunas -->
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Ingredientes -->
                    <div class="bg-orange-50 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-500 pb-2">
                            📝 Ingredientes
                        </h2>
                        <div class="space-y-3">
                            ${recipe.ingredientes.map(item => `
                                <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                                    <span class="font-semibold text-orange-600">${item.quantidade}</span> 
                                    <span class="text-gray-700">${item.item}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Modo de preparo -->
                    <div>
                        <h2 class="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-500 pb-2">
                            👨‍🍳 Modo de Preparo
                        </h2>
                        <div class="space-y-4">
                            ${recipe.instrucoes.map((step, index) => `
                                <div class="flex items-start gap-4">
                                    <div class="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                                        ${index + 1}
                                    </div>
                                    <p class="text-gray-700 leading-relaxed">${step}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Dicas extras -->
                <div class="mt-8 bg-blue-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-blue-600 mb-3">💡 Dicas Extras</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>• Leia toda a receita antes de começar</li>
                        <li>• Prepare todos os ingredientes antes de iniciar</li>
                        <li>• Use ingredientes frescos para melhor sabor</li>
                        <li>• Ajuste temperos conforme seu gosto</li>
                    </ul>
                </div>
                
                <!-- Rodapé -->
                <div class="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500">
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
            url: `${window.location.origin}/pages/receita.html?id=${recipeId}`
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
        // Atualiza todos os botões de favoritos com este ID
        const buttons = document.querySelectorAll(`[data-recipe-id="${recipeId}"] .btn-favorite, .btn-favorite[data-id="${recipeId}"], .btn-favorite-card[data-id="${recipeId}"]`);
        const isFav = this.isFavorite(recipeId);

        buttons.forEach(btn => {
            if (isFav) {
                btn.classList.add('active');
                btn.style.setProperty('background-color', '#e74c3c', 'important');
                btn.style.setProperty('color', 'white', 'important');
            } else {
                btn.classList.remove('active');
                btn.style.setProperty('background-color', 'rgba(255, 255, 255, 0.95)', 'important');
                btn.style.setProperty('color', '#666', 'important');
            }
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

// ==================== INSTÂNCIAS GLOBAIS ====================
const timer = new TimerManager();
const favorites = new FavoritesManager();

// Torna o timer acessível globalmente
window.timer = timer;

// ==================== FUNÇÃO GLOBAL PARA FAVORITOS ====================
window.toggleFavorite = function (recipeId) {
    favorites.toggle(recipeId);
};