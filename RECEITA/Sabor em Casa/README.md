# 🍳 Sabor em Casa - Sistema de Receitas

Um site completo de receitas com funcionalidades avançadas, desenvolvido com HTML5 semântico, CSS3 moderno e JavaScript ES6+ modularizado.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com acessibilidade
- **CSS3**: Estilização avançada com variáveis CSS e responsividade
- **JavaScript ES6+**: Código modularizado com classes e async/await
- **APIs Externas**:
  - TheMealDB para dados de receitas
  - LibreTranslate para tradução automática
- **Web APIs**: Notifications, Clipboard, Share, LocalStorage

## ✨ Funcionalidades Implementadas

### 💖 1. Sistema de Favoritos
- **Coração em cada card**: Clique para favoritar/desfavoritar
- **Persistência**: Favoritos salvos no localStorage
- **Ordenação**: Receitas favoritas aparecem no topo
- **Feedback visual**: Coração vermelho para favoritos

### 👁️ 2. Visualização Completa de Receitas
- **Botão "Ver Receita Completa"** em cada card
- **Página dedicada** (receita.html) com:
  - Título e imagem da receita
  - Ingredientes organizados
  - Instruções passo a passo
  - Tempo estimado e dificuldade
  - Botões de ação (Favoritar, Imprimir, Timer, Compartilhar)

### 🖨️ 3. Sistema de Impressão
- **Botão "Imprimir"** em cada receita
- **Nova aba** com versão otimizada para impressão
- **Design limpo**: Fundo branco, tipografia clara
- **Otimizado para A4**: Layout responsivo para impressão
- **Botões de ação**: Imprimir e Fechar

### ⏰ 4. Timer Inteligente
- **Tempo estimado automático** baseado na categoria:
  - Saladas: 15 min
  - Bolos: 45 min
  - Carnes: 60 min
  - Frango: 35 min
  - Frutos do mar: 25 min
- **Modal interativo** com:
  - Campo ajustável de tempo (+ / -)
  - Botões: Iniciar, Pausar, Resetar
  - Display em tempo real
- **Persistência**: Timer continua mesmo navegando entre páginas
- **Notificações**: Som e alerta visual quando termina
- **Notificação do navegador**: Se permitida pelo usuário

### 📤 5. Sistema de Compartilhamento
- **API nativa**: Usa navigator.share() quando disponível
- **Fallback inteligente**: Copia link para área de transferência
- **Toast de confirmação**: Feedback visual do compartilhamento
- **URLs dinâmicas**: Link específico para cada receita

### 🔍 6. Renderização Dinâmica
- **API TheMealDB**: Busca até 100 receitas reais
- **Busca inteligente**: Por nome ou ingrediente
- **Filtros avançados**:
  - Categoria (traduzida para português)
  - Tempo de preparo
  - Dificuldade
- **Carregamento progressivo**: "Carregar Mais" receitas
- **Tradução automática**: Categorias em português

### 🎨 7. Recursos Extras
- **Toasts coloridos**: Feedback para todas as ações
- **Tema escuro/claro**: Toggle no header
- **Responsivo**: Funciona em todos os dispositivos
- **Animações suaves**: Transições e efeitos visuais
- **Loading states**: Indicadores de carregamento

## 🚀 Como Usar

### Instalação
1. Clone ou baixe os arquivos
2. Abra `index.html` em um navegador
3. Navegue pelas funcionalidades

### Navegação
- **Home**: Receitas populares e apresentação
- **Receitas**: Catálogo completo com filtros
- **Receita individual**: Detalhes completos
- **Sobre**: Informações do projeto
- **Contato**: Formulário de contato

### Funcionalidades Principais

#### Favoritar Receitas
1. Clique no ❤️ em qualquer card de receita
2. Receitas favoritas ficam no topo da lista
3. Favoritos são salvos automaticamente

#### Ver Receita Completa
1. Clique em "Ver Receita Completa"
2. Visualize ingredientes e instruções
3. Use os botões de ação disponíveis

#### Imprimir Receita
1. Clique no botão "Imprimir" 🖨️
2. Nova aba abre com versão para impressão
3. Use Ctrl+P ou clique em "Imprimir"

#### Usar Timer
1. Clique no botão "Timer" ⏰
2. Ajuste o tempo desejado (+ / -)
3. Clique "Iniciar" ▶️
4. Timer funciona mesmo mudando de página

#### Compartilhar Receita
1. Clique no botão "Compartilhar" 📤
2. Use o menu nativo ou copie o link
3. Compartilhe com amigos e família

## 🌍 3. Internacionalização (i18n)
- **Tradução automática**: LibreTranslate API para textos em inglês
- **Categorias traduzidas**: Mapeamento manual para melhor precisão
- **Interface em português**: Todas as mensagens localizadas
- **Cache de traduções**: Evita chamadas desnecessárias à API

## 🧠 8. Lógica Inteligente
- **Tempos estimados reais**: Baseados em dados confiáveis por categoria
- **Dificuldade inteligente**: Análise por palavras-chave e complexidade
- **Busca combinada**: Nome e ingredientes simultaneamente
- **Cache local**: Reduz chamadas repetidas à API

## 📱 9. Design e Usabilidade
- **Mobile-first**: Design otimizado para dispositivos móveis
- **Acessibilidade**: ARIA labels, foco visível, contraste adequado
- **SEO básico**: HTML semântico com tags apropriadas
- **Animações suaves**: Transições CSS para melhor UX
- **Código modular**: JavaScript organizado em classes e módulos

## 📱 Compatibilidade

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS/Android)
- ✅ Tablets

## 🎯 Recursos Técnicos

### Performance
- **Lazy loading**: Imagens carregadas sob demanda
- **Debounce**: Busca otimizada (500ms)
- **Paginação**: Carregamento progressivo

### Acessibilidade
- **ARIA labels**: Botões com descrições
- **Keyboard navigation**: Navegação por teclado
- **Alt texts**: Imagens com descrições
- **Focus indicators**: Indicadores visuais

### Responsividade
- **Mobile-first**: Design otimizado para mobile
- **Breakpoints**: 768px e 480px
- **Grid flexível**: Layout adaptativo
- **Touch-friendly**: Botões adequados para touch

## 🔧 Personalização

### Configuração Centralizada
Edite o arquivo `config.js` para personalizar:

```javascript
// Tempos estimados por categoria
estimatedTimes: {
    'salad': 15,
    'chicken': 35,
    'beef': 60,
    // ...
},

// Mensagens da interface
messages: {
    loading: 'Carregando...',
    favoriteAdded: 'Receita adicionada aos favoritos! ❤️',
    // ...
},

// Configurações de UI
ui: {
    debounceDelay: 500,
    toastDuration: 3000,
    animationDuration: 300
}
```

### Cores e Temas
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #2c3e50;
    /* ... outras cores */
}
```

## 📄 Estrutura de Arquivos

```
SABOR EM CASA/
├── 📁 assets/                 # Imagens, ícones, fontes, etc.
│   ├── img/                  # Imagens das receitas
│   └── logo.svg              # Logo do projeto
│
├── 📁 css/
│   └── style.css             # Estilos principais (ou main.css)
│
├── 📁 js/                    # JavaScript modularizado
│   ├── script.js             # Script principal (ou main.js)
│   ├── receitas-data.js      # Banco de dados de receitas (modo offline)
│   ├── api.js                # Comunicação com TheMealDB + Tradução
│   ├── theme.js              # Tema escuro/claro
│   ├── toast.js              # Sistema de notificações
│   ├── favorites.js          # Lógica de favoritos
│   ├── timer.js              # Timer de receitas
│   ├── share.js              # Compartilhamento
│   └── print.js              # Impressão de receitas
│
├── 📁 pages/                 # HTMLs separados por funcionalidade
│   ├── index.html            # Página inicial
│   ├── receitas.html         # Catálogo de receitas
│   ├── receita.html          # Página de detalhes da receita
│   ├── sobre.html            # Página sobre o projeto
│   └── contato.html          # Página de contato
│
├── README.md                 # Documentação principal
├── README-ATUALIZADO.md      # Versão extendida/documentação técnica
```

## 🏗️ Arquitetura do Código

### Classes Principais
- **CacheManager**: Gerenciamento de cache local
- **TranslationService**: Tradução automática de textos
- **ToastManager**: Sistema de notificações
- **ThemeManager**: Alternância de temas
- **APIService**: Comunicação com APIs externas
- **FavoritesManager**: Sistema de favoritos
- **TimerManager**: Timer de cozinha
- **RecipeLogic**: Lógica de receitas (tempo, dificuldade)
- **RecipeCard**: Componente de card de receita
- **PrintService**: Sistema de impressão
- **ShareService**: Compartilhamento de receitas
- **RecipeDetail**: Página de detalhes
- **RecipesPage**: Página principal de receitas
- **IndexPage**: Página inicial

## 🤝 Contribuição

Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Contribuir com código
- Compartilhar feedback

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@saboremcasa.com
- Issues no GitHub
- Documentação inline no código

## 🔍 Funcionalidades Técnicas Avançadas

### Cache Inteligente
- Cache em memória com expiração automática
- Reduz chamadas desnecessárias às APIs
- Melhora performance e experiência do usuário

### Tradução Automática
- Integração com LibreTranslate (gratuita e open-source)
- Cache de traduções para evitar repetições
- Fallback para traduções manuais quando necessário

### Acessibilidade
- ARIA labels em todos os elementos interativos
- Navegação por teclado completa
- Contraste adequado para leitura
- Screen reader friendly

### Performance
- Lazy loading de imagens
- Debounce em buscas para evitar spam
- Paginação inteligente
- Código modularizado para melhor manutenção

---

**Desenvolvido com ❤️ usando tecnologias modernas para tornar a culinária mais acessível e divertida!**