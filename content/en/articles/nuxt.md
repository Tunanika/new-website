---
title: "Why I Love Using Nuxt For My Websites"
date: "30/11/2024"
description: "NuxtJS, a developer friendly vue famework!"
tags: ["Nuxt", "Development", "Design", "Vue"]
image: "/articles/nuxt.jpg"
readingTime: "10"
---

---

# Why Nuxt is great for development?

First off, let me tell you a little bit about Nuxt itself. Nuxt is a vue framework. So that means it's based on
vue and in my opinion the best way to use vue. And it's also a full stack framework meaning that you can have
a simple backend and the frontend all in one. This has a few advantages that I will get on later on. For now,
let's get started! Oh by the way the website you are reading this blog post on right now is built with Nuxt too!

# How I got started with Nuxt?

It was actually quite by accident. I had just started a new internship at a company and they were using nuxt,
so that meant that I also had to learn nuxt. But it didn't take long for me to love it and get used to it so
much that I kept using it and making all my future websites with it. The reactivity, the devtools, the ssr
(server side rendering). I had just fallen in love with it. Therefore, to this day, I use Nuxt for everything
I do.

# Advantages of Nuxt

Earlier on, I mentioned a bit about how Nuxt being a full stack framework has a few advantages. Well what are
them?

- Server Side Rendering
- Speed
- Ease of building your application

## SSR (Server Side Rendering)

So one of the mst spoken parts of Nuxt is it's awesome useFetch composable. useFetch is basically replacing the
fetch function in Nuxt. This allows you to directly call the server of nuxt with useFetch using your path like:

```ts
useFetch("/api/products");
```

This way, Nuxt can even preload the data with the page. And we have now discovered SSR!

### How this may be useful?

Let's say you're trying to load a page with some data with it, instead of loading the page up and making the client
get the data afterwards with another fetch command, the server just serves the data along with the html sent to
the user. This way, you save on a secondary fetch call and it's faster and more efficient for the user.

# How to get started with Nuxt?

Getting started with Nuxt is super easy. You can just use the Nuxt CLI and run the following command:

```bash
npx create-nuxt-app <project-name>
```

THAT'S IT!
Now you have a nuxt project that you can start working on.
But of course, you want to be able to preview your website, so you can run the following command:

```bash
npm run dev
```

or (my favorite)

```bash
bun run dev
```

I also like bun very much but that's a topic for another blog post.
But nevertheless, now, you can preview your website on `localhost:3000`!

I am trying to keep this blog post relatively short, so I won't go into too much detail about how to use Nuxt.
But if you want to learn more, you can visit the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

## What makes Nuxt so special?

With it's great DevTools and the endless amount of modules you can install, Nuxt is truly a great framework for developers.
By using the DevTools, you can learn how long it takes for your page to load, you can install modules just by clicking a few buttons, and
you can even view the varibles in REAL TIME! Moreover, you can look at the tailwind colors, use icones and browse them right from your devtools and more.
Here's devtools:
![alt text](https://tunaerhanoglu.com/articles/nuxt_devtools.jpg)

## Conclusion

I absolutely love using Nuxt and I would argue that it's the best Vue framework out there. It's easy to use, has a growing community and it's just fun to work with.
So if you are looking for a new vue framework or just looking for something to build websites with, I would highly recommend NuxtJS.

### Any Errors in this post?

If you come across anything I mentioned wrong or if there is something you think that should be added here, feel free to [contact](/contact)
me about it! I am open to suggestions and of course I don't want to spread misinforrmation ':)'
