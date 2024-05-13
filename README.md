# Privacy-Monitor

# Privacy Monitor

Privacy Monitor é uma extensão do navegador Firefox projetada para ajudar os usuários a entender e monitorar questões de privacidade enquanto navegam na web. Ela detecta e apresenta informações sobre conexões de terceiros, armazenamento de dados locais, cookies (incluindo supercookies), tentativas de fingerprinting de canvas, e potenciais ameaças de sequestro de navegador.

## Funcionalidades

- **Conexões de Terceiros**: Detecta e lista todas as conexões a domínios de terceiros durante a navegação.
- **Armazenamento de Dados Local**: Monitora e exibe detalhes sobre dados armazenados localmente no navegador (HTML5 Local Storage).
- **Cookies e Supercookies**: Identifica e mostra cookies de primeira e terceira parte, incluindo supercookies.
- **Detecção de Canvas Fingerprint**: Alerta sobre tentativas de fingerprinting através do elemento canvas do HTML.

## Instalação

### Pré-requisitos

Antes de instalar a extensão, certifique-se de que você tem o Firefox instalado no seu computador.

### Passos para Instalação

1. Clone ou baixe o repositório da extensão para o seu computador.
2. Abra o Firefox e digite `about:debugging` na barra de endereços.
3. Clique em "This Firefox" (ou "Este Firefox").
4. Clique em "Load Temporary Add-on" e selecione o arquivo `manifest.json` dentro da pasta do projeto baixado.

## Como Usar

Após instalar a extensão, um ícone aparecerá na barra de ferramentas do Firefox. Clique neste ícone para abrir o popup que exibe as informações monitoradas:

- A aba **Third-Party Domains** lista todos os domínios de terceiros acessados.
- A aba **Local Storage** mostra todos os dados armazenados pelo site no navegador.
- A aba **Cookies** exibe os cookies detectados e suas propriedades.
- A aba **Canvas Fingerprint** informa se houve tentativas de uso de fingerprinting de canvas.

## Contribuindo

Contribuições são sempre bem-vindas! Seja adicionando novas funcionalidades, corrigindo bugs, ou melhorando a documentação, sinta-se à vontade para criar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo `LICENSE` para detalhes.

## Contato

Para mais informações, por favor, entre em contato através de [seu-email@example.com].
