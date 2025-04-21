| **Category**                          | **Topics**                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **React Basics** | • [Create React App using TypeScript](#create-react-app-using-typescript) • [React Overview](#react-overview) •  [Virtual DOM](#virtual-dom) • [Single Page Applications (SPA)](#single-page-applications-spa) • [JSX vs HTML](#jsx-vs-html) • [Why Use React](#why-use-react) |
| **React Component Types**          | •  [Class vs Functional Components](#class-vs-functional-components) •  [Stateless vs Stateful Components](#stateless-vs-stateful-components) •  [Components](#Components)  •  [Lifting State Up](#lifting-state-up) •  [Component Composition vs Inheritance](#Component-Composition-vs-Inheritance)
| **Props, State & Context**          | •  [Props ](#props-in-react) •  [Props Drilling](#props-drilling) •  [Props vs State](#props-vs-state) •  [React Children Prop](#react-children-prop) •  [Conditional Rendering](#Conditional-Rendering) •   [Keys in Lists](#keys-in-lists) •  [Reconciliation Process](#reconciliation-process) •|
| **State Management Techniques**          | •  [Redux](#redux--predictable-state-management) •  [Context API](#context-api) •  [Higher-Order Components](#higher-order-components-hocs) •  [Redux vs Context API](#redux-vs-context-api)  |
| **Hook**          | •  [Lifecycle Methods](#lifecycle-methods) •  [React Hooks](#react-hooks) •  [Custom Hook](#Custom-Hook) •  [Error Handling in Components](#error-handling-in-components) •  [Lazy Loading](#lazy-loading-components) 
| **Routing**          | •  [React Router](#react-router) •  [Dynamic Routing](#dynamic-routing) •  [Route Protection / Auth Routing](#route-protection)•  [React Router Navigation](#react-router-navigation) |
| **Forms and Validation**          | •  [Form Validation with Formik / React Hook Form](#Form-Validation-with-Formik) •  [Handling Multiple Inputs in a Form](#handling-multiple-inputs) |
| **Lists and DOM**          | •    [Refs ](#refs-in-react) •  [React Fragments](#react-fragments) •  [React Portals](#react-portals)  •  [React Profiler](#react-profiler) •  [React Fiber](#react-Fiber) •  [React Query / SWR – What and Why?](#react-query-swr)  |
| **Testing React**          | •  [Testing Libraries (Jest, React Testing Library)](#Jest-and-React-Testing-Library) •  [Unit vs Integration vs E2E ](#Unit-Tests) •  [Testing Hooks](#Testing-Hooks) •  [Mocking APIs Tests](#Mocking-APIs-Tests) |
| **Best Practices & Architecture**          | •  [Folder Structure Best Practices](#folder-structure-best-practices) •  [Atomic Design ](#atomic-design) •  [Component Reusability](#component-reusability) •  [PropTypes vs TypeScript](#proptypes-vs-typescript) •  [Error Boundaries](#error-boundaries) •  [Strict Mode](#strict-mode-in-react) •  [accessibility a11y](#accessibility-a11y)|
| **Data Fetching & APIs**          | •  [Fetching Data with Axios / Fetch](#fetching-data) •  [Handling Loading, Error States](#Handling-Loading-and-Error-States) •  [Using useEffect for Data Fetching](#Using-useEffect-for-Data-Fetching) |
| **Performance Optimization**          | •  [Performance Optimization](#performance-optimization) •  [Avoiding Unnecessary Rerenders](#Avoiding-Unnecessary-Rerenders) 





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

- The Virtual DOM is a lightweight, in-memory representation of the real DOM.
- React uses it to optimize performance by minimizing direct DOM manipulations.
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

### **Class Component Lifecycle Methods vs Hook Equivalents**

| **Class Lifecycle Method** | **Purpose** | **Hook Equivalent** |
|---------------------------|-------------|----------------------|
| `componentDidMount()` | Run code once **after the component mounts** | `useEffect(() => { ... }, [])` |
| `componentDidUpdate(prevProps, prevState)` | Run code **after props or state change** | `useEffect(() => { ... }, [dependencies])` |
| `componentWillUnmount()` | Run code **before component unmounts** (e.g., cleanup) | `useEffect(() => { return () => { ... } }, [])` |

### ✅ Summary

| Lifecycle | Class Component | Functional Hook |
|-----------|-----------------|-----------------|
| Mount     | `componentDidMount` | `useEffect(() => {}, [])` |
| Update    | `componentDidUpdate` | `useEffect(() => {}, [deps])` |
| Unmount   | `componentWillUnmount` | `useEffect(() => { return () => {} }, [])` |

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


---

### 🔍 1. `componentDidMount`  
👉 **Class version**
```jsx
componentDidMount() {
  console.log('Mounted!');
}
```

👉 **Hooks version**
```jsx
useEffect(() => {
  console.log('Mounted!');
}, []);
```
✅ Empty dependency array (`[]`) = run only once after mount.

---

### 🔍 2. `componentDidUpdate`  
👉 **Class version**
```jsx
componentDidUpdate(prevProps, prevState) {
  if (this.props.count !== prevProps.count) {
    console.log('Updated!');
  }
}
```

👉 **Hooks version**
```jsx
useEffect(() => {
  console.log('Updated!');
}, [count]);
```
✅ Add the specific dependency (`count` here). It runs whenever `count` changes.

---

### 🔍 3. `componentWillUnmount`  
👉 **Class version**
```jsx
componentWillUnmount() {
  console.log('Cleaning up...');
}
```

👉 **Hooks version**
```jsx
useEffect(() => {
  return () => {
    console.log('Cleaning up...');
  };
}, []);
```
✅ The cleanup function is returned inside `useEffect`.

---

### 🧪 Example: All Together in Functional Component
```jsx
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log('Component mounted');

    // componentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

---




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
> 


---

### **What are `React.lazy()` and `Suspense`? How do they work?**

**`React.lazy()`** and **`Suspense`** are powerful features of React that help improve application performance through **code splitting** and **lazy loading** of components.

1. **`React.lazy()`** allows you to dynamically import a React component only when it's required. This means that the component is **not included in the initial bundle**, reducing the overall bundle size and improving the initial load time of the application.
   
   - It accepts a function that returns a **dynamic `import()`** statement to load the component asynchronously.

   **Example:**
   ```jsx
   const MyComponent = React.lazy(() => import('./MyComponent'));
   ```

2. **`Suspense`** is a component used to wrap the lazy-loaded components and specify a fallback UI (e.g., a loading spinner or message) that is displayed while the component is being loaded asynchronously.

   - **`Suspense`** uses the **`fallback`** prop to show a loading state.
   - It’s particularly useful when you're using **`React.lazy()`** for code splitting, but can also be extended to handle other asynchronous tasks, such as data fetching.

   **Example:**
   ```jsx
   <Suspense fallback={<div>Loading...</div>}>
     <MyComponent />
   </Suspense>
   ```

---

### **How do `React.lazy()` and `Suspense` work together?**

- When used together, **`React.lazy()`** is responsible for dynamically loading a component when it's required.
- **`Suspense`** is used to display a loading state while the component is being fetched and loaded.
- The component inside **`Suspense`** is only loaded when it’s needed in the render cycle, reducing the initial load time of the app.

- **`React.lazy()`** is used to load components asynchronously, reducing the bundle size and improving performance.
- **`Suspense`** helps manage the loading state for lazy-loaded components.
- They work together to provide a smooth, efficient way to load components only when necessary, optimizing your React app.
- **Improved Performance**: By splitting the code into smaller bundles, the app loads faster and only fetches components when they are actually needed.
- **Better User Experience**: The user can see a loading UI while the components are being loaded, making the application feel more responsive.
- **Clean Codebase**: You avoid importing all components at once, keeping the codebase cleaner and more manageable.

---

**Example of Lazy Loading with Suspense:**
```jsx
import React, { Suspense } from 'react';

// Lazy load the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      
      {/* Suspense wraps the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

In this example, `LazyComponent` is loaded only when the component is rendered, and until then, the fallback (`<div>Loading...</div>`) is displayed.

---

### **Use Cases for `React.lazy()` and `Suspense`**

1. **Route-based Code Splitting**: You can lazy-load different routes so that components are loaded only when the user navigates to that route.
   
   **Example with React Router:**
   ```jsx
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   
   const Home = React.lazy(() => import('./Home'));
   const About = React.lazy(() => import('./About'));

   function App() {
     return (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route path="/home" component={Home} />
             <Route path="/about" component={About} />
           </Switch>
         </Suspense>
       </Router>
     );
   }
   ```

2. **Reducing Initial Load Time**: By splitting large components or libraries into smaller chunks, you load only what's necessary, making the initial page load faster.

3. **Lazy Loading Large Components**: For components that are not essential for the first screen (e.g., large charts, dashboards), **`React.lazy()`** can be used to load them only when required.

---

### **Error Handling with `Suspense`**

Since lazy-loaded components can fail to load (e.g., network errors), it is recommended to use **Error Boundaries** in React to catch errors in the lazy-loaded components and display a fallback UI.

**Example of Error Boundary with Suspense:**
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
```

This ensures that if the component fails to load, an appropriate error message is displayed instead of just a blank screen.

---






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
| [useEffect](#useEffect)                | Perform side effects                                                        | Fetching data, setting timers, subscriptions                             | API calls, local storage, DOM listeners             |
| [useContext](#useContext)             | Consume data from a context provider                                        | Access global values without prop drilling                               | Theme, user auth, language preference               |
|[useReducer](#useReducer)                | Complex state logic with actions                                            | When state updates depend on previous state                              | Forms, shopping carts, toggle reducers              |
| `useCallback`              | Memoize a callback function                                                 | Prevent re-renders of children receiving functions as props              | Event handlers, expensive calculations              |
|     [useMemo](#useMemo)              | Memoize an expensive computed value                                         | Heavy calculations that depend on specific inputs                        | Filtering/sorting lists, derived state              |
|         [useRef](#useRef)              | Store mutable values or DOM refs                                            | When value shouldn't trigger re-render                                   | Accessing input fields, tracking previous values    |
|   [useImperativeHandle](#useImperativeHandle)     | Expose methods from child component using `ref`                            | Parent needs to call child functions directly                            | Custom modals, form controls                        |
|    [useLayoutEffect](#useLayoutEffect)      | Like `useEffect` but fires before painting                                 | DOM reads/measurements to avoid flicker                                  | Animations, layout adjustments                      |
|    [useDebugValue](#useDebugValue)           | Show custom hook info in React DevTools                                     | Inside custom hooks                                                      | Debugging user login status                         |
|      [useDeferredValue](#useDeferredValue)      | Delay rendering a value (concurrent-friendly)                              | Heavy UI renders based on fast input                                    | Real-time search filter                             |
|      [useTransition](#useTransition)       | Mark non-urgent updates for smoother UI                                     | Updating large UI without blocking input                                | Tab switching, background state changes             |
|             [useId](#useId)            | Generate unique IDs for accessibility & SSR                                 | Generate stable IDs for input-label, list keys                           | Forms with server-rendered markup                   |
|             [useSyncExternalStore](#useSyncExternalStore)      | Subscribe to external data stores                                           | For state libraries, global stores                                       | Zustand, Redux, or any custom external store        |
|             [useInsertionEffect](#useInsertionEffect)     | Inject styles before layout/render                                          | With CSS-in-JS libraries                                                 | Emotion, styled-components                          |
|             [useCallback vs useMemo](#useCallback-vs-useMemo)     | [Reactmemo vs useMemo](#Reactmemo-vs-useMemo)    |  Emotion, styled-components                          |


---



### useEffect
  - to Fetch Data from an API

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

####  Explanation:
- `useEffect` is used here to **fetch user data** when the component mounts.
- The empty dependency array `[]` ensures this side effect runs only **once**, like `componentDidMount`.

###  useContext 
– Share global data across components
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

###  useReducer
 – Complex state logic (like a mini Redux)
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

###  useCallback
 – Memoize callback functions
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

###  useMemo
 – Memoize expensive computations
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

###  useRef
 – Persist value between renders or access DOM
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

###  useImperativeHandle
 – Customize instance value for parent ref
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

###  useLayoutEffect
 – Run *before* paint (sync, like `componentDidMount`)
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

###  useDebugValue
 – Add debug label for custom hooks
```jsx
function useUserStatus(userID) {
  const [isOnline] = React.useState(true);
  React.useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}
```

---

###  useDeferredValue
 – Defer updating non-urgent values
```jsx
function Search({ query }) {
  const deferredQuery = React.useDeferredValue(query);
  const results = useSearch(deferredQuery); // some custom hook
  return <ResultsList results={results} />;
}
```

---

###  useTransition
 – Mark state updates as non-blocking
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

###  useId
 – Unique, server-safe IDs
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

###  useSyncExternalStore
 – Read from external state stores (React 18+)
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

###  useInsertionEffect
 – Inject styles before DOM mutations (rare use case)
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
### Reactmemo vs useMemo

```jsx
const MyComponent = React.memo(function ({ name }) {
  return <div>{name}</div>;
});
```

- `React.memo` memoizes components  
- `useMemo` memoizes values

---

### useCallback vs useMemo

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

## **Components**


- [Controlled Components](#controlled-components)  
- [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)  
- [Uncontrolled Components](#uncontrolled-components)


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




### **React Profiler**

🟩 **Answer:**

The **React Profiler** is a built-in tool that helps you measure the **performance** of your React components by tracking their rendering behavior. It shows how long each component takes to render, and why it re-renders (e.g., state or props changes). This tool is part of the **React Developer Tools** extension for browsers.

By analyzing the data from the Profiler, you can identify **performance bottlenecks** and unnecessary re-renders, helping you optimize the React app’s performance.

---

### ✅ **Key Features of the React Profiler:**

1. **Record Rendering Duration**:  
   You can see how long it took to render each component, allowing you to spot slow components.

2. **Identify Re-renders**:  
   The Profiler highlights components that re-rendered unnecessarily and why they did so.

3. **Performance Snapshot**:  
   Profiler snapshots give you a detailed view of **each render cycle** and its associated state/props changes.

4. **Highlighting Expensive Operations**:  
   React Profiler makes it easier to pinpoint costly operations, like expensive renders or state updates that happen too frequently.

---

### 🧪 **How to Use the React Profiler:**

1. **Install React Developer Tools**:  
   If you haven't already, install the **React Developer Tools** browser extension (available for **Chrome** and **Firefox**).

2. **Open Profiler Tab**:
   - Open the **Developer Tools** in your browser.
   - Navigate to the **Profiler** tab (available once React Developer Tools are installed).

3. **Record Performance**:
   - Click on the **record button** (a red circle).
   - Interact with your app to trigger renders (e.g., click buttons, update state).
   - The Profiler will track component renders and measure their performance.

4. **Analyze Results**:
   - Each component’s render time will be displayed with a bar chart.
   - You can inspect the **why** of re-renders by looking at **state** or **props** changes.
   - Components that have high render durations or frequent renders will be easy to spot.

---

### ⚡ **Example: React Profiler Output**

When you record a session, you'll see a **timeline** of renders, with the following insights:

- **Render Duration**: Time spent by each component to render.
- **Why the Component Rendered**: If it was due to state, props, or context changes.
- **Commit Phase vs Render Phase**: Gives insight into the re-render lifecycle.

---

### 📌 **Example of Optimizing with Profiler Insights:**

Let’s say you notice that a component **A** is re-rendering unnecessarily when **B** is updated.

- **Solution**: Use `React.memo` or `useMemo` to avoid re-renders unless props or state change in the component.
  
```jsx
const A = React.memo(function A(props) {
  // This component will only re-render if props change
});
```

If the Profiler shows that **component B**'s **prop change** is causing **A** to re-render, applying `React.memo` to **A** can eliminate the extra render.

---

### 📊 **Tips for Using Profiler Effectively**:

1. **Use it in Development**:  
   The Profiler is meant for **development** mode, not for production environments, as it can affect performance.

2. **Focus on Slow Components**:  
   After analyzing the data, focus on components with the longest render times or that re-render unnecessarily.

3. **Avoid Over-Optimization**:  
   Optimize only **critical** components that impact your app’s performance. Over-optimizing can make the code more complex and harder to maintain.

---


### **Jest and React Testing Library**

🟩 **Answer:**

**Jest** and **React Testing Library (RTL)** are two of the most widely used libraries for testing in the React ecosystem. They work together to make unit and integration testing efficient and accessible.

---

### ✅ **Jest: Overview**

**Jest** is a **JavaScript testing framework** developed by Facebook. It's designed for simplicity and is used primarily for **unit testing** and **integration testing**. Jest provides features like test runners, mocks, assertions, and code coverage.

Key features of Jest:
1. **Test Runner**: It executes tests and provides results.
2. **Assertions**: Jest comes with built-in assertion methods (e.g., `expect()`).
3. **Mocking**: Allows you to mock modules, functions, and timers.
4. **Snapshot Testing**: Takes a snapshot of a component’s rendered output to detect changes in future test runs.

#### Example:
```javascript
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
```

---

### ✅ **React Testing Library (RTL): Overview**

**React Testing Library** is a library focused on testing the **behavior** of React components rather than their implementation details. RTL encourages testing components the way users would interact with them (through the DOM), making tests more **user-centric**.

Key features of React Testing Library:
1. **Querying**: Allows you to query elements in the DOM using methods like `getByText`, `getByRole`, etc.
2. **User interactions**: RTL encourages testing user behavior such as clicking, typing, and submitting forms.
3. **No reliance on implementation details**: It avoids testing component internals (like state or props directly) and focuses on how the component behaves.

#### Example:
```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

test('button click changes text', () => {
  render(<MyButton />);
  const button = screen.getByText(/click me/i);
  userEvent.click(button);
  expect(screen.getByText(/clicked/i)).toBeInTheDocument();
});
```

---

### ✅ **How Jest and RTL Work Together:**

1. **Jest** handles the **test execution**, assertion, and mocking.
2. **RTL** helps you **render** the component and interact with it via the **DOM**.
3. **userEvent** from RTL can simulate user interactions like clicks, typing, etc.

By combining Jest and RTL, you can test the behavior of your React components in a way that simulates actual user interactions, ensuring that your components work as expected.

---

### 🧪 **Testing Example with Jest + RTL:**

Let’s say you have a simple button component that, when clicked, updates the text on the button.

**Button Component**:
```jsx
function Button() {
  const [clicked, setClicked] = useState(false);
  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked!' : 'Click Me'}
    </button>
  );
}

export default Button;
```

**Test**:
```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('Button text changes on click', () => {
  render(<Button />);
  const button = screen.getByRole('button', { name: /click me/i });
  
  userEvent.click(button);
  
  expect(screen.getByRole('button', { name: /clicked/i })).toBeInTheDocument();
});
```

In this example:
- We use **`render`** to render the component.
- **`screen.getByRole`** is used to query the button.
- **`userEvent.click`** simulates a user clicking the button.
- Finally, **`expect`** is used to check the component’s behavior after the click.

---

### 📌 **Best Practices for Testing in React**:
1. **Test user behavior**: Focus on how users interact with your app rather than implementation details.
2. **Use mock functions**: Mock external dependencies or functions with **`jest.fn()`** for isolated tests.
3. **Keep tests simple**: Avoid overly complex test logic.
4. **Avoid testing implementation details**: Don’t test internal state or method calls. Focus on outcomes.
5. **Snapshot testing**: Use **snapshot testing** for components that are static, but avoid it for components that rely on dynamic data.

---

### ⚡ **Advanced Jest + RTL Features**:
- **Mocking Modules**: Use **`jest.mock()`** to mock modules or API calls in tests.
- **Custom Hooks**: Use **`renderHook`** to test custom hooks.
- **Test Cleanup**: Use **`cleanup()`** after tests to unmount components and prevent side effects.

---

### 🧠 **Summary**:
- **Jest**: A test runner and assertion library, useful for unit and integration tests.
- **React Testing Library**: Focuses on testing the user experience by querying the DOM and simulating user actions.
- Together, they provide a powerful setup for testing React applications with a focus on **behavior** rather than implementation details.

---



### **Unit Tests**

🟩 **Answer:**

These three types of testing—**Unit Testing**, **Integration Testing**, and **End-to-End (E2E) Testing**—serve different purposes in the software development lifecycle. Let’s break down the key differences:

---

- **Unit Tests**: Focus on testing **small units** of code (functions or components) in isolation.
- **Integration Tests**: Test how **multiple units** or components **work together** (e.g., API integration or component interaction).
- **E2E Tests**: Test the **entire application** (frontend and backend) by simulating **user behavior** and validating the whole system’s flow.

Each type of test serves a different purpose, and they complement each other in ensuring your application works as expected.

---

### ✅ **1. Unit Testing**

**Purpose:**  
Unit tests focus on testing the **smallest units** of your application, usually individual functions or components, in isolation. They ensure that each unit works as expected on its own.

**Key Characteristics:**
- **Scope**: Focuses on testing a single function, method, or component.
- **Isolated**: It mocks or stubs any external dependencies (like API calls, databases, etc.).
- **Speed**: Fast to run because they deal with minimal logic.
- **Tools**: Jest, Mocha, Jasmine.

**Example:**
Testing a simple function that adds two numbers:

```javascript
function add(a, b) {
  return a + b;
}

test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
```

**When to Use:**
- To test individual functions, methods, or small components.
- When you want to check the correctness of logic isolated from external services or dependencies.

---

### ✅ **2. Integration Testing**

**Purpose:**  
Integration tests check if different parts of your application work together as expected. This involves testing combinations of functions, methods, or components that depend on each other, and ensuring they interact correctly.

**Key Characteristics:**
- **Scope**: Focuses on testing the integration between multiple components or services (e.g., testing a component that interacts with an API or database).
- **Dependencies**: Unlike unit tests, integration tests involve real or simulated dependencies (e.g., actual database queries, API calls).
- **Speed**: Slower than unit tests because they test more complex interactions.
- **Tools**: Jest, Mocha, Supertest, React Testing Library.

**Example:**
Testing a function that fetches data from an API and processes it:

```javascript
import fetchData from './fetchData';

test('fetches and processes data correctly', async () => {
  const data = await fetchData('https://api.example.com');
  expect(data).toBeDefined();
  expect(data.name).toBe('John Doe');
});
```

**When to Use:**
- To ensure that modules or components that interact with each other are working together correctly.
- When your code requires real external resources like databases or APIs.

---

### ✅ **3. End-to-End (E2E) Testing**

**Purpose:**  
E2E tests simulate real user interactions with your application to ensure that everything works together in a real-world scenario. They test the complete flow of the application, from the user interface to the backend, ensuring the app behaves as expected across the entire stack.

**Key Characteristics:**
- **Scope**: Focuses on the **entire system**, ensuring all components work together, from the front end to the back end.
- **Realistic**: Simulates real-world user interactions like clicking buttons, filling out forms, and navigating through the app.
- **Speed**: Slower to run because they interact with the entire application, often in a real browser environment.
- **Tools**: Cypress, Selenium, Puppeteer, Playwright.

**Example:**
Testing a login flow where a user enters credentials, submits a form, and is redirected to the dashboard:

```javascript
describe('Login Flow', () => {
  it('should login and navigate to dashboard', () => {
    cy.visit('https://myapp.com');
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

**When to Use:**
- To validate that all components and systems (e.g., backend, frontend, database, APIs) work together as expected in a live environment.
- When testing user flows and verifying the application’s functionality from end to end, including navigation and form submissions.

---

### 🔍 **Comparison Table: Unit vs Integration vs E2E Testing**

| **Aspect**                | **Unit Testing**                                 | **Integration Testing**                          | **End-to-End (E2E) Testing**                      |
|---------------------------|--------------------------------------------------|-------------------------------------------------|---------------------------------------------------|
| **Scope**                 | Tests individual functions or components         | Tests interaction between components or services | Tests the entire application flow (frontend + backend) |
| **Isolation**             | Isolated from external dependencies              | Tests interactions with real or simulated dependencies | Tests the full system with real user scenarios      |
| **Speed**                 | Fast (since it tests minimal logic)              | Slower than unit tests, but faster than E2E       | Slow (because it simulates entire user interactions) |
| **Tools**                 | Jest, Mocha, Jasmine, AVA                       | Jest, Mocha, Supertest, React Testing Library    | Cypress, Selenium, Puppeteer, Playwright           |
| **Dependencies**          | Mocks or stubs dependencies                      | May use real or simulated external dependencies  | Uses actual services, databases, or the full stack |
| **Focus**                 | Correctness of logic                            | Correctness of interactions between components   | Correctness of the entire user journey and system behavior |
| **Example**               | Testing a simple function like `add()`           | Testing a component that fetches data from an API | Testing a user login flow on a web app             |
| **When to Use**           | To verify individual pieces of logic             | To test how different modules or components work together | To simulate real user behavior and verify system integration |

---

### ⚡ **When to Use Each Type of Test?**

- **Unit Testing**:  
   Use unit tests when you want to verify that each **function** or **component** works in isolation. They are crucial for testing small, isolated parts of your code and ensuring basic logic correctness.

- **Integration Testing**:  
   Use integration tests when you need to verify how different parts of your application **interact**. This might involve testing data flow, such as ensuring a frontend component can successfully fetch and display data from an API.

- **End-to-End Testing**:  
   Use E2E tests when you need to verify the **complete system** from the user’s perspective. This is ideal for simulating user behavior, ensuring that all components work together as expected in a live environment, including handling interactions like form submissions, navigation, and API calls.

---



### **Testing Hooks**

🟩 **Answer:**

React hooks are a crucial part of modern React development. Since hooks allow you to manage state, side effects, and context within functional components, it's important to ensure they behave as expected. Here, we will explore how to effectively test React hooks using **React Testing Library** and **Jest**.

---

### ✅ **Testing Custom Hooks**

Custom hooks are reusable logic that encapsulate stateful logic and effects. Testing them ensures they work as expected when used within components.

#### Key Tools:
- **React Testing Library** (for rendering components and accessing hooks)
- **Jest** (for assertions and mocking functions)

### Steps for Testing React Hooks:

---

### 1. **Test a Hook with `renderHook` from `@testing-library/react-hooks`**

`@testing-library/react-hooks` is a library specifically designed to test hooks in isolation. It provides a function called `renderHook()` that can be used to mount hooks outside of a component.

#### Example: Testing a Custom Hook

```javascript
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter'; // Your custom hook

test('should initialize counter with 0', () => {
  const { result } = renderHook(() => useCounter()); // Render hook
  expect(result.current.count).toBe(0); // Check initial state
});

test('should increment the counter', () => {
  const { result } = renderHook(() => useCounter()); // Render hook
  
  act(() => { // Perform actions in the hook (important for updates)
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1); // Check updated state
});

test('should decrement the counter', () => {
  const { result } = renderHook(() => useCounter()); // Render hook
  
  act(() => { 
    result.current.decrement();
  });
  
  expect(result.current.count).toBe(-1); // Check updated state
});
```

#### Key Notes:
- **`renderHook()`** is used to render the hook in a test environment.
- **`act()`** is used to simulate state updates, ensuring React updates the state correctly.
- **`result.current`** contains the values returned from the hook (like state or functions).

---

### 2. **Test a Hook inside a Component**

If you want to test a hook inside a component, you can render the component using **React Testing Library** and assert the behavior of the component based on the hook’s state.

#### Example: Testing Hook Behavior in a Component

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import CounterComponent from './CounterComponent'; // Component using the hook

test('counter should increment when button is clicked', () => {
  render(<CounterComponent />); // Render component that uses hook
  
  const incrementButton = screen.getByText('Increment'); // Find the button
  fireEvent.click(incrementButton); // Simulate button click
  
  const counter = screen.getByTestId('counter'); // Get the counter
  expect(counter).toHaveTextContent('1'); // Assert counter has incremented
});
```

In this example:
- **`CounterComponent`** uses the hook.
- **`fireEvent.click()`** simulates the user clicking a button that updates the hook's state.
- We assert that the **counter** displays the expected result after the state change.

---

### 3. **Mocking Dependencies in Hooks**

Sometimes, hooks may depend on external services (e.g., an API request). You can mock these dependencies to test how the hook behaves under different conditions.

#### Example: Mocking an API call in a hook:

```javascript
import { renderHook, act } from '@testing-library/react-hooks';
import useFetchData from './useFetchData';
import axios from 'axios';

// Mock axios
jest.mock('axios');

test('should fetch data successfully', async () => {
  // Set up the mock response
  axios.get.mockResolvedValue({ data: { name: 'John' } });

  const { result, waitForNextUpdate } = renderHook(() => useFetchData('https://api.example.com/user'));
  
  // Wait for the hook to update after the fetch request
  await waitForNextUpdate();
  
  expect(result.current.data).toEqual({ name: 'John' }); // Assert data is fetched correctly
  expect(result.current.loading).toBe(false); // Assert loading state is false
});

test('should handle fetch error', async () => {
  // Set up the mock error response
  axios.get.mockRejectedValue(new Error('Request failed'));

  const { result, waitForNextUpdate } = renderHook(() => useFetchData('https://api.example.com/user'));
  
  // Wait for the hook to update after the fetch request
  await waitForNextUpdate();
  
  expect(result.current.error).toEqual('Request failed'); // Assert error is handled
});
```

In this case:
- We use **jest.mock()** to mock the `axios.get()` method.
- The hook **`useFetchData`** is tested to verify it handles both successful and failed API calls.

---

### 4. **Test Effects (e.g., `useEffect`)**

Testing effects, such as those triggered by `useEffect()`, involves ensuring that side effects occur as expected (e.g., data fetching, subscriptions, etc.).

#### Example: Testing `useEffect` for data fetching:

```javascript
import { renderHook, act } from '@testing-library/react-hooks';
import useDataFetcher from './useDataFetcher'; // Custom hook with useEffect
import axios from 'axios';

// Mock axios
jest.mock('axios');

test('should fetch data on mount', async () => {
  axios.get.mockResolvedValue({ data: { name: 'John' } });
  
  const { result, waitForNextUpdate } = renderHook(() => useDataFetcher('https://api.example.com/user'));
  
  await waitForNextUpdate(); // Wait for useEffect to complete
  
  expect(result.current.data).toEqual({ name: 'John' }); // Verify data is fetched
});
```

In this example:
- The `useDataFetcher` hook triggers an effect to fetch data using `useEffect()`.
- We mock the API call and use **`waitForNextUpdate()`** to ensure the effect completes before making assertions.

---

### 📜 **Summary:**

Testing hooks involves two main approaches:
1. **Testing hooks in isolation** using `renderHook` and asserting their returned values.
2. **Testing hooks as part of a component** to ensure they work within a real component lifecycle and handle UI interactions.

Key methods:
- **`renderHook()`**: Used for testing hooks directly in isolation.
- **`act()`**: Ensures updates in hooks trigger state changes in React.
- **Mocking dependencies**: Mock services (like API calls) to isolate and control test environments.
- **Effect testing**: Ensure side effects (e.g., `useEffect`) behave as expected.

This process ensures your custom hooks work as expected, both in isolation and when integrated into components.

---


### **Mocking APIs Tests**


Mocking APIs during tests is crucial for isolating your tests from external dependencies, ensuring that your components or hooks behave as expected without actually making network requests. This is commonly done using **Jest** for mocking and **React Testing Library** (RTL) for testing React components. Below, we'll explore various ways to mock APIs for unit tests, integration tests, and how to test API interactions effectively.

---
1. **Jest Mocking**: Use `jest.mock()` to mock external libraries like `axios` or the native `fetch` API.
2. **Mock Responses**: Use `mockResolvedValue()` to simulate successful responses, and `mockRejectedValue()` to simulate errors.
3. **Testing Custom Hooks**: Combine `renderHook()` with mocking to test hooks that depend on external APIs.
4. **Mocking API Services**: You can create and use custom mock services to replace real API calls during tests.

Mocking APIs ensures that your tests remain fast, reliable, and independent of external systems. It isolates the logic in your components or hooks, making your tests more deterministic and less prone to failures caused by network issues.

### ✅ **Mocking APIs in Tests**

Mocking APIs involves replacing the real network request logic with mock functions that simulate responses (both successful and error scenarios). This allows you to control the test environment and ensure predictable behavior.

---

### **1. Mocking with Jest's `jest.mock()`**

You can mock libraries like `axios`, `fetch`, or any custom API service you use to make HTTP requests. Jest provides the `jest.mock()` function to replace these modules with mocked versions.

#### Example: Mocking `axios` using `jest.mock()`

```javascript
// Import your custom hook or component that makes an API call
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent'; // Component that makes an API call
import axios from 'axios';

// Mock axios module
jest.mock('axios');

test('should display data from the API', async () => {
  // Setup the mock to return a successful response
  axios.get.mockResolvedValue({
    data: { name: 'John Doe' }
  });

  render(<MyComponent />); // Render the component

  // Simulate user interaction if needed
  fireEvent.click(screen.getByText('Fetch Data'));

  // Wait for the component to update with the data
  await waitFor(() => screen.getByText('Name: John Doe'));

  // Assert the rendered text matches the API response
  expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
});

test('should handle API error', async () => {
  // Setup the mock to return an error response
  axios.get.mockRejectedValue(new Error('API Error'));

  render(<MyComponent />); // Render the component

  // Simulate user interaction if needed
  fireEvent.click(screen.getByText('Fetch Data'));

  // Wait for error message to appear
  await waitFor(() => screen.getByText('Error: API Error'));

  // Assert the error message
  expect(screen.getByText('Error: API Error')).toBeInTheDocument();
});
```

#### Key Points:
- **`jest.mock()`**: Mocks the entire module (e.g., `axios`) and replaces it with a mock function.
- **`mockResolvedValue()`**: Defines the value that the mock will return for a successful API call.
- **`mockRejectedValue()`**: Defines the error that will be thrown when the mock is invoked (used for simulating failed API requests).
- **`waitFor()`**: Waits for async updates to the component (e.g., after the API response).

---

### **2. Mocking `fetch` API with Jest**

If you're using the native **`fetch` API** for making HTTP requests, you can mock `fetch` similarly with `jest.mock()`.

#### Example: Mocking `fetch`

```javascript
global.fetch = jest.fn();

test('should fetch user data successfully', async () => {
  // Setup mock response
  fetch.mockResolvedValueOnce({
    json: async () => ({ name: 'Jane Doe' })
  });

  render(<MyComponent />); // Render the component

  // Trigger API request (for example, on a button click)
  fireEvent.click(screen.getByText('Fetch User'));

  // Wait for the component to re-render with the API data
  await waitFor(() => screen.getByText('User: Jane Doe'));

  // Assert that the correct data was rendered
  expect(screen.getByText('User: Jane Doe')).toBeInTheDocument();
});

test('should handle fetch error', async () => {
  // Setup mock error
  fetch.mockRejectedValueOnce(new Error('Fetch failed'));

  render(<MyComponent />); // Render the component

  // Trigger API request
  fireEvent.click(screen.getByText('Fetch User'));

  // Wait for error message
  await waitFor(() => screen.getByText('Error: Fetch failed'));

  // Assert that the error message was rendered
  expect(screen.getByText('Error: Fetch failed')).toBeInTheDocument();
});
```

#### Key Points:
- **`global.fetch`**: Override the global `fetch` function with a mock function.
- **`mockResolvedValueOnce()`**: Mock a successful response for one call.
- **`mockRejectedValueOnce()`**: Mock a failure for one call.

---

### **3. Mocking API Calls in Custom Hooks**

When you're testing custom hooks that make API calls, you can use `renderHook()` from **@testing-library/react-hooks** and mock API calls in a similar manner.

#### Example: Testing a Custom Hook with Axios

```javascript
import { renderHook, act } from '@testing-library/react-hooks';
import useUserData from './useUserData'; // Custom hook that fetches data
import axios from 'axios';

// Mock axios
jest.mock('axios');

test('should return user data after fetch', async () => {
  axios.get.mockResolvedValue({ data: { name: 'John Doe' } });

  const { result, waitForNextUpdate } = renderHook(() => useUserData());

  // Wait for the hook to complete the API request
  await waitForNextUpdate();

  // Assert the hook's returned data
  expect(result.current.user.name).toBe('John Doe');
  expect(result.current.loading).toBe(false);
});

test('should handle API error in the hook', async () => {
  axios.get.mockRejectedValue(new Error('Request failed'));

  const { result, waitForNextUpdate } = renderHook(() => useUserData());

  await waitForNextUpdate();

  // Assert the error state
  expect(result.current.error).toBe('Request failed');
  expect(result.current.loading).toBe(false);
});
```

---

### **4. Mocking API Calls with Custom Mocks**

Sometimes, you might want more control over how the mock behaves or simulate different scenarios. You can create a custom mock for API functions.

#### Example: Custom Mock for an API Service

```javascript
// api.js
export const fetchData = () => {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => {
      throw new Error('API Error');
    });
};

// Test file
import { fetchData } from './api';

jest.mock('./api', () => ({
  fetchData: jest.fn()
}));

test('should return mock data', async () => {
  fetchData.mockResolvedValue({ name: 'Jane' });

  const result = await fetchData();

  expect(result.name).toBe('Jane');
});

test('should throw an error when fetch fails', async () => {
  fetchData.mockRejectedValue(new Error('API Error'));

  try {
    await fetchData();
  } catch (error) {
    expect(error.message).toBe('API Error');
  }
});
```

---


### **Folder Structure Best Practices**

🟩 **Answer:**

The folder structure of a React project plays a crucial role in scalability, maintainability, and readability. A well-organized project structure helps developers work more efficiently and collaborate better in teams, ensuring the app grows without becoming unwieldy.

Here are some **best practices** to follow when deciding on your React project's folder structure:

---

### **1. Keep Components Modular and Reusable**

React promotes **component-based architecture**, so your folder structure should be modular, where each component is self-contained. Group components by feature or domain, rather than by type (e.g., `Button`, `Input`, `Card` in separate folders), to make the project more scalable.

#### **Example Folder Structure:**
```plaintext
src/
  ├── components/
  │   ├── Header/
  │   │   ├── Header.js
  │   │   ├── Header.css
  │   │   └── Header.test.js
  │   ├── Footer/
  │   │   ├── Footer.js
  │   │   ├── Footer.css
  │   │   └── Footer.test.js
  │   └── Button/
  │       ├── Button.js
  │       ├── Button.css
  │       └── Button.test.js
```

---

### **2. Feature-Based Folder Structure**

Group related files together in folders by **feature** or **domain**, rather than by type. This makes it easier to navigate and scale your project as the app grows. This is particularly useful in large applications where you have many different features or sections (e.g., Authentication, Dashboard, etc.).

#### **Example Folder Structure:**
```plaintext
src/
  ├── features/
  │   ├── auth/
  │   │   ├── Auth.js
  │   │   ├── Auth.css
  │   │   ├── authSlice.js
  │   │   └── auth.test.js
  │   ├── dashboard/
  │   │   ├── Dashboard.js
  │   │   ├── Dashboard.css
  │   │   └── dashboardAPI.js
  │   └── profile/
  │       ├── Profile.js
  │       ├── Profile.css
  │       └── profileActions.js
```

---

### **3. Separation of Concerns (State, Logic, UI)**

To improve the clarity and maintainability of your code, separate the **state management**, **business logic**, and **presentation/UI components** into different folders. For example, place your Redux slices or hooks in a separate folder to keep the UI components focused on rendering only.

#### **Example Folder Structure:**
```plaintext
src/
  ├── components/
  │   ├── Button.js
  │   └── Header.js
  ├── hooks/
  │   └── useAuth.js
  ├── redux/
  │   ├── authSlice.js
  │   └── store.js
  ├── services/
  │   └── api.js
```

---

### **4. Organize Styles and Assets Properly**

When it comes to styles and static assets (like images, fonts, etc.), keep them in dedicated folders to avoid clutter in your components folder.

- **CSS/SCSS**: You can either scope styles to specific components or use global styles, depending on your preference. Some teams use **CSS Modules** or **Styled Components** for scoping styles to specific components.

#### **Example Folder Structure:**
```plaintext
src/
  ├── assets/
  │   ├── images/
  │   └── fonts/
  ├── styles/
  │   ├── global.css
  │   └── variables.css
```

---

### **5. Use a Centralized Store (if applicable)**

If you're using a state management library like **Redux**, **Zustand**, or **Context API**, have a centralized folder for managing global state and actions. This can help reduce tight coupling between UI and state logic.

#### **Example Folder Structure (Redux):**
```plaintext
src/
  ├── redux/
  │   ├── authSlice.js
  │   ├── userSlice.js
  │   ├── store.js
  ├── components/
  │   └── Profile.js
```

---

### **6. Keep Utility Functions in a Separate Folder**

Utility functions like data formatting, API helpers, or validation logic should be placed in a separate **utils** or **helpers** folder. This keeps them separate from UI logic and makes them reusable across different features.

#### **Example Folder Structure:**
```plaintext
src/
  ├── utils/
  │   ├── dateUtils.js
  │   └── validation.js
```

---

### **7. Testing Folder**

If your tests are growing in number, it is a good practice to create a separate **`tests/`** folder or place tests next to the components they belong to. Keep unit tests, integration tests, and end-to-end tests in separate directories.

#### **Example Folder Structure:**
```plaintext
src/
  ├── components/
  │   ├── Button/
  │   │   ├── Button.js
  │   │   ├── Button.test.js
  ├── tests/
  │   ├── auth.test.js
  │   └── dashboard.test.js
```

---

### **8. Environment Configurations**

For large-scale applications, managing environment-specific configurations can be tricky. Use a **config/ folder** to handle different environments (development, production, staging, etc.), and keep your configuration files organized.

#### **Example Folder Structure:**
```plaintext
src/
  ├── config/
  │   ├── dev.js
  │   ├── prod.js
  │   └── config.js
```

---

### **9. Follow a Naming Convention**

Consistency is key when it comes to naming files and directories. It is a best practice to use a naming convention that is **simple**, **clear**, and **scalable**. Some conventions include:
- **PascalCase** for component filenames (e.g., `Button.js`)
- **camelCase** for functions and hooks (e.g., `useAuth.js`)
- **lowercase** for styles and assets (e.g., `button.css`)

---

### **10. Consider Domain-Driven Design (DDD)**

For very large applications, **Domain-Driven Design (DDD)** can be applied where the project is structured around the core business domains (e.g., **user**, **products**, **orders**). This helps in large teams working on different areas of the app without conflicts.

#### **Example Folder Structure (DDD):**
```plaintext
src/
  ├── user/
  │   ├── components/
  │   ├── hooks/
  │   ├── api/
  │   ├── userSlice.js
  ├── products/
  │   ├── components/
  │   ├── hooks/
  │   ├── api/
  │   ├── productSlice.js
```

---

### 📜 **Summary:**

1. **Feature-based structure**: Group related files by domain or feature.
2. **Separation of concerns**: Keep components, logic (state management), and UI separated.
3. **Centralized stores**: Use centralized state management in a dedicated folder.
4. **Modular and reusable components**: Keep components modular and reusable across the app.
5. **Testing**: Place tests in the same folder as the components or use a dedicated tests folder.
6. **Naming conventions**: Follow consistent naming conventions for readability and clarity.

Choosing the right folder structure early in your project helps ensure your app scales and remains maintainable. As your app grows, you might need to adapt or restructure, but keeping your project well-organized from the start can save you significant time in the long run.



### **Atomic Design**

🟩 **Answer:**

**Atomic Design** is a methodology created by [Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/) for crafting design systems. It helps in building consistent and scalable UIs by breaking the interface down into **five hierarchical levels** — **Atoms**, **Molecules**, **Organisms**, **Templates**, and **Pages**.

It’s especially useful in React because React is **component-based**, and Atomic Design aligns naturally with that philosophy.

---

### ⚛️ **Atomic Design Levels (with Examples)**

| Level       | Description                                                                 | Example (React)            |
|-------------|-----------------------------------------------------------------------------|----------------------------|
| **Atoms**   | Basic UI elements; smallest building blocks.                               | Button, Label, Input       |
| **Molecules** | Groups of atoms that work together as a unit.                              | SearchBar (Input + Button) |
| **Organisms** | Complex UI sections made up of molecules and/or atoms.                    | Header, Footer, Card       |
| **Templates** | Page-level structure with placeholder content. Defines layout.            | HomeLayout, AuthLayout     |
| **Pages**     | Actual content-filled pages using templates. Reflects real user experience. | HomePage, LoginPage        |

---

### 🧱 **Folder Structure Based on Atomic Design**

```plaintext
src/
  └── components/
      ├── atoms/
      │   ├── Button/
      │   ├── Input/
      ├── molecules/
      │   ├── FormGroup/
      ├── organisms/
      │   ├── NavBar/
      │   ├── CardList/
      ├── templates/
      │   ├── DashboardLayout/
      └── pages/
          ├── DashboardPage/
          └── LoginPage/
```

---

### ✅ **Benefits of Atomic Design**

- **Reusability**: Atoms and molecules are easy to reuse across the app.
- **Consistency**: Ensures a consistent design language and component hierarchy.
- **Scalability**: Structure grows well with large codebases.
- **Testability**: Small, focused components are easier to test.

---

### 🚀 **When to Use It**

- Mid-to-large scale applications.
- Design systems or component libraries.
- Projects where multiple teams work on shared components.

---

### 💬 Real-World Example in React

#### **Atom: `Button.tsx`**
```tsx
export const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
```

#### **Molecule: `FormGroup.tsx`**
```tsx
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

export const FormGroup = ({ label, ...inputProps }) => (
  <div>
    <Label text={label} />
    <Input {...inputProps} />
  </div>
);
```

#### **Organism: `LoginForm.tsx`**
```tsx
import { FormGroup } from '../molecules/FormGroup';
import { Button } from '../atoms/Button';

export const LoginForm = () => (
  <form>
    <FormGroup label="Email" type="email" />
    <FormGroup label="Password" type="password" />
    <Button type="submit">Login</Button>
  </form>
);
```

---

### 📌 Summary

- **Atomic Design = Component design system** for better **structure**, **reusability**, and **scalability**.
- Helps enforce **consistency** and makes large projects easier to manage.
- Natural fit for **React's component-based** architecture.

---

### **Component Reusability**

**Component Reusability** is the practice of creating components in a way that they can be reused across multiple parts of an application — reducing duplication, improving maintainability, and speeding up development.

---

### ✅ **Why Is Reusability Important?**

- **Consistency**: One source of truth for UI elements (like buttons, inputs).
- **Maintainability**: Update once, reflect everywhere.
- **Scalability**: Easily compose new features with existing blocks.
- **Faster Development**: Build with Lego blocks instead of starting from scratch.

---

### 💡 **Best Practices for Reusable Components**

| Principle                    | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Props-Driven Design**      | Accept data & behavior via props to adapt the component dynamically.        |
| **Avoid Hardcoding**         | Don't hardcode labels, content, or styles; use props or context.           |
| **Composition over Inheritance** | Nest reusable components using `children` and wrapper components.      |
| **Generic Naming**           | Use names like `Card`, `Modal`, `ListItem` instead of `ProductCard`.       |
| **Limit Side Effects**       | Keep them pure — don’t tie them to global states unless necessary.         |

---

### 🧱 **Reusable vs Non-Reusable Comparison**

| Non-Reusable Component                       | Reusable Component                                     |
|---------------------------------------------|--------------------------------------------------------|
| `<RedSubmitButton text="Save" />`           | `<Button variant="primary" text="Save" />`             |
| `<ProductListItem title="Book" price={20} />`| `<ListItem title="..." subtitle="..." icon="..." />`  |

---

### 🧪 **Example: Reusable Button Component**

```tsx
// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ onClick, variant = 'primary', children }: ButtonProps) => {
  const styles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-300 text-black',
  };

  return (
    <button className={`px-4 py-2 rounded ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

```tsx
// Usage in different components
<Button onClick={handleSave}>Save</Button>
<Button variant="secondary" onClick={handleCancel}>Cancel</Button>
```

---

### 👩‍💻 Other Reusable Component Ideas

- **InputField** → with label, validation, and error message support.
- **Modal** → generic modal that accepts header, body, and footer as children.
- **Card** → reusable for product cards, user profiles, etc.
- **Table** → dynamic columns and rows with actions.

---

### 🛠️ Tips

- Use **TypeScript** for reusable components — helps define props and reduces bugs.
- Use **Storybook** for isolated component development and testing.
- Use design tokens or a style guide for consistent styling.

---



### **PropTypes vs TypeScript**

Both **PropTypes** and **TypeScript** are used to ensure your components receive correct props — but they do it in very different ways.

---

### 📋 **What Are They?**

| Feature        | PropTypes                                  | TypeScript                                   |
|----------------|---------------------------------------------|----------------------------------------------|
| **Type Checking** | Runtime (during app execution)              | Compile-time (before code runs)               |
| **Scope**         | Only checks React props                   | Full app: props, state, functions, variables |
| **Tooling**       | Minimal editor support                    | Strong autocompletion and IntelliSense       |
| **Error Detection**| Errors caught while app is running       | Errors caught during development             |

---

### 🔧 **Usage Comparison**

#### ✅ With **PropTypes**:
```jsx
import PropTypes from 'prop-types';

const Greeting = ({ name, age }) => (
  <div>Hello {name}, you are {age} years old</div>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

#### ✅ With **TypeScript**:
```tsx
type GreetingProps = {
  name: string;
  age?: number;
};

const Greeting: React.FC<GreetingProps> = ({ name, age }) => (
  <div>Hello {name}, you are {age} years old</div>
);
```

---

### ✅ **Pros & Cons**

| Feature                  | PropTypes                            | TypeScript                               |
|--------------------------|--------------------------------------|------------------------------------------|
| ✅ Easy to use           | ✔️ Yes                               | ❌ Learning curve                        |
| ✅ Catches bugs early    | ❌ No (only at runtime)               | ✔️ Yes (during development)              |
| ✅ Supports full app typing | ❌ Only React props                 | ✔️ Yes (whole codebase)                  |
| ✅ Better tooling        | ❌ Basic                             | ✔️ IDE autocomplete & type safety       |
| ✅ File size impact      | ❌ Slightly increases bundle size     | ✔️ Stripped after compilation           |

---

### 🧠 **Which One Should You Use?**

| Scenario                                 | Recommendation          |
|------------------------------------------|--------------------------|
| Small project or legacy code             | Use **PropTypes**        |
| Mid to large scale project               | Prefer **TypeScript**    |
| Want full static typing, not just props | Definitely **TypeScript**|

---

### 📝 Conclusion

- PropTypes = ✅ Quick prop validation, ❌ limited and runtime-only.
- TypeScript = ✅ Comprehensive static type-checking, IDE support, better for larger projects.

If you're starting fresh or scaling up, **TypeScript is the way to go**.
---

---
### **Fetching Data**

Fetching data is a core part of most React apps. You can use either the built-in `fetch()` API or third-party libraries like **Axios**.

---

### 🔍 **1. Using `fetch()` (Native API)**

```jsx
useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error('Error:', err));
}, []);
```

✅ Pros:
- Built into the browser (no extra package)
- Simple for basic requests

❌ Cons:
- No request/response interceptors
- Doesn't auto-transform JSON in all cases
- Limited error handling (no automatic HTTP error rejection)

---

### 🔧 **2. Using Axios (3rd Party Library)**

```bash
npm install axios
```

```jsx
import axios from 'axios';

useEffect(() => {
  axios.get('https://api.example.com/users')
    .then(response => setUsers(response.data))
    .catch(error => console.error('Error:', error));
}, []);
```

✅ Pros:
- Automatic JSON parsing
- Request/response interceptors
- Better error handling
- Supports older browsers

❌ Cons:
- Requires installation
- Slightly larger bundle size

---

### 🛠️ **Handling Loading & Error States**

```jsx
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('https://api.example.com/users');
      setUsers(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

---

### 🤔 **When to Choose What?**

| Feature                     | `fetch()`       | `axios`        |
|----------------------------|------------------|----------------|
| JSON Parsing               | Manual           | Auto           |
| Interceptors               | ❌               | ✅              |
| Older Browser Support      | Limited          | Good           |
| File Uploads / Multipart   | Verbose          | Easy           |
| Built-in                   | ✅               | ❌ (needs install) |

---

### 📦 Bonus: Using Axios with a Custom Instance

```js
// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    Authorization: `Bearer YOUR_TOKEN`,
  },
});

export default api;
```

```js
// In component
import api from './api';

useEffect(() => {
  api.get('/users').then(res => setUsers(res.data));
}, []);
```

---



### Handling Loading and Error States

Managing **loading** and **error** states is essential when fetching data in React. It improves user experience by showing appropriate feedback while waiting for or failing to receive data.

---

### ✅ **Basic Example (Using `useEffect` + `axios`)**

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // loading state
  const [error, setError] = useState(null);       // error state

  useEffect(() => {
    axios.get('https://api.example.com/users')
      .then(res => {
        setUsers(res.data);
        setError(null);       // clear any previous error
      })
      .catch(err => {
        setError(err.message || 'Something went wrong!');
        setUsers([]);         // clear data on error
      })
      .finally(() => {
        setLoading(false);    // done loading either way
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### 🔄 **Best Practices**

| Concept                 | Tip                                                                 |
|------------------------|----------------------------------------------------------------------|
| **Initial state**      | Start with `loading = true`, `error = null`                          |
| **Set `loading` early**| Set `loading` before API call, reset it in `.finally()`              |
| **Show feedback**      | Display a spinner or "Loading..." message                           |
| **Display error info** | Show user-friendly message and optionally a "Retry" button           |
| **Clear old data**     | Reset or handle stale data if needed                                 |

---

### 🔁 **With Retry Button**

```jsx
{error && (
  <>
    <p style={{ color: 'red' }}>Error: {error}</p>
    <button onClick={() => window.location.reload()}>Retry</button>
  </>
)}
```

---

### 🔧 Want It Cleaner?

For cleaner state handling, you could use a **custom hook**:

```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
```

Then just call it in a component:
```jsx
const { data, loading, error } = useFetch('https://api.example.com/users');
```

---



###  Using useEffect for Data Fetching

In React, `useEffect` is commonly used to **fetch data** when the component mounts. This hook helps you run side-effects, like making API calls.

---

### ✅ Basic Syntax

```jsx
useEffect(() => {
  // your side-effect (e.g., fetch)
}, []);
```

The empty dependency array `[]` ensures the code runs **only once** after the initial render.

---

### 🧪 Example: Fetching Data from an API

```jsx
import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []); // run once when component mounts

  if (loading) return <p>Loading posts...</p>;

  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### 🔁 Reactivity with Dependencies

You can also add **dependencies** to run the effect whenever values change:

```jsx
useEffect(() => {
  // fetch data when `userId` changes
}, [userId]);
```

---

### 🧼 Cleanup (e.g., for intervals or subscriptions)

```jsx
useEffect(() => {
  const interval = setInterval(() => console.log('ping'), 1000);
  return () => clearInterval(interval); // clean up on unmount
}, []);
```

---

### 🧠 Best Practices

| Tip                                 | Why It Matters                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------|
| Use `async` functions **inside** `useEffect` | `useEffect` itself can’t be `async` — define an `async` function inside it     |
| Handle loading and error states     | For good UX and debugging                                                       |
| Use cleanup when needed             | Avoid memory leaks with subscriptions or intervals                             |
| Use AbortController (optional)      | To cancel fetch requests on unmount (especially in large apps)                 |

---

### 🧪 Using `async/await` in `useEffect`

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('https://api.example.com/data');
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, []);
```

---

### React Query Swr?

React Query and SWR are powerful **data-fetching libraries** for React that help you manage remote data with ease. They go **beyond `useEffect` and `useState`**, handling caching, revalidation, background updates, and more.

---

## 🆚 React Query vs SWR – Quick Comparison Table

| Feature                     | **React Query**                              | **SWR** (Stale-While-Revalidate)         |
|-----------------------------|----------------------------------------------|------------------------------------------|
| Developed By               | TanStack                                     | Vercel                                   |
| Caching                    | ✅ Yes                                        | ✅ Yes                                    |
| Revalidation               | ✅ Yes                                        | ✅ Yes                                    |
| Background Fetching        | ✅ Yes                                        | ✅ Yes                                    |
| Pagination / Infinite Scroll | ✅ Built-in                                 | ❌ Not built-in                           |
| Mutation Support           | ✅ Yes                                        | ⚠️ Limited / manual                       |
| DevTools                   | ✅ Awesome browser devtools                   | ⚠️ Limited devtools                       |
| Learning Curve             | Medium                                       | Very Easy                                |
| Ecosystem                  | Rich (e.g., `TanStack Query`, `Table`, etc.) | Smaller                                   |
| Use Case                   | Complex apps with mutations/state mgmt       | Simple data-fetching (mostly GET requests) |

---

## 🔍 Why Use React Query?

React Query is best for:

- Complex apps
- Data that needs background refetching
- Managing loading, error, stale states
- Updating data with **mutations**
- Pagination / infinite scroll
- Built-in DevTools for debugging

### 👉 Example

```jsx
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () =>
  fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

function Posts() {
  const { data, error, isLoading } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>{data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}</ul>
  );
}
```

---

## 🌐 Why Use SWR?

SWR is great for:

- Simpler apps
- Static or infrequently-changing data
- Blog content, public API content
- Leaner bundles

### 👉 Example

```jsx
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

function Profile() {
  const { data, error, isLoading } = useSWR('https://api.example.com/user', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <h1>Hello, {data.name}</h1>;
}
```

---

## 🧠 Shared Benefits

- Auto-caching
- Background revalidation
- Avoids duplication of fetch logic
- Easy to use with TypeScript
- Great DX (Developer Experience)

---

### 🗣️ TL;DR

| Use this if...                           | Choose...       |
|------------------------------------------|-----------------|
| You want **mutations, pagination, devtools** | React Query     |
| You want **lightweight, fast setup**     | SWR             |

---

### accessibility a11y

 - Ensuring **accessibility (a11y)** in a React app means making your app usable by as many people as possible—including those with disabilities. 
 - Below is a practical checklist and examples to help you make your app more accessible
---
## 🔍 Tools for Testing A11y

| Tool              | Purpose                              |
|------------------|--------------------------------------|
| Axe Chrome DevTools | Automated accessibility checks     |
| Lighthouse         | Performance + a11y audit            |
| Keyboard only test | Manual navigation test              |
| Screen readers     | NVDA (Windows), VoiceOver (Mac)     |

---

## ✅ React-Specific Libraries for A11y

- `@reach/*` – Accessible UI primitives
- `react-aria` – Headless accessibility components by Adobe
- `react-a11y` – Runtime a11y warnings (dev only)
- `radix-ui` – Unstyled components with a11y baked in



---

## ✅ Core Accessibility Guidelines (A11y)

### 1. **Use Semantic HTML**
Use correct tags for structure and meaning:
```jsx
<header>, <main>, <nav>, <section>, <article>, <footer>
<h1> to <h6>, <button>, <label>, <input>, etc.
```

Bad ❌:
```jsx
<div onClick={handleClick}>Submit</div>
```

Good ✅:
```jsx
<button onClick={handleClick}>Submit</button>
```

---

### 2. **Add `aria-*` Attributes When Needed**

For non-semantic elements (e.g., `<div>`), use ARIA roles or labels:

```jsx
<div role="button" tabIndex="0" aria-pressed="false" onKeyDown={handleKeyDown} onClick={handleClick}>
  Toggle
</div>
```

---

### 3. **Use Labels with Inputs**

Each input field must be associated with a `<label>`.

```jsx
<label htmlFor="email">Email</label>
<input id="email" type="email" name="email" />
```

---

### 4. **Keyboard Navigation**

Ensure all interactive elements are **focusable** and **navigable via keyboard** (`Tab`, `Enter`, `Space`, `Arrow keys`).

Test using just your keyboard:
- `Tab` to navigate
- `Enter` or `Space` to activate buttons
- Use `aria-keyshortcuts` or custom handlers if necessary

---

### 5. **Provide Focus Styles**

Never remove `outline` without replacing it with another visual focus indicator.

Bad ❌:
```css
button:focus {
  outline: none;
}
```

Better ✅:
```css
button:focus {
  outline: 2px solid #0070f3;
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
}
```

---

### 6. **Use Meaningful Alt Text for Images**

```jsx
<img src="profile.jpg" alt="User profile picture" />
```

Decorative images? Use empty `alt=""` to hide from screen readers.

---

### 7. **Accessible Forms and Validation**

- Use `aria-invalid` and `aria-describedby` for errors:
```jsx
<input
  id="username"
  aria-invalid={hasError}
  aria-describedby="username-error"
/>
<span id="username-error" role="alert">
  Username is required
</span>
```

---

### 8. **Use Headings Hierarchically**

Don’t skip heading levels (e.g., jumping from `h1` to `h4`).

---

### 9. **Accessible Modals**

- Trap focus inside modal
- Return focus to trigger element after close
- Add `role="dialog"` and `aria-modal="true"`

Libraries like `@reach/dialog`, `react-aria`, or `radix-ui` help here.

---

### 10. **Color Contrast & Font Sizes**

Use high contrast for text & backgrounds. Check contrast ratios:
- Use [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/)

---



## React Fiber


**React Fiber** is the complete rewrite of React’s reconciliation algorithm, introduced in **React 16**. It improves how React handles updates, especially in terms of **performance**, **interruptibility**, and **granular control** over rendering.

---

### 🔄 What is Reconciliation?

Reconciliation is the process React uses to:
- Compare the **previous virtual DOM tree** with the **new one**,
- And determine the **minimum number of changes** needed to update the real DOM.

---

## ⚡ React Fiber: The New Reconciliation Engine

Fiber replaces the **stack-based** reconciliation from React 15 and earlier with a **linked list** structure.

---

### 🚫 Previous Algorithm (Stack Reconciler)

- **Synchronous and non-interruptible**: Once rendering started, React had to go through the entire component tree before it could do anything else.
- **Recursive call stack**: It used the JS call stack for recursion.
- Large updates could **block the main thread**, making apps feel sluggish.
- No fine-grained control over priority — all updates were treated equally.

---

### ✅ Fiber: What Changed?

React Fiber introduced a **work loop** with these features:

| Feature | Description |
|--------|-------------|
| **Interruptible rendering** | Work can be paused, resumed, or aborted. Useful for keeping apps responsive during large updates. |
| **Prioritization** | Updates can have different **priorities** (e.g., animations vs. user input). |
| **Incremental rendering** | Large component trees can be broken into **chunks** and processed over multiple frames. |
| **Concurrency-ready** | It's the foundation for **Concurrent React** (e.g., `startTransition`, `Suspense`, `useDeferredValue`). |
| **Linked list tree structure** | Each Fiber node points to its **child**, **sibling**, and **return** (parent), allowing React to traverse and manipulate the tree in small units of work. |
| **Better error handling** | Introduced **error boundaries** with proper support to catch errors during rendering. |

---

### 🧠 Visual: Fiber Node (simplified)
```js
{
  type: 'div',
  child: <FiberNode>,      // First child
  sibling: <FiberNode>,    // Next sibling
  return: <FiberNode>,     // Parent node
  alternate: <FiberNode>,  // Link to the old fiber
  effectTag: 'PLACEMENT',  // What kind of update is needed
}
```

---

### 🔁 Summary – Fiber vs Old Reconciler

| Feature | Stack Reconciler | React Fiber |
|--------|------------------|-------------|
| Execution | Synchronous | Asynchronous & interruptible |
| Data Structure | Recursion on JS stack | Custom linked list |
| Priority Support | No | Yes |
| Animation & Input Handling | Sluggish under load | Much smoother |
| Error Boundaries | No | Yes |
| Foundation for Concurrent Features | ❌ | ✅ |

---

---

## **Redux vs Context API**

| Feature | **Redux** | **Context API** |
|--------|-----------|----------------|
| 🔁 **Purpose** | Global state management with predictable updates | Pass data through the component tree without prop drilling |
| ⚙️ **State Management** | Uses **reducers**, **actions**, **store** | Uses **React.createContext()** and **useContext** |
| 📦 **Installation** | Requires installing packages (`redux`, `react-redux`, `@reduxjs/toolkit`) | Built into React |
| 🧠 **Learning Curve** | Steeper (concepts like reducers, actions, middleware) | Very easy to get started |
| 🔍 **Debugging** | Excellent dev tools support | Limited debugging |
| 🧩 **Boilerplate Code** | More boilerplate (less with Redux Toolkit) | Minimal |
| 🎯 **Performance** | Fine-grained updates via `connect()` | Can cause unnecessary re-renders if not used carefully |
| ⚡ **Scalability** | Designed for large, complex apps | Best for small-to-medium state sharing |
| 🌐 **Middleware/Async** | Powerful middleware like **redux-thunk**, **redux-saga** for async | Manual handling of async (e.g., `useEffect`) |
| 💬 **Community & Ecosystem** | Huge community, battle-tested | Simpler, smaller use case |

---

## 🧠 When to Use **Context API**

✅ For:
- Theme toggling (light/dark)
- Auth user info (token, user ID)
- Language/locale
- Simple app-wide settings

❌ Avoid:
- Frequently changing or large states (can trigger too many re-renders)

---

## 💪 When to Use **Redux**

✅ For:
- Complex apps with **deeply nested components**
- Large-scale state needs (e.g., cart, filters, forms, API data)
- Need for **time-travel debugging**, middleware, or **persistent state**
- When **multiple components** at different levels need access and updates to shared state

---

## 🧩 Tip: Combine Both
Use **Context API** for app-wide "static" values (like theme or auth), and **Redux** for complex, dynamic, and deeply shared state (like API data or cart logic).

---


---

## **Conditional Rendering**

**Conditional Rendering** means showing different UI elements based on some condition, like user login status, loading state, error, etc.

It’s like using `if/else` in JavaScript — but inside JSX.

---

### ✅ **1. Using `if` Statements (Outside JSX)**

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

---

### ✅ **2. Using Ternary Operator (Inline in JSX)**

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

---

### ✅ **3. Using Logical `&&` Operator**

Only renders the component if the condition is `true`.

```jsx
function Message({ unreadCount }) {
  return (
    <div>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}
    </div>
  );
}
```

---

### ✅ **4. Storing JSX in a Variable**

```jsx
function Dashboard({ isAdmin }) {
  let content;
  if (isAdmin) {
    content = <AdminPanel />;
  } else {
    content = <UserPanel />;
  }

  return <div>{content}</div>;
}
```

---
