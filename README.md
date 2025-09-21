# Contador de Presença

Um contador simples e intuitivo para contar presenças que permite enviar o resultado via WhatsApp.

## Funcionalidades

- ✅ Contagem incremental com botões + e -
- ✅ Reset da contagem
- ✅ Envio do resultado via WhatsApp
- ✅ Interface moderna e responsiva
- ✅ Validação de números de telefone
- ✅ Mensagem personalizada opcional
- ✅ Opção de enviar para múltiplas pessoas

## Como Usar

1. **Contar presenças:**
   - Clique no botão **"+"** para adicionar uma presença
   - Clique no botão **"-"** para remover uma presença (se contar errado)
   - Clique em **"Zerar"** para resetar a contagem

2. **Enviar por WhatsApp:**
   - Clique em **"Enviar por WhatsApp"**
   - Digite o número do WhatsApp com código do país (ex: 5511999999999)
   - Adicione uma mensagem personalizada (opcional)
   - Clique em **"Enviar"**
   - O WhatsApp será aberto com a mensagem pronta
   - Escolha se deseja enviar para outra pessoa ou finalizar

## Formato do Número

- **Brasil:** 5511999999999 (código 55 + DDD + número)
- **Portugal:** 351911111111 (código 351 + número)
- **EUA:** 15551234567 (código 1 + número)

## Tecnologias Utilizadas

- HTML5
- CSS3 (com gradientes e animações)
- JavaScript ES6+ (classes)
- API do WhatsApp Web

## Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## Instalação

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Não é necessário servidor web ou instalação de dependências

## Estrutura dos Arquivos

```
contador/
├── index.html      # Interface principal
├── script.js       # Lógica JavaScript
├── style.css       # Estilos CSS
└── README.md       # Documentação
```

## Personalização

Você pode personalizar:
- Cores no arquivo `style.css`
- Mensagem padrão no arquivo `script.js`
- Funcionalidades adicionais conforme necessidade

## Suporte

Para suporte ou dúvidas, verifique se:
- O número está no formato correto
- O WhatsApp está instalado no dispositivo
- A conexão com internet está ativa
