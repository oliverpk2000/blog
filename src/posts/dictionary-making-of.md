---
title: Making my own dictionary website
date: 2024-06-28
tags: [ "posts" ]
------

finished product: [https://oliverpk2000.github.io/dictionary/](https://oliverpk2000.github.io/dictionary/)

source code: [https://github.com/oliverpk2000/dictionary](https://github.com/oliverpk2000/dictionary)

Have you ever noticed how dictionaries on the web are so bloated? Let's
use [the cambridge dictionary](https://dictionary.cambridge.org/dictionary/) as an example. First off, at least in the
EU, you have to navigate through the standard cookies popup, which slows me down from actually looking up the definition
for a
word. Then, once you actually search a word, there is a distracting sidebar advertising other unnecessary features of
the website like, quizzes, word of the day, a blog and a new word poll. I have nothing against these features, I just
don't want them advertised to me while I'm looking up a definition. A lot of these dictionary websites try to retain
users with the other features, when in fact, to retain users, a dictionary website just has to serve accurate
explanations of words. These micro-problems I had with the state of things annoyed me, until I had a long weekend and
decided to use the project idea to learn jQuery.

I had a set of criteria for this website:

- no distractions / no ads
- quick to load
- accurate

One of my main objectives was to keep the workflow of using the site as short as possible. I wrote down all the actions
I took on the cambridge dictionary website (with cache and uBlock origin disabled) which amounted to this:

- accept cookies
- search word
- read definition
- close ad popup because I was too slow to read everything
- read the rest of definition

The amount of transferred data was also insane.

![frozen forest gameplay]({{"../../assets/cambridge-loading-time.png" | url }})

In what world does a dictionary need to pass through this much data? Most of it was advertisements being served to
me, and telemetry data from cookies.

I found that I could optimize the workflow by just removing unwanted parts. I planned for myself to be the only user,
I decided not to advertise to myself, or sell my own data through cookies which removed the biggest offenders right
away.

To emphasize the quick to load part, I decided to forgo a framework like Angular, React or Vue, even though I use them
frequently and decided to just use browser-side javascript for the business logic.
I did, however, to keep myself sane, use jQuery to handle the DOM-tree editing.

Accuracy was easy to accomplish, as I stumbled onto the [free dictionary api](https://dictionaryapi.dev/). Its fast and
up to date enough that it was very difficult to find words that didn't have an entry. It also had phonetics data which I
added to the website.

The whole thing took me about four days,
from figuring out the basics of jQuery to adding some comfort features like linking pronunciations,
better error messages and ordering the definitions by word type.

Once I implemented the functions to get and show the data, the website was ready to launch.
I decided to use GitHub
Pages for hosting because it is free, and I had experience with it (this blog is hosted using it too).
You can find the
finished product [here](https://oliverpk2000.github.io/dictionary/).

I have some plans for the future, like implementing a spell-check feature, not unlike the "did you mean" message in
Google search.
If there are any errors or edge-cases I didn't consider, open up an issue, and I'll fix it, and if you have any features
or improvements yourself, send me a pull request.

I know websites like the cambridge dictionary use ads as a way to combat declining sales of physical dictionaries.
But since I had the capabilities to create my own solution, I did.

-opk