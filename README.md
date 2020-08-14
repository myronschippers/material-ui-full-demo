# Customizing Material-UI


## Description

This repository is meant to act as a demonstration of how to customize an application using Material-UI. This is specifically pertaining to a React application. There will be examples of an initial setup and usage of base components. Customization will include; themeing, individual style overrides, & global component customization.


## Branching Structure

```
- • - master
  |
  •
  | \
  |  • - develop
  |  |
  |  •
  |  | \
  |  |  • - feature-mui-setup
  |  | /
  |  •
  |  | \
  |  |  • - feature-mui-theme
  |  | /
  |  •
  |  | \
  |  |  • - feature-mui-overrides
  |  | /
  |  •
  |  | \
  |  |  • - feature-mui-styles
  |  | /
  |  •
  |  |
```

**Branch Details:**
1. `master`
    - fully functional application with no material-ui
1. `develop`
    - completely customized application leveraging material-ui, core behavior remains the same
1. `feature-mui-setup`
    - bringing in material-ui dependencies and using the available components
1. `feature-mui-theme`
    - shows how to setup and configure material-ui theme settings
1. `feature-mui-overrides`
    - demo of how to override core component properties/styling at a global level
1. `feature-mui-styles`
    - demonstrates how to add custom styling to individual material-ui components


## Prerequisites

- Node.js (*recommend Node Version Manager, `nvm`, for install*)
- PostgreSQL (*recommend Postico for testing*)


## Installation

The follow are instructions on setting up, installing, and running the local development environment


### Setting Up the Database

- in terminal from any directory run: `createdb fantastic_bestiary`
- from your favorite GUI connect to the `fantastic_bestiary` database and run the queries from `/database/init.js`
- in order to load up some sample data run the queries from `/database/data.js`


### Local Development

*All terminal commands in this section should be run from the root of the project directory.*

- terminal: `npm install`
- terminal: `npm run server`
- in new terminal: `npm run client`


#### Server

Server is running in a Node environment on port 5000 with Express as the web framework.