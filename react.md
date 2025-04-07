
# React Interview Guide

---

## Create React App using Typescript

- npx create-react-app@latest sample-app --template typescript
---

## React Overview *(01:20)*

React is a **JavaScript library** for building **user interfaces**, especially for single-page applications that require a fast, interactive experience.

- Created by **Facebook**  
- Uses a **component-based architecture**  
- Implements a **Virtual DOM** for efficient UI updates  
- Promotes **declarative programming**

---

## Single Page Applications (SPA) *(01:50)*

An SPA is a web application that loads a **single HTML page** and updates content dynamically without refreshing the page.

- Navigation is handled via **JavaScript and routing libraries** like `react-router-dom`  
- Provides a faster, smoother user experience  
- Examples: Gmail, Facebook, Instagram

---

## JSX vs HTML *(02:35)*

JSX stands for **JavaScript XML** – it allows you to write HTML-like code within JavaScript.

**Key Differences from HTML:**
- JSX uses `className` instead of `class`
- All tags must be **self-closed if necessary**: `<img />`
- You can **embed JS expressions** using `{}`

```jsx
const element = <h1>Hello, {user.name}</h1>;
```

---

## Class vs Functional Components *(03:14)*

| Feature              | Class Component             | Functional Component              |
|----------------------|-----------------------------|------------------------------------|
| Syntax               | `extends React.Component`   | Plain function                     |
| State                | `this.state`                | `useState` hook                    |
| Lifecycle Methods    | Yes                         | Via `useEffect`, `useLayoutEffect`|
| Boilerplate          | More                        | Less (cleaner syntax)              |

React now recommends **functional components** for most use cases using **hooks**.

---

## Stateless vs Stateful Components *(04:09)*

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

## Props in React *(04:50)*

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

## Props vs State *(05:22)*

| Feature     | Props                     | State                            |
|-------------|---------------------------|----------------------------------|
| Usage       | Passed from parent        | Managed within component         |
| Mutability  | Immutable (read-only)     | Mutable via `setState` / `useState` |
| Control     | External                  | Internal                         |

---

## Controlled vs Uncontrolled Components *(05:58)*

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

## Keys in Lists *(06:47)*

The `key` prop helps React **track changes in a list** of elements efficiently during re-rendering.

- Improves performance  
- Should be a **unique, stable identifier** (avoid using array index)

```jsx
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

---

## React Fragments *(07:25)*

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



## Virtual DOM *(07:50)*

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

## Lifecycle Methods *(10:10)*

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



## Props Drilling *(21:17)*

Props drilling is the process of passing props through multiple levels of components that don’t need the data, just to reach the desired child.

**Solution:**

- Use **React Context API** to avoid drilling  
- Or use **state management** libraries like Redux, Zustand, Recoil

---

## Context API *(26:33)*

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

## Higher-Order Components (HOCs) *(32:36)*

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

## Reconciliation Process *(41:01)*

Reconciliation is the process of comparing the new virtual DOM with the previous one and updating the real DOM with the minimal number of changes.

- React uses a **diffing algorithm**  
- Only the **changed nodes** are updated  
- Improves performance significantly

---

## React Portals *(42:44)*

Portals let you render a component **outside the main DOM hierarchy**.

```jsx
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
```

**Use cases:** Modals, tooltips, dropdowns that need to escape `overflow: hidden` or `z-index` issues.

---

## React Router Navigation *(48:23)*

React Router manipulates the **browser history** using JavaScript to update the UI without full page reloads.

```jsx
<Route path="/about" element={<About />} />
<Link to="/about">About</Link>
```

Internally uses the **History API** (`pushState`, `replaceState`) to update the URL and render components accordingly.

---

## Redux Overview *(52:10)*

Redux is a **predictable state management library** used to manage application state in a **centralized store**.

### Key Concepts:

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

---

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

## Redux Concepts Recap

- **Actions** – Describe what happened  
- **Reducers** – Specify how the state changes  
- **Store** – Holds and manages the state

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




## React Hooks *(14:45)*

React Hooks are functions that let you "hook into" React state and lifecycle features from function components.

---

### `useState` – For Managing State

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

### `useEffect` – For Side Effects (Data Fetch, Subscriptions, Timers)

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

### `useRef` – For Persistent Values & Accessing DOM

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

### `useContext` – For Global State (Avoid Prop Drilling)

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

### `useCallback` – Memoize Functions

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

| Hook         | Purpose                                      | Use Case                                                                 |
|--------------|----------------------------------------------|--------------------------------------------------------------------------|
| `useCallback` | Returns a **memoized function**              | Prevents **re-creation** of functions on every render (useful for props) |
| `useMemo`     | Returns a **memoized value**                 | Avoids **expensive calculations** being run on every render              |
| Syntax        | `const memoFn = useCallback(fn, deps)`      | `const memoVal = useMemo(() => compute(), deps)`                        |
| When to Use   | Passing functions to **child components**    | Heavy computations or derived state (e.g., filtering, sorting)           |
| Return Type   | **Function**                                 | **Computed Value**                                                       |

---

### `useCallback` Example

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```

- Prevents re-creation unless dependencies change

---

### `useMemo` Example

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

---

### useCallback vs useMemo

| Hook         | Purpose                        | Use Case                         |
|--------------|--------------------------------|----------------------------------|
| `useCallback`| Memoizes a function reference  | When passing callbacks to children |
| `useMemo`    | Memoizes computed value        | When recalculating is expensive   |

---


