| **Category**           | **Topics** |
|------------------------|------------|
| **HTML Basics**        | [HTML5 vs HTML4](#html5-vs-html4) ,  [`<section>` vs `<div>`](#section-vs-div) , [`<div>` vs `<span>`](#div-vs-span) ,  [HTML5 Form Enhancements](#html5-form-enhancements) ,  [Semantic Tags in HTML5](#semantic-tags-in-html5) ,[Creating Custom Tags](#creating-custom-tags-in-html5) , [`alt` in `<img>`](#purpose-of-alt-in-img) , [`id` vs `class`](#id-vs-class) ,  [`async` vs `defer`](#async-vs-defer) , [Block vs Inline elements](#Block-vs-Inline-elements) , - [visibility:hidden display:none *ngIf](#visibilityhidden-displaynone-ngif)
| **CSS Basics**         | [CSS3 Features](#css3-features) ,  [CSS Padding Shorthand](#css-padding-shorthand) , [CSS Positioning](#css-positioning) ,  [`em`, `rem`, `%`, and `px`](#em-rem--and-px) ,  [CSS Specificity](#css-specificity) , [CSS Box Model](#css-box-model) , [Descendant](#descendant) , - [Pseudo classes vs Pseudo elements](#Pseudo-classes-vs-Pseudo-elements) - [CSS Grid vs Flexbox](#CSS-Grid-vs-Flexbox) - [Responsive layout](#responsive-layout) - [visibility: hidden vs display: none](#visibility-hidden-vs-display-none) - [Center a div both vertically and horizontally](#center-a-div-both-vertically-and-horizontally) - [z-index](#z-index)
| **LESS & SASS Intro**  | [CSS Preprocessor](#css-preprocessor) ,[SASS vs LESS](#sass-vs-less) ,[Variables and Nesting](#variables-and-nesting) ,[Mixins in SASS and LESS](#mixins-in-sass-and-less) ,[@mixin vs @extend](#mixin-vs-extend) ,[SASS Partials](#sass-partials) ,[Loops and Functions](#loops-and-functions) ,
| **SCSS Advanced**      | [SCSS vs CSS](#scss-vs-css) ,[SCSS Variables](#scss-variables) ,[SCSS Nesting](#scss-nesting) ,[SCSS Mixins](#scss-mixins) ,[SCSS Functions](#scss-functions) ,[Mixins and Functions](#mixins-and-functions) ,[@extend](#extend) ,[SCSS Modularity](#scss-modularity) ,[Partials](#partials) ,[@use and @import](#use-and-import) ,[SCSS File Organization](#scss-file-organization) ,[SCSS Control Directives](#scss-control-directives) ,[SCSS Debug](#scss-debug) ,[SCSS Variables Sharing](#scss-variables-sharing) ,[SCSS Maintainability](#scss-maintainability) ,[SCSS Pitfalls](#scss-pitfalls)



###  **CSS Techniques & Optimization**

| Question                      | Answer                                                                      |
| ----------------------------- | --------------------------------------------------------------------------- |
| **CSS Variables?**            | Declare: `--main-color`; Use: `var(--main-color)`                           |
| **Critical Rendering Path?**  | CSS blocks rendering. Optimize critical CSS for faster load.                |
| **BEM Convention?**           | `Block__Element--Modifier` (e.g., `btn__icon--small`)                       |
| **Optimize CSS Performance?** | Minify, use shorthand, reduce specificity, remove unused styles, lazy-load. |
| **Reflow vs Repaint?** | Reflow: layout recalculation; Repaint: visual update only (like color change). |







## 🔶 HTML5 & CSS3 Interview Questions


### HTML5 vs HTML4

HTML5 introduced:

- HTML (HyperText Markup Language) structures web content using elements like headings, paragraphs, links, etc. 

* Semantic tags, audio/video, form APIs, `localStorage`
* Semantic tags: `<header>`, `<footer>`, `<article>`, `<section>`, etc.
* Multimedia elements: `<audio>`, `<video>`
* New input types: `email`, `date`, `range`, etc.
* Storage APIs: `localStorage`, `sessionStorage`
* Graphics: `<canvas>`, SVG support

---

### `<section>` vs `<div>`
                                                       

| Element     | Semantic | Use Case                             |
| ----------- | -------- | ------------------------------------ |
| `<div>`     | ❌ No     | Generic container/layout only        |
| `<section>` |  Yes    | Group related content with a heading |

🔹 Use `<section>` for thematic grouping with a heading.

```html
<section>
  <h2>Blog Posts</h2>
  <article>Post 1</article>
</section>
```

---

###  `<div>` vs `<span>`

- `<div>` is block-level, `<span>` is inline.        

| Feature        | `<div>`                   | `<span>`               |
| -------------- | ------------------------- | ---------------------- |
| Type           | Block-level               | Inline                 |
| Use case       | Layout/grouping sections  | Styling inline content |
| Styling target | Full blocks or containers | Text fragments         |
| Semantic?      | ❌ No                      | ❌ No                   |

```html
<div>
  <h2>Block title</h2>
  <p>This is a block of content.</p>
</div>

<p>This is a <span style="color:red">red word</span>.</p>
```

---


### Block vs Inline elements

- Block: full width (`<div>`, `<p>`); Inline: content width (`<span>`, `<a>`).                   


###  HTML5 Form Enhancements

- Form Enhancements | New input types, `required`, `pattern`, `autofocus`  
* **New input types**: `email`, `url`, `tel`, `color`, `date`
* **Attributes**: `required`, `placeholder`, `autofocus`, `pattern`

These improve validation and UX without JavaScript.

---

###  Semantic Tags in HTML5

- Elements that convey meaning: `<header>`, `<footer>`, `<article>`, `<nav>`, etc.                        

| Tag         | Purpose                      | Example Use                |
| ----------- | ---------------------------- | -------------------------- |
| `<header>`  | Page/section header          | Logo, nav                  |
| `<nav>`     | Navigation links             | Menu                       |
| `<main>`    | Core content (once per page) | Article, primary info      |
| `<section>` | Thematic group               | Related articles or topics |
| `<article>` | Self-contained content       | Blog post                  |
| `<aside>`   | Side content                 | Ads, related links         |
| `<footer>`  | Footer content               | Contact, copyright         |
| `<figure>`  | Media with caption           | Images, charts             |
| `<time>`    | Machine-readable time/date   | Publish date               |

🔹 Benefits:

*  Accessibility (screen readers)
*  SEO improvement
*  Maintainability

---

###  Creating Custom Tags in HTML5

#### 🛠️ Informal Custom Tags

HTML5 allows unknown elements like:

```html
<my-card>
  <h3>Custom Tag</h3>
</my-card>
```

Use CSS:

```css
my-card {
  display: block;
}
```

📌 Treated like a `<div>`, no functionality.

#### ⚙️ Formal Custom Elements (Web Components)

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

 Rules:

* Must include a **dash** (e.g. `user-profile`)
* Defined via `customElements.define()`

---

###  Purpose of `alt` in `<img>`

* Describes image for screen readers
* Displays fallback if image fails
* Improves accessibility & SEO

---

###  `id` vs `class`

- `id` is unique; `class` can be reused.                                                                  

| Attribute | Unique? | Reusable? | Use Case                              |
| --------- | ------- | --------- | ------------------------------------- |
| `id`      |  Yes   | ❌ No      | Specific element styling or JS access |
| `class`   | ❌ No    |  Yes     | Reusable styles                       |

---

###  `async` vs `defer`

| Attribute | Load Behavior     | Execution Time        | Render Blocking |
| --------- | ----------------- | --------------------- | --------------- |
| `async`   | Loads in parallel | As soon as downloaded |  May block     |
| `defer`   | Loads in parallel | After HTML parsed     | ❌ No            |


| Attribute/Tag  | Behavior                                                                                                                                               | Execution Timing                                                                  | Use Case Example                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **`<script>`** | Loads and executes JavaScript immediately. HTML parsing is **blocked** until the script finishes loading and running.                                  | Executes **immediately** when encountered in the HTML, before continuing parsing. | Inline scripts or critical scripts that must run before anything else.       |
| **`async`**    | Script is **fetched asynchronously** while HTML parsing continues. Once downloaded, it executes **immediately**, even if HTML parsing is not finished. | Execution order is **not guaranteed** (depends on download speed).                | Independent scripts (e.g., analytics, ads, tracking) that don’t rely on DOM. |
| **`defer`**    | Script is **fetched asynchronously** while HTML parsing continues. Execution is **deferred until HTML parsing is complete**.                           | Executes **after HTML parsing is done**, in the order they appear.                | DOM-dependent scripts (e.g., main app logic, DOM manipulation).              |


---

## 🟦 CSS3 Interview Questions

###  CSS3 Features


 - Media queries, Flexbox/Grid, transitions, variables 

* Media queries
* Flexbox & CSS Grid
* Transitions & animations
* Rounded corners (`border-radius`)
* Shadows (`box-shadow`, `text-shadow`)

---

###  CSS Padding Shorthand

```css
padding: 10px 20px;
```

| Side   | Value |
| ------ | ----- |
| Top    | 10px  |
| Right  | 20px  |
| Bottom | 10px  |
| Left   | 20px  |

📌 Shorthand rules:

* 1 value → all sides
* 2 values → top/bottom, left/right
* 3 values → top, left/right, bottom
* 4 values → top, right, bottom, left

---

###  CSS Positioning

- Position          | `relative`, `absolute`, `fixed`, `sticky`    

`relative`: offset from normal;
 `absolute`: positioned ancestor; 
 `fixed`: viewport; 
 `sticky`: toggles between relative/fixed.

| Value      | Behavior                                                            |
| ---------- | ------------------------------------------------------------------- |
| `static`   | Default, follows normal flow                                        |
| `relative` | Positioned relative to itself (can offset with `top`, `left`, etc.) |
| `absolute` | Positioned relative to nearest non-static parent                    |
| `fixed`    | Sticks to viewport on scroll                                        |
| `sticky`   | Behaves `relative` until threshold, then becomes `fixed`            |

📌 Best Practice:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

---

###  `em`, `rem`, `%`, and `px`


-  `px` (fixed), `%` (parent), `em` (parent), `rem` (root) 


* Use **`%`** when sizing relative to containers.
* Use **`vw`/`vh`** for **viewport-based scaling** (e.g., hero sections).
* Use **`rem`** for **consistent, scalable typography and spacing**.


| Unit  | Relative To             | Use Case                       |
| ----- | ----------------------- | ------------------------------ |
| `px`  | Fixed                   | Precise control                |
| `%`   | Parent’s value          | Responsive layout              |
| `em`  | Parent’s font-size      | Inheritable typography spacing |
| `rem` | Root (`html`) font-size | Consistent across components   |


### 📏 **1. \`% (Percentage)**

* **Relative to**: The **parent element’s** dimension.
* **Use case**: Making elements scale proportionally within their containers.

#### ✅ Example:

```css
.container {
  width: 80%;  /* 80% of parent’s width */
}
```

> ✅ Good for **fluid layouts**, but depends heavily on the parent’s size.

---

### 📐 **2. `vw` (Viewport Width)**

* **Relative to**: The **entire browser width** (viewport).
* `1vw = 1% of the viewport's width`

#### ✅ Example:

```css
.title {
  font-size: 5vw;  /* 5% of the current viewport width */
}
```

> ✅ Good for **full-width sections** or **scaling typography** with screen size.

---

### 📏 **3. `vh` (Viewport Height)**

* **Relative to**: The **entire browser height** (viewport).
* `1vh = 1% of the viewport's height`

#### ✅ Example:

```css
.hero {
  height: 100vh;  /* Full-screen hero section */
}
```

> ✅ Useful for **fullscreen layouts** or modals.

---

### 🔡 **4. `rem` (Root Em)**

* **Relative to**: The **root element’s (`html`) font size**
* `1rem = root font-size`, usually `16px` by default

#### ✅ Example:

```css
html {
  font-size: 16px;
}
.card {
  padding: 2rem; /* 2 × 16px = 32px */
}
```

> ✅ Great for **scalable and accessible typography** across components.

---

### 🧠 **Quick Comparison Table**

| Unit  | Relative To             | Common Use                              | Scales With Viewport? | Inherited? |
| ----- | ----------------------- | --------------------------------------- | --------------------- | ---------- |
| `%`   | Parent element          | Width/height inside containers          | ❌                     | ✅          |
| `vw`  | Viewport width          | Fluid widths, fonts                     | ✅                     | ❌          |
| `vh`  | Viewport height         | Fullscreen sections, banners            | ✅                     | ❌          |
| `rem` | Root font size (`html`) | Typography, spacing (consistent sizing) | ❌                     | ❌          |


---

###  CSS Specificity

- Specificity       | Inline > ID > Class > Element       

| Selector Type      | Specificity Score |
| ------------------ | ----------------- |
| Inline style       | 1000              |
| `#id`              | 100               |
| `.class`, `:hover` | 10                |
| `div`, `h1`        | 1                 |

📌 Higher specificity wins if multiple rules apply.

---

###  CSS Box Model

Margin > Border > Padding > Content  

```
+-------------------------------+
|        Margin (outside)       |
|  +-------------------------+  |
|  |     Border             |  |
|  |  +-------------------+ |  |
|  |  |   Padding         | |  |
|  |  |  +-------------+  | |  |
|  |  |  |   Content   |  | |  |
|  |  |  +-------------+  | |  |
|  |  +-------------------+ |  |
|  +-------------------------+  |
+-------------------------------+
```

| Part    | Description                      |
| ------- | -------------------------------- |
| Content | Text or image inside the element |
| Padding | Space **inside** around content  |
| Border  | Edge surrounding the padding     |
| Margin  | Space **outside** element        |

🔹 Use `box-sizing: border-box` to include padding & border in total width/height:

```css
* {
  box-sizing: border-box;
}
```

---







### **CSS Preprocessor**

A CSS preprocessor extends CSS with features like:

* Variables
* Nesting
* Mixins
* Functions
* Partials and Modules

Popular preprocessors include **SASS**, **LESS**, and **Stylus**. They compile to plain CSS before the browser can use it.

---

### **SASS vs LESS**

| Feature     | SASS (`.scss` / `.sass`)  | LESS                   |
| ----------- | ------------------------- | ---------------------- |
| Syntax      | SCSS or indented SASS     | LESS syntax (`.less`)  |
| Language    | Originally Ruby, now Dart | JavaScript-based       |
| Community   | Larger, more tooling      | Simpler, smaller scope |
| Integration | Widely used in builds     | Easier with JS tooling |

---

### **Variables and Nesting**

####  SASS Example

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

####  LESS Example

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

### **Mixins in SASS and LESS**

Mixins are reusable blocks of styles.

####  SASS Example

```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

####  LESS Example

```less
.border-radius(@radius) {
  border-radius: @radius;
}

.box {
  .border-radius(10px);
}
```

---

### **@mixin vs @extend**

| Feature     | `@mixin`                 | `@extend`                  |
| ----------- | ------------------------ | -------------------------- |
| Reusability |  Yes                    |  Yes                      |
| Parameters  |  Supports parameters    | ❌ No                       |
| Code Output | Repeats styles per usage | Merges selectors           |
| Flexibility | More flexible            | Less flexible, more global |

**Note:** Use `@extend` sparingly to avoid bloated selectors.

---

### **SASS Partials**

A **partial** is a Sass file that is not compiled on its own (starts with `_`):

```scss
// _variables.scss
$primary-color: #3498db;

// main.scss
@use 'variables';
```

**Best Practice:** Group partials by purpose and organize them using the **7–1 pattern**.

---

### **Loops and Functions**

SASS supports logic with loops and functions:

```scss
// Loop
@for $i from 1 through 3 {
  .col-#{$i} {
    width: 100% / $i;
  }
}

// Function
@function double($number) {
  @return $number * 2;
}
```

This enables dynamic and reusable styles.

---




## **SCSS**

 - [SCSS vs CSS](#SCSS vs CSS)
 - [SCSS variables](#SCSS variables)
 - [SCSS nesting work](#SCSS nesting work)
 - [SCSS mixins](#SCSS mixins)
 - [SCSS functions](SCSS functions)

### **SCSS vs CSS**


- SCSS (Sassy CSS) is a syntax of Sass (Syntactically Awesome Stylesheets), 
- a CSS preprocessor that adds powerful features such as:

* Variables
* Nesting
* Mixins
* Functions
* Partials and imports

**Difference:**

* SCSS uses **CSS-like syntax** (curly braces and semicolons).
* SCSS files use `.scss` extension.
* SCSS is a superset of CSS, so every valid CSS file is also a valid SCSS file.

---

### **SCSS variables**


Variables allow you to **store reusable values** like colors, fonts, or sizes.

```scss
$primary-color: #3498db;

.button {
  background-color: $primary-color;
}
```

They reduce repetition and improve maintainability.

---

### **SCSS nesting work**


SCSS allows **nesting of selectors**, which mirrors the HTML structure and improves readability.

```scss
.navbar {
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}
```

**⚠️ Caution:** Over-nesting can lead to **specificity issues** and large CSS files.

---

### **SCSS mixins**


Mixins allow you to **reuse groups of styles** with optional parameters.

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

You can also pass arguments:

```scss
@mixin theme($color) {
  background-color: $color;
}
```

---

### **SCSS functions**


Functions return a value and can be used in calculations:

```scss
@function half($value) {
  @return $value / 2;
}

.box {
  width: half(100px);
}
```



### **Mixins and functions**

| Feature | Mixin                     | Function                  |
| ------- | ------------------------- | ------------------------- |
| Purpose | Apply styles              | Return values             |
| Usage   | `@include`                | Can be used in properties |
| Output  | Multiple CSS declarations | Single value (usually)    |

---
### **@extend**


`@extend` lets you inherit styles from another selector.

```scss
.btn {
  padding: 10px;
  color: white;
}

.btn-primary {
  @extend .btn;
  background-color: blue;
}
```

**⚠️ Use sparingly** — overuse may create bloated CSS due to selector duplication.

---

### **Partials**


Partials are small SCSS files that can be **imported into other SCSS files** using `@use` or `@import`.

```scss
// _variables.scss
$primary-color: #333;

// main.scss
@use 'variables';
```

By convention, partial filenames start with an underscore (`_`).

---

### **@use and @import**

| Feature | `@import`                      | `@use` (Recommended)   |
| ------- | ------------------------------ | ---------------------- |
| Scope   | Global                         | Namespaced             |
| Reuse   | Can be imported multiple times | Imported once per file |
| Future  | Deprecated in Dart Sass        | Preferred and modular  |

---

### **SCSS File Organization**


Use the **7–1 pattern**:

```
scss/
|– abstracts/ (variables, mixins, functions)
|– base/      (reset, typography)
|– components/ (buttons, cards)
|– layout/     (header, footer)
|– pages/      (page-specific styles)
|– themes/     (theme files)
|– vendors/    (3rd party libs)
main.scss
```

---


### **SCSS control directives**

SCSS supports loops and conditionals:

* `@if` / `@else`
* `@for`
* `@each`
* `@while`

```scss
@for $i from 1 through 5 {
  .m-#{$i} {
    margin: $i * 10px;
  }
}
```

---

### **SCSS Debug**

Use:

* **Source maps** in dev mode
* Break code into small partials
* Avoid deeply nested selectors
* Linting with tools like **stylelint**

---

### **SCSS Variables Sharing**

Not directly. To share values:

* Extract common variables to a separate file (like JSON)
* Or use CSS variables (`--var`) and access via JavaScript

---

### **SCSS Maintainability**

SCSS makes CSS:

* More **modular**
* Easier to **reuse**
* Easier to **scale** in large apps
* More **DRY** (Don't Repeat Yourself)

---

### **SCSS Pitfalls**

* Over-nesting leads to **high specificity**
* Overuse of `@extend` creates large selectors
* Deep inheritance chains reduce readability
* Using global variables everywhere

---





## **Descendant**

>  **Descendant** = any element **nested inside another**, at **any depth**
>  **All children are descendants**, but not all descendants are direct children
>  Example:

```html
<div>
  <section>
    <p>Hello</p> <!-- Descendant of div -->
  </section>
</div>
```
**target descendants**

-  Use **space selector**: `parent descendant`
-  Example: `div p { color: blue; }` → targets all `<p>` inside `<div>`
-  **Direct child** only? Use `>`: `div > p`

**Child vs Descendant**

| Term           | Meaning                  | Selector  |
| -------------- | ------------------------ | --------- |
| **Child**      | Directly inside a parent | `div > p` |
| **Descendant** | Any nested level         | `div p`   |


**Real-Time Use Case?**

- **Navbar styling**

```html
<nav>
  <ul>
    <li><a href="#">Link</a></li>
  </ul>
</nav>
```

>  CSS: `nav a { color: white; }` → targets all `<a>` links inside `<nav>`


**Access descendants**

-  `querySelectorAll('div p')` → gets **all `<p>`** inside a `<div>`
-  `.getElementsByTagName('p')` → gets descendant `<p>`s
-  `element.firstElementChild`, `element.children`, or `.parentElement` for navigation


| Feature        | Descendants                          |
| -------------- | ------------------------------------ |
| Depth          | Any nested level                     |
| CSS Selector   | `parent descendant`                  |
| JS Access      | `querySelectorAll`, DOM Tree         |
| Real Use Cases | Navigation, form structures, layouts |
| Contrast with  | Children (only 1 level deep)         |

---




## `alt` attribute

 - Describes the image (accessibility, SEO). Shown when image fails.                                          




## **Pseudo classes vs Pseudo elements?** 

- `:hover`, `:focus` = pseudo-class; `::before`, `::after` = pseudo-element. 




## **CSS Grid vs Flexbox?**          

- Grid: 2D (rows & columns); Flexbox: 1D (row or column).   



## **Responsive layout?**  
- Use media queries, `flexbox`, `grid`, `%`, `vw/vh`.   
  - `img { max-width: 100%; height: auto; }`   


## **`visibility: hidden` vs `display: none`?**  
-`hidden`: takes up space; `none`: removed from layout.                  
 
# **Center a `div` both vertically and horizontally?** 
- `display: flex; justify-content: center; align-items: center;` 


# **`z index`?**    
- Controls stack order; works only on positioned elements.
- 




## visibility:hidden display:none *ngIf


> In web development, the difference between `visibility:hidden` and `display:none` is important.
>
> * **`visibility:hidden`** → The element stays in the DOM and still takes up space in the layout, but it isn’t visible. For example, you might use this when you want to hide content temporarily without breaking alignment.
>
> * **`display:none`** → The element is still in the DOM, but it’s completely removed from the layout flow, so it doesn’t take up space. This is typically used when you want to completely collapse the element.
>
> In **Angular specifically**, `[hidden]` is similar to applying `display:none` via binding, while `*ngIf` actually removes the element from the DOM itself.
>
> * `*ngIf` is useful when the element is **conditionally created/destroyed** for performance reasons, since it avoids rendering unnecessary elements.
> * `[hidden]` or `display:none` is useful if you just want to **toggle visibility** without re-rendering.
>
> **In short**:
>
> * `visibility:hidden` → invisible but still takes space.
> * `display:none` → invisible and no space taken.
> * `*ngIf` → not even in the DOM until condition is true.

---
