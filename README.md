# Za Szkłem Fotografia

## Technologies (and why I used it)

#### Main tools

- Tailwindcss:
  - makes me easy to implement custom design in a fast way
  - helps me to achieve fast professional looking results without experience designer
  - it doesn't require naming things
    - CSS naming methodologies like BEM exist to solve this exact problem, like name collision and CSS globals (we have also other solutions like Atomic CSS, OOCSS, SMACSS, SUITCSS). However they introduce naming concerns. Is this particular thing a modifier? An element? A block? Naming could be hard.
  - provides small size with PurgeCss
  - for more information check my Tailwind tutorial from Adam Wathan -> <a href="https://github.com/Had3r/Learning-Code/tree/master/tailwindcss-adamWathan#tailwindcss">tailwind tutorial</a>
- Styled Components:
  - it creats one source of truth for all application constants (sometimes we need share things like colors, breakpoints, etc. between CSS and JavaScript)
  - CSS in JS abstracts style to the component level. With naming methodologies like BEM, we can get pseudo encapsulation. With Shadow DOM (spec introduced in web components to isolate styling to a particular subset of the DOM), I got true encapsulation at the component level.
  - gave me unlimited semantic elements. HTML5 provide `header`, `footer`, `section`, and others. Styled components are semantically clear, their purpose is incredibly understandable ex: `Logo`, `Navbar`, `Toolbar`,
  - I really like feature called prop injection (props can be passed to styled components)
- CMS:

The choice of CMS was probably the most difficult. I really liked Forestry, but the free version archives the site after 3 months of inactivity and for this reason I had to exclude it. Contentful was my choice. Reasones:

- It has many languages, including polish, which is important for the person who manages it
- supports Cloundinary
- does not require technical knowledge of git or md files to create changes to the site
- intuitive admin panel
- Contantful images API offers media processing of various formats
- **pricing**: I'm oriented towards the free version (for now). My free micro space includes 24 content types. Additionally, I can get up to 5000 records and 10 free users to manage all content. This is all I need to build this website

#### Other tools and features

- linting tool:

  - I am using Gatsby built-in ESLint setup. It means, that ESLint shows feedback into the terminal window in dev mode,
    and also to the console in browser developer tools. This is to speed up my work, I don't have to focus on my own configuration (sometimes you need to improve the configuration while writing the code)

- images:

  - images are optimized with <a href="https://www.gatsbyjs.com/plugins/gatsby-image/?=gatsby-ima#gatsby-image">gatsby-image</a> to increase performance. For those where the exact dimension is known, I use the "Fixed" type, while if the height and width are different depending on the screen (eg Hero, Testimonial), the "Fluid" type.

- infinite scroll

  - The gallery page contains dozens of photos and their number will grow, so I needed a way to present the data in user-friendly ways. For this purpose, I created my own infinite scroll. It is also optimized for touch screens. So I added event listeners for `touchend` and `resize` (to handle situations where someone resizes their browser).

## Short info about testing with Jest + Enzyme

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
    │   │    └── globals.css # when compiling css through postcss, Tailwind finds directives here and converts to tailwind │styles. Global.css is imported within gatsby-browser.js
    │
    │   ├── components
    │   │    ├── index.js    # imported components that are used globally
    │   │    └── ...
    │   └── graphql          # graphql queries
    │         ├── useOptimizedImage.js   # query for images by filtering by extension
    │         └── ...
    │
    ├── tailwind.config.js   # customization of Tailwind default design system
    │
    │                     ##### testing #####
    │
    ├── jest.config.js    # Because Gatsby handles its own Babel configuration, here are Jest setting to use babel-jest.
    │
    ├── jest-preprocess.js # transform all js files
    │
    ├── __mocks__
    │       └── gatsby.js  # mocking Gatsby module
    │
    ├── loadershim.js      # This sets enqueue to return a jest.fn().
    │
    ├── .testing-static-queries.json # stored GraphQL queries (created after the build)
    └── ...

## My helpers, which I referred to when building the site

- Naming branches: https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30
- Naming commits: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit
- Semantics: https://tutorials.comandeer.pl/html5-blog.html
- JSDoc - https://jsdoc.app/index.html

## Draft

- Spacing between sections should be:

`${tw'container px-4 sm:px-0 py-16 md:py-20'}`

Only css:

- navigation with checkbox hack
