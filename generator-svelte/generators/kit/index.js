const Generator = require("yeoman-generator");

// npm init svelte@next

module.exports = class extends Generator {
    async writing() {
        await this.addDevDependencies({
            "@sveltejs/kit":"next",
            "svelte":"^3.34.0",
        });

        const pkgJson = {
            type: "module",
            scripts: {
                dev: "svelte-kit dev",
                build: "svelte-kit build",
                preview: "svelte-kit preview",
            },
        };

        await this.fs.extendJSON(
            this.destinationPath("package.json"),
            pkgJson
        );

        await this.fs.copy(
            this.templatePath('.'),
            this.destinationPath('.'),
        );
    }
};
