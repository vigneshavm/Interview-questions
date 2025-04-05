## **React Interview Guide: Questions & Answers**
---
####  React?** *(01:20)*  
**Answer:**  
React is a **JavaScript library** for building **user interfaces**, especially for single-page applications that require a fast, interactive experience.  
- Created by **Facebook**  
- Uses a **component-based architecture**  
- Implements a **Virtual DOM** for efficient UI updates  
- Promotes **declarative programming**

---

####  SPA (Single Page Application)?** *(01:50)*  
**Answer:**  
An SPA is a web application that loads a **single HTML page** and updates content dynamically without refreshing the page.  
- Navigation is handled via **JavaScript and routing libraries** like `react-router-dom`  
- Provides a faster, smoother user experience  
- Examples: Gmail, Facebook, Instagram

---

####  JSX and different from HTML?** *(02:35)*  
**Answer:**  
JSX stands for **JavaScript XML** – it allows you to write HTML-like code within JavaScript.

 Key Differences from HTML:
- JSX uses **`className`** instead of `class`
- All tags must be **self-closed if necessary**: `<img />`
- You can **embed JS expressions** using `{}`

Example:
```jsx
const element = <h1>Hello, {user.name}</h1>;
```

---

####  functional Vs class components?** *(03:14)*  
| Feature              | Class Component             | Functional Component              |
|----------------------|-----------------------------|------------------------------------|
| Syntax               | `extends React.Component`   | Plain function                     |
| State                | `this.state`                | `useState` hook                    |
| Lifecycle Methods    | Yes                         | Via `useEffect`, `useLayoutEffect`|
| Boilerplate          | More                        | Less (cleaner syntax)              |

React now recommends **functional components** for most use cases using **hooks**.

---

####  Stateless and stateful components?** *(04:09)*  
- **Stateless Components**: Do not manage state internally. Receive data via **props** only.  
- **Stateful Components**: Manage and update their own internal **state**.

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

####  Props in React?** *(04:50)*  
**Answer:**  
Props (short for **properties**) are **read-only inputs** passed from a parent to child components.  
They make components **dynamic, reusable**, and modular.

Example usage:
```jsx
<Greeting name="Alice" />
```

Inside `Greeting`:
```jsx
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

---

####  State and props in React?** *(05:22)*  
| Feature     | Props                     | State                            |
|-------------|---------------------------|----------------------------------|
| Usage       | Passed from parent        | Managed within component         |
| Mutability  | Immutable (read-only)     | Mutable via `setState` / `useState` |
| Control     | External                  | Internal                         |

---

####  Controlled vs. uncontrolled components?** *(05:58)*  
- **Controlled Components**: Form inputs are controlled via React's **state**  
```jsx
<input value={name} onChange={e => setName(e.target.value)} />
```

- **Uncontrolled Components**: Form inputs are handled by the **DOM** using `ref`  
```jsx
<input ref={inputRef} />
```

> Controlled components are preferred for validation and consistency.

---

####   key attribute in React lists?** *(06:47)*  
**Answer:**  
The `key` prop helps React **track changes in a list** of elements efficiently during re-rendering.  
- Improves performance  
- Should be a **unique, stable identifier** (avoid using array index)

```jsx
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

---

####  Fragments in React?** *(07:25)*  
**Answer:**  
Fragments allow grouping multiple elements **without adding extra nodes** to the DOM.

```jsx
<>
  <td>Name</td>
  <td>Age</td>
</>
```

Alternative syntax:
```jsx
<React.Fragment>
  ...
</React.Fragment>
```

####  Virtual DOM?** *(07:50)*  
**Answer:**  
The Virtual DOM is a lightweight, in-memory representation of the real DOM.  
- React updates the **Virtual DOM first**, then compares it to the previous version (**diffing algorithm**)  
- Only **changed parts** are updated in the actual DOM (**reconciliation**)  
- Results in **better performance and faster rendering**

---

####  React lifecycle methods?** *(10:10)*  
**Answer:**  
Lifecycle methods let you run code at specific **stages of a component’s life** (Mount, Update, Unmount).

#### In class components:
```jsx
componentDidMount()      // after initial render  
componentDidUpdate()     // after update  
componentWillUnmount()   // before component is removed
```

#### In functional components:
Use the `useEffect` hook:
```jsx
useEffect(() => {
  console.log("Mounted or updated");

  return () => {
    console.log("Cleanup before unmount");
  };
}, [dependencies]);
```



####  `useState` and `useEffect` hooks.** *(14:45)*  

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

#### Props drilling in React?** *(21:17)*  
**Answer:**  
Props drilling is the process of passing props through multiple levels of components that don’t need the data, just to reach the desired child.

**Solution:**
- Use **React Context API** to avoid drilling
- Or use **state management** libraries like Redux, Zustand, Recoil



#### Context API?** *(26:33)*  
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

####  Higher-Order Components (HOCs)?** *(32:36)*  
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

**Common HOCs:** `withRouter`, `connect` (Redux)

---

####  Reconciliation in React?** *(41:01)*  
**Answer:**  
Reconciliation is the process of comparing the new virtual DOM with the previous one and updating the real DOM with the minimal number of changes.  
- React uses a **diffing algorithm**
- Only the **changed nodes** are updated  
- Improves performance significantly

---

####  React Portals?** *(42:44)*  
**Answer:**  
Portals let you render a component **outside the main DOM hierarchy**.

```jsx
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
```

**Use cases:** Modals, tooltips, dropdowns that need to escape `overflow: hidden` or `z-index` issues.

---

####  React Router handle navigation in SPAs?** *(48:23)*  
**Answer:**  
React Router manipulates the **browser history** using JavaScript to update the UI without full page reloads.

```jsx
<Route path="/about" element={<About />} />
<Link to="/about">About</Link>
```

Internally uses the **History API** (`pushState`, `replaceState`) to update the URL and render components accordingly.

---

####  Redux and why is it used?** *(52:10)*  
**Answer:**  
Redux is a **predictable state management library** used to manage application state in a **centralized store**.

 Key Concepts:
- **Store** – Holds global state  
- **Action** – Plain JS object describing a change  
- **Reducer** – Function that returns new state based on action  
- **Dispatch** – Sends action to reducer  

```jsx
// Action
const INCREMENT = "INCREMENT";

// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
```

Use with `react-redux`:
```jsx
const count = useSelector(state => state.count);
const dispatch = useDispatch();

<button onClick={() => dispatch({ type: INCREMENT })}>+</button>
```


####  HOCs (Higher-Order Components) in React?

**Answer:**  
HOCs are functions that take a component and return a new component with added functionality.

```jsx
const withLogger = (Component) => (props) => {
  console.log("Rendering component");
  return <Component {...props} />;
};
```

---

####  How can you handle errors in React components?

**Answer:**  
Use **Error Boundaries** in class components to catch JavaScript errors in child components.

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

> Functional components still require class-based boundaries or external libraries.

---

####  What are some ways to optimize React performance?

**Answer:**
- `useMemo` → Memoizes expensive computations.
- `useCallback` → Prevents function re-creation.
- `React.memo` → Skips re-renders when props don’t change.

> Also consider **code-splitting**, **lazy loading**, and avoiding **inline functions** in render.

---

####  What are the key concepts of Redux?

**Answer:**
- **Actions** – Describe what happened.
- **Reducers** – Specify how the state changes.
- **Store** – Holds and manages the state.

> State changes in Redux are **predictable**, making debugging and testing easier.

---

####  How can you implement lazy loading in React?

**Answer:**

```jsx
const LazyComponent = React.lazy(() => import("./Component"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

> `Suspense` helps to display fallback content while waiting.

---

####  What is React Strict Mode?

**Answer:**  
`<React.StrictMode>` is a tool for highlighting potential problems in an app during development.

✅ Detects:
- Unsafe lifecycle methods  
- Legacy API usage  
- Side effects  

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

> 🚫 It **doesn't affect production** behavior.

---

####  What is `React.memo`?

**Answer:**  
`React.memo` is a **HOC** that memoizes functional components and prevents unnecessary re-renders.

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});
```

Use when:
- Props change infrequently  
- Component re-renders cause performance hits

---

####  What is `useCallback` vs `useMemo`?

| Hook         | Purpose                        | Use Case                         |
|--------------|--------------------------------|----------------------------------|
| `useCallback`| Memoizes a **function**        | Stable function refs             |
| `useMemo`    | Memoizes a **value/result**    | Expensive calculations           |

```jsx
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);
```

---

####  What’s the difference between `useEffect` and `useLayoutEffect`?

| Feature            | `useEffect`               | `useLayoutEffect`            |
|--------------------|---------------------------|-------------------------------|
| Timing             | After DOM paint           | Before DOM paint              |
| Use Case           | API calls, logging        | Animations, layout measurement|
| Blocks render?     | ❌ No                     | ✅ Yes (temporarily)          |

> Use `useLayoutEffect` **only when you must measure DOM before paint** (e.g., animations).

---



Here’s a continuation of your **React Interview Guide** from **Q17** onward, formatted to match your clean, structured style:

---

####  How can you implement lazy loading in React?

**Answer:**  
React supports **code-splitting** using `React.lazy` and `Suspense` for lazy loading components.

```jsx
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./Component"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

> Improves initial load time by loading components only when needed.

---

####  What is the difference between `useMemo` and `useCallback`?

**Answer:**  
| Hook        | Purpose                                  | Returns           |
|-------------|-------------------------------------------|-------------------|
| `useMemo`   | Memoizes the **result** of a computation | **Value**         |
| `useCallback` | Memoizes a **function**                 | **Function**      |

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

####  What is the difference between `useEffect` and `useLayoutEffect`?

**Answer:**  
| Hook              | Timing                                             |
|-------------------|----------------------------------------------------|
| `useEffect`       | Runs **after** DOM paint (async)                  |
| `useLayoutEffect` | Runs **before** DOM paint (sync, blocks rendering)|

> Use `useLayoutEffect` when measuring layout or synchronizing DOM reads/writes.

---
####  Q20. How do you fetch data in React?

**Answer:**  
Using `useEffect` for fetching on component mount:

```jsx
useEffect(() => {
  fetch("/api/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

> Consider using **async/await**, **axios**, or **React Query** for more advanced needs.

---

####  What is React Query?

**Answer:**  
React Query is a **data-fetching library** that simplifies managing server state.

Benefits:
- Caching and background updates
- Automatic retries
- Pagination support
- Works great with REST & GraphQL

```jsx
const { data, isLoading } = useQuery("todos", fetchTodos);
```

---

#### Q22. How do you handle forms in React?

**Answer:**  
- Use **controlled components** (with `useState`)
- Use **form libraries** like `Formik` or `React Hook Form` for easier validation and cleaner code

```jsx
const [name, setName] = useState("");

<form onSubmit={handleSubmit}>
  <input value={name} onChange={e => setName(e.target.value)} />
</form>
```

---

#### What testing libraries are used with React?

**Answer:**  
- **Jest** – JavaScript testing framework  
- **React Testing Library** – Tests components from the user’s perspective  
- **Enzyme** – For component-level unit tests (less common now)

Example test:
```jsx
import { render, screen } from "@testing-library/react";
render(<Greeting name="Alice" />);
expect(screen.getByText("Hello, Alice")).toBeInTheDocument();
```

---




#### **What is the Virtual DOM?**  
A **lightweight copy of the real DOM**. React:  
1. Creates a **Virtual DOM** snapshot.  
2. **Diffs it** with the previous state.  
3. **Updates only changed elements** in the real DOM (efficient re-renders).  

Example:  
```js
const [count, setCount] = useState(0);
return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
```

---

#### **Controlled vs. Uncontrolled Components?**  
- **Controlled**: State managed by React (`useState`).  
- **Uncontrolled**: DOM manages the state via `useRef`.  

**Controlled Example:**  
```js
const [text, setText] = useState("");
return <input value={text} onChange={(e) => setText(e.target.value)} />;
```
**Uncontrolled Example:**  
```js
const inputRef = useRef();
return <input ref={inputRef} />;
```

---







# React Concepts - Interview Style Answers with Examples

## Virtual DOM
**Interview Answer:**  
The Virtual DOM is a lightweight copy of the actual DOM. React uses it to track changes efficiently. When state or props change, React calculates a diff and updates only what’s needed in the real DOM.

```jsx
// Behind the scenes (conceptually)
const virtualDOM = React.createElement('div', null, 'Hello');
ReactDOM.render(virtualDOM, document.getElementById('root'));
```

---

## React Lifecycle Methods
**Interview Answer:**  
Lifecycle methods are special methods in class components. Hooks like `useEffect` replicate them in functional components.

```jsx
// In class component
class Demo extends React.Component {
  componentDidMount() {
    console.log('Component Mounted');
  }

  render() {
    return <p>Hello</p>;
  }
}

// In functional component
useEffect(() => {
  console.log('Component Mounted');
}, []);
```

---

## useState Hook
**Interview Answer:**  
`useState` is a React Hook that lets us add local state to functional components.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}
```

---

## useEffect Hook
**Interview Answer:**  
`useEffect` lets us perform side effects (like API calls or subscriptions) in functional components.

```jsx
useEffect(() => {
  console.log("Component rendered or updated");
  return () => console.log("Cleanup");
}, []);
```

---

## useRef Hook
**Interview Answer:**  
`useRef` is used to access DOM elements directly or persist values across renders without re-rendering.

```jsx
const inputRef = useRef();

function focusInput() {
  inputRef.current.focus();
}

return <input ref={inputRef} />;
```

---

## useContext Hook
**Interview Answer:**  
`useContext` allows us to share state globally without prop drilling.

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
```

---

## useCallback Hook
**Interview Answer:**  
`useCallback` is used to memoize functions, preventing unnecessary re-creations during re-renders.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

## useMemo Hook
**Interview Answer:**  
`useMemo` is used to memoize expensive calculations.

```jsx
const expensiveValue = useMemo(() => {
  return computeHeavyFunction(num);
}, [num]);
```

---

## Memo vs useMemo
**Interview Answer:**  
`React.memo` is used to memoize entire components. `useMemo` is used to memoize values returned from a function.

```jsx
const MyComponent = React.memo(function ({ name }) {
  return <div>{name}</div>;
});
```

---

## React Router
**Interview Answer:**  
React Router is used for navigation in React apps, enabling multi-page experiences in SPAs.

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## Higher-Order Component (HOC)
**Interview Answer:**  
A HOC is a function that takes a component and returns a new one with added behavior.

```jsx
function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("Props: ", props);
    return <WrappedComponent {...props} />;
  };
}
```

---

## Lifting State Up
**Interview Answer:**  
Lifting state up means moving state to the nearest common ancestor of two or more components to share it.

```jsx
function Parent() {
  const [data, setData] = useState('');

  return (
    <>
      <ChildInput onChange={setData} />
      <ChildDisplay value={data} />
    </>
  );
}
```

---

## Error Boundaries
**Interview Answer:**  
Error boundaries catch JavaScript errors in child components and display a fallback UI instead of crashing the whole app.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}
```

---

## React Fragments
**Interview Answer:**  
Fragments let you return multiple elements without adding extra DOM nodes.

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

---

## Keys in Lists
**Interview Answer:**  
Keys help React identify which items have changed. They must be unique and stable.

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```


