# SMS Mobizen


An npm package to simplify sending SMS messages using the Mobizen service.

To use this package, you nedd a Mobizen API KEY. You get a [Mobizen API KEY in this link](https://mobizon.com.br/).

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


Before using the service, make sure to properly configure environment variables or configuration constants in your project as needed.

### Configuration using Environment Variables

1. **Environment Variables in the Terminal**:

   You can set environment variables directly in the terminal before starting your application. For example, on Linux/MacOS:

   ```bash
   export MOBIZEN_API_KEY='YOUR_MOBIZEN_API_KEY'
   export MOBIZEN_API_SERVER='https://api.mobizon.com.br'
   export MOBIZEN_API_VERSION='v1'
   export MOBIZEN_API_FORMAT='json'
   ```

   On Windows, the command is similar:

   ```bash
   set MOBIZEN_API_KEY=YOUR_MOBIZEN_API_KEY
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

   const smsMobizen = new smsMobizen(apiKey, apiServer, apiVersion, format);

   // Now you can use smsMobizen.sendSms(...) to send SMS
   ```

2. **Configuration in the `.env` file**:

   You can create a `.env` file at the root of your project to store your environment variables:

   ```plaintext
   MOBIZEN_API_KEY=YOUR_MOBIZEN_API_KEY
   MOBIZEN_API_SERVER=https://api.mobizon.com.br
   MOBIZEN_API_VERSION=v1
   MOBIZEN_API_FORMAT=json
   ```

   Then, you can use a library like `dotenv` to load these environment variables:

  Install dotenv 
  
  ```bash
  npm install dotenv
  ```

Import dotenv and instantiate the module

   ```typescript
  
   import * as dotenv from 'dotenv';
   dotenv.config();

   const apiKey = process.env.MOBIZEN_API_KEY;
   const apiServer = process.env.MOBIZEN_API_SERVER;
   const apiVersion = process.env.MOBIZEN_API_VERSION;
   const format = process.env.MOBIZEN_API_FORMAT;

   const smsMobizen = new smsMobizen(apiKey, apiServer, apiVersion, format);

   // Now you can use smsMobizen.sendSms(...) to send SMS
   ```

### Configuration using Constants in the Code

If you prefer to configure variables directly in the code, you can create a configuration file (`config.ts`, for example) and import it where needed:

```typescript
// config.ts
export const config = {
    apiKey: 'YOUR_MOBIZEN_API_KEY',
    apiServer: 'https://api.mobizon.com.br',
    apiVersion: 'v1',
    format: 'json',
};


```

In your service or where you need to configure SMS

```typescript
import SmsMobizen from 'sms-mobizen';

import { config } from './config';

const smsMobizen = new SmsMobizen(config.apiKey, config.apiServer, config.apiVersion, config.format);

// Now you can use smsMobizen.sendSms(...) to send SMS
```

### Sending SMS


To use the SMS service, import and instantiate the `SmsMobizen` class, passing the necessary configurations:


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

## Contributions

Contributions are welcome! If you find any issues or want to improve this package, feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](https://github.com/seu-usuario/seu-repositorio/blob/main/LICENSE.txt).

## Author

Developed by [Rodrigo Zan](https://github.com/rodrigozan)


