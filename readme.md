# Groupon Front-End Interview Assignment

**Used tech stack:**
 - Vite.js bundler as for application scaffolding, I used a custom webpack config, but Vite.js is easier to use and, thanks to ESBuild also quicker to build. Also, it supports Babel and RollUp plugins.
 - Tailwind - I used to use Styled-Components (XStyles, StyledSystems, Twin.Makro for Tailwind intergration), but currently I am shifting towards plane old CSS/SCSS with Tailwind and CSS modules.
 - Styled-Componens - componest definition and styling
 - State management - I've used React-Query and plane useState, which is fine for API+ state handling. React-Query allows caching and optinistic updates. But for bigger projects my 1# to go is Redux (Redux Toolkit).
 - ESLint - I am using my preferd set of rules for clean and performant code `https://github.com/Podlipny/eslint-tslint-rules`
 `https://www.npmjs.com/package/@podlipny/eslint-config`


## How to run
 - `yarn dev` - for development
 - `yarn build` - production build
 - `yarn preview` - preview production version of application

 - `yarn lint` - run ESLint kode check
 - `yarn lint:fix` - run ESLint kode check with autofix

## Docker

**For development**
to build image: `docker build -t [name of the image] .`
to run image `docker run -it --rm -p 4001:4000 --name [name of the container] [name of the image]`

to run image with mounted local volume for Hot Module Reload
`docker run -it --rm -p 4001:4000 -v "$PWD"/src:/app/src [name of the container] [name of the image]`

**For production preview**
to build image: `docker build -t [name of image] -f dockerfile.preview .`
to run image `docker run -it --rm -p 4200:4200 --name [name of the container] [name of the image]`