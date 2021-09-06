const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    async writing() {
        await this.addDevDependencies({
    "@babel/core": "^7.15.5",
    "@storybook/addon-actions": "^6.4.0-alpha.33",
    "@storybook/addon-docs": "^6.4.0-alpha.33",
    "@storybook/addon-essentials": "^6.4.0-alpha.33",
    "@storybook/addon-links": "^6.4.0-alpha.33",
    "@storybook/addon-svelte-csf": "^1.1.0",
    "@storybook/svelte": "^6.3.8",
    "babel-loader": "^8.2.2",
    "storybook-builder-vite": "^0.0.12",
    "svelte-loader": "^3.1.2",
  }
  );

        const pkgJson = {
            scripts: {
                "storybook": "start-storybook -p 6006",
                "build-storybook": "storybook-builder-vite",
            },
        };

        await this.fs.extendJSON(
            this.destinationPath("package.json"),
            pkgJson
        );

        await this.fs.copy(
            this.templatePath('./storybook'),
            this.destinationPath('.storybook'),
        );

        await this.copyTemplate(
            'svelte.config.cjs', 'svelte.config.cjs'
        );

        await this.deleteDestination('svelte.config.js');
    }
};
