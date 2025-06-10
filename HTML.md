

## 🟧 HTML5 Interview Questions

### 1. **What is new in HTML5 compared to HTML4?**

**Answer:**
HTML5 introduced:

* Semantic elements like `<header>`, `<footer>`, `<article>`, `<section>`, etc.
* Multimedia support with `<audio>` and `<video>`
* New input types (`date`, `range`, `email`, etc.)
* Local storage APIs (`localStorage`, `sessionStorage`)
* Canvas and SVG support for graphics

---

### 2. **What is the difference between `<section>` and `<div>`?**

**Answer:**
`<section>` is semantic — used for grouping related content.
`<div>` is generic and non-semantic — used only for styling or layout.

```html
<section>
  <h2>Blog Posts</h2>
  <article>Post 1</article>
</section>
```

---

### 3. **What are some HTML5 form enhancements?**

**Answer:**

* New input types: `email`, `tel`, `url`, `color`, `date`
* New attributes: `required`, `placeholder`, `autofocus`, `pattern`

---

## 🟦 CSS3 Interview Questions

### 4. **What are some major features of CSS3?**

**Answer:**

* Media queries (for responsive design)
* Flexbox and Grid
* Animations & transitions
* Rounded corners (`border-radius`)
* Shadows (`box-shadow`, `text-shadow`)

---

### 5. **Difference between `em`, `rem`, `%`, `px`?**

**Answer:**

* `px`: fixed size
* `%`: relative to parent
* `em`: relative to the font-size of the parent
* `rem`: relative to the root (`html`) font size

---

### 6. **What is specificity in CSS?**

**Answer:**
Specificity defines which CSS rule takes precedence:

* Inline styles: **1000**
* ID selectors: **100**
* Class, pseudo-class, attribute: **10**
* Element/tag selectors: **1**

---

## 💠 LESS & SASS Interview Questions

### 7. **What are LESS and SASS?**

**Answer:**
They are CSS preprocessors — they extend CSS with:

* Variables
* Nesting
* Mixins
* Functions

---

### 8. **Example of variables and nesting in SASS/LESS**

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

### 9. **What is a mixin in SASS/LESS?**

**Answer:**
A reusable block of code.

**SASS Example:**

```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box { @include border-radius(10px); }
```

---

### 10. **SASS vs LESS – What's the difference?**

| Feature     | SASS                   | LESS                 |
| ----------- | ---------------------- | -------------------- |
| Syntax      | SCSS (`.scss`) or SASS | LESS syntax          |
| Language    | Ruby/Node-based        | JavaScript-based     |
| Community   | Larger, more features  | Simpler, less strict |
| Use with JS | Not easily integrated  | Easier in some cases |

---

Great question! Here's a clear and concise explanation of **`<div>` vs `<span>`** — often asked in frontend interviews:

---

## 🆚 `<div>` vs `<span>`

| Feature          | `<div>`                       | `<span>`                    |
| ---------------- | ----------------------------- | --------------------------- |
| Type             | **Block-level** element       | **Inline** element          |
| Default behavior | Starts on a new line          | Stays within the same line  |
| Use case         | Layout & grouping sections    | Styling small parts of text |
| Styling target   | Useful for containers/layouts | Ideal for inline styling    |
| HTML5 Semantic?  | No                            | No                          |

---

## ✅ Example

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

## 🧠 When to Use:

* Use **`<div>`**: when structuring or grouping content (layouts, sections, cards).
* Use **`<span>`**: when targeting a **small portion of inline text** for styling or scripting.

---



### ✅ Use of Semantic Tags in HTML5

**Semantic tags** clearly describe the **meaning** of the content they enclose, both for **developers** and **browsers (including screen readers & SEO engines)**.

---

## 🔹 Common Semantic Tags & Their Uses

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

## 🧠 Why Use Semantic Tags?

* ✅ **Accessibility** – Screen readers can navigate content better
* ✅ **SEO** – Search engines understand page structure more effectively
* ✅ **Maintainability** – Easier for developers to read and maintain code
* ✅ **Consistency** – Clear separation of sections improves structure

---

## 💡 Example:

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

---


In HTML5, you can **create custom tags** using non-standard element names — these are called **custom elements** (part of Web Components). However, using them properly involves JavaScript.

---

## ✅ 2 Ways to Create Custom Tags

### 1. 🛠️ **Informal Custom Tags** (HTML only)

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

### 2. ⚙️ **Formal Custom Elements (Web Components)**

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

## 🔒 Rules for Custom Tags

* Must contain a **dash** (`-`), e.g. `my-card`, `user-profile`
* Should be defined via `customElements.define()`
* Can include Shadow DOM, lifecycle methods, etc.

---

## 🎯 Use Cases

* Encapsulated UI components (`<user-profile>`, `<app-navbar>`)
* Reusable design elements (`<product-card>`, `<fancy-button>`)
* Progressive web apps

---

Would you like a demo of advanced features like **Shadow DOM**, **properties**, or **events** in a custom tag?





