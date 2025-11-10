# useEffectEvent Example

## Overview

`useEffectEvent` is a React 19 Hook that lets you extract non-reactive logic from effects. It allows you to access the latest values of props and state without adding them to the effect's dependency array.

[Official Documentation](https://react.dev/reference/react/experimental_useEffectEvent)

## What This Example Demonstrates

This app demonstrates how `useEffectEvent` solves the problem of accessing the latest state value from within a `useEffect` without triggering the effect to re-run. 

The example sets up an interval in `useEffect` (with an empty dependency array) that logs the current count every 2 seconds. Using `useEffectEvent`, the `logCount` function always has access to the latest `count` value, even though `count` is not in the effect's dependency array. Without `useEffectEvent`, you would either:
- Need to add `count` to dependencies (causing the interval to restart on every count change)
- Or capture a stale `count` value

**Key Concepts:**
- Separating reactive and non-reactive logic in effects
- Accessing latest state values without adding dependencies
- Avoiding effect re-execution when state changes
- Managing intervals with cleanup
