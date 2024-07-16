Aqui está a tradução do seu README.md para inglês, junto com algumas sugestões de melhorias:

```markdown
# SMS Mobizen

An npm package to simplify sending SMS messages using the Mobizen service.

## Installation

To install and use this package in your project, you can run the following npm command:

```bash
npm install sms-mobizen
```

Or if you prefer Yarn:

```bash
yarn add sms-mobizen
```

## Usage

To use the SMS service, import and instantiate the `SmsService` class, passing the necessary configurations:

Certainly! Here's how you can configure environment variables or configuration constants in your project for SMS Mobizen:

### Configuration using Environment Variables

1. **Environment Variables in the Terminal**:
   You can set environment variables directly in the terminal before starting your application. For example, on Linux/MacOS:

   ```bash
   export MOBIZEN_API_KEY='YOUR_MOBIZEN_TOKEN'
   export MOBIZEN_API_SERVER='https://api.mobizon.com.br'
   export MOBIZEN_API_VERSION='v1'
   export MOBIZEN_API_FORMAT='json'
   ```

   On Windows, the command is similar:

   ```bash
   set MOBIZEN_API_KEY=YOUR_MOBIZEN_TOKEN
   set MOBIZEN_API_SERVER=https://api.mobizon.com.br
   set MOBIZEN_API_VERSION=v1
   set MOBIZEN_API_FORMAT=json
   ```

   Then, your code can access these environment variables using `process.env`:

   ```typescript
   const apiKey = process.env.MOBIZEN_API_KEY;
   const apiServer = process.env.MOBIZEN_API_SERVER;
   const apiVersion = process.env.MOBIZEN_API_VERSION;
   const format = process.env.MOBIZEN_API_FORMAT;

   const smsService = new SmsService(apiKey, apiServer, apiVersion, format);

   // Now you can use smsService.sendSms(...) to send SMS
   ```

2. **Configuration in the `.env` file**:
   You can create a `.env` file at the root of your project to store your environment variables:

   ```plaintext
   MOBIZEN_API_KEY=YOUR_MOBIZEN_TOKEN
   MOBIZEN_API_SERVER=https://api.mobizon.com.br
   MOBIZEN_API_VERSION=v1
   MOBIZEN_API_FORMAT=json
   ```

   Then, you can use a library like `dotenv` to load these environment variables:

   ```typescript
   // Install dotenv: npm install dotenv
   import * as dotenv from 'dotenv';
   dotenv.config();

   const apiKey = process.env.MOBIZEN_API_KEY;
   const apiServer = process.env.MOBIZEN_API_SERVER;
   const apiVersion = process.env.MOBIZEN_API_VERSION;
   const format = process.env.MOBIZEN_API_FORMAT;

   const smsService = new SmsService(apiKey, apiServer, apiVersion, format);

   // Now you can use smsService.sendSms(...) to send SMS
   ```

### Configuration using Constants in the Code

If you prefer to configure variables directly in the code, you can create a configuration file (`config.ts`, for example) and import it where needed:

```typescript
// config.ts
export const config = {
    apiKey: 'YOUR_MOBIZEN_TOKEN',
    apiServer: 'https://api.mobizon.com.br',
    apiVersion: 'v1',
    format: 'json',
};

// In your service or where you need to configure SMS
import { config } from './config';

const smsService = new SmsService(config.apiKey, config.apiServer, config.apiVersion, config.format);

// Now you can use smsService.sendSms(...) to send SMS
```

### Sending SMS

```typescript
import SmsMobizen from 'sms-mobizen';

const smsMobizen = new SmsMobizen(apiKey, apiServer, apiVersion, format);

// Example of sending SMS
const recipients = ['+5511987654321'];
const text = 'Hello, world!';
smsMobizen.sendSms(recipients, text)
  .then(results => {
    console.log('Messages sent successfully:', results);
  })
  .catch(error => {
    console.error('Error sending messages:', error);
  });

```

```typescript
// Using callbacks

import SmsMobizen from 'sms-mobizen';

const smsMobizen = new SmsMobizen(apiKey, apiServer, apiVersion, format);

const recipients = ['+5511987654321'];
const text = 'Hello, world!';

smsMobizen.sendSms(recipients, text, (error, results) => {
  if (error) {
    console.error('Error sending messages:', error);
  } else {
    console.log('Messages sent successfully:', results);
  }
});

```

```typescript
// Using Async/Await

import SmsMobizen from 'sms-mobizen';

async function sendSms() {
  const smsMobizen = new SmsMobizen(apiKey, apiServer, apiVersion, format);

  const recipients = ['+5511987654321'];
  const text = 'Olá, mundo!';

  try {
    const results = await smsMobizen.sendSms(recipients, text);
    console.log('Messages sent successfully:', results);
  } catch (error) {
    console.error('Error sending messages:', error);
  }
}

sendSms();

```

Make sure to replace `apiKey`, `apiServer`, `apiVersion`, and `format` with your specific Mobizen values.

## Configuration

Before using the service, make sure to properly configure environment variables or configuration constants in your project as needed.

## Contributions

Contributions are welcome! If you find any issues or want to improve this package, feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](https://github.com/seu-usuario/seu-repositorio/blob/main/LICENSE.txt).

## Author

Developed by [Rodrigo Zan](https://github.com/rodrigozan)
```

### Sugestões de Melhorias:



3. **Seção de Configuração mais detalhada**: Expanda a seção de configuração para incluir exemplos de como configurar as variáveis de ambiente ou constantes de configuração no projeto.

5. **Badges**: Considere adicionar badges para o status do build, cobertura de testes, ou outras métricas relevantes para fornecer uma visão rápida do estado do seu projeto aos potenciais usuários.

