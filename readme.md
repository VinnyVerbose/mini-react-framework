# Mini React Framework

## Overview

This repository documents my journey of learning how React works internally by building a simplified React-like framework from scratch using only vanilla JavaScript.

The goal is not to recreate React feature-for-feature, but to understand the core ideas that led to React's design and to experience the problems that React solves.

Throughout the project, each mini project introduces a new architectural concept and builds upon the previous one.

## Learning Philosophy

Rather than learning React as a black box, this project focuses on discovering React's ideas through implementation.

Each stage begins with a simpler approach, identifies its limitations, and then evolves toward a more sophisticated solution.

This mirrors the historical evolution of frontend development and helps build a deeper understanding of modern UI frameworks.

## Roadmap

### Project 1 - Manual DOM Rendering

Learned how difficult it becomes to manually keep application state and the DOM synchronized.

Key Concept:

State → Manual UI Updates

### Project 2 - Data-to-HTML Renderer

Stopped storing DOM elements and began storing plain JavaScript data. The UI became a generated description derived from application state.

Key Concept:

UI = Function(State)

### Project 3 - Component Functions

Introduced reusable UI functions that can be composed into larger UI structures.

Key Concept:

UI = Composition of Components

### Future Projects

* Virtual DOM Objects
* Render Engine
* Virtual DOM Diffing
* Event System
* State Management System
* React-like Hooks
* Framework Integration
* Final Mini React Framework

## Architectural Evolution

### Stage 1

Direct DOM manipulation:

Event → State Change → Manual DOM Updates

### Stage 2

Data-driven rendering:

State → HTML Description → Render

### Stage 3

Component-based architecture:

State → Components → UI Description → Render

### Future Goal

Build a complete rendering pipeline:

State → Components → Virtual DOM → Diffing → DOM Updates

## What I Hope To Learn

* Why React exists
* How rendering systems work
* Why component architecture is useful
* How Virtual DOM concepts work
* How state management systems function
* How React updates the UI efficiently
* The tradeoffs involved in modern frontend frameworks

## Final Goal

By the end of this project, I aim to understand the core concepts behind React well enough to explain and implement a simplified version of:

* Components
* Rendering
* Virtual DOM
* Reconciliation
* State Management
* Hooks

using only vanilla JavaScript and a framework built from scratch.
