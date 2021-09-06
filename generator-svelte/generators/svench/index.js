const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    async writing() {
        await this.addDevDependencies({
            svench: "0.2.0-17", // -18 breaks right now
            vite: "2.5.3",
        });

        const pkgJson = {
            scripts: {
                svench: "svench",
                "svench:build": "svench build",
                "svench:inspect": "svench inspect",
            },
        };

        await this.fs.extendJSON(
            this.destinationPath("package.json"),
            pkgJson
        );
    }
};
