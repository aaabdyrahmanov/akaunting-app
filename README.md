# Akaunting Frontend Developer Case Study - Setup Guide

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Requirements
- Package manager to install packages [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)
- Installed local [Node.js](https://nodejs.org/) environment

Clone the repo in your environment

```bash
git clone https://github.com/aaabdyrahmanov/akaunting-case-study.git
```

### Installing

```bash
# move into project folder
cd akaunting-case-study

# install the dependencies
yarn install

# (optional) add your variables. Configurations might be modified according to the preferences.
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
* [Element](https://element.eleme.io/#/en-US) - A Desktop UI Library
* [Axios](https://github.com/axios/axios) - For transorming the data via HTTP protocol

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details