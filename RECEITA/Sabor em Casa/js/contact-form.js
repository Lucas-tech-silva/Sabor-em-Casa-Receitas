// ==================== FORMULÁRIO DE CONTATO ====================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.isSubmitting = false;
        this.init();
    }

    init() {
        if (!this.form) return;
        this.setupValidation();
        this.setupSubmission();
    }

    setupValidation() {
        const fields = ['name', 'email', 'message'];
        
        fields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                field.addEventListener('blur', () => this.validateField(fieldName));
                field.addEventListener('input', () => this.clearError(fieldName));
            }
        });
    }

    validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (!field || !errorElement) return true;

        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (!field.value.trim()) {
                    errorMessage = 'Nome é obrigatório';
                    isValid = false;
                } else if (field.value.trim().length < 2) {
                    errorMessage = 'Nome deve ter pelo menos 2 caracteres';
                    isValid = false;
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!field.value.trim()) {
                    errorMessage = 'E-mail é obrigatório';
                    isValid = false;
                } else if (!emailRegex.test(field.value)) {
                    errorMessage = 'Ops! Parece que o e-mail está inválido.';
                    isValid = false;
                }
                break;

            case 'message':
                if (!field.value.trim()) {
                    errorMessage = 'Mensagem é obrigatória';
                    isValid = false;
                } else if (field.value.trim().length < 10) {
                    errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
                    isValid = false;
                }
                break;
        }

        if (isValid) {
            field.classList.remove('error');
            errorElement.textContent = '';
        } else {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
        }

        return isValid;
    }

    clearError(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (field && errorElement) {
            field.classList.remove('error');
            errorElement.textContent = '';
        }
    }

    validateForm() {
        const fields = ['name', 'email', 'message'];
        let isFormValid = true;

        fields.forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    setupSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (this.isSubmitting) return;
            
            if (!this.validateForm()) {
                this.showToast('Por favor, corrija os erros no formulário', 'error');
                return;
            }

            await this.submitForm();
        });
    }

    async submitForm() {
        this.isSubmitting = true;
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Mostra loading - AGORA FUNCIONANDO CORRETAMENTE
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Força o navegador a atualizar o DOM antes do envio
        await new Promise(resolve => setTimeout(resolve, 50));

        try {
            const formData = new FormData(this.form);
            
            // Adiciona parâmetros necessários para o FormSubmit
            formData.append('_captcha', 'false');
            formData.append('_subject', 'Novo Contato do Sabor em Casa');
            formData.append('_template', 'box');
            formData.append('_next', window.location.href.includes('?') 
                ? window.location.href.split('?')[0] + '?success=true' 
                : window.location.href + '?success=true');
            
            // Envia usando Fetch API
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showToast('Mensagem enviada com sucesso! Responderemos em breve.', 'success');
                this.form.reset();
                this.clearAllErrors();
                
                // Redireciona após 3 segundos para ver o feedback
                setTimeout(() => {
                    window.location.href = formData.get('_next');
                }, 3000);
            } else {
                throw new Error('Erro no envio');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            this.showToast('Erro ao enviar mensagem. Tente novamente.', 'error');
        } finally {
            // Restaura botão apenas se ainda estiver na mesma página
            if (!window.location.href.includes('?success=true')) {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
            this.isSubmitting = false;
        }
    }

    clearAllErrors() {
        const fields = ['name', 'email', 'message'];
        fields.forEach(fieldName => this.clearError(fieldName));
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

// Inicialização otimizada
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
    
    // Exibe mensagem de sucesso se veio de um redirecionamento
    if (window.location.href.includes('?success=true')) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = 'Mensagem enviada com sucesso! Responderemos em breve.';
            toast.className = 'toast success show';
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    }
});