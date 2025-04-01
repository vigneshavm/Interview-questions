
# **React Interview Guide**

### **1. useState Hook**
- Manages local state in functional components.
```javascript
const [count, setCount] = useState(0);
setCount(count + 1);
```

### **2. Component Receiving New Props**
- React re-renders component.
- Use **`useEffect`** (functional) or **`componentDidUpdate`** (class) for tracking changes.

### **3. Sharing State Between Components**
- **Lifting State Up**: Pass via props.
- **Context API**: Avoids prop drilling.
- **State Management**: Redux, Zustand, Recoil.

### **4. React Without JSX**
```javascript
React.createElement('div', null, 'Hello');
```

### **5. Controlled vs Uncontrolled Components**
- **Controlled**: React manages input state via `useState`.
- **Uncontrolled**: Use `ref` to access input values.

### **6. Virtual DOM**
- A lightweight copy of the real DOM. React updates only the changed parts, improving performance.

### **7. Pitfalls When Fetching Data**
- Handle errors properly.
- Clean up subscriptions to avoid memory leaks.

### **8. useEffect Hook**
```javascript
useEffect(() => {
  console.log("Component mounted");

  return () => console.log("Cleanup before unmounting");
}, []);  // Runs only on mount/unmount
```
- **Pitfalls**: Incorrect dependency array usage can lead to infinite loops.

### **9. Event Handling**
```javascript
<button onClick={() => console.log("Clicked!")}>Click Me</button>
```

### **10. Handling Forms in React**
- **Controlled**: 
```javascript
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />;
```
- **Uncontrolled**: 
```javascript
const inputRef = useRef(null);
<button onClick={() => console.log(inputRef.current.value)}>Submit</button>;
```

### **11. React Router**
- Manages navigation in SPAs.
```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### **12. Context API (Avoid Prop Drilling)**
```javascript
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}
```

### **13. Higher-Order Components (HOCs)**
```javascript
const withLogger = (Component) => (props) => {
  console.log("Rendering component");
  return <Component {...props} />;
};
```

### **14. Error Boundaries**
- Catches errors in child components.
```javascript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log("Error:", error);
  }
  render() {
    return this.props.children;
  }
}
```

### **15. Performance Optimization**
- **useMemo**: Memoizes computed values.
- **useCallback**: Memoizes functions.
- **React.memo**: Prevents unnecessary re-renders.

### **16. Redux State Management**
- **Actions**: Define changes.
- **Reducers**: Handle state updates.
- **Store**: Centralized state storage.

### **17. Lazy Loading in React**
```javascript
const LazyComponent = React.lazy(() => import("./Component"));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>;
```

### **18. React Testing**
- **Jest**: For unit testing.
- **React Testing Library**: For rendering components in tests.

---
