I tried using vue-tests utils and vite plugin vue to test my nuxt components.

Though there's an issue, the tests works but now nuxt doesn't render the home page anymore.

I think it has something to do with the fact that I added a file `vite.config.js` in the root directory, maybe overriding some internal `vite.config` file of `nuxt3`...

I'm going to investigate that...

...

Found [this on stackoverflow](https://stackoverflow.com/questions/72493908/how-to-write-unit-test-for-components-with-vitest-in-nuxt-3) which states that the issue was solved by providing a config file only for vitest. I'm gonna try that:
- moving the vite config file to a new name that won't cause conflict
- manually add the link to the `package.json` script.

Let's try that...

...

So the link worked.

Then I tried to use autoimport in my components and it's no compatible with vitest.

I tried using `@nuxt/test-utils-edge`'s `setup()`, it didn't work out of the box and I had to add `deps` property to make it go through.

It didn't solve the problem of testing autoimports component with vitest.

I found the code here : https://github.com/nuxt/framework/issues/3252#issuecomment-1126771193

I'm gonna ask for help...

...

I've asked for help and got pointed in the following direction https://github.com/antfu/unplugin-auto-import .
This might help to make the auto import work...

...
