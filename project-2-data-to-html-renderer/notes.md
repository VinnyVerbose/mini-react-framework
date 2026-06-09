# Mini Project 2 - Data-to-HTML Renderer

## Goal

Move away from manually creating DOM nodes and instead generate the UI from application state using HTML strings.

## What I Built

* Todo state stored as plain JavaScript objects
* Rendering system that converts state into HTML strings
* Single render function that rebuilds the UI from state
* UI generated entirely from data

## Key Lessons Learned

### State Becomes the Source of Truth

Instead of storing DOM elements, the application stores plain data.

The UI is derived from that data whenever rendering occurs.

### UI Can Be Described

Instead of imperatively manipulating the DOM, the application describes what the UI should look like based on current state.

State → UI Description → Render

### Rendering Entire UI Is Simpler

Although rebuilding the entire UI can be inefficient, it dramatically simplifies application architecture because rendering becomes predictable and consistent.

## Main Takeaway

UI can be treated as a function of application state.

This idea forms the foundation of React and many modern frontend frameworks.
