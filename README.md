# TulsaJS React Workshop

### Dev Installation

#### Requirements

In order to successfully run this project from your local machine, you'll need the following software installed:

* Git
* Node - v5.x
* npm (this should come packaged with Node)

#### Install steps

1. Clone repo

```
git clone https://github.com/tulsajs/react-workshop.git
```

2. Install npm dependencies

```
npm install
```

3. Run the local server

Build the project and start a local dev server with this command:

```
npm run server
```

And then head over to [localhost:8080](http://localhost:8080/) to see the project live.

### Stages

##### Notes

In order to quickly switch between stages you just need to check out the stage.

Example: 
`git checkout stage-8-using-vanilla-state`

#### Stage 1: Hello World

In this stage we will show a scaffold view of how the folder structure will be setup for the application and go over exactly what it takes to get up and running with React and React Router.

#### Stage 2: Creating a Second Component

In this stage we will create a subcomponent that can be used within the Main component. It will just render a simple div with text but will give us a starting component to work with.

#### Stage 3: Creating a Second Route

This will allow us to navigate to a second route through the URL. This will load an entirely different component to work with.

#### Stage 4: Passing Props

Props allow for you to talk in-between different components. You pass down props to child components and make them easily composible.

#### Stage 5: Getting a Reference

A reference is a way to get a certain element of Reacts DOM without needing to query the actual DOM. This allows you to get text input values with ease.

#### Stage 6: Add Links to a Route

What good is a route if you can't link to it. React Router comes with a handy component you can use to link between routes.

#### Stage 7: Lifecycle Hooks

In React sometimes you need to use lifecycle hooks to approach different situations. Maybe you are loading a event that will need to be removed when the component unmounts, Or you need to add a third party library on mount. Lifecycle hooks in React have you covered.

#### Stage 8: Using Vanilla State

State management in vanilla React can get you pretty far with just a simple application. In this stage we will use the state management to update a color of the submit button that we added earlier.

#### Stage 9: Composible Components

This will show how to use this.props.children in order to pass the inner elements of a component through so that for instance you could have a card component that you pass in several other components such as the title component and body.
