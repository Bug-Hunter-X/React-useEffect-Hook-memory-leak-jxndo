# React useEffect Hook Memory Leak

This example demonstrates a common issue in React applications: memory leaks caused by missing return statements in the `useEffect` hook. The `useEffect` hook's second argument (dependency array) is crucial for defining when the effect should run and when it should clean up.  Failing to include a return statement results in uncleaned resources, potentially leading to performance degradation or unexpected behavior. 

## Bug

The `bug.js` file contains a component with an `useEffect` hook that logs the count.  It's missing the cleanup function, which can lead to memory leaks if the component unmounts before the cleanup is performed.

## Solution

The `bugSolution.js` file demonstrates the correct usage of `useEffect` with the cleanup function. The `return` statement within `useEffect` ensures that any cleanup actions (e.g., canceling timers, unsubscribing from events) are performed when the component unmounts or when the dependencies change.  This prevents memory leaks.