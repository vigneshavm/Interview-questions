**React Interview Guide: Questions & Answers**

### 1. What is the useState Hook?
**Question:** How does the `useState` hook work in React?
**Answer:** The `useState` hook manages local state in functional components.
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

### 2. How does React handle components receiving new props?
**Question:** What happens when a component receives new props?
**Answer:** React re-renders the component. Use `useEffect` in functional components or `componentDidUpdate` in class components to track changes.

### 3. How can you share state between components?
**Question:** What are the ways to share state between components in React?
**Answer:**
- **Lifting State Up:** Pass state via props.
- **Context API:** Avoids prop drilling.
- **State Management Libraries:** Redux, Zustand, Recoil.

### 4. Can you use React without JSX?
**Question:** How can you create elements in React without using JSX?
**Answer:** Yes, by using `React.createElement`.
```jsx
React.createElement('div', null, 'Hello');
```

### 5. What is the difference between controlled and uncontrolled components?
**Question:** How do controlled and uncontrolled components differ?
**Answer:**
- **Controlled Components:** React manages input state via `useState`.
- **Uncontrolled Components:** Use `ref` to access input values.

### 6. What is the Virtual DOM?
**Question:** How does the Virtual DOM work?
**Answer:** A lightweight copy of the real DOM. React updates only the changed parts, improving performance.

### 7. What are common pitfalls when fetching data in React?
**Question:** What should you watch out for when fetching data in React?
**Answer:**
- Handle errors properly.
- Clean up subscriptions to avoid memory leaks.

### 8. How does the useEffect hook work?
**Question:** What is the purpose of the `useEffect` hook?
**Answer:** It runs side effects in functional components.
```jsx
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Cleanup before unmounting");
}, []); // Runs only on mount/unmount
```
*Pitfall:* Incorrect dependency array usage can lead to infinite loops.

### 9. How do you handle events in React?
**Question:** How do event handlers work in React?
**Answer:**
```jsx
<button onClick={() => console.log("Clicked!")}>Click Me</button>
```

### 10. How do you handle forms in React?
**Question:** What are controlled and uncontrolled forms in React?
**Answer:**
- **Controlled:**
```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />;
```
- **Uncontrolled:**
```jsx
const inputRef = useRef(null);
<button onClick={() => console.log(inputRef.current.value)}>Submit</button>;
```

### 11. How does React Router work?
**Question:** How do you implement routing in React?
**Answer:**
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### 12. What is the Context API?
**Question:** How does the Context API help in React?
**Answer:** It prevents prop drilling.
```jsx
const ThemeContext = createContext('light');
<ThemeContext.Provider value="dark">
  <Child />
</ThemeContext.Provider>
```

### 13. What are Higher-Order Components (HOCs)?
**Question:** What are HOCs in React?
**Answer:** HOCs wrap components to add additional functionality.
```jsx
const withLogger = (Component) => (props) => {
  console.log("Rendering component");
  return <Component {...props} />;
};
```

### 14. What are Error Boundaries in React?
**Question:** How can you handle errors in React components?
**Answer:** Use error boundaries to catch errors in child components.
```jsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log("Error:", error);
  }
  render() {
    return this.props.children;
  }
}
```

### 15. How can you optimize performance in React?
**Question:** What are some ways to optimize React performance?
**Answer:**
- **useMemo:** Memoizes computed values.
- **useCallback:** Memoizes functions.
- **React.memo:** Prevents unnecessary re-renders.

### 16. How does Redux manage state?
**Question:** What are the key concepts of Redux?
**Answer:**
- **Actions:** Define changes.
- **Reducers:** Handle state updates.
- **Store:** Centralized state storage.

### 17. What is Lazy Loading in React?
**Question:** How can you implement lazy loading in React?
**Answer:**
```jsx
const LazyComponent = React.lazy(() => import("./Component"));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### 18. What are the testing tools for React?
**Question:** How can you test React applications?
**Answer:**
- **Jest:** For unit testing.
- **React Testing Library:** For rendering components in tests.
