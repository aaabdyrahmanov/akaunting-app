# Akaunting Frontend Developer Case Study - Setup Guide

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Requirements
1. Download [npm](https://www.npmjs.com/get-npm) and install it on your local machine.
2. Before you start using [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable), you'll first need to install it on your system.

### Installing

```bash
# move into project folder
cd akaunting-case-study

# install the dependencies
yarn install

# (optional) add your variables. Configurations might be modified according to preferences.
nano .env
```

#### Running the project

```bash
yarn run serve
```

**Note:** To make sure that project codebase is suitable for the linting rules, run the following command to fix them automatically if there is possibility. 
```sh
    yarn run lint --fix
```

## Built With

* [Vue.js](https://vuejs.org/) - The web framework used
* [Vuex](https://vuex.vuejs.org/) - State Management Library
* [Axios](https://github.com/axios/axios) - For transorming the data via HTTP protocol

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details