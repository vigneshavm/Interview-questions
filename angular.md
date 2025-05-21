

| **Category**                  | **Topics**                                                                                                                                                                                                 | **Category1**                  | **Topics1**                                                                                                                                                                                                 |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Core Architecture**        | [Component-Based Architecture](#component-based-architecture), [NgModules and App Structure](#ngmodules-and-app-structure), [Standalone Components](#standalone-components)                              | **Change Detection**          | [Change Detection and Zone.js](#change-detection-and-zonejs), [OnPush Change Detection Strategy](#onpush-change-detection-strategy)                                                                      |
| **Component Communication**  | [Component Communication Techniques](#component-communication-techniques), [Angular Lifecycle Hooks](#angular-lifecycle-hooks), [ViewChild & ViewChildren](#viewchild--viewchildren)                    | **Forms**                     | [Reactive vs Template-Driven Forms](#reactive-vs-template-driven-forms), [Custom Validators](#custom-validators), [Handling Large Forms](#handling-large-forms)                                          |
| **Routing & Navigation**     | [Lazy Loading Modules](#lazy-loading-modules), [Lazy Loading Preloading Strategies](#lazy-loading-preloading-strategies), [Routing & Child Routes](#routing--child-routes), [AuthGuard](#authguard)     | **Reactive Programming**      | [RxJS in Angular](#rxjs-in-angular), [RxJS Mapping Operators: switchMap, mergeMap, concatMap, exhaustMap](#rxjs-mapping-operators-switchmap-mergemap-concatmap-exhaustmap)                               |
| **State Management**         | [NgRx for State Management](#ngrx-for-state-management)                                                                                                                                                    | **Performance**               | [Performance Optimization](#performance-optimization), [Debugging Performance Issues](#debugging-performance-issues)                                                                                      |
| **Code Organization**        | [Structuring Angular Libraries](#structuring-angular-libraries)                                                                                                                                           | **Testing**                   | [Testing Angular Components](#testing-angular-components)                                                                                                                                                  |
| **Dependency Injection (DI)**| [Dependency Injection in Angular](#dependency-injection-in-angular)                                                                                                                                        | **Security**                  | [Security: XSS and CSRF Protection](#security-xss-and-csrf-protection), [Authentication and Role-Based Access](#authentication-and-role-based-access)                                                   |
| **Micro-Frontend**           | [Micro-Frontend Architecture](#micro-frontend-architecture)                                                                                                                                                | **Token & Auth Management**   | [Token Expiration and Refresh Logic](#token-expiration-and-refresh-logic)                                                                                                                                 |
| **CI/CD & DevOps**           | [CI/CD Practices](#cicd-practices)                                                                                                                                                                         | **HTTP & Interceptors**       | [HTTP Interceptors in Angular](#http-interceptors-in-angular)                                                                                                                                             |
| **Templates & UI**           | [Directives](#directives), [Pipes](#pipes)                                                                                                                                                                |                               |                                                                                                                                                                                                            |
                                                                                |



## Component-Based Architecture

- Angular follows a component-based architecture, where the UI is broken into smaller, reusable components. 
- Each component controls a patch of screen called a view. 
- Components encapsulate HTML, CSS, and logic, promoting reusability and maintainability.
- Angular applications start with a root component and create a tree of components.

## Change Detection and Zone.js



###  What is Change Detection?

Change detection in Angular is the process by which Angular determines whether the **model (component state)** has changed and updates the **view (DOM)** accordingly.

When change detection runs:

1. Angular walks through the component tree.
2. It compares the current values of bound properties (e.g., in templates) with the previous ones.
3. If a change is detected, it updates the DOM.

---

###  What is Zone.js?

**Zone.js** is a library that patches async operations like:

* `setTimeout`
* `Promise.then`
* `addEventListener`
* `XHR`/`fetch`
* Angular’s `HttpClient`

> **Purpose**: Zone.js notifies Angular **when** to run change detection, so we don't have to manually trigger it.

For example:

```ts
setTimeout(() => {
  this.title = 'Updated!';
  // Angular knows something changed here — thanks to Zone.js.
}, 1000);
```

---

###  How Change Detection Works with Zone.js

1. Zone.js wraps all async operations in a “zone.”
2. When an async task completes (like an HTTP call or timer), Zone.js tells Angular to run change detection.
3. Angular checks all components and updates the view if necessary.

---

###  Change Detection Flow

```plaintext
User Action / Async Event
        ↓
     Zone.js
        ↓
Run Angular Change Detection
        ↓
Compare Data vs DOM Bindings
        ↓
Update DOM if Needed
```

---

###  Disabling Zone.js (Advanced)

We can manually control change detection without Zone.js (e.g., for performance in large apps):

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [],
  ngZone: 'noop' // disables Zone.js
});
```

Without Zone.js, you must manually trigger CD using `ChangeDetectorRef.detectChanges()`.

---

###  Optimizing with OnPush Strategy

Using `ChangeDetectionStrategy.OnPush` minimizes unnecessary checks by only triggering CD when:

* `@Input()` references change
* Events inside the component occur
* You explicitly call `markForCheck()` or `detectChanges()`

---

###  Debugging Tip

Use `ng.profiler.timeChangeDetection()` in the browser console (when Angular is in dev mode) to measure CD performance.

---

###  Summary

| Concept          | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| Change Detection | Angular mechanism to sync model and view                               |
| Zone.js          | Monkey-patches async APIs to notify Angular when to run CD             |
| Default Mode     | Angular runs CD after every async event                                |
| OnPush           | Runs CD only on reference change or manual trigger                     |
| Manual CD        | Possible using `ChangeDetectorRef.detectChanges()` or `markForCheck()` |

---



## NgModules and App Structure

NgModules are containers for a cohesive block of code with related capabilities. 
In large apps, we structure modules into CoreModule (singleton services), SharedModule (common components), FeatureModules (business-specific features), and AppModule (root).
This enhances separation of concerns and improves lazy loading.


* `NgModule` is a fundamental building block in Angular used to group related components, directives, pipes, and services.
* Decorated with `@NgModule`, it helps organize code and manage dependencies across the app.
* Common NgModule metadata:

  * `declarations`: components, directives, pipes owned by the module
  * `imports`: other modules needed
  * `exports`: declarations to be shared with other modules
  * `providers`: services available in the DI system
  * `bootstrap`: root component (used only in root module)

---

###  **App Structure Best Practices**

* **AppModule**: Root module that bootstraps the app.
* **Feature Modules**: Domain-specific modules (e.g., `UserModule`, `AdminModule`).
* **Shared Module**: Reusable components, directives, pipes used across modules.
* **Core Module**: Singleton services, guards, interceptors — imported only once in `AppModule`.

---

###  **Typical Folder Structure**

```
src/
├── app/
│   ├── core/      → Singleton services, guards
│   ├── shared/    → Reusable components, pipes
│   ├── features/  → Feature modules (e.g., users, products)
│   └── app.module.ts
```

---

###  **Performance & Scalability Tips**

* Use **lazy loading** (`RouterModule.forChild`) for large feature modules.
* Avoid declaring a component in multiple modules — extract it to `SharedModule` if needed.
* Keep services in `CoreModule` to prevent duplicate instances.

---

###  **Angular 14+ (Optional Mention)**

* Angular supports **standalone components** which don’t require NgModules.
* Useful for lightweight components or micro-frontend setups.

---


## Standalone Components




### 🎯 Sample Interview Closing

> “Standalone components are Angular’s move toward a simpler, more modular architecture by removing the need for NgModules, making development faster and apps more tree-shakable.”


### ✅ **What are Standalone Components?**

* Introduced in **Angular 14** to simplify module management.
* Components declared with `standalone: true` **don’t require being declared inside an NgModule**.
* They can directly import other standalone components, directives, and pipes.

---

### ⚙️ **Key Benefits**

* **Reduces boilerplate:** No need for NgModules just to declare components.
* Simplifies **small or isolated features** like modals, widgets, or utility components.
* Encourages a more **functional and tree-shakable** app structure.
* Easier for micro-frontends and library development.

---

### 🧩 **How It Works**

* Use `standalone: true` in `@Component` decorator.
* Import necessary Angular modules (e.g., `CommonModule`) in the `imports` array inside the component metadata.
* Can be bootstrapped directly using `bootstrapApplication()` in Angular 14+ apps.

```ts
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello Standalone!</h1>`
})
export class HelloComponent {}
```

---

### 🚀 **App Bootstrapping with Standalone Components**

* Instead of `NgModule`, use `bootstrapApplication()` in `main.ts` to start the app.

```ts
bootstrapApplication(HelloComponent);
```

---

### 📁 **When to Use?**

* New projects targeting Angular 14+.
* Small, reusable components or micro frontends.
* When you want to reduce complexity by skipping NgModules.

---

### ⚠️ **Backward Compatibility**

* Works seamlessly with existing NgModules and components.
* Can gradually migrate from NgModules to standalone components.

---


---



## Component Communication Techniques

### 🎯 Interview Summary Line

> “Angular provides multiple flexible ways for components to communicate—via inputs and outputs for parent-child, shared services with RxJS for siblings or unrelated components, and advanced options like ViewChild or state management for complex apps.”


### 1. **Parent to Child Communication**

* Use **@Input()** decorator to pass data from a parent component to its child.
* Data flows **downward** via property binding.

```ts
@Input() userName: string;
```

---

### 2. **Child to Parent Communication**

* Use **@Output()** with **EventEmitter** to send events or data from child to parent.
* Parent listens using event binding `(<child-comp> (eventName)="handler($event)">)`.

```ts
@Output() notify = new EventEmitter<string>();
```

---

### 3. **Sibling Communication**

* Use a **shared service** with RxJS `Subject` or `BehaviorSubject` for cross-component communication.
* Both siblings inject the service and subscribe/emit events.

---

### 4. **Using a Shared Service**

* Singleton service injected via dependency injection.
* Common for communication between distant components or unrelated components.

---

### 5. **ViewChild / ContentChild**

* Use `@ViewChild()` or `@ContentChild()` to access a child component, directive, or DOM element directly.
* Useful for invoking methods or accessing properties on child components.

---

### 6. **Template Reference Variables**

* Use template variables (`#ref`) to pass element or component references within the template.

---

### 7. **State Management Libraries (NgRx, Akita)**

* For large-scale apps, use centralized state management for communication and state sharing.

---


---



## OnPush Change Detection Strategy

### 🎙️ Sample Interview Closing Statement

> “OnPush lets Angular skip checking the component unless input references change or events occur, which drastically improves performance, but it requires immutable data or manual triggers to keep the view updated.”


### ✅ **What is OnPush?**

* An Angular **Change Detection strategy** that optimizes performance by limiting when the component’s view is checked for updates.
* Set using `changeDetection: ChangeDetectionStrategy.OnPush` in the component decorator.

---

### ⚙️ **How It Works**

* Angular runs change detection **only when:**

  * The component’s **@Input()** properties change by reference.
  * An **event originated from the component or its children** (e.g., user input).
  * An **Observable bound via the async pipe emits a new value**.
  * You manually trigger detection (`markForCheck()` or `detectChanges()`).

---

### 🚀 **Benefits**

* **Improves performance** by reducing unnecessary checks.
* Ideal for **immutable data patterns**.
* Especially useful in large or complex component trees.

---

### ⚠️ **Things to Watch Out For**

* Changes to object properties **won’t trigger CD** unless the object reference changes.
* Requires discipline: always use **immutable data** or trigger change detection manually.
* Not suitable if the component depends on mutable objects without emitting new references.

---

### 🎯 **Typical Use Cases**

* Components with **inputs from immutable data sources**.
* Components relying on **Observables** with the async pipe.
* Performance-critical parts of an app with many bindings.

---


---



## Reactive vs Template-Driven Forms

### 🎯 Sample Interview Closing Line

> “Template-driven forms are great for simple scenarios with minimal logic, while reactive forms offer more power and control, making them better suited for complex and scalable applications.”


### 1. **Template-Driven Forms**

* Driven mainly by the **template HTML** with directives like `ngModel`.
* Easier to use and good for **simple forms** with less complex logic.
* Uses **two-way data binding** (`[(ngModel)]`) to sync UI and model.
* Form structure is **implicitly defined** in the template.
* Validation handled declaratively with built-in directives (e.g., `required`, `minlength`).
* Less scalable for complex forms or dynamic form controls.

---

### 2. **Reactive Forms**

* Form logic and structure are defined **explicitly in the component class** using `FormGroup`, `FormControl`, and `FormArray`.
* Provides **more control and flexibility** over form behavior.
* Supports **dynamic form creation and complex validations**.
* Uses **immutable data structures**, making it easier to track form state.
* Validation can be synchronous or asynchronous, applied programmatically.
* Better suited for **large, complex, or reactive applications**.

---

### 3. **Comparison Summary**

| Feature      | Template-Driven     | Reactive                      |
| ------------ | ------------------- | ----------------------------- |
| Form setup   | Mostly in template  | Mostly in component class     |
| Data binding | Two-way (`ngModel`) | Explicit, reactive form model |
| Scalability  | Simple forms        | Complex & dynamic forms       |
| Validation   | Template-based      | Programmatic & flexible       |
| Testing      | Harder to unit test | Easier to unit test           |
| Use case     | Simple, quick forms | Complex, large-scale forms    |

---


---



## Custom Validators

### 🎯 Interview Summary

> “Custom validators allow you to enforce complex or domain-specific validation rules in Angular forms, improving form reliability and user experience.”

### ✅ **What are Custom Validators?**

* Functions you write to implement **custom validation logic** beyond Angular’s built-in validators.
* Used in **Reactive Forms** (or Template-Driven with some tweaks) to enforce specific business rules.

---

### ⚙️ **How to Create Custom Validators**

* A **validator function** takes a `FormControl` (or `FormGroup`) and returns:

  * `null` if the control is valid.
  * An **error object** if invalid, e.g., `{ 'customError': true }`.
* Can be **sync** or **async** (returns `Observable` or `Promise` for async validators).

---

### 🔑 **Types of Validators**

* **Control-level validator:** validates a single control.
* **Group-level validator:** validates a group of controls together (cross-field validation).

---

### 🧩 **Example (Control-Level Validator)**

```ts
function forbiddenNameValidator(control: FormControl): ValidationErrors | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { 'forbiddenName': { value: control.value } } : null;
}
```

---

### 🧩 **Example (Group-Level Validator)**

```ts
function passwordMatchValidator(group: FormGroup): ValidationErrors | null {
  return group.get('password')?.value === group.get('confirmPassword')?.value
    ? null : { 'mismatch': true };
}
```

---

### 🚀 **Usage**

* Add to `FormControl` or `FormGroup` via the `validators` property:

```ts
this.form = new FormGroup({
  username: new FormControl('', [forbiddenNameValidator]),
  passwords: new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  }, { validators: passwordMatchValidator })
});
```

---






## Lazy Loading Modules


### 🎯 Interview Summary Line

> “Lazy loading defers loading feature modules until they are needed, significantly improving the initial load performance and scalability of Angular apps.”


### ✅ **What is Lazy Loading?**

* Technique to **load Angular modules asynchronously** only when the user navigates to a route that requires them.
* Improves **initial app load time** by splitting the app into smaller bundles.
* Helps optimize performance, especially for large apps.

---

### ⚙️ **How It Works**

* Configure routes with `loadChildren` property in the main routing module.
* Angular downloads the module **on demand**, not at app startup.
* Uses **dynamic `import()` syntax** for lazy loading in Angular 8+.

---

### 🧩 **Example Route Setup**

```ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

---

### 🔑 **Benefits**

* Reduces **initial bundle size**, faster startup.
* Enables **feature modules to be loaded independently**.
* Better resource usage by loading code only when needed.

---

### ⚠️ **Considerations**

* Overuse can lead to **too many small bundles**, impacting network overhead.
* Must handle **shared services/providers** carefully to avoid duplicates.
* Lazy loaded modules have their own **injector scope**.

---



## Lazy Loading Preloading Strategies


### ✅ **What is Preloading?**

* Preloading loads lazy modules **in the background after the app is bootstrapped**.
* Improves user experience by speeding up future navigation without blocking the initial load.

---

### 🔑 **Built-in Preloading Strategies**

1. **NoPreloading (Default)**

   * No preloading; modules load only when the route is activated.

2. **PreloadAllModules**

   * Preloads **all lazy-loaded modules** immediately after the app starts.
   * Good when you want faster navigation and don’t care about initial bandwidth.

3. **Custom Preloading Strategy**

   * Allows fine-grained control over which modules to preload based on custom logic.
   * Implemented by creating a class that implements `PreloadingStrategy`.

---

### 🧩 **How to Use Preloading Strategies**

* Set the strategy in the router module:

```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
```

* For **NoPreloading** (default), just omit the preloadingStrategy or set explicitly:

```ts
RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading });
```

---

### 🧩 **Example: Custom Preloading Strategy**

```ts
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
```

* Use it in routes by setting a `data` property:

```ts
const routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { preload: true }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: { preload: false }
  }
];
```

* Register the custom strategy in app module:

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy })],
  providers: [SelectivePreloadingStrategy],
})
export class AppModule {}
```

---

### 🎯 Interview Summary

> “Preloading strategies let you balance app startup speed and user experience by controlling when and which lazy modules load—default is no preload, `PreloadAllModules` loads all eagerly after startup, and custom strategies allow conditional preloading.”

---




## RxJS in Angular

**RxJS (Reactive Extensions for JavaScript)** is a powerful library for reactive programming using observables, to make it easier to compose asynchronous or callback-based code. 
In Angular, RxJS is fundamental to managing streams of data, particularly in forms, HTTP calls, component communication, and state management.

---

### 🔹 Core Concepts of RxJS

### 1. **Observables**

* Represent a stream of data that can be observed over time.
* Can emit multiple values over time (unlike Promises which emit one).

```ts
import { Observable } from 'rxjs';

const obs$ = new Observable(observer => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
```

### 2. **Operators**

Operators are pure functions used to transform, filter, or combine observable streams.

* **Creation Operators**: `of()`, `from()`, `interval()`, `timer()`
* **Transformation Operators**: `map()`, `pluck()`, `switchMap()`, `mergeMap()`
* **Filtering Operators**: `filter()`, `debounceTime()`, `distinctUntilChanged()`
* **Combination Operators**: `combineLatest()`, `forkJoin()`, `concat()`, `merge()`
* **Error Handling**: `catchError()`, `retry()`, `retryWhen()`

Example:

```ts
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

of(1, 2, 3, 4)
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x * 10)
  )
  .subscribe(console.log); // Output: 20, 40
```

### 3. **Subjects**

Subjects are both observables and observers. Useful for multicasting data.

Here’s a concise comparison of **Subject**, **BehaviorSubject**, **ReplaySubject**, and **AsyncSubject** — perfect for interviews:

---

## ✅ Subject Types Comparison in RxJS

| Type                | Initial Value          | Emits to New Subscribers                                            | Stores Previous Values?             | Use Case Example                                            |
| ------------------- | ---------------------- | ------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------- |
| **Subject**         | No                     | Only emits **future** values                                        | No                                  | Event emitters, simple multicasting                         |
| **BehaviorSubject** | Yes (required)         | Emits **latest** value immediately + future                         | Stores **latest** value only        | State management, current value streaming                   |
| **ReplaySubject**   | Optional (buffer size) | Emits **all or buffer** values emitted before subscription + future | Stores **buffered** previous values | Replay past events (e.g., chat messages)                    |
| **AsyncSubject**    | No                     | Emits **only the last** value **when completed**                    | Stores **last** value               | Single-value async operations (e.g., HTTP calls completion) |

---

### 🔍 Detailed Behavior

| Subject Type        | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| **Subject**         | Multicasts to subscribers; new subscribers get only values emitted after subscription.     |
| **BehaviorSubject** | Holds the latest value; new subscribers immediately receive that latest value.             |
| **ReplaySubject**   | Buffers a number of previous values; new subscribers receive buffered values on subscribe. |
| **AsyncSubject**    | Waits until the source completes; then emits the **last** value and completes.             |

---

### 🔥 Example Code Snippet

```ts
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

const subject = new Subject<number>();
subject.next(1);
subject.subscribe(val => console.log('Subject:', val)); // No output (missed emission)
subject.next(2); // Logs: Subject: 2

const behaviorSubject = new BehaviorSubject<number>(0);
behaviorSubject.next(1);
behaviorSubject.subscribe(val => console.log('BehaviorSubject:', val)); // Logs: 1
behaviorSubject.next(2); // Logs: 2

const replaySubject = new ReplaySubject<number>(2); // buffer size 2
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(val => console.log('ReplaySubject:', val)); // Logs: 2, 3
replaySubject.next(4); // Logs: 4

const asyncSubject = new AsyncSubject<number>();
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.subscribe(val => console.log('AsyncSubject:', val)); // No output yet
asyncSubject.next(3);
asyncSubject.complete(); // Logs: 3 (only on complete)
```

---

### Summary

| Use When...                                                                                    |
| ---------------------------------------------------------------------------------------------- |
| **Subject:** You want simple multicast of future values.                                       |
| **BehaviorSubject:** You need to emit the latest/current state immediately to new subscribers. |
| **ReplaySubject:** You want to replay a set of past values to new subscribers.                 |
| **AsyncSubject:** You only want to emit the final value once the observable completes.         |

---


```ts
import { Subject } from 'rxjs';

const subject = new Subject<number>();
subject.subscribe(val => console.log('A:', val));
subject.next(1);
subject.subscribe(val => console.log('B:', val));
subject.next(2);
```

Output:

```
A: 1
A: 2
B: 2
```

---

### 🔸 RxJS in Angular

* **HTTP Calls**: Angular’s `HttpClient` returns observables.
* **Reactive Forms**: We can listen to `valueChanges` which is an observable.
* **Component Communication**: Services with `Subject` or `BehaviorSubject`.
* **Async Pipe**: Automatically subscribes to and unsubscribes from observables in templates.

```html
<p>{{ userData$ | async }}</p>
```

---

### 🔸 Common RxJS Pitfalls in Angular

* **Not unsubscribing** from long-lived observables → leads to memory leaks.

  * Use `takeUntil()`, `async` pipe, or `Subscription.unsubscribe()` in `ngOnDestroy`.
* **Improper use of mapping operators** (e.g., using `mergeMap` when `switchMap` is required).
* **Nested subscriptions** → leads to messy and hard-to-maintain code.

---





## RxJS Mapping Operators: switchMap, mergeMap, concatMap, exhaustMap


### 🔄 1. **Transformation Operators**

| Operator   | Purpose                              | Use Case                                                    |
| ---------- | ------------------------------------ | ----------------------------------------------------------- |
| `map()`    | Transform each emitted value         | Modify API response (`map(user => user.name)`)              |
| `filter()` | Only emit values matching condition  | Filter out null/undefined before binding to UI              |
| `tap()`    | Side effects without changing values | Log HTTP responses (`tap(console.log)`)                     |
| `pluck()`  | Extract nested properties            | `pluck('user', 'email')` to get email from response         |
| `scan()`   | Accumulate values (like `reduce`)    | Count clicks or form steps (`scan((acc, _) => acc + 1, 0)`) |

---

### 🔗 2. **Combination Operators**

| Operator           | Purpose                                                  | Use Case                                                               |
| ------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| `merge()`          | Combine multiple observables as they emit                | Merge click & scroll observables                                       |
| `concat()`         | Combine observables **sequentially**                     | Chain login → profile → dashboard data                                 |
| `combineLatest()`  | Emit when **any** observable emits (uses latest of each) | Combine user settings + language preference                            |
| `forkJoin()`       | Emit **once**, after all complete                        | Parallel API calls on page load (`forkJoin([getUser(), getOrders()])`) |
| `withLatestFrom()` | Combine main source with latest from another             | Use form input value on button click                                   |
| `zip()`            | Pair values index-wise                                   | Combine user ID and name from different sources                        |

---

### 🔽 3. **Flattening Operators (Higher-Order Mapping)**

| Operator       | Behavior                                     | Use Case                                          |
| -------------- | -------------------------------------------- | ------------------------------------------------- |
| `switchMap()`  | Cancels previous request, switches to latest | Typeahead / autocomplete search                   |
| `mergeMap()`   | All inner Observables run concurrently       | Send feedback + analytics at same time            |
| `concatMap()`  | Executes in order, one at a time             | Save form steps sequentially                      |
| `exhaustMap()` | Ignores new emissions until current finishes | Prevent multiple API calls on rapid button clicks |

**Example**:

```ts
this.searchForm.valueChanges.pipe(
  debounceTime(300),
  switchMap(value => this.api.search(value))
)
```

---

### ❌ 4. **Error Handling Operators**

| Operator       | Purpose                       | Use Case                                        |
| -------------- | ----------------------------- | ----------------------------------------------- |
| `catchError()` | Catch and handle errors       | Show fallback data on API failure               |
| `retry()`      | Retry on failure N times      | Retry failed login 3 times (`retry(3)`)         |
| `retryWhen()`  | Retry with custom logic/delay | Retry polling logic with backoff                |
| `throwError()` | Emit error manually           | Used in custom validation or manual error flows |

**Example**:

```ts
this.api.getUser().pipe(
  retry(2),
  catchError(err => of(null))
)
```

---

### ⏱️ 5. **Time-Based Operators**

| Operator         | Purpose                                   | Use Case                                    |
| ---------------- | ----------------------------------------- | ------------------------------------------- |
| `debounceTime()` | Emit after silence                        | Typeahead input, avoid over-querying server |
| `throttleTime()` | Emit first, then silence                  | Limit scroll/click event handling           |
| `delay()`        | Emit values after a delay                 | Delay showing a message                     |
| `timeout()`      | Throw error if timeout reached            | Detect API hangs                            |
| `interval()`     | Emit sequence over time                   | Auto-refresh dashboard every 10 seconds     |
| `timer()`        | Emit after delay, optionally at intervals | Delay splash screen or notifications        |

---

### 🧪 6. **Filtering Operators**

| Operator                 | Purpose                               | Use Case                                                    |
| ------------------------ | ------------------------------------- | ----------------------------------------------------------- |
| `first()`                | Emit only the first value             | Get first click or first item from stream                   |
| `last()`                 | Emit only the last value              | Use after complete to get last form state                   |
| `take(n)`                | Take first n values then complete     | Get first 3 suggestions only                                |
| `takeUntil()`            | Complete on another observable's emit | Cancel subscription on destroy (`takeUntil(this.destroy$)`) |
| `skip(n)`                | Skip first n values                   | Skip default/initial values                                 |
| `distinctUntilChanged()` | Emit only when value changes          | Avoid re-rendering form controls                            |

---

### 🔨 7. **Creation Operators**

| Operator      | Purpose                                | Use Case                                |
| ------------- | -------------------------------------- | --------------------------------------- |
| `of()`        | Emit static values                     | Mock HTTP response (`of({ data: [] })`) |
| `from()`      | Convert arrays/promises to Observables | Convert `Promise` to `Observable`       |
| `fromEvent()` | Listen to DOM events                   | Listen to window resize or button click |
| `range()`     | Emit sequence of numbers               | Emit 1 to 10 for pagination             |
| `defer()`     | Lazy Observable creation               | Create Observable only when subscribed  |

---

## 🎯 Quick Summary for Interview

* **switchMap**: Use in live search or cancelable streams
* **mergeMap**: Parallel API calls
* **concatMap**: Step-by-step tasks (e.g., form wizards)
* **exhaustMap**: Ignore rapid clicks
* **catchError + retry**: For robust error handling
* **combineLatest & forkJoin**: Combine multiple streams
* **debounceTime**: Prevent spamming API
* **takeUntil**: Clean up in `ngOnDestroy`

---




### 🔸 Helpful Operators for Angular Use Cases

| Operator       | Use Case                                                                |
| -------------- | ----------------------------------------------------------------------- |
| `switchMap`    | Cancel previous HTTP requests on input change (e.g., typeahead search). |
| `mergeMap`     | Handle parallel HTTP requests (e.g., batch requests).                   |
| `concatMap`    | Queue HTTP requests one after another.                                  |
| `exhaustMap`   | Ignore new requests while one is in progress (e.g., login form submit). |
| `debounceTime` | Wait for user to stop typing before sending HTTP request.               |

---

### 🎯 Interview Summary Line

 - RxJS mapping operators are key for handling async flows in Angular.
 - Choose `switchMap` for cancellation, `mergeMap` for concurrency, `concatMap` for order, and `exhaustMap` to ignore overlapping triggers."


#### ✅ **What Are Mapping Operators?**

* Operators that **transform the value emitted** by one Observable into another Observable.
* Commonly used in Angular for **chaining HTTP requests**, **form events**, or **user interactions**.

---

### 🔁 **Comparison Table**

| Operator     | Behavior                                                         | Use Case Example                    |
| ------------ | ---------------------------------------------------------------- | ----------------------------------- |
| `switchMap`  | Cancels previous inner observable and switches to the latest one | Typeahead search, autocomplete      |
| `mergeMap`   | Subscribes to all inner observables **concurrently**             | Parallel API requests               |
| `concatMap`  | Queues inner observables, processes **one at a time in order**   | Save form steps sequentially        |
| `exhaustMap` | Ignores new inner observables **while one is active**            | Button click that triggers API call |

---

### 🧩 **Code Examples**

#### 🔹 `switchMap`

```ts
searchInput.valueChanges.pipe(
  debounceTime(300),
  switchMap(value => http.get(`/api/search?q=${value}`))
);
```

* Cancels the previous request if a new input comes in.

---

#### 🔹 `mergeMap`

```ts
from(userIds).pipe(
  mergeMap(id => http.get(`/api/user/${id}`))
);
```

* Makes parallel API calls for all user IDs.

---

#### 🔹 `concatMap`

```ts
from(orderSteps).pipe(
  concatMap(step => http.post('/api/process', step))
);
```

* Processes each step **one after another**, maintaining order.

---

#### 🔹 `exhaustMap`

```ts
buttonClick$.pipe(
  exhaustMap(() => http.post('/api/save', formData))
);
```

* Ignores clicks if a request is already in progress.

---


---


## NgRx for State Management

NgRx is suitable for large-scale applications requiring predictable state management. It helps separate concerns and centralizes state using Actions, Reducers, Effects, and Selectors. However, for smaller apps, simple services with Subjects may suffice.



Here’s a concise **interview-style breakdown of NgRx for State Management** in Angular, using bullet points and practical examples:

---

## ✅ **NgRx for State Management (Angular)**

---

### 📌 What is NgRx?

* **NgRx** is a reactive state management library for Angular.
* Inspired by **Redux** (predictable state container).
* Built on top of **RxJS** for observable-based state handling.

---

### 🧠 Why use NgRx?

* Centralizes application state.
* Makes **state predictable and debuggable**.
* Facilitates **time-travel debugging** (using Redux DevTools).
* Ideal for **large-scale applications** with complex state interactions.

---

### 🧱 Core Building Blocks

| Block         | Description                                       | Example                                |
| ------------- | ------------------------------------------------- | -------------------------------------- |
| **Store**     | Global state container (read-only)                | `store.select('users')`                |
| **Actions**   | Describe what happened                            | `loadUsers`, `addUser`, `deleteUser`   |
| **Reducers**  | Pure functions that change state based on actions | `(state, action) => newState`          |
| **Selectors** | Functions to retrieve slices of state             | `selectUsers`, `selectUserById`        |
| **Effects**   | Handle side effects like API calls                | `loadUsers$ = this.actions$.pipe(...)` |

---

### ⚙️ Example Flow

1. **Component Dispatches Action**
   `store.dispatch(loadUsers());`

2. **Effect Handles API Call**

   ```ts
   loadUsers$ = createEffect(() =>
     this.actions$.pipe(
       ofType(loadUsers),
       switchMap(() => this.api.getUsers().pipe(
         map(users => loadUsersSuccess({ users })),
         catchError(error => of(loadUsersFailure({ error })))
       ))
     )
   );
   ```

3. **Reducer Updates State**

   ```ts
   on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
   ```

4. **Component Selects State**

   ```ts
   this.users$ = this.store.select(selectUsers);
   ```

---

### 🔍 Selectors Example

```ts
export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);
```

---

### 📦 Benefits of Using NgRx

* Clear **separation of concerns**
* Scales well in **enterprise applications**
* Makes **testing** easier with pure functions
* Supports **undo/redo**, **logging**, **hot reloading**

---

### 🧩 When to Use NgRx

Use it if:

* Your app has **complex state sharing** between components.
* You need **undo/redo**, caching, or **central control**.
* Many components depend on the same slice of data.

Avoid it if:

* Your app is small/simple. Consider `@ngrx/component-store` or services with `BehaviorSubject`.

---

### 🔐 Bonus: DevTools & Testing

* Integrates with **Redux DevTools** for debugging.
* Reducers and selectors are **pure** → easily testable.
* Effects can be tested with `provideMockActions()` in `TestBed`.

---



## Performance Optimization

Here’s a **bullet-point summary of Angular Performance Optimization** strategies—ideal for interview-style answers:

---

## ✅ **Angular Performance Optimization**

---

### ⚡ **1. Change Detection Strategy**

* Use `ChangeDetectionStrategy.OnPush` to limit unnecessary checks.
* Angular skips re-checking components unless:

  * Input properties change.
  * An observable emits new data.
  * An event is triggered within the component.

**Use case:** High-frequency updates (e.g., dashboards, lists).

---

### 💤 **2. Lazy Loading Modules**

* Load feature modules **on demand** via routing.
* Reduces initial bundle size → faster load time.

**Use case:** Admin modules or rarely used features.

---

### 🧠 \**3. TrackBy in *ngFor**

* Use `trackBy` function to avoid re-rendering full lists.

```html
*ngFor="let item of items; trackBy: trackById"
```

**Use case:** Rendering large lists efficiently.

---

### 🧹 **4. Detach Change Detection**

* Manually detach change detection from a component:

  ```ts
  this.changeDetectorRef.detach();
  ```
* Reattach only when needed.

**Use case:** Static or infrequently changing views.

---

### 🧪 **5. Optimize Template Expressions**

* Avoid **complex logic** or function calls inside templates.
* Move to component class for better performance.

---

### 🧵 **6. Use Pure Pipes**

* Pure pipes are only recalculated when input values change.
* Avoid impure pipes unless necessary.

---

### 🧰 **7. Use Web Workers**

* Offload **CPU-intensive tasks** (e.g., image processing, data crunching).
* Keeps UI responsive.

---

### 📦 **8. Bundle Optimization**

* Use **Angular CLI production build**:

  ```bash
  ng build --prod
  ```
* Enables Ahead-of-Time (AOT) compilation, tree shaking, minification.

---

### 🚀 **9. Preloading Strategy**

* Use `PreloadAllModules` to load modules in the background after initial load.

```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
```

---

### 🧩 **10. Virtual Scrolling**

* Use Angular CDK’s `cdk-virtual-scroll-viewport` for long lists.
* Renders only visible items.

---

### 📡 **11. Debounce Expensive Calls**

* Use RxJS `debounceTime()` for events like search inputs or scrolls.

```ts
this.search$.pipe(debounceTime(300)).subscribe(...)
```

---

### 🛡 **12. Avoid Memory Leaks**

* Unsubscribe from Observables (use `takeUntil`, `async` pipe, etc.).
* Clear intervals, event listeners in `ngOnDestroy`.

---




## Structuring Angular Libraries

Here’s an **interview-ready, bullet-point guide** to **Structuring Angular Libraries**, especially relevant for large-scale or enterprise Angular applications.

---

## 📚 Structuring Angular Libraries in Angular

---

### 🔍 **What Are Angular Libraries?**

* Angular libraries are **modular, reusable packages** of components, services, directives, pipes, etc.
* Created using Angular CLI:

  ```bash
  ng generate library <lib-name>
  ```
* Can be **published** to npm or **used locally** within a mono-repo.

---

### 🎯 **Why Use Angular Libraries?**

* Code reusability across apps
* Better encapsulation and modularity
* Faster CI/CD pipelines (build/test only affected libraries)
* Easy versioning and sharing

---

### 🧱 **Recommended Library Structure**

#### 1. **Core/Shared Libraries**

* Contain common services, interfaces, and utility functions.
* Example: `auth`, `logger`, `api`, `models`, `config`.

#### 2. **UI/Component Libraries**

* Reusable UI components like buttons, cards, modals.
* Example: `ui-button`, `ui-form`, `ui-table`.

#### 3. **Feature Libraries**

* Encapsulate a specific business feature (e.g., `orders`, `payments`).
* Typically include components, state, services, routes.

#### 4. **Data Access Libraries**

* Manage API calls and state for a domain.
* Use NgRx or services with RxJS.

---

### 🧭 **Example Folder Structure**

```
projects/
├── core/
│   ├── auth/
│   └── logger/
├── shared/
│   ├── models/
│   └── utils/
├── ui/
│   ├── ui-button/
│   └── ui-modal/
├── features/
│   ├── orders/
│   └── payments/
```

---

### ⚙️ **Best Practices**

* **One concern per library** – don't mix UI and logic.
* Use **barrel files (`index.ts`)** for cleaner imports.
* Enforce strict typings and isolate dependencies.
* Use `ng-packagr` for building and bundling libraries.
* Include **unit tests** and **README** in each library.
* Maintain **semantic versioning** for publishable libs.

---

### 🛠️ **Using Libraries in an App**

* Import library modules in your main app like any Angular module:

  ```ts
  import { UiButtonModule } from '@my-org/ui-button';
  ```

---

### 📦 **Monorepo Tools**

* Use **Nx** or **Lerna** for managing Angular libraries and apps in a mono-repo.
* Nx supports:

  * Affected builds
  * Code generation
  * Dependency graphs

---

### ✅ **When to Create a Library**

Use a library when:

* Code is shared between multiple apps.
* You need versioning or CI/CD for features.
* You want better separation of concerns.

---



## Testing Angular Components

Here’s a **bullet-point summary for Testing Angular Components**—ideal for interviews and practical application.

---

## ✅ **Testing Angular Components**

---

### 🧪 **1. Types of Angular Tests**

* **Unit Tests:** Test a single component/service in isolation.
* **Integration Tests:** Test interaction between components/services.
* **End-to-End (E2E) Tests:** Test the entire app flow (usually with tools like Cypress or Playwright).

---

### 🧱 **2. Tools Used**

* **Test Runner:** Karma (default), Jest (faster, preferred for unit tests).
* **Testing Framework:** Jasmine (default), Jest
* **Utility:** TestBed (for configuring components and dependencies)

---

### 🧑‍🔬 **3. Testing a Component – Key Steps**

#### a. **Setup TestBed**

```ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [MyComponent],
    imports: [FormsModule],
    providers: [MyService],
  }).compileComponents();
});
```

#### b. **Create Component Fixture**

```ts
let fixture: ComponentFixture<MyComponent>;
let component: MyComponent;

beforeEach(() => {
  fixture = TestBed.createComponent(MyComponent);
  component = fixture.componentInstance;
  fixture.detectChanges(); // triggers ngOnInit
});
```

---

### 🧪 **4. What to Test in Components**

* **Rendering DOM** correctly with inputs.
* **Event bindings** (e.g., button clicks).
* **@Input() and @Output()** behaviors.
* **Service interactions** via dependency injection.
* **Form validity** (for forms-based components).
* **Change detection** behavior.

---

### 📌 **5. Example: Button Click**

```ts
it('should call submit() when button is clicked', () => {
  spyOn(component, 'submit');
  const button = fixture.nativeElement.querySelector('button');
  button.click();
  expect(component.submit).toHaveBeenCalled();
});
```

---

### 🧪 **6. Testing @Input and @Output**

```ts
it('should render input name', () => {
  component.name = 'Angular';
  fixture.detectChanges();
  const span = fixture.nativeElement.querySelector('span');
  expect(span.textContent).toContain('Angular');
});

it('should emit event on click', () => {
  spyOn(component.myOutput, 'emit');
  component.triggerEvent();
  expect(component.myOutput.emit).toHaveBeenCalledWith('data');
});
```

---

### 💡 **7. Tips and Best Practices**

* Use `TestBed` for realistic tests.
* Mock dependencies using Jasmine spies or mock services.
* Avoid accessing private members—test through public APIs.
* Prefer `async/await` over `fakeAsync` for readability.
* Use `By.css()` from `@angular/platform-browser` to query elements.

---



## Dependency Injection in Angular

Angular's DI system provides services or objects where needed. We declare providers at module/component level. Tree-shakable providers via `providedIn: 'root'` ensure services are included only when used.


Here’s a concise, interview-ready bullet-point overview of **Dependency Injection (DI) in Angular**:

---

## ✅ Dependency Injection in Angular

---

### 🔎 What is Dependency Injection?

* DI is a design pattern to **inject dependencies** (services, objects) rather than creating them manually.
* Promotes **loose coupling** and easier testing.

---

### ⚙️ How DI Works in Angular

* Angular has a built-in **injector** that **provides instances** of services to components or other services.
* Dependencies are declared in **constructor parameters**.

```ts
constructor(private myService: MyService) {}
```

---

### 📦 Providers and Injector Hierarchy

* Providers tell Angular **how to create** a dependency.
* Can be registered at different levels:

  * **Root injector** (application-wide, singleton)
  * **Module injector**
  * **Component injector** (creates new instance per component)
* Use `providedIn` in service decorators to define scope:

```ts
@Injectable({ providedIn: 'root' }) // singleton app-wide
export class MyService {}
```

---

### 🔄 Hierarchical Injectors

* Angular creates a **hierarchy of injectors** mirroring component tree.
* Child components can get a **different instance** if a provider is configured at component level.
* Useful for **scoped services** or overriding dependencies.

---

### 🛠️ Providers Syntax

* **Class provider:** `{ provide: MyService, useClass: MyServiceImpl }`
* **Value provider:** `{ provide: SOME_TOKEN, useValue: someValue }`
* **Factory provider:** `{ provide: MyService, useFactory: () => new MyService() }`
* **Existing provider:** `{ provide: MyService, useExisting: OtherService }`

---

### 🔐 Singleton Services

* Services provided in **root** are **singletons** by default.
* Ensures shared state across the app.

---

### 🧪 Testing with DI

* Inject mock services during tests by providing a mock class or object in the `TestBed` providers.

```ts
providers: [{ provide: MyService, useClass: MockMyService }]
```

---

### 💡 Best Practices

* Prefer **constructor injection** for dependencies.
* Use `providedIn: 'root'` for most services.
* Scope services at component level only when necessary (e.g., isolated state).
* Avoid manual instantiation (e.g., `new Service()`) inside Angular components/services.

---



## Security: XSS and CSRF Protection

* Angular auto-sanitizes DOM
* Use `DomSanitizer` only when absolutely needed
* Implement CSRF tokens on the backend
* Sanitize user input and never bind untrusted HTML directly

## Authentication and Role-Based Access

* Use interceptors for adding JWT tokens
* Implement route guards (`CanActivate`) for protected routes
* Store roles in a service and control access based on them

## Micro-Frontend Architecture

Using Webpack Module Federation or frameworks like Nx, we can split Angular apps into independently deployable pieces. Each team owns a feature app, enabling parallel development and deployment.
## Token Expiration and Refresh Logic

Use interceptors to detect 401 errors and trigger a refresh token flow. Store tokens securely (preferably in memory or HttpOnly cookies). Queue pending requests until refresh succeeds.
## Architectural Decision Example

In one project, we migrated from a monolithic structure to a modular Nx monorepo. This improved build times and allowed independent deployments. We also implemented NgRx to centralize and debug complex states.

## Debugging Performance Issues

* Use Chrome DevTools and Angular DevTools
* Check unoptimized change detection (e.g., missing OnPush)
* Audit large bundle sizes via source maps
* Profile memory leaks


## Handling Large Forms

Use Reactive Forms with nested FormGroups. Load data asynchronously. Use dynamic components for sections. Apply validation conditionally and lazy load subcomponents when possible.


## CI/CD Practices

I use GitHub Actions or Azure Pipelines. Lint, test, build, and deploy to environments. I cache dependencies, use Angular CLI for production builds, and automate versioning.



## HTTP Interceptors in Angular

Interceptors allow us to modify HTTP requests/responses globally. I use them to add auth tokens, log requests, and handle errors globally.

```ts
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer token' }});
  return next.handle(authReq);
}
```




---

## Angular Lifecycle Hooks


* **constructor**
- The `constructor` is  not technically an Angular lifecycle hook.  
- However, it is often the first method executed when a component is created, so it’s commonly discussed alongside Angular's lifecycle hooks.

✅ Purpose of `constructor`
* Used for **dependency injection**.
* Initialize **class-level variables**.
* It runs **before** any Angular lifecycle hook, including `ngOnInit`.

❌ What Not to Do in the Constructor

* Do **not perform DOM access** or complex logic.
* Avoid using `@Input()` properties here — they are not initialized yet.
* Do not trigger side effects like HTTP calls or subscriptions.


* **ngOnChanges(changes: SimpleChanges)**

  * Called **before ngOnInit** and whenever any data-bound input properties change.
  * Receives a `SimpleChanges` object detailing the changed inputs.
  * Useful for reacting to @Input() property changes.

* **ngOnInit()**

  * Called **once** after the first ngOnChanges.
  * Good place for component initialization, fetching data, or setup logic.

* **ngDoCheck()**

  * Called during every change detection cycle.
  * Allows custom change detection logic beyond default Angular detection.

* **ngAfterContentInit()**

  * Called once after Angular projects external content (ng-content) into the component.

* **ngAfterContentChecked()**

  * Called after every check of projected content.

* **ngAfterViewInit()**

  * Called once after Angular initializes the component’s views and child views.

* **ngAfterViewChecked()**

  * Called after every check of the component’s views and child views.

* **ngOnDestroy()**

  * Called just before Angular destroys the component.
  * Ideal for cleanup: unsubscribing Observables, clearing timers, detaching event handlers.

---

### Quick Summary Table

| Hook                  | When Called                          | Common Use                       |
| --------------------- | ------------------------------------ | -------------------------------- |
| ngOnChanges           | On @Input property changes           | Respond to input changes         |
| ngOnInit              | Once after component initialization  | Initialization, data fetch       |
| ngDoCheck             | Every change detection run           | Custom change detection          |
| ngAfterContentInit    | After content (ng-content) projected | Post content initialization      |
| ngAfterContentChecked | After every content check            | React to content updates         |
| ngAfterViewInit       | After component's view initialized   | DOM-dependent initialization     |
| ngAfterViewChecked    | After every view check               | Respond to view changes          |
| ngOnDestroy           | Before component is destroyed        | Cleanup subscriptions, resources |

---





## ViewChild & ViewChildren

* **Purpose**:
  Both are decorators to get references to child elements, components, or directives inside a component’s template.

* **@ViewChild**

  * Selects **one** element/component/directive.
  * Returns the first matching element.
  * Typically used when you want to access a **single** child element or component instance.
  * Example use case: Access a child component’s method or a DOM element directly.

* **@ViewChildren**

  * Selects **multiple** elements/components/directives.
  * Returns a `QueryList` of all matching elements.
  * Useful when you need to work with **multiple** child elements or components.
  * Example use case: Iterate over a list of child components to call a method or listen to events.

* **Common Usage**:

  * Accessing template elements for DOM manipulation.
  * Invoking child component methods or accessing properties.
  * Managing dynamic lists of components/elements.

* **Syntax Example**:

```typescript
@ViewChild('myInput') inputElement: ElementRef;
@ViewChild(ChildComponent) childComp: ChildComponent;

@ViewChildren(ChildComponent) childrenComps: QueryList<ChildComponent>;
```

* **Access Timing**:

  * Values are **available after** the `ngAfterViewInit()` lifecycle hook.
  * Changes in `@ViewChildren` can be observed via `childrenComps.changes` observable.

* **Notes**:

  * Use `static: true/false` option to control when the query resolves (usually `false` for dynamic content).
  * Helps avoid direct DOM queries like `document.querySelector` in Angular’s reactive model.

---



## Use Cases of **@ViewChild**

* **Accessing DOM Elements**
  For example, accessing an `<input>` element to focus it programmatically or read its value:

  ```typescript
  @ViewChild('searchInput') searchInput: ElementRef;

  focusInput() {
    this.searchInput.nativeElement.focus();
  }
  ```

* **Calling Child Component Methods**
  When you want to call a method or access a property of a child component:

  ```typescript
  @ViewChild(ChildComponent) childComp: ChildComponent;

  ngAfterViewInit() {
    this.childComp.someMethod();
  }
  ```

* **Manipulating Third-party Components**
  Accessing third-party components (e.g., modals, sliders) to open/close or configure programmatically.

---

## Use Cases of **@ViewChildren**

* **Accessing Multiple Child Components**
  If you have a list of similar child components and want to call a method on each of them:

  ```typescript
  @ViewChildren(ItemComponent) items: QueryList<ItemComponent>;

  updateAllItems() {
    this.items.forEach(item => item.refresh());
  }
  ```

* **Listening for Changes in Dynamic Lists**
  If the list of child components changes dynamically, you can subscribe to the `changes` observable to react accordingly:

  ```typescript
  ngAfterViewInit() {
    this.items.changes.subscribe(() => {
      console.log('Child components changed!');
    });
  }
  ```

* **Manipulating Multiple DOM Elements**
  E.g., querying multiple buttons or inputs and applying some effect or styles to all:

  ```typescript
  @ViewChildren('btn') buttons: QueryList<ElementRef>;

  disableAllButtons() {
    this.buttons.forEach(btn => btn.nativeElement.disabled = true);
  }
  ```

---





## AuthGuard

---

### 🔐 **What is AuthGuard in Angular?**

* `AuthGuard` is a route guard that **prevents unauthorized access** to certain routes.
* It implements `CanActivate`, `CanLoad`, or `CanActivateChild` interfaces.
* Commonly used to protect routes from users who are not authenticated or lack permissions.

---


### 🔍 **Other Guards (Mention in Interview)**

* `CanActivate`: Checks before activating a route.
* `CanLoad`: Prevents module loading.
* `CanDeactivate`: Prevents leaving a route (e.g., unsaved form).
* `Resolve`: Pre-fetches data before route activation.
* `CanActivateChild`: Guards child routes.

---

### 🛠️ **How It Works (CanActivate Example)**

```typescript
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

### 🔗 **Applying to Routes**

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];
```

---

### ✅ **Use Cases**

* **Protect authenticated routes** like `/dashboard`, `/profile`, etc.
* **Role-based access**: Only admins can access certain routes.
* **Prevent navigation to login/register pages if already logged in** (reverse guard).
* **Lazy loaded modules**: Use `CanLoad` to prevent loading secure modules unless authenticated.

---




## Routing & Child Routes
---

### 🔄 **Angular Routing & Child Routes**

#### ✅ **What is Angular Routing?**

* Angular Routing enables navigation between views or components in a single-page application (SPA).
* It maps URL paths to components using the `RouterModule`.

#### 🛠️ **Basic Routing Example:**

```ts
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

Add to `AppModule`:

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
```

---

### 👶 **What are Child Routes?**

* Child Routes allow you to nest routes inside a parent route.
* Useful for layouts where a part of the view (like sidebar/header) stays consistent.

#### 📦 **Example:**

```ts
const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];
```

* Navigating to `/admin/dashboard` shows `DashboardComponent` inside `AdminLayoutComponent`.

---

### 🔍 **Use Cases for Child Routes**

* **Nested views/layouts** (e.g., admin panel).
* **Tabs or multi-step forms**.
* **Shared layout with router outlet for children**.
* **Modular design** with feature modules.

---

### 🧠 **Key Points to Mention**

* Use `<router-outlet>` in both root and child components.
* Child routes can also have their own guards.
* Can be lazy-loaded for performance.

---




##  **Directives**

### ✅ **What are Directives?**

* Directives are **classes that add behavior** to elements in the DOM.
* Angular provides **built-in directives**, and you can also create **custom directives**.

---

### 📂 **Types of Directives**

| Type           | Description                                             | Example                            |
| -------------- | ------------------------------------------------------- | ---------------------------------- |
| **Component**  | A directive with a template.                            | `@Component`                       |
| **Structural** | Changes the **DOM layout** by adding/removing elements. | `*ngIf`, `*ngFor`, `*ngSwitch`     |
| **Attribute**  | Changes the **appearance or behavior** of an element.   | `ngClass`, `ngStyle`, custom attrs |

---

### 🔧 **Built-in Structural Directives**

1. `*ngIf` – Conditionally render elements

   ```html
   <div *ngIf="isLoggedIn">Welcome!</div>
   ```

2. `*ngFor` – Loop over data

   ```html
   <li *ngFor="let item of items">{{ item }}</li>
   ```

3. `*ngSwitch` – Conditional multiple branches

   ```html
   <div [ngSwitch]="role">
     <p *ngSwitchCase="'admin'">Admin Panel</p>
     <p *ngSwitchDefault>User Panel</p>
   </div>
   ```

---

### 🎨 **Built-in Attribute Directives**

1. `ngClass` – Apply CSS classes

   ```html
   <div [ngClass]="{ 'highlight': isActive }"></div>
   ```

2. `ngStyle` – Apply inline styles

   ```html
   <div [ngStyle]="{ color: isError ? 'red' : 'green' }"></div>
   ```

---

### 🧩 **Custom Attribute Directive Example**

```ts
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

**Usage:**

```html
<p appHighlight>This is highlighted</p>
```

---

### 📌 **Use Cases**

* **Structural**: Render UI conditionally or dynamically.
* **Attribute**: Apply reusable visual effects, validation, or behaviors.
* **Custom**: Build reusable logic (e.g., auto-focus, tooltip, access control).

---





---

##  **Pipes**

### ✅ **What are Pipes?**

* Pipes are **functions** used to **transform data in templates**.
* They are **used in interpolation ({{}})** to format and display data more cleanly.

---

### 🔹 **Built-in Pipes**

| Pipe Name   | Purpose                               | Example Input | Example Output |                     |
| ----------- | ------------------------------------- | ------------- | -------------- | ------------------- |
| `date`      | Formats date/time                     | `new Date()`  | `Jan 1, 2024`  |                     |
| `uppercase` | Converts text to uppercase            | `'hello'`     | `'HELLO'`      |                     |
| `lowercase` | Converts text to lowercase            | `'HELLO'`     | `'hello'`      |                     |
| `currency`  | Formats number as currency            | `1234.5`      | `$1,234.50`    |                     |
| `percent`   | Converts number to percentage         | `0.25`        | `25%`          |                     |
| `json`      | Converts object to JSON string        | `{a: 1}`      | `{"a": 1}`     |                     |
| `slice`     | Slices array or string                | \`\[1,2,3,4]  | slice:1:3\`    | `[2,3]`             |
| `async`     | Subscribes to Observables or Promises | \`data\$      | async\`        | Auto-updated values |

---

### 🧩 **Custom Pipe Example**

#### Custom pipe to reverse a string:

```ts
@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

**Usage:**

```html
<p>{{ 'angular' | reverse }}</p> <!-- Output: ralugna -->
```

---

### 🛠️ **Use Cases**

* **Date formatting** (`date`)
* **Currency conversion** (`currency`)
* **String transformations** (`uppercase`, `lowercase`, `reverse`)
* **Object debugging** (`json`)
* **Real-time updates** (`async` for Observables)
* **Custom formatting logic** (e.g., `truncate`, `capitalize`, `highlight`)

---

### 📎 Best Practices

* Pipes should be **pure by default** (no side effects).
* Use **impure pipes** only when necessary (e.g., pipes that depend on external data).
* Avoid heavy computations inside pipes, especially impure ones.

---

