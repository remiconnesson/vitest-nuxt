I tried using vue-tests utils and vite plugin vue to test my nuxt components.
Though there's an issue, the tests works but now nuxt doesn't render the home page anymore.
I think it has something to do with the fact that I added a file `vite.config.js` in the root directory, maybe overriding some internal `vite.config` file of `nuxt3`...
I'm going to investigate that.
