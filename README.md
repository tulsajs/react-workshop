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
git clone
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

#### Stage 1 Hello World

In this stage we will show a scaffold view of how the folder structure will be setup for the application and go over exactly what it takes to get up and running with react and react-router.

#### Stage 2 Creating a second component

In this stage we will create a subcomponent that can be used within the Main component. It again will just render a simple div with text but will give us a starting component to work with.

#### Stage 3 Creating a second route

This will allow us to navigate to a second route through the url. This will load an entirely different component to work with.

#### Stage 4 Passing Props

Props allow for you to talk inbetween different components. You pass down props to child components and make them easily composible.

#### Stage 5 Getting a reference

A reference is a way to get a certain element of reacts dom without needing to query the actual dom. This allows you to get text input values with ease.

#### Stage 6 Add links to a route

What good is a route if you can't link to it. React Router comes with a handy component you can use to link between routes.

#### Stage 7 Lifecycle hooks

In react sometimes you need to use lifecycle hooks to approach different situations. Maybe you are loading a event that will need to be removed when the component unmounts, Or you need to add a third party library on mount. Lifecycle hooks in react have you covered.

#### Stage 8 Using Vanilla State

State management in vanilla react can get you pretty far with just a simple application. In this stage we will use the state management to update a color of the submit button that we added earlier.

#### Stage 9 Composible components

This will show how to use this.props.children in order to pass the inner elements of a component through so that for instance you could have a card component that you pass in several other components such as the title component and body.
