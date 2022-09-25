const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    /* runtimeCompiler: true,  */ // aggiunto per permettere componenti multipli in un single file js
});
