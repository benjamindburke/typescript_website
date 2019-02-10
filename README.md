# TypeScript Website

This is a template website using React TypeScript, Webpack hot module loading, and source mapping.
This project is configured to include CSS files in webpack.

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

### Installing

Now that you've installed node and npm and cloned this repository, we need to install the node packages.
```
npm install
```

After the modules have been installed, we need to serve the content to our browser for hot reloading:
```
npm run start
```

Open [your website](http:/localhost:3000) once the console gives you the message `App is listening on port 3000`.
Stop the webpack server by pressing Ctrl+C in the terminal window.

Alternatively, use `npm run build` to compile the project. The output will be found in the [lib/](lib) folder.

## Development

[App.tsx](src/frontend/App.tsx) is where your React components are added to the website DOM.
Place your custom components inside the [src/frontend/components](src/frontend/components) folder, using whichever folder structure you prefer.
Place backend/server code inside the [src/backend](src/backend) folder.

### Using CSS files

Follow the example set in [App.tsx](src/frontend/App.tsx).

### Installing new npm modules

Install new packages and add the new packages to [package.json](package.json) using
```
npm install --save-dev <dependency>
```

### Resetting node_modules

If you're not sure what's wrong, one way to fix it may be deleting your node_modules folder.
Use `npm ci` to clear your node_modules and reinstall all dependencies.

## Built With

* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/) - Framework used
* [Webpack](https://webpack.js.org/) - Used to generate source maps and configure hot module reloading

## Authors

* **David Burke** - All work - [benjamindburke](https://github.com/benjamindburke)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* John Harvey, for inspiring me to look into web development as a freelance career.
* Kaitlyn O'Hare, for supporting me in everything I do. I love you honey!
