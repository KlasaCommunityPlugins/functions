# klasa-functions
A Klasa Plugin which adds Functions Store to your Klasa Bot

## How To Use

1. Install the plugin.

```bash
npm i KlasaCommunityPlugins/klasa-functions
```

2. Use `klasa-functions` in your client.

```js
const { Client } = require("klasa");
Client.use(require("klasa-functions");

new Client({ aliasFunctions: { returnRun: true, prefix: "funcs", enabled: true } }).login("Your Beautiful Token");
```

3. Create a new `function` in your `functions` folder with the name you want to access later, for example `test.js`.

```js
const { Function } = require("klasa-functions");

module.exports = class extends Function {

    run(){
        // Your Code Here
    }

}
```

4. Use these functions in your bot.

```js
this.client.funcs.test();
```

5. Done!

## License

MIT
