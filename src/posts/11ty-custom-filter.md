---
title: custom filters in 11ty
date: 2024-02-22
tags: "posts"
templateEngineOverride: md
---

## what is a filter?

A filter processes data stored in a variable in a nunjuck (.njk) template file.

here is an example:

`<a href="{{ post.url | url }}">an example link</a>`

the url filter sanitizes the variable (post.url) and adds any defined URL prefixes.

## how to make custom filter

to make a custom filter, you have to define it in your `.eleventy.js` file, like this:

~~~
eleventyConfig.addFilter("dateFormat", async function (value) {
        return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
    });
~~~

addFilter takes two parameters. The first one is the name of the filter, in our case "dateFormat" or in the first example "url".
The second one is a lambda function that returns the transformed value, in our case the formatted date as a string.

The last step is to use our new custom filter:
`<p>{{ post.data.date | dateFormat }}</p>`

And that's it. Your new custom filter is usable globally in your 11ty project.
All the snippets shown in this post were taken from the source code for this blog, which you can find [here]((https://github.com/oliverpk2000/blog)).
I hope this post was helpfull to you, and enjoy your day.