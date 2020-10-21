# Za Szkłem Fotografia

## My helpers, which I referred to when building the site

#### Naming branches

- https://codeburst.io/let-the-branch-name-do-all-the-talking-in-git-e614ff85aa30

#### Naming commits

- https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit

#### Semantics

- https://tutorials.comandeer.pl/html5-blog.html

## Technologies (and why I used it)

#### Main tools

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

#### Other tools

- linting tool:
  - I am using Gatsby built-in ESLint setup. It means, that ESLint shows feedback into the terminal window in dev mode,
    and also to the console in browser developer tools. This is to speed up my work, I don't have to focus on my own configuration (sometimes you need to improve the configuration while writing the code)

## Important notes

`tailwind.macro` which I am using is not an official project and not maintained currently. It hasn't been updated to match new Tailwind features. <br />

For this reason I used some workaround, ex:

- instead to create custom animation in `tailwind.config.js`, I used animation inside component itself:

New Tailwind feature provide in `tailwind.confing.js` the following solution:

```javascript
 animation: {
        fadeIn: 'fadeIn 2s ease-in-out 1 forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { backgroundColor: 'rgb(0,0,0,0.8)' },
          '100%': { backgroundColor: 'rgb(0,0,0,0.4)' },
        },
      },
```

While I used inside React component:

```javascript
const fadeIn = keyframes`
  from {
      background-color: rgb(0,0,0,0.8);
    }
    to {
      background-color: rgb(0,0,0,0.3);
    }
`;

const StyledBackground = styled(Background)`
  animation: ${fadeIn} 2s ease-in-out 1 forwards;
`;
```

- another example is the `container` class. Those classes not being defined in `static-styles.js` or `dynamic-styles.js` The workaround was to add the container class directly to my styled component.

Some solution could be <a href="https://github.com/ben-rogerson/twin.macro">twin.macro</a>, but still I would have to use the container as a class. So I decided to stick with `tailwind.macro v1.0.0-alpha.10`.

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
