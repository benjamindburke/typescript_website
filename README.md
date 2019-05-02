# TypeScript Website

This is a template website using React TypeScript, Webpack Hot Module reloading, and source mapping.
This project is configured to include SCSS files in webpack.

## Getting Started

To get started, clone this repository onto your local machine
```
git clone https://github.com/benjamindburke/typescript_website.git
```

### Prerequisites

Install the following on your respective machine:

* [Node](https://nodejs.org/en/) - Node JS
* [NPM](https://npmjs.com/) - Node Package Manager, included with Node JS

Ensure both are installed on your machine by opening a terminal session and entering
```
npm -v
node -v
```

### Installation

Now that you've installed node and npm and cloned this repository, we need to install the node packages.
First let's install important global packages using the command
```
npm i -g typescript rimraf eslint tslint
```
Next let's install all of the packages listed in our [package.json](./package.json) file using the command `npm install`

## Development

After the modules have been installed, we need to serve the content to our browser for hot reloading:
```
npm run start
```

After webpack has bundled your code and assets, a new browser window will open to your website.
If one doesn't open, try [clicking here](http://localhost:9799).
Stop the webpack server by pressing Ctrl+C in the terminal window.

Alternatively, use `npm run build` to compile the project. The output will be found in the lib/ folder.
Executing the build step only will compile your code and will not open a browser window.

[index.tsx](src/index.tsx) is where your React components are added to the website DOM.
Place your custom code inside the src/folder, using whichever folder structure you prefer.
Most developers prefer to separate their code into frontend and backend code, and while this is a good way to keep your working directory clean, it is by no means required.

### Adding style to your components

Create `.scss`, `.sass`, or `.css` files anywhere in the src/ folder to include them in the webpack bundle. Using whichever folder structure you prefer, give your components unique style by adding the import statement `import "/path/to/style/sheet";` to your component files.

### Installing new npm modules

Install new packages for your project using
```
npm install <dependency>
```
You may also save these modules to your package.json with the addition of the flag `--save-dev` or `--save`.
`npm install --save-dev <dependency>` will save the new packages as a devDependency, `--save` as a regular dependency.

### Resetting node_modules

If you're not sure what's wrong, one way to fix it may be deleting your node_modules folder and reinstalling.
Try running `npm run bomb` to delete the node_modules folder and reinstall dependencies. This method uses the npm module [rimraf](https://npmjs.org/package/rimraf) which mimics the Linux command `rm -rf`. This method is preferred to completely clean your node_modules folder, including stubborn dependencies.
If this method does not work, use `npm ci` to clear your node_modules and reinstall all dependencies.
If you are still experiencing errors after this, try closing your VSCode program, deleting the folder using a file explorer program, and then reinstalling. Some dependencies on Windows \(node_modules/@types\) may complain to be unlinked, and this particular issue can be fixed in this manner.

## Built With

* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)

## Authors

* **Ben Burke** - All work - [Github: benjamindburke](https://github.com/benjamindburke)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
