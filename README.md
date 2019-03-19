# Functions [![Build Status](https://dev.azure.com/vladfrangu/KlasaCommunityPlugins/_apis/build/status/Functions?branchName=master)](https://dev.azure.com/vladfrangu/KlasaCommunityPlugins/_build/latest?definitionId=4&branchName=master)

A simple Klasa plugin which adds reloadable functions to your Klasa Bot

## How To Use

1. Install the plugin.

```bash
npm i @kcp/functions

# If you use yarn
yarn add @kcp/functions
```

1. Use `@kcp/functions` in your client.

```js
const { Client } = require("klasa");
Client.use(require("@kcp/functions"));

new Client({ aliasFunctions: { returnRun: true, prefix: "funcs", enabled: true } }).login("Your Beautiful Token");
```

If you use TypeScript

```ts
import { Client } from 'klasa';
import { Client as FunctionsClient } from '@kcp/functions';

Client.use(FunctionsClient);

new Client({ aliasFunctions: { returnRun: true, prefix: "funcs", enabled: true } }).login("Your Beautiful Token");
```

1. Create a new `function` in your `functions` folder with the name you want to access later, for example `test.js` or `test.ts`.

```js
const { Function } = require("@kcp/functions");

module.exports = class extends Function {
    run() {
        // Your Code Here
    }
}
```

1. Use these functions in your bot.

```js
this.client.funcs.test();
```

1. ???... Enjoy!

## License

This project is under the [MIT](https://github.com/KlasaCommunityPlugins/functions/blob/master/LICENSE) license.
