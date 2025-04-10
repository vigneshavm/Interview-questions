
| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 |
|----|----|----|----|----|----|
| [Create React App using TypeScript](#create-react-app-using-typescript) | [React Overview](#react-overview) | [Single Page Applications (SPA)](#single-page-applications-spa) | [JSX vs HTML](#jsx-vs-html) | [Class vs Functional Components](#class-vs-functional-components) | [Stateless vs Stateful Components](#stateless-vs-stateful-components) |
| [Props in React](#props-in-react) | [Props vs State](#props-vs-state) | [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components) | [Keys in Lists](#keys-in-lists) | [React Fragments](#react-fragments) | [Virtual DOM](#virtual-dom) |
| [Lifecycle Methods](#lifecycle-methods) | [Props Drilling](#props-drilling) | [Context API](#context-api) | [Higher-Order Components (HOCs)](#higher-order-components-hocs) | [Reconciliation Process](#reconciliation-process) | [React Portals](#react-portals) |
| [React Router Navigation](#react-router-navigation) | [Error Handling in Components](#error-handling-in-components) | [Performance Optimization](#performance-optimization) | [Redux](#redux--predictable-state-management) | [Lazy Loading Components](#lazy-loading-components) | [Strict Mode in React](#strict-mode-in-react) |
| [React Router](#react-router) | [Higher-Order Component (HOC)](#higher-order-component-hoc) | [Lifting State Up](#lifting-state-up) | [Error Boundaries](#error-boundaries) | [React Hooks](#react-hooks) | 


---

## Create React App using Typescript

- npx create-react-app@latest sample-app --template typescript

---

## React Overview 

React is a **JavaScript library** for building **user interfaces**, especially for single-page applications that require a fast, interactive experience.

- Created by **Facebook**  
- Uses a **component-based architecture**  
- Implements a **Virtual DOM** for efficient UI updates  
- Promotes **declarative programming**

---

## Single Page Applications (SPA) 

An SPA is a web application that loads a **single HTML page** and updates content dynamically without refreshing the page.

- Navigation is handled via **JavaScript and routing libraries** like `react-router-dom`  
- Provides a faster, smoother user experience  
- Examples: Gmail, Facebook, Instagram

---

## JSX vs HTML 

JSX stands for **JavaScript XML** – it allows you to write HTML-like code within JavaScript.

**Key Differences from HTML:**
- JSX uses `className` instead of `class`
- All tags must be **self-closed if necessary**: `<img />`
- You can **embed JS expressions** using `{}`

```jsx
const element = <h1>Hello, {user.name}</h1>;
```

---

## Class vs Functional Components 

| Feature              | Class Component             | Functional Component              |
|----------------------|-----------------------------|------------------------------------|
| Syntax               | `extends React.Component`   | Plain function                     |
| State                | `this.state`                | `useState` hook                    |
| Lifecycle Methods    | Yes                         | Via `useEffect`, `useLayoutEffect`|
| Boilerplate          | More                        | Less (cleaner syntax)              |

React now recommends **functional components** for most use cases using **hooks**.

---

## Stateless vs Stateful Components 

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

## Props in React 

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

## Props vs State 

| Feature     | Props                     | State                            |
|-------------|---------------------------|----------------------------------|
| Usage       | Passed from parent        | Managed within component         |
| Mutability  | Immutable (read-only)     | Mutable via `setState` / `useState` |
| Control     | External                  | Internal                         |

---

## Controlled vs Uncontrolled Components 

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

## Keys in Lists 

The `key` prop helps React **track changes in a list** of elements efficiently during re-rendering.

- Improves performance  
- Should be a **unique, stable identifier** (avoid using array index)

```jsx
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

---

## React Fragments 

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



## Virtual DOM 

- The Virtual DOM is a lightweight, in-memory representation of the real DOM. React uses it to optimize performance by minimizing direct DOM manipulations.
- React updates the Virtual DOM first, then uses a diffing algorithm to compare it with the previous version.
- It identifies and updates only the parts that changed in the actual DOM — a process known as reconciliation.
- This results in faster rendering and improved performance.

```jsx
// Behind the scenes (conceptually)
const virtualDOM = React.createElement('div', null, 'Hello');
ReactDOM.render(virtualDOM, document.getElementById('root'));
```

---

## Lifecycle Methods 

Lifecycle methods let you run code at specific **stages of a component’s life** (Mount, Update, Unmount).
Lifecycle methods are special methods in class components. Hooks like `useEffect` replicate them in functional components.
### In class components:

```jsx
class Demo extends React.Component {
 componentDidMount() {
    console.log('Component Mounted');
  }      // after initial render  
componentDidUpdate()     // after update  
componentWillUnmount()   // before component is removed
 render() {
    return <p>Hello</p>;
  }
}
```

### In functional components:

Use the `useEffect` hook:

```jsx
useEffect(() => {
  console.log("Mounted or updated");

  return () => {
    console.log("Cleanup before unmount");
  };
}, [dependencies]);
```

---



## Props Drilling 

Props drilling is the process of passing props through multiple levels of components that don’t need the data, just to reach the desired child.

**Solution:**

- Use **React Context API** to avoid drilling  
- Or use **state management** libraries like Redux, Zustand, Recoil

---

## Context API

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

## Higher-Order Components (HOCs) 

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

## Reconciliation Process 

Reconciliation is the process of comparing the new virtual DOM with the previous one and updating the real DOM with the minimal number of changes.

- React uses a **diffing algorithm**  
- Only the **changed nodes** are updated  
- Improves performance significantly

---

## React Portals 

Portals let you render a component **outside the main DOM hierarchy**.

```jsx
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
```

**Use cases:** Modals, tooltips, dropdowns that need to escape `overflow: hidden` or `z-index` issues.

---

## React Router Navigation 

React Router manipulates the **browser history** using JavaScript to update the UI without full page reloads.

```jsx
<Route path="/about" element={<About />} />
<Link to="/about">About</Link>
```

Internally uses the **History API** (`pushState`, `replaceState`) to update the URL and render components accordingly.



## Error Handling in Components

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

## Performance Optimization

- `useMemo` → Memoizes expensive computations.  
- `useCallback` → Prevents function re-creation.  
- `React.memo` → Skips re-renders when props don’t change.

> Also consider **code-splitting**, **lazy loading**, and avoiding **inline functions** in render.

---

---

## Redux – Predictable State Management

**Redux** is a predictable state container for JavaScript applications.  
It helps manage **application state** in a **centralized store**, making data flow easier to debug and test.

---

**Key Concepts**

| **Concept**   | **Description**                                                                 |
|---------------|----------------------------------------------------------------------------------|
| **Store**     | Holds and manages the entire global application state                            |
| **Action**    | A plain JavaScript object that describes **what happened**                       |
| **Reducer**   | A pure function that takes the current state and an action, then returns new state |
| **Dispatch**  | Sends an action to the store to trigger a state update via reducers              |

---

**Redux Flow**

1. **UI** triggers an **action** (e.g., button click)
2. **Dispatch** sends the action to the **store**
3. **Reducers** handle the action and return new state
4. **Store** updates, and **UI** re-renders with new state

---

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

> Redux is ideal when multiple components need access to the same state or when app state becomes too complex to manage via props or local state.
> State changes in Redux are **predictable**, making debugging and testing easier.

---

## Lazy Loading Components

```jsx
const LazyComponent = React.lazy(() => import("./Component"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

> `Suspense` helps to display fallback content while waiting.

---

## Strict Mode in React

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




## React Hooks 

React Hooks are functions that let you "hook into" React state and lifecycle features from function components.



| **Hook**                   | **Purpose**                                                                 | **When to Use**                                                          | **Example Use Case**                                 |
|----------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------|
| `useState`                 | Store and update local state                                                | Any dynamic value inside a component                                     | Form inputs, counters, toggles                      |
| `useEffect`                | Perform side effects                                                        | Fetching data, setting timers, subscriptions                             | API calls, local storage, DOM listeners             |
| `useContext`               | Consume data from a context provider                                        | Access global values without prop drilling                               | Theme, user auth, language preference               |
| `useReducer`              | Complex state logic with actions                                            | When state updates depend on previous state                              | Forms, shopping carts, toggle reducers              |
| `useCallback`              | Memoize a callback function                                                 | Prevent re-renders of children receiving functions as props              | Event handlers, expensive calculations              |
| `useMemo`                 | Memoize an expensive computed value                                         | Heavy calculations that depend on specific inputs                        | Filtering/sorting lists, derived state              |
| `useRef`                   | Store mutable values or DOM refs                                            | When value shouldn't trigger re-render                                   | Accessing input fields, tracking previous values    |
| `useImperativeHandle`      | Expose methods from child component using `ref`                            | Parent needs to call child functions directly                            | Custom modals, form controls                        |
| `useLayoutEffect`          | Like `useEffect` but fires before painting                                 | DOM reads/measurements to avoid flicker                                  | Animations, layout adjustments                      |
| `useDebugValue`            | Show custom hook info in React DevTools                                     | Inside custom hooks                                                      | Debugging user login status                         |
| `useDeferredValue`         | Delay rendering a value (concurrent-friendly)                              | Heavy UI renders based on fast input                                    | Real-time search filter                             |
| `useTransition`            | Mark non-urgent updates for smoother UI                                     | Updating large UI without blocking input                                | Tab switching, background state changes             |
| `useId`                    | Generate unique IDs for accessibility & SSR                                 | Generate stable IDs for input-label, list keys                           | Forms with server-rendered markup                   |
| `useSyncExternalStore`     | Subscribe to external data stores                                           | For state libraries, global stores                                       | Zustand, Redux, or any custom external store        |
| `useInsertionEffect`       | Inject styles before layout/render                                          | With CSS-in-JS libraries                                                 | Emotion, styled-components                          |


---

### `useState` 
– For Managing State

```jsx
const [count, setCount] = useState(0);
```

- Adds state to functional components  
- Returns a stateful value and a function to update it

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}
```

---

### `useEffect`
– For Side Effects (Data Fetch, Subscriptions, Timers)

```jsx
useEffect(() => {
  // Code to run on mount/update
}, [dependencies]);
```

- Without dependencies: runs on every render  
- With empty array `[]`: runs only once  
- With `[count]`: runs when `count` changes

```jsx
useEffect(() => {
  console.log("Component rendered or updated");
  return () => console.log("Cleanup");
}, []);
```

---

### `useRef` 
– For Persistent Values & Accessing DOM

```jsx
const inputRef = useRef();

function focusInput() {
  inputRef.current.focus();
}

return <input ref={inputRef} />;
```

- Accesses DOM elements directly  
- Stores mutable values that do not cause re-renders

---

### `useContext` 
– For Global State (Avoid Prop Drilling)

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

### `useCallback` 
– Memoize Functions

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

- Prevents unnecessary re-creation of functions on re-renders  
- Useful when passing callbacks to memoized child components

---

### `useMemo` – Memoize Expensive Calculations

```jsx
const expensiveValue = useMemo(() => {
  return computeHeavyFunction(num);
}, [num]);
```

- Avoids recalculating expensive values on every render  
- Runs only when dependencies change

---

### `React.memo` vs `useMemo`

```jsx
const MyComponent = React.memo(function ({ name }) {
  return <div>{name}</div>;
});
```

- `React.memo` memoizes components  
- `useMemo` memoizes values

---

### `useCallback` vs `useMemo`

---

| Hook         | Purpose                                      | Use Case                                                                 |
|--------------|----------------------------------------------|--------------------------------------------------------------------------|
| `useCallback` | Returns a **memoized function**              | Prevents **re-creation** of functions on every render (useful for props) |
| `useMemo`     | Returns a **memoized value**                 | Avoids **expensive calculations** being run on every render              |
| Syntax        | `const memoFn = useCallback(fn, deps)`      | `const memoVal = useMemo(() => compute(), deps)`                        |
| When to Use   | Passing functions to **child components**    | Heavy computations or derived state (e.g., filtering, sorting)           |
| Return Type   | **Function**                                 | **Computed Value**                                                       |

---

 **`useCallback` Example**

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```

- Prevents re-creation unless dependencies change

---

 **`useMemo` Example**

```jsx
const filteredItems = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);
```

- Avoids filtering on every render unless `items` change

---


### React.memo Hook

`React.memo` is a **HOC** that memoizes functional components and prevents unnecessary re-renders.

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});
```

Use when:

- Props change infrequently  
- Component re-renders cause performance hits




