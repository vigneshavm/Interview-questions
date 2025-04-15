| **Category**                          | **Topics**                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **React Basics** | • [Create React App using TypeScript](#create-react-app-using-typescript) • [React Overview](#react-overview) • [Single Page Applications (SPA)](#single-page-applications-spa) • [JSX vs HTML](#jsx-vs-html) • [Why Use React](#why-use-react) |
| **React Component Types**          | •  [Class vs Functional Components](#class-vs-functional-components) •  [Stateless vs Stateful Components](#stateless-vs-stateful-components) •  [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components) •  [Lifting State Up](#lifting-state-up) •  [Component Composition vs Inheritance](#Component-Composition-vs-Inheritance) •  [Controlled Components](#controlled-components)  •  [Uncontrolled Components over Controlled Components](#Uncontrolled-Components-over-Controlled-Components)
| **Props, State & Context**          | •  [Props ](#props-in-react) •  [Props vs State](#props-vs-state) •  [React Children Prop](#react-children-prop) •  [Redux](#redux--predictable-state-management) || 24 | [React Context API](#context-api) •  [Props Drilling Problem](#props-drilling) •  [Higher-Order Components (HOCs)](#higher-order-components-hocs) •  [Redux vs Context API](#redux-vs-context-api) •  [Zustand, Recoil, or Jotai?](#zustand-or-other-lightweight-state-libs) |
| **Routing**          | •  [React Router Introduction](#react-router) •  [Navigation Methods](#react-router-navigation) •  [Dynamic Routing](#dynamic-routing) •  [Route Protection / Auth Routing](#route-protection) |
| **Forms and Validation**          | •  [Form Validation with Formik / React Hook Form](#Form-Validation-with-Formik) •  [Handling Multiple Inputs in a Form](#handling-multiple-inputs) |
| **Lists and DOM**          | •  [Keys in Lists](#keys-in-lists) •  [Virtual DOM](#virtual-dom) •  [Reconciliation Process](#reconciliation-process) •  [Refs ](#refs-in-react) •  [React Fragments](#react-fragments) •  [React Portals](#react-portals) |
| **Performance Optimization**          | •  [Avoiding Unnecessary Rerenders](#avoid-unnecessary-renders) •  [React Profiler](#react-profiler) |
| **Testing React**          | •  [Testing Libraries (Jest, React Testing Library)](#testing-librariest) •  [Unit vs Integration vs E2E ](#unit-vs-integration-testingt) •  [Testing Hooks](#testing-hookst) •  [Mocking APIs  Tests](#mocking-apis-react-tests) |
| **Best Practices & Architecture**          | •  [Folder Structure Best Practices](#folder-structure-best-practices) •  [Atomic Design ](#atomic-design-principles) •  [Component Reusability](#component-reusability) •  [PropTypes vs TypeScript](#proptypes-vs-typescript) •  [Error Boundaries](#error-boundaries) •  [Strict Mode](#strict-mode-in-react) |
| **API Integration**          | •  [Fetching Data with Axios / Fetch](#fetching-data) •  [Handling Loading, Error States](#handling-api-states) •  [Using useEffect for Data Fetching](#useeffect-fetching) •  [React Query / SWR – What and Why?](#react-query-swr) |


| Q1 | Q2 | Q3 | Q4 | Q5 | Q6 |
|----|----|----|----|----|----|
| [Create React App using TypeScript](#create-react-app-using-typescript) | [React Overview](#react-overview) | [Single Page Applications (SPA)](#single-page-applications-spa) | [JSX vs HTML](#jsx-vs-html) | [Why Use React](#Why-Use-React)
|[Class vs Functional Components](#class-vs-functional-components) | [Stateless vs Stateful Components](#stateless-vs-stateful-components) |
| [Props in React](#props-in-react) | [Props vs State](#props-vs-state) | [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components) | [Keys in Lists](#keys-in-lists) | [React Fragments](#react-fragments) | [Virtual DOM](#virtual-dom) |
| [Lifecycle Methods](#lifecycle-methods) | [Props Drilling](#props-drilling) | [Context API](#context-api) | [Higher-Order Components (HOCs)](#higher-order-components-hocs) | [Reconciliation Process](#reconciliation-process) | [React Portals](#react-portals) |
| [React Router Navigation](#react-router-navigation) | [Error Handling in Components](#error-handling-in-components) | [Performance Optimization](#performance-optimization) | [Redux](#redux--predictable-state-management) | [Lazy Loading Components](#lazy-loading-components) | [Strict Mode in React](#strict-mode-in-react) |
| [React Router](#react-router) | [Lifting State Up](#lifting-state-up) | [Error Boundaries](#error-boundaries) | [React Hooks](#react-hooks) | [Custom Hook](#Custom-Hook) |


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

---

## **Why Use React**

| Reason | Description |
|--------|-------------|
| 🔧 **Component-Based Architecture** | Everything is a reusable, encapsulated component — great for scaling apps. |
| 🧠 **Learning Curve** | Easier to pick up compared to Angular (less opinionated, just JS + JSX). |
| 💡 **JSX = JavaScript + HTML** | JSX feels natural — write HTML-like code right inside your JS. |
| 🧩 **Flexibility** | You’re not locked into a huge framework. Choose your own routing, state management, etc. |
| 🌎 **Massive Ecosystem** | Tons of libraries (Redux, React Router, etc.), tools, and community support. |
| ⚙️ **Strong Backing** | Backed by Meta (Facebook), used in massive apps like Instagram, WhatsApp, etc. |
| 🔁 **Efficient Updates (Virtual DOM)** | React updates only the parts of the DOM that changed — it's fast. |
| 🧪 **Great Testing & Dev Tools** | React DevTools, support from Jest, Testing Library, Cypress, etc. |
| 🧵 **Server/Client Flexibility** | Works with SPAs, SSR (Next.js), mobile (React Native), and even static sites. |

---

## 🔍 **React vs Angular vs Vue**

| Feature              | **React**                    | **Angular**                        | **Vue**                          |
|----------------------|------------------------------|-------------------------------------|----------------------------------|
| Type                 | Library                      | Full-fledged framework              | Progressive framework            |
| Language             | JavaScript + JSX             | TypeScript                          | JavaScript with optional TypeScript |
| Learning Curve       | Moderate                     | Steep                               | Easy to moderate                 |
| Flexibility          | High (choose your tools)     | Low (opinionated, batteries-included) | Medium                          |
| Performance          | Excellent (Virtual DOM)      | Great with AoT + change detection   | Also uses Virtual DOM, fast      |
| Ecosystem            | Huge                         | Big, enterprise-grade               | Growing steadily                 |
| Mobile               | React Native                 | NativeScript                        | Vue Native, Quasar               |
| Best For             | Large SPAs, reusable UIs     | Enterprise-grade apps               | Rapid development, simplicity    |

---

## ✅ When React Is a Good Choice:
- You want **flexibility** in architecture and tooling.
- Your team is comfortable with **JavaScript and JSX**.
- You prefer a **lighter-weight, component-first** approach.
- You’re building a SPA, PWA, or SSR site (e.g., with Next.js).
- You want easy transition to **React Native** for mobile apps.

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

| Feature                        | **Controlled Component**                                                | **Uncontrolled Component**                                               |
|-------------------------------|--------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Data source**               | React state                                                              | DOM (via `ref`)                                                           |
| **Accessing value**           | From state variable (`useState`)                                         | From `ref` using `ref.current.value`                                     |
| **On change handling**        | Requires `onChange` handler to update state                              | No need for `onChange` unless needed manually                            |
| **Real-time validation**      | Easy to implement                                                        | Requires extra effort                                                     |
| **React control**             | Full control over input value                                            | Minimal React control                                                     |
| **Performance**               | Rerenders on every input change                                          | More performant for large forms (less rerenders)                         |
| **Use case**                  | Dynamic forms, validation, conditional rendering                         | Simple forms, file uploads, legacy forms, third-party libs               |
| **Setup complexity**          | Slightly more boilerplate                                                | Less code, quicker setup                                                  |

### 🧠 TL;DR

- Use **Controlled Components** when you need to **track, validate, or manipulate input data in real-time**.
- Use **Uncontrolled Components** when you need a **simpler, performant, or third-party-friendly** form solution.

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
A HOC is a function that takes a component and returns a new one with added behavior.

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

 Detects:

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
****  
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



## Lifting State Up
****  
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
****  
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

###  Example: Using `useEffect` to Fetch Data from an API

```jsx
import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This effect runs once when the component mounts
    fetch('https://api.example.com/user/123')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, []); // empty dependency array means this runs only on mount

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
```

###  Explanation:
- `useEffect` is used here to **fetch user data** when the component mounts.
- The empty dependency array `[]` ensures this side effect runs only **once**, like `componentDidMount`.

###  `useContext` – Share global data across components
```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```

---

###  `useReducer` – Complex state logic (like a mini Redux)
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

---

###  `useCallback` – Memoize callback functions
```jsx
const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click me</button>;
});

function App() {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => setCount(c => c + 1), []);
  return (
    <>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </>
  );
}
```

---

###  `useMemo` – Memoize expensive computations
```jsx
function App({ number }) {
  const double = React.useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);
  return <p>Double: {double}</p>;
}
```

---

###  `useRef` – Persist value between renders or access DOM
```jsx
function App() {
  const inputRef = React.useRef();

  const focusInput = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

---

###  `useImperativeHandle` – Customize instance value for parent ref
```jsx
const Input = React.forwardRef((props, ref) => {
  const inputRef = React.useRef();
  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  return <input ref={inputRef} />;
});

function Parent() {
  const ref = React.useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus from Parent</button>
    </>
  );
}
```

---

###  `useLayoutEffect` – Run *before* paint (sync, like `componentDidMount`)
```jsx
function Box() {
  const ref = React.useRef();

  React.useLayoutEffect(() => {
    ref.current.style.transform = 'translateX(100px)';
  }, []);

  return <div ref={ref} style={{ width: 100, height: 100, background: 'red' }} />;
}
```

---

###  `useDebugValue` – Add debug label for custom hooks
```jsx
function useUserStatus(userID) {
  const [isOnline] = React.useState(true);
  React.useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}
```

---

###  `useDeferredValue` – Defer updating non-urgent values
```jsx
function Search({ query }) {
  const deferredQuery = React.useDeferredValue(query);
  const results = useSearch(deferredQuery); // some custom hook
  return <ResultsList results={results} />;
}
```

---

###  `useTransition` – Mark state updates as non-blocking
```jsx
function App() {
  const [isPending, startTransition] = React.useTransition();
  const [value, setValue] = React.useState('');

  const handleChange = e => {
    const newValue = e.target.value;
    startTransition(() => setValue(newValue));
  };

  return (
    <>
      <input onChange={handleChange} />
      {isPending ? <p>Loading...</p> : <List filter={value} />}
    </>
  );
}
```

---

###  `useId` – Unique, server-safe IDs
```jsx
function Form() {
  const id = React.useId();
  return (
    <>
      <label htmlFor={id}>Name</label>
      <input id={id} />
    </>
  );
}
```

---

###  `useSyncExternalStore` – Read from external state stores (React 18+)
```jsx
// A basic external store
let listeners = [];
let theme = 'light';

const subscribe = (callback) => {
  listeners.push(callback);
  return () => listeners = listeners.filter(cb => cb !== callback);
};

const getSnapshot = () => theme;

function useTheme() {
  return React.useSyncExternalStore(subscribe, getSnapshot);
}
```

---

###  `useInsertionEffect` – Inject styles before DOM mutations (rare use case)
```jsx
function StyledComponent() {
  React.useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = `.injected { color: hotpink; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  
  return <div className="injected">Styled with useInsertionEffect</div>;
}
```

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



---

### Custom Hook

A custom hook is just a **JavaScript function** that starts with the word `use` and **can call other hooks** inside it.

```jsx
function useCustomThing() {
  // You can use any hook here
  const [state, setState] = useState(null);
  useEffect(() => { /*...*/ }, []);
  return state;
}
```

---

### Example 1: `useWindowWidth` – Track window width
```jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage:
function App() {
  const width = useWindowWidth();
  return <p>Window width: {width}px</p>;
}
```

---

### Example 2: `useFetch` – Generic fetch logic
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => { isMounted = false };
  }, [url]);

  return { data, loading };
}

// Usage:
function Posts() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <p>Loading...</p>;
  return <ul>{data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}</ul>;
}
```

---

### Example 3: `useToggle` – Toggle a boolean
```jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// Usage:
function ToggleExample() {
  const [on, toggle] = useToggle();
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
}
```

---

### Example 4: `usePrevious` – Track previous value
```jsx
import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Usage:
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <>
      <p>Now: {count}, Before: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </>
  );
}
```

---

## **Component Composition vs Inheritance**



In React, **component composition** is favored over **inheritance** as the primary method for code reuse and building complex UIs.

- **Composition** means combining simple components to build more complex ones. You pass data and behavior to children using **props** or special props like `children`.  
  → It promotes flexibility and reuse without tightly coupling components.

- **Inheritance**, in contrast, is a traditional OOP approach where a class extends another to inherit behavior. React avoids this pattern because it can lead to rigid and complex hierarchies.

🔸 **Why React prefers Composition**:
- Easier to manage and understand
- More flexible and modular
- Encourages functional design

🎯 **Summary**:  
React promotes **composition** for sharing behavior and building components, because it's **simpler, more maintainable, and aligns better with React’s declarative model**, unlike inheritance which introduces tight coupling and complexity.
🔸 **Example – Composition**:
```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is a composed paragraph inside the card.</p>
</Card>
```
---

## **Controlled Components**



A **Controlled Component** in React is a form element (like an `<input>`, `<textarea>`, or `<select>`) whose **value is controlled by React state**.

In other words, the input's value is **bound to a state variable**, and any change to it is handled via a callback like `onChange`.

---

🧠 In this case:
- `value={name}` → makes it a **controlled input**.
- `onChange` updates state → keeping React in full control.

---

### 🔍 **Why use Controlled Components?**
- React has full control over the form data.
- Enables validation, formatting, conditional rendering, etc.
- Helps in syncing UI with application logic.

---

### ❗ Uncontrolled Components (for contrast):
- Manage their own state via the DOM (e.g., using refs).
- Less code but harder to validate or control dynamically.

---

### ✅ **Summary**:
Controlled components let React manage the input state, making them more predictable and powerful for building interactive forms.


🔸 **Example:**
```jsx
function NameForm() {
  const [name, setName] = React.useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```
---
---

## **Uncontrolled Components over Controlled Components**

You might choose **Uncontrolled Components** when:

1. **You don’t need to track the input value in real-time**  
   — e.g., when you're only accessing the value **on form submission**.

2. **You want quick and minimal setup**  
   — useful for **simple forms**, legacy integrations, or when porting plain HTML forms into React.

3. **Performance is a concern**  
   — controlled components rerender on every keystroke. Uncontrolled components avoid that by letting the DOM handle the state internally.

4. **Using third-party libraries**  
   — some libraries manage their own form inputs and work better with uncontrolled components (e.g., file uploads).

---

### ✅ **Summary**:  
Use **Uncontrolled Components** for **simple, non-dynamic forms** where performance matters or form data isn’t needed until submission. Use **Controlled Components** when you need real-time updates, validation, or tighter control.

---
🔸 **Example – Uncontrolled Input:**
```jsx
function LoginForm() {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Login</button>
    </form>
  );
}
```
---

## **React Children Prop**

In React, the `children` prop is a **special prop** automatically passed to components. It represents the **content nested inside a component's opening and closing tags**.

It allows components to be **more flexible and reusable**, because you can inject any JSX content into them.

---

### 🔸 **Example:**

```jsx
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

// Usage
<Wrapper>
  <p>This content is passed as children!</p>
</Wrapper>
```

🧠 In this example:
- The `<p>` element is passed to `Wrapper` as the `children` prop.

---

### 🔍 **Why is `children` useful?**
- Enables **composition** and **slot-like** behavior.
- Makes layout components like modals, cards, and wrappers reusable.
- Allows you to nest complex structures inside a parent component dynamically.

---

### ✨ Bonus: `React.Children` utilities

React provides utilities like:
- `React.Children.map()` – iterate over children safely
- `React.Children.only()` – ensure only one child is passed
- `React.cloneElement()` – clone and modify children elements

---

### ✅ **Summary**:  
The `children` prop lets you **pass nested JSX content** to components, enabling powerful and flexible UI composition patterns.

---
---

### **Dynamic Routing**


**Dynamic Routing** in React (especially with **React Router**) means creating routes that can handle **variable segments** in the URL — such as user IDs, product slugs, or blog post titles — and render different content based on the value.

---



🧠 In this example:
- `:userId` is a **dynamic segment**.
- `useParams()` is used to extract it.

---

### 🚀 Use Cases:
- **User profiles** → `/user/123`
- **Blog posts** → `/blog/my-first-post`
- **Product details** → `/products/shoe-42`

---

### 🔍 Key Benefits:
- Enables **clean and semantic URLs**.
- Makes your app feel more like a traditional website.
- Easy to match routes with backend APIs (e.g., `GET /user/:id`).

---

### ✅ **Summary**:  
Dynamic Routing allows React apps to respond to URL changes with **dynamic values**, enabling powerful and scalable navigation structures.

### 🔸 **Example with `react-router-dom` v6:**

```jsx
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Access dynamic part of the URL
  return <h2>User ID: {userId}</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
```
---



---

### **Route Protection**


**Route Protection** in React is the practice of **restricting access to certain routes** based on user authentication or authorization status.

It's typically implemented using a **higher-order component**, a **wrapper route**, or **custom logic** in React Router to check if the user is logged in before rendering a route.

---


### 🔍 How it works:
- `ProtectedRoute` checks if the user is authenticated.
- If **yes**, it renders the requested component.
- If **no**, it redirects to `/login` using `<Navigate />`.

---

### 🧠 Common Enhancements:
- Use **context or Redux** instead of localStorage for auth state.
- Add **role-based protection** (e.g., admin vs regular user).
- Use **loading states** while checking authentication (like with Firebase/Auth0).

---

### ✅ **Summary**:  
Route protection ensures only **authorized users can access certain parts** of your app, improving security and user experience. It’s implemented by **wrapping routes with an auth check** and redirecting unauthorized users.

### 🔐 **Example using React Router v6:**

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token'); // example auth check

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
```

#### ✅ Usage:
```jsx
<Routes>
  <Route path="/login" element={<Login />} />
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } 
  />
</Routes>
```

---
### **Form Validation with Formik**

🟩 **Answer:**

Both **Formik** and **React Hook Form** are popular libraries for building and validating forms in React. They simplify form state management, validation, and submission handling.

---



### 🧪 **React Hook Form Example:**

```jsx
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('email', { required: 'Email is required' })} />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### 🔍 **Formik vs React Hook Form — Comparison Table:**

| Feature                    | **Formik**                                  | **React Hook Form**                          |
|---------------------------|----------------------------------------------|----------------------------------------------|
| **Form State Handling**   | Built-in, declarative                        | Optimized, uses uncontrolled inputs under the hood |
| **Validation Support**    | Yup (schema-based) preferred                 | Built-in or use Yup/Zod                      |
| **Performance**           | Can be slower with large forms               | Highly performant, minimal rerenders         |
| **Learning Curve**        | Slightly higher (due to abstraction)         | More intuitive for simple use cases          |
| **Error Handling**        | Good via `<ErrorMessage>`                    | Granular via `formState.errors`              |
| **Popularity**            | Older, mature                                | Increasingly popular and modern              |

---

### ✅ **Summary**:

- **Formik** is great for **schema-based validation** and **more declarative form control**.
- **React Hook Form** excels in **performance and simplicity**, especially in large or dynamic forms.


### 🧰 **Formik Example with Yup (Schema Validation):**

```jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
});

function MyForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
```

---



---

### **Handling multiple inputs**

🟩 **Answer:**

In React, handling multiple inputs involves:
1. Using a **single state object** to store all input values.
2. Using the input's `name` attribute to dynamically update the corresponding value in state.
3. Managing form submission through a handler function.

---

### 🧪 **Example using Controlled Components:**

```jsx
import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
```

---

### 🔍 Key Concepts:

- ✅ **State structure**: All form inputs are stored in one object (e.g., `formData`).
- ✅ **Dynamic updating**: `[name]: value` uses the input’s `name` to update the correct field.
- ✅ **Reusability**: This approach works for **any number of inputs** with a single `handleChange` function.

---

### 🧠 Bonus Tip (Interview Insight):

> *"Why use a single `handleChange`?"*  
Because it **scales well**, keeps your code DRY (Don't Repeat Yourself), and works seamlessly for both small and large forms.

---



---

### **Refs in React**


In React, a **Ref** (short for reference) is used to **access a DOM element or React component instance directly** — bypassing the typical data flow.

You create a ref using `useRef` (in functional components) or `createRef` (in class components).

---

### ✅ **Common Use Cases for Refs**:

1. **Managing focus**  
2. **Triggering animations**  
3. **Reading input values without re-rendering**  
4. **Interfacing with third-party DOM libraries**  
5. **Storing mutable values that persist across renders**

---

### 🧪 **Example: Focusing an Input Field**

```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Direct DOM access
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

---

### 🧠 **Why not use state instead of refs?**

Refs are **ideal for values that don’t need to trigger a re-render**. Using state to access a DOM element would be inefficient and unnatural in this case.

---

### 📌 Bonus: `useRef` vs `createRef`

| Hook                    | Use in Component Type    | Re-created on Every Render? |
|------------------------|--------------------------|------------------------------|
| `useRef()`             | Functional Component      | ❌ No                        |
| `createRef()`          | Class Component           | ✅ Yes                       |

---

---

### **Avoiding Unnecessary Rerenders**


In React, unnecessary rerenders can **harm performance**, especially with large or complex components. You can optimize performance by following a few strategies:

---

### ✅ **Key Strategies to Avoid Unnecessary Rerenders:**

1. **Use `React.memo` for Functional Components**  
   `React.memo` is a **higher-order component** that memoizes a component. It only re-renders when its **props change**.

   ```jsx
   const MyComponent = React.memo(function MyComponent({ count }) {
     console.log('Rendering:', count);
     return <div>{count}</div>;
   });
   ```

2. **Use `shouldComponentUpdate` in Class Components**  
   In class components, the `shouldComponentUpdate` lifecycle method allows you to specify when the component should re-render.

   ```jsx
   class MyComponent extends React.Component {
     shouldComponentUpdate(nextProps) {
       return nextProps.count !== this.props.count;
     }
   }
   ```

3. **Use `useCallback` for Functions**  
   If you pass **functions as props** to child components, wrapping them in `useCallback` prevents the function from being recreated on every render, which could trigger unnecessary rerenders.

   ```jsx
   const handleClick = useCallback(() => {
     console.log('Button clicked');
   }, []); // Empty dependency means the function doesn't change unless dependencies change
   ```

4. **Use `useMemo` for Expensive Calculations**  
   `useMemo` memoizes the result of a calculation or function. It only recalculates when its dependencies change.

   ```jsx
   const expensiveValue = useMemo(() => expensiveCalculation(count), [count]);
   ```

5. **Avoid Anonymous Functions in JSX**  
   Defining **anonymous functions** directly inside JSX (e.g., in `onClick={}`) causes a new function to be created on every render, triggering rerenders unnecessarily.

   ```jsx
   // Bad: Anonymous function in JSX
   <button onClick={() => handleClick()}>Click</button>

   // Good: Defined function outside of JSX
   <button onClick={handleClick}>Click</button>
   ```

6. **Properly Handle State Changes**  
   Update state only when necessary. Calling `setState` or `useState` without changes leads to rerenders.

   ```jsx
   // Avoid this:
   setState(currentState); // No change, but re-renders anyway
   ```

---

### ⚡ **Performance Tools:**

- **React Profiler**: Use the **React DevTools Profiler** to identify components that are re-rendering unnecessarily and check how often they rerender.
- **React.StrictMode**: This can help highlight side effects, making it easier to identify inefficiencies during development.

---

### 📌 **Summary**:

To avoid unnecessary rerenders:
- Use `React.memo` and `useMemo` for performance optimization.
- Memoize functions with `useCallback`.
- Be cautious about passing functions directly inside JSX.
- Properly manage state updates.

---


