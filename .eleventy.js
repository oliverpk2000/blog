module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addFilter("dateFormat", async function (value) {
        return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
    });
    return {
        pathPrefix: "blog",
        dir: {
            input: "src",
            output: "public"
        },
    };
};