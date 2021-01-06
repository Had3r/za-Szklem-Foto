# Za Szkłem Fotografia

## My helpers, which I referred to when building the site

#### Naming branches

- https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30

#### Naming commits

- https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit

#### Semantics

- https://tutorials.comandeer.pl/html5-blog.html

#### Code review

- https://www.ulam.io/blog/how-to-do-code-review/

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

## Documentation files

A quick look at the files and directories you'll see in my Gatsby project.

    .
    ├── ...
    ├── src
    │   ├── styles
    │   │    └── globals.css # when compiling css through postcss, Tailwind finds directives here and converts to tailwind styles. Global.css is imported within gatsby-browser.js
    │   ├── components
    │   │    ├── index.js    # imported components that are used globally
    │   │    └──
    │   └── graphql          # graphql queries
    │         ├── useOptimizedImage.js   # query for images by filtering by extension
    │         └── ...
    ├── tailwind.config.js   # customization of Tailwind default design system
    │
    └── ...

## Hints

Spacing between sections should be:

`${tw'container py-16 px-4 md:py-20'}`
