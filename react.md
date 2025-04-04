**React Interview Guide: Questions & Answers**

### **Q1. What is React?** *(01:20)*  
**Answer:**  
React is a **JavaScript library** for building **user interfaces**, particularly single-page applications where you need a fast, interactive user experience.  
- Created by **Facebook**  
- Uses a **component-based architecture**  
- Implements a **virtual DOM** to efficiently update UI  
- Enables **declarative programming**  

---

### **Q2. What is an SPA (Single Page Application)?** *(01:50)*  
**Answer:**  
An SPA is a web app that loads a **single HTML page** and updates content dynamically without reloading the whole page.  
- Navigation is handled via **JavaScript and routing libraries** like `react-router-dom`.  
- Faster user experience as only parts of the page update.  
- Example: Gmail, Facebook, Instagram.

---

### **Q3. What is JSX, and how is it different from HTML?** *(02:35)*  
**Answer:**  
JSX stands for **JavaScript XML** – it lets you write HTML-like code in your JavaScript files.

#### Differences from HTML:
- **JSX uses `className`** instead of `class`
- Self-closing tags must be closed: `<img />`
- You can embed JS expressions using `{}`

Example:
```jsx
const element = <h1>Hello, {user.name}</h1>;
```

---

### **Q4. Difference between functional and class components?** *(03:14)*  
| Feature              | Class Component             | Functional Component              |
|----------------------|-----------------------------|------------------------------------|
| Syntax               | `extends React.Component`   | Plain function                     |
| State                | `this.state`                | `useState` hook                   |
| Lifecycle methods    | Yes                         | Via `useEffect`, `useLayoutEffect`|
| Boilerplate          | More                        | Less (cleaner syntax)             |

React recommends **functional components** for most use cases with hooks.

---

### **Q5. Difference between stateless and stateful components?** *(04:09)*  
- **Stateless Components**: Don’t hold any state. Receive data via props.  
- **Stateful Components**: Manage and modify state internally.

```jsx
// Stateless
const Hello = ({ name }) => <p>Hello, {name}</p>;

// Stateful
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### **Q6. What are props in React?** *(04:50)*  
**Answer:**  
Props (short for **properties**) are read-only inputs passed from parent to child components.  
They make components **dynamic and reusable**.

```jsx
<Greeting name="Alice" />
```

Inside `Greeting`:
```jsx
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

---

### **Q7. Difference between state and props in React?** *(05:22)*  
| Feature   | Props                     | State                      |
|-----------|---------------------------|----------------------------|
| Usage     | Passed from parent        | Managed within component   |
| Mutability | Immutable (read-only)    | Mutable via `setState`/`useState` |
| Scope     | External control          | Internal control           |

---

### **Q8. What are controlled vs. uncontrolled components?** *(05:58)*  
- **Controlled**: Input form elements controlled by React state  
```jsx
<input value={name} onChange={e => setName(e.target.value)} />
```

- **Uncontrolled**: Input values managed by the DOM itself via `ref`  
```jsx
<input ref={inputRef} />
```

Use controlled components for consistency and validation.

---

### **Q9. What is the purpose of the key attribute in React lists?** *(06:47)*  
**Answer:**  
The `key` prop helps React identify which items changed, are added, or removed during re-rendering.  
- It **optimizes performance** during updates.
- Should be a **unique, stable identifier** (not index).

```jsx
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

---

### **Q10. What are fragments in React?** *(07:25)*  
**Answer:**  
Fragments allow grouping multiple elements **without adding extra DOM nodes**.

```jsx
<>
  <td>Name</td>
  <td>Age</td>
</>
```

Alternative:
```jsx
<React.Fragment>
  ...
</React.Fragment>
```

---

## ⚙️ **Intermediate React Interview Questions**

---

### **Q11. What is the Virtual DOM?** *(07:50)*  
**Answer:**  
The Virtual DOM is a lightweight JavaScript representation of the real DOM.  
React updates the **virtual DOM first**, compares it with the previous version (**diffing algorithm**), then updates only the changed parts in the real DOM (**reconciliation**).  
- Improves performance  
- Enables fast rendering

---

### **Q12. What are React lifecycle methods?** *(10:10)*  
Lifecycle methods allow you to hook into different **phases of a component**: Mounting, Updating, and Unmounting.

#### Class component example:
```jsx
componentDidMount()      // after render
componentDidUpdate()     // after re-render
componentWillUnmount()   // before unmount
```

In **functional components**, use `useEffect()`:

```jsx
useEffect(() => {
  console.log("mounted or updated");

  return () => console.log("cleanup before unmount");
}, [dependencies]);
```

---

### **Q13. Explain `useState` and `useEffect` hooks.** *(14:45)*  

#### `useState` – for managing state
```jsx
const [count, setCount] = useState(0);
```

#### `useEffect` – for side effects (data fetch, subscriptions, timers)
```jsx
useEffect(() => {
  // Code to run on mount/update
}, [dependencies]);
```

- Without dependencies: runs on every render  
- With empty array `[]`: runs only once  
- With `[count]`: runs when `count` changes  

---

### **Q14. What is props drilling in React?** *(21:17)*  
**Answer:**  
Props drilling is the process of passing props through multiple levels of components that don’t need the data, just to reach the desired child.

Solution:
- Use **React Context API** to avoid drilling
- Or use **state management** libraries like Redux, Zustand, Recoil

---

## 💼 **Advanced React Interview Questions**

---

### **Q15. What is the Context API?** *(26:33)*  
**Answer:**  
Context API allows you to **share global data** (like auth, theme) across components **without passing props manually** at every level.

```jsx
// Create context
const ThemeContext = createContext();

<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

Use it in any component:
```jsx
const theme = useContext(ThemeContext);
```

---

### **Q16. What are Higher-Order Components (HOCs)?** *(32:36)*  
**Answer:**  
A Higher-Order Component is a function that **takes a component and returns a new component** with added features.

```jsx
function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("Props: ", props);
    return <WrappedComponent {...props} />;
  };
}
```

Common HOCs: `withRouter`, `connect` (Redux)

---

### **Q17. What is Reconciliation in React?** *(41:01)*  
**Answer:**  
Reconciliation is the process of comparing the new virtual DOM with the previous one and updating the real DOM with the minimal number of changes.  
- React uses a **diffing algorithm**
- Only the **changed nodes** are updated  
- Improves performance significantly

---

### **Q18. What are React Portals?** *(42:44)*  
**Answer:**  
Portals let you render a component **outside the main DOM hierarchy**.

```jsx
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
```

Useful for modals, tooltips, dropdowns that need to escape `overflow: hidden` or `z-index` issues.

---

### **Q19. How does React Router handle navigation in SPAs?** *(48:23)*  
**Answer:**  
React Router manipulates the **browser history** using JavaScript to update the UI without full page reloads.

```jsx
<Route path="/about" element={<About />} />
<Link to="/about">About</Link>
```

Internally uses **history API** (`pushState`, `replaceState`) to change URL and render components accordingly.

---

### **Q20. What is React Strict Mode?** *(52:35)*  
**Answer:**  
`<React.StrictMode>` helps identify potential problems in an app during development.  
It **doesn’t affect production builds**.

It:
- Detects unsafe lifecycle methods
- Warns about deprecated APIs
- Helps highlight unexpected side effects

Wrap your root:
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```



### 1.How does the `useState` hook work in React?

**Answer:** The `useState` hook manages local state in functional components.
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

### 2.What happens when a component receives new props?

**Answer:** React re-renders the component. Use `useEffect` in functional components or `componentDidUpdate` in class components to track changes.

### 3. What are the ways to share state between components in React?

**Answer:**
- **Lifting State Up:** Pass state via props.
- **Context API:** Avoids prop drilling.
- **State Management Libraries:** Redux, Zustand, Recoil.

### 4. How can you create elements in React without using JSX?
**Answer:** Yes, by using `React.createElement`.
```jsx
React.createElement('div', null, 'Hello');
```

### 5. How do controlled and uncontrolled components differ?

**Answer:**
- **Controlled Components:** React manages input state via `useState`.
- **Uncontrolled Components:** Use `ref` to access input values.

### 6. How does the Virtual DOM work?

**Answer:** A lightweight copy of the real DOM. React updates only the changed parts, improving performance.

### 7. What should you watch out for when fetching data in React?

**Answer:**
- Handle errors properly.
- Clean up subscriptions to avoid memory leaks.

### 8. What is the purpose of the `useEffect` hook?

**Answer:** It runs side effects in functional components.
```jsx
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Cleanup before unmounting");
}, []); // Runs only on mount/unmount
```
*Pitfall:* Incorrect dependency array usage can lead to infinite loops.

### 9. How do event handlers work in React?

**Answer:**
```jsx
<button onClick={() => console.log("Clicked!")}>Click Me</button>
```

### 10. What are controlled and uncontrolled forms in React?

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

### 11. How do you implement routing in React?

**Answer:**
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### 12. How does the Context API help in React?

**Answer:** It prevents prop drilling.
```jsx
const ThemeContext = createContext('light');
<ThemeContext.Provider value="dark">
  <Child />
</ThemeContext.Provider>
```

### 13.  What are HOCs in React?

**Answer:** HOCs wrap components to add additional functionality.
```jsx
const withLogger = (Component) => (props) => {
  console.log("Rendering component");
  return <Component {...props} />;
};
```

### 14. How can you handle errors in React components?

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

### 15.  What are some ways to optimize React performance?

**Answer:**
- **useMemo:** Memoizes computed values.
- **useCallback:** Memoizes functions.
- **React.memo:** Prevents unnecessary re-renders.

### 16.  What are the key concepts of Redux?

**Answer:**
- **Actions:** Define changes.
- **Reducers:** Handle state updates.
- **Store:** Centralized state storage.

### 17.  How can you implement lazy loading in React?

**Answer:**
```jsx
const LazyComponent = React.lazy(() => import("./Component"));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```



