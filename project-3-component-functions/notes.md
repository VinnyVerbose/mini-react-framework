# Mini Project 3 - Component Functions

## Goal

Break the UI into reusable functions that each represent a specific piece of the interface.

## What I Built

* App component
* Header component
* TodoList component
* TodoItem component

Each component receives data and returns a UI description.

## Key Lessons Learned

### Components Are Functions

A component is simply a function that takes data and returns UI.

Data In → Function → UI Out

### UI Can Be Composed

Small components can be combined to create larger components.

App
├── Header
└── TodoList
└── TodoItem

### Separation of Responsibilities

Each component has a single responsibility:

* TodoItem renders one todo
* TodoList renders many todos
* Header renders the title
* App assembles the application

This keeps complexity distributed across small, focused functions.

## Main Takeaway

React components are fundamentally functions that produce UI.

Component composition allows complex interfaces to be built from smaller, reusable pieces.
