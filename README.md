# Za Szkłem Fotografia

## My helpers

#### Naming branches

- https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30

#### Naming commits

- https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit

## Technologies (and why I used it)

- Tailwindcss:
  - implementing custom designs is really fast
  - helps to achive professional looking results without expercienced designer
  - don’t need to name things
    - CSS naming methodologies like BEM exist to solve this exact problem, like name collision and CSS globals (we have also other solutions like Atomic CSS, OOCSS, SMACSS, SUITCSS). However they introduce naming concerns. Is this particular thing a modifier? An element? A block? Naming could be hard.
  - small size with PurgeCss
  - for more information check my Tailwind tutorial -> <a href="https://github.com/Had3r/Learning-Code/tree/master/tailwindcss-adamWathan#tailwindcss">tailwind tutorial</a>
- Styled Components:
  - it creats one source of truth for all application constants (sometimes we need share things like colors, breakpoints, etc. between CSS and JavaScript)
  - CSS in JS abstracts style to the component level. With naming methodologies like BEM, we can get pseudo encapsulation. With Shadow DOM (spec introduced in web components to isolate styling to a particular subset of the DOM), I got true encapsulation at the component level.
  - gave me unlimited semantic elements. HTML5 provide `header`, `footer`, `section`, and others. Styled components are semantically clear, their purpose is incredibly understandable ex: `Logo`, `Navbar`, `Toolbar`,
  - I really like feature called prop injection (props can be passed to styled components)
- CMS

## Documentation files

A quick look at the files and directories you'll see in my Gatsby project.

    .
    ├── ...
    ├── src
    │   ├── styles
    │   │    └── globals.css # when compiling css through postcss, Tailwind finds directives here and converts to tailwind styles. Global.css is imported within gatsby-browser.js
    │   ├── components
    │        ├── index.js    # imported components that are used globally
    │        └──
    │
    │
    │
    └── ...
