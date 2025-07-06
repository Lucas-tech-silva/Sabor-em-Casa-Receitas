# 📁 Estrutura Modular JavaScript

## 🎯 Arquivos Criados

### 📝 `contact-form.js`
**Responsabilidade**: Formulário de contato com validação
- ✅ Validação em tempo real
- ✅ Mensagens de erro visuais
- ✅ Integração com FormSubmit
- ✅ Prevenção de envio duplicado

**Classes**:
- `ContactForm`: Gerencia validação e envio

### 🔧 `action-buttons.js`
**Responsabilidade**: Botões de ação das receitas
- ✅ Timer de cozinha
- ✅ Impressão de receitas
- ✅ Compartilhamento
- ✅ Sistema de favoritos

**Classes**:
- `TimerManager`: Timer com controles
- `PrintService`: Geração de versão para impressão
- `ShareService`: Compartilhamento nativo/fallback
- `FavoritesManager`: Gerenciamento de favoritos

### 🏠 `main.js`
**Responsabilidade**: Lógica principal do site
- ✅ Gerenciamento de temas
- ✅ Menu hamburger
- ✅ Páginas e navegação
- ✅ Cards de receitas

**Classes**:
- `ThemeManager`: Tema escuro/claro
- `MenuManager`: Menu responsivo
- `RecipeCard`: Componente de card
- `RecipeDetail`: Página de detalhes
- `RecipesPage`: Página principal
- `IndexPage`: Página inicial

### 📊 `receitas-data.js`
**Responsabilidade**: Banco de dados das receitas
- ✅ 20 receitas completas
- ✅ Métodos de busca e filtro
- ✅ Dados estruturados

## 🔗 Dependências

```
main.js
├── action-buttons.js (timer, favorites)
├── receitas-data.js (dados)
└── contact-form.js (apenas em contato.html)
```

## 📋 Validação de Formulário

### Campos Validados
- **Nome**: Obrigatório, mín. 2 caracteres
- **E-mail**: Obrigatório, formato válido
- **Mensagem**: Obrigatória, mín. 10 caracteres

### Estados Visuais
```css
.error { border-color: #e74c3c; }
.error-message { color: #e74c3c; }
```

### FormSubmit
- URL: `https://formsubmit.co/contato@saboremcasa.com`
- Envio único após validação
- Loading state durante envio

## 🎮 Uso dos Módulos

### HTML
```html
<script src="../js/receitas-data.js"></script>
<script src="../js/action-buttons.js"></script>
<script src="../js/main.js"></script>

<!-- Apenas em contato.html -->
<script src="../js/contact-form.js"></script>
```

### JavaScript
```javascript
// Instâncias globais disponíveis
timer.show(30);              // Timer
favorites.toggle('1');       // Favoritos
PrintService.print('1');     // Impressão
ShareService.share('1', 'Nome'); // Compartilhar
```

## 🔧 Manutenção

### Adicionar Nova Receita
Edite `receitas-data.js`:
```javascript
{
    id: '21',
    nome: 'Nova Receita',
    // ... dados completos
}
```

### Modificar Validação
Edite `contact-form.js` método `validateField()`:
```javascript
case 'novocampo':
    // lógica de validação
    break;
```

### Adicionar Novo Botão
Edite `action-buttons.js`:
```javascript
class NovoService {
    static acao() {
        // implementação
    }
}
```

## ✅ Benefícios da Modularização

1. **Separação de responsabilidades**
2. **Código mais limpo e organizad**
3. **Fácil manutenção**
4. **Reutilização de componentes**
5. **Debug mais simples**
6. **Carregamento otimizado**