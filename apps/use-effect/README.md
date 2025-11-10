# useEffect Example

## Overview

`useEffect` is a React Hook that lets you synchronize a component with external systems and perform side effects in response to state or prop changes.

[Official Documentation](https://react.dev/reference/react/useEffect)

## What This Example Demonstrates

This app illustrates how to use `useEffect` with different dependency arrays to control when side effects run. It shows:

1. **Component mount effect** - An effect with an empty dependency array `[]` that runs only once when the component mounts
2. **State-dependent effect** - An effect with `[count]` in the dependency array that runs whenever the count changes, changing the text color when count is a multiple of 5

**Key Concepts:**
- Running effects on component mount
- Running effects in response to state changes
- Conditional logic within effects
- Console logging for debugging effect behavior
