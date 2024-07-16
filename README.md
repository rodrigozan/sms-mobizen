# SMS Service

Um pacote npm para facilitar o envio de mensagens SMS utilizando o serviço da Mobizen.

## Instalação

Para instalar e utilizar este pacote em seu projeto, você pode executar o seguinte comando npm:

```bash
npm install nome-do-seu-pacote
```

## Uso

Para utilizar o serviço de SMS, importe e instancie a classe `SmsService`, passando as configurações necessárias:

```typescript
import SmsService from 'sms-mobizen';

const smsService = new SmsService(apiKey, apiServer, apiVersion, format);

// Exemplo de envio de SMS
const recipients = ['+5511987654321'];
const text = 'Olá, mundo!';
smsService.sendSms(recipients, text)
  .then(results => {
    console.log('Mensagens enviadas com sucesso:', results);
  })
  .catch(error => {
    console.error('Erro ao enviar mensagens:', error);
  });
```

Certifique-se de substituir `apiKey`, `apiServer`, `apiVersion` e `format` pelos seus valores específicos da Mobizen.

## Configuração

Antes de utilizar o serviço, certifique-se de configurar corretamente as variáveis de ambiente ou constantes de configuração no seu projeto conforme necessário.

## Contribuição

Contribuições são bem-vindas! Se você encontrou algum problema ou deseja melhorar este pacote, sinta-se à vontade para abrir uma issue ou enviar um pull request no GitHub.

## Licença

Este projeto está licenciado sob a [MIT License]([link-para-sua-licenca](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)).

## Author

Desenvolvido por [Rodrigo Zan](https://github.com/rodrigozan)


