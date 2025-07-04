# 🍳 Sabor em Casa - Sistema de Receitas (Versão Atualizada)

## ✨ Principais Mudanças Implementadas

### 📱 Menu Hamburger Funcional
- **Corrigido**: Menu hamburger agora funciona perfeitamente no mobile
- **Animação**: Transição suave do ícone hamburger para X
- **Responsivo**: Menu lateral deslizante em dispositivos móveis
- **Auto-fechamento**: Menu fecha ao clicar em links ou fora da área

### 🗂️ Nova Estrutura de Arquivos

#### Arquivos Principais:
- `receitas-data.js` - Banco de dados das receitas manuais
- `script-novo.js` - JavaScript simplificado sem APIs
- `style.css` - Estilos atualizados com menu hamburger

#### Arquivos Removidos/Substituídos:
- `config.js` - Não mais necessário
- `script.js` - Substituído por `script-novo.js`

## 🍽️ Receitas Incluídas (20 receitas completas)

### Sobremesas
1. **Bolo de Chocolate** - 45 min, Médio
2. **Brigadeiro Gourmet** - 20 min, Fácil
3. **Torta de Limão** - 30 min, Médio
4. **Pudim de Leite Condensado** - 60 min, Médio
5. **Mousse de Maracujá** - 15 min, Fácil
6. **Cookies de Aveia** - 25 min, Fácil

### Pratos Principais
7. **Frango Parmegiana** - 35 min, Médio
8. **Lasanha Vegetariana** - 60 min, Médio
9. **Salmão com Aspargos** - 25 min, Médio
10. **Risoto de Cogumelos** - 40 min, Médio
11. **Macarrão Alho e Óleo** - 20 min, Fácil
12. **Quiche de Legumes** - 45 min, Médio
13. **Ratatouille** - 50 min, Médio

### Lanches e Café da Manhã
14. **Pão de Queijo** - 30 min, Fácil
15. **Wrap de Frango** - 20 min, Fácil
16. **Omelete Simples** - 10 min, Fácil
17. **Panqueca de Banana** - 15 min, Fácil

### Outros
18. **Salada Caesar** - 15 min, Fácil
19. **Sopa de Legumes** - 40 min, Fácil
20. **Smoothie Verde** - 5 min, Fácil

## 🔧 Funcionalidades Mantidas

### ✅ Sistema de Favoritos
- Salva receitas favoritas no localStorage
- Receitas favoritas aparecem no topo da lista
- Coração vermelho indica receitas favoritadas

### ✅ Sistema de Timer
- Timer personalizado para cada receita
- Controles: Iniciar, Pausar, Resetar
- Notificação sonora e visual quando termina
- Funciona mesmo navegando entre páginas

### ✅ Sistema de Impressão
- Versão otimizada para impressão
- Layout limpo e organizado
- Inclui todos os ingredientes e instruções

### ✅ Sistema de Compartilhamento
- Compartilhamento nativo (quando disponível)
- Fallback para copiar link
- URLs específicas para cada receita

### ✅ Filtros e Busca
- Busca por nome da receita
- Busca por ingredientes
- Filtro por categoria
- Filtro por tempo de preparo
- Filtro por dificuldade

### ✅ Tema Escuro/Claro
- Alternância entre temas
- Preferência salva no localStorage
- Ícone dinâmico (lua/sol)

## 📱 Melhorias de Responsividade

### Menu Mobile
```css
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.nav-menu.active {
    left: 0;
}
```

### Layout Adaptativo
- Grid responsivo para cards de receitas
- Imagens otimizadas com lazy loading
- Botões touch-friendly em dispositivos móveis

## 🚀 Como Usar

### Instalação
1. Baixe todos os arquivos
2. Abra `index.html` em um navegador
3. Navegue pelas funcionalidades

### Estrutura de Navegação
- **Home**: Receitas populares e apresentação
- **Receitas**: Catálogo completo com filtros
- **Receita Individual**: Detalhes completos
- **Sobre**: Informações do projeto
- **Contato**: Formulário de contato

## 🎯 Benefícios da Nova Versão

### Performance
- ⚡ Carregamento mais rápido (sem APIs externas)
- 📱 Menu mobile totalmente funcional
- 🔄 Sem dependências de internet para funcionar

### Manutenibilidade
- 📝 Receitas facilmente editáveis no arquivo `receitas-data.js`
- 🧹 Código mais limpo e organizado
- 🔧 Fácil adição de novas receitas

### Experiência do Usuário
- 📱 Menu hamburger funcional no mobile
- 🎨 Design mantido e melhorado
- ⚡ Resposta instantânea (sem delays de API)

## 📁 Estrutura Final de Arquivos

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

## 🔄 Migração dos Dados

As receitas foram cuidadosamente selecionadas e organizadas com:
- **Ingredientes detalhados** com quantidades específicas
- **Instruções passo a passo** claras e objetivas
- **Tempos realistas** baseados na complexidade
- **Categorização adequada** para facilitar filtros
- **Imagens correspondentes** já disponíveis na pasta assets

## 🎨 Personalização

### Adicionar Nova Receita
Edite o arquivo `receitas-data.js`:

```javascript
{
    id: '21',
    nome: 'Nova Receita',
    imagem: 'assets/nova-receita.jpg',
    categoria: 'Categoria',
    tempo: 30,
    dificuldade: 'Médio',
    ingredientes: [
        { quantidade: '1 xícara', item: 'Ingrediente 1' },
        // ...
    ],
    instrucoes: [
        'Passo 1...',
        'Passo 2...',
        // ...
    ]
}
```

### Personalizar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #2c3e50;
    /* ... outras cores */
}
```

---

**Desenvolvido com ❤️ - Versão atualizada sem APIs externas e com menu mobile funcional!**