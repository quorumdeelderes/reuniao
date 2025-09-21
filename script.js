// Contador de Presença - Lógica JavaScript
class PresenceCounter {
    constructor() {
        this.counter = 0;
        this.init();
    }

    init() {
        // Elementos DOM
        this.counterDisplay = document.getElementById('counter');
        this.btnPlus = document.getElementById('btn-plus');
        this.btnMinus = document.getElementById('btn-minus');
        this.btnReset = document.getElementById('btn-reset');
        this.btnSend = document.getElementById('btn-send');

        // Modal elements
        this.modal = document.getElementById('whatsappModal');
        this.closeModal = document.querySelector('.close');
        this.btnBack = document.getElementById('btn-back');
        this.btnConfirmSend = document.getElementById('btn-confirm-send');
        this.phoneInput = document.getElementById('phoneNumber');
        this.messageInput = document.getElementById('message');
        this.totalCountDisplay = document.getElementById('totalCount');

        // Event listeners
        this.btnPlus.addEventListener('click', () => this.increment());
        this.btnMinus.addEventListener('click', () => this.decrement());
        this.btnReset.addEventListener('click', () => this.reset());
        this.btnSend.addEventListener('click', () => this.openWhatsAppModal());

        this.closeModal.addEventListener('click', () => this.closeModalWindow());
        this.btnBack.addEventListener('click', () => this.closeModalWindow());
        this.btnConfirmSend.addEventListener('click', () => this.sendWhatsApp());

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModalWindow();
            }
        });

        // Permitir usar Enter no campo de telefone
        this.phoneInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendWhatsApp();
            }
        });

        this.updateDisplay();
    }

    increment() {
        this.counter++;
        this.updateDisplay();
        this.animateCounter('+');
    }

    decrement() {
        if (this.counter > 0) {
            this.counter--;
            this.updateDisplay();
            this.animateCounter('-');
        }
    }

    reset() {
        this.counter = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        this.counterDisplay.textContent = this.counter;
        this.counterDisplay.className = this.counter > 0 ? 'positive' : '';
    }

    animateCounter(operation) {
        this.counterDisplay.style.transform = 'scale(1.1)';
        this.counterDisplay.style.transition = 'transform 0.2s';

        setTimeout(() => {
            this.counterDisplay.style.transform = 'scale(1)';
        }, 200);
    }

    openWhatsAppModal() {
        if (this.counter === 0) {
            alert('Conte algumas presenças antes de enviar!');
            return;
        }

        this.totalCountDisplay.textContent = this.counter;
        this.phoneInput.value = '';
        this.messageInput.value = '';
        this.modal.style.display = 'block';
        this.phoneInput.focus();
    }

    closeModalWindow() {
        this.modal.style.display = 'none';
    }

    sendWhatsApp() {
        const phoneNumber = this.phoneInput.value.trim();
        const customMessage = this.messageInput.value.trim();

        if (!phoneNumber) {
            alert('Por favor, digite o número do WhatsApp!');
            this.phoneInput.focus();
            return;
        }

        // Validar formato do número (básico)
        const cleanNumber = phoneNumber.replace(/\D/g, '');
        if (cleanNumber.length < 10 || cleanNumber.length > 15) {
            alert('Número inválido! Digite um número válido com código do país.');
            this.phoneInput.focus();
            return;
        }

        // Criar mensagem padrão
        let message = `Contagem de Presença: ${this.counter} pessoa(s)`;

        // Adicionar mensagem personalizada se houver
        if (customMessage) {
            message += `\n\n${customMessage}`;
        }

        // Codificar mensagem para URL
        const encodedMessage = encodeURIComponent(message);

        // Abrir WhatsApp
        const whatsappURL = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

        // Abrir em nova aba/janela
        window.open(whatsappURL, '_blank');

        // Fechar modal
        this.closeModalWindow();

        // Perguntar se quer enviar para outra pessoa
        setTimeout(() => {
            if (confirm('Deseja enviar para outra pessoa?')) {
                this.openWhatsAppModal();
            } else {
                this.reset();
            }
        }, 1000);
    }
}

// Inicializar quando o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    new PresenceCounter();
});
