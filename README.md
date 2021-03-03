<div align="center">

# Za Szkłem Fotografia

  <div>
  A website for a photo studio with a wide range of services - weddings, communions, holidays, etc.
  </div>
  <div>Click<a href="https://za-szklem-foto.vercel.app/">here</a> to see the page.</div>
  <div>
  This is a fun project to get to know the TailwindCSS library and the Gatsby.js ecosystem better. However, the company is real, so one day it may find a practical usage.
  </div>
  <hr style="border:1px solid gray"> </hr> <br />

</div>

- [Technologies](#technologies-and-why-i-used-it)
- [Testing](#short-info-about-testing-with-jest-and-enzyme)
- [Documentation files](#documentation-files)
- [Website Performance](#website-performance)
- [WorkFlow](#workflow)
- [My helpers, which I referred to when building the site](#my-helpers-which-i-referred-to-when-building-the-site)
- [TODO](#todo)

## Technologies (and why I used it)

#### Main tools

- Gatsby.js

  - to create highly performant website according to the latest web standards

- Tailwindcss:

  - the design is highly custom. It is not based on any templates and ready-made components that I didn't want to use to make the website unique. Tailwind is easy to customizable. It comes with a default configuration, but it’s straightforward to override,
  - helps me to achieve fast professional looking results without experience designer. It gives me a design system to work from,
  - it doesn't require naming things,
    - CSS naming methodologies like BEM exist to solve exact problem, like name collision and CSS globals (we have also other solutions like Atomic CSS, OOCSS, SMACSS, SUITCSS). However they introduce naming concerns. Is this particular thing a modifier? An element? A block? Naming could be hard,
  - provides small size with PurgeCss,

- Styled Components:

  - CSS in JS abstracts style to the component level. With naming methodologies like BEM, we can get pseudo encapsulation. With Shadow DOM (spec introduced in web components to isolate styling to a particular subset of the DOM), I got true encapsulation at the component level.
  - gave me unlimited semantic elements. HTML5 provide `header`, `footer`, `section`, and others. Styled components are semantically clear, their purpose is incredibly understandable ex: `Logo`, `Navbar`, `Toolbar`,
  - I really like feature called prop injection (props can be passed to styled components),
  - It allows me to create a clean component so that I extract all the styles into a separate file.

- CMS:

The choice of CMS was probably the most difficult. I really like idea of Git-based CMS, which gives us full version control on all content out of the box.
However, my choice fell on a different approach, called pure headless CMS (API-first). The reason was that there were so many options available that allow me to completely customize the CMS. It also handles large amounts of data with ease, which is a key point (multiple photos).

Contentful was my choice. Reasones:

- **_Contantful images API_** offers media processing of various formats. I can upload and store pretty much every popular file format like image, video, pdf, spreadsheet, markdown, etc. Thanks to the Contentful Images API, I can manipulate any image. For example it is possibility to resize, crop, decrease quality to optimize the size, and even change the format to JPG, PNG, and/or WebP.
- **pricing**: I'm oriented towards the free version (for now). My free micro space includes 24 content types. Additionally, I can get up to 5000 records and 10 free users to manage all content. This is all I need to build this website
- It has many languages, including polish, which is important for the person who manages it,
- does not require technical knowledge of git or md files to create changes to the site,
- very clean and modern admin panel, which in a lot of cases, I can tailor it to my exact needs.

#### Other tools and features

- JSDoc

  - TypeScript is great, but in this case it will be overkill. To use it, code should be compiled or somehow changed to be executable. JSDocs is supported out-of-box, and does not require additional dependencies

- linting tool:

  - I am using Gatsby built-in ESLint setup. It means, that ESLint shows feedback into the terminal window in dev mode,
    and also to the console in browser developer tools. This is to speed up my work, I don't have to focus on my own configuration (sometimes you need to improve the configuration while writing the code)

- images:

  - images are optimized with <a href="https://www.gatsbyjs.com/plugins/gatsby-image/?=gatsby-ima#gatsby-image">gatsby-image</a> to increase performance. For those where the exact dimension is known, I use the "Fixed" type, while if the height and width are different depending on the screen (eg Hero, Testimonial), the "Fluid" type.

- infinite scroll

  - The gallery page contains dozens of photos and their number will grow, so I needed a way to present the data in user-friendly ways. For this purpose, I created my own infinite scroll. It is also optimized for touch screens. So I added event listeners for `touchend` and `resize` (to handle situations where someone resizes their browser).

## Short info about testing with Jest and Enzyme

**_Note:_**

> While writing tests, I realized that a better solution would be to use `react-testing-library`, and it will be changed to that.

At the beginning of writing tests I broken components into two parts: a pure component without any queries (pure because its return value is entirely dependent on the props passed to it) and a surrounding component that only handles the query. Then I tested only pure components. However renaming components, replacing Gatsby fragments, creating graphql query mockups was really confusing.

Fortunately I found <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-testing/?=gatsby-plugin-te">gatsby-plugin-testing</a>. This plugin stores query data when we build a project.

During `gatsby build` or `gatsby develop` command, we can see

```
[gatsby-plugin-testing] stored static queries
```

in the build output, which means that queries will be stored in a file `.testing-static-queries.json`.

**_Important - after modifying the queries of components, we must rerun `gatsby build`._**

#### PropTypes testing

For this, I used the `check-prop-types` package because instead of getting a warning in case of incorrect props, I get an error. Thanks to this, I do not check the warnings (I don't need to mock console.error).

## Documentation files

A quick look at the files and directories you'll see in my Gatsby project.

    .
    ├── ...
    ├── src
    │   ├── styles
    │   │    └── globals.css              # when compiling css through postcss, Tailwind finds directives here and converts to tailwind │styles. Global.css is imported within gatsby-browser.js
    │   │
    │   ├── components
    │   │    ├── index.js                 # imported components that are used globally
    │   │    └── ...
    │   └── graphql                       # graphql queries
    │         ├── useOptimizedImage.js    # query for images by filtering by extension
    │         └── ...
    │
    ├── tailwind.config.js                # customization of Tailwind default design system
    │
    │
    │                                     ##### testing #####
    ├── jest.config.js                    # Because Gatsby handles its own Babel configuration, here are Jest setting to use babel-jest.
    │
    ├── jest-preprocess.js                # transform all js files
    │
    ├── __mocks__
    │       └── gatsby.js                 # mocking Gatsby module
    │
    ├── loadershim.js                     # This sets enqueue to return a jest.fn().
    │
    ├── .testing-static-queries.json      # stored GraphQL queries (created after the build)
    └── ...

## Website Performance

- I use <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyzer/">webpack-bundle-analyzer</a> to monitor the size of the website resources.
- To manage SEO-related head tags I used <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-react-head/?=react-hea">react-head</a> instead of react-helmet, which has less minzipped size
- <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-optimize-svgs/?=svgr">gatsby-plugin-optimize-svgs</a> allowed me to minimize the SVG output to the filesystem during compilation
- finally, using <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts/?=preload-f">gatsby-plugin-preload-fonts</a> enables preloads all necessary fonts per route to decrease time to first meaningful paint

## Workflow

The content of the website can be fully managed by a non-technical person. Thanks to the integration with Contentful, the user, by changing the content and clicking publish, triggers the webhook which runs the build on the Vercel platform.

**_Build time is a maximum of 2 minutes._**

## My helpers, which I referred to when building the site

- Naming branches: https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30
- Naming commits: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit
- Semantics: https://tutorials.comandeer.pl/html5-blog.html
- JSDoc - https://jsdoc.app/index.html

## TODO

- [ ] optimize the website for SEO
- [ ] check the correctness of the text display by CMS
