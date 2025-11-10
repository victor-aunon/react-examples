# useState Example

## Overview

`useState` is a React Hook that lets you add state to functional components. It returns a stateful value and a function to update it.

[Official Documentation](https://react.dev/reference/react/useState)

## What This Example Demonstrates

This app shows how to reset a component's state by changing its `key` prop. The parent component uses `useState` to manage a unique key, and when the "Reset" button is clicked, it generates a new key, which forces React to unmount and remount the `CounterCard` component with fresh initial state.

**Key Concepts:**
- Using `useState` to manage a counter value
- Resetting component state by changing the `key` prop
- Component unmounting and remounting behavior
