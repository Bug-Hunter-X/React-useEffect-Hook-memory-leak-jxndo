```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Added return statement to clean up
    const interval = setInterval(() => {
      console.log('Count changed:', count);
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```