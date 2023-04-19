### **Focusing On School / Github Hiatus**

It literally hurts to say that it’s definitely been a while since I actually pushed code to Github. Although I have been programming weekly projects for both my Java programming class and Assembly programming class, I still neglected building personal projects to focus more on my grades (3 weeks left and all A’s, success?). Given that I want to fundamentally understand the underlying mathematics and logic found in machine learning papers and repos, I still feel like focusing fully on Calculus and basic Data Structures was a good choice to further my journey down that path. 

That being said, I now have a burning desire to actually build fully planned and scoped personal projects again. Additionally, a lot of really awesome AI APIs, technologies, and libraries came out recently, so I want to build projects utilizing these in the near future. I know Next.js and Tailwind will quickly come back to me, but there will be certain quirks specifically with the way React renders things that I will again have to recognize. I essentially need a “warmup” project, before I want to build something really cool with AI. 

On that note, I just realized that I built my personal website almost 6 months ago — where I utilized React.js and then hosted it through Firebase. It is pretty painful to update the website with new projects and new skills every time, and I know I can make something better with what I know now. Also, I’m becoming increasingly interested in the power of sharing what I’m learning online and building in public. Therefore, I found it fitting that I should rebuild my personal website completely from scratch and my first blog post should be somewhat of a time log / development process for creating it.

*NOTE: My other blogs will be more structured and thought out, but this one is more stream of consciousness to show the full brainstorming and development process.*

### **April 17: Day 0**

As I transition from more of a beginning computer science student to a tinkering “indie hacker” who enjoys building things, I want the website to reflect this. I’m also interested in building a social presence online and sharing the things I build and learn with the world. This leads me to the conclusion that I will want some sort of “projects” section as well as a “blog” section. It’s also usually standard to include a “home” and an “about me” section. Here’s what I’m thinking so far:

**Specifications:**

- Modern, minimalist design with a light/dark theme toggle
- Pages → *home, about me, projects, blog*.
- Easy to implement changes to live website. Everything should be programmatic.

**Technologies:**

* Figma - self explanatory, experienced with it
* Tailwind CSS - easy to use, powerful, helpful, experienced with it
* TypeScript - this will actually be the first time I use TypeScript as the main language in a project, but type checking seems amazing + I’m used to Java now
* Next.js (Static Site Generation) - SSG makes everything quick, served directly from CDN, experience building multiple sites with it
* Notion (Headless CMS) - will utilize either a library or their API to put the content on my website, seems simple/cheap, Markdown files seem kinda boring and annoying and I want a way to store project information like pictures and links as well
* Vercel - for hosting, simple to use, automatically serves my github project from a CDN

*SUMMARY (DAY 0): Figured out exactly what I want to build and how I’m planning on implementing it depending on specifications.*

### **Day 1**

I usually jump into designing the UI in Figma before I start coding, but I really want to just program something right now and I think using Notion as a headless CMS is really cool.

Update: Alright so using Notion as a headless *did* seem cool, but it's actually just as annoying as markdown, so markdown files it is! Markdown is honestly way simpler and it makes more sense to store everything locally on files to make things easier -- so let's just do that. I'm following some of [this super helpful blog](https://nextjs.org/blog/markdown) from Vercel to help get remark setup properly.

