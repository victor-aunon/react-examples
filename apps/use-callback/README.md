# useCallback Example

## Overview

`useCallback` is a React Hook that lets you cache a function definition between re-renders. It returns a memoized version of the callback that only changes if one of its dependencies has changed.

[Official Documentation](https://react.dev/reference/react/useCallback)

## What This Example Demonstrates

This app shows how `useCallback` prevents a function from being recreated on every render unless its dependencies change. The `expensiveFunction` is memoized with `useCallback` and only depends on `multiplier`. 

When you:
- **Click "Increment Count"** - The count state updates, but `expensiveFunction` is not recreated (because `multiplier` hasn't changed), so the `useEffect` doesn't re-run
- **Change the multiplier input** - The `multiplier` dependency changes, causing `expensiveFunction` to be recreated, which triggers the `useEffect` to run

Check the console to see that the expensive calculation only runs when the multiplier changes, not when count changes, even though both are used inside the function.

**Key Concepts:**
- Memoizing functions to maintain referential equality
- Controlling when effects re-run by stabilizing their dependencies
- Optimizing performance by preventing unnecessary function recreations
- Understanding dependency arrays in `useCallback` and `useEffect`
