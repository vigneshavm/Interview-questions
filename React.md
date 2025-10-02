| **Category**                          | **Topics**                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **React Basics** | • [React App using TypeScript](#create-react-app-using-typescript) • [React Overview](#react-overview) •  [Virtual DOM](#virtual-dom)  •  [Virtual DOM Internally](#Compare-nodes-internally-in-the-Virtual-DOM) •   [Keys in Lists](#keys-in-lists) •  [Reconciliation Process](#reconciliation-process) • [Single Page Applications (SPA)](#single-page-applications-spa)  • [Why Use React](#why-use-react) 
| **React Component Types**          | - [React 18 key changes](#React-18-key-changes) • [JSX vs HTML](#jsx-vs-html) •  [Class vs Functional Components](#class-vs-functional-components)  •  [Components](#Components)  •  [Lifting State Up](#lifting-state-up) •  [Component Composition vs Inheritance](#Component-Composition-vs-Inheritance)
| **Props, State & Context**          | •  [Data Flows](#Data-Flows)  •  [Props ](#props-in-react) •  [Props Drilling](#props-drilling) •  [Props vs State](#props-vs-state) •  [React Children Prop](#react-children-prop) - [Render Props](Render-Props) •  [Conditional Rendering](#Conditional-Rendering) |
| **State Management Techniques**          | •  [Redux](#redux--predictable-state-management) •  [Context API](#context-api) •  [Higher-Order Components](#higher-order-components-hocs) •  [Redux vs Context API](#redux-vs-context-api)  •  [Redux-Saga](#Redux-Saga) •  [Reacts Concurrent Mode](#Reacts-Concurrent-Mode) |
| **Hook**          | •  [Lifecycle Methods](#lifecycle-methods)  •  [Functional components lifecycle hook](#Functional-components-lifecycle-hook) •  [React Hooks](#react-hooks) •  [Custom Hook](#Custom-Hook) •  [Hooks Rules](#Hooks-Rules)  •  [`useRef` vs `useState`](#useRef-vs-useState)  •  [Lazy Loading](#lazy-loading-components) •  [Suspense Boundary](#Suspense-Boundary) 
| **Routing**          | •  [React Router](#react-router) •  [Roles Router](#Roles-Routes) •  [Dynamic Routing](#dynamic-routing) •  [Route Protection / Auth Routing](#route-protection)•  [React Router Navigation](#react-router-navigation) |
| **Forms and Validation**          | •  [Form Validation with Formik / React Hook Form](#Form-Validation-with-Formik) •  [Handling Multiple Inputs in a Form](#handling-multiple-inputs) •  [Handle Large Forms](#Handle-Large-Forms)|
| **React Others**          | •    [Refs ](#refs-in-react) •    [Ref vs useRef](#Ref-vs-useRef)  •    [forwardRef ](#forwardRef) •  [React Fragments](#react-fragments) •  [React Portals](#react-portals)  •  [React Profiler](#react-profiler) •  [React Fiber](#react-Fiber) •  [React Query / SWR – What and Why?](#react-query-swr) •  [Redux Toolkit Query](#Redux-Toolkit-Query)   •  [React Window](#React-Window) •  [Redux Virtualized](#react-virtualized)  - [Recursion](#Recursion) 
| **Error**          | •  [Handling Loading, Error States](#Handling-Loading-and-Error-States) •  [Error Boundaries](#error-boundaries) •  [Error Handling in Components](#error-handling-in-components) |
| **Best Practices & Architecture**          | •  [Folder Structure Best Practices](#folder-structure-best-practices) •  [Atomic Design ](#atomic-design) •  [Component Reusability](#component-reusability) •  [PropTypes vs TypeScript](#proptypes-vs-typescript)  •  [Strict Mode](#strict-mode-in-react) •  [accessibility a11y](#accessibility-a11y)|
| **Data Fetching & APIs**          | •  [Fetching Data with Axios / Fetch](#fetching-data)  •  [Using useEffect for Data Fetching](#Using-useEffect-for-Data-Fetching) |
| **Performance Optimization**          | •  [Performance Optimization](#performance-optimization) •  [Avoiding Unnecessary Rerenders](#Avoiding-Unnecessary-Rerenders) •  [Memory leaks](#Memory-leaks) •  [Structure Large Scale Application](#large-scale-application) •  [During-a-React-Re-render](#What-Happens-During-a-React-Re-render)
| **Call components**          | [Passing data child to parent](#Passing-data-child-to-parent) •  [function call child -> parent](#call-child-components-function-from-a-parent) •  [function call parent->child](#call-a-parent-components-function-from-a-child-in-react) •  [Parent → Child Rendering in React](#parent-child-rendering-in-react) •  [Rerender parent component to child component](#rerender-parent-component-to-child-component)


---

## Create React App using Typescript

- npx create-react-app@latest sample-app --template typescript

 ### Benefits of using TypeScript in a React project
---

* **Static Type Checking**:
  Catches type-related errors at compile time, reducing runtime bugs significantly.

* **Improved Developer Experience**:
  Offers intelligent autocompletion, type inference, and better navigation through tools like VS Code.

* **Clearer & Self-Documenting Code**:
  Type annotations act as inline documentation, making it easier for others to understand and maintain the code.

* **Better Prop & State Management in React**:
  Ensures that components receive the correct props and that state updates are type-safe.

* **Safer Refactoring**:
  TypeScript ensures consistency across the codebase during refactoring, preventing silent breaking changes.

* **Advanced Type Features**:
  Supports generics, union/intersection types, and custom type guards — useful in building reusable, flexible components.

* **Enhanced Collaboration**:
  Types make intentions explicit, improving onboarding and reducing miscommunication in teams.

* **Helps with Large-Scale Codebases**:
  Enforces structure and predictability, which becomes essential as the project scales.

* **Strong Ecosystem Support**:
  Most React libraries now come with TypeScript types, making integration seamless.

* **Error Prevention in JSX**:
  Catches invalid prop types or component usage during development.

* **Supports Modern JavaScript**:
  Allows use of the latest ES features with backward compatibility via transpilation.


---

## React Overview 


#### **1. Start with Definition + Purpose**

*"React is an **open-source JavaScript library** developed by Facebook for building **fast and interactive user interfaces**, mainly in **single-page applications**.

#### **2. Core Features with Why They Matter**


* **Component-based architecture** → which allows us to build UIs in small, reusable pieces. 

* **Virtual DOM** →so instead of updating the entire DOM tree, React intelligently re-renders **only what has changed** — leading to significant **performance gains**.

* **Declarative programming** → : as developers, we just describe **what the UI should look like** for a given state, and React handles the updates. 

* **Unidirectional data flow** → - Combined with its **unidirectional data flow**, this makes applications **easier to debug and reason about**.


#### **3. Position in Ecosystem**

While React focuses only on the **view layer**, the **ecosystem is rich** — with **React Router** for navigation, **Redux or Recoil** for state management, and **Next.js** for server-side rendering and routing.

#### **4. Real-World Touch** (optional but powerful)

In practice, I’ve used React to build **scalable dashboards and client-facing portals**, where features like **component reusability** and the **Virtual DOM** reduced rendering overhead and improved performance.

Overall, React strikes a balance between **simplicity and scalability**, which is why it’s one of the most **widely adopted libraries** in modern web development."*


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
|  **Component-Based Architecture** | Everything is a reusable, encapsulated component — great for scaling apps. |
|  **Learning Curve** | Easier to pick up compared to Angular (less opinionated, just JS + JSX). |
|  **JSX = JavaScript + HTML** | JSX feels natural — write HTML-like code right inside your JS. |
|  **Flexibility** | You’re not locked into a huge framework. Choose your own routing, state management, etc. |
|  **Massive Ecosystem** | Tons of libraries (Redux, React Router, etc.), tools, and community support. |
|  **Strong Backing** | Backed by Meta (Facebook), used in massive apps like Instagram, WhatsApp, etc. |
|  **Efficient Updates (Virtual DOM)** | React updates only the parts of the DOM that changed — it's fast. |
|  **Great Testing & Dev Tools** | React DevTools, support from Jest, Testing Library, Cypress, etc. |
|  **Server/Client Flexibility** | Works with SPAs, SSR (Next.js), mobile (React Native), and even static sites. |

---

##  **React vs Angular vs Vue**

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

##  When React Is a Good Choice:
- You want **flexibility** in architecture and tooling.
- Your team is comfortable with **JavaScript and JSX**.
- You prefer a **lighter-weight, component-first** approach.
- You’re building a SPA, PWA, or SSR site (e.g., with Next.js).
- You want easy transition to **React Native** for mobile apps.

---

## Class vs Functional Components 

- [Comparison Table: Class Components vs Functional Components](#comparison-table-class-components-vs-functional-components)
- [Class Components](#class-components)
- [Functional Components](#functional-components)
- [Why the Shift to Functional Components](#why-the-shift-to-functional-components)
- [Comparison of Bundle Size & Performance](#comparison-of-bundle-size-performance)


### Comparison Table: Class Components vs Functional Components

| Feature                | Class Components                | Functional Components               |
|------------------------|---------------------------------|-------------------------------------|
| **Syntax**             | Verbose, uses `this` keyword    | Concise, no `this` keyword          |
| **State Management**   | `this.state` and `this.setState`| `useState` hook                     |
| **Lifecycle Methods**  | `componentDidMount`, `componentDidUpdate`, etc. | `useEffect` hook                    |
| **Performance**        | Slightly heavier                | More lightweight, optimized with hooks |
| **Readability**        | More boilerplate                | Simpler and cleaner                 |
| **Community Adoption** | Legacy, but still widely used   | Preferred in modern React development |

---

### Class Components



Class components were the original way to write components in React. They offer more features but come with more boilerplate.

#### **Key Features of Class Components**:
- **State**: Class components use `this.state` to manage local state.
- **Lifecycle Methods**: They rely on lifecycle methods like `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` to perform actions at different stages of the component lifecycle.
- **Event Handling**: Event handlers are bound to the class instance using `.bind()` or arrow functions.
  
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

---
### Functional Components

Functional components were introduced as a simpler, more lightweight way to write React components. 
Manage state and side effects through **Hooks** (`useState`, `useEffect`, etc.).

#### **Key Features of Functional Components**:
- **Simpler Syntax**: No need for class syntax or `this` keyword.
- **Hooks**: Hooks like `useState`, `useEffect`, `useContext`, etc., allow functional components to manage state, side effects, and context in a clean and concise manner.
- **Performance**: Functional components are lighter and result in less boilerplate, making the app potentially more performant.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

---

### Why the Shift to Functional Components



1. **Simpler Syntax**:
   - Functional components are more concise and easier to read. There's no need for the verbose `class` syntax, lifecycle methods, or `this` binding.
   
2. **Hooks API**:
   - With the introduction of **React Hooks**, functional components can now do everything class components can do:
     - Manage state with `useState`.
     - Handle side effects (like fetching data) with `useEffect`.
     - Access context with `useContext`.
     - Perform other operations like memoization with `useMemo`, `useCallback`, and custom hooks.
   
3. **Less Boilerplate**:
   - Functional components don’t require the use of `constructor`, `render()`, or `this`. This reduces code verbosity and potential for errors.
   
4. **Better Performance**:
   - Functional components are typically more efficient, especially when using hooks like `useMemo` or `useCallback` to optimize re-renders.
   
5. **Consistency in Codebase**:
   - Since functional components are simpler, they're easier to maintain and reason about, especially in large codebases. The introduction of hooks unified state and lifecycle management in one place.
   
6. **Modern React Features**:
   - Features like **React Suspense** and **Concurrent Mode** work more seamlessly with functional components, as they rely on hooks for managing state and side effects in the React fiber architecture.

---

### **Senior-Level Insight**:
> As a senior React developer, I appreciate that **functional components** provide a cleaner, more maintainable way to build applications. Hooks offer a more **modular** and **composable** approach to state and effects management.
The React team has made it clear that the future is with **functional components** and **hooks**, so I embrace them for new projects.
In legacy projects, I prefer refactoring class components into functional ones to leverage the benefits of hooks, cleaner code, and performance optimizations.

---
### Comparison of Bundle Size & Performance

| Feature                       | Class Components                       | Functional Components                   |
|-------------------------------|----------------------------------------|-----------------------------------------|
| **Transpilation**              | Transpiled to ES6 classes and methods  | Transpiled to simple functions with hooks |
| **Bundle Size**                | Larger (due to class methods, `this`)  | Smaller (minimal code, no `this`)      |
| **Memory Usage**               | Higher (due to React managing classes) | Lower (functions are more memory efficient) |
| **Performance**                | Slightly slower due to lifecycle methods | Faster, especially with hooks optimizations |
| **Complexity**                 | Higher (due to `this`, `state`, lifecycle methods) | Lower (simpler functions with hooks)   |

---

- **Class components** add extra complexity and result in a **larger bundle** due to the need for `this` keyword management and lifecycle methods.
- **Functional components**, especially with **React Hooks**, are **smaller**, **simpler**, and **more efficient** to run in the browser.
React now recommends **functional components** for most use cases using **hooks**.

---
## Pure Components

- Pure Component in React helps improve performance by avoiding unnecessary re-renders. 
- In class components, we use `React.PureComponent`. which implements a shallow comparison of props and state in shouldComponentUpdate().”
- For functional components, we use React.memo() to achieve the same behavior. 
- It wraps the component and ensures it only re-renders when the props actually change. 
- so if props contain nested objects or arrays, the component might re-render even if the data hasn’t actually changed.
- I typically use Pure Components when the component is controlled by props that are either primitives or stable references, 
-  when optimizing performance becomes necessary in complex UI structures.



### Use Case

- In one of my projects, we had a list of user cards updating every second due to a parent re-render. 
- Wrapping the individual card components in `React.memo` prevented them from re-rendering unless their actual data changed — which gave us a significant performance gain.”*

---

### Shallow Comparison

- The optimization works well when props are primitives or stable references. 
- But with nested objects or arrays, React may still re-render unnecessarily unless we memoize or ensure reference equality.”*

```jsx
const obj1 = { a: 1 };
const obj2 = { a: 1 };
obj1 === obj2 // false (different references)
```

---



### Class Component Example (`React.PureComponent`)

```jsx
import React, { PureComponent } from 'react';

class Greeting extends PureComponent {
  render() {
    console.log('Rendering Greeting...');
    return <h2>Hello, {this.props.name}</h2>;
  }
}

// Will only re-render if props.name changes
```

---

### Functional Component Example (`React.memo`)

```jsx
import React from 'react';

const Greeting = React.memo(({ name }) => {
  console.log('Rendering Greeting...');
  return <h2>Hello, {name}</h2>;
});

// Same: re-renders only if props.name changes
```

---








## Stateless vs Stateful Components 

Here’s a clear breakdown of **Stateless vs Stateful Components** — ideal for a senior-level interview and easy to present in **bullet points**:

---

###  **Stateless vs Stateful Components in React**

###  **Key Differences**

| Feature            | Stateless Components         | Stateful Components          |
|--------------------|-------------------------------|-------------------------------|
| Holds State        | ❌ No                        |  Yes                        |
| Side Effects       | ❌ Rare                     |  Often                     |
| Responsibility     | UI only                      | UI + Logic + Data             |
| Reusability        | High                         | Moderate                      |
| Testability        | Easier                       | Slightly complex              |

---

####  **Stateless Components (Presentational / Functional)**

- Also known as **dumb components**.
- **Do not manage or hold state** internally.
- Focus purely on **rendering UI** based on the `props` they receive.
- Typically written as **functional components**.
- Easier to **test**, **reuse**, and **maintain**.
- Example use: Button, Avatar, UI cards, etc.

```jsx
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

---

####  **Stateful Components (Container / Smart)**

- Also called **smart components**.
- **Manage internal state** using `useState`, `useReducer`, or class-based `this.state`.
- Handle **logic, side-effects, and data fetching**.
- Can **pass state and handlers** to stateless components as props.
- Often interact with APIs, Redux, Context, etc.

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```

###  Senior-Level Insight:
> As a senior developer, I aim for a **clear separation of concerns** — keeping most components stateless and delegating state and logic to a few well-structured container components or hooks. This improves **scalability**, **testability**, and **team collaboration**.


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
Passing data down through props is the foundation of React's unidirectional data flow.
As applications scale, managing child props across many levels can become challenging (i.e., prop drilling).
In those cases, I often prefer using Context API or state management libraries like Redux to make data accessible globally without deeply nesting props.

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

**why keys matter**: without unique keys, React falls back to index-based comparison, which can cause unnecessary re-renders or even UI bugs when list items change order.

The `key` prop helps React **track changes in a list** of elements efficiently during re-rendering.

- Improves performance  
- Should be a **unique, stable identifier** (avoid using array index)

```jsx
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

**Without Keys**
 - If keys are missing or unstable (like using array index), React:

 - * May **reuse DOM nodes incorrectly**
 - * Can **break component state**
 - * May cause **extra re-renders**, hurting performance

 - This becomes especially noticeable when dynamically modifying lists (e.g., filtering, inserting, deleting rows).




---

## React Fragments 

- In React, **Fragments** let you group multiple elements **without adding extra nodes** to the DOM.
- JSX requires a single parent element, so developers often used `<div>` wrappers — which can lead to:
  - Unnecessary nesting
  - Messy DOM trees
  - Potential layout and styling issues
- **Fragments solve this cleanly** by avoiding that extra markup.
- There are two syntax options:
  - **Short syntax:** `<>...</>` (clean, simple)
  - **Full syntax:** `<React.Fragment>...</React.Fragment>` (supports props like `key`)
- Common use cases:
  - Rendering sibling elements inside `<table>`, `<ul>`, or custom layouts
  - Returning multiple children from a component without wrapper divs
- As a senior developer, I use Fragments to:
  - Maintain a clean and semantic DOM structure
  - Improve rendering performance by avoiding unnecessary nodes
  - Enhance maintainability and readability of the UI code

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
- React updates the Virtual DOM first,
- then uses a **diffing algorithm** to compare it with the previous version.
- It identifies and updates only the parts that changed in the actual DOM — a process known as **reconciliation**.
- This results in faster rendering and improved performance.

```jsx
// Behind the scenes (conceptually)
const virtualDOM = React.createElement('div', null, 'Hello');
ReactDOM.render(virtualDOM, document.getElementById('root'));
```

---


## Compare nodes internally in the Virtual DOM

*"When React updates the UI, it builds a new **Virtual DOM tree** and compares it with the previous one using a process called **reconciliation**. Internally, it uses an efficient **diffing algorithm**:

1. **Element type check** – If the **element type** (like `<div>` vs `<span>` or `Button` vs `Card`) is different, React assumes the entire subtree has changed and will destroy the old node and build a new one.
2. **Props comparison** – If the type is the same, React does a **shallow comparison of props** and updates only the changed attributes in the real DOM.
3. **Children comparison** – For child nodes, React uses the **key attribute** to match elements between old and new trees. If keys are stable and unique, React can reorder or update children efficiently instead of re-rendering the whole list.

This approach keeps the diffing process close to **O(n)** complexity, instead of the expensive O(n³) tree comparison. That’s why React apps can update the UI quickly, even when the DOM structure is large."*

---



## Lifecycle Methods 

Lifecycle methods let you run code at specific **stages of a component’s life** (Mount, Update, Unmount).
Lifecycle methods are special methods in class components. Hooks like `useEffect` replicate them in functional components.


### 1. **Mounting Phase**

When the component is first added to the DOM:

* `useEffect(() => { ... }, [])` — runs **after** the first render.
* React calls the function component to produce the virtual DOM (VNode).
* Reconciliation compares this VNode with the real DOM (initially empty) and renders it.

### 2. **Updating Phase**

When props or state change:

* Component function re-executes to produce a new VNode.
* `useEffect(() => { ... }, [deps])` runs when dependencies change.
* DOM updates occur after the diffing (reconciliation) process.

### 3. **Unmounting Phase**

When the component is removed:

* Cleanup functions in `useEffect(() => { return () => {...} }, [])` are called.

---

## 🔄 **Class Component Lifecycle (for reference)**

| Phase      | Lifecycle Method                                          |
| ---------- | --------------------------------------------------------- |
| Mounting   | `constructor` → `render` → `componentDidMount`            |
| Updating   | `shouldComponentUpdate` → `render` → `componentDidUpdate` |
| Unmounting | `componentWillUnmount`                                    |

---


### **Class Component Lifecycle Methods vs Hook Equivalents**

| **Class Lifecycle Method** | **Purpose** | **Hook Equivalent** |
|---------------------------|-------------|----------------------|
| `componentDidMount()` | Run code once **after the component mounts** | `useEffect(() => { ... }, [])` |
| `componentDidUpdate(prevProps, prevState)` | Run code **after props or state change** | `useEffect(() => { ... }, [dependencies])` |
| `componentWillUnmount()` | Run code **before component unmounts** (e.g., cleanup) | `useEffect(() => { return () => { ... } }, [])` |

###  Summary

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

###  1. `componentDidMount`  
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
 Empty dependency array (`[]`) = run only once after mount.

---

###  2. `componentDidUpdate`  
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
 Add the specific dependency (`count` here). It runs whenever `count` changes.

---

###  3. `componentWillUnmount`  
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
 The cleanup function is returned inside `useEffect`.

---

### Functional components lifecycle hook
```jsx
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const hasMounted = useRef(false);

  // ✅ Mount & Unmount
  useEffect(() => {
    console.log('✅ Mounted');
    return () => {
      console.log('❌ Unmounted');
    };
  }, []);

  // 🔁 Update (excluding initial mount)
  useEffect(() => {
    if (hasMounted.current) {
      console.log('🔁 Component updated - count:', count);
    } else {
      hasMounted.current = true;
    }
  }, [count]);

  return (
    <div>
      <p>I'm alive! Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setShow(prev => !prev)}>
        Toggle Component
      </button>
      <hr />
      {show && <MyComponent />}
    </div>
  );
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

A **Higher-Order Component** is a function that **takes a component as input and returns a new enhanced component**.

### Senior-Level Insight:

> I use HOCs when I need to apply **generic behavior** (like error handling, tracking, or conditionally wrapping UI) across components. However, in modern React, **custom hooks and render props** often offer more flexibility.
So I use HOCs selectively — when they truly simplify composition without complicating the tree.

---

### 📌 When to Use HOCs Today
- Applying behavior to 3rd-party components you can’t modify.
- Wrapping components with external logic (e.g., connecting to Redux via `connect()`).
- Legacy apps where refactoring to hooks isn’t yet feasible.


**Common HOCs:** `withRouter`, `connect` (Redux)

---

```js
const withLoading = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return props.isLoading ? <Spinner /> : <WrappedComponent {...props} />;
  };
};
```

### 🎯 **Why Use HOCs?**

#### 1. **Code Reusability**
- Encapsulate shared logic once and reuse it across multiple components.
- Examples: logging, permissions, theming, feature toggles.

#### 2. **Separation of Concerns**
- Keeps the core component focused on rendering.
- Extracts cross-cutting concerns like authentication or loading states.

#### 3. **DRY Principle**
- Avoid duplicating the same logic (e.g., data fetching or conditional rendering) in multiple components.

#### 4. **Composition Over Inheritance**
- Follows React’s design philosophy: reuse behavior by composing components, not subclassing them.

#### 5. **Pre-Hooks Pattern**
- Before hooks (`useEffect`, `useContext`, etc.), HOCs were the main way to share behavior in functional components.

---



## Reconciliation Process 

- Reconciliation is the process of comparing the new virtual DOM with the previous one and updating the real DOM with the minimal number of changes.
- React tries to re-use elements with the same `key`, and efficiently updates only the parts of the actual DOM that changed.
- React uses to determine how the UI should change when state or props change
  - A component's state or props change, triggering a re-render.
  - React calls the component function to produce a **new virtual DOM tree**.
  - React compares the **previous virtual DOM** with the **new virtual DOM** using a process called **diffing**.
  - React batches updates together to minimize DOM manipulations.
  - React calculates the **minimum set of changes** needed and applies them using efficient DOM operations.

**Reconciliation Process Internally**

- React builds Fiber trees (virtual DOM) for both old and new renders.
- It walks both trees together, comparing nodes by type and key.
- If the node type is the same → props are updated.
- If different → old node is deleted, new is mounted.
- It tracks all changes in an effect list, then commits them to the real DOM.

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
- In React applications, especially large-scale ones, 
- I follow a **multi-layered error handling approach** to ensure both a smooth user experience and effective debugging.”
- I combine **Error Boundaries**, **try/catch for async**, and **global monitoring** 
- To ensure React apps are **resilient, debuggable**, and provide a seamless experience even when something breaks.”


#### 1. **Component-Level Error Boundaries**

* I use **Error Boundaries** (class components) to catch **render-time errors** in their child component tree.
* Example:

  ```jsx
  class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      // Log error to service like Sentry
    }

    render() {
      return this.state.hasError ? <FallbackUI /> : this.props.children;
    }
  }
  ```
* Wrap key areas like routes or feature modules:

  ```jsx
  <ErrorBoundary>
    <Dashboard />
  </ErrorBoundary>
  ```

---

#### 2. **Global Error Monitoring**

* Integrate tools like **Sentry**, **LogRocket**, or **Firebase Crashlytics** for production error reporting.
* Automatically logs:

  * Uncaught exceptions
  * Stack traces
  * User/environment info

---

#### 3. **Try/Catch in Async Code**

* For **async/await operations**, I always wrap logic in `try/catch` blocks to gracefully handle API or runtime errors:

  ```js
  try {
    const data = await fetchData();
  } catch (error) {
    setError(error.message);
  }
  ```

---

#### 4. **Graceful Degradation & Fallback UI**

* I use conditionals to **show fallback components** (spinners, retry buttons, offline UI) when parts of the app fail.
* Example:

  ```jsx
  {error ? <ErrorMessage /> : <MainContent />}
  ```

---

#### 5. **Form & Validation Errors**

* For forms, I handle field-level and submission errors using:

  * Libraries like **Formik** or **React Hook Form**
  * Schema validation tools like **Yup** or **Zod**

---

#### 6. **Network Error Handling**

* Wrap all API calls with a utility that handles:

  * Timeout fallback
  * Retry logic
  * Global toast notifications using **React Toastify**, **Snackbar**, or custom alerts

---


## Performance Optimization

*"Performance optimization in React involves reducing unnecessary re-renders, minimizing expensive DOM operations, and making data handling efficient. Some key strategies include:*

1. **Avoiding unnecessary re-renders**

   * Use **`React.memo`** for pure functional components so they only re-render when props actually change.
   * Use **`useCallback`** and **`useMemo`** hooks to memoize functions and computed values.

2. **Efficient list rendering**

   * Always provide **unique keys** for list items to help React’s diffing algorithm.
   * Implement **windowing/virtualization** (with libraries like `react-window` or `react-virtualized`) for large lists to render only visible items.

3. **Code splitting and lazy loading**

   * Use **dynamic imports** and **React.lazy + Suspense** so only the necessary code is loaded initially, reducing bundle size.

4. **Optimizing images and assets**

   * Compress images, use **next-gen formats (WebP/AVIF)**, and leverage **CDNs**.

5. **State management best practices**

   * Keep state as **local as possible** to avoid cascading re-renders.
   * Use libraries like **Zustand, Redux Toolkit, or Recoil** only where global state is truly needed.

6. **Server-Side Rendering (SSR) & Static Site Generation (SSG)**

   * Frameworks like **Next.js** improve initial load times and SEO by rendering pages on the server or at build time.

7. **React Profiler & Lighthouse**

   * Use the **React Profiler** to detect slow components and optimize them.
   * Measure performance with **Chrome DevTools, Lighthouse, or Web Vitals** to track real-world bottlenecks.

*"In one of my projects, I optimized a dashboard with thousands of rows by applying list virtualization and memoization. This reduced re-renders drastically and improved page load times by nearly 40%."*



👉 **Key Highlights (to say with confidence):**

* **Reduce re-renders** (`React.memo`, `useMemo`, `useCallback`)
* **Optimize lists** (keys, virtualization)
* **Bundle optimizations** (code splitting, lazy loading)
* **Assets optimizations** (images, CDN)
* **Better state management** (keep state local)
* **Use profiling tools** (React Profiler, Lighthouse)

---


###  **Managing Performance in Large React Applications**

####  1. **Code-Splitting**

* Used **dynamic `import()` and React.lazy** to load components only when needed.
* Helps reduce the initial bundle size and improves load times.
* Example:

  
#### 📄 `Hello.js`

```jsx
import React from 'react';
export default function Hello() {   return <h2>Hello from Lazy Loaded Component!</h2>; }
```


#### 📄 `App.js`

```jsx
import React, { Suspense, useState } from 'react';
// Lazy load the Hello component
const Hello = React.lazy(() => import('./Hello'));
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>React Code Splitting</h1>
      <button onClick={() => setShow(true)}>Show Hello Component</button>
      {show && (         <Suspense fallback={<div>Loading...</div>}>           <Hello />         </Suspense>      )}
    </div>
  );
}
export default App;
```


- When you click the button, the `Hello` component will be **dynamically loaded** (code-splitting in action).


####  2. **Memoization**

* Used `React.memo` to prevent unnecessary re-renders of pure functional components.
* Applied `useMemo` for expensive calculations.
* Used `useCallback` to avoid creating new function instances on each render.

####  3. **State Management Optimization**

* Lifted state only when necessary and localized it where possible to minimize re-renders.
* Used libraries like **Recoil**, **Zustand**, or **Redux Toolkit** with selectors for efficient state updates.

####  4. **Virtualization**

* Used libraries like `react-window` or `react-virtualized` for rendering large lists efficiently by only rendering items visible in the viewport.

####  5. **Avoid Anonymous Functions & Inline Styles in JSX**

* Extracted functions outside render scope to prevent re-renders of child components.
* Used CSS modules or styled-components instead of inline styles for better caching.

####  6. **Profiler and Performance Monitoring**

* Used **React Profiler** and **Chrome DevTools** to identify render bottlenecks.
* Tracked paint and layout shifts using **Web Vitals**.

####  7. **Debouncing and Throttling**

* Implemented `debounce` and `throttle` (e.g., with `lodash`) for scroll, resize, and search handlers to reduce frequency of updates.

####  8. **Lazy Loading Images and Assets**

* Used `loading="lazy"` on `<img>` tags and dynamic imports for heavy third-party libraries.

####  9. **Use Production Builds**

* Ensured production builds are optimized with `React.production.min.js`.
* Verified tree-shaking and dead code elimination are working via Webpack or Vite.

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
**Two actions are dispatched "simultaneously" and both try to update the store**
 - Redux processes actions synchronously, one after another.
- If two actions update different slices → both updates are kept.
- If they update the same slice/key → the last dispatched action wins.
- For async actions (like API calls), the order of completion determines the final state. The last resolved action wins if both write to the same piece of state.

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

*"Strict Mode in React is a **development-only feature** that helps identify potential problems in an application. It doesn’t affect production builds, but during development it intentionally runs certain functions and lifecycle methods **twice** to surface issues early.

Some of the issues it helps catch are:

* **Unsafe lifecycle methods** (like `componentWillMount`, `componentWillReceiveProps`).
* **Accidental side effects** in rendering (for example, if a function isn’t pure).
* **Legacy API usage** like old context or deprecated methods.
* **Identifying unexpected re-renders** when using hooks.

Developers enable it by wrapping parts of the app with `<React.StrictMode>` in `index.js`.

For example:

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

In practice, I find Strict Mode valuable because it acts like a **“linter for React behavior”** — catching bugs that may not show up until later. In React 18, it’s even more important because it works with features like **Concurrent Rendering** to ensure components are resilient to being mounted/unmounted multiple times."*


👉 **Key Highlights for interview:**

* Strict Mode = **development-only tool**
* Helps catch **unsafe lifecycles, side effects, deprecated APIs**
* Runs some functions **twice on purpose**
* Doesn’t affect **production builds**
* Crucial in **React 18+ for concurrent features**


*"I treat Strict Mode as a safeguard — if my code runs correctly in Strict Mode, I can be confident it will behave predictably in production, even with React’s new concurrent rendering features."*

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




## Roles Routes

---

### 🔐 **Roles & Role-Based Routing**

* In applications with multiple user types (e.g., Admin, User, Moderator), we use **roles** to **control access** to specific pages.
* **Role-Based Routing** ensures that users can only access routes they're authorized for.

**Example:**

```js
const user = { role: 'admin' };

<Route path="/admin" element={
  user.role === 'admin' ? <AdminPage /> : <Navigate to="/unauthorized" />
} />
```

---

### 🔒 **Protected Routes (Private Routes)**

* Protect pages so that **unauthenticated users** are redirected to login.
* Common in apps with authentication (e.g., dashboard, profile).

**Implementation:**

```js
const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth?.isLoggedIn ? children : <Navigate to="/login" />;
};

// Usage
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

### 🌲 **Nested Routes**

* Allow defining **routes inside other routes** — useful for layouts, tabs, or multi-step pages.
* Helps structure the UI hierarchy and reuse parent layout components.

**Example:**

```js
<Route path="/settings" element={<SettingsLayout />}>
  <Route path="profile" element={<ProfileSettings />} />
  <Route path="account" element={<AccountSettings />} />
</Route>
```

Accessed via `/settings/profile` and `/settings/account`.

---

### 🧠 **Best Practices in an Interview:**

* “I use `React Router`'s `Outlet` for rendering nested child routes inside parent layouts.”
* “For private and role-based routes, I usually build reusable wrapper components like `PrivateRoute` or `RoleRoute` to avoid repetition.”
* “Authorization is often checked against user roles stored in context or global state (like Redux).”

---

### 🗂️ Summary Table

| Feature              | Purpose                                      | Example Usage                            |
| -------------------- | -------------------------------------------- | ---------------------------------------- |
| **Roles**            | Access control for different user types      | Admin vs User dashboard                  |
| **Protected Routes** | Block access if user is not authenticated    | `<PrivateRoute>` wrapper                 |
| **Nested Routes**    | Child routes inside parent layout components | `/settings/profile`, `/settings/account` |

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


> In React, Error Boundaries are special class components that catch JavaScript errors in their child component tree. React provides two key methods for implementing them:
>
> 1. **`getDerivedStateFromError(error)`** – This is a **static lifecycle method**. It’s used to update the component’s state so we can display a fallback UI when an error occurs during rendering. Since it's static, we don’t have access to `this`.
>
>    ```tsx
>    static getDerivedStateFromError(error: Error) {
>      return { hasError: true };
>    }
>    ```
>
> 2. **`componentDidCatch(error, errorInfo)`** – This method is used for **side effects** like logging the error to an external monitoring service (e.g., Sentry). It gives access to both the error and additional info like which component stack it came from.
>
>    ```tsx
>    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
>      logErrorToService(error, errorInfo);
>    }
>    ```
>
> These two methods together allow us to show a graceful fallback UI and handle errors in production effectively.
>
> It's also important to note that Error Boundaries:
>
> * Only catch errors during **rendering**, **lifecycle methods**, and **constructors** of child components.
> * Do **not** catch errors inside **event handlers**, **async code**, or **server-side rendering**.


---




## React Hooks 

React Hooks are functions that let you "hook into" React state and lifecycle features from function components.



| **Hook**                   | **Purpose**                                                                 | **When to Use**                                                          | **Example Use Case**                                 |
|----------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------|
| `useState`                 | Store and update local state                                                | Any dynamic value inside a component                                     | Form inputs, counters, toggles                      |
| [useEffect](#useEffect)                | Perform side effects   and runs after the render is painted                                                     | Fetching data, setting timers, subscriptions                             | API calls, local storage, DOM listeners             |
| [useContext](#useContext)             | Consume data from a context provider                                        | Access global values without prop drilling                               | Theme, user auth, language preference               |
|[useReducer](#useReducer)                | Complex state logic with actions                                            | When state updates depend on previous state                              | Forms, shopping carts, toggle reducers              |
| [useCallback](#useCallback)              | Memoize a callback function                                                 | Prevent re-renders of children receiving functions as props              | Event handlers, expensive calculations              |
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
  - The useEffect hook -  perform side effects in your functional components, 
  - such as fetching data, subscribing to services, or manually changing the DOM. 

- **`useEffect(() => { }, [])`**: Runs **once** after the initial render (similar to `componentDidMount`).
- **`useEffect(() => { })`**: Runs **on every render** (similar to `componentDidUpdate`).
- **`useEffect(() => { }, [dependencies])`**: Runs when any of the dependencies change.
- **Injection** in `useEffect` refers to passing state, props, or context as dependencies to control when the effect runs.
- **Cleanup**: React can clean up side effects using a return function from `useEffect`.


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
 – A React Hook that returns a **memoized version of a callback function**.
 – Prevents unnecessary **function recreation** between re-renders.


###  **Why use `useCallback`?**

* To **optimize performance** in components that pass functions to:

  * **Child components** (especially those wrapped with `React.memo`).
  * **Hooks like `useEffect` or `useMemo`** that depend on stable functions.
* Prevents **unwanted re-renders** due to new function references.

---

###  **Syntax**

```tsx
const memoizedFn = useCallback(() => {
  // logic
}, [dependencies]);
```

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

###  **When to use**

* Function is **passed to a memoized child** component.
* Function is a **dependency in `useEffect`, `useMemo`, or `useCallback`** itself.
* Want to **avoid stale closures** inside asynchronous logic or effects.

---

###  **Difference from `useMemo`**

* `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.
* Use `useCallback` to **memoize functions**, `useMemo` to **memoize values**.

---

###  **Common mistake**

* **Overusing `useCallback`** even when unnecessary — can increase complexity without real performance benefit.

---

###  **Simple example**

```tsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

* Without `useCallback`, `handleClick` is recreated on each render.
* With it, reference is stable until dependencies change.




---

###  useMemo
 – Memoize expensive computations

 – `useMemo` is a React Hook that **memoizes the result of a computation**, **recomputing it only when its dependencies change**. 
 – It's used to **optimize performance** by **avoiding expensive recalculations** on every render.


### 📌 Syntax:

```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

* `computeExpensiveValue` – a function that performs a heavy computation
* `[a, b]` – dependency array: `useMemo` recomputes only when any dependency changes

```jsx
function App({ number }) {
  const double = React.useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);
  return <p>Double: {double}</p>;
}
```

### 🔍 When to Use `useMemo`

* Heavy computations (e.g., filtering large lists, complex calculations)
* Avoiding re-creation of objects/arrays/functions that are passed as props
* Optimizing child component rendering

---

### ✅ Example 1: Expensive Computation

```tsx
function Fibonacci({ n }) {
  const fib = (n) => {
    console.log('Computing fib...');
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };

  const result = useMemo(() => fib(n), [n]);

  return <div>Fibonacci of {n} is {result}</div>;
}
```

**Without `useMemo`:** `fib(n)` runs on every render
**With `useMemo`:** It recalculates only if `n` changes

---

### ✅ Example 2: Avoid Unnecessary Object Recreation

```tsx
const MyComponent = ({ value, onChange }) => {
  const config = useMemo(() => ({
    text: `Input for ${value}`,
    maxLength: 100,
  }), [value]);

  return <SomeChildComponent config={config} onChange={onChange} />;
};
```

**Why?**
Without `useMemo`, `config` is a **new object every render**, causing `SomeChildComponent` to re-render even if `value` didn’t change.

---

### ⚠️ Common Mistakes

| Mistake                | Why it’s wrong                                                                  |
| ---------------------- | ------------------------------------------------------------------------------- |
| Overusing `useMemo`    | Adds unnecessary complexity and memory usage if not truly expensive             |
| Missing dependencies   | Leads to stale or incorrect values                                              |
| Using for side effects | `useMemo` is **pure** – don’t use it for side effects (use `useEffect` instead) |

---

### 🧠 Rule of Thumb

> Use `useMemo` **only when**:
>
> * You observe **performance bottlenecks**
> * The **calculation is expensive**
> * It helps prevent **unnecessary re-renders**




---

###  useRef
- Persist **mutable values** across renders **without triggering re-renders**.
- It returns a **ref object** with a `.current` property that you can read or mutate.
- Commonly used for:
  - Accessing DOM elements directly (like `document.getElementById`)
  - Storing previous values
  - Managing timers or intervals
  - Avoiding re-initialization of expensive variables
  
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

*"Both `useCallback` and `useMemo` are **React hooks for performance optimization**, but they solve different problems.*

* **`useCallback(fn, deps)`** returns a **memoized function reference**. I use it when passing functions as props to child components — it ensures the same function instance is reused across renders, preventing unnecessary re-renders.

  * *Example:* If I have a `handleClick` function that I pass into a child button component, wrapping it with `useCallback` ensures the child doesn’t re-render every time the parent updates.

* **`useMemo(factory, deps)`** returns a **memoized value**. I use it for expensive calculations or derived data so React doesn’t recompute on every render unless dependencies change.

  * *Example:* If I’m filtering or sorting a large dataset, I’ll wrap that logic in `useMemo` so it only recalculates when the data or filter changes.

So, in short:

* **`useCallback` → memoizes a function.**
* **`useMemo` → memoizes a computed value.**

In practice, I often combine them — for instance, in a large table component: I’ll use `useMemo` to generate a filtered dataset and `useCallback` to memoize the row-click handler.

Also, I’m careful not to **overuse them** — because memoization itself has a cost. I usually rely on the **React Profiler** to see where these optimizations actually improve performance."*



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


## **Component Composition vs Inheritance**



In React, **component composition** is favored over **inheritance** as the primary method for code reuse and building complex UIs.

- **Composition** means combining simple components to build more complex ones. You pass data and behavior to children using **props** or special props like `children`.  
  → It promotes flexibility and reuse without tightly coupling components.

- **Inheritance**, in contrast, is a traditional OOP approach where a class extends another to inherit behavior. React avoids this pattern because it can lead to rigid and complex hierarchies.

**Why React prefers Composition**:
- Easier to manage and understand
- More flexible and modular
- Encourages functional design

🎯 **Summary**:  
React promotes **composition** for sharing behavior and building components, because it's **simpler, more maintainable, and aligns better with React’s declarative model**, unlike inheritance which introduces tight coupling and complexity.
**Example – Composition**:
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

- [Stateless vs Stateful Components](#stateless-vs-stateful-components)
- [Controlled Components](#controlled-components)
- [Uncontrolled Components](#uncontrolled-components)
- [Pure Components](#Pure-components)
- [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)  
•  [Higher-Order Components](#higher-order-components-hocs)


###  Controlled Components

A **Controlled Component** in React is a form element (like an `<input>`, `<textarea>`, or `<select>`) whose **value is controlled by React state**.

In other words, the input's value is **bound to a state variable**, and any change to it is handled via a callback like `onChange`.

---

 In this case:
- `value={name}` → makes it a **controlled input**.
- `onChange` updates state → keeping React in full control.

---

###  **Why use Controlled Components?**
- React has full control over the form data.
- Enables validation, formatting, conditional rendering, etc.
- Helps in syncing UI with application logic.

---

###  Uncontrolled Components
- Manage their own state via the DOM (e.g., using refs).
- Less code but harder to validate or control dynamically.

---

###  **Summary**:
Controlled components let React manage the input state, making them more predictable and powerful for building interactive forms.


**Example:**
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

###  TL;DR

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

###  **Summary**:  
 - Use **Uncontrolled Components** for **simple, non-dynamic forms** where performance matters or form data isn’t needed until submission. 
 - Use **Controlled Components** when you need real-time updates, validation, or tighter control.

---
**Example – Uncontrolled Input:**
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

### **Example:**

```jsx
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

// Usage
<Wrapper>
  <p>This content is passed as children!</p>
</Wrapper>
```

 In this example:
- The `<p>` element is passed to `Wrapper` as the `children` prop.

---

###  **Why is `children` useful?**
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

###  **Summary**:  
The `children` prop lets you **pass nested JSX content** to components, enabling powerful and flexible UI composition patterns.

---
---

### **Dynamic Routing**


**Dynamic Routing** in React (especially with **React Router**) means creating routes that can handle **variable segments** in the URL — such as user IDs, product slugs, or blog post titles — and render different content based on the value.

---



 In this example:
- `:userId` is a **dynamic segment**.
- `useParams()` is used to extract it.

---

### 🚀 Use Cases:
- **User profiles** → `/user/123`
- **Blog posts** → `/blog/my-first-post`
- **Product details** → `/products/shoe-42`

---

###  Key Benefits:
- Enables **clean and semantic URLs**.
- Makes your app feel more like a traditional website.
- Easy to match routes with backend APIs (e.g., `GET /user/:id`).

---

###  **Summary**:  
Dynamic Routing allows React apps to respond to URL changes with **dynamic values**, enabling powerful and scalable navigation structures.

### **Example with `react-router-dom` v6:**

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


###  How it works:
- `ProtectedRoute` checks if the user is authenticated.
- If **yes**, it renders the requested component.
- If **no**, it redirects to `/login` using `<Navigate />`.

---

###  Common Enhancements:
- Use **context or Redux** instead of localStorage for auth state.
- Add **role-based protection** (e.g., admin vs regular user).
- Use **loading states** while checking authentication (like with Firebase/Auth0).

---

###  **Summary**:  
Route protection ensures only **authorized users can access certain parts** of your app, improving security and user experience. It’s implemented by **wrapping routes with an auth check** and redirecting unauthorized users.

### 🔐 **Example using React Router v6:**

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token'); // example auth check

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
```

####  Usage:
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



###  **React Hook Form Example:**

```jsx
import React, { Component } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {     register,     handleSubmit,     formState: { errors }  } = useForm();
  const onSubmit = (data) => {     console.log("Form Data:", data);     alert(`Submitted: ${JSON.stringify(data)}`);   };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Simple React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            style={{ padding: "8px", marginTop: "4px", width: "250px" }}
          />
          {errors.email && (            <span style={{ color: "red" }}>{errors.email.message}</span>          )}
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

```

---

###  **Formik vs React Hook Form — Comparison Table:**

| Feature                    | **Formik**                                  | **React Hook Form**                          |
|---------------------------|----------------------------------------------|----------------------------------------------|
| **Form State Handling**   | Built-in, declarative                        | Optimized, uses uncontrolled inputs under the hood |
| **Validation Support**    | Yup (schema-based) preferred                 | Built-in or use Yup/Zod                      |
| **Performance**           | Can be slower with large forms               | Highly performant, minimal rerenders         |
| **Learning Curve**        | Slightly higher (due to abstraction)         | More intuitive for simple use cases          |
| **Error Handling**        | Good via `<ErrorMessage>`                    | Granular via `formState.errors`              |
| **Popularity**            | Older, mature                                | Increasingly popular and modern              |

---

###  **Summary**:

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

###  **Example using Controlled Components:**

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

###  Key Concepts:

-  **State structure**: All form inputs are stored in one object (e.g., `formData`).
-  **Dynamic updating**: `[name]: value` uses the input’s `name` to update the correct field.
-  **Reusability**: This approach works for **any number of inputs** with a single `handleChange` function.

---

###  Bonus Tip (Interview Insight):

> *"Why use a single `handleChange`?"*  
Because it **scales well**, keeps your code DRY (Don't Repeat Yourself), and works seamlessly for both small and large forms.

---

### **Ref vs useRef**


* **When to use `ref` (via `React.createRef`):**
  * **`ref` → mainly for DOM nodes, resets on re-render.**
  * In **class components** to access DOM nodes or child component instances.
  * For example: focusing an input, triggering a method on a child component.
  * But in **function components**, I generally prefer `useRef`.

* **When to use `useRef`:**
  * **`useRef` → persists across renders, works as a stable container for any mutable value.**
  * In **function components** (modern React) for DOM manipulation (focus, scroll, play video, etc.).
  * When I need to **persist mutable values across renders** without causing a re-render.

    * Example: storing a timer ID, caching a value, tracking previous state, or counting renders.

- *"So, if I’m in a **class component**, I’ll reach for `ref`.
- If I’m in a **function component**, I’ll almost always use `useRef` — not just for DOM access, but also as a container for values that need to survive re-renders without triggering them."*


---

Would you like me to also give you a **small real-world analogy** (like “useRef is like a hidden box that doesn’t reset between renders”)? That usually makes it easier to explain in interviews.


---

### **Refs in React**


In React, a **Ref** (short for reference) is used to **access a DOM element or React component instance directly** — bypassing the typical data flow.

You create a ref using `useRef` (in functional components) or `createRef` (in class components).


###  **Common Use Cases for Refs**:

1. **Managing focus**  
2. **Triggering animations**  
3. **Reading input values without re-rendering**  
4. **Interfacing with third-party DOM libraries**  
5. **Storing mutable values that persist across renders**


###  **Example: Focusing an Input Field**

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

###  **Why not use state instead of refs?**

Refs are **ideal for values that don’t need to trigger a re-render**. Using state to access a DOM element would be inefficient and unnatural in this case.

---

### 📌 Bonus: `useRef` vs `createRef`

| Hook                    | Use in Component Type    | Re-created on Every Render? |
|------------------------|--------------------------|------------------------------|
| `useRef()`             | Functional Component      | ❌ No                        |
| `createRef()`          | Class Component           |  Yes                       |

---




### forwardRef
---

* **What is `forwardRef` in React?**

  * `forwardRef` is a higher-order component (HOC) that allows you to forward a **ref** from a parent component to a child component.
  * By default, refs don't get passed to functional components, but `forwardRef` enables this functionality.

* **Use Cases:**

  * **Access to DOM elements:** When a parent component needs to directly access or manipulate a DOM element inside a child component.
  * **Reusable Components:** Allowing parent components to interact with the child’s DOM elements (e.g., focusing an input field, managing focus or scroll position).

* **Basic Syntax:**

  ```js
  const MyComponent = React.forwardRef((props, ref) => {
    return <div ref={ref}>{props.children}</div>;
  });
  ```

  * `forwardRef` takes a function with `props` and `ref` as arguments.
  * The `ref` is attached to the DOM element (like `<div />` in this case).

* **Example:**

  ```js
  import React, { useRef } from 'react';

  // Child component using forwardRef
  const CustomInput = React.forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
  });

  // Parent component
  const ParentComponent = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
      // Access and focus the input element
      inputRef.current.focus();
    };

    return (
      <div>
        <CustomInput ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  };

  export default ParentComponent;
  ```

  * In the above example, the ref is forwarded from `ParentComponent` to the `CustomInput` component, allowing the parent to interact with the `input` field.

* **When to Use `forwardRef`:**

  * When you need to pass a **ref** to a child component to access a **DOM element**.
  * When you are creating **wrapper components** and want to forward the ref to an underlying DOM element.

* **Limitations:**

  * `forwardRef` only forwards **refs** to the underlying DOM elements or child components. It doesn't forward **instance methods** from class components.
  * It’s not necessary if the component doesn’t need access to the DOM or other components via refs.

* **Summary:**

  * `forwardRef` is a useful feature when you want to make functional components more reusable and allow parent components to interact directly with their DOM elements, such as focusing inputs or scrolling elements.

---



---

### **Avoiding Unnecessary Rerenders**


In React, unnecessary rerenders can **harm performance**, especially with large or complex components. You can optimize performance by following a few strategies:

---

###  **Key Strategies to Avoid Unnecessary Rerenders:**

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




## **React Profiler**
---

 - The React Profiler is a tool that helps you measure performance of your React components — when they render, how long they take, and what causes re-renders.


 - Identify unnecessary renders
 - Spot slow components
 - Optimize rendering performance






###  **How I Used React Profiler to Improve Performance**

In one of my recent enterprise projects—a **real-time analytics dashboard**—I used the **React Profiler** to diagnose and resolve performance issues related to unnecessary re-renders.

---

###  **Step 1: Identifying Performance Bottlenecks**

Using the **React DevTools Profiler**, I recorded a few interactions and analyzed component render timelines. I observed that:

* Components like **data tables and charts** were **re-rendering on every state change**, even when their props remained unchanged.
* The flame graph highlighted a **parent component** that was passing down **new inline functions** on each render, causing deep child components to re-render unnecessarily.

---

###  **Step 2: Optimization Techniques**

Based on these insights, I made several improvements:

* **Memoization**: Wrapped child components with `React.memo` to prevent unnecessary renders.
* **Stable References**: Used `useCallback` and `useMemo` to ensure that functions and derived data did not change unless required.
* **Scoped State**: Moved some global state to local component state where applicable to **reduce reactivity scope**.

>  Result: These changes **reduced re-renders by around 60%**, and the UI became noticeably smoother, especially during high-frequency updates.

---

###  **Key Benefits of Using React Profiler**

The Profiler helped me:

* **Measure render durations** at the component level.
* Understand **why** components were re-rendering (due to state, props, or context).
* Identify **expensive components** and optimize them selectively.

---

###  **Real-World Example**

Let’s say the Profiler flagged a component re-rendering due to an **anonymous inline function**:

```jsx
<Component onClick={() => doSomething()} />
```

I replaced it with a memoized function:

```jsx
const handleClick = useCallback(() => doSomething(), []);
<Component onClick={handleClick} />
```

This change, combined with `React.memo`, **eliminated unnecessary renders** and improved responsiveness.

---

###  **Tips I Follow While Using React Profiler:**

1. Focus on components with **long render times** or **frequent updates**.
2. Use `React.memo`, `useCallback`, and `useMemo` **judiciously** to avoid over-optimization.
3. Always validate improvements using **before/after profiling comparisons**.

---

###  **Outcome**

After optimization:

* The app’s perceived performance improved significantly.
* **Time to Interactive** and **UI responsiveness** both improved.
* Developers on the team adopted Profiler as a **standard debugging tool** for UI performance.

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

###  **Benefits of Atomic Design**

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

###  **Why Is Reusability Important?**

- **Consistency**: One source of truth for UI elements (like buttons, inputs).
- **Maintainability**: Update once, reflect everywhere.
- **Scalability**: Easily compose new features with existing blocks.
- **Faster Development**: Build with Lego blocks instead of starting from scratch.

---

###  **Best Practices for Reusable Components**

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

###  **Example: Reusable Button Component**

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

###  **Usage Comparison**

####  With **PropTypes**:
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

####  With **TypeScript**:
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

###  **Pros & Cons**

| Feature                  | PropTypes                            | TypeScript                               |
|--------------------------|--------------------------------------|------------------------------------------|
|  Easy to use           | ✔️ Yes                               | ❌ Learning curve                        |
|  Catches bugs early    | ❌ No (only at runtime)               | ✔️ Yes (during development)              |
|  Supports full app typing | ❌ Only React props                 | ✔️ Yes (whole codebase)                  |
|  Better tooling        | ❌ Basic                             | ✔️ IDE autocomplete & type safety       |
|  File size impact      | ❌ Slightly increases bundle size     | ✔️ Stripped after compilation           |

---

###  **Which One Should You Use?**

| Scenario                                 | Recommendation          |
|------------------------------------------|--------------------------|
| Small project or legacy code             | Use **PropTypes**        |
| Mid to large scale project               | Prefer **TypeScript**    |
| Want full static typing, not just props | Definitely **TypeScript**|

---

### 📝 Conclusion

- PropTypes =  Quick prop validation, ❌ limited and runtime-only.
- TypeScript =  Comprehensive static type-checking, IDE support, better for larger projects.

If you're starting fresh or scaling up, **TypeScript is the way to go**.
---

---
### **Fetching Data**

Fetching data is a core part of most React apps. You can use either the built-in `fetch()` API or third-party libraries like **Axios**.

---

###  **1. Using `fetch()` (Native API)**

```jsx
useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error('Error:', err));
}, []);
```

 Pros:
- Built into the browser (no extra package)
- Simple for basic requests

❌ Cons:
- No request/response interceptors
- Doesn't auto-transform JSON in all cases
- Limited error handling (no automatic HTTP error rejection)

---

###  **2. Using Axios (3rd Party Library)**

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

 Pros:
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
| Interceptors               | ❌               |               |
| Older Browser Support      | Limited          | Good           |
| File Uploads / Multipart   | Verbose          | Easy           |
| Built-in                   |                | ❌ (needs install) |

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

###  **Basic Example (Using `useEffect` + `axios`)**

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

###  **With Retry Button**

```jsx
{error && (
  <>
    <p style={{ color: 'red' }}>Error: {error}</p>
    <button onClick={() => window.location.reload()}>Retry</button>
  </>
)}
```

---

###  Want It Cleaner?

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

###  Basic Syntax

```jsx
useEffect(() => {
  // your side-effect (e.g., fetch)
}, []);
```

The empty dependency array `[]` ensures the code runs **only once** after the initial render.

---

###  Example: Fetching Data from an API

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

###  Reactivity with Dependencies

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

###  Best Practices

| Tip                                 | Why It Matters                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------|
| Use `async` functions **inside** `useEffect` | `useEffect` itself can’t be `async` — define an `async` function inside it     |
| Handle loading and error states     | For good UX and debugging                                                       |
| Use cleanup when needed             | Avoid memory leaks with subscriptions or intervals                             |
| Use AbortController (optional)      | To cancel fetch requests on unmount (especially in large apps)                 |

---

###  Using `async/await` in `useEffect`

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
| Caching                    |  Yes                                        |  Yes                                    |
| Revalidation               |  Yes                                        |  Yes                                    |
| Background Fetching        |  Yes                                        |  Yes                                    |
| Pagination / Infinite Scroll |  Built-in                                 | ❌ Not built-in                           |
| Mutation Support           |  Yes                                        | ⚠️ Limited / manual                       |
| DevTools                   |  Awesome browser devtools                   | ⚠️ Limited devtools                       |
| Learning Curve             | Medium                                       | Very Easy                                |
| Ecosystem                  | Rich (e.g., `TanStack Query`, `Table`, etc.) | Smaller                                   |
| Use Case                   | Complex apps with mutations/state mgmt       | Simple data-fetching (mostly GET requests) |

---

##  Why Use React Query?

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

##  Shared Benefits

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
##  Tools for Testing A11y

| Tool              | Purpose                              |
|------------------|--------------------------------------|
| Axe Chrome DevTools | Automated accessibility checks     |
| Lighthouse         | Performance + a11y audit            |
| Keyboard only test | Manual navigation test              |
| Screen readers     | NVDA (Windows), VoiceOver (Mac)     |

---

##  React-Specific Libraries for A11y

- `@reach/*` – Accessible UI primitives
- `react-aria` – Headless accessibility components by Adobe
- `react-a11y` – Runtime a11y warnings (dev only)
- `radix-ui` – Unstyled components with a11y baked in



---

##  Core Accessibility Guidelines (A11y)

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

Good :
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

Better :
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

###  Fiber: What Changed?

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

###  Visual: Fiber Node (simplified)
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

###  Summary – Fiber vs Old Reconciler

| Feature | Stack Reconciler | React Fiber |
|--------|------------------|-------------|
| Execution | Synchronous | Asynchronous & interruptible |
| Data Structure | Recursion on JS stack | Custom linked list |
| Priority Support | No | Yes |
| Animation & Input Handling | Sluggish under load | Much smoother |
| Error Boundaries | No | Yes |
| Foundation for Concurrent Features | ❌ |  |

---

---

## **Redux vs Context API**

**Use Context API when**
  - You have a small to medium-sized app
  - The state is global but not frequently updated (e.g., theme, locale, auth user)

**Avoid Context API when**
  - State updates are frequent or deeply nested
  - You need middleware, async actions, or dev tools

**Use Redux Toolkit when:**
  - You need fine-grained control, modular slices, and performance optimization

| Feature | **Redux** | **Context API** |
|--------|-----------|----------------|
|  **Purpose** | Global state management with predictable updates | Pass data through the component tree without prop drilling |
|  **State Management** | Uses **reducers**, **actions**, **store** | Uses **React.createContext()** and **useContext** |
| 📦 **Installation** | Requires installing packages (`redux`, `react-redux`, `@reduxjs/toolkit`) | Built into React |
|  **Learning Curve** | Steeper (concepts like reducers, actions, middleware) | Very easy to get started |
|  **Debugging** | Excellent dev tools support | Limited debugging |
|  **Boilerplate Code** | More boilerplate (less with Redux Toolkit) | Minimal |
| 🎯 **Performance** | Fine-grained updates via `connect()` | Can cause unnecessary re-renders if not used carefully |
| ⚡ **Scalability** | Designed for large, complex apps | Best for small-to-medium state sharing |
| 🌐 **Middleware/Async** | Powerful middleware like **redux-thunk**, **redux-saga** for async | Manual handling of async (e.g., `useEffect`) |
| 💬 **Community & Ecosystem** | Huge community, battle-tested | Simpler, smaller use case |

---

##  When to Use **Context API**

 For:
- Theme toggling (light/dark)
- Auth user info (token, user ID)
- Language/locale
- Simple app-wide settings

❌ Avoid:
- Frequently changing or large states (can trigger too many re-renders)

---

## 💪 When to Use **Redux**

 For:
- Complex apps with **deeply nested components**
- Large-scale state needs (e.g., cart, filters, forms, API data)
- Need for **time-travel debugging**, middleware, or **persistent state**
- When **multiple components** at different levels need access and updates to shared state

---

##  Tip: Combine Both
Use **Context API** for app-wide "static" values (like theme or auth), and **Redux** for complex, dynamic, and deeply shared state (like API data or cart logic).

---


---

## **Conditional Rendering**

**Conditional Rendering** means showing different UI elements based on some condition, like user login status, loading state, error, etc.

It’s like using `if/else` in JavaScript — but inside JSX.

---

###  **1. Using `if` Statements (Outside JSX)**

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

###  **2. Using Ternary Operator (Inline in JSX)**

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

###  **3. Using Logical `&&` Operator**

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

###  **4. Storing JSX in a Variable**

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




Great topic — **data flow in React** is fundamental and often tested in interviews. Here's a clean explanation tailored for a **senior-level answer**, followed by **bullet points and a visual analogy**.

---

## **Data Flows**

###  **Unidirectional Data Flow (Top → Down)**

- In React, data **flows in a single direction** — from **parent to child** via **props**.
- This makes the flow **predictable**, **debuggable**, and **easy to trace**.
- Child components **receive data** but do not directly modify the parent’s state.
- To communicate **from child to parent**, we use **callback functions** passed as props.

---

### 📌 **Key Concepts**

#### 1. **Props (Top-Down Communication)**
- Passed from parent → child
- Read-only in child components
```jsx
<Profile name="Alex" age={28} />
```

#### 2. **State (Local to Component)**
- Owned and managed inside a component
- Can be lifted up to the nearest common ancestor to share between siblings

#### 3. **Callbacks (Bottom-Up Communication)**
- Parent passes a function to the child to receive updates
```jsx
<Child onClick={handleClickFromParent} />
```

#### 4. **Context API (Global-Like Communication)**
- Used for **global state** (theme, user, auth, etc.) without prop-drilling

---

###  **Visual Analogy**

Think of React like a **waterfall**:
- Water (data) flows **from the top (parent)** down to **lower levels (children)**.
- Children can only affect upstream by **sending a message (callback)**, not by pushing the water back up directly.

---

###  Senior Insight:

> I always start with local state and props. If multiple components need access, I lift state up or use **context/hooks**. This keeps the data flow intentional and prevents side effects. For complex apps, I evaluate whether to use tools like Redux, Zustand, or React Query for better state/data management.

---









## Redux Saga

- Redux-Saga is a middleware library for Redux to handle side effects (e.g., API calls, delays, etc.)
- It uses **ES6 generators** to make asynchronous flows easy to read, write, and test.

**Key Concepts**
- **Sagas**: Generator functions that yield plain JavaScript objects to the middleware.
- **Effects**: Instructions to the middleware on what to do (e.g., `call`, `put`, `takeEvery`).
- **Side Effects**: Operations like data fetching, delay, caching, etc.


* `takeEvery`: Run saga on every action.
* `takeLatest`: Run only the most recent saga.
* `call`: Invoke async logic.
* `put`: Dispatch an action.
* `select`: Get state from Redux.
* Handle errors using `try...catch`.

**Common Redux-Saga Effects**

**takeEvery**
- Listens for a specific action type and runs the worker saga for every dispatched action.
- Suitable when you want to perform actions for each event.

```javascript
yield takeEvery('FETCH_REQUEST', fetchData);
```

**takeLatest**

* Runs only the **latest** worker saga and cancels any previous unfinished instances.
* Useful for search, auto-save, or type-ahead use cases.

```javascript
yield takeLatest('FETCH_USER_REQUEST', fetchUserData);
```


**call**

* Calls an asynchronous function (e.g., API request).
* Blocks saga until the promise resolves.

```javascript
const data = yield call(api.getUser, action.payload);
```

**put**

* Dispatches an action to the Redux store.

```javascript
yield put({ type: 'FETCH_SUCCESS', payload: data });
```

**select**

* Accesses the current state from the Redux store.

```javascript
const userId = yield select(state => state.user.id);
```


**Error Handling**

* Use `try...catch` blocks around sagas to handle failures gracefully.

```javascript
function* fetchData(action) {
  try {
    const data = yield call(api.fetch, action.payload);
    yield put({ type: 'FETCH_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error: error.message });
  }
}
```

---

## Complete Example

```javascript
import { call, put, takeLatest } from 'redux-saga/effects';
import api from './api';

function* fetchUserData(action) {
  try {
    const data = yield call(api.getUser, action.payload);
    yield put({ type: 'FETCH_USER_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'FETCH_USER_ERROR', error: error.message });
  }
}

export function* watchFetchUserData() {
  yield takeLatest('FETCH_USER_REQUEST', fetchUserData);
}
```

---







##  **Memory leaks**

 - Memory leaks in React apps can quietly degrade performance over time, especially in large, long-running applications. 
 - They often happen when **resources are retained after a component is unmounted** or when **event listeners, timers, or subscriptions aren’t cleaned up** properly.


**Best Practices to Prevent Memory Leaks**

| Problem                          | Solution                                      |
| -------------------------------- | --------------------------------------------- |
| Long-running timers              | Clear them in cleanup function                |
| Event listeners                  | Always remove in `useEffect` cleanup          |
| Network requests / subscriptions | Abort/cancel/unsubscribe on unmount           |
| Async `setState` after unmount   | Track mounted status or use `AbortController` |
| Global objects / static caches   | Avoid storing component-specific data there   |
| Refs holding large data          | Use sparingly and clear when no longer needed |

---

**Common Causes of Memory Leaks in React**

**Uncleared `setTimeout` / `setInterval`**

Timers continue to run even after the component is unmounted.

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    // logic
  }, 1000);

  return () => clearTimeout(timer); // ✅ cleanup
}, []);
```


**Unsubscribed External Listeners (WebSocket, EventEmitter, etc.)**

Failing to unsubscribe from listeners keeps references alive.

```jsx
useEffect(() => {
  socket.on("data", handleData);

  return () => socket.off("data", handleData); // ✅ cleanup
}, []);
```


**Unremoved DOM Event Listeners**

Directly added DOM listeners must be removed manually.

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize); // ✅ cleanup
}, []);
```

**Stale Closures / Async Calls after Unmount**

An async call updating state after a component is gone can cause warnings or leaks.

```jsx
useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    if (isMounted) setState(data); // ✅ only update if mounted
  });

  return () => {
    isMounted = false;
  };
}, []);
```

Or with an `AbortController`:

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== "AbortError") throw err;
    });

  return () => controller.abort();
}, []);
```

**Global Variables / Caches**

Storing references to components or DOM nodes globally can prevent GC (garbage collection).

```js
// Bad: storing a component instance or DOM node globally
window.myCache = someComponentInstance;
```


**Improper use of Refs**

Refs persist across renders. Holding large objects (e.g. DOM elements, event targets) unnecessarily can cause leaks.

```jsx
const largeDataRef = useRef(heavyData); // ⚠️ can leak if not used carefully
```

**How to Detect Memory Leaks**


* **Browser DevTools → Performance → Record memory usage**
* Use the **"Memory" tab** to track detached DOM nodes or retained JS objects
* Watch for **React warnings** like:

  ```
  Can't perform a React state update on an unmounted component.
  ```

---

### 🔄 React 18+ Note

React’s **Concurrent Mode** and new **`useTransition`**, **`useDeferredValue`**, etc., may retain state longer — so always **clean up effects** carefully to avoid leaks in complex UI transitions.

---



###  **Real-World Example**

In a React dashboard app, I had a WebSocket connection inside a component. 
The team noticed memory usage grew after navigating between tabs.

 - **Problem**: WebSocket wasn’t closed on unmount.
 - **Fix**: Added cleanup inside `useEffect`:

```tsx
useEffect(() => {
  const socket = new WebSocket("wss://...");

  return () => {
    socket.close(); // Prevent leak
  };
}, []);
```

---

###  **Final Tips**

* Always **clean up side effects** in `useEffect`.
* Avoid setting state after unmount: Use `isMounted` refs or AbortController.
* Test components in isolation and monitor memory usage in dev tools.

---



## **large scale application**:


| **Category**              | **Details**                                                                        | **Category**            | **Details**                                               |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------- |
| **Modular Architecture**  | Feature/domain-based folders like `features/auth/`                                 | **Component Hierarchy** | UI (presentational) vs. container (smart) components      |
| **Hooks Folder**          | Reusable logic via custom hooks like `useAuth`, `usePagination`                    | **Services Layer**      | API and business logic in `services/` folders             |
| **State Management**      | `useState`, Context API for simple; RTK/Zustand for complex, colocated per feature | **Routing Strategy**    | React Router v6+ with `routes.tsx` structured per feature |
| **Types & Interfaces**    | Defined in `types.ts` or `interfaces.ts` per feature                               | **Shared Components**   | Reusable UI like buttons, modals in `shared/components/`  |
| **Styling**               | Tailwind CSS or CSS-in-JS (e.g., Styled Components), scoped using utility/BEM      | **Testing Structure**   | Jest + RTL, colocated tests like `Component.test.tsx`     |
| **Environment & Configs** | `.env` for environment vars, `config.ts` for URLs, tokens, flags                   | **CI/CD & Linting**     | ESLint, Prettier, Husky for hooks, GitHub Actions for CI  |



---




### Suspense Boundary

A **Suspense Boundary** in React is a component wrapper (`<Suspense>`) that tells React to:

* **Pause rendering** of its children until some async data or code is ready.
* **Show a fallback UI** while waiting (e.g., a spinner, skeleton screen, or placeholder).

---

#### 📦 Syntax Example

```jsx
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./MyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>

      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

---

#### 🔍 When Do You Use Suspense?

1. **Code-splitting** with `React.lazy()`
2. **Data fetching** with libraries like:

   * React Query (with experimental features)
   * Relay
   * React 18+ with `use()` (experimental or Server Components)
3. **Image or asset preloading** with libraries or custom wrappers

---

#### 🧩 Nested Suspense Boundaries

You can **nest Suspense boundaries** to control fallbacks more precisely:

```jsx
<Suspense fallback={<div>Loading section A...</div>}>
  <SectionA />

  <Suspense fallback={<div>Loading subsection B...</div>}>
    <SectionB />
  </Suspense>
</Suspense>
```

This means Section A and B can load independently, improving perceived performance.

---

#### ⚠️ Limitations & Notes

* `React.lazy()` only works for default exports.
* Suspense for data fetching is still **experimental** in many contexts unless you're using a library that supports it or Server Components.
* Server-side rendering (SSR) requires careful handling with `Suspense`.

---



## What Happens During a React Re-render

 - When a component's state, props, or context change, React re-invokes the component function to generate a new Virtual DOM.
 - It then compares this with the previous Virtual DOM using a diffing algorithm to detect changes.
 - Only the actual differences are applied to the real DOM.
 - After the render phase, React runs any cleanup and re-executes side effects via `useEffect`.
 - React’s virtual DOM and reconciliation help ensure updates are fast and efficient."



**Trigger**

A re-render is triggered by:

* A change in **state** (`useState`, `setState`)
* A change in **props** from a parent component
* A change in **context** (`useContext`)
* A **force update** (`forceUpdate` or equivalent)


**Component Re-evaluation**

React **re-invokes the component function**:

* For function components, the function is called again.
* All hooks (`useState`, `useEffect`, etc.) are re-evaluated in order.
* New **Virtual DOM** is generated from the return value (JSX).


**Virtual DOM Diffing**

React compares:

* The **new Virtual DOM** vs. the **previous Virtual DOM**.
* It uses a **diffing algorithm** (called *reconciliation*) to find differences.


**Efficient DOM Updates**

* React computes a **minimal set of real DOM changes**.
* Only the **changed nodes** are updated in the browser DOM.
* This is why React is fast — it avoids full re-renders of the actual DOM.


**Effects Handling**

* **`useEffect`** and **`useLayoutEffect`** are triggered *after* the paint phase.

  * React checks if their dependencies (`[deps]`) have changed.
  * Clean-up functions from the previous effect run first (if needed).

**Optimization Notes**

* **Re-renders are local**: A child doesn't re-render unless its props or state change.
* Use `React.memo` to avoid unnecessary re-renders for pure functional components.
* Use **keys** properly in lists to help React optimize updates.

---


### React virtualized

`react-virtualized` is a powerful React library for **windowing large lists, tables, and grids** to improve performance by rendering only visible items. It was the **de facto standard** before `react-window` and is still used in complex UIs with advanced layout needs.

**When to Use `react-virtualized`**

* You need **feature-rich virtualization** (especially for tables/grids).
* You need **dynamic row heights or sticky headers**.
* You’re maintaining a **legacy project** already using it.
* You want a **battle-tested** solution for enterprise-scale apps.


**When *Not* to Use It**

* For simple lists or if **bundle size** is a concern.
* If you're building a modern app and want the **simplest setup** → prefer [`react-window`](https://github.com/bvaughn/react-window) or [`@tanstack/react-virtual`](https://tanstack.com/virtual).


**Alternatives**

| Alternative               | Best For                                 |
| ------------------------- | ---------------------------------------- |
| `react-window`            | Lightweight lists/grids                  |
| `@tanstack/react-virtual` | Framework-agnostic, powerful, modern API |
| `Virtuoso`                | Dynamic item sizes and smooth scrolling  |



**Key Features**

* **`List`** – virtualized vertical lists
* **`Table`** – feature-rich, performant tables
* **`Grid`** – two-dimensional rendering (rows and columns)
* **`AutoSizer`** – auto-detects container width/height
* **`CellMeasurer`** – supports dynamic row heights
* **`WindowScroller`** – synchronizes with window scroll
* **`ScrollSync`** – synchronizes multiple scrollable areas


#### ⚙️ Basic Usage Example

```jsx
import { List, AutoSizer } from 'react-virtualized';

const MyList = ({ items }) => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        width={width}
        height={height}
        rowCount={items.length}
        rowHeight={40}
        rowRenderer={({ index, key, style }) => (
          <div key={key} style={style}>
            {items[index]}
          </div>
        )}
      />
    )}
  </AutoSizer>
);
```

---

#### 🧠 Advanced Use Cases (Where `react-virtualized` Shines)

| Feature                  | Support | Notes                            |
| ------------------------ | ------- | -------------------------------- |
| ✅ Sticky headers/footers | Yes     | Via `Table`                      |
| ✅ Dynamic row height     | Yes     | Via `CellMeasurer`               |
| ✅ Grid virtualization    | Yes     | 2D rendering                     |
| ✅ Auto-sizing containers | Yes     | `AutoSizer`                      |
| ✅ Infinite loading       | Yes     | Use with `InfiniteLoader`        |
| ✅ Window scroll support  | Yes     | `WindowScroller`                 |
| ✅ Scroll synchronization | Yes     | `ScrollSync`                     |
| ❌ Minimal API            | No      | More complex than `react-window` |
| ❌ Small bundle           | No      | \~30–40 KB+                      |

---

#### 🔁 `react-virtualized` vs. `react-window`

| Area                | `react-virtualized`         | `react-window` (newer) |
| ------------------- | --------------------------- | ---------------------- |
| Bundle Size         | ❌ Larger                    | ✅ Smaller (3–6 KB)     |
| Performance         | ✅ Fast                      | ✅ Faster, simpler      |
| Dynamic Row Heights | ✅ Built-in (`CellMeasurer`) | ❌ Requires workaround  |
| Sticky headers      | ✅ Built-in                  | ❌ Not built-in         |
| Complexity          | ❌ More complex              | ✅ Minimal, clean       |
| Maintenance         | ❌ Legacy, less active       | ✅ Actively maintained  |
| Learning Curve      | ❌ Steeper                   | ✅ Easy to pick up      |

---






## Pointer Events

In React, **Pointer Events** provide a **unified way to handle input** from different pointing devices — such as **mouse, touch, stylus, and pen** — using a single event system. Instead of writing separate handlers for `onMouseDown`, `onTouchStart`, etc., I can use events like `onPointerDown`, `onPointerMove`, and `onPointerUp` to cover all scenarios.

For example:

```jsx
<div onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} />
```

This approach reduces complexity and improves maintainability, especially in cross-platform apps.

Each pointer event provides useful metadata like:

* `e.pointerType` → `"mouse"`, `"touch"`, or `"pen"`
* `e.pressure` → Pressure sensitivity (for stylus input)
* `e.isPrimary` → Whether it's the primary pointer

Compared to `Mouse Events` and `Touch Events`:

* Pointer Events are **more modern**, **flexible**, and **device-agnostic**.
* Mouse Events only work for desktop input.
* Touch Events don’t support stylus or multiple input types.
* With Pointer Events, I don’t need to duplicate logic for each input type.

React supports these natively using its synthetic event system:

```jsx
onPointerDown, onPointerMove, onPointerUp,
onPointerCancel, onPointerEnter, onPointerLeave,
onGotPointerCapture, onLostPointerCapture
```

In real-world use cases like drag-and-drop, drawing apps, or gesture handling, I always prefer Pointer Events — unless I need to support very old browsers (like legacy Safari), in which case I implement fallbacks using `onTouch*` and `onMouse*`.

---

Let me know if you'd like a **follow-up response** for:

* **"How would you implement fallback logic for older browsers?"**
* **"Have you used pointer capture in your projects?"**



| Use Case                                     | Recommendation                        |
| -------------------------------------------- | ------------------------------------- |
| Cross-device interaction (mouse, touch, pen) | ✅ Use **Pointer Events**              |
| Simple desktop app (mouse only)              | Use **Mouse Events**                  |
| Mobile web app (older browsers)              | Use **Touch Events**                  |
| Stylus input (drawing apps, pressure data)   | ✅ Use **Pointer Events**              |
| Fine control of input types                  | ✅ Use `pointerType`, `pressure`, etc. |



Here’s how to **convert your explanation into an interview-style answer** for React 18’s new root API:

---

## React 18 key changes

---

### 🔑 **Summary (Key Points to Mention):**

| Feature            | Purpose                              |
| ------------------ | ------------------------------------ |
| `createRoot`       | Enables concurrent rendering         |
| Automatic Batching | Fewer re-renders, better performance |
| `useTransition`    | Mark updates as non-urgent           |
| `useId`            | Avoid hydration mismatches           |
| Improved Suspense  | For data fetching and SSR            |
| Streaming SSR      | Faster server rendering              |
| `flushSync`        | Opt-out of batching                  |


This modernization aligns React’s architecture with future features like **automatic batching, transitions**, and **React Server Components**.


In React 18, one of the major updates is the **introduction of a new root API** using `createRoot`, which replaces the legacy `render` method from `react-dom`.

#### 🔧 **Before React 18 (Legacy Render API):**

```js
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);
```

#### ⚡ **After React 18 (Concurrent Root API):**

```js
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // Enables concurrent features
root.render(<App tab="home" />);
```

This change enables **Concurrent Rendering**, allowing React to interrupt rendering work and prioritize updates more efficiently — which helps improve user experience, especially in large apps.

---

### 🧹 **Unmounting Components:**

Previously, we used:

```js
unmountComponentAtNode(container);
```

In React 18, this is handled by the root instance:

```js
root.unmount();
```

---

### 🕒 **Handling Callback After Render:**

In earlier versions, `render` supported a callback:

```js
render(<App />, container, () => console.log("rendered"));
```

This callback has been **removed in React 18**, especially because it behaves unpredictably with features like `Suspense`. Instead, React encourages using the `useEffect` hook:

```js
function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  }, []);

  return <App tab="home" />;
}
```

Here’s how to **frame this explanation of Automatic Batching in React 18** in a **clear, interview-ready format**:

---

### **Interviewer:** Can you explain what automatic batching is in React 18 and how it's different from earlier versions?

---

### **automatic batching across async boundaries**

Yes, in React, **batching** is the process of **grouping multiple state updates into a single re-render**, which improves performance.

#### **Before React 18:**

Batching was only supported **inside React event handlers** (like onClick, onChange).

```js
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ✅ React batches and re-renders once
}

setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ❌ React re-renders twice (no batching)
}, 1000);
```

Updates triggered in **non-React events** like `setTimeout`, `Promise`, or `native DOM listeners` were not batched — they caused multiple renders.

---

#### **In React 18:**

With the introduction of `createRoot`, **automatic batching** is extended **across all contexts**, including:

* `setTimeout`
* `Promise.then`
* `fetch().then`
* Native DOM events

```js
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ✅ React now batches and re-renders only once!
}, 1000);
```

This drastically improves performance by **reducing unnecessary renders**, especially in complex asynchronous flows.

---

### 🚫 **Need to Opt-Out?**

React 18 allows you to opt out of batching using `flushSync`:

```js
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });
  flushSync(() => {
    setFlag(f => !f);
  });
}
```

Using `flushSync`, React flushes updates immediately, forcing DOM updates **between each call** — useful in rare cases where immediate updates are critical (e.g., measuring layout).

---



## **Recursion**


React supports **recursion** like any JavaScript function. It’s particularly useful when rendering **deeply nested hierarchical data**, such as:

* Tree menus
* Comments with replies
* Category/subcategory structures
* Folders/files (like a file explorer)

---

### 🔁 Basic Recursive Component Example

### Example: Rendering a nested comment thread

```jsx
// Comment.js
const Comment = ({ comment }) => {
  return (
    <div style={{ marginLeft: 20 }}>
      <p><strong>{comment.author}</strong>: {comment.text}</p>

      {comment.replies?.map((reply) => (
        <Comment key={reply.id} comment={reply} />
      ))}
    </div>
  );
};
```

### Usage:

```jsx
// App.js
const comments = [
  {
    id: 1,
    author: 'Alice',
    text: 'This is a comment.',
    replies: [
      {
        id: 2,
        author: 'Bob',
        text: 'This is a reply.',
        replies: [
          {
            id: 3,
            author: 'Charlie',
            text: 'Nested reply!',
            replies: [],
          },
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
}
```

---

### 🧠 Key Recursion Concepts in React

| Concept                    | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| **Component Calls Itself** | Just like a function calling itself                     |
| **Base Case**              | Must stop recursion (e.g., no more children or replies) |
| **Key Prop**               | Required for lists to avoid React warnings              |
| **Depth Limit (optional)** | Useful to avoid infinite loops                          |

---

### 🗂️ Recursive File Tree Example

```jsx
const File = ({ node }) => {
  return (
    <div style={{ marginLeft: 20 }}>
      📁 {node.name}
      {node.children?.map(child => (
        <File key={child.name} node={child} />
      ))}
    </div>
  );
};
```

### File Tree JSON:

```js
const fileTree = {
  name: "root",
  children: [
    { name: "file1.txt" },
    {
      name: "src",
      children: [
        { name: "App.js" },
        { name: "index.js" },
      ],
    },
  ],
};
```

---

### ✅ Tips for React Recursion

1. **Always define a base condition**
2. Keep UI rendering logic **pure and stateless**
3. Use `key` prop properly in recursive children
4. Avoid unnecessary re-renders by memoizing if needed

---

### ⚠️ Caveat

Avoid recursive rendering when:

* The tree is **too deep**, leading to performance issues
* **Circular references** exist (e.g., `node.child === node`)

---






## Redux Toolkit Query

 - **RTK Query** is a powerful data fetching and caching tool built into **Redux Toolkit**.
 - It simplifies managing **server-side state** by auto-generating API logic, including **caching**, **loading**, **error handling**, and **re-fetching** — all with minimal boilerplate.
 - Instead of writing manual actions, reducers, or thunks, RTK Query provides **auto-generated hooks** like `useGetUsersQuery()`.
 - It handles **data caching**, **tag-based invalidation**, and **automatic re-fetching** out of the box.
 - It integrates tightly with **Redux DevTools** and supports advanced features like **polling**, **optimistic updates**, and even **SSR compatibility** with frameworks like **Next.js**.

---

### ✅ Why I Use RTK Query

 - In my recent projects, I’ve used RTK Query because it provides a **declarative and efficient** way to manage API state with Redux.
 - It **eliminates boilerplate**—no need to manually write actions, reducers, or thunk logic.
 - It provides **loading, success, and error states** automatically through generated hooks.
 - The **built-in caching** and **tag-based invalidation** help keep client data in sync without manual re-fetch logic.
 - RTK Query improves **developer productivity** and leads to **cleaner, maintainable code**—especially in apps that make frequent REST or GraphQL calls.
 - It scales well in large apps due to its consistent structure and deep integration with the Redux ecosystem.

---



**Assessing:** Your understanding of how RTK Query avoids unnecessary network calls(caching and invalidation)
 - RTK Query uses **normalized caching** by default. Each query is cached based on its arguments (e.g., URL and params).
 - It uses **tag-based invalidation**, where you can assign tags to endpoints (`providesTags`) and invalidate them on mutations (`invalidatesTags`). This way, it only re-fetches the required data when necessary.

 - `query` is used for **GET-like operations** (fetching data), 
 - while `mutation` is used for **POST/PUT/DELETE** operations that **alter server-side state**.
 - Each provides different lifecycle methods and caching behavior — mutations don’t cache the response but trigger invalidation or re-fetch.

**Assessing:** Knowledge of RTK Query’s re-fetching optimizations.
 - These options allow queries to **auto-refetch**:
* `refetchOnFocus`: re-fetch when the window regains focus.
* `refetchOnReconnect`: re-fetch after a lost network reconnects.
  These can be set globally or per endpoint.


**Assessing:** Testing strategy and mocking (test components)
 - Use **MSW (Mock Service Worker)** to mock API responses in tests.
 - RTK Query also exposes a `setupListeners` method and mock store integration, 
 - so you can test hooks with React Testing Library easily.

**Assessing:** Flexibility and customization.
 - `fetchBaseQuery` is a wrapper around the native `fetch` API with built-in support for headers, query params, and error formatting.
 - You can also write a **custom baseQuery** (e.g., using Axios or interceptors) by returning `{ data, error }` in the same format RTK Query expects.


**Assessing:** Advanced data management (handle pagination or infinite scroll)
 - You can pass pagination params (like `page`, `limit`) as query args.
 - Each unique combination is cached separately.
 - For infinite scroll, you manage page keys and use `useLazyQuery` or custom logic to combine paginated results in the component state.

**Assessing:** performance optimizations - Practical use of tuning.
* Tag-based cache invalidation
* `keepUnusedDataFor` to control cache lifespan
* Selective polling
* `skip` and `refetch` params
* Custom `selectFromResult` to reduce re-renders
  
**Assessing:** Efficient component rendering.
 - `selectFromResult` allows you to **pick only part of the query result**, helping prevent re-renders.
 - It's especially useful when only a specific field or object needs to be tracked inside a large data response.
**Assessing:** State prediction and UX.
 - `onQueryStarted` lifecycle method in a mutation to optimistically update the cache using `updateQueryData`.
 -  `patchResult.undo()` - If the mutation fails, you can rollback changes .

**Assessing:** How you handle real-world API security.(authentication headers)
 - RTK Query allows custom headers using the `prepareHeaders` option in the `baseQuery`.
 - Example:

```ts
baseQuery: fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  }
})
```



### 🔧 How RTK Query Works (Simple Setup)

### 1. **Create an API Slice**

```ts
// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
```

---

### 2. **Add to Redux Store**

```ts
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
```

---

### 3. **Use in React Component**

```tsx
import { useGetUsersQuery } from './services/api';

function UserList() {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  return (
    <ul>
      {data.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---


## 📦 Bonus: Mutation Example

```ts
addUser: builder.mutation({
  query: (newUser) => ({
    url: 'users',
    method: 'POST',
    body: newUser,
  }),
}),
```

```ts
const [addUser, { isLoading }] = useAddUserMutation();
```

---

## 💡 Features at a Glance

| Feature                 | Supported?       |
| ----------------------- | ---------------- |
| Auto-generated hooks    | ✅                |
| Caching and re-fetching | ✅                |
| Pagination/offset       | ✅                |
| Mutation support        | ✅                |
| Invalidating cache      | ✅                |
| Polling                 | ✅                |
| SSR                     | ✅ (with Next.js) |
| DevTools Integration    | ✅                |

---

## 🔁 Comparison: RTK Query vs Axios vs React Query

| Feature                | **RTK Query** | **Axios** | **React Query**  |
| ---------------------- | ------------- | --------- | ---------------- |
| Built-in Redux support | ✅             | ❌         | ❌ (external lib) |
| Auto caching           | ✅             | ❌         | ✅                |
| Boilerplate-free       | ✅             | ❌         | ✅                |
| Manual setup required  | ❌             | ✅         | ✅                |
| Mutations support      | ✅             | ✅         | ✅                |
| Redux DevTools support | ✅             | ❌         | ❌                |

---





## **Render Props**

- Render Props is a **design pattern** in React used for **sharing code between components** using a **prop whose value is a function**.

- Instead of hardcoding what a component renders, the component accepts a **function as a prop** (commonly named `render` or `children`) and calls that function to determine what to render.

- This gives flexibility to the consumer of the component, allowing dynamic rendering while still reusing common logic or behavior.

---

### ✅ **Simple Example (Explain in Interview)**

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)} {/* ✅ Function as a prop (Render Prop) */}
    </div>
  );
}
```

```jsx
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>The mouse position is ({x}, {y})</h1>
      )}
    />
  );
}
```

---

### ✅ Why/When Do We Use Render Props?

* When multiple components **share behavior** (like mouse tracking, form validation, subscriptions, etc.) but need to **render differently**.
* A flexible alternative to **Higher-Order Components (HOCs)**.
* Was widely used **before Hooks** were introduced in React 16.8.

---

### ✅ Key Points to Mention in Interview

* It’s a pattern, not an API.
* Enables code reuse by abstracting behavior.
* Can lead to **"wrapper hell"** or **deep nesting**, which is why Hooks are now preferred.
* Still relevant when dealing with **legacy code** or **non-Hook environments**.

---

### ✅ Bonus (One-liner Summary for the End)

> In short, Render Props allow a component to **delegate its rendering logic** to another function, giving the consumer more control over what to render while reusing shared logic.






## **Reacts Concurrent Mode**


- React’s **Concurrent Mode** is a set of features introduced in **React 18** that makes rendering more **responsive**, **non-blocking**, and **interruptible**.

- Concurrent Mode makes React apps **feel faster** by allowing **urgent interactions** (like typing or clicking) to **interrupt and preempt** slower rendering tasks. It’s ideal for **complex UIs**, **data-heavy operations**, or **real-time interfaces**.


**Traditional vs Concurrent Rendering**

* Traditionally, React renders updates **synchronously**, meaning it **blocks the main thread** until rendering is complete.
* In complex or data-heavy applications, this can cause **UI freezes** or **input lag**.

**How Concurrent Mode Works**

* Concurrent Mode **breaks rendering into units of work**, allowing React to:

  * **Pause** ongoing work
  * **Handle urgent tasks** (like user input)
  * **Resume** rendering later
* It behaves like **`requestIdleCallback`**, but is internally optimized for React's scheduler.
* Note: It doesn’t run rendering in parallel (since **JavaScript is single-threaded**), but it enables **smarter task prioritization**.

**Key Features Enabled by Concurrent Mode**

* **`startTransition()`** – Marks updates as **non-urgent**, allowing React to prioritize user interactions.
* **`useDeferredValue()`** – Defers updates to **expensive computations** or components.
* **`<Suspense>`** – Coordinates **asynchronous loading** of data or components.


**Real-World Use Case**

> For example, in a search UI filtering a large list:
>
> ```tsx
> const handleChange = (e) => {
>   setInput(e.target.value);
>   startTransition(() => {
>     setFilteredList(filterLargeList(e.target.value));
>   });
> };
> ```
>
> Using `startTransition`, the input stays **smooth and responsive**, while the **list update happens in the background**. Without it, typing might lag or freeze.

**Benefits**

* **Improves perceived performance**
* **Enhances interactivity**
* **Eliminates janky UIs** in apps with heavy rendering




### call a child component’s function from a parent

> In React, we generally follow a top-down data flow, so parents control children via props. But in certain cases — like imperative actions (focus, reset, scroll, show modal, etc.) — we might need the **parent to call a function defined inside the child**.
>
> To achieve this, we use:
>
> 1. **`useRef`** in the parent to get a reference.
> 2. **`forwardRef`** in the child to receive the ref.
> 3. **`useImperativeHandle`** in the child to expose specific methods.

---

**Code Example**

**ChildComponent.js**

```jsx
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const [message, setMessage] = useState('Initial Message');

  // Expose functions to parent
  useImperativeHandle(ref, () => ({
    showAlert: () => {
      alert('Alert from child!');
    },
    updateMessage: (newMsg) => {
      setMessage(newMsg);
    }
  }));

  return <div>{message}</div>;
});

export default ChildComponent;
```

#### 🔹 **ParentComponent.js**

```jsx
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.showAlert(); // Calling child function
    childRef.current.updateMessage('Updated from Parent!');
  };

  return (
    <div>
      <button onClick={handleClick}>Call Child Methods</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

export default ParentComponent;
```

---
**When to Use This?**

> This is useful when:
>
> * The child holds internal logic (like `focus`, `scroll`, `openModal`).
> * You don’t want to lift state or refactor the child just to expose a tiny method.
>
> However, overusing this breaks React’s declarative pattern. So I use it **only when absolutely necessary** and keep the exposed methods minimal.

---

**Bonus Interview Tip**

Can’t we use props for this?
> Yes, but props are unidirectional and declarative. If a parent wants to **trigger an effect inside the child directly**, props don't suffice. That’s where `ref` + `imperativeHandle` come in — it's React's controlled escape hatch for such cases.






### call child components function from a parent

> In React, we generally follow a top-down data flow, so parents control children via props. But in certain cases — like imperative actions (focus, reset, scroll, show modal, etc.) — we might need the **parent to call a function defined inside the child**.
>
> To achieve this, we use:
>
> 1. **`useRef`** in the parent to get a reference.
> 2. **`forwardRef`** in the child to receive the ref.
> 3. **`useImperativeHandle`** in the child to expose specific methods.

---

**Code Example**

**ChildComponent.js**

```jsx
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const [message, setMessage] = useState('Initial Message');

  // Expose functions to parent
  useImperativeHandle(ref, () => ({
    showAlert: () => {
      alert('Alert from child!');
    },
    updateMessage: (newMsg) => {
      setMessage(newMsg);
    }
  }));

  return <div>{message}</div>;
});

export default ChildComponent;
```

#### 🔹 **ParentComponent.js**

```jsx
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.showAlert(); // Calling child function
    childRef.current.updateMessage('Updated from Parent!');
  };

  return (
    <div>
      <button onClick={handleClick}>Call Child Methods</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

export default ParentComponent;
```

---
**When to Use This?**

> This is useful when:
>
> * The child holds internal logic (like `focus`, `scroll`, `openModal`).
> * You don’t want to lift state or refactor the child just to expose a tiny method.
>
> However, overusing this breaks React’s declarative pattern. So I use it **only when absolutely necessary** and keep the exposed methods minimal.

---

**Bonus Interview Tip**

Can’t we use props for this?
> Yes, but props are unidirectional and declarative. If a parent wants to **trigger an effect inside the child directly**, props don't suffice. That’s where `ref` + `imperativeHandle` come in — it's React's controlled escape hatch for such cases.




### **Call a parent component’s function from a child in React?**

> In React, the most common and recommended way to call a parent function from a child is by **passing the function as a prop**. This keeps the data flow unidirectional and allows the parent to control behavior while the child simply triggers it.

---

 **Example (Explain + Code)**

> For example, suppose I have a function in the parent component called `handleChildAction`, and I want the child to call it when a button is clicked.

**Parent Component:**

```jsx
function ParentComponent() {
  const handleChildAction = () => {
    console.log('🔔 Called from child');
  };

  return <ChildComponent onAction={handleChildAction} />;
}
```

**Child Component:**

```jsx
function ChildComponent({ onAction }) {
  return <button onClick={onAction}>Call Parent</button>;
}
```

> Here, the parent passes its function as a prop (`onAction`), and the child invokes it inside an `onClick`. This is clean, decoupled, and idiomatic in React.


**When the interviewer asks "Why this approach?"**

> Because React promotes **top-down data flow**, this keeps the child reusable and unaware of parent logic. It's also predictable and easy to debug.


**Optional Add-on**

> If multiple children need to communicate up, or if the structure is deeply nested, I’d consider using **React Context** or a **global state manager like Redux** to avoid prop drilling. But for typical cases, props are the cleanest solution.




## React Window

-`react-window` is a **lightweight React library** from the **React core team**.

- It’s mainly used for **virtualizing long lists or grids** — meaning it **renders only the visible items in the DOM**, and **skips off-screen elements**.

- This helps **dramatically improve performance** when working with **very large datasets**, such as **thousands of rows** in a table or log viewer.

- For example, in one project, I had a **dashboard showing 1000+ transactions**. Rendering everything at once caused **DOM lag and memory issues**.

- Using `react-window`, only **30–40 visible items** are rendered at a time, ensuring **smooth scrolling and better performance**.

- I used the **`FixedSizeList`** component, where I passed in props like:
 * `height` ,  * `itemCount` , * `itemSize`  * and a custom `Row` renderer

- It also supports **infinite scroll and lazy loading**, and works well with **Redux or paginated APIs**.
 - I prefer `react-window` over `react-virtualized` because it’s **simpler, lighter**, and good for **most list/grid UIs**.
 - If I need **advanced features** like **masonry layout** or **dynamic row heights**, I consider `react-virtualized`.

- Overall, `react-window` is my go-to tool for building **fast, responsive UIs** involving **large or dynamic lists**.


---


## Handle Large Forms

1. **Library Choice:**  -    * Prefer `react-hook-form` for large forms (performance + minimal re-renders).

2. **Form Decomposition:**

   * Break the form into smaller **modular components** per section.
   * Use a **wrapper** to manage multi-step navigation.

3. **Centralized State Management:**

   * Use `useFormContext`, `useReducer`, or React Context.
   * Persist form data in `localStorage` or backend (auto-save).

4. **Dynamic/Conditional Fields:**

   * Use `watch()` for reactive rendering.
   * Clean up hidden/unsubmitted fields before final submission.

5. **Validation Strategy:**

   * Use **Yup** for schema-based validation.
   * Apply **step-wise** and **dynamic validation rules**.

6. **Performance Optimization:**

   * Memoize heavy components.
   * Use RHF’s `shouldUnregister`, lazy load sections if needed.

7. **User Experience:**

   * Add **progress indicators**, keyboard support, and accessible fields.
   * Implement **Save as Draft**, autosave recovery.

8. **Results:** -    * Reduced form bugs by 80%, improved UX, enhanced client satisfaction.

9. **Mindset:** -    * "Treat large forms like small apps — well-structured, tested, and optimized."




###  **Hooks Rules?**

- The **Rules of Hooks** are strict guidelines that ensure React's hook system works predictably. There are **two main rules**:
- Follow the **two rules strictly** to ensure React can maintain the correct **internal hook state** and avoid rendering bugs.
   -  **Only call Hooks at the top level**
   - **Only call Hooks from React functions**

**Only call Hooks at the top level**

* **Do not call hooks inside loops, conditions, or nested functions**
* Hooks must be called in the **same order** every render
* Ensures React can **track hook state correctly**

**✅ Example (Correct):**

```js
function MyComponent() {   const [count, setCount] = useState(0); } // Top-level hook call 
```

**❌ Example (Incorrect):**

```js
if (condition) {   useState(0); } // Hook inside condition = ❌ 
```


**Only call Hooks from React functions**

* Hooks must be called from:

  * **Function components**
  * **Custom hooks**
* Do **not** call hooks from:

  * Regular JS functions
  * Class components

**✅ Example:**

```js
function useCustomHook() {
  const value = useState(0); // Valid inside custom hook
}
```

**❌ Example:**

```js
function someUtilityFunction() {
  useEffect(() => {}); // ❌ Invalid outside React component or hook
}
```


**Why these rules matter**

* React tracks hook state by **position** (not name)
* Breaking the rules can cause:
  * *"Rendered fewer hooks than expected"* errors
  * **Incorrect or broken state behavior**


**Best Practice**

* Use **`eslint-plugin-react-hooks`** to automatically detect violations

  ```bash
  npm install eslint-plugin-react-hooks --save-dev
  ```





### **`useRef` vs `useState`**

- "`useRef` and `useState` are both hooks in React used to store values between renders, but they serve different purposes and behave differently in how they trigger re-renders."


* **`useState`** = *reactive*, causes re-renders, used for **UI state**.
      -  I use `useState` when I need the UI to reflect changes,
* **`useRef`** = *non-reactive*, no re-renders, used for **DOM refs**, **mutable values**, or **side-effects**.
      -  `useRef` when I want to persist a value without triggering re-renders — like storing previous values, debounced inputs, or DOM references."


**`useState`**

* **Triggers a re-render** when the state value changes.
* Used to **store and update UI data** (e.g., form input, component state).
* Best when the value **affects rendering** or needs to be **reactive**.
* React keeps track of state changes and schedules updates accordingly.

```tsx
const [count, setCount] = useState(0);

// Updating this causes the component to re-render
setCount(count + 1);
```


**`useRef`**

* **Does NOT trigger a re-render** when the `.current` value is updated.
* Holds a **mutable reference** that persists across renders.
* Often used to **access DOM nodes** or store **imperative values** (like timers, previous props, flags).
* Useful when you want to **store something without causing a UI update**.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus(); // Focuses the input without re-rendering
}, []);
```


**Real-world Use Case Comparison**:

| Purpose                                           | useState              | useRef             |
| ------------------------------------------------- | --------------------- | ------------------ |
| Track user input and show it on screen            | ✅ Yes                 | ❌ Not suitable     |
| Keep track of how many times a component rendered | ❌ Triggers re-renders | ✅ Perfect use case |
| Store a timer ID for `clearTimeout`               | ❌ Overhead            | ✅ Ideal            |
| Refer to a DOM element like `<input>`             | ❌ Not for DOM refs    | ✅ Yes              |






##  Passing data child to parent


> In React, data typically flows from parent to child using props. However, if we want to pass data from a **child to a parent**, we use a **callback function**.
>
> The idea is:
>
> 1. The **parent component defines a function** that handles the data.
> 2. This function is **passed to the child** as a prop.
> 3. Inside the **child component**, we invoke this function, optionally passing data as an argument.
>
> This allows the child to "communicate" with the parent without breaking the unidirectional data flow that React enforces.

> For example, the parent might have a function called `handleChildData`, which updates the state. We pass this function as a prop to the child. The child then calls this function when, say, a button is clicked or an input changes — sending the data up to the parent.


To **pass a value from a child to a parent** in React, you need to follow this pattern:

1. **Define a callback function in the parent**.
2. **Pass that function to the child via props**.
3. **Call the function from the child**, passing the data you want to send.


| **Use Case**          | **How it Works**                            | **Example**                             | **Notes**                        |
| --------------------- | ------------------------------------------- | --------------------------------------- | -------------------------------- |
| Child triggers event  | Parent passes callback as prop              | `onClick={() => setCount(count + 1)}`   | Common in forms, buttons, inputs |
| Controlled components | Child inputs are controlled by parent state | `<input value={name} onChange={...} />` | Useful in form management        |
| `useContext` usage    | For global/shared state access              | `const theme = useContext(ThemeCtx)`    | Avoids deep prop drilling        |


**1. Parent Component**

```jsx
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data from child: {childData}</p>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default Parent;
```


**2. Child Component**

```jsx
import React from 'react';

function Child({ sendDataToParent }) {
  const handleClick = () => {
    sendDataToParent("Hello from Child!");
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
```



## Parent Child Rendering in React


| **Aspect**              | **Description**                                              | **Example**                       | **Direction**             |
| ----------------------- | ------------------------------------------------------------ | --------------------------------- | ------------------------- |
| **Component Structure** | Parent includes child inside JSX                             | `<Child />` inside `Parent.tsx`   | Parent → Child            |
| **Props Passing**       | Data passed from parent to child as props                    | `<Child user={user} />`           | Parent → Child            |
| **Callback Functions**  | Parent passes handler to child so child can trigger logic    | `<Child onClick={handleClick} />` | Child → Parent (via prop) |
| **Rendering Flow**      | Parent renders first, then children are rendered recursively | React's virtual DOM tree          | Top → Down                |



Sure! Here's how you can confidently and concisely answer this question in an **interview setting**:

---

### **Rerender parent component to child component**

**"If a parent component’s state changes but no props are passed to the child, will the child component still re-render?"**


- Yes, by default, **a child component will re-render when the parent re-renders**, even if the child receives **no props**.

- This happens because React’s rendering model re-renders all components in the tree when a parent component’s state or props change — **unless optimizations like `React.memo()` are used**.

- So if the parent’s state updates, the parent re-renders, and that triggers all of its children to re-render as well, regardless of whether props are passed or changed.

- However, to **optimize performance**, we can wrap the child component with `React.memo()` so that it **only re-renders when its props actually change**.

 ```tsx
 const Child = React.memo(() => {
   console.log("Child rendered");
   return <div>I am a child</div>;
 });
 ```

- This memoization is especially useful in large trees or performance-critical components.



- If the child component is expensive to render and doesn’t depend on the parent’s state or props, wrapping it with `React.memo()` (or using `useMemo` for values) helps avoid **unnecessary renders**, improving performance.
