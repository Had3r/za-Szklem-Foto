# Za Szkłem Fotografia

## My helpers

#### Naming branches

- https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30

#### Naming commits

- https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit

note:

So it actu­al­ly com­bines the CSS styles from the Tail­wind CSS class­es in the \${tw` tem­plate lit­er­al with the cus­tom styled com­po­nent CSS below it. So you can do any of the fun pat­terns you do with Emo­tion Styled Com­po­nents, too!

In either case, only the CSS that is actu­al­ly used on a page will be extract­ed (no need for PurgeC­SS), and the styles used by com­po­nents on a page will be inlined

#### Technologies (and why I used it)

- Tailwindcss:
  - implementing custom designs is really fast
  - helps to achive professional looking results without expercienced designer
  - don’t need to name things
    - CSS naming methodologies like BEM exist to solve this exact problem, like name collision and CSS globals (we have also other solutions like Atomic CSS, OOCSS, SMACSS, SUITCSS). However they introduce naming concerns. Is this particular thing a modifier? An element? A block? Naming could be hard.
  - small size with PurgeCss or CSS in JS (look below)
- Styled Components:
  - thanks to this I can load only needed styles, so I can keep css size small,
  - it creats one source of truth for all application constants (sometimes we need share things like colors, breakpoints, etc. between CSS and JavaScript)
  - CSS in JS abstracts style to the component level. With naming methodologies like BEM, we can get pseudo encapsulation. With Shadow DOM (spec introduced in web components to isolate styling to a particular subset of the DOM), I got true encapsulation at the component level.
  - gave me unlimited semantic elements. HTML5 provide `header`, `footer`, `section`, and others. Styled components are semantically clear, their purpose is incredibly understandable ex: `Logo`, `Navbar`, `Toolbar`,
  - I really like feature called prop injection (props can be passed to styled components)

#### Documentation files

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
