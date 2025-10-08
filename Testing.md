| **Category**                | **Topics** |
|----------------------------|------------|
| **Build & Compilation**    | - [Tree Shaking](#tree-shaking-in-modern-bundlers) - [Compiler](#Compiler) - [Transpiling](#transpiling-javascript-code) - [Polyfills](#polyfills-and-backward-compatibility) - [Babel](#role-of-babel-in-modern-development) |
| **Bundlers & Tools**       | [Customize Webpack](#customize-webpack) - [Webpack & Vite](#webpack-and-vite-bundling-process) - [Reduce large bundle size](#Reduce-large-bundle-size) - [Reduce the Bundle Size](#reduce-the-bundle-size) - [Plugins](#Plugins) - [Webpack Loaders](#Webpack-Loaders) - [Webpack Optimization](#Webpack-Optimization) |
| **Testing Basics**         | [Testing Types](#types-of-testing-in-software-development) - [Unit vs Integration vs E2E](#unit-testing-vs-integration-testing-vs-e2e) - [Writing Unit Tests](#writing-unit-tests) - [Mocks and Stubs](#mocks-and-stubs-in-testing) - [Testing Frameworks](#popular-javascript-testing-frameworks) - [TDD](#test-driven-development) - [Testing Asynchronous Code](#testing-asynchronous-code-in-javascript) - [Jest and React Testing Library](#Jest-and-React-Testing-Library) |
| **Testing Adv** | [Unit test external API call](#Unit-test-external-API-call) - [Unit testing in NodeJs using Jest](#Unit-testing-in-NodeJs-using-Jest) - [Unit testing in Node.js using Mocha and Chai](#Unit-testing-in-Nodejs-using-Mocha-and-Chai) - [Mock Testing](#mock-testing) - [Mocking APIs Tests](#Mocking-APIs-Tests) - [Testing Hooks](#Testing-Hooks)  |
| **Quality**   | [SonarQube](#SonarQube) - [ESLint](#EsLint) - [Code Quality](#Code-Quality) - [CI CD](#CI-CD) - [Web Communication Protocols](#Web-Communication-Protocols) - [Software Engineering Practices](#Software-Engineering-Practices)  |
| **Micro Frontend**         | [Single SPA](#Single-SPA) - [Module Federation](#Module-Federation) -[Session token between MF](#Session-token-between-micro-service)|
| **Security 1**| [HttpOnly Cookies](#HttpOnly-Cookies) - [Security](#Security) - [React Security](#React-Security) - [CORS](#CORS) - [Cross Site Scripting (XSS)](#cross-site-scripting-xss-and-prevention) - [Cross-Site Request Forgery (CSRF)](#cross-site-request-forgery-csrf) - [Content Security Policy (CSP)](#content-security-policy-csp) - [SQL Injection](#preventing-sql-injection-vulnerabilities) |
| **Security 2**| [Insecure Dependencies](#insecure-dependencies) - [Insecure Deserialization](#insecure-deserialization) - [Sensitive Data Exposure](#sensitive-data-exposure) - [Handling Sensitive Data](#handling-sensitive-data) - [Common Security Headers](#common-security-headers-and-their-purposes)
| **Security 3**| [Denial of Service (DoS)](#denial-of-service-dos) - [Directory Traversal](#directory-traversal) - [Improper Session Handling](#improper-session-handling) - [Insecure CORS Configuration](#Insecure-CORS-Configuration)  - [Clickjacking](#preventing-clickjacking-attacks) - [Input Validation](#input-validation-and-its-importance) |
| **Performance & Debugging**| [Common Performance Bottlenecks](#common-performance-bottlenecks-in-javascript-applications) - [Lazy Loading](#lazy-loading) - [Caching Strategies](#leveraging-caching-strategies-for-performance-optimization) - [Performance Tools](#tools-for-measuring-and-analyzing-javascript-performance) - [Optimizing Network Requests](#optimizing-network-requests-for-better-performance) - [Scalability](#Scalability) - [Troubleshoot and Debug Issue](#Troubleshoot-and-debug-issue) |
| **Design Principles**      | -   - [Function Composition Patterns](#function-composition-patterns) - [Microfrontend design pattern](#Microfrontend-design-pattern) |


- [CSR vs SSR](#CSR-vs-SSR) - [Client-Side Rendering  vs Server-Side Rendering](#CSR-vs-SSR)

## **Client-Side Rendering  vs Server-Side Rendering**


---








#### **Tree Shaking in Modern Bundlers**

- **Tree shaking** is a feature of modern JavaScript bundlers (like Webpack and Rollup) that eliminates unused code from the final bundle.
- It works by statically analyzing the code to determine which exports are used and which can be safely removed.

- **How it Works**:
  - Tree shaking works on **ES Modules** because of their static structure (i.e., imports/exports are known at compile time).
  - This allows bundlers to "shake" out any unused code, leading to smaller bundle sizes.

- **Example**:
  ```javascript
  // utils.js
  export function usefulFunction() {
    console.log('This is useful!');
  }
  
  export function unusedFunction() {
    console.log('This is not used.');
  }

  // main.js
  import { usefulFunction } from './utils';
  usefulFunction();
  ```
  After bundling, only the `usefulFunction` will remain in the final bundle, and `unusedFunction` will be eliminated.

---


## **Compiler**

* A **compiler** generally converts code from a **high-level language to a lower-level language**, like machine code or bytecode.
* However, in JavaScript, **TypeScript** is a common example of a compiler:

  * It compiles **TypeScript (a statically typed superset of JavaScript)** to plain JavaScript.


 -  *“So, the TypeScript compiler (`tsc`) is converting from one language (TS) to another (JS), while transpilers stay within the same language.”*

#### 📌 Example:

```ts
// TypeScript
let count: number = 10;

// Compiled JavaScript
var count = 10;
```


---


## **Transpiling JavaScript Code**


- Transpiling means converting JavaScript from one version to another, like ES6 to ES5 using Babel.
- **Transpiling** is the process of converting modern JavaScript (ES6+) code into an older version of JavaScript (such as ES5) that is compatible with older browsers or environments.
- This is usually done to ensure compatibility with older browsers that don’t support new JavaScript features.

- **Example**:
  - **ES6+ Code**:
    ```javascript
    const greet = (name) => {
      console.log(`Hello, ${name}!`);
    };
    ```
  
  - **ES5 Transpiled Code** (via Babel):
    ```javascript
    var greet = function(name) {
      console.log('Hello, ' + name + '!');
    };
    ```

- **Tools for Transpiling**:
  - **Babel** is the most popular tool for transpiling modern JavaScript into compatible versions for older browsers.

---



#### **Role of Babel in Modern Development**

- Yes, I've worked extensively with Babel, especially in React and large-scale JavaScript projects.
- Babel is a powerful JavaScript transpiler that plays a crucial role in modern frontend development. 
- Its primary purpose is to **convert modern JavaScript (ES6 and beyond) into backward-compatible ES5**, 
- **Ensuring compatibility across all major browsers — including older ones**.
- For example, when I write modern features like arrow functions, optional chaining, or class properties, 
- Babel transpiles these down to equivalent ES5 syntax. This lets me use the **latest language features without worrying about browser support**.
- In React development, Babel is essential. 
- It uses presets like @babel/preset-react to convert JSX into React.createElement() calls that browsers can interpret. 
- It also supports TypeScript and Flow when configured with the appropriate plugins.
- I typically integrate Babel with Webpack using **babel-loader** to transpile .js and .jsx files. 
- In modern setups with Vite, Babel support is often handled via plugins or built-in.

**To summarize**
- Babel enables modern, maintainable, and future-proof codebases by bridging the gap between the latest JavaScript features and browser limitations. 
- It’s a core part of the frontend toolchain that enhances both developer experience and app compatibility."

- **Example**:
  ```javascript
  // Example ES6 Code
  const greet = () => console.log("Hello, world!");
  ```

  **Babel Transpiled (ES5)**:
  ```javascript
  var greet = function() {
    console.log("Hello, world!");
  };
  ```

- **Babel Setup**:
  - Babel can be integrated with bundlers like **Webpack** or **Vite** to transpile code as part of the build process.

---

## **Webpack and Vite Bundling Process**


 - [Webpack](#Webpack)
 - [Vite](#Vite)


## Webpack



| **Details**                               | **Details**  |
| -------------------------------------- | ----------- |
| **Overview:** I’ve worked extensively with **Webpack**, especially in **large-scale React applications**. I’m comfortable configuring it from scratch and optimizing it for performance. | **Purpose & Usage:** I use Webpack to bundle **modern JavaScript, JSX, CSS/SCSS, and static assets** into efficient, production-ready builds. It constructs a **dependency graph** from an entry point (usually `index.js`), applies **loaders** to transform files, and uses **plugins** to optimize the build process. |
| **Configurations:** I separate configuration for **development** and **production**.<br>• In **dev mode**, I enable **Hot Module Replacement (HMR)** for faster feedback.<br>• In **production**, I use **code splitting**, **tree shaking**, and **cache busting** with hashed filenames in the `dist/` directory.      | **Common Plugins:** Frequently used plugins include:<br>• **HtmlWebpackPlugin** – Injects assets into HTML.<br>• **MiniCssExtractPlugin** – Extracts CSS into separate files.<br>• **DefinePlugin** – Injects environment-specific variables.                                                                            |
| **Loaders & Styling:** I use **babel-loader** to transpile JSX and modern ES syntax, and I’ve added support for **SCSS** and **CSS Modules** for better style encapsulation.| **Performance Optimization:** I optimize bundles using **webpack-bundle-analyzer** to visualize bundle sizes and refine chunking strategies. I also leverage **dynamic imports**, **React.lazy**, and **Suspense** to minimize initial load time.                                                                        |
| **CI/CD Integration:** I integrate Webpack into **CI/CD pipelines** to ensure **clean builds**, **environment-specific configurations**, and **minimized production bundles**. | **Preference & Legacy Maintenance:** While I prefer using **Vite** for newer projects due to its speed and simplicity, I continue to maintain and optimize **Webpack-based setups** in legacy apps that need advanced customization.|
| **Conclusion:** I consider **Webpack** a powerful and flexible bundler that gives full control over the **frontend build lifecycle** — from **development** through **optimization** to **deployment**.|



### Key Concepts in Webpack

* **Entry:** The main file(s) where Webpack starts bundling.
* **Output:** Where and how the bundles are saved (usually `dist/` folder).
* **Loaders:** Transform files before bundling (e.g., Babel for JS/JSX, CSS loaders).
* **Plugins:** Extend Webpack functionality (e.g., minification, environment variables).
* **Mode:** `development` (unminified, faster builds) or `production` (optimized, minified).
* **Code splitting:** Split bundle into smaller chunks loaded on demand.

---

### Basic Webpack config example for React

```js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle
    publicPath: '/',       // Important for routing
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.jsx?$/, // For JS and JSX files
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel to transpile React/ES6
      },
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
      {
        test: /\.(png|jpg|gif)$/i, // Images
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // So imports can omit extensions
  },
  devServer: {
    static: './dist',
    historyApiFallback: true, // For React Router to work
    hot: true,                // Enable hot module replacement
  },
};
```



### ⚙️ **Example of My Webpack Setup:**

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

---

### 🚀 **How I’ve Used Webpack in Projects:**

* Customized Webpack to support **code splitting** with `React.lazy()` and dynamic imports.
* Used **`BundleAnalyzerPlugin`** to identify and reduce bundle size.
* Configured **aliases** to simplify imports (e.g., `@components/...`)
* Set up separate **dev/prod configs** for fast HMR during development and optimized builds for production.
* Integrated with **Babel**, **TypeScript**, and **SASS loaders**.
* Used **`dotenv-webpack`** to manage environment variables cleanly.
* Set up **multi-entry builds** for a microfrontend architecture.

---

### 🧪 **Optimization Techniques I've Applied:**

| Optimization           | Purpose                  |
| ---------------------- | ------------------------ |
| `SplitChunksPlugin`    | Extract vendor libraries |
| Tree shaking           | Remove unused code       |
| `TerserPlugin`         | Minify JS                |
| `MiniCssExtractPlugin` | Separate and cache CSS   |
| Lazy loading           | Improve TTI              |
| Cache busting          | Via `[contenthash]`      |

---



 ---------------


## Vite


- "Yes, I’ve used Vite extensively in recent projects — especially for React and TypeScript-based applications."*

- Vite is a modern frontend build tool developed by Evan You, and although it originated in the Vue ecosystem, it works seamlessly with React, Svelte, and other frameworks. 
- What sets Vite apart is its incredible speed — both during development and for production builds.*

- In development mode, Vite uses native **ES modules** and leverages **esbuild**, a Go-based bundler, to transform code on demand. 
- This results in near-instant server startup and **blazing-fast hot module replacement (HMR)** — even in large codebases.*

- For production builds, Vite internally switches to **Rollup**, ensuring tree-shaken and optimized bundles. The output is highly efficient and performance-friendly.*

- Compared to Webpack, Vite offers a far simpler and faster development experience. Webpack needs to bundle everything upfront, which slows down dev startup time, but Vite serves source files as-needed — leading to a more responsive feedback loop.*

- Setting up a React app with Vite is as simple as:*

```bash
npm create vite@latest my-app --template react
```

- The configuration is minimal — typically just a `vite.config.js` file with the React plugin, optional path aliases, and environment variables. Vite also has built-in support for TypeScript, JSX, CSS Modules, and dynamic imports (`React.lazy`).*

- In my projects, I’ve also integrated plugins like:*
-  `vite-plugin-pwa` for Progressive Web App features
-  Tailwind CSS for utility-first styling
-  `vite-tsconfig-paths` for resolving TypeScript aliases

- Vite’s plugin ecosystem is growing rapidly and it aligns well with modern frontend tooling needs. It’s especially beneficial in greenfield projects where speed, DX, and simplicity are top priorities.*

- That said, I still use Webpack in legacy codebases where advanced custom configurations or enterprise-specific plugins are required. But for new projects, Vite has become my go-to build tool."*

---


```
my-app/
├── index.html
├── src/
│   ├── main.jsx
│   └── App.jsx
├── vite.config.js
```

### 3. Vite Config (vite.config.js):

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

---


###  When to Choose Vite?

* You want a **modern setup** with **lightning-fast development**.
* You’re building with **React**, **Vue**, or **TS** and don’t want to deal with Webpack config.
* You’re prioritizing **DX (developer experience)** and fast HMR.

---

### 🧰 Optional Add-ons

* **Tailwind CSS** — `npm install -D tailwindcss postcss autoprefixer`
* **Alias support** — Use `resolve.alias` in `vite.config.js`
* **PWA support** — via `vite-plugin-pwa`

---









---









#### **Cross-Site Scripting (XSS) and Prevention**

- **Cause**: Unsanitized user input rendered in frontend templates.
- **Mitigation**:
  - Escape output in templates (use templating engines like EJS/Pug safely).
  - Sanitize HTML inputs using libraries like `DOMPurify` (frontend) or `sanitize-html` (backend).
  - Implement Content Security Policy (CSP) headers.

Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal sensitive information, manipulate content, or hijack user sessions.

**Prevention**:
- **Sanitize Input**: Always sanitize user inputs to ensure no malicious scripts are injected. Use libraries like **DOMPurify** or **OWASP Java HTML Sanitizer**.
  
  **Example**:
  ```javascript
  const cleanInput = DOMPurify.sanitize(userInput);
  ```
  
- **Use Content Security Policy (CSP)**: CSP restricts how resources (like scripts) are loaded by the browser.
  
  **Example**:
  ```html
  <meta http-equiv="Content-Security-Policy" content="script-src 'self';">
  ```

- **Escape Output**: Encode data before rendering it in HTML, JavaScript, or URL contexts.

  **Example**:
  ```javascript
  const safeHTML = document.createElement('div');
  safeHTML.textContent = userInput;  // This will prevent XSS by escaping the input
  ```

By sanitizing inputs and escaping outputs, you minimize the risk of XSS attacks.

---

#### **Cross-Site Request Forgery (CSRF) and Mitigation Techniques**



Cross-Site Request Forgery (CSRF) is an attack where a malicious actor tricks a user into making an unwanted request to a web application where they are authenticated.

**Mitigation Techniques**:
- **Use Anti-CSRF Tokens**: A unique token is included with every request to verify that the request is from the legitimate user.
  
  **Example**:
  ```html
  <input type="hidden" name="csrf_token" value="{{csrf_token}}">
  ```

- **SameSite Cookies**: Set the `SameSite` attribute for cookies to `Strict` or `Lax` to restrict cookie transmission in cross-origin requests.

  **Example**:
  ```javascript
  document.cookie = "sessionid=xyz; SameSite=Strict";
  ```

- **Check Referer Header**: Verify the `Referer` header to ensure the request originates from your domain.

---

#### **Preventing SQL Injection Vulnerabilities**

- **Cause**: Unsanitized input passed directly to database queries or shell commands.
- **Mitigation**:
  - Use parameterized queries (e.g., with ORM like Sequelize, Prisma).
  - Avoid `eval`, `exec`, or `child_process` unless absolutely necessary.
  - Validate and sanitize input using libraries like `validator.js` or `Joi`.


SQL Injection is a technique where an attacker can manipulate SQL queries by injecting malicious SQL code into user inputs, potentially allowing them to access, modify, or delete data from the database.

**Prevention**:
- **Use Prepared Statements**: Avoid constructing SQL queries directly with user input. Prepared statements with parameterized queries ensure that user input is treated as data and not executable code.

  **Example (using Node.js with SQL libraries)**:
  ```javascript
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [userEmail], (err, results) => { ... });
  ```

- **Use ORM Libraries**: Object-Relational Mapping (ORM) libraries like **Sequelize** (for Node.js) automatically sanitize user inputs.
  
- **Whitelist Input Validation**: Ensure that inputs match expected patterns (e.g., email format) to prevent malicious data.

---

#### **Handling Sensitive Data**



Handling sensitive data requires encryption, proper access control, and secure storage mechanisms to protect user information.

**Best Practices**:
- **Encrypt Sensitive Data**: Use algorithms like AES-256 for encrypting sensitive data at rest. Ensure the encryption keys are stored securely using hardware security modules (HSMs).

  **Example** (AES encryption in Node.js):
  ```javascript
  const crypto = require('crypto');
  const encryptedData = crypto.createCipher('aes-256-cbc', secretKey).update(data, 'utf8', 'hex');
  ```

- **Use HTTPS**: Always use **HTTPS** to encrypt data in transit and prevent man-in-the-middle attacks.

- **Avoid Storing Plaintext Passwords**: Use strong hashing algorithms like **bcrypt** or **argon2** to store passwords securely.

  **Example**:
  ```javascript
  const bcrypt = require('bcrypt');
  const hash = bcrypt.hashSync(password, 10);
  ```

- **Limit Data Access**: Implement least privilege access and make sure only authorized personnel can access sensitive information.

---

### **Content Security Policy (CSP)**



CSP is a security mechanism that helps prevent various types of attacks like XSS and data injection attacks by specifying which content sources are allowed to load on a webpage.

**In nodeJs**:


In a **React project**, implementing a strong `Content-Security-Policy (CSP)` is very important — especially if you're deploying to production. While React (via Create React App or Vite, etc.) doesn't set CSP by default, you can and **should configure it at the server level** (e.g., with Nginx, Express.js, or via meta tags in static builds).

---

####  Real-World CSP Example for React

#### 🔧 Option 1: Using a `<meta>` tag in `public/index.html`

If you're hosting with something like Netlify, GitHub Pages, or any static server:

```html
<!-- public/index.html -->
<head>
  <meta
    http-equiv="Content-Security-Policy"
    content="
      default-src 'self';
      script-src 'self' https://cdn.jsdelivr.net;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data:;
      connect-src 'self' https://api.example.com;
      object-src 'none';
      base-uri 'self';
      frame-ancestors 'none';
    "
  />
</head>
```

> 🔒 Note: `'unsafe-inline'` is **not recommended** for scripts, but React apps often require it for styles (like emotion, styled-components). Try to avoid inline scripts altogether.

---

#### 🔧 Option 2: Setting CSP via Express Server (for SSR or custom backend)

```ts
import express from 'express';
import path from 'path';
import helmet from 'helmet';

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "https://api.example.com"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      frameAncestors: ["'none'"],
    },
  })
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('React app with CSP running on http://localhost:3000');
});
```

---



**How it works**:
- **Restrict Resource Loading**: You can control where scripts, images, stylesheets, and other resources are loaded from.
  
  **Example CSP Header**:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://trusted.com;">
  ```

By using CSP, you prevent attackers from injecting malicious scripts or other resources into your web pages.

---

#### **Common Security Headers and Their Purposes**



Some common security headers are:

- **Strict-Transport-Security (HSTS)**: Instructs browsers to only use HTTPS for communication, protecting against downgrade attacks.
  ```http
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```

- **Content-Security-Policy (CSP)**: Prevents XSS by controlling which resources can be loaded by the browser.
  ```http
  Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com;
  ```

- **X-Content-Type-Options**: Prevents browsers from interpreting files as something other than their declared content type.
  ```http
  X-Content-Type-Options: nosniff
  ```

- **X-Frame-Options**: Prevents your site from being embedded in an iframe, protecting against clickjacking.
  ```http
  X-Frame-Options: DENY
  ```

- **X-XSS-Protection**: Enables or disables the browser’s built-in XSS filter.
  ```http
  X-XSS-Protection: 1; mode=block
  ```

These headers improve the security posture of a web application by enforcing proper security mechanisms.

---

#### **Preventing Clickjacking Attacks**



Clickjacking is a malicious technique where a user is tricked into clicking on a hidden button or link by rendering it behind an iframe.

**Prevention**:
- **X-Frame-Options Header**: Prevents the page from being embedded in an iframe.

  ```http
  X-Frame-Options: DENY
  ```

- **Content Security Policy (CSP)**: Restricts the embedding of content within frames.
  
  ```html
  <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none';">
  ```

These headers prevent attackers from tricking users into clicking on elements that they can't see.

---

#### **Input Validation and Its Importance**



Input validation is crucial for ensuring that user input is safe, expected, and meets the application's requirements. It helps prevent injection attacks, data corruption, and crashes.

**How to Perform Input Validation**:
- **Type Checking**: Ensure that input data is of the correct type (e.g., strings, numbers).
  
  **Example**:
  ```javascript
  if (typeof userInput !== 'string') {
    throw new Error('Invalid input type');
  }
  ```

- **Range Checking**: Ensure numeric values are within an expected range.

  **Example**:
  ```javascript
  if (age < 18 || age > 100) {
    throw new Error('Invalid age');
  }
  ```

- **Pattern Matching**: Use regular expressions to match the expected input format (e.g., email format).
  
  **Example**:
  ```javascript
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(userInput)) {
    throw new Error('Invalid email format');
  }
  ```

By validating inputs, you ensure data integrity and reduce the risk of malicious data entering your system.

---



---

#### **Common Performance Bottlenecks in JavaScript Applications**



Common performance bottlenecks in JavaScript applications include:

- **Blocking the Main Thread**: Long-running synchronous JavaScript code can block the UI thread, making the application feel slow or unresponsive. This happens when heavy computations or synchronous AJAX calls are performed.
  
- **Memory Leaks**: Unused objects or event listeners that are not properly cleaned up can cause memory leaks, slowing down the application over time.

- **DOM Manipulation**: Excessive DOM manipulation or manipulating the DOM repeatedly in an inefficient way can drastically degrade performance.

- **Large Bundle Sizes**: Large JavaScript bundle sizes increase loading times and can slow down the initial page render.

- **Inefficient Loops**: Unoptimized loops or excessive computations inside loops can severely impact performance, especially when iterating over large datasets.

**Prevention**:
- Break down long tasks using `requestIdleCallback` or `setTimeout`.
- Optimize memory usage by clearing references and using weak references where appropriate.

---

#### **Optimizing DOM Manipulation for Better Performance**



Optimizing DOM manipulation is critical to maintaining fast web applications, especially when frequently updating the DOM. Here are some strategies:

- **Batch DOM Updates**: Manipulating the DOM multiple times in a loop can be inefficient. Instead, batch all updates and perform them in a single operation.

  **Example**:
  ```javascript
  const fragment = document.createDocumentFragment();
  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    fragment.appendChild(div);
  });
  container.appendChild(fragment);
  ```

- **Minimize Reflows and Repaints**: Reflows and repaints are triggered whenever the DOM changes, so minimize unnecessary changes. Avoid reading layout properties (like `offsetHeight`, `offsetWidth`) before making modifications.

- **Use Virtual DOM (React)**: Libraries like React optimize DOM updates by using a virtual DOM and batching updates, minimizing direct interaction with the real DOM.

- **Avoid Complex Selectors**: Use efficient selectors, especially when selecting elements by class, ID, or tag, rather than using complex queries.

---

#### **Lazy Loading**



Lazy loading is a technique where resources (like images, scripts, or components) are only loaded when they are required, rather than all at once during the initial page load. This reduces the initial load time and improves perceived performance.

**How to Implement Lazy Loading**:
- **Images**: Use the `loading="lazy"` attribute to defer the loading of images until they are about to be displayed in the viewport.

  **Example**:
  ```html
  <img src="image.jpg" loading="lazy" alt="Lazy Loaded Image">
  ```

- **Dynamic Imports**: Use JavaScript's dynamic `import()` function to load modules only when necessary.

  **Example**:
  ```javascript
  button.addEventListener('click', () => {
    import('./myModule').then(module => {
      module.initialize();
    });
  });
  ```

- **Intersection Observer**: Use the Intersection Observer API to detect when elements are about to enter the viewport and load them accordingly.

  **Example**:
  ```javascript
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => observer.observe(img));
  ```

Lazy loading reduces unnecessary initial load, improving both performance and user experience.

---

#### **Leveraging Caching Strategies for Performance Optimization**



Caching strategies are essential for reducing load times, especially for frequently accessed resources. Some effective caching strategies include:

- **Browser Caching**: Use HTTP headers like `Cache-Control` and `ETag` to instruct browsers to cache resources, so they don't need to be fetched on every request.

  **Example**:
  ```http
  Cache-Control: max-age=31536000, immutable
  ```

- **Service Workers**: Use service workers for caching assets and enabling offline functionality. This allows caching of network requests and responses for future use.

  **Example**:
  ```javascript
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll(['/index.html', '/styles.css', '/script.js']);
      })
    );
  });
  ```

- **Content Delivery Network (CDN)**: Use CDNs to cache static resources geographically closer to users, reducing latency and improving load times.

- **Application Cache**: For legacy browsers, use `localStorage`, `sessionStorage`, or IndexedDB to cache application data on the client side.

---

#### **Tools for Measuring and Analyzing JavaScript Performance**



There are several tools available to measure and analyze JavaScript performance:

- **Chrome DevTools**: Offers a suite of tools for analyzing performance, including the **Performance tab** for recording and analyzing runtime performance, the **Memory tab** for detecting memory leaks, and the **Network tab** for tracking network requests.

- **Lighthouse**: An open-source tool from Google that audits the performance, accessibility, SEO, and best practices of a web page. It provides actionable insights and recommendations for improving performance.

- **WebPageTest**: An online tool that provides detailed information about page load time, performance bottlenecks, and opportunities for optimization, including first paint, time to interactive, etc.

- **r3 Performance Analyzer**: A performance profiler specifically designed to analyze network performance and rendering times in real-world conditions.

- **New Relic / Datadog**: These monitoring tools help in tracking server-side and client-side performance, providing real-time insights into bottlenecks and issues affecting the application’s speed.

---

#### **Optimizing Network Requests for Better Performance**



Optimizing network requests is crucial to improve the loading speed and overall performance of a web application. Here are some strategies:

- **Minimize HTTP Requests**: Reduce the number of requests by combining files (e.g., CSS, JavaScript) into a single file and using image sprites.

- **Use HTTP/2**: HTTP/2 allows multiplexing, meaning multiple requests can be sent over a single TCP connection, reducing latency.

- **Lazy Load Resources**: Load resources such as images, fonts, and JavaScript files only when they are needed (on-demand), reducing initial page load.

- **Compression**: Use compression techniques like GZIP or Brotli to reduce the size of transferred resources. Ensure that both your server and client support these compression methods.

  **Example**:
  ```http
  Content-Encoding: gzip
  ```

- **Avoid Render-Blocking Resources**: Minimize or defer the loading of CSS and JavaScript files that block the rendering of the page. Use `async` or `defer` attributes on script tags for non-critical resources.

  **Example**:
  ```html
  <script src="script.js" async></script>
  ```

- **Use a Content Delivery Network (CDN)**: Serve static resources (images, CSS, JavaScript) from CDNs, which reduce the distance data needs to travel and improve load times.




#### **Polyfills and Backward Compatibility**



- **Polyfills** are scripts that add support for features not natively available in older browsers or environments. They ensure that modern JavaScript features (like `Promise`, `fetch`, or `Array.prototype.includes`) work on older platforms by providing implementations of those features.

- **How Polyfills Work**:
  - A polyfill checks if a feature exists, and if not, it provides its implementation.
  
  **Example**:
  ```javascript
  if (!window.fetch) {
    // Provide a polyfill for the fetch API
    window.fetch = function() {
      // Implement fetch logic here
    };
  }
  ```

- **Importance**:
  - Polyfills ensure that your application can run on older browsers that don’t support the latest JavaScript features. This is especially important when supporting Internet Explorer or older versions of Firefox, Chrome, etc.

---


---













####  **Cross-Site Request Forgery (CSRF)**
- **Cause**: Unauthorized commands transmitted from a user that the web app trusts.
- **Mitigation**:
  - Use anti-CSRF tokens (`csurf` middleware).
  - Ensure state-changing operations are protected (POST, PUT, DELETE).
  - Use SameSite cookies when applicable.

####  **Insecure Dependencies**
- **Cause**: Use of outdated or vulnerable npm packages.
- **Mitigation**:
  - Regularly run `npm audit` or use tools like `snyk`, `depcheck`.
  - Keep dependencies updated (`npm-check-updates`).
  - Use a lockfile (`package-lock.json`) to avoid version drift.

####  **Insecure Deserialization**
- **Cause**: Parsing and executing untrusted serialized data.
- **Mitigation**:
  - Avoid using `eval`, `Function`, or `vm` module with user input.
  - Prefer JSON over other serialization formats.
  - Validate and sanitize all inputs.

####  **Sensitive Data Exposure**
- **Cause**: Improper handling of credentials, tokens, or error messages.
- **Mitigation**:
  - Use environment variables for secrets (via `dotenv`).
  - Avoid logging sensitive information.
  - Use HTTPS and encryption for data in transit.
  - Secure cookies (`Secure`, `HttpOnly`, `SameSite` flags).

####  **Denial of Service (DoS)**
- **Cause**: Heavy payloads, infinite loops, or blocking operations.
- **Mitigation**:
  - Implement rate limiting (`express-rate-limit`).
  - Use payload size limits (`body-parser` or `express.json({ limit })`).
  - Validate all inputs strictly to avoid heavy computations.
####  **Directory Traversal**
- **Cause**: Unsanitized paths allowing access outside intended directory.
- **Mitigation**:
  - Sanitize file paths using `path.join()` or `path.normalize()`.
  - Set strict boundaries on accessible directories.

####  **Improper Session Handling**
- **Cause**: Predictable or non-expiring session tokens.
- **Mitigation**:
  - Use secure session stores (`express-session` + Redis or Mongo).
  - Set proper session expiration and regenerate tokens on login.
  - Store sessions server-side, not in client-local storage.

#### **Insecure CORS Configuration**
- **Cause**: Allowing requests from any origin (`'*'`).
- **Mitigation**:
  - Define allowed origins explicitly in CORS middleware.
  - Validate origin dynamically if necessary.








## Security

> To build a **secure and scalable React application**, I implement strong security measures like using HttpOnly cookies for auth, validating and sanitizing user input, enforcing CSP headers, and using React’s default XSS protections.


---

##  1. **Security Best Practices in React**

### 🔒 a. **Avoid Storing Sensitive Data in Local Storage**

* ❌ Don’t store JWTs, passwords, or personal data in `localStorage` or `sessionStorage`.
*  Prefer **HttpOnly, Secure Cookies** for auth tokens.

### 🛡️ b. **XSS Protection**

* React automatically escapes values rendered in JSX, helping to prevent XSS.
* Still sanitize input/output, especially if using `dangerouslySetInnerHTML`.

### 🧪 c. **Form Validation & Sanitization**

* Use libraries like `react-hook-form`, `Formik`, and `Yup` to validate and sanitize user input before submission.

### 🧱 d. **CSP (Content Security Policy)**

* Use a strong CSP header from the backend to mitigate XSS risks:

  ```http
  Content-Security-Policy: default-src 'self'; script-src 'self'
  ```

### 🛡️ e. **Disable Developer Tools in Production**

* Use `react-devtools` only in development, and strip them from production.

### 🔐 f. **Secure Routing**

* Use private routes for authenticated pages.
* Ensure route-based access control both on the client and server.

---

## **Scalability**

> For scalability, I adopt modular architecture, lazy-load components with Suspense, use state management solutions like Redux, and apply performance optimization techniques like memoization and virtualization.


## ⚙️ 2. **Scalability Best Practices**

### 🧩 a. **Component Architecture**

* Break down into reusable, stateless components.
* Group by features (feature-based folders) instead of layers.

### 📦 b. **State Management**

* Use **Context API** for light state.
* Use **Redux, Zustand, Recoil, or Jotai** for large-scale apps.
* Modularize store for separation of concerns.

### ⚡ c. **Code Splitting**

* Use **React.lazy** and **Suspense** to load components as needed:

  ```js
  const Profile = React.lazy(() => import('./Profile'));
  ```

### 🚀 d. **Performance Optimization**

* Memoize components (`React.memo`, `useMemo`, `useCallback`).
* Avoid unnecessary re-renders.
* Use virtualization libraries (`react-window`, `react-virtualized`) for long lists.

### ☁️ e. **Scalable Folder Structure**

```
src/
  components/
  features/
  services/
  hooks/
  utils/
  routes/
  store/
```

### 📱 f. **Responsive Design**

* Use CSS-in-JS, Tailwind CSS, or SCSS.
* Ensure the UI adapts to various screen sizes.

---

## 🌐 3. **API Integration**

* Use Axios or Fetch with interceptors for attaching tokens.
* Retry failed requests and handle global errors gracefully.
* Implement **rate limiting** and **throttling** where needed on backend.

---

## 🔐 4. **Authentication Strategy**

* Use OAuth, Auth0, Firebase, or your backend JWT implementation.
* Store JWT in HttpOnly cookies to prevent XSS attacks.
* Use refresh tokens securely for re-authentication.

---

## 🚨 5. **Security Headers from Server**

Ensure backend sends headers like:

* `X-Content-Type-Options: nosniff`
* `Strict-Transport-Security: max-age=63072000; includeSubDomains`
* `X-Frame-Options: DENY`
* `Referrer-Policy: no-referrer`

---

## 📈 6. **Monitoring and Logging**

* Use services like:

  * **Sentry** or **LogRocket** for error logging
  * **Google Analytics / Segment** for performance tracking
* Enable React’s Profiler in development for performance analysis.

---

## 🧪 7. **Testing Strategy**

* Unit Tests: `Jest`, `React Testing Library`
* E2E Tests: `Cypress`, `Playwright`
* Snapshot tests for UI consistency

---


---


## **Unit test external API call**


### 🗣️ **Strong Interview-Style Answer:**

 - "In Angular, I use the built-in `HttpClientTestingModule` and `HttpTestingController` to mock external API calls during unit tests.

 - Instead of making real HTTP requests, the `HttpTestingController` intercepts and handles HTTP calls made by the service.
 
 - This allows me to assert that the request was made correctly and provide a mock response.

 - This approach keeps my tests fast, isolated, and independent of backend availability or external APIs."

### 🧠 Key Points to Emphasize in Interview:

* Use `HttpClientTestingModule` for unit tests involving HTTP.
* Use `HttpTestingController` to intercept and mock requests.
* Avoid real API calls during unit tests.
* Always call `httpMock.verify()` in `afterEach()` to ensure all requests are handled.
* Use `flush()` to simulate server response.

---


###  **Step-by-Step Example**

Suppose you have a service that fetches data from an external API:

---

📁 `data.service.ts`

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://api.example.com/users');
  }
}
```

---

📁 `data.service.spec.ts` – **Mocking External API**

```ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no unmatched requests
  });

  it('should mock external API call and return users', () => {
    const mockUsers = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('https://api.example.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers); // Mock response
  });
});
```

---






### **Unit testing in NodeJs using Jest**

 - “In Node.js, I use **Jest** as my testing framework because it's fast, has built-in assertions, and supports mocking out of the box.

 - I structure my code so that business logic is separated from external services like databases or APIs. That makes it easy to test using **Jest mocks** or **manual stubs**.

 - For example, if I have a service function that fetches a user by ID from a database, I mock the database module in the test to control the response.
 - This way, I can test both successful and error paths without relying on a real database.”

---

### 🔑 What to Emphasize in Interview:

* **Jest’s built-in mocking** (`jest.mock()`).
* Use of **`async/await`** and `mockResolvedValue`, `mockRejectedValue`.
* Keeping external modules (like DB or APIs) mockable.
* Testing **both success and failure paths**.

---

### 🚀 Optional Follow-Up (if asked):

 - "For more complex logic or class-based services, I sometimes use `jest.spyOn()` to mock specific methods without mocking the entire module.
 - And for HTTP APIs, I use `supertest` for integration tests."


###  Real Jest Example

📁 `userService.js`

```js
const db = require('./db'); // external DB module

async function getUserById(id) {
  if (!id) throw new Error('ID is required');
  return await db.findUserById(id);
}

module.exports = { getUserById };
```

---

📁 `userService.test.js`

```js
const { getUserById } = require('./userService');
const db = require('./db'); // we will mock this

jest.mock('./db'); // Jest auto-mocks the module

describe('getUserById', () => {
  it('should return user when ID is valid', async () => {
    const mockUser = { id: '123', name: 'Alice' };
    db.findUserById.mockResolvedValue(mockUser);

    const result = await getUserById('123');
    expect(result).toEqual(mockUser);
    expect(db.findUserById).toHaveBeenCalledWith('123');
  });

  it('should throw error if ID is missing', async () => {
    await expect(getUserById()).rejects.toThrow('ID is required');
  });

  it('should throw if DB call fails', async () => {
    db.findUserById.mockRejectedValue(new Error('DB failure'));
    await expect(getUserById('123')).rejects.toThrow('DB failure');
  });
});
```





## **Unit testing in Nodejs using Mocha and Chai**

 - “In Node.js, I often use **Mocha** as the test runner and **Chai** for assertions.
 - Mocha provides a flexible structure for test suites, while Chai's `expect` or `should` syntax makes assertions more readable.
 -  I write modular functions that are easy to test in isolation. When external dependencies like databases or APIs are involved, I use **Sinon** to mock or stub them.
 -  Here's an example where I tested a simple service that fetches a user by ID from a mocked database.”

---

### 🔑 Key Concepts to Mention in Interview:

* **Mocha** handles `describe`, `it`, and async test cases.
* **Chai** provides expressive assertions with `expect`, `assert`, or `should`.
* **Sinon** is used to mock or stub external dependencies (like DB or HTTP calls).
* You test both **positive and negative paths** — success, missing parameters, and error scenarios.
* Using `sinon.restore()` or `afterEach` to clean up stubs/mocks between tests.

---

### 🚀 Optional Closing Line:

> “This setup gives me fine-grained control over mocking and keeps tests fast and predictable. For integration tests, I may use Supertest to hit real HTTP routes.”



###  Real Example Using Mocha + Chai

📁 `userService.js`

```js
const db = require('./db'); // Assume this is your database module

async function getUserById(id) {
  if (!id) throw new Error('ID is required');
  return await db.findById(id);
}

module.exports = { getUserById };
```

---

📁 `userService.test.js`

```js
const { expect } = require('chai');
const sinon = require('sinon');
const db = require('./db');
const { getUserById } = require('./userService');

describe('getUserById', () => {
  afterEach(() => {
    sinon.restore(); // Reset mocks
  });

  it('should return user when valid ID is given', async () => {
    const mockUser = { id: '101', name: 'Alice' };
    sinon.stub(db, 'findById').resolves(mockUser);

    const user = await getUserById('101');
    expect(user).to.deep.equal(mockUser);
  });

  it('should throw an error if ID is missing', async () => {
    try {
      await getUserById();
    } catch (err) {
      expect(err.message).to.equal('ID is required');
    }
  });

  it('should throw error if DB call fails', async () => {
    sinon.stub(db, 'findById').rejects(new Error('DB Error'));

    try {
      await getUserById('123');
    } catch (err) {
      expect(err.message).to.equal('DB Error');
    }
  });
});
```





## **Troubleshoot and debug issue**

 - I have strong analytical skills, and I take a structured, proactive approach to debugging and troubleshooting in Node.js.
 - I focus on isolating the root cause by breaking down problems logically.
 -  For example, when debugging a performance bottleneck in a Node.js API, I don’t just rely on console logs —
 -  I use tools like **Chrome DevTools for Node**, **`node --inspect`**, or **profiling with `clinic.js` or `0x`** to visualize what’s really happening under the hood.
 -  I’m also proactive: I implement logging using tools like **Winston** or **Pino**, and I set up alerts and monitoring through **PM2**, **Elastic Stack**, or **Datadog**.
 -  This helps catch issues early before they escalate.
 -  I write modular, testable code so I can write **unit tests with Jest or Mocha/Chai**, and
 -  I use **debuggers and breakpoints** instead of just `console.log()` when investigating complex issues.

---

**Example Scenario You Can Use**
 - Once, a Node.js microservice was randomly hanging under load. I suspected a memory leak or unhandled promise.
 - I used `node --inspect` with Chrome DevTools to trace memory snapshots, and saw growing detached DOM objects. It turned out a file stream wasn’t being closed properly. I added a proper cleanup step, wrote unit tests around it, and added metrics to ensure it wouldn’t reoccur.
 - This kind of proactive root-cause analysis saves a lot of firefighting later.”

**Key Points to Emphasize**
* **Structured debugging**: isolate, reproduce, trace, resolve.
* Use of **debugging tools**: `node --inspect`, Chrome DevTools, Visual Studio Code debugger.
* **Proactive practices**: logging, monitoring, alerts, test coverage.
* **Root-cause focus**: not just fixing symptoms, but preventing future issues.
* Collaboration: knowing when to escalate or loop in backend/infrastructure teams if needed.



- **"Sure. When it comes to troubleshooting and ensuring system reliability, I follow a very structured and hands-on approach. Let me break it down:"**

- **"Overall, I don’t just fix bugs — I work to make systems observable, resilient, and capable of recovering without user impact. That’s my mindset when it comes to application reliability."**

**Backend – Node.js Side**

* *I use structured logging tools like Winston or Pino* — and always tag requests with correlation IDs so I can trace the full request-response lifecycle across services.

* *For monitoring,* I’ve worked with Datadog, Elastic Stack, and PM2 to track memory usage, response times, and unhandled exceptions.

* *When I need to debug more complex issues,* I go beyond console logs. I use `node --inspect`, Chrome DevTools for Node.js, or even memory profiling tools like clinic.js or 0x to spot memory leaks or event loop blocking.

* *A quick example:* I once debugged a performance bottleneck by generating a flamegraph with `clinic flame`, and found a loop doing blocking I/O. Refactored that with async queuing and saw huge gains.

**Frontend – React Side**

* *On the frontend,* I integrate Sentry or LogRocket to capture real-time errors, track user sessions, and diagnose issues from the user’s perspective.

* *I also monitor Web Vitals — like LCP, CLS, and FID —* to catch layout shifts or slow loads that impact user experience.

* *I use Error Boundaries* and always wrap lazy-loaded components with fallback UIs to gracefully handle component crashes.

* *In one project,* we had random crashes during client-side routing. I traced it to a race condition in a dynamic import. Refactored the async logic and wrapped it in an ErrorBoundary — and it never recurred.


**My Debugging Workflow**
* *First,* I always try to reproduce the issue — using logs, the exact user session, or test data.
* *Then,* I dig into logs, use breakpoints, inspect call stacks — anything that helps isolate the root cause logically.
* *I write regression tests immediately* — Jest for unit tests, Supertest for APIs, and Cypress for user flows.
* *And I push everything through CI pipelines* that check for linting, test coverage, and performance audits via Lighthouse.

**Post-Incident Practices**
* *If the issue was critical,* I always conduct a post-incident review.
* *For example,* a Redis TTL misconfiguration once led to a DB spike. We fixed the TTL, added circuit breakers, and ensured the system could gracefully fall back.









## ESLint

 - Yes, I’ve used ESLint extensively in all my modern JavaScript and TypeScript projects. 
 - ESLint is a static code analysis tool that helps identify and fix problems in your code — from simple syntax errors to complex style and consistency issues.
 - It’s especially useful for enforcing coding standards across teams.
 - I usually integrate ESLint with Prettier for formatting and set up strict rules using popular configs like eslint:recommended or @typescript-eslint.
 - For React projects, I use the eslint-plugin-react and eslint-plugin-react-hooks packages to ensure best practices with hooks and JSX.
 - In larger teams, I’ve set up shared ESLint configurations to maintain consistency across multiple apps or packages — especially in monorepos using Nx.
 - ESLint also integrates well with CI/CD, so I’ve configured it to run as part of pull request checks to catch issues early.
 - One of the key benefits is that ESLint is highly customizable
 -  I can write custom rules, override rules per file or directory, and even auto-fix a large percentage of issues with eslint --fix.
 -  Overall, ESLint is essential for improving code quality, catching bugs early, and enforcing consistent code styles — especially when working in collaborative or large-scale environments."

```js
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/jsx-uses-react': 'off', // Not needed with React 17+
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
```

This config uses:
 - @eslint/js: base rules
 - @typescript-eslint: for TypeScript support
 - eslint-plugin-react & react-hooks: for React + hooks linting
 - globals: enables window, document, etc.
 - 






### Input Validate 



- In Node.js, input validation ensures that incoming data (from APIs, forms, etc.) meets required formats, types, and constraints.
- It’s a **critical security measure** to prevent injection attacks and ensure data integrity.
- Input validation in Node.js is best done using schema-based libraries like **Joi** or **express-validator**, which are **robust, readable, and secure**, making them ideal for production APIs and microservices.

---

---

### 🔍 Common Approaches:

#### 1. **Using Validation Libraries (Preferred)**

* Popular and widely used:

  * **Joi** (part of hapi ecosystem)
  * **express-validator** (middleware for Express.js)
  * **yup** (schema-based validation)

#####  Joi Example:

```js
const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(0)
});

const { error, value } = schema.validate(req.body);
if (error) return res.status(400).send(error.details[0].message);
```

#####  express-validator Example:

```js
const { body, validationResult } = require('express-validator');

app.post('/user', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
});
```

---

### 🔐 Why Input Validation Matters:

* Prevents **SQL/NoSQL injection**
* Avoids **application crashes** from unexpected input
* Protects against **XSS** and other exploits
* Enforces **data quality and contracts**

---

### 📦 Validation Best Practices:

* Validate **on both frontend and backend**
* Sanitize input to remove harmful content
* Use **centralized validation schemas**
* Reject unknown/unexpected fields (`stripUnknown: true` in Joi)

---





## **Function Composition Patterns**



**Function composition** refers to the technique of combining two or more functions to create a new function. The output of one function is passed as the input to the next. It allows for creating more modular, reusable functions.

- **Example**:
  ```javascript
  const add = (a) => a + 2;
  const multiply = (a) => a * 3;

  const compose = (f, g) => (x) => f(g(x));  // Composition of two functions

  const result = compose(add, multiply)(5);  // multiply(5) -> 15, add(15) -> 17
  console.log(result); // Output: 17
  ```

In this example, we composed `add` and `multiply` functions, which means `multiply(5)` is executed first, and the result is passed into `add(15)`.

---










---

## **CORS**

 - **CORS** stands for **Cross-Origin Resource Sharing**. 
 - It's a **security feature implemented by browsers** to restrict web pages from making **requests to a different origin** than the one that served the page.
 - By default, browsers block **cross-origin AJAX calls** for security. CORS is a protocol that allows the **server** to indicate which origins are permitted.
 - It’s primarily a **backend concern**. The **frontend** just makes the request; the **backend must respond with the correct headers** to allow or deny it.

---



An **origin** is defined as a combination of:

* **Scheme** (http or https) +  * **Domain** + * **Port**

Example:
`http://example.com:3000` ≠ `https://example.com` ≠ `http://api.example.com`

---



Your **frontend** (React app) runs on `http://localhost:3000`, and your **backend API** runs on `http://localhost:5000`.

If you try this in React:

```js
fetch('http://localhost:5000/api/data')
```

The browser will block it unless the **backend includes CORS headers**.

---

### 🔐 **CORS Response Header Example (from backend):**

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

### ⚙️ **How to enable CORS in Node.js (Express):**

```js
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
```

---


 - For **non-simple requests** (e.g., using `PUT`, `DELETE`, or custom headers), the browser sends an **OPTIONS** request first to check permissions.
 - Your server must respond properly, or the main request will be blocked.

 - * **Same-origin policy** is the default browser behavior that **blocks cross-origin requests**.
 - * **CORS** is the mechanism to **relax** that restriction by letting the **server** explicitly **allow certain origins**.

| Type          | Characteristics                                                               |
| ------------- | ----------------------------------------------------------------------------- |
| **Simple**    | `GET`, `POST`, `HEAD`, no custom headers, content-type is text/plain or form  |
| **Preflight** | Uses methods like `PUT`, `DELETE`, or has custom headers like `Authorization` |



##  **Microfrontend design pattern**


- The **Microfrontend** design pattern applies the concept of **microservices to the frontend**.
- It breaks a large monolithic frontend into **smaller, independent, and loosely coupled applications**
- Each owned by different teams and responsible for a specific business feature.

Each microfrontend can:

- * Be developed using **different frameworks** (e.g., React, Angular, Vue)
- * Be **deployed independently**
- * Integrate at runtime into a **shell or container app**

- This pattern improves **team autonomy**, **scalability**, and allows **incremental upgrades** without rewriting the entire app.


- In my experience, microfrontends work best when the organization is structured for it — with cross-functional teams owning features end-to-end. 
- I've used tools like Webpack Module Federation to integrate and deploy independent React apps into a container seamlessly.

---

###  **Example:**

In an e-commerce platform:

* The **Product page** might be a React app,
* The **Cart module** might be built in Angular,
* The **User profile** in Vue — all loaded into one unified frontend.

---

### 🔧 **Common Tools & Technologies:**

* **Webpack Module Federation** – for sharing code and modules at runtime
* **Single-SPA** – for orchestrating microfrontends
* **Web Components** – for framework-agnostic encapsulation
* **Nx or Turborepo** – for monorepo support

---

### 🚧 **Challenges & Solutions:**

| Challenge        | Solution                                         |
| ---------------- | ------------------------------------------------ |
| Shared state     | Use global events, Redux, or shared context APIs |
| CSS conflicts    | Use CSS Modules or Shadow DOM                    |
| Auth/session     | Centralized auth layer or shared tokens          |
| Version mismatch | Align shared dependencies via Module Federation  |

---

###  **When to use:**

* Large teams working on different frontend features
* Need for independent deployment
* Migrating from monolith to modular

### ❌ **Avoid when:**

* The app is small or single-team owned — adds unnecessary complexity

---


### 🚀 Tips

* You need to enable CORS for cross-origin loading.
* Each app should use `publicPath: 'auto'` for dynamic asset loading.
* You can deploy these apps independently (e.g., on different S3 buckets or subdomains).

---

### 🔧 Architecture Overview

| App                | Tech    | Port |
| ------------------ | ------- | ---- |
| `container`        | React   | 3000 |
| `app1` (Header)    | React   | 3001 |
| `app2` (Profile)   | Vue 3   | 3002 |
| `app3` (Dashboard) | Angular | 3003 |

All apps expose a component via Module Federation, and the **container** consumes them dynamically.

---

### 1️⃣ `app1` – React (Header)

#### 📁 Exposed Component

```jsx
// src/Header.js
export default function Header() {
  return <h1>This is Header from App1 (React)</h1>;
}
```

#### 🛠 webpack.config.js

```js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3001 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
```

---

### 2️⃣ `app2` – Vue (Profile)

#### 📁 Exposed Component

```vue
<!-- src/components/Profile.vue -->
<template><div>This is Profile from App2 (Vue)</div></template>
<script>
export default {
  name: "Profile"
}
</script>
```

#### 🛠 webpack.config.js

```js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3002 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Profile': './src/components/Profile.vue',
      },
      shared: ['vue'],
    }),
  ],
};
```

---

### 3️⃣ `app3` – Angular (Dashboard)

#### 📁 Exposed Component

```ts
// dashboard.component.ts
@Component({
  selector: 'app-dashboard',
  template: `<div>This is Dashboard from App3 (Angular)</div>`
})
export class DashboardComponent {}
```

#### 🛠 webpack.config.js (via Angular CLI)

```ts
// webpack.config.js (custom for Angular with Module Federation)
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: { publicPath: "auto" },
  devServer: { port: 3003 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app3',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/app/dashboard/dashboard.component.ts',
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
      },
    }),
  ],
};
```

---

### 🧩 `container` – React (Main App)

#### 🛠 webpack.config.js

```js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3000 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js',
        app3: 'app3@http://localhost:3003/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
```

#### 📁 Usage in Container App

```jsx
const Header = React.lazy(() => import('app1/Header'));
const Profile = React.lazy(() => import('app2/Profile'));
const Dashboard = React.lazy(() => import('app3/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Profile />
      <Dashboard />
    </Suspense>
  );
}
```

---



## Plugins

## 🎯 Summary

| Concept  | Description                                             |
| -------- | ------------------------------------------------------- |
| **What** | Plugins extend the build tool's capabilities            |
| **Why**  | To customize, optimize, and automate the build          |
| **How**  | By tapping into the build process lifecycle (via hooks) |

---


##  1. **What are Plugins?**

**Plugins** are tools that extend the functionality of build tools like **Webpack**, **Vite**, or **Rollup**.
They hook into the **build lifecycle** and allow you to **customize, optimize, or transform** your application in powerful ways.

They are **not the same** as loaders (which transform individual files).

---

## 🔍 2. **Why Use Plugins?**

| Need / Goal                      | Use a Plugin for…                   |
| -------------------------------- | ----------------------------------- |
| Minifying JavaScript             | `TerserPlugin`, `esbuild-minify`    |
| Analyzing bundle size            | `webpack-bundle-analyzer`           |
| Extracting CSS to separate files | `MiniCssExtractPlugin`              |
| Enabling hot module replacement  | `HotModuleReplacementPlugin`        |
| Injecting global variables       | `DefinePlugin`, `EnvironmentPlugin` |
| Federation for Micro-Frontends   | `ModuleFederationPlugin`            |
| Copying static assets            | `CopyWebpackPlugin`                 |

---

## ⚙️ 3. **How Plugins Work**

In tools like **Webpack**, plugins are classes with `apply()` methods that tap into compiler hooks:

```js
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('MyPlugin', (compilation) => {
      console.log('Build is about to emit files!');
    });
  }
}
```

Then in `webpack.config.js`:

```js
plugins: [new MyPlugin()]
```

---

## 🧰 4. **Examples in Webpack**

### a. `DefinePlugin` – Inject environment variables

```js
plugins: [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
]
```

### b. `MiniCssExtractPlugin` – Separate CSS file output

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

plugins: [
  new MiniCssExtractPlugin({ filename: '[name].css' })
]
```

### c. `ModuleFederationPlugin` – Share components between apps

```js
new ModuleFederationPlugin({
  name: 'app1',
  filename: 'remoteEntry.js',
  exposes: {
    './Header': './src/Header',
  },
  shared: ['react'],
});
```

---





## **Webpack Loaders**


##  Summary

* Loaders handle **file transformations**.
* Declared inside `module.rules` using `test`, `use`, etc.
* They **chain**, and order matters!

---

**Loaders** in Webpack transform the source code of a module **before** it is added to the dependency graph (i.e., before bundling).

> Loaders let Webpack process **non-JS files** like `.css`, `.scss`, `.ts`, `.png`, `.vue`, etc.

---

## 🔍 2. **Why Use Loaders?**

| File Type         | Loader Used                   | Purpose                                 |
| ----------------- | ----------------------------- | --------------------------------------- |
| JavaScript (ES6+) | `babel-loader`                | Convert ES6+ to ES5 for browser support |
| TypeScript        | `ts-loader` / `babel-loader`  | Compile `.ts` to `.js`                  |
| CSS/SCSS          | `css-loader` + `style-loader` | Load CSS and inject into DOM            |
| Images            | `file-loader` / `url-loader`  | Import images into JS                   |
| HTML              | `html-loader`                 | Load HTML files into JS                 |
| Vue               | `vue-loader`                  | Process `.vue` single-file components   |

---

## 🧰 3. **How Loaders Work**

You define **rules** in `webpack.config.js` using the `module.rules` array.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,          // Files to apply this rule to
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  }
}
```

---

## 🔁 4. **Loader Execution Order**

* If you use **multiple loaders**, they run **from right to left (or bottom to top)**.

```js
use: ['style-loader', 'css-loader']
// 1. css-loader transforms CSS into CommonJS
// 2. style-loader injects it into the DOM
```

---

## 📦 5. **Common Loader Config Examples**

###  JavaScript with Babel

```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'babel-loader',
}
```

###  TypeScript

```js
{
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}
```

###  CSS

```js
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}
```

###  SCSS/SASS

```js
{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
}
```

###  Image Files

```js
{
  test: /\.(png|jpg|gif|svg)$/,
  type: 'asset/resource', // Webpack 5 built-in alternative to file-loader
}
```

---

## ⚙️ 6. Loaders vs Plugins

| Aspect   | Loaders                             | Plugins                            |
| -------- | ----------------------------------- | ---------------------------------- |
| Purpose  | Transform files during bundling     | Extend Webpack’s capabilities      |
| Use Case | Compile TS, load CSS, import images | Bundle optimization, env injection |
| Executes | Per file                            | At specific build lifecycle stages |

---

## 🧠 Bonus: Inline Loader (rare)

```js
import styles from 'style-loader!css-loader!./styles.css';
```

(Not recommended – use `webpack.config.js` instead.)

---






##  Webpack Optimization

Webpack's optimization features help you:

* Reduce **bundle size**
* Improve **performance**
* Enable **better caching**
* Decrease **load times**

> These features are mostly configured under the `optimization` field in `webpack.config.js`.

---

## 🛠️ Key Optimization Techniques

### 1. **Mode: 'production'**

```js
mode: 'production'
```

Enables many optimizations by default:

* Minification
* Tree-shaking
* Scope hoisting
* Module concatenation

---

### 2. **Tree Shaking (Remove Unused Code)**

Works automatically in production mode **with ES6 modules** (`import/export`).

**Don't use `require()`** if you want tree shaking to work.

```js
// Only what is used will be included
import { usefulFunction } from './utils';
```

---

### 3. **Code Splitting**

Split code into smaller chunks:

```js
optimization: {
  splitChunks: {
    chunks: 'all',
  },
}
```

This will:

* Extract vendor code (`node_modules`) into a separate bundle
* Enable lazy loading of routes/components

---

### 4. **Minification**

#### JavaScript

```js
optimization: {
  minimize: true,
  minimizer: [new TerserPlugin()],
}
```

#### CSS

```js
optimization: {
  minimizer: [new CssMinimizerPlugin()]
}
```

---

### 5. **Caching Optimization**

Use **content hashing** in filenames to take advantage of browser caching:

```js
output: {
  filename: '[name].[contenthash].js',
}
```

---

### 6. **Tree Shakable Libraries**

Prefer:

* **lodash-es** over `lodash`
* **date-fns** over `moment.js`

These are modular and shakeable.

---

### 7. **Remove Dead Code with `sideEffects: false`**

In `package.json`:

```json
"sideEffects": false
```

Or more selectively:

```json
"sideEffects": ["./src/styles.css"]
```

Helps Webpack know what’s safe to eliminate.

---

### 8. **Compression Plugins**

Use gzip or Brotli:

```js
const CompressionPlugin = require('compression-webpack-plugin');

plugins: [
  new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
  })
]
```

---

### 9. **Bundle Analysis**

See what’s inside your bundle:

```sh
npm install --save-dev webpack-bundle-analyzer
```

```js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

plugins: [new BundleAnalyzerPlugin()]
```

---

### 10. **Scope Hoisting**

Enabled in production mode using **module concatenation**.

```js
optimization: {
  concatenateModules: true,
}
```

---

## 🧠 Extra: Performance Hints

```js
performance: {
  hints: 'warning', // or 'error'
  maxAssetSize: 200000, // 200 KB
}
```

---

##  Summary Table

| Optimization         | Purpose                         |
| -------------------- | ------------------------------- |
| `mode: 'production'` | Enables all basic optimizations |
| Tree shaking         | Remove unused code              |
| SplitChunksPlugin    | Code splitting                  |
| TerserPlugin         | JS minification                 |
| CssMinimizerPlugin   | CSS minification                |
| Content hashing      | Long-term caching               |
| CompressionPlugin    | Smaller network transfers       |
| BundleAnalyzerPlugin | Visualize bundle size           |

---

## 🧪 Sample `optimization` Block

```js
optimization: {
  minimize: true,
  minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  splitChunks: {
    chunks: 'all',
  },
  runtimeChunk: 'single',
  concatenateModules: true,
}
```




Absolutely! Here's a **real-time use case** applying **DRY**, **KISS**, and **SOLID** principles in a typical **React + Node.js** application scenario.

---

## 🧪 **Use Case: E-Commerce Product Management System**

> You’re building a system to manage products: create, edit, list, apply discounts, and log actions.

---

## 🔁 1. **DRY**

- (Don't Repeat Yourself)
- **Real-time Benefit**: If business logic changes to 15%, you only update **one place**, not many.

---

### ❌ Bad (duplicate discount logic in backend):

```js
// controller.js
function applyDiscount(price) {
  return price - (price * 0.1);
}

// somewhere else
function calculateLoyaltyDiscount(price) {
  return price - (price * 0.1); // repeated logic
}
```

###  Good:

```js
// utils/discount.js
export function applyDiscount(price, rate = 0.1) {
  return price - (price * rate);
}

// Usage
applyDiscount(100); // apply 10% discount everywhere consistently
```











## 🧩 Summary Table with Real Use Case

| Principle | Real Use Case Example                             |
| --------- | ------------------------------------------------- |
| DRY       | Shared discount logic in utility file             |
| KISS      | Keep `ProductCard` logic minimal                  |
| S         | Separate ProductService and Logger                |
| O         | Use `DiscountStrategy` classes                    |
| L         | Replace `Product` with `DiscountedProduct` safely |
| I         | Use separate interfaces for scan/print devices    |
| D         | Inject services instead of hard coding            |

---


##  **SonarQube:** 

---

###  **SonarQube Details:** 


 - SonarQube is a **static code analysis tool** we’ve used regularly to maintain code quality in both frontend and backend projects.

 - It helps detect **bugs**, **code smells**, **security vulnerabilities**, and even **test coverage gaps** automatically.

 - In my recent project — a React + Node.js microservices architecture — we integrated SonarQube with **GitHub Actions**. Every pull request would trigger the Sonar scan, and if the code didn’t meet the **quality gate criteria** (like minimum coverage, no critical issues), the build would fail.

 - This really helped enforce clean, maintainable, and secure code across the team.

---

### **SonarQube typically catch:**


 - It catches a wide range of issues. For example:

 - * In React apps, it flags **unused imports**, **duplicate JSX blocks**, and complex component logic as **code smells**.
 - * In Node.js APIs, it warns about **potential null checks**, **unused variables**, and even flags **security issues** like using `eval` or missing input validation.

 - It also analyzes **code duplication**, so we can refactor repetitive logic into reusable utilities or hooks.

---

### **Sonar quality gate** 


 - A **Quality Gate** is basically a set of thresholds or rules Sonar applies to decide if the code passes or fails a scan.

 - For example, we had a quality gate that required:

 - * No new **critical bugs or vulnerabilities**
 - * At least **80% code coverage** on new code
 - * Less than **3% code duplication**

 - If a PR didn’t meet these, Sonar would fail the check and block the merge — which was super helpful for maintaining discipline across teams.

---

### **Sonar - Real issue**


 - Absolutely. In one case, Sonar flagged a critical issue in our Node.js backend where a function was returning early without sanitizing user input.

 - It didn’t break the app immediately, but it could have opened a security hole. Thanks to Sonar, we caught it during code review — before it reached staging.

---

### **SonarQube CI/CD process** 


 - We added a **`sonar-scanner` step in our GitHub Actions pipeline**. On every push or pull request, Sonar:

 - 1. Runs static analysis on JS/TS code
 - 2. Collects test coverage reports from Jest
 - 3. Pushes the results to our **SonarQube dashboard**

 - If the quality gate fails, the build stops right there. This automation helped reduce manual review load and kept our codebase consistently clean.

---

### **Sonar practices followed**


 - A few that worked really well:

 - * We **customized quality profiles** to focus only on relevant rules for our tech stack.
 - * Integrated **test coverage reports** (`lcov.info`) for both backend and frontend using Jest.
 - * Educated the team to **treat Sonar issues like failed builds**, not optional warnings.
 - * Scheduled **weekly Sonar checks** on the `develop` branch to catch long-term issues, not just new PRs.

---




## **Code Quality** 



 - To me, **code quality** means writing software that is:
 	- **Readable** – easy for others to understand
 	- **Maintainable** – easy to change or extend
 	- **Reliable** – free from obvious bugs or fragile logic
 	- **Testable** – covered by unit/integration tests
 	- **Consistent** – follows agreed coding standards
 - It’s not just about whether the code “works,” but whether it’s **clean, scalable, and production-ready**.


 - Static Analysis Tools (SonarQube, ESLint)
 - Test Coverage, Cyclomatic Complexity
 - CI/CD Integration (GitHub Actions, Jenkins)
 - Clean Code Principles (SOLID, DRY, KISS)
 - Type Safety (TypeScript)
 - Code Review Culture
 - Feature Toggle for safe deployment






## **CI CD** 


 - Yes, definitely. **CI/CD** stands for:
 - * **CI – Continuous Integration**: Automatically builds and tests the code whenever developers push changes to a shared repository.
 - * **CD – Continuous Deployment/Delivery**: Automatically deploys the validated code to staging or production environments.
 - In my React + Node.js projects, I’ve used tools like **GitHub Actions** and **Jenkins** to set up CI/CD pipelines that:
 - 1. **Install dependencies**
 - 2. **Lint** the code
 - 3. **Run unit tests**
 - 4. **Build the React app**
 - 5. **Run backend tests**
 - 6. Deploy to **Netlify / Vercel** (for React) and **Heroku / AWS / Docker** (for Node.js APIs)

---

### 🧰 **Tools Commonly Used**

| Tool              | Purpose                     |
| ----------------- | --------------------------- |
| GitHub Actions    | CI/CD workflow automation   |
| Jest              | Testing (React + Node.js)   |
| ESLint + Prettier | Code linting and formatting |
| Docker            | Containerizing the app      |
| Netlify/Vercel    | React app hosting           |
| Heroku/AWS        | Node.js API hosting         |

---





###  **CI/CD Benefits in Real Projects**

* **Immediate feedback** on pull requests (faster bug detection)
* **Prevents bad code** from reaching production (through quality gates)
* **Ensures test coverage** is maintained
* **Faster, safer deployments** via automation
* Supports **zero-downtime releases** when integrated with Docker + Kubernetes

---

### 🧠 **Bonus: Best Practices**

* Keep your pipeline **fast and modular**
* Fail the pipeline if **lint or tests fail**
* Use **Secrets Manager** (e.g., GitHub Secrets) to store tokens and keys
* Use **Docker** for consistent builds
* Add **Slack or Email notifications** for pipeline status

---





## **React Security**

 - Security is critical in any frontend application, especially in React, which runs entirely in the browser.
 -  While React itself helps reduce some risks, we still need to be proactive about common web vulnerabilities like:

* **Cross-Site Scripting (XSS)**
 * **Insecure APIs**
 * **Exposure of sensitive data**
 * **Clickjacking**
 * **Improper authentication/authorization**

 -  We follow best practices at both the **React layer** and the **backend/API layer** to secure the app end-to-end.

---

### 🔐 Key Security Risks in React + Mitigations

---

#### 1. **Cross-Site Scripting (XSS)**

🧨 **Risk**: Injected scripts in JSX/HTML can compromise user sessions, steal tokens, etc.

 **Mitigation**:

* Never use `dangerouslySetInnerHTML` unless absolutely necessary.
* Sanitize user input on both frontend and backend using libraries like `DOMPurify`.
* React escapes content by default in JSX:

  ```jsx
  <div>{userInput}</div> // safe by default
  ```

---

#### 2. **Exposing Sensitive Data**

🧨 **Risk**: Hardcoding secrets (API keys, tokens) in React bundles.

 **Mitigation**:

* Never include secrets in frontend code or `.env` files that are bundled.
* Store secrets in secure backend environments and access them via API.

---

#### 3. **Insecure API Communication**

🧨 **Risk**: APIs over HTTP or without proper auth can be intercepted or misused.

 **Mitigation**:

* Always use **HTTPS**.
* Use **JWT** or **OAuth2** for authentication.
* Use **refresh tokens** with proper expiry and rotation policies.
* Validate all API requests server-side, even if frontend has validations.

---

#### 4. **Improper Authorization in UI**

🧨 **Risk**: Hiding buttons/links isn’t enough — users can still call APIs.

 **Mitigation**:

* Always enforce authorization at the **API layer**.
* Role-based UI rendering should **mirror** backend access control.

```jsx
{user.role === 'admin' && <DeleteButton />}
```

But also validate `DELETE` API permissions on the backend.

---

#### 5. **Clickjacking**

🧨 **Risk**: Attacker embeds your site in a hidden iframe to trick users into clicking.

 **Mitigation**:

* Use HTTP headers like:

  ```
  X-Frame-Options: DENY
  Content-Security-Policy: frame-ancestors 'none'
  ```

---

#### 6. **Package Vulnerabilities**

🧨 **Risk**: Using outdated or vulnerable NPM packages.

 **Mitigation**:

* Run `npm audit`, use tools like **Snyk** or **OWASP Dependency-Check**
* Use **yarn.lock / package-lock.json** to lock versions.
* Review third-party libraries, especially ones that interact with the DOM or user input.

---

#### 7. **CSRF (Cross-Site Request Forgery)**

🧨 **Risk**: Not usually a React issue, but applicable when using cookies for auth.

 **Mitigation**:

* Prefer **token-based auth (JWT)** instead of cookies.
* Use **SameSite** and **HttpOnly** flags on cookies.
* Use CSRF tokens for state-changing requests.

---

### 🧪 Bonus: Secure Coding Best Practices in React

| Practice                              | Description                                 |
| ------------------------------------- | ------------------------------------------- |
|  Don’t trust client-side validations | Always validate on the backend              |
|  Use HTTPS everywhere                | Protects all traffic from MITM attacks      |
|  Limit CORS policies                 | Restrict allowed domains for APIs           |
|  Avoid inline styles/scripts         | Helps enforce CSP (Content Security Policy) |
|  Set security headers                | Use Helmet.js on the backend                |

---

### 🎯 Tools You Can Mention

* **Helmet.js** – to secure Express APIs
* **DOMPurify** – sanitize HTML content
* **JWT/Passport** – authentication
* **Snyk, npm audit** – for dependency vulnerability checks
* **OWASP ZAP** – for security scanning

---

###  TL;DR: 6 React Security Habits

1. Escape content (don’t use `dangerouslySetInnerHTML`)
2. Never expose secrets in React
3. Secure your API with HTTPS and JWT
4. Do role-based rendering and backend validation
5. Sanitize all user-generated content
6. Regularly audit and update dependencies

---








##  Single SPA

 - **Single-SPA** (Single Single Page Application) is a **microfrontend framework** that allows multiple independent JavaScript applications (built with React, Angular, Vue, etc.) to coexist and run in a single page.


 - Single-SPA is a powerful framework for orchestrating multiple microfrontends in a single browser page. 
 - It lets teams build, test, and deploy independently, even in different frameworks. 
 - It handles routing, lifecycle, and app loading dynamically via SystemJS. 
 - Each app implements `bootstrap`, `mount`, and `unmount` functions, and the root shell manages everything based on URL or route. 
 - It's ideal for large-scale enterprise apps needing scalability, team autonomy, and tech diversity.

---

### 🧪 Advanced Topics You Can Mention

| Topic                        | Summary                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Parcel Configs**           | To simplify lifecycles, use `single-spa-react` or `single-spa-angular` packages. |
| **Lazy loading**             | Apps are loaded on demand based on route.                                        |
| **Shared State**             | Via global store (e.g., Redux in a shared package), or by using an event bus.    |
| **Independent deployments**  | Each app is deployed to a different URL. SystemJS loads them dynamically.        |
| **Versioned microfrontends** | Use dynamic import maps that point to specific versions.                         |

---


###  **Single-SPA solve**

- Single-SPA solves the challenge of scaling frontend applications by **breaking a monolithic frontend into smaller, independently deployable units**, 
- each managed by different teams or using different frameworks.

**Use Case:**
- Your company has a large React monolith that’s hard to scale. 
- One team wants to start using Vue or build new features without modifying the entire codebase. 
- Single-SPA enables that.

---

###  **Single-SPA work under the hood**


- Single-SPA works like a **meta-router and lifecycle manager**:
-  1. You define **routes or conditions** to load different apps.
-  2. It dynamically loads the microfrontend via **SystemJS import maps**.
-  3. Each microfrontend exports `bootstrap`, `mount`, and `unmount` lifecycle functions.
-  4. Single-SPA handles routing and invokes the correct lifecycle methods as the user navigates.

---

###  **Single-SPA lifecycle functions**

Each microfrontend must export:

```js
export const bootstrap = () => Promise.resolve();
export const mount = () => { /* render logic */ };
export const unmount = () => { /* cleanup */ };
```

These are invoked by the root Single-SPA shell based on URL or condition.

---

###  **Single-SPA Routing**

Routing is managed at the **root level**, not inside each microfrontend.

Example:

```js
registerApplication({
  name: 'navbar',
  app: () => System.import('navbar'),
  activeWhen: ['/']
});
```

This tells Single-SPA:

 - "When URL starts with `/`, load the `navbar` microfrontend."

---

###  **Share dependencies between microfrontends**

 - Using **SystemJS** with `externals` and **import maps**, you can load `react`, `react-dom`, etc., **once in the root app**, -  mark them as **external** in other apps' webpack configs.

```js
externals: ['react', 'react-dom']
```

```html
<script type="systemjs-importmap">
  {
    "imports": {
      "react": "https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"
    }
  }
</script>
```

---

###  **Single-SPA alternatives**

| Alternative                    | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| **Webpack Module Federation**  | Shares modules/components, not whole apps                   |
| **Nx Monorepo**                | Not true microfrontend, but enables app separation          |
| **qiankun** (by Ant Financial) | A powerful microfrontend library built on top of Single-SPA |
| **Piral**                      | Plugin-based microfrontend system                           |

---

###  **Real-time Example Scenario**

**Scenario:**

You’re building a large B2B dashboard where:

* HR team builds a **People Management** app in React.
* Finance team owns **Billing** built with Angular.
* Admin builds a shared **Navbar** in Vue.

Using Single-SPA:

* You define each as a separate app.
* You register them in the **root-config** with SystemJS.
* Teams work in isolation, but users experience it as a single seamless SPA.

---

## Session token between micro service



* **Same domain → shared cookie**
* **Different domains → OIDC + IdP (SSO)**

**Same Domain**

* If MFEs are under **one domain** (e.g., `app1.company.com`, `app2.company.com`) → use a **shared HttpOnly cookie** for session.

---

**Different Domains**

* Each microfrontend, no matter the domain, **redirects to the central IdP**.
* The **IdP is the single source of truth for authentication**.
* Once the user logs in, the IdP sets an **SSO cookie**.
* Any other MFE can then **silently reuse that session**.
* Both apps get their own **OIDC tokens**, but the user **logs in only once**.
* The standard way to achieve this is with **OIDC (OpenID Connect)** and a central **Identity Provider (IdP)** like **Auth0, AWS Cognito, or Keycloak**.

---


## **Module Federation**

 - **Module Federation** is a **Webpack 5 feature** that enables multiple independently built and deployed applications (or "microfrontends") to **share code** 
 - like components, utils, or even full apps — **at runtime**.
 - Module Federation allows applications to share modules across runtime boundaries. 
 - It enables dynamic, on-demand loading of components, helps avoid code duplication, and is perfect for microfrontend architecture. 
 - It's highly efficient when you want to scale large apps or load plugins remotely without hard dependencies.

---


### Common Pitfalls

* Ensure **matching React versions** in host and remote
* All apps must use **Webpack 5**
* Always use `React.lazy` and `Suspense` for dynamic loading

---



### 🔁 Module Federation vs Single-SPA

| Feature                 | Module Federation                      | Single-SPA                    |
| ----------------------- | -------------------------------------- | ----------------------------- |
| **Granularity**         | Module/Component level                 | App level (microfrontend)     |
| **Runtime loading**     |  via remoteEntry                      |  via SystemJS                |
| **Routing management**  | ❌ Handled by host (e.g., React Router) |  Built-in to Single-SPA      |
| **Build-time coupling** | Minimal                                | Minimal                       |
| **Shared libraries**    |  via `shared` field                   |  (manually or via externals) |

---



### **Module Federation - Solve?**

> Traditionally, microfrontends needed to bundle shared libraries (like React) with every app, causing duplication and load time bloat. Module Federation allows **shared libraries and components to be loaded from a remote app** dynamically — no duplication, no rebuilds needed.

---

### **Module Federation work**

> Apps are classified into:

* **Host (Container)** – the app that consumes remote code
* **Remote** – the app exposing modules

Both apps are configured to **expose and consume modules** using Webpack’s `ModuleFederationPlugin`.

---

### **Module Federation - Configure**

#### Example: Sharing a React Button from a remote app

### 🔧 Remote App (`app1`)

```js
// webpack.config.js
plugins: [
  new ModuleFederationPlugin({
    name: 'app1',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/components/Button',
    },
    shared: ['react', 'react-dom'],
  }),
],
```

### 🔧 Host App (`app2`)

```js
plugins: [
  new ModuleFederationPlugin({
    name: 'app2',
    remotes: {
      app1: 'app1@http://localhost:3001/remoteEntry.js',
    },
    shared: ['react', 'react-dom'],
  }),
],
```

### Usage in Host App

```js
import React from 'react';
const RemoteButton = React.lazy(() => import('app1/Button'));

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <RemoteButton />
    </React.Suspense>
  );
}
```

---

### **`exposes` and `remotes`**

* **`exposes`**: what modules you make available to others
* **`remotes`**: what modules you want to consume from other apps

---

### **`remoteEntry.js`**

 - It’s a **manifest file** Webpack generates that lists all the modules the app exposes. 
 - The host app reads it to know what’s available to import.

---

### 🏗️ Real-World Use Case

| App         | Responsibility              | Example Shared         |
| ----------- | --------------------------- | ---------------------- |
| `dashboard` | Shell/Container             | Imports charts         |
| `user-app`  | Auth and profile management | Exposes login form     |
| `admin-app` | CMS for admin users         | Exposes settings panel |

Each team deploys their app separately. The shell app (`dashboard`) dynamically pulls shared modules from these.

---













## **Types of Testing in Software Development**



There are several types of testing that help ensure the quality and functionality of the software:

- **Unit Testing**: Focuses on testing individual units or components of code, typically functions or methods, in isolation from the rest of the application.

- **Integration Testing**: Involves testing the interaction between different modules or services to ensure they work together as expected.

- **End-to-End (E2E) Testing**: Simulates the user’s behavior and tests the entire system, from the front end to the back end, ensuring all parts of the application function together.

- **Smoke Testing**: Verifies that the most important features of an application are working, often called "sanity" testing.

- **Regression Testing**: Ensures that new changes or features don't negatively impact existing functionality.

- **Acceptance Testing**: Determines if the software meets the client’s requirements or business needs.

- **Performance Testing**: Evaluates how the application behaves under heavy load or stress.

Each type of testing serves a specific purpose in the software development lifecycle to ensure the software is reliable, efficient, and meets user requirements.

---


## **Unit Testing vs Integration Testing vs E2E**



- **Unit Testing**: 
  - Involves testing individual units or functions of the code in isolation from the rest of the application. 
  - Unit tests ensure that each unit behaves as expected.

  **Example**: Testing a function that calculates the sum of two numbers.

  ```javascript
  function add(a, b) {
    return a + b;
  }
  
  // Unit test
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  ```

- **Integration Testing**: 
  - Focuses on testing the interaction between multiple components or services to ensure they work together correctly.
  - It checks the interfaces between different parts of the application.

  **Example**: Testing a function that calls a database to fetch data and returns it to the user.

- **End-to-End (E2E) Testing**: 
  - Tests the application as a whole, simulating user interactions. 
  - It verifies that the entire system, including front-end and back-end, functions as expected from start to finish.

  **Example**: Simulating a user logging in, navigating through the app, and completing a purchase.

**Key Difference**: Unit testing focuses on small, isolated units of code, integration testing focuses on how different parts of the application work together, and E2E testing ensures the entire application functions as intended.



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

---



## **Writing Unit Tests**



 - Writing unit tests for JavaScript involves creating tests that validate individual functions or units of code. 
 - The goal is to isolate the unit being tested to ensure it performs correctly in various scenarios.

A typical unit test includes:
- **Test Setup**: Preparing the environment or input data.
- **Test Execution**: Calling the function with specific arguments.
- **Assertions**: Verifying that the function produces the expected output.

**Example**:
Let’s say you have the following function:

```javascript
function multiply(a, b) {
  return a * b;
}
```

A unit test for this function would look like this:

```javascript
test('multiplies 2 and 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
```

This is a simple test using the **Jest** testing framework. It asserts that multiplying 2 and 3 returns 6.

---



## **Mocks and Stubs in Testing**



Mocks and stubs are used in unit testing to simulate parts of the system, isolate the unit under test, and avoid making real API calls or database queries.

- **Stub**: A function that replaces another function and provides a controlled response. Stubs are usually used for functions that return specific values.

  **Example**:
  ```javascript
  const fetchData = jest.fn().mockReturnValue({ data: 'Hello, world!' });
  ```

- **Mock**: A more advanced form of a stub that tracks the calls made to the function, including arguments, return values, and the number of times it was called.

  **Example**:
  ```javascript
  const logger = jest.fn();
  logger('Test log');
  expect(logger).toHaveBeenCalledWith('Test log');
  ```

Mocks and stubs allow you to test the logic of your functions without invoking external dependencies like databases or APIs.

---





## **Popular JavaScript Testing Frameworks**


- Common Node.js testing frameworks include **Mocha**, **Jest**, and **Jasmine**.
- They provide a structured way to write unit, integration, and end-to-end tests.
- Most support features like test suites, hooks (`before`, `after`), and assertions (via libraries like **Chai** or **Expect**).

**Example:**
```js
describe('UserService', () => {
  it('should return a user by ID', () => {
    const user = getUserById(1);
    expect(user.name).toBe('Alice');
  });
});
```


Some of the most popular JavaScript testing frameworks are:

- **Jest**: A comprehensive testing framework often used for React applications. It includes features like assertions, mocks, and snapshots, and is known for its simplicity and ease of use.
  
  **Example**:
  ```javascript
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  ```

- **Mocha**: A flexible testing framework that works well with other libraries. Mocha allows you to write asynchronous tests and is often used with assertion libraries like Chai.

- **Jasmine**: A behavior-driven testing framework that provides a rich syntax for writing tests, with built-in support for assertions.

- **Karma**: A test runner that works with other frameworks like Jasmine or Mocha, often used for running tests in different browsers.

- **Cypress**: A tool for testing front-end applications in real browsers, with a focus on end-to-end testing.

---



## **Test-Driven Development**

Test-Driven Development (TDD) is a software development methodology in which tests are written before the code itself. 
It follows the **Red-Green-Refactor** cycle:

**Red**: Write a failing test for the new functionality.
**Green**: Write just enough code to pass the test.
**Refactor**: Clean up the code, ensuring it’s readable and efficient without changing its functionality.

TDD encourages writing minimal code and focusing on only what is needed to pass the tests.

**Example**:
Write the test:
   ```javascript
   test('adds 1 + 1 to equal 2', () => {
     expect(add(1, 1)).toBe(2);
   });
   ```
Write code to pass the test:
   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

**Benefits**:
- Ensures the code is testable and bug-free.
- Encourages simpler, more modular code.

---



## **Testing Asynchronous Code in JavaScript**


- Testing asynchronous code involves handling promises or callbacks and ensuring that the code executes correctly.
- Asynchronous operations (e.g., Promises, callbacks, `async/await`) must be properly awaited or resolved in tests.
- Most frameworks allow using `done()` callback, returning a Promise, or using `async/await`.
- Testing async code ensures that the asynchronous operations are correctly handled and that the results are as expected.

- **With Promises**: You can use `async/await` and `assertions` to wait for promises to resolve.

  **Example**:
  ```javascript
  test('fetches data from API', async () => {
    const data = await fetchData();
    expect(data).toEqual({ name: 'John' });
    expect(data.name).toBe('Bob');
  });
  ```

- **With Callbacks**: In case of callbacks, you can use `done` in Jest to indicate that the test should wait for the callback to complete.

  **Example**:
  ```javascript
  test('fetches data with callback', (done) => {
    fetchDataWithCallback((data) => {
      expect(data).toEqual({ name: 'John' });
      done();
    });
  });
  ```



---



##  **Mock Testing**
- Mocking helps isolate units of code by simulating dependencies like databases, APIs, or services.
- Libraries like **Sinon**, **Jest Mocks**, or **TestDouble** are used.
- Allows testing how your code behaves under specific conditions (e.g., DB failure).

**Example (Jest Mock):**
```js
jest.mock('./dbService');
dbService.getUser.mockResolvedValue({ name: 'Charlie' });

test('returns mocked user', async () => {
  const user = await getUserProfile();
  expect(user.name).toBe('Charlie');
});
```

---


## **Jest and React Testing Library**


 - **Jest** and **React Testing Library (RTL)** are two of the most widely used libraries for testing in the React ecosystem.
 - They work together to make unit and integration testing efficient and accessible.

---

###  **Jest**

 - **Jest** is a **JavaScript testing framework** developed by Facebook. 
 - It's designed for simplicity and is used primarily for **unit testing** and **integration testing**. 
 - Jest provides features like test runners, mocks, assertions, and code coverage.

Key features of Jest:
 - 1. **Test Runner**: It executes tests and provides results.
 - 2. **Assertions**: Jest comes with built-in assertion methods (e.g., `expect()`).
 - 3. **Mocking**: Allows you to mock modules, functions, and timers.
 - 4. **Snapshot Testing**: Takes a snapshot of a component’s rendered output to detect changes in future test runs.

#### Example:
```javascript
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
```

---

###  **React Testing Library (RTL): Overview**

 - **React Testing Library** is a library focused on testing the **behavior** of React components rather than their implementation details. 
 - RTL encourages testing components the way users would interact with them (through the DOM), making tests more **user-centric**.

Key features of React Testing Library:
 - 1. **Querying**: Allows you to query elements in the DOM using methods like `getByText`, `getByRole`, etc.
 - 2. **User interactions**: RTL encourages testing user behavior such as clicking, typing, and submitting forms.
 - 3. **No reliance on implementation details**: It avoids testing component internals (like state or props directly) and focuses on how the component behaves.

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

###  **How Jest and RTL Work Together:**

 - 1. **Jest** handles the **test execution**, assertion, and mocking.
 - 2. **RTL** helps you **render** the component and interact with it via the **DOM**.
 - 3. **userEvent** from RTL can simulate user interactions like clicks, typing, etc.

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





## **Mocking APIs Tests**


- Mocking APIs during tests is crucial for isolating your tests from external dependencies, ensuring that your components or hooks behave as expected without actually making network requests.
- This is commonly done using **Jest** for mocking and **React Testing Library** (RTL) for testing React components.
- Below, we'll explore various ways to mock APIs for unit tests, integration tests, and how to test API interactions effectively.


 - 1. **Jest Mocking**: Use `jest.mock()` to mock external libraries like `axios` or the native `fetch` API.
 - 2. **Mock Responses**: Use `mockResolvedValue()` to simulate successful responses, and `mockRejectedValue()` to simulate errors.
 - 3. **Testing Custom Hooks**: Combine `renderHook()` with mocking to test hooks that depend on external APIs.
 - 4. **Mocking API Services**: You can create and use custom mock services to replace real API calls during tests.

- Mocking APIs ensures that your tests remain fast, reliable, and independent of external systems. 
- It isolates the logic in your components or hooks, making your tests more deterministic and less prone to failures caused by network issues.
- Mocking APIs involves replacing the real network request logic with mock functions that simulate responses (both successful and error scenarios). 
- This allows you to control the test environment and ensure predictable behavior.


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









## **Testing Hooks**


 - React hooks are a crucial part of modern React development. 
 - Since hooks allow you to manage state, side effects, and context within functional components, it's important to ensure they behave as expected. 
 - Here, we will explore how to effectively test React hooks using **React Testing Library** and **Jest**.


###  **Testing Custom Hooks**

Custom hooks are reusable logic that encapsulate stateful logic and effects. 
Testing them ensures they work as expected when used within components.

#### Key Tools:
- **React Testing Library** (for rendering components and accessing hooks)
- **Jest** (for assertions and mocking functions)

### Steps for Testing React Hooks:

---

### 1. **Test a Hook with `renderHook` from `@testing-library/react-hooks`**

`@testing-library/react-hooks` is a library specifically designed to test hooks in isolation. 
It provides a function called `renderHook()` that can be used to mount hooks outside of a component.

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

Sometimes, hooks may depend on external services (e.g., an API request). 
You can mock these dependencies to test how the hook behaves under different conditions.

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

Testing effects, such as those triggered by `useEffect()`, 
Involves ensuring that side effects occur as expected (e.g., data fetching, subscriptions, etc.).

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




## Software Engineering Practices

 -  **Software Engineering Practices** are structured techniques, principles, and processes followed during software development to ensure the code is: **Reliable** ,**Maintainable**,**Scalable**,**Testable**,**Secure**
 - I follow core software engineering practices like writing testable and modular code, using linting tools, enforcing code reviews
 - Applying SOLID principles, and setting up CI/CD pipelines to ensure quality, reliability, and speed of delivery."


 ## 🎯 Real-time Example

> In a React + Node.js project:

* You use ESLint/Prettier for clean code
* Write Jest + React Testing Library unit tests
* Follow GitHub flow for branches
* Run CI with GitHub Actions
* Use Docker + Kubernetes for deployment
* Secure APIs using JWT authentication
* Monitor app health using Prometheus + Grafana



## 🧱 Categories of Engineering Practices (with Examples)

---

### 1. **Code Quality & Style**

| Practice                        | Description                            | Example                                              |
| ------------------------------- | -------------------------------------- | ---------------------------------------------------- |
| DRY (Don’t Repeat Yourself)     | Avoid code duplication                 | Reuse utility functions for formatting dates         |
| KISS (Keep It Simple, Stupid)   | Keep logic and design simple and clear | Avoid over-engineering components                    |
| YAGNI (You Ain’t Gonna Need It) | Don’t build unnecessary features       | Don’t build export feature before there’s a use case |
| SOLID Principles                | 5 OOP principles for maintainable code | Single Responsibility, Open/Closed, etc.             |
| Linting & Formatting            | Use tools like ESLint, Prettier        | Auto format code before commit                       |

---

### 2. **Testing Practices**

| Practice              | Description                            | Tools               |
| --------------------- | -------------------------------------- | ------------------- |
| Unit Testing          | Test individual functions/components   | Jest, Mocha, Vitest |
| Integration Testing   | Test how components work together      | Cypress, Playwright |
| TDD (Test-Driven Dev) | Write tests before writing code        | Red-Green-Refactor  |
| Code Coverage         | Measure how much of the code is tested | Istanbul, Coveralls |

---

### 3. **Version Control & CI/CD**

| Practice            | Description                                          | Tools                             |
| ------------------- | ---------------------------------------------------- | --------------------------------- |
| Git Branch Strategy | Use feature/bugfix branches, PR reviews              | GitHub, GitLab                    |
| Commit Standards    | Use consistent messages (e.g., Conventional Commits) | `feat:`, `fix:`                   |
| CI/CD Pipelines     | Automate build, test, deploy                         | GitHub Actions, Jenkins, CircleCI |

---

### 4. **Code Reviews & Collaboration**

| Practice         | Description                                    |
| ---------------- | ---------------------------------------------- |
| Pull Requests    | Every change goes through review               |
| Pair Programming | Two developers write code together             |
| Documentation    | Inline comments, README, architecture diagrams |
| Agile Practices  | Daily stand-ups, sprints, retrospectives       |

---

### 5. **Architecture & Design**

| Practice                        | Description                                  |
| ------------------------------- | -------------------------------------------- |
| Modular Architecture            | Break into reusable, loosely coupled modules |
| Design Patterns                 | Reusable solutions (Factory, Observer, etc.) |
| Microservices or Microfrontends | Independent deployable units                 |

---

### 6. **Security Practices**

| Practice                       | Description                            |
| ------------------------------ | -------------------------------------- |
| Input Validation               | Prevent injection attacks              |
| Authentication & Authorization | Secure access to APIs                  |
| Dependency Scanning            | Detect known vulnerabilities           |
| HTTPS, Secure Headers          | Secure transport and response handling |

---

### 7. **DevOps & Observability**

| Practice       | Description                        |
| -------------- | ---------------------------------- |
| Logging        | Structured logs for tracing issues |
| Monitoring     | Metrics and alerts (CPU, Memory)   |
| Error Tracking | Catch exceptions and errors        |
| Feature Flags  | Gradual rollouts                   |

---



## **Web Communication Protocols**

 - Web communication protocols are **rules and standards** that define how data is exchanged between clients (like browsers or apps) and servers over the internet.


### Comparison Table

| Protocol   | Direction                      | Persistent | Use Case                       |
| ---------- | ------------------------------ | ---------- | ------------------------------ |
| HTTP/HTTPS | Client → Server                | ❌          | REST APIs, page loads          |
| WebSocket  | Client ↔ Server                | ✅          | Chat, stock tickers, games     |
| SSE        | Server → Client                | ✅          | Real-time feeds, notifications |
| GraphQL    | Client → Server (+ WS for sub) | ✅          | API flexibility, data fetching |
| gRPC       | Client ↔ Server                | ✅ (HTTP/2) | Internal APIs, microservices   |

---



### 1. **HTTP/HTTPS** – *HyperText Transfer Protocol (Secure)*

| Feature        | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| Method-based   | `GET`, `POST`, `PUT`, `DELETE`, etc.                          |
| Stateless      | No memory of previous requests (unless cookies/sessions used) |
| Secure Version | **HTTPS** uses SSL/TLS for encryption                         |
| Usage          | REST APIs, websites, form submissions                         |

🔹 **Example**:

```bash
GET https://api.example.com/users/123
```

---

### 2. **WebSockets** – *Real-time, Full-duplex Communication*

| Feature       | Description                                    |
| ------------- | ---------------------------------------------- |
| Persistent    | Keeps the connection open after handshake      |
| Bidirectional | Client ↔ Server can both send messages anytime |
| Real-Time     | Low latency – ideal for chats, games, etc.     |
| Protocol      | `ws://` or `wss://` (secure)                   |

🔹 **Example**:

```js
const socket = new WebSocket("wss://chat.example.com");
socket.onmessage = (e) => console.log("Server says:", e.data);
```

---

### 3. **SSE (Server-Sent Events)**

| Feature    | Description                           |
| ---------- | ------------------------------------- |
| One-way    | Server ➡️ Client only                 |
| Persistent | Keeps the connection open             |
| Use Case   | Live feeds, dashboards, notifications |

🔹 **Example**:

```js
const eventSource = new EventSource("/events");
eventSource.onmessage = (event) => console.log(event.data);
```

---

### 4. **GraphQL over HTTP/WebSockets**

| Feature       | Description                           |
| ------------- | ------------------------------------- |
| Declarative   | Client asks for exactly what it needs |
| Over HTTP     | Typically uses `POST /graphql`        |
| Subscriptions | Real-time updates via **WebSocket**   |

🔹 **Example**:

```graphql
query {
  user(id: "1") {
    name
    email
  }
}
```

---

### 5. **gRPC (Google Remote Procedure Call)**

| Feature           | Description                          |
| ----------------- | ------------------------------------ |
| Binary Protocol   | Uses **Protocol Buffers** (Protobuf) |
| High Performance  | Much faster than JSON over HTTP      |
| HTTP/2 Based      | Multiplexing & streaming support     |
| Language-agnostic | Used in microservices architecture   |

---


## **CSR-vs-SSR**



- **Client-Side Rendering (CSR)** means the browser downloads a minimal HTML page and then uses JavaScript (usually via a framework like React, Angular, or Vue) to render content dynamically.
- It’s commonly used in **Single Page Applications** where the initial load might be slow, but subsequent navigation is fast.
- However, SEO can be a challenge since the content isn't immediately available in the HTML.

- **Server-Side Rendering (SSR)**, on the other hand, generates the complete HTML on the **server** and sends it to the client.
- This improves **initial load performance** and **SEO**, as search engines can crawl fully-rendered pages.
- It’s especially useful for content-heavy or public-facing pages.

- In practice,
- I often prefer **hybrid frameworks like Next.js**, which allow me to choose SSR for SEO-critical pages and
-  CSR for dynamic, user-interactive areas like dashboards.

---

### ✅ **Optional Follow-up:**

> For example, in my previous project, we used **Next.js** to SSR marketing pages for SEO benefits and
> used **CSR** for logged-in dashboard views to ensure faster transitions and interactivity.




---

## **Reduce large bundle size**



To effectively reduce bundle size, 
- I follow a systematic approach combining analysis, dependency optimization, and bundler configuration. 
- By combining **bundle analysis**, **dependency optimization**, **lazy loading**, and **compression**, 
- I’ve consistently reduced production bundle sizes by 30–60% in real-world applications. 
- These improvements significantly enhance **page load times**, **LCP**, and **overall user experience**.

---

### 🔍 **1. Analyze the Bundle First**

> *“You can’t optimize what you can’t measure.”*

* **Tooling:**

  * In **Vite**, I use the Rollup Visualizer plugin:

    ```bash
    npm run build --report
    ```
  * In **Webpack**, I use:

    ```bash
    npm install --save-dev webpack-bundle-analyzer
    ```

    It generates an interactive treemap of modules.

* **Goal:** Identify large dependencies, unnecessary modules, and bundling inefficiencies.

---

### ✂️ **2. Tree Shaking Unused Code**

* I ensure all dependencies are **ES Module (ESM)** compatible.
* Avoid default imports like:

  ```ts
  import _ from 'lodash'
  ```

  Instead, use:

  ```ts
  import debounce from 'lodash/debounce'
  ```
* Remove dead code and conditionally loaded code that's never executed.

---

### 📦 **3. Optimize Third-Party Dependencies**

| Heavy Package | Preferred Alternative         |
| ------------- | ----------------------------- |
| `moment`      | `dayjs` or `date-fns`         |
| `lodash`      | `lodash-es` or modular import |
| `axios`       | Native `fetch` or `ky`        |
| `antd`        | Use `babel-plugin-import`     |

> *For icons, I import only what I need instead of entire icon sets.*

---

### 🧠 **4. Code Splitting & Lazy Loading**

* Use **dynamic imports** and React’s `lazy()`:

  ```ts
  const Chart = React.lazy(() => import('./Chart'));
  ```
* This ensures large components are loaded **only when needed**.

---

### 🗜️ **5. Asset Compression**

* I use Gzip or Brotli for serving assets:

  ```bash
  npm install vite-plugin-compression
  ```
* Reduces transfer size by up to **70%**.

---

### 🔇 **6. Strip Console Logs and Debug Code**

* In **Vite**, I configure `terserOptions`:

  ```ts
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    }
  }
  ```
* In **Webpack**, I use `TerserPlugin` with similar options.

---

### 📚 **7. Avoid Heavy Libraries When Possible**

* Replace heavy utility functions with custom code.
* Minimize CSS frameworks—prefer **utility-first CSS** like **Tailwind CSS** with purging enabled.

---

### 👥 **8. Vendor Splitting**

* In **Vite**, I manually chunk vendors:

  ```ts
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        }
      }
    }
  }
  ```
* This improves caching and initial load time.

---

### 🖼️ **9. Optimize Images & Fonts**

* Use modern formats: **WebP** or **AVIF**.
* Compress using **TinyPNG**, **Squoosh**, or **ImageMagick**.
* Load fonts selectively, and subset font files if possible.

---

### 📈 **Real-World Impact**

| Technique             | Size Saved                    |
| --------------------- | ----------------------------- |
| Replacing `moment`    | \~200 KB                      |
| Dynamic imports       | 100–300 KB                    |
| Removing console logs | 50–100 KB                     |
| Tree-shaking lodash   | 50–150 KB                     |
| Gzip Compression      | \~70% smaller network payload |


### **Customize Webpack**

- Since Angular CLI **doesn’t expose Webpack config directly**,
- you can use the community package `@angular-builders/custom-webpack` to extend or override the default config.
- This allows you to **extend** the default Angular Webpack config without losing CLI support.


🔧 **Steps:**

1. Install the custom Webpack builder:

```bash
npm install @angular-builders/custom-webpack --save-dev
```

2. Update `angular.json`:

```json
"architect": {
  "build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "./webpack.config.js"
      }
    }
  }
}
```

3. Create `webpack.config.js` and add custom rules (e.g., loaders, aliases, plugins)

---


### **Webpack**

- **Webpack** is a **static module bundler** for JavaScript applications. 
- It takes modules (JS, CSS, images, HTML, etc.) and produces optimized bundles for the browser.

**Angular CLI uses Webpack** internally to:

* Bundle modules and dependencies
* Convert TypeScript to JavaScript
* Handle SCSS/LESS preprocessing
* Inject compiled scripts and styles into `index.html`
* Split code into chunks for lazy loading

>  **Key Point:** While Angular hides Webpack configs, you can expose them using tools like `@angular-builders/custom-webpack` if customization is needed.

---


### **Reduce the bundle size**

**Answer:**

1. **Build with stats:**

```bash
ng build --configuration production --stats-json
```

2. **Analyze with Webpack Bundle Analyzer:**

```bash
npx webpack-bundle-analyzer dist/stats.json
```

3. **Steps to reduce size:**

   * **Lazy load large feature modules**
   * Remove unused dependencies
   * Use `providedIn: 'root'` for tree-shakable services
   * Import only what you use (e.g., lodash-es)
   * Remove source maps and console logs in production
   * Use CDN for external assets (fonts, icons)
   * Compress assets via GZIP or Brotli

>  **Key Point:** Bundle size impacts **FCP (First Contentful Paint)** and **TTI (Time to Interactive)**.

---


## **HttpOnly Cookies**

- An HttpOnly cookie is a cookie set by the server with the HttpOnly flag, meaning:
- It cannot be accessed or modified by JavaScript (i.e., document.cookie won’t show it)
- It is only sent in HTTP(S) requests (automatically by the browser)
- It protects against XSS (Cross-Site Scripting) attacks


```js
Set Cookie from Auth Service (Node.js / Express)
res.cookie('jwt', token, {
  httpOnly: true,
  secure: true,           // HTTPS required in production
  sameSite: 'Lax',        // Or 'None' for cross-site (see below)
  domain: '.yourdomain.com',  // 🔥 KEY: Share across services
  maxAge: 60 * 60 * 1000  // 1 hour
});
🔒 domain: '.yourdomain.com' allows cookie to be used by auth.yourdomain.com, api.yourdomain.com, etc.
```

```js
const cors = require('cors');
app.use(cors({
  origin: 'https://your-frontend.yourdomain.com',  // frontend app
  credentials: true                                 // allow cookies
}));
```

```js
Using fetch:
fetch('https://api.yourdomain.com/user/profile', {
  method: 'GET',
  credentials: 'include' // ✅ sends cookies
});
Using axios:
axios.get('https://api.yourdomain.com/user/profile', {
  withCredentials: true
});
```
