
## SSR and SSG

- In Next.js, we can implement both **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** using two special data-fetching functions.


## **SSR – `getServerSideProps()`**

- If a page requires fresh data on every request, we use `getServerSideProps()`. 
- This function runs **on the server at request time**, and the result is sent to the browser.

**Example:**

```js
export async function getServerSideProps(context) {
  const data = await fetch('https://api.example.com');
  return {
    props: { data },
  };
}
```

This ensures the content is always up to date — perfect for dashboards, authenticated content, or real-time updates.

---

## **SSG – `getStaticProps()`**

For content that doesn’t change frequently, we use `getStaticProps()`. It runs **at build time**, generating static HTML for fast performance and better SEO.

**Example:**

```js
export async function getStaticProps() {
  const data = await fetch('https://api.example.com');
  return {
    props: { data },
    revalidate: 60, // ISR: Regenerates every 60 seconds
  };
}
```

This approach is ideal for blogs, marketing pages, or product listings. With `revalidate`, we also get **Incremental Static Regeneration (ISR)** — allowing static pages to update periodically without a full rebuild.

---

## **Using Both in One App**

Next.js lets us use SSR and SSG on different pages within the same application. For example:

* `/news/[slug]` → `getStaticProps` for public news articles
* `/admin/dashboard` → `getServerSideProps` for live analytics

---

### ✅ Summary:

| Feature     | SSR (`getServerSideProps`)        | SSG (`getStaticProps`)          |
| ----------- | --------------------------------- | ------------------------------- |
| Runs        | On every request                  | At build time                   |
| Performance | Slower (fresh content)            | Faster (cached)                 |
| Use Case    | Authenticated pages, dynamic data | Blogs, product pages, SEO pages |
| Bonus       | SEO-friendly                      | Supports ISR with `revalidate`  |




## **Dynamic routing**

- Dynamic routes use file naming with square brackets. Example:

```bash
pages/post/[id].js → /post/123
```

Use `getStaticPaths` with `getStaticProps` for SSG or `getServerSideProps` for SSR.

---

## **Shallow routing**

- Shallow routing allows you to change the URL without running data-fetching methods again.

```js
router.push('/about?name=John', undefined, { shallow: true });
```

---


## **getServerSideProps and getStaticProps in the same file**


No. A page can use only one of `getStaticProps`, `getServerSideProps`, or `getInitialProps`.





## Client-Side Rendering (CSR)

**Definition:**
Client-side rendering means the **initial HTML is minimal or empty**, and the content is **rendered in the browser using JavaScript**, typically with React.

### 🔸 Key Characteristics:

| Feature       | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| Initial Load  | Blank HTML → JS loads → React mounts → content appears                     |
| SEO           | Poor (search engines see empty HTML initially unless pre-rendered with JS) |
| Performance   | Slower initial load; faster navigation afterward                           |
| Framework Use | Common in SPAs (React, Vue, Angular)                                       |

### 🔹 Example:

```js
// A typical React useEffect that renders content after mounting
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);
```

---

## Client-Side Fetching

**Definition:**
Client-side fetching is about **fetching data in the browser after the component loads**, usually with `fetch`, `axios`, or `useEffect`.

### 🔸 Key Characteristics:

| Feature         | Description                                              |
| --------------- | -------------------------------------------------------- |
| Timing          | Data fetched **after** component mounts (on client only) |
| Usage           | In any rendering strategy (CSR, SSR, SSG)                |
| SEO Impact      | Not SEO-friendly (HTML doesn’t contain the fetched data) |
| User Experience | May show a loader/spinner while data arrives             |

### 🔹 Example:

```tsx
function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => <p key={p.id}>{p.name}</p>)}
    </div>
  );
}
```

---

**Summary Table**

| Aspect                  | Client-Side Rendering (CSR)   | Client-Side Fetching                    |
| ----------------------- | ----------------------------- | --------------------------------------- |
| Concept                 | Renders everything in browser | Fetches data in browser post-render     |
| Happens on              | Entire UI rendered on client  | Data fetch happens on client            |
| HTML Returned by Server | Empty or minimal              | HTML is static or template-based        |
| SEO                     | Poor                          | Poor                                    |
| Use Case                | SPAs                          | When content isn’t required immediately |
| Can coexist with        | Client-Side Fetching          | CSR, SSR, or SSG                        |

---






## **client side fetching vs SSR**

| Client-Side                           | Server-Side (SSR)                    |
| ------------------------------------- | ------------------------------------ |
| Runs in the browser after page load   | Runs on the server for every request |
| Good for dynamic UIs, not SEO         | Good for SEO and protected pages     |
| Uses `useEffect`, SWR, or React Query | Uses `getServerSideProps`            |

---


## **Code splitting?**

Next.js automatically splits code per route. Only the JavaScript required for the current page is loaded.

---

## **Optimize images**


Use the `<Image />` component from `next/image`:

```js
import Image from 'next/image';
<Image src="/logo.png" width={200} height={100} alt="Logo" />
```

It supports lazy loading, resizing, and optimization out of the box.

---

## **Incremental Static Regeneration (ISR)?**


ISR lets you update static pages **after deployment** without rebuilding the whole site. Use `revalidate`:

```js
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 10, // Regenerates after 10 seconds
  };
}
```

---


## **Deployment**



* **Vercel** (official, auto-optimized)
* **Netlify** (via Next plugin)
* **Custom Node server** with `next start`
* **Docker**, **AWS**, **Azure**, etc.

---

### **Enable environment variables**


Use `.env.local`, `.env.production` etc.

* Prefix with `NEXT_PUBLIC_` to expose them to the browser:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## **Protect page**



* Use `getServerSideProps` to check auth cookies/token
* Redirect unauthenticated users:

```js
if (!session) {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
```

---

### **Middleware**


Yes (Next.js 12+). Use `middleware.ts` in the root:

```ts
import { NextResponse } from 'next/server';
export function middleware(req) {
  const isAuth = req.cookies.get('token');
  if (!isAuth) return NextResponse.redirect('/login');
}
```

---


### 12. **Can Next.js be used for mobile apps?**


Not directly. Next.js is for web. For mobile apps, use React Native. But you can build a **PWA** using Next.js.

---

### 13. **Can Next.js support micro-frontends?**


Yes, via module federation or runtime composition. Vercel’s platform or `next/dynamic` can help load micro-apps.



Here’s a clear **comparison between Next.js and Node.js** that will help you in interviews or architecture discussions:

---

## ✅ **Next.js vs Node.js – Key Differences**

| Feature               | **Next.js**                                       | **Node.js**                                                                |
| --------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| **Type**              | Web framework (built on React and Node.js)        | Runtime environment                                                        |
| **Use Case**          | Building full-stack React web apps (SSR/SSG/ISR)  | Running JavaScript server-side applications (APIs, CLI tools, etc.)        |
| **Built On**          | React + Node.js + Webpack + Babel                 | V8 JavaScript engine (Google Chrome)                                       |
| **Rendering Modes**   | SSG, SSR, CSR, ISR                                | No built-in rendering; you have to build it manually (e.g., using Express) |
| **Routing**           | File-based routing system                         | No built-in routing – needs frameworks like Express or Fastify             |
| **API Handling**      | Built-in API routes inside `/pages/api`           | Requires libraries like Express, Koa, or Hapi to handle routes             |
| **Front-end**         | Built-in with React                               | Not included; must integrate manually with frontend frameworks             |
| **Hosting**           | Optimized for platforms like Vercel               | Hosted on traditional Node.js hosting (Heroku, AWS, etc.)                  |
| **Development Focus** | Focused on frontend + SSR + full-stack React apps | General-purpose JavaScript backend development                             |
| **Learning Curve**    | Easier if familiar with React                     | Steeper for full-stack apps (must wire up everything)                      |

---

## ✅ **In Simple Terms:**

* 🟦 **Node.js** is like the engine — it lets you run JavaScript outside the browser (like on a server).
* 🟩 **Next.js** is a framework that **uses Node.js under the hood** to run your React app with advanced features like SSR and routing.

---

## ✅ **When to Use Which?**

### Use **Node.js** when:

* You need a **custom backend** (API server, microservices)
* You're building a **REST API** or **GraphQL server**
* You want full control over request/response handling

### Use **Next.js** when:

* You're building a **React-based web application**
* You need SEO-friendly content (SSR, SSG)
* You want both frontend + backend (API) in the same codebase

---

## ✅ **Example Analogy:**

* **Node.js** = Raw ingredients + your kitchen → You build everything from scratch.
* **Next.js** = A modern kitchen with tools + pre-built recipes → You cook faster and easier (especially React apps).

---

If you’d like, I can also show:

* A **code comparison**: building the same app in Next.js and Node.js
* A **decision tree**: When to pick what based on the project needs

Let me know!


Here are some **project-based Next.js and JSS (CSS-in-JS)** interview questions to evaluate deeper knowledge through practical scenarios. These are commonly asked in mid to senior-level frontend roles:

---

## ✅ **Project-Based Questions – Next.js**

### 1. **You’re building an e-commerce app with Next.js. Some pages like product listing can be static, but stock availability must be real-time. How do you design the data-fetching strategy?**

**Expected Answer:**

* Use `getStaticProps` for listing page (static content)
* Combine with client-side fetching or `getServerSideProps` for live data like stock
* Or use ISR (`revalidate`) for semi-dynamic stock updates

---

### 2. **How would you implement authentication in a Next.js application?**

**Expected Answer:**

* Use JWT or session-based authentication
* Store token in `HttpOnly` cookies for security
* Use middleware (Next.js 13+) or API routes to validate user
* Protect pages using `getServerSideProps` to redirect unauthorized users

---

### 3. **You have a blog built with markdown files and Next.js. How do you generate routes and render content dynamically?**

**Expected Answer:**

* Read `.md` files during build using `fs` and `gray-matter`
* Use `getStaticPaths` to generate dynamic routes
* Use `getStaticProps` to pass markdown content as props
* Render using `react-markdown` or custom parser

---

### 4. **How do you optimize a Next.js app for SEO and performance?**

**Expected Answer:**

* Use SSG for fast load and crawlable pages
* Use `next/head` to add meta tags
* Lazy load images using `next/image`
* Minify JS/CSS, enable compression
* Prefetch links using `<Link prefetch />`

---

### 5. **How do you handle image storage and rendering for a CMS-backed Next.js site?**

**Expected Answer:**

* Use CMS like Strapi/Contentful to upload/store images
* Fetch URLs and use `next/image` for optimization
* Optionally, use a CDN or image proxy layer

---

### 6. **In a multi-language app, how would you structure i18n in Next.js?**

**Expected Answer:**

* Use `next-i18next` or built-in i18n routing in Next.js
* Store translations in JSON files
* Use `<Trans />` component or `useTranslation` hook
* Configure `next.config.js` with supported locales

---

## ✅ **Project-Based Questions – JSS / CSS-in-JS**

### 1. **You’re building a design system with JSS. How would you manage themes across your application?**

**Expected Answer:**

* Use a centralized `ThemeProvider` (e.g., Material-UI or emotion)
* Define themes as JS objects (light/dark)
* Use hooks like `useTheme()` inside components
* Apply conditional styles based on theme values

---

### 2. **You need to create reusable button components with multiple variants (primary, secondary, danger). How would you approach this using JSS?**

**Expected Answer:**

* Use `clsx` or class composition
* Define base and variant classes in JSS

```js
const useStyles = createUseStyles({
  button: {
    padding: 10,
    borderRadius: 4,
  },
  primary: {
    background: 'blue',
  },
  danger: {
    background: 'red',
  },
});
```

* Use dynamically with `className={clsx(classes.button, classes[variant])}`

---

### 3. **How do you isolate styles to prevent global leakage in a large-scale app using CSS-in-JS?**

**Expected Answer:**

* Use locally scoped class names via JSS or Emotion
* Avoid global styles unless absolutely necessary
* For global styles, use `@global` rule or `<GlobalStyles />` component

---

### 4. **Your app theme color is changing based on user preference (dark/light mode). How do you handle this with JSS?**

**Expected Answer:**

* Store user preference in global context or localStorage
* Update the theme and pass it via `ThemeProvider`
* Use `createUseStyles(theme => ({ ... }))` to respond to theme updates

---

### 5. **If your component needs dynamic styles based on props (e.g., `isDisabled`, `isError`), how would you write that in JSS?**

**Expected Answer:**

```js
const useStyles = createUseStyles({
  input: props => ({
    borderColor: props.isError ? 'red' : 'gray',
    backgroundColor: props.isDisabled ? '#f5f5f5' : 'white',
  }),
});
```

---

Would you like me to generate a **PDF-style cheat sheet** with these Q\&A, or build a **mock coding task** based on Next.js + JSS for interview prep?

