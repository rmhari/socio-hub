# Reference Social Media Hompepage.
Social media homepage featuring posts along with their corresponding comments.

## Tech Stack
 - Node JS
 - Parcel Bundler
 - Bootstrap 5
 - Font Awesome 6
 - SCSS
 - Github Actions for CI
 - Github Pages for CD

## Setup

### NVM

We need [Node Version Manager(nvm)]([url](https://github.com/nvm-sh/nvm)) to start with nodejs instalation. It helps us manage and switch between different Node versions with ease, to work on different projects that require different Node.js versions.

To check the nvm instalation
~~~ 
nvm -v
~~~

To list all te available nodej versions

~~~ 
nvm ls-remote
~~~

Create a .nvmrc and keep version required for our projects for eg `v21.7.3'. Now ask nvm to instal this for your project

~~~ 
nvm install
~~~

Now to check the node js version 

~~~ 
node -v
npm -v
~~~

This shold print the correct node js version

### NPM

Create a empty directory for the project 'socio-hub'. Lets call this as **PROJECT_ROOT_DIT**.

~~~ 
cd <<PROJECT_ROOT_DIT>>
~~~

We need to inttialize a nodejs project by running below command

~~~ 
npm init
~~~

Once the command runs succefully we will see `package.json` file

### Parcel Bunder

We need bundler (like maven for java) to build and run our project. We choose parcel js. Instructions are available [here]([url](https://parceljs.org/getting-started/webapp/))

## References
- https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template








