

| Topic             | Key Concepts                                            |
| ----------------- | ------------------------------------------------------- |
| HTML5             | Semantic tags, audio/video, form APIs, `localStorage`   |
| Semantic Tags     | `<header>`, `<section>`, `<article>`, `<aside>`, etc.   |
| Form Enhancements | New input types, `required`, `pattern`, `autofocus`     |
| Position          | `relative`, `absolute`, `fixed`, `sticky`               |
| Box Model         | Margin > Border > Padding > Content                     |
| Units             | `px` (fixed), `%` (parent), `em` (parent), `rem` (root) |
| Specificity       | Inline > ID > Class > Element                           |
| CSS Features      | Media queries, Flexbox/Grid, transitions, variables     |
| Custom Tags       | Use `-`, `customElements.define`, optional Shadow DOM   |
## 🧱 **HTML – Questions & Answers**

---

### **HTML5 compared to HTML4?**

HTML5 introduced:

* Semantic elements like `<header>`, `<footer>`, `<article>`, `<section>`, etc.
* Multimedia support with `<audio>` and `<video>`
* New input types (`date`, `range`, `email`, etc.)
* Local storage APIs (`localStorage`, `sessionStorage`)
* Canvas and SVG support for graphics

---

### **Difference between `<section>` and `<div>`?**

`<section>` is semantic — used for grouping related content.
`<div>` is generic and non-semantic — used only for styling or layout.

`<div>` is a generic container with no semantic meaning.
`<section>` is a semantic tag that represents a standalone section of content (e.g., a group of related content with its own heading).
Use `<section>` when the block has a meaningful role or heading.

```html
<section>
  <h2>Blog Posts</h2>
  <article>Post 1</article>
</section>
```


---

### `<div>` vs `<span>`

| Feature          | `<div>`                       | `<span>`                    |
| ---------------- | ----------------------------- | --------------------------- |
| Type             | **Block-level** element       | **Inline** element          |
| Default behavior | Starts on a new line          | Stays within the same line  |
| Use case         | Layout & grouping sections    | Styling small parts of text |
| Styling target   | Useful for containers/layouts | Ideal for inline styling    |
| HTML5 Semantic?  | No                            | No                          |

---

  Example

```html
<!-- div groups content and takes full width -->
<div style="background: lightblue; padding: 10px;">
  <h2>Title</h2>
  <p>This is a block of content.</p>
</div>

<!-- span styles part of a sentence -->
<p>This is a <span style="color: red;">highlighted word</span> inside a paragraph.</p>
```

---

  When to Use:

* Use **`<div>`**: when structuring or grouping content (layouts, sections, cards).
* Use **`<span>`**: when targeting a **small portion of inline text** for styling or scripting.

---


### **HTML5 form enhancements?**


* New input types: `email`, `tel`, `url`, `color`, `date`
* New attributes: `required`, `placeholder`, `autofocus`, `pattern`

---




### Semantic Tags in HTML5

**Semantic tags** clearly describe the **meaning** of the content they enclose, both for **developers** and **browsers (including screen readers & SEO engines)**.

---

 🔹 Common Semantic Tags & Their Uses

| Tag         | Purpose                               | Example Usage                     |
| ----------- | ------------------------------------- | --------------------------------- |
| `<header>`  | Defines page or section header        | Logo, nav links at top            |
| `<nav>`     | Navigation links                      | Menus, site links                 |
| `<main>`    | Main content (one per page)           | Article, core information         |
| `<section>` | Thematic grouping within content      | Group of related articles, topics |
| `<article>` | Self-contained content                | Blog post, news article           |
| `<aside>`   | Sidebar or related info               | Ads, author bio, related links    |
| `<footer>`  | Page or section footer                | Contact info, copyrights          |
| `<figure>`  | Media container (with `<figcaption>`) | Images, charts with captions      |
| `<time>`    | Machine-readable date/time            | Publishing date                   |

---

  Why Use Semantic Tags?

*  **Accessibility** – Screen readers can navigate content better
*  **SEO** – Search engines understand page structure more effectively
*  **Maintainability** – Easier for developers to read and maintain code
*  **Consistency** – Clear separation of sections improves structure

---

 💡 Example:

```html
<header>
  <h1>My Portfolio</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <section>
    <article>
      <h2>Project One</h2>
      <p>Description of the project...</p>
    </article>
  </section>
  <aside>
    <p>Check out my GitHub!</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 My Portfolio</p>
</footer>
```



### Create Custom Tags

 1. 🛠️ **Informal Custom Tags** (HTML only)

You *can* use unknown tags in HTML — but they won't have any functionality or semantic meaning.

```html
<my-card>
  <h2>Title</h2>
  <p>Content inside custom tag</p>
</my-card>
```

📌 This is valid HTML5, but it's just treated as a `div`. Use CSS to style it, if needed.

```css
my-card {
  display: block;
  border: 1px solid #ccc;
  padding: 1rem;
}
```

---

 2. ⚙️ **Formal Custom Elements (Web Components)**

To truly define a **custom component**, use JavaScript:

```html
<user-profile></user-profile>

<script>
  class UserProfile extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h3>Hello from a custom tag!</h3>`;
    }
  }

  customElements.define('user-profile', UserProfile);
</script>
```

📌 Now `<user-profile>` behaves like a real component.

---

 🔒 Rules for Custom Tags

* Must contain a **dash** (`-`), e.g. `my-card`, `user-profile`
* Should be defined via `customElements.define()`
* Can include Shadow DOM, lifecycle methods, etc.

---

 🎯 Use Cases

* Encapsulated UI components (`<user-profile>`, `<app-navbar>`)
* Reusable design elements (`<product-card>`, `<fancy-button>`)
* Progressive web apps

---





### **semantic HTML elements? Give examples.**

**Answer:**
Semantic elements clearly describe their meaning to both the browser and developer.
Examples: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`.
They help with **accessibility**, **SEO**, and **code clarity**.

---

### **purpose of `alt` in `<img>`?**

**Answer:**
The `alt` attribute provides alternative text when an image can’t load and improves **accessibility** for screen readers.

---

### **Difference between `id` and `class`?**

**Answer:**

* `id`: Unique per element, used for specific styling or DOM access.
* `class`: Reusable across multiple elements, better for styling groups.

---

### **difference between `async` and `defer` on script tags?**

**Answer:**

* `async`: Script is fetched in parallel and executed as soon as it's ready. Can block rendering.
* `defer`: Script is fetched in parallel but executed **after HTML parsing** is done. Keeps render non-blocking.

---


## 🟦 CSS3 Interview Questions

### **major features of CSS3?**
* Media queries (for responsive design)
* Flexbox and Grid
* Animations & transitions
* Rounded corners (`border-radius`)
* Shadows (`box-shadow`, `text-shadow`)

---


When you write:

```css
padding: 10px 20px;
```


### **vertical and horizontal padding**

It means you're setting **vertical and horizontal padding** like this:

---

  Breakdown:

| Direction  | Value  |
| ---------- | ------ |
| **Top**    | `10px` |
| **Right**  | `20px` |
| **Bottom** | `10px` |
| **Left**   | `20px` |

---

 🔁 Shorthand Pattern (clockwise logic):

CSS shorthand follows this pattern based on number of values:

* `padding: 10px;` → all 4 sides
* `padding: 10px 20px;` → top & bottom | left & right
* `padding: 10px 20px 30px;` → top | left & right | bottom
* `padding: 10px 20px 30px 40px;` → top | right | bottom | left (clockwise)

---

 📌 Example:

```css
.box {
  padding: 10px 20px;
  background: lightblue;
}
```

This applies:

* 10px padding on top and bottom
* 20px padding on left and right



###  **Different Position**

*Can you explain how different `position` values work in CSS, and how they behave in a parent-child component setup?*

 - Yes, absolutely. CSS provides several `position` values — `static`, `relative`, `absolute`, `fixed`, and `sticky`. Each determines how an element is placed in the layout.

 -  The default is `static`, which just follows the normal document flow. If I use `relative`, the element still takes up space in the layout, but I can offset it using `top`, `left`, etc. It's often used as a positioning anchor for child elements.

 -  `absolute` removes the element from the normal flow, and it gets positioned relative to the **nearest ancestor that has a non-static position** — usually `relative`, `absolute`, or `fixed`. This is important in component-based frameworks like Angular or React, where a parent component might define a container and child components are positioned absolutely inside it.

 -  For example, if I have a `.parent` div with `position: relative`, and a `.child` div inside it with `position: absolute; top: 10px; right: 10px`, the child will stick to the top-right of the parent, not the page.

 -  `fixed` makes the element stick to the viewport — useful for navbars or buttons that should stay visible during scroll. `sticky` behaves like `relative` until a scroll threshold is met, and then it behaves like `fixed`.

 -  So when handling child positioning, I always make sure the parent has a proper `position` (usually `relative`) if I want the child to align within that scope.

---

 🔁 Optional Add-On (if asked for an example)

 - In Angular, I often use this for dropdowns or modals:

 -  * I wrap the modal in a `div` with `position: relative`
 - * Then absolutely position the modal box inside that container.

 -  This makes sure the modal is scoped within the parent and doesn't float around the page unexpectedly.

---



### **Difference between `em`, `rem`, `%`, `px`?**


* `px`: fixed size
* `%`: relative to parent
* `em`: relative to the font-size of the parent
* `rem`: relative to the root (`html`) font size

---

### **specificity in CSS?**

Specificity defines which CSS rule takes precedence:

* Inline styles: **1000**
* ID selectors: **100**
* Class, pseudo-class, attribute: **10**
* Element/tag selectors: **1**


### **CSS Box Model**

The **CSS Box Model** describes how elements are structured and spaced on a web page. Every element is treated as a rectangular **box** made up of the following parts:

---

  Box Model Structure

```
+-------------------------------+
|        Margin (outer)         |
|  +-------------------------+  |
|  |     Border (optional)   |  |
|  |  +-------------------+  |  |
|  |  |   Padding          |  |  |
|  |  |  +-------------+   |  |  |
|  |  |  |   Content   |   |  |  |
|  |  |  +-------------+   |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```

---

 📋 Box Model Components

| Part        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| **Content** | The actual text, image, or data inside the element.           |
| **Padding** | Space **inside** the element, around the content.             |
| **Border**  | Edge around the padding. Can be styled (e.g., solid, dashed). |
| **Margin**  | Space **outside** the element, separating it from others.     |

---

 🧪 Example (CSS):

```css
.box {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

 🧮 Total Element Size (Standard Model):

```
Total width = content width + left/right padding + border + margin
            = 200 + (10×2) + (5×2) + (20×2) = 270px wide + margin
```

---

 🔄 `box-sizing` Property

To make sizing easier, you can use:

```css
box-sizing: border-box;
```

This **includes padding and border inside the total width/height**, so:

```css
width: 200px;  /* includes padding and border */
```

---





## 💠 LESS & SASS Interview Questions

---

### **CSS Preprocessor**

**Answer:**
A CSS preprocessor extends CSS with features like:

* Variables
* Nesting
* Mixins
* Functions
* Partials and Modules

Popular preprocessors include **SASS**, **LESS**, and **Stylus**. They compile to regular CSS before the browser can use it.

---

### **SASS and LESS**

**Answer:**
Both are CSS preprocessors, but they differ slightly:

| Feature     | SASS (`.scss` / `.sass`)  | LESS                   |
| ----------- | ------------------------- | ---------------------- |
| Syntax      | SCSS or SASS              | LESS syntax (`.less`)  |
| Language    | Originally Ruby, now Node | JavaScript-based       |
| Community   | Larger, more tooling      | Simpler, smaller scope |
| Integration | Used in modern builds     | Easier with JS tooling |

---

### **Variables and Nesting in SASS & LESS**

**SASS:**

```scss
$primary-color: #3498db;

nav {
  background: $primary-color;
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
```

**LESS:**

```less
@primary-color: #3498db;

nav {
  background: @primary-color;
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
```

---

### **Mixin in SASS/LESS?**

**Answer:**
A **mixin** is a reusable block of styles you can include in multiple selectors.

**SASS Example:**

```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

---

### **difference between `@mixin` and `@extend` in SASS?**

**Answer:**

| Concept         | `@mixin`      | `@extend`        |
| --------------- | ------------- | ---------------- |
| Reusability     |  Yes         |  Yes            |
| With Parameters |  Yes         | ❌ No             |
| Code Output     | Repeats code  | Merges selectors |
| Flexibility     | More flexible | Less flexible    |

---

### **Sass Partials and How Are They Used?**

**Answer:**
A partial is a Sass file prefixed with an underscore (e.g., `_variables.scss`). It’s not compiled directly. Use `@use` or `@import` to include it in other files.

```scss
// _variables.scss
$primary-color: #3498db;

// main.scss
@use 'variables';
```

---

### **Loops and Functions Work in Sass?**

**Answer:**
Sass allows logic via loops and functions.

```scss
@for $i from 1 through 3 {
  .col-#{$i} {
    width: 100% / $i;
  }
}

@function double($number) {
  @return $number * 2;
}
```

These features make complex styling patterns reusable and dynamic.



## 🎨 **CSS-in-JS – styled-components/Emotion Questions & Answers**

---

### **CSS-in-JS and why use it?**

**Answer:**
CSS-in-JS is a styling approach where you write CSS code directly inside JavaScript files. It allows:

* **Component-scoped styles** (no class collisions)
* **Dynamic styles based on props/state**
* **Shared theme values across components**
* **Elimination of global stylesheets**

Popular libraries: `styled-components`, `Emotion`, `JSS`.

---

### **create dynamic styles using styled-components?**

**Answer:**

```jsx
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
`;
```

Props like `primary` can dynamically alter styles. This is great for reusable and themeable components.

---

### **SSR (Server-Side Rendering) handled in CSS-in-JS?**

**Answer:**
In SSR setups (like Next.js), `styled-components` or `emotion` use collectors (e.g., `ServerStyleSheet` or `extractCritical`) to extract styles during server rendering. This prevents FOUC (Flash of Unstyled Content).

```jsx
import { ServerStyleSheet } from 'styled-components';

const sheet = new ServerStyleSheet();
const html = renderToString(sheet.collectStyles(<App />));
const styleTags = sheet.getStyleTags(); // Inject into <head>
```

---

### **Handle themes in CSS-in-JS?**

**Answer:**

Using `ThemeProvider` from the library:

```jsx
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#333',
  secondary: '#999',
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

In styled-components:

```js
const Title = styled.h1`
  color: ${props => props.theme.primary};
`;
```

---

### **Pros and Cons of CSS-in-JS vs Sass**

| Feature             | CSS-in-JS                          | Sass (SCSS)                     |
| ------------------- | ---------------------------------- | ------------------------------- |
| **Scoping**         | Scoped to components automatically | Requires naming conventions     |
| **Dynamic Styling** | Via props/state                    | Not natively dynamic            |
| **Theming Support** | Built-in with `ThemeProvider`      | Needs manual setup              |
| **Performance**     | Slight runtime overhead (JS-based) | Compiled to static CSS          |
| **Tooling**         | Tight integration with JS/React    | Good tooling in build pipelines |
| **Learning Curve**  | Requires React knowledge           | Easier for pure CSS developers  |
| **Debugging**       | Styled class names are auto-gen    | Original class names available  |
| **SSR Support**     | Requires extra setup               | Native CSS — no extra handling  |

---

Let me know if you'd like:

* Real-world **project questions**
* A **styled-components mini project**
* Questions on **Emotion vs styled-components**
* Or **code exercises for CSS-in-JS** use cases.


| Feature         | CSS-in-JS                  | Sass                     |
| --------------- | -------------------------- | ------------------------ |
| Scoped Styles   |  Automatic                | ❌ Needs manual naming    |
| Dynamic Styling |  via props                | ❌ Requires extra setup   |
| Performance     | ⚠ Slightly heavier bundle  |  Leaner compiled output |
| Tooling         |  Theming, SSR, TS support |  Good build integration |
| Learning Curve  | Medium                     | Low                      |







