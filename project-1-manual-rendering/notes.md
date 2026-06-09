# Mini Project 1 - Manual DOM Rendering

## Goal

Build a simple counter and todo application using direct DOM manipulation to understand the challenges of manually synchronizing application state and the user interface.

## What I Built

* Counter with increment, decrement, and reset functionality
* Todo list with add, delete, and complete features
* Manual render functions for updating the UI
* Event handlers that modify state and trigger rendering

## Key Lessons Learned

### State and UI Are Separate

The application data lives in JavaScript variables and objects, while the DOM is simply a visual representation of that data.

### Manual Synchronization Is Repetitive

Every state change required an explicit render call:

Event → State Change → Manual Render

As the application grew, remembering which render functions to call became increasingly repetitive and error-prone.

### The DOM Is Stateful

Direct DOM manipulation requires manually creating, updating, removing, and styling elements. This becomes difficult to manage as complexity increases.

## Main Takeaway

Modern UI frameworks exist largely to solve the problem of keeping application state and the UI synchronized automatically.
