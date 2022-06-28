# Making vitest works with components defined in the nuxt folder

The key is to define a `vitest.config.js` file that will import plugins like `vue`, `unplugin-auto-import`, and `unplugin-vue-components` then to adequately configure them.

An example that worked for me can be found in this repo.
