const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    async _isSvelteProject() {
        return this.existsDestination("svelte.config.js");
    }

    async writing() {
        await this.addDevDependencies("prettier");

        const pkgJson = {
            scripts: {
                "lint:prettier": "prettier src",
                "lint:prettier:fix": "prettier --write src",
            },
        };

        await this.fs.extendJSON(
            this.destinationPath("package.json"),
            pkgJson
        );

        if (await this._isSvelteProject()) await this._svelteConfig();
    }

    async _svelteConfig() {
        await this.addDevDependencies("prettier-plugin-svelte");

        await this.fs.extendJSON(this.destinationPath("package.json"), {
            prettier: {
                svelteSortOrder: "options-markup-scripts-styles",
                svelteStrictMode: false,
                svelteAllowShorthand: true,
                plugins: ["prettier-plugin-svelte"],
            },
        });
    }
};
