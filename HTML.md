

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

Would you like **hands-on code challenges** or **more advanced SASS use cases** for interviews (like mixin with arguments, loops, conditionals)?
