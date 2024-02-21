module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css")
    return {
        pathPrefix: "blog",
        dir: {
            input: "src",
            output: "public"
        },
    };
};