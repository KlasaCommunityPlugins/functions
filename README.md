<div align="center">
	
# functions
Simple Klasa plugin that adds a functions store
</div>

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

new Client({ aliasFunctions: { returnMethod: "run", prefix: "funcs", enabled: true } }).login("Your Beautiful Token");
```

If you use TypeScript

```ts
import { Client } from 'klasa';
import { Client as FunctionsClient } from '@kcp/functions';

Client.use(FunctionsClient);

new Client({ aliasFunctions: { returnMethod: "run", prefix: "funcs", enabled: true } }).login("Your Beautiful Token");
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

## Tips

- To allow multiple functions in a file so you can do something like `this.client.funcs.utils.toTitleCase(string)` instead of using 1 file per function remove the `returnMethod`.

## License

This project is under the [MIT](https://github.com/KlasaCommunityPlugins/functions/blob/master/LICENSE) license.
