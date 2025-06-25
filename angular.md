| **Category**                        | **Topics**                                                                                                                                                                                                                                                    |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Core Angular Concepts**          | • [Angular](#angular)  • [Module](#module)  • [NgModules and App Structure](#ngmodules-and-app-structure)  • [Module and Component](#module-and-component)  • [Component-Based Architecture](#component-based-architecture) • [Standalone Components](#standalone-components) |
| **Components**         | • [Component Communication Techniques](#component-communication-techniques) • [Input and Output Decorators](#input-and-output-decorators) • [EventEmitter](#eventemitter) • [ViewChild and ViewChildren](#viewchild-and-viewchildren) • [HostListener and HostBinding](#hostlistener-and-hostbinding) 
| **Templates**         | • [Component Factory](#component-factory) • [ngComponentOutlet](#ngComponentOutlet) • [Lifecycle Hooks](#angular-lifecycle-hooks)  • [component composition](#Using-One-Component-Inside-Another ) • [One Component Inside Another](#Using-One-Component-Inside-Another ) |
| **Dependency Injection and HTTP**| • [Dependency Injection](#dependency-injection) • [Services and Injectors](#services-and-injectors)      • [Singleton service](#Singleton-service)         • [HttpClientModule](#httpclientmodule) • [HTTP Interceptors](#http-interceptors-in-angular)                                                                                                       |
| **Routing & Lazy Loading**           | • [Routing & Child Routes](#routing--child-routes)  • [AuthGuard](#authguard) • [Protect Routes](#protect-routes) • [Lazy Loading](#lazy-loading) • [Lazy Loading Modules](#lazy-loading-modules) • [Lazy Loading Preloading Strategies](#lazy-loading-preloading-strategies)  • [Authentication and Role-Based Access](#authentication-and-role-based-access)  |
| **Forms & Validation**             | • [Reactive vs Template-Driven Forms](#reactive-vs-template-driven-forms) • [Custom Validators](#custom-validators) • [Handling Large Forms](#handling-large-forms)                                                    |
| **Data**        | • [Data Binding](#data-binding) • [Interpolation Vs Two-Way Binding](#Difference-Between-Interpolation-and-Two-Way-Binding)  • [Promise and Observable](#promise-and-observable) • [Signal](#Signals) • [Signal and Observable](#Signals-vs-Observables)
| **State Management**        | • [RxJS](#rxjs-in-angular) • [Common RxJS Operators](#common-rxjs-operators) • [RxJS Mapping Operators: switchMap, mergeMap, concatMap, exhaustMap](#rxjs-mapping-operators-switchmap-mergemap-concatmap-exhaustmap)  • [NgRx for State Management](#NgRx-for-State-Management) • [Implementation with NgRx](#Step-by-Step-Implementation-with-NgRx)                                                       |
| **Performance**     | • [Change Detection and Zone.js](#change-detection-and-zonejs) • [OnPush Change Detection Strategy](#onpush-change-detection-strategy) • [Performance Optimization](#performance-optimization)                • [performance optimization techniques](#performance-optimization-techniques)      
| **Optimization**     | • [AOT](#AOT)   • [AOT vs JIT](#AOT-vs-JIT)  • [Tree Shaking](#Tree-Shaking) • [Source Maps](#source-maps) • [Angular CLI](#Angular-CLI) • [Angular 19](#Angular-19) • [Build Optimizer](#build-optimizer) • [Assets Optimizes](#how-angular-optimizes-assets)
| **Utilities & Miscellaneous**      | • [setTimeout and setInterval](#settimeout-and-setinterval) • [Directives](#directives) • [Pipes](#pipes) • [CI/CD Practices](#cicd-practices)  
| **Other**      | • [Lifecycle from Source Code to Optimized Production Bundle](#lifecycle-from-source-code-to-optimized-production-bundle) • [Consistent Builds Across Environments](#consistent-builds-across-environments) • [What Happens Under the Hood](#what-happens-under-the-hood) • [Integrate Angular Builds into CI/CD Pipelines](#integrate-angular-builds-into-cicd-pipelines) • [Automation Tools](#automation-tools) • [Differential Loading and Polyfills](#differential-loading-and-polyfills) • [Environment-based Builds](#environment-based-builds) • [Linting and Testing Tools](#linting-and-testing-tools)    |
| **Utilities & Miscellaneous**      | • [Authentication](#authentication) • [Secure Angular Routes](#secure-angular-routes) • [Token Expiration](#token-expiration) • [Protect UI Elements](#protect-ui-elements)  • [Secure Role-Based Routing](#secure-role-based-routing) • [Store Authentication Tokens](#store-authentication-tokens)   |




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


###  **App Structure Best Practices**

* **AppModule**: Root module that bootstraps the app.
* **Feature Modules**: Domain-specific modules (e.g., `UserModule`, `AdminModule`).
* **Shared Module**: Reusable components, directives, pipes used across modules.
* **Core Module**: Singleton services, guards, interceptors — imported only once in `AppModule`.


###  **Typical Folder Structure**

```
src/
├── app/
│   ├── core/      → Singleton services, guards
│   ├── shared/    → Reusable components, pipes
│   ├── features/  → Feature modules (e.g., users, products)
│   └── app.module.ts
```


###  **Performance & Scalability Tips**

* Use **lazy loading** (`RouterModule.forChild`) for large feature modules.
* Avoid declaring a component in multiple modules — extract it to `SharedModule` if needed.
* Keep services in `CoreModule` to prevent duplicate instances.


###  **Angular 14+ (Optional Mention)**

* Angular supports **standalone components** which don’t require NgModules.
* Useful for lightweight components or micro-frontend setups.



## Standalone Components




### 🎯 Sample Interview Closing

- Standalone components are Angular’s move toward a simpler, more modular architecture by removing the need for NgModules, making development faster and apps more tree-shakable.”


###  **What are Standalone Components?**

* Introduced in **Angular 14** to simplify module management.
* Components declared with `standalone: true` **don’t require being declared inside an NgModule**.
* They can directly import other standalone components, directives, and pipes.


###  **Key Benefits**

* **Reduces boilerplate:** No need for NgModules just to declare components.
* Simplifies **small or isolated features** like modals, widgets, or utility components.
* Encourages a more **functional and tree-shakable** app structure.
* Easier for micro-frontends and library development.


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


### 🚀 **App Bootstrapping with Standalone Components**

* Instead of `NgModule`, use `bootstrapApplication()` in `main.ts` to start the app.

```ts
bootstrapApplication(HelloComponent);
```

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
```

### 📁 **When to Use?**

* New projects targeting Angular 14+.
* Small, reusable components or micro frontends.
* When you want to reduce complexity by skipping NgModules.


### ⚠️ **Backward Compatibility**

* Works seamlessly with existing NgModules and components.
* Can gradually migrate from NgModules to standalone components.






## Component Communication Techniques


- Angular provides multiple flexible ways for components to communicate—via inputs and outputs for parent-child, 
 - Shared services with RxJS for siblings or unrelated components, and advanced options like ViewChild or state management for complex apps.”


### 1. **Parent to Child Communication**

* Use **@Input()** decorator to pass data from a parent component to its child.
* Data flows **downward** via property binding.

```ts
@Input() userName: string;
```


### 2. **Child to Parent Communication**

* Use **@Output()** with **EventEmitter** to send events or data from child to parent.
* Parent listens using event binding `(<child-comp> (eventName)="handler($event)">)`.

```ts
@Output() notify = new EventEmitter<string>();
```


### 3. **Sibling Communication**

* Use a **shared service** with RxJS `Subject` or `BehaviorSubject` for cross-component communication.
* Both siblings inject the service and subscribe/emit events.


### 4. **Using a Shared Service**

* Singleton service injected via dependency injection.
* Common for communication between distant components or unrelated components.


### 5. **ViewChild / ContentChild**

* Use `@ViewChild()` or `@ContentChild()` to access a child component, directive, or DOM element directly.
* Useful for invoking methods or accessing properties on child components.


### 6. **Template Reference Variables**

* Use template variables (`#ref`) to pass element or component references within the template.


### 7. **State Management Libraries (NgRx, Akita)**

* For large-scale apps, use centralized state management for communication and state sharing.

 - Defined actions to express events.
 - Defined a reducer function to manage the state of the counter.
 - Registered the global state container that is available throughout your application.
 - Injected the Store service to dispatch actions and select the current state of the counter.






## OnPush Change Detection Strategy

### 🎙️ Sample Interview Closing Statement

- OnPush lets Angular skip checking the component unless input references change or events occur, which drastically improves performance, but it requires immutable data or manual triggers to keep the view updated.”


###  **What is OnPush?**

* An Angular **Change Detection strategy** that optimizes performance by limiting when the component’s view is checked for updates.
* Set using `changeDetection: ChangeDetectionStrategy.OnPush` in the component decorator.


###  **How It Works**

* Angular runs change detection **only when:**

  * The component’s **@Input()** properties change by reference.
  * An **event originated from the component or its children** (e.g., user input).
  * An **Observable bound via the async pipe emits a new value**.
  * You manually trigger detection (`markForCheck()` or `detectChanges()`).


### 🚀 **Benefits**

* **Improves performance** by reducing unnecessary checks.
* Ideal for **immutable data patterns**.
* Especially useful in large or complex component trees.


### ⚠️ **Things to Watch Out For**

* Changes to object properties **won’t trigger CD** unless the object reference changes.
* Requires discipline: always use **immutable data** or trigger change detection manually.
* Not suitable if the component depends on mutable objects without emitting new references.


### 🎯 **Typical Use Cases**

* Components with **inputs from immutable data sources**.
* Components relying on **Observables** with the async pipe.
* Performance-critical parts of an app with many bindings.






## Reactive vs Template-Driven Forms

### 🎯 Sample Interview Closing Line

- **Template-driven forms** are great for **simple scenarios with minimal logic** 
- **Reactive forms** offer more power and control, making them better suited for **complex and scalable applications**


### 1. **Template-Driven Forms**

* Driven mainly by the **template HTML** with directives like `ngModel`.
* Easier to use and good for **simple forms** with less complex logic.
* Uses **two-way data binding** (`[(ngModel)]`) to sync UI and model.
* Form structure is **implicitly defined** in the template.
* Validation handled declaratively with built-in directives (e.g., `required`, `minlength`).
* Less scalable for complex forms or dynamic form controls.


### 2. **Reactive Forms**

* Form logic and structure are defined **explicitly in the component class** using `FormGroup`, `FormControl`, and `FormArray`.
* Provides **more control and flexibility** over form behavior.
* Supports **dynamic form creation and complex validations**.
* Uses **immutable data structures**, making it easier to track form state.
* Validation can be synchronous or asynchronous, applied programmatically.
* Better suited for **large, complex, or reactive applications**.


### 3. **Comparison Summary**

| Feature      | Template-Driven     | Reactive                      |
| ------------ | ------------------- | ----------------------------- |
| Form setup   | Mostly in template  | Mostly in component class     |
| Data binding | Two-way (`ngModel`) | Explicit, reactive form model |
| Scalability  | Simple forms        | Complex & dynamic forms       |
| Validation   | Template-based      | Programmatic & flexible       |
| Testing      | Harder to unit test | Easier to unit test           |
| Use case     | Simple, quick forms | Complex, large-scale forms    |



###  **Reactive vs Template-Driven Forms**

| Feature      | Template-Driven        | Reactive                              |
| ------------ | ---------------------- | ------------------------------------- |
| Approach     | Declarative            | Programmatic                          |
| Form control | HTML-based (`ngModel`) | Component class-based (`FormControl`) |
| Validation   | In template            | In component                          |
| Flexibility  | Less                   | More control and scalable             |





## Custom Validators


- Custom validators allow you to enforce complex or domain-specific validation rules in Angular forms, improving form reliability and user experience.


* Functions you write to implement **custom validation logic** beyond Angular’s built-in validators.
* Used in **Reactive Forms** (or Template-Driven with some tweaks) to enforce specific business rules.


###  **How to Create Custom Validators**

* A **validator function** takes a `FormControl` (or `FormGroup`) and returns:

  * `null` if the control is valid.
  * An **error object** if invalid, e.g., `{ 'customError': true }`.
* Can be **sync** or **async** (returns `Observable` or `Promise` for async validators).


### 🔑 **Types of Validators**

* **Control-level validator:** validates a single control.
* **Group-level validator:** validates a group of controls together (cross-field validation).


### 🧩 **Example (Control-Level Validator)**

```ts
function forbiddenNameValidator(control: FormControl): ValidationErrors | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { 'forbiddenName': { value: control.value } } : null;
}
```


### 🧩 **Example (Group-Level Validator)**

```ts
function passwordMatchValidator(group: FormGroup): ValidationErrors | null {
  return group.get('password')?.value === group.get('confirmPassword')?.value
    ? null : { 'mismatch': true };
}
```


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







## Lazy Loading Modules



- Lazy loading defers loading feature modules until they are needed, significantly improving the initial load performance and scalability of Angular apps.



* Technique to **load Angular modules asynchronously** only when the user navigates to a route that requires them.
* Improves **initial app load time** by splitting the app into smaller bundles.
* Helps optimize performance, especially for large apps.


###  **How It Works**

* Configure routes with `loadChildren` property in the main routing module.
* Angular downloads the module **on demand**, not at app startup.
* Uses **dynamic `import()` syntax** for lazy loading in Angular 8+.


### 🧩 **Example Route Setup**

```ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```


### 🔑 **Benefits**

* Reduces **initial bundle size**, faster startup.
* Enables **feature modules to be loaded independently**.
* Better resource usage by loading code only when needed.


### ⚠️ **Considerations**

* Overuse can lead to **too many small bundles**, impacting network overhead.
* Must handle **shared services/providers** carefully to avoid duplicates.
* Lazy loaded modules have their own **injector scope**.




## Lazy Loading Preloading Strategies


###  **What is Preloading?**

* Preloading loads lazy modules **in the background after the app is bootstrapped**.
* Improves user experience by speeding up future navigation without blocking the initial load.


### 🔑 **Built-in Preloading Strategies**

1. **NoPreloading (Default)**

   * No preloading; modules load only when the route is activated.

2. **PreloadAllModules**

   * Preloads **all lazy-loaded modules** immediately after the app starts.
   * Good when you want faster navigation and don’t care about initial bandwidth.

3. **Custom Preloading Strategy**

   * Allows fine-grained control over which modules to preload based on custom logic.
   * Implemented by creating a class that implements `PreloadingStrategy`.


### 🧩 **How to Use Preloading Strategies**

* Set the strategy in the router module:

```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
```

* For **NoPreloading** (default), just omit the preloadingStrategy or set explicitly:

```ts
RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading });
```


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



- Preloading strategies let you balance app startup speed and user experience by controlling when and which lazy modules load—default is no preload, 
- `PreloadAllModules` loads all eagerly after startup, and custom strategies allow conditional preloading.”




## RxJS in Angular

**RxJS (Reactive Extensions for JavaScript)** is a powerful library for reactive programming using observables, to make it easier to compose asynchronous or callback-based code. 
In Angular, RxJS is fundamental to managing streams of data, particularly in forms, HTTP calls, component communication, and state management.


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


##  Subject Types Comparison in RxJS

| Type                | Initial Value          | Emits to New Subscribers                                            | Stores Previous Values?             | Use Case Example                                            |
| ------------------- | ---------------------- | ------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------- |
| **Subject**         | No                     | Only emits **future** values                                        | No                                  | Event emitters, simple multicasting                         |
| **BehaviorSubject** | Yes (required)         | Emits **latest** value immediately + future                         | Stores **latest** value only        | State management, current value streaming                   |
| **ReplaySubject**   | Optional (buffer size) | Emits **all or buffer** values emitted before subscription + future | Stores **buffered** previous values | Replay past events (e.g., chat messages)                    |
| **AsyncSubject**    | No                     | Emits **only the last** value **when completed**                    | Stores **last** value               | Single-value async operations (e.g., HTTP calls completion) |


### 🔍 Detailed Behavior

| Subject Type        | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| **Subject**         | Multicasts to subscribers; new subscribers get only values emitted after subscription.     |
| **BehaviorSubject** | Holds the latest value; new subscribers immediately receive that latest value.             |
| **ReplaySubject**   | Buffers a number of previous values; new subscribers receive buffered values on subscribe. |
| **AsyncSubject**    | Waits until the source completes; then emits the **last** value and completes.             |


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


### Summary

| Use When...                                                                                    |
| ---------------------------------------------------------------------------------------------- |
| **Subject:** You want simple multicast of future values.                                       |
| **BehaviorSubject:** You need to emit the latest/current state immediately to new subscribers. |
| **ReplaySubject:** You want to replay a set of past values to new subscribers.                 |
| **AsyncSubject:** You only want to emit the final value once the observable completes.         |



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


### 🔸 RxJS in Angular

* **HTTP Calls**: Angular’s `HttpClient` returns observables.
* **Reactive Forms**: We can listen to `valueChanges` which is an observable.
* **Component Communication**: Services with `Subject` or `BehaviorSubject`.
* **Async Pipe**: Automatically subscribes to and unsubscribes from observables in templates.

```html
<p>{{ userData$ | async }}</p>
```


### 🔸 Common RxJS Pitfalls in Angular

* **Not unsubscribing** from long-lived observables → leads to memory leaks.

  * Use `takeUntil()`, `async` pipe, or `Subscription.unsubscribe()` in `ngOnDestroy`.
* **Improper use of mapping operators** (e.g., using `mergeMap` when `switchMap` is required).
* **Nested subscriptions** → leads to messy and hard-to-maintain code.






## RxJS Mapping Operators: switchMap, mergeMap, concatMap, exhaustMap


### 🔄 1. **Transformation Operators**

| Operator   | Purpose                              | Use Case                                                    |
| ---------- | ------------------------------------ | ----------------------------------------------------------- |
| `map()`    | Transform each emitted value         | Modify API response (`map(user => user.name)`)              |
| `filter()` | Only emit values matching condition  | Filter out null/undefined before binding to UI              |
| `tap()`    | Side effects without changing values | Log HTTP responses (`tap(console.log)`)                     |
| `pluck()`  | Extract nested properties            | `pluck('user', 'email')` to get email from response         |
| `scan()`   | Accumulate values (like `reduce`)    | Count clicks or form steps (`scan((acc, _) => acc + 1, 0)`) |


### 🔗 2. **Combination Operators**

| Operator           | Purpose                                                  | Use Case                                                               |
| ------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| `merge()`          | Combine multiple observables as they emit                | Merge click & scroll observables                                       |
| `concat()`         | Combine observables **sequentially**                     | Chain login → profile → dashboard data                                 |
| `combineLatest()`  | Emit when **any** observable emits (uses latest of each) | Combine user settings + language preference                            |
| `forkJoin()`       | Emit **once**, after all complete                        | Parallel API calls on page load (`forkJoin([getUser(), getOrders()])`) |
| `withLatestFrom()` | Combine main source with latest from another             | Use form input value on button click                                   |
| `zip()`            | Pair values index-wise                                   | Combine user ID and name from different sources                        |


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


### ⏱️ 5. **Time-Based Operators**

| Operator         | Purpose                                   | Use Case                                    |
| ---------------- | ----------------------------------------- | ------------------------------------------- |
| `debounceTime()` | Emit after silence                        | Typeahead input, avoid over-querying server |
| `throttleTime()` | Emit first, then silence                  | Limit scroll/click event handling           |
| `delay()`        | Emit values after a delay                 | Delay showing a message                     |
| `timeout()`      | Throw error if timeout reached            | Detect API hangs                            |
| `interval()`     | Emit sequence over time                   | Auto-refresh dashboard every 10 seconds     |
| `timer()`        | Emit after delay, optionally at intervals | Delay splash screen or notifications        |


### 🧪 6. **Filtering Operators**

| Operator                 | Purpose                               | Use Case                                                    |
| ------------------------ | ------------------------------------- | ----------------------------------------------------------- |
| `first()`                | Emit only the first value             | Get first click or first item from stream                   |
| `last()`                 | Emit only the last value              | Use after complete to get last form state                   |
| `take(n)`                | Take first n values then complete     | Get first 3 suggestions only                                |
| `takeUntil()`            | Complete on another observable's emit | Cancel subscription on destroy (`takeUntil(this.destroy$)`) |
| `skip(n)`                | Skip first n values                   | Skip default/initial values                                 |
| `distinctUntilChanged()` | Emit only when value changes          | Avoid re-rendering form controls                            |


### 🔨 7. **Creation Operators**

| Operator      | Purpose                                | Use Case                                |
| ------------- | -------------------------------------- | --------------------------------------- |
| `of()`        | Emit static values                     | Mock HTTP response (`of({ data: [] })`) |
| `from()`      | Convert arrays/promises to Observables | Convert `Promise` to `Observable`       |
| `fromEvent()` | Listen to DOM events                   | Listen to window resize or button click |
| `range()`     | Emit sequence of numbers               | Emit 1 to 10 for pagination             |
| `defer()`     | Lazy Observable creation               | Create Observable only when subscribed  |


## 🎯 Quick Summary for Interview

* **switchMap**: Use in live search or cancelable streams
* **mergeMap**: Parallel API calls
* **concatMap**: Step-by-step tasks (e.g., form wizards)
* **exhaustMap**: Ignore rapid clicks
* **catchError + retry**: For robust error handling
* **combineLatest & forkJoin**: Combine multiple streams
* **debounceTime**: Prevent spamming API
* **takeUntil**: Clean up in `ngOnDestroy`



##  `switchMap` – **Search with Auto-Suggestions**

###  Real-Time Scenario: Live Search Box


 **Why `switchMap`?**
Cancels the old request when a new value is typed. Useful in live search, typeahead, or address autocomplete.

```ts
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.api.searchProducts(query)) // Cancels previous call
).subscribe(results => {
  this.searchResults = results;
});
```

---

## 🔄 `mergeMap` – **Parallel Data Loading**

###  Real-Time Scenario: Load Details for Multiple Users in Parallel


 **Why `mergeMap`?**
Allows **parallel** requests — good when you don’t care about order and want faster results (e.g., load many profile cards).


```ts
from(this.selectedUserIds).pipe(
  mergeMap(id => this.api.getUserDetails(id))
).subscribe(user => {
  this.loadedUsers.push(user);
});
```

---

##  `concatMap` – **Step-by-Step API Workflow**

###  Real-Time Scenario: Process Steps Sequentially (e.g., onboarding or checkout)

 **Why `concatMap`?**
Ensures **one request finishes before the next starts** — ideal for multi-step flows, payment gateways, or wizards.

```ts
from(this.steps).pipe(
  concatMap(step => this.api.processStep(step))
).subscribe(result => {
  console.log('Step completed:', result);
});
```

---

##  `exhaustMap` – **Prevent Multiple Click Submissions**

###  Real-Time Scenario: Save Form with Button Click (Ignore rapid double clicks)


 **Why `exhaustMap`?**
**Ignores repeated triggers** (e.g., multiple button clicks) until the first request completes — great for preventing duplicate saves or accidental spamming.

```ts
this.saveClick$.pipe(
  exhaustMap(() => this.api.saveProfile(this.form.value))
).subscribe(response => {
  console.log('Form saved', response);
});
```


---

## 🧠 Summary Table

| Operator     | Use Case                   | Request Behavior       | Ideal For                                  |
| ------------ | -------------------------- | ---------------------- | ------------------------------------------ |
| `switchMap`  | Live search, input changes | Cancels previous       | Autocomplete, search bars                  |
| `mergeMap`   | Multiple independent tasks | Runs in parallel       | Load multiple users/products in parallel   |
| `concatMap`  | Step-by-step flow          | Runs one-by-one        | Onboarding, form wizard, sequential upload |
| `exhaustMap` | Prevent duplicate actions  | Ignores new until done | Form submission, click prevention          |

---



## NgRx for State Management

NgRx is suitable for large-scale applications requiring predictable state management. It helps separate concerns and centralizes state using Actions, Reducers, Effects, and Selectors. However, for smaller apps, simple services with Subjects may suffice.



Here’s a concise **interview-style breakdown of NgRx for State Management** in Angular, using bullet points and practical examples:


##  **NgRx for State Management (Angular)**


###  What is NgRx?

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

###  Example Flow

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

###  Benefits of Using NgRx

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




## Performance Optimization

Here’s a **bullet-point summary of Angular Performance Optimization** strategies—ideal for interview-style answers:


##  **Angular Performance Optimization**


###  **1. Change Detection Strategy**

* Use `ChangeDetectionStrategy.OnPush` to limit unnecessary checks.
* Angular skips re-checking components unless:

  * Input properties change.
  * An observable emits new data.
  * An event is triggered within the component.

**Use case:** High-frequency updates (e.g., dashboards, lists).


###  **2. Lazy Loading Modules**

* Load feature modules **on demand** via routing.
* Reduces initial bundle size → faster load time.

**Use case:** Admin modules or rarely used features.


### **3. TrackBy in *ngFor**

* Use `trackBy` function to avoid re-rendering full lists.

```html
*ngFor="let item of items; trackBy: trackById"
```

**Use case:** Rendering large lists efficiently.


###  **4. Detach Change Detection**

* Manually detach change detection from a component:

  ```ts
  this.changeDetectorRef.detach();
  ```
* Reattach only when needed.

**Use case:** Static or infrequently changing views.


###  **5. Optimize Template Expressions**

* Avoid **complex logic** or function calls inside templates.
* Move to component class for better performance.


### 🧵 **6. Use Pure Pipes**

* Pure pipes are only recalculated when input values change.
* Avoid impure pipes unless necessary.


### 🧰 **7. Use Web Workers**

* Offload **CPU-intensive tasks** (e.g., image processing, data crunching).
* Keeps UI responsive.


###  **8. Bundle Optimization**

* Use **Angular CLI production build**:

  ```bash
  ng build --prod
  ```
* Enables Ahead-of-Time (AOT) compilation, tree shaking, minification.


### 🚀 **9. Preloading Strategy**

* Use `PreloadAllModules` to load modules in the background after initial load.

```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
```


### 🧩 **10. Virtual Scrolling**

* Use Angular CDK’s `cdk-virtual-scroll-viewport` for long lists.
* Renders only visible items.


### 📡 **11. Debounce Expensive Calls**

* Use RxJS `debounceTime()` for events like search inputs or scrolls.

```ts
this.search$.pipe(debounceTime(300)).subscribe(...)
```


### 🛡 **12. Avoid Memory Leaks**

* Unsubscribe from Observables (use `takeUntil`, `async` pipe, etc.).
* Clear intervals, event listeners in `ngOnDestroy`.





## Structuring Angular Libraries

Here’s an **interview-ready, bullet-point guide** to **Structuring Angular Libraries**, especially relevant for large-scale or enterprise Angular applications.


## 📚 Structuring Angular Libraries in Angular


### 🔍 **What Are Angular Libraries?**

* Angular libraries are **modular, reusable packages** of components, services, directives, pipes, etc.
* Created using Angular CLI:

  ```bash
  ng generate library <lib-name>
  ```
* Can be **published** to npm or **used locally** within a mono-repo.


### 🎯 **Why Use Angular Libraries?**

* Code reusability across apps
* Better encapsulation and modularity
* Faster CI/CD pipelines (build/test only affected libraries)
* Easy versioning and sharing


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


###  **Best Practices**

* **One concern per library** – don't mix UI and logic.
* Use **barrel files (`index.ts`)** for cleaner imports.
* Enforce strict typings and isolate dependencies.
* Use `ng-packagr` for building and bundling libraries.
* Include **unit tests** and **README** in each library.
* Maintain **semantic versioning** for publishable libs.


### 🛠️ **Using Libraries in an App**

* Import library modules in your main app like any Angular module:

  ```ts
  import { UiButtonModule } from '@my-org/ui-button';
  ```


###  **Monorepo Tools**

* Use **Nx** or **Lerna** for managing Angular libraries and apps in a mono-repo.
* Nx supports:

  * Affected builds
  * Code generation
  * Dependency graphs


###  **When to Create a Library**

Use a library when:

* Code is shared between multiple apps.
* You need versioning or CI/CD for features.
* You want better separation of concerns.




## Testing Angular Components

Here’s a **bullet-point summary for Testing Angular Components**—ideal for interviews and practical application.


##  **Testing Angular Components**


### 🧪 **1. Types of Angular Tests**

* **Unit Tests:** Test a single component/service in isolation.
* **Integration Tests:** Test interaction between components/services.
* **End-to-End (E2E) Tests:** Test the entire app flow (usually with tools like Cypress or Playwright).


### 🧱 **2. Tools Used**

* **Test Runner:** Karma (default), Jest (faster, preferred for unit tests).
* **Testing Framework:** Jasmine (default), Jest
* **Utility:** TestBed (for configuring components and dependencies)


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

###  **5. Example: Button Click**

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


##  Dependency Injection in Angular


### 🔎 What is Dependency Injection?

* DI is a design pattern to **inject dependencies** (services, objects) rather than creating them manually.
* Promotes **loose coupling** and easier testing.


###  How DI Works in Angular

* Angular has a built-in **injector** that **provides instances** of services to components or other services.
* Dependencies are declared in **constructor parameters**.

```ts
constructor(private myService: MyService) {}
```


###  Providers and Injector Hierarchy

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


### 🔄 Hierarchical Injectors

* Angular creates a **hierarchy of injectors** mirroring component tree.
* Child components can get a **different instance** if a provider is configured at component level.
* Useful for **scoped services** or overriding dependencies.


### 🛠️ Providers Syntax

* **Class provider:** `{ provide: MyService, useClass: MyServiceImpl }`
* **Value provider:** `{ provide: SOME_TOKEN, useValue: someValue }`
* **Factory provider:** `{ provide: MyService, useFactory: () => new MyService() }`
* **Existing provider:** `{ provide: MyService, useExisting: OtherService }`


### 🔐 Singleton Services

* Services provided in **root** are **singletons** by default.
* Ensures shared state across the app.


### 🧪 Testing with DI

* Inject mock services during tests by providing a mock class or object in the `TestBed` providers.

```ts
providers: [{ provide: MyService, useClass: MockMyService }]
```


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

-  An interceptor is a class that implements the `HttpInterceptor` interface. It intercepts all HTTP requests and responses.
- "The HTTP interceptor is a powerful Angular feature that lets me **intercept and modify HTTP requests and responses**. I use it to:
- 1. **Attach the JWT token** to every outgoing request via the `Authorization` header.
- 2. **Handle errors globally**, such as redirecting to the login page on a 401 Unauthorized response.
- It centralizes authentication logic and keeps the code DRY and maintainable."

**Key Points to Mention:**

* Token injection in headers
* 401 error handling and redirection
* Keeps services clean
* Add authentication headers
* Handle errors globally
* Log HTTP activity



Interceptors allow us to modify HTTP requests/responses globally. I use them to add auth tokens, log requests, and handle errors globally.

```ts
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer token' }});
  return next.handle(authReq);
}
```




---

## Angular Lifecycle Hooks


###  **Lifecycle Hooks**

 -  Angular provides lifecycle hooks to tap into key moments of a component’s lifecycle.
 -  Some important ones are:
* `ngOnInit()` – used for initialization logic after the component is constructed.
* `ngOnChanges()` – called when any `@Input()` property changes.
* `ngOnDestroy()` – used for cleanup like unsubscribing from observables or clearing intervals.
  Others include `ngDoCheck()`, `ngAfterViewInit()`, and `ngAfterContentChecked()`.


* **constructor**
- The `constructor` is  not technically an Angular lifecycle hook.  
- However, it is often the first method executed when a component is created, so it’s commonly discussed alongside Angular's lifecycle hooks.

 Purpose of `constructor`
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

* **ngOnInit()** -  * Called **once** after the first ngOnChanges. and  Good place for component initialization, fetching data, or setup logic.

* **ngDoCheck()**  -  * Called during every change detection cycle. and  Allows custom change detection logic beyond default Angular detection.

* **ngAfterContentInit()**    -  * Called once after Angular projects external content (ng-content) into the component.

* **ngAfterContentChecked()**  -  * Called after every check of projected content.

* **ngAfterViewInit()**  -  * Called once after Angular initializes the component’s views and child views.

* **ngAfterViewChecked()** -   * Called after every check of the component’s views and child views.

* **ngOnDestroy()**   * Called just before Angular destroys the component. and  Ideal for cleanup: unsubscribing Observables, clearing timers, detaching event handlers.

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


 -  `@ViewChild` gets a reference to a single DOM element or component.
 -  `@ViewChildren` gets multiple elements as a `QueryList`.



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

###  **Use Cases**

* **Protect authenticated routes** like `/dashboard`, `/profile`, etc.
* **Role-based access**: Only admins can access certain routes.
* **Prevent navigation to login/register pages if already logged in** (reverse guard).
* **Lazy loaded modules**: Use `CanLoad` to prevent loading secure modules unless authenticated.

---




## Routing & Child Routes

 -  Angular Routing enables navigation between views or components in a single-page application (SPA).
 -  It maps URL paths to components using the `RouterModule`.
 -  Angular uses the `RouterModule` to handle navigation.
 -  Routes are defined using a `Routes` array.
 -  Child routes are nested routes under a parent component, useful for modules like admin dashboards.
 -  They are rendered using a secondary `<router-outlet>` in the parent component.



####  **Basic Routing Example:**

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

###  **What are Child Routes?**

* Child Routes allow you to nest routes inside a parent route.
* Useful for layouts where a part of the view (like sidebar/header) stays consistent.

####  **Example:**

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

###  **What are Directives?**

* Directives are **classes that add behavior** to elements in the DOM.
* Angular provides **built-in directives**, and you can also create **custom directives**.


 -  A directive is a class that changes the appearance or behavior of DOM elements.
 -  Three types are:

1. **Component Directive** – essentially a directive with a template.
2. **Attribute Directive** – changes appearance/behavior (e.g., `ngClass`, `ngStyle`).
3. **Structural Directive** – modifies layout (e.g., `*ngIf`, `*ngFor`, `*ngSwitch`).

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

###  **Use Cases**

* **Structural**: Render UI conditionally or dynamically.
* **Attribute**: Apply reusable visual effects, validation, or behaviors.
* **Custom**: Build reusable logic (e.g., auto-focus, tooltip, access control).

---





---

##  **Pipes**

###  **What are Pipes?**

* Pipes are **functions** used to **transform data in templates**.
* They are **used in interpolation ({{}})** to format and display data more cleanly.

 -  Pipes transform data in the template.
 -  Built-in examples: `date`, `uppercase`, `currency`.
 -  Custom pipes can be created using `@Pipe()` decorator.



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







###  **Angular**

  - Angular is a TypeScript-based front-end framework developed by Google. It’s used to build single-page applications (SPAs) with a component-based architecture, built-in routing, forms, HTTP services, and powerful dependency injection.










###  **Module**

 -  A module is a container that groups related components, directives, pipes, and services. It’s defined using the `@NgModule` decorator.
 -  The root module is usually `AppModule`, and we can also create feature modules to organize the code better.












###  **@Input and @Output Decorators**

 -  `@Input()` is used to pass data **from parent to child component**.
 -  `@Output()` is used to **emit events from child to parent** using `EventEmitter`.

| Decorator   | Used For                | Data Direction  | Example                |
| ----------- | ----------------------- | --------------- | ---------------------- |
| `@Input()`  | Receiving data          | Parent ➡️ Child | User profile component |
| `@Output()` | Sending event or signal | Child ➡️ Parent | Like button event      |



## ✅ **@Input() Only Example**

### Scenario: Show a user's profile card using data from the parent component.


### 🔹 Child Component – `UserProfileComponent`

```ts
// user-profile.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="card">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
    </div>
  `
})
export class UserProfileComponent {
  @Input() user: any;
}
```


### 🔹 Parent Component – `DashboardComponent`

```ts
// dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-user-profile [user]="selectedUser"></app-user-profile>
  `
})
export class DashboardComponent {
  selectedUser = {
    name: 'Alice Johnson',
    email: 'alice@example.com'
  };
}
```


## ✅ **@Output() Only Example**

### Scenario: Button inside a child component emits a custom event to the parent when clicked.


### 🔹 Child Component – `LikeButtonComponent`

```ts
// like-button.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: `<button (click)="sendLike()">👍 Like</button>`
})
export class LikeButtonComponent {
  @Output() liked = new EventEmitter<void>();

  sendLike() {
    this.liked.emit();
  }
}
```


### 🔹 Parent Component – `PostComponent`

```ts
// post.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `
    <h3>Angular Post</h3>
    <app-like-button (liked)="onLiked()"></app-like-button>
    <p>Likes: {{ likeCount }}</p>
  `
})
export class PostComponent {
  likeCount = 0;

  onLiked() {
    this.likeCount++;
  }
}
```





###  **Data Binding**

 -  Data binding connects template and component. Types include:

* Interpolation: `{{ data }}`
* Property binding: `[src]="imgUrl"`
* Event binding: `(click)="onClick()"`
* Two-way binding: `[(ngModel)]="name"` (requires FormsModule)




* Use **interpolation** when you only need to **display** data.
* Use **two-way binding** when you need to **read and write** data between the view and the component.
* **Property binding** is for **setting values** on DOM elements or components.
* **Event binding** is for **responding to user actions**.




### **Difference Between Interpolation and Two Way Binding**

| Feature                   | **Interpolation (`{{ data }}`)**                | **Two-Way Binding (`[(ngModel)]="name"`)**             |
| ------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| **Direction**             | One-way (component → view)                      | Two-way (component ↔ view)                             |
| **Purpose**               | Display data from the component in the template | Sync data between the component and form/input element |
| **Syntax**                | `{{ variable }}`                                | `[(ngModel)]="variable"`                               |
| **Use Case**              | Showing static/dynamic text in HTML             | Getting and updating form input values dynamically     |
| **Module Required**       | No extra module needed                          | Requires importing `FormsModule` from `@angular/forms` |
| **Example**               | `<p>{{ userName }}</p>`                         | `<input [(ngModel)]="userName">`                       |
| **Can Update Component?** | ❌ No – data flows one-way only                  |  Yes – data is updated both in view and component     |

---



###  **Difference Between Property Binding and Event Binding**

| Feature       | **Property Binding** (`[property]="value"`)                       | **Event Binding** (`(event)="handler()"`)            |
| ------------- | ----------------------------------------------------------------- | ---------------------------------------------------- |
| **Direction** | One-way: **Component → View**                                     | One-way: **View → Component**                        |
| **Purpose**   | Set/update **DOM element or directive properties** from component | Respond to **DOM events** (like clicks, input, etc.) |
| **Syntax**    | Square brackets: `[src]="imgUrl"`                                 | Parentheses: `(click)="onClick()"`                   |
| **Data Flow** | Pushes data from component to the template                        | Sends user interaction from template to component    |
| **Use Case**  | Set element attributes like `src`, `disabled`, `value`, etc.      | Handle events like `click`, `input`, `submit`, etc.  |
| **Example**   | `<img [src]="profilePic">`                                        | `<button (click)="deleteUser()">Delete</button>`     |








###  **Protect Routes**

 -  We use **Route Guards** like `CanActivate` to protect routes.
 -  They check conditions before navigation (e.g., user is logged in).
 -  We register them in the routing module using the `canActivate` property.





### **Promise and Observable**

- [Promise](#Promise)
- [Observable](#Observable)

-  **Promises** handle one-time asynchronous operations.
 -  **Observables**
       -   (from RxJS) are more powerful
       -  they handle multiple values over time, support cancellation, and have operators like `map`, `filter`, and `mergeMap`.
       -   for asynchronous operations (e.g., HTTP requests).
       -    Observables provide powerful operators for composing and transforming data streams.


- Both **Promises** and **Observables** handle asynchronous operations in JavaScript, 
- but they differ in key ways, especially in Angular development where Observables (from RxJS) are commonly used.
- I prefer **Observables** in Angular because they offer **more flexibility**, **stream control**, and are fully integrated with Angular’s reactive architecture.

**Key Differences (Table)**

| Feature       | Promise                   | Observable                          |
| ------------- | ------------------------- | ----------------------------------- |
| Execution     | Eager                     | Lazy (runs on subscription)         |
| Emission      | Single value              | Multiple values over time           |
| Cancellation  | Not supported             | Supported via `unsubscribe()`       |
| Operators     | No chaining operators     | Rich RxJS operator support          |
| Angular Usage | Rare (except async/await) | Widely used (`HttpClient`, `Forms`) |


**When Do I Use What?**

* Use **Promise** for **one-time async calls**, like simple HTTP requests or `async/await` operations.
* Use **Observable** when you need:

  * Multiple emissions (e.g., WebSocket stream)
  * Cancelable streams (e.g., user typing)
  * Complex transformations (via RxJS)
  * Angular’s reactive APIs (`HttpClient.get()`, `FormControl.valueChanges`)




### **Promise**

* **Eager**: Executes immediately when created.
* **One-time**: Handles a **single value** or error.
* **Not cancellable** once started.
* Returns a result via `.then()`, error via `.catch()`.

```ts
const promise = new Promise((resolve, reject) => {
  resolve('Data received');
});
```

---

### **Observable**

* **Lazy**: Runs **only when subscribed to**.
* Can emit **multiple values over time**.
* Supports **cancellation** via `unsubscribe()`.
* Powerful **operators** (`map`, `filter`, `retry`, etc.) via **RxJS**.
* Core to Angular's **HttpClient**, **Forms**, and **Event Handling**.

```ts
import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next('Data 1');
  observer.next('Data 2');
  observer.complete();
});
```

---









###  **Common RxJS Operators**

* `of()` – emits static values as an observable
* `forkJoin()` – runs multiple observables in parallel, returns when all complete
* `map()` – transforms the emitted value
* `tap()` – for side effects like logging
* `pipe()` – chains multiple RxJS operators





##  1. `of()` – Static Data for Testing or Defaults

 - **Use Case**: Simulating an API response or default configuration.
 - **Real-world scenario**: Pre-populating dropdowns, fallback data when offline, or mock data for testing UI.
```ts
import { of } from 'rxjs';

loadUserRoles() {
  // Simulated default roles
  return of(['admin', 'editor', 'viewer']);
}
```


---

##  2. `forkJoin()` – Combine Multiple API Calls

 - **Use Case**: Load user profile and permissions simultaneously before showing a dashboard.
 - **Real-world scenario**: You need *all* responses before proceeding (e.g., to load a settings page or summary view).
```ts
import { forkJoin } from 'rxjs';

ngOnInit() {
  forkJoin({
    user: this.api.getUserDetails(),
    permissions: this.api.getUserPermissions()
  }).subscribe(({ user, permissions }) => {
    this.user = user;
    this.permissions = permissions;
  });
}
```



---

##  3. `map()` – Transform API Data

 - **Use Case**: Format data for display (e.g., convert dates or calculate values).

 - **Real-world scenario**: Adjust backend data for UI — format currency, add computed fields, etc.
```ts
import { map } from 'rxjs/operators';

this.api.getOrders().pipe(
  map(orders => orders.map(order => ({
    ...order,
    displayDate: new Date(order.createdAt).toLocaleDateString()
  })))
).subscribe(transformedOrders => {
  this.orders = transformedOrders;
});
```


---

##  4. `tap()` – Debugging or Logging Without Changing Data

 - **Use Case**: Log response or trigger analytics without modifying stream.
 - **Real-world scenario**: Logging, debugging, triggering third-party services (e.g., Google Analytics), or showing toast notifications.

```ts
import { tap } from 'rxjs/operators';

this.api.getUserProfile().pipe(
  tap(profile => console.log('User loaded:', profile)),
).subscribe(profile => {
  this.profile = profile;
});
```


---

##  5. `pipe()` – Combine Multiple Operators

 - **Use Case**: Process a stream with several RxJS steps.
 - **Real-world scenario**: You almost always use `pipe()` when working with RxJS in Angular to compose logic.
```ts
this.api.searchProducts().pipe(
  tap(() => this.loading = true),
  map(data => data.filter(p => p.available)),
  tap(() => this.loading = false)
).subscribe(products => {
  this.products = products;
});
```



---

## Bonus: Combine all in one practical scenario

### 🛒 Example: E-Commerce Dashboard Initialization

```ts
forkJoin({
  user: this.api.getUser(),
  cart: this.api.getCart(),
  orders: this.api.getRecentOrders()
}).pipe(
  tap(() => this.loading = true),
  map(response => ({
    ...response,
    recentOrderCount: response.orders.length
  })),
  tap(data => console.log('Dashboard data:', data)),
  tap(() => this.loading = false)
).subscribe(data => {
  this.user = data.user;
  this.cart = data.cart;
  this.orderCount = data.recentOrderCount;
});
```




###  **@HostListener and @HostBinding**

 -  `@HostListener` listens to host element events like click, resize.
 -  `@HostBinding` binds a property or attribute to the host element of the directive/component.










###  **Component Factory & Encapsulation**

 -  A component factory is used to dynamically create components at runtime using `ComponentFactoryResolver`.
 -  Encapsulation determines how styles are scoped:

* Emulated (default)
* None
* Shadow DOM





###  **Services and Injectors**

 -  Services contain shared logic and are injected using Angular's **dependency injection** system.
 -  Injectors create and manage service instances, maintaining a hierarchy for scoped services.




###  **EventEmitter**

 -  It’s used with `@Output()` to emit custom events from child to parent components.











###  **setTimeout and setInterval**

 -  `setTimeout()` runs code once after a delay.
 -  `setInterval()` runs code repeatedly at a fixed interval.
 -  Used in Angular for delays, polling, etc. But should be cleared in `ngOnDestroy()`.


###  **HttpClientModule**

 -  `HttpClientModule` is used to make HTTP calls.
 -  It provides the `HttpClient` service, supports observables, interceptors, and typed responses.


###  **Module and Component**

 -  A **Module** is a container for a group of related features (components, services, etc.)
 -  A **Component** controls a part of the UI. It includes:

* Template (HTML)
* Class (logic)
* Styles


###  **Dependency Injection**

 -  DI is a design pattern where Angular provides services or objects that a component needs.
 -  We declare dependencies in the constructor, and Angular injects them at runtime.





---

##  Using One Component Inside Another

Yes, ✅ **you can use one component inside another component in Angular** — this is called **component composition** and is a core feature of Angular.



### 🧠 Summary:

| Concept         | Description                                     |
| --------------- | ----------------------------------------------- |
| Component usage | `<app-child>` tag in the parent’s template      |
| Module support  | Must be declared or imported in the same module |
| Standalone      | Use `imports: [ChildComponent]` in parent       |

---

### Step 1: Create the child component

```bash
ng generate component child
```

This creates `ChildComponent` in its own folder.

### `child.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>This is the child component!</p>`
})
export class ChildComponent {}
```

---

### Step 2: Use `<app-child>` in the parent component’s template

### `parent.component.html`

```html
<h1>Parent Component</h1>
<app-child></app-child> <!-- This is how you embed it -->
```

---

### Step 3: Declare the child component in the same module

If you're not using standalone components, make sure the **child is declared in the same NgModule** as the parent:

```ts
@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  ...
})
export class AppModule {}
```

---

### ✅ If using **standalone components** (Angular 14+):

Import the child component in the `imports` of the parent:

```ts
@Component({
  standalone: true,
  imports: [ChildComponent],
  selector: 'app-parent',
  template: `<app-child></app-child>`
})
export class ParentComponent {}
```

---





###  **performance optimization techniques**

 - “To reduce load times in Angular apps, I focus on both initial load and runtime performance.

 -  At build time, I use **lazy loading of modules**, **tree shaking**, and **AOT (Ahead-of-Time) compilation**.
 -  Lazy loading ensures that only the required parts of the app are loaded initially, while AOT pre-compiles templates to speed up rendering.

 -  I also enable **production builds with optimization flags**, which handle minification, dead code removal, and differential loading.

 -  At runtime, I reduce load by optimizing **change detection** with `OnPush` strategy, and I use **trackBy** in `*ngFor` loops to prevent unnecessary DOM re-renders.

 -  Additionally, I compress and cache static assets, load critical CSS first, and serve images via modern formats like WebP with lazy loading.

 -  When needed, I use Chrome DevTools and Lighthouse to profile performance and address any bottlenecks.”

---

### ✅ Key Techniques You Can Mention in an Interview:

#### 🛠️ **Build-Time Optimization**

* **Lazy Loading** Angular modules (`loadChildren`)
* **AOT Compilation** (`ng build --prod` uses this by default)
* **Tree Shaking & Minification**
* **Code Splitting**
* **Differential Loading** for modern vs legacy browsers

#### ⚙️ **Runtime Optimization**

* `ChangeDetectionStrategy.OnPush` to reduce change detection cycles
* `trackBy` function in `*ngFor` to optimize list rendering
* **Debouncing or throttling** input handlers
* **Avoid memory leaks** by unsubscribing from observables (e.g., using `takeUntil`)

#### 🌐 **Network & Asset Optimization**

* Use **lazy loading for images**
* Use **WebP** or **AVIF** formats
* **Preloading** for frequently accessed modules
* Enable **HTTP caching** and **gzip** or **brotli** compression on server
* Use **service workers** for caching (via Angular PWA)

#### 🔍 **Profiling Tools**

* Chrome DevTools (Performance tab)
* Angular DevTools extension
* Lighthouse audits for performance scoring
* WebPageTest or PageSpeed Insights

---

### 🚀 Bonus Points:

- “I also use route preloading strategies with `PreloadAllModules` where appropriate to balance load speed and responsiveness. And I prefer CDNs for hosting static assets.”

---







### 🧠 Optional Deep Dive (if asked):

- In JIT (Just-in-Time), Angular compiles templates in the browser, increasing the load time and bundle size.
- AOT shifts that work to the build step, which is especially useful for large-scale apps and mobile performance.”


### ✅ Key Benefits of AOT:

| Feature                | Benefit                                    |
| ---------------------- | ------------------------------------------ |
| Pre-compiles templates | Faster rendering in the browser            |
| Smaller bundles        | Removes Angular compiler from final bundle |
| Early error detection  | Catches template errors during build       |
| Security               | Helps prevent injection attacks            |

---

### 🔧 How to Enable AOT

✅ Automatically enabled in:

```bash
ng build --prod
```

✅ Or explicitly:

```bash
ng build --aot
```





##  **AOT vs JIT**

- In Angular, there are two ways to compile templates: **JIT (Just-in-Time)** and **AOT (Ahead-of-Time)**.
-  **JIT** compiles templates in the **browser at runtime**, 
- while **AOT** compiles them **during the build process**, before the app is deployed.
- For development, JIT is useful because it’s faster to build and easier to debug.
- But in production, I always use AOT because it improves performance, reduces bundle size, and catches errors early during the build.”



- AOT is now the default in Angular production builds, and it’s essential for optimizing load times and ensuring better security and early validation.”


| Feature                      | AOT (Ahead-of-Time)           | JIT (Just-in-Time)                   |
| ---------------------------- | ----------------------------- | ------------------------------------ |
| **When compilation happens** | At build time (before deploy) | In browser at runtime                |
| **Performance**              | Faster runtime performance    | Slower due to in-browser compilation |
| **Bundle size**              | Smaller (compiler excluded)   | Larger (includes compiler)           |
| **Error detection**          | Caught at build time          | Caught at runtime                    |
| **Use case**                 | Production                    | Development                          |
| **Initial load time**        | Faster                        | Slower                               |
| **Hot reload speed**         | Slower                        | Faster                               |

---

### 🔧 How to Use Them

* ✅ **JIT (default for dev)**:

  ```bash
  ng serve
  ```

* ✅ **AOT (default for prod)**:

  ```bash
  ng build --prod
  ```

  or explicitly:

  ```bash
  ng build --aot
  ```

---




### Angular CLI

 - Angular CLI is a command-line interface tool that helps scaffold, build, test, and deploy Angular apps.
   
Examples:
 - ng new app-name
 - ng generate component my-comp
 - ng serve
 - ng build --prod
 - 



### Singleton service
 - A singleton service is one instance shared across app. To ensure:

 - Provide it in @Injectable({ providedIn: 'root' })
 - Or register it in AppModule’s providers
 - 






### Angular 19
 (November 2024):
 - Incremental Hydration: Improves performance by incrementally hydrating server-rendered content on the client. 
 - Route-level Render Mode: Offers more control over how routes are rendered, potentially improving performance. 
 - Standalone Components by Default: Simplifies project structure and reduces boilerplate code by making standalone components the default. 
 - Linked Signals: Provides a more efficient way to handle reactive data. 
 - Security Enhancements: Includes features like security with Google to improve application security. 
 - Resource and RxResource APIs: Provides new APIs for data fetching and manipulation. 
 - Modernizing Code with Language Service: Improves the language service and tooling for better code editing and development.

---
   
## Step by Step Implementation with NgRx

---

Using NgRx :

* Define **actions** (events)
* Use **reducers/stores** to manage state
* Access state and dispatch changes via the **Store service**
* Ensure **predictable state management** in complex applications



###  1. **Define Actions**

Actions represent user or system events that change the state.

```ts
// cart.actions.ts
import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ productId: number, quantity: number }>()
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);
```

---

###  2. **Define the State & Reducer**

```ts
// cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem } from './cart.actions';

export interface CartState {
  items: { productId: number, quantity: number }[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { productId, quantity }) => {
    const updatedItems = [...state.items, { productId, quantity }];
    return { ...state, items: updatedItems };
  }),
  on(removeItem, (state, { productId }) => {
    const filteredItems = state.items.filter(item => item.productId !== productId);
    return { ...state, items: filteredItems };
  })
);
```

---

###  3. **Register Global State**

```ts
// app.module.ts
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ cart: cartReducer }),
  ],
})
export class AppModule {}
```

---

###  4. **Inject Store & Dispatch Actions**

#### Add item from Product Component:

```ts
// product.component.ts
import { Store } from '@ngrx/store';
import { addItem } from '../store/cart.actions';

constructor(private store: Store) {}

addToCart(productId: number) {
  this.store.dispatch(addItem({ productId, quantity: 1 }));
}
```

#### View cart in Cart Component:

```ts
// cart.component.ts
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

cartItems$: Observable<any[]>;

constructor(private store: Store<{ cart: CartState }>) {}

ngOnInit() {
  this.cartItems$ = this.store.pipe(select(state => state.cart.items));
}
```



### **Component Factory**


- A **Component Factory** in Angular is a low-level API that allows us to **dynamically create components** at runtime — without declaring them in the template.

- It's part of Angular’s **Dynamic Component Loader mechanism** and is useful when the component to be rendered is not known at compile time (e.g., modal dialogs, dynamic forms, dashboards, etc.).

- A Component Factory enables **dynamic component creation** at runtime, giving Angular apps **flexibility and scalability** for dynamic UIs.

- Angular uses the `ComponentFactoryResolver` or `ViewContainerRef.createComponent()` to instantiate the component dynamically.

---

**Basic Steps to Use Component Factory**

1. **Create the component you want to load dynamically**

   ```ts
   @Component({
     selector: 'app-alert',
     template: `<p>{{ message }}</p>`
   })
   export class AlertComponent {
     @Input() message: string = '';
   }
   ```

2. **Create a container with `ViewContainerRef`**

   ```html
   <ng-template #container></ng-template>
   ```

3. **Use `ViewContainerRef` to create the component**

   ```ts
   @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

   constructor(private resolver: ComponentFactoryResolver) {}

   loadAlert() {
     const factory = this.resolver.resolveComponentFactory(AlertComponent);
     const componentRef = this.container.createComponent(factory);
     componentRef.instance.message = 'This is a dynamic alert!';
   }
   ```

---

**Pre-Angular 13 vs Angular 13+**

* **Before Angular 13**: Used `ComponentFactoryResolver`
* **From Angular 13 onwards**: Can directly pass the component class to `createComponent()` without using a resolver:

  ```ts
  this.container.createComponent(AlertComponent);
  ```

---

**Real-Time Use Cases**

* Dynamic modals/popups
* CMS-style applications (rendering unknown components from JSON config)
* Plugin-based architectures
* Dashboards where widgets are loaded at runtime



### **ngComponentOutlet**

- `ngComponentOutlet` is a declarative, cleaner way to render dynamic components in Angular — best suited for **straightforward, template-driven scenarios**.
- `ngComponentOutlet` is a **structural directive** in Angular that allows us to **dynamically render a component** using its class — **directly in the template**, without writing imperative code.

- It’s a simpler alternative to using **ComponentFactory** and is ideal for **dynamic component rendering** when you know the component type at runtime.


```html
<ng-container *ngComponentOutlet="componentType"></ng-container>
```


**Real-World Example**

```ts
@Component({
  selector: 'app-alert',
  template: `<p>{{ message }}</p>`
})
export class AlertComponent {
  @Input() message = 'Default alert';
}
```

```ts
@Component({
  selector: 'app-host',
  template: `
    <ng-container *ngComponentOutlet="dynamicComponent"></ng-container>
  `
})
export class HostComponent {
  dynamicComponent = AlertComponent;
}
```


**Passing Data to Dynamic Components**

To pass `@Input()` values, you can use `ngComponentOutletContext`:

```html
<ng-container 
  *ngComponentOutlet="dynamicComponent; 
                      ngModuleFactory: dynamicModule; 
                      ngComponentOutletContext: context">
</ng-container>
```

Where `context` is:

```ts
context = { message: 'Dynamic alert via context!' };
```

Note: The property name in context must match the `@Input()` name in the dynamic component.

---

**When to Use `ngComponentOutlet` vs ComponentFactory**

| Use Case                                                    | Recommended API                |
| ----------------------------------------------------------- | ------------------------------ |
| Simple dynamic rendering                                    | ✅ `ngComponentOutlet`          |
| Need full control (e.g., destroy, detect changes, injector) | ✅ `ComponentFactory`           |
| Rendering from config/JSON                                  | ✅ `ngComponentOutlet`          |
| Complex lifecycle management                                | ✅ `ViewContainerRef` / Factory |

---


### **Signals**


- Signals introduce a **lightweight, reactive system** in Angular that improves **performance**, reduces **boilerplate**, and simplifies **state handling** — especially for **UI state and derived values**.
- **Signals** are a new **reactivity model** in Angular (from v16) that allow components and services to **track and respond to state changes** in a more **explicit, fine-grained**, and **predictable** way.
- They are designed to **improve performance** and make reactive state management simpler — **without needing RxJS** in basic cases.
- A **signal** is a reactive primitive that **holds a value** and **notifies dependents** when that value changes.



**Key Concepts**

| Concept      | Description                                   |
| ------------ | --------------------------------------------- |
| `signal()`   | Creates a reactive value                      |
| `set()`      | Updates the signal’s value                    |
| `update()`   | Applies a function to current value           |
| `computed()` | Derives a new value from existing signals     |
| `effect()`   | Runs a function when dependent signals change |

---

**Use Cases in Angular**

* Component-local state (like `useState` in React)
* Simplifying `@Input()` and `@Output()` usage
* Replacing `BehaviorSubject` for simpler scenarios
* Avoiding overuse of RxJS in small reactive flows

**Basic Example**

```ts
import { signal, computed, effect } from '@angular/core';

const count = signal(0);

// Reading value
console.log(count()); // 0

// Updating value
count.set(1);

// Computed signal
const double = computed(() => count() * 2);
console.log(double()); // 2

// Effect: Reacts when count changes
effect(() => {
  console.log('Count changed to:', count());
});
```


**Real-world Example in Component**

```ts
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }
}
```

In the template:

```html
<p>{{ count() }}</p>
<button (click)="increment()">+</button>
```

---

### **Signals vs Observables**

| Feature    | Signals                     | Observables (RxJS)              |
| ---------- | --------------------------- | ------------------------------- |
| Push/Pull  | Pull-based (pull value)     | Push-based (subscribe to value) |
| Simplicity | Simple, minimal boilerplate | More powerful, more complex     |
| Lifecycle  | Automatic tracking          | Manual subscription/unsubscribe |
| Use Case   | Local state                 | Async streams, events, timers   |







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

### **lifecycle from source code to optimized production bundle**


1. **Transpilation:** TypeScript is transpiled to JavaScript (via `tsc`)
2. **AOT Compilation:** Angular templates are compiled to JS
3. **Tree-shaking:** Dead code is removed using Webpack
4. **Minification/Uglification:** Code is compressed and obfuscated
5. **Bundling:** All modules are bundled into chunks
6. **Lazy Modules:** Webpack generates dynamic chunks for lazy-loaded modules
7. **Asset Optimization:** Images, CSS, and fonts are optimized
8. **Index Injection:** Bundles and styles injected into `index.html`
9. **Differential Loading:** Generates two JS versions (modern + legacy)
10. **Deployment:** Final assets deployed to CDN or server

>  **Key Point:** Each step optimizes performance and reduces bundle size.

---


### **Angular optimize**

- Angular uses **Webpack loaders and plugins** to optimize assets:
- Production builds automatically apply optimizations unless disabled in `angular.json`.
* **Images:** Optimized using `image-webpack-loader` or other compression tools
* **Fonts:** Included as base64 (small) or as separate files (large)
* **Stylesheets:** SCSS/LESS compiled, minified, and merged
* **CSS Code Splitting:** Angular CLI extracts critical CSS for lazy-loaded modules

Advanced: You can use **Angular CLI Builders** to chain tools like `imagemin`, `purgecss`, etc.


---

### **Consistent builds across environments**


1. Use **`environment.ts`** files for environment-specific values.
2. Apply consistent **build scripts** via `npm scripts` or CI pipelines:

```bash
npm run build:staging
npm run build:production
```

3. Lock dependency versions using:

   * `package-lock.json`
   * `npm ci` instead of `npm install`

4. Use **Docker** for environment parity

5. Integrate **Lint + Unit Tests** in pipelines to block broken builds


---

### **Hood**

- The `--prod` flag triggers the following optimizations:
- `--prod` is shorthand for all performance-focused flags.


* ✅ Enables **AOT**
* ✅ Enables **minification & uglification**
* ✅ Enables **tree-shaking**
* ✅ Disables **source maps**
* ✅ Removes **debug data & console.log**
* ✅ Applies **differential loading**
* ✅ Compiles with **build optimizer**

These options are defined in `angular.json` under the `production` configuration.


---

### **Angular builds into CI/CD pipelines**

>  **Key Point:** CI should verify **code quality**, **tests**, and **build success** before deploying.


1. **Install dependencies:**

```bash
npm ci
```

2. **Lint & test:**

```bash
npm run lint
npm run test -- --watch=false --browsers=ChromeHeadless
```

3. **Build:**

```bash
ng build --configuration production
```

4. **Deploy:** Copy `dist/` folder to your server/CDN.

🔧 In **GitHub Actions**, your workflow may look like:

```yaml
jobs:
  build:
    steps:
      - uses: actions/checkout@v2
      - run: npm ci
      - run: npm run lint
      - run: npm run test -- --watch=false
      - run: ng build --configuration=production
```


---

### **Build Optimizer**

**Build Optimizer** is a Webpack plugin used by Angular CLI that:

* Removes **Angular decorators** (e.g., `@Component`) from compiled JS
* Marks code as **pure functions** for better tree-shaking
* Improves performance and reduces bundle size

It is **enabled by default** in production builds.

>  **Key Point:** Helps Angular tree-shake code even more aggressively.

---


### **Automation Tools**

- Angular CLI abstracts Webpack complexity, allowing developers to focus on features rather than configuration.
- Angular provides a powerful tool called the **Angular CLI**, 
- Which automates a wide range of development tasks. Behind the scenes, 
- Angular CLI uses **Webpack** for:

* **Module bundling**
* **Code transpilation (TypeScript to JavaScript)**
* **Minification and uglification**
* **Asset optimization**
* **Hot Module Replacement (HMR)** in dev mode


---


### **AOT**

- AOT stands for **Ahead-of-Time Compilation** in Angular.
- **AOT** compiles Angular templates and components **during the build phase**, instead of at runtime.
- AOT is crucial for **production-grade Angular apps due to performance and security**.
- Angular compiles the application’s HTML templates and TypeScript code **during the build phase**, instead of in the browser at runtime.
- This leads to **faster rendering**, **smaller bundle size**, and **earlier error detection**, because the compiler doesn't need to run in the browser.
- I always use **AOT in production by running `ng build --prod`, which enables AOT, minification, tree-shaking, and other optimizations automatically**.


- **Benefits of AOT:**

* **Faster rendering**: Templates are already compiled to JS
* **Smaller bundle size**
* **Early error detection**: Catch template errors at build time
* **Improved security**: No need to ship the compiler to the client

✅ **Enabled by default in production builds**:

```bash
ng build --configuration=production
```


---

### **AOT and JIT**

| Feature          | AOT (Ahead-of-Time) | JIT (Just-in-Time)         |
| ---------------- | ------------------- | -------------------------- |
| Compilation Time | During build        | In the browser at runtime  |
| Speed            | Faster load time    | Slower initial load        |
| Error Detection  | At build time       | At runtime                 |
| Bundle Size      | Smaller             | Larger (includes compiler) |

>  **Key Point:** Use **JIT** for development and **AOT** for production.

---

### **Lazy loading**
-  Lazy loading is the practice of loading feature modules **only when needed**, reducing initial load time.
-  We define routes using `loadChildren` with dynamic imports.
- Angular uses **lazy loading** to load feature modules only when needed, reducing initial load time.
- **Key Point:** Lazy loading + Webpack = optimized performance via **code splitting**


**How it works:**

* Define lazy-loaded routes using `loadChildren`:

```ts
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
```

* Angular and Webpack **split each lazy module into a separate chunk**
* The chunk is fetched only when the user navigates to that route


---

### **Tree-shaking**

- Tree shaking removes unused code from the final bundle. 
- Angular CLI with Webpack performs tree shaking automatically to optimize production builds.
- Tree shaking is a **build-time optimization** technique used  to **remove unused code** from the final JavaScript bundle, 
- Reducing file size and improving performance.

**Tree-shaking** is a **build optimization** that removes unused (dead) code from the final bundle.

* Angular CLI + Webpack + TypeScript compiler analyze your imports
* Unused services, functions, or components are excluded

>  **Key Point:** Make sure your code uses **ES6 module syntax** (i.e., `import/export`) to benefit from tree-shaking.


In Angular, tree shaking is automatically applied during **production builds** using:

```bash
ng build --configuration production
```

It works by leveraging:

* **ES6 module syntax** (`import/export`) for static code analysis
* **Webpack**, which identifies and removes unused exports
* **AOT (Ahead-of-Time) compilation**, which simplifies the app structure for better optimization


**Example**

If I have a utility file with two functions, and I import only one:

```ts
// utils.ts
export function usedFunc() { }
export function unusedFunc() { }
```

- Only `usedFunc` will be included in the final bundle. 
- `unusedFunc` is "shaken off" because it's not referenced anywhere.

**Tools I Use**

To verify tree shaking, I use:

```bash
npm install -g source-map-explorer
source-map-explorer dist/*.js
```


---

### **Source Maps**

**Source maps** map your compiled code back to the original TypeScript or SCSS source code.

* Useful for **debugging**
* Supported in most modern browsers
* Generated automatically in dev builds

To enable in production:

```bash
ng build --source-map=true
```

>  **Key Point:** Always disable source maps in production unless needed for debugging specific issues.

---

### **Differential loading and polyfills**

**Differential loading** builds two separate bundles:

* **Modern JavaScript (ES2015+)** for new browsers
* **Legacy JavaScript (ES5)** for older browsers

**Polyfills** provide fallback functionality for browsers that don’t support modern JS features. Managed in `polyfills.ts`.

>  **Key Point:** Angular CLI handles this automatically in production builds, improving performance and compatibility.

---

### **Environment-based builds?**

Angular uses environment files (`environment.ts`, `environment.prod.ts`) and `fileReplacements` in `angular.json`.
>  **Key Point:** Great for managing different API URLs, logging levels, or feature flags per environment.

To build for production:

```bash
ng build --configuration=production
```

This replaces:

```ts
import { environment } from '../environments/environment';
```

with:

```ts
import { environment } from '../environments/environment.prod';
```


---

### **linting**


🔹 **Unit Testing:**

* **Framework:** Jasmine
* **Runner:** Karma
* Runs headless in Chrome by default

🔹 **E2E Testing:**

* Older: **Protractor** (now deprecated)
* Preferred: **Cypress** or **Playwright**

🔹 **Linting:**

* Previously TSLint (deprecated)
* Now use **ESLint** with Angular ESLint Plugin

```bash
ng lint
```

>  **Key Point:** Adopt **Cypress + ESLint** for modern Angular projects

---





### **Authentication**

- "I typically implement authentication in Angular using **JWT-based token authentication**. 
- When the user logs in, I send a `POST` request to the backend with the user's credentials. 
- Upon successful validation, the server returns a **JWT token**, which I store in `localStorage` or `sessionStorage`.
- To secure all outgoing requests, I use an **HTTP interceptor** that automatically attaches the token to the `Authorization` header. Additionally, I implement an `AuthGuard` to restrict access to protected routes."

✅ **Key Points to Mention:**

* JWT token storage
* HTTP interceptor
* AuthGuard for route protection

---

### **Secure Angular routes**


- "To implement **Role-Based Access Control (RBAC)** in Angular, I create a `RoleGuard` in addition to the standard `AuthGuard`. 
- The guard checks if the current user's roles—retrieved from either the JWT payload or local storage—match the expected roles defined in the route’s metadata.
- For example, I add `canActivate: [AuthGuard, RoleGuard]` to my route definitions and pass allowed roles in the `data` field. 
- Inside the guard, I validate whether the user has at least one matching role."

 **Key Points to Mention:**

* `RoleGuard` based on `route.data`
* Dynamic role checks using `localStorage` or JWT claims
* Combined use of `AuthGuard` + `RoleGuard`

---

###  **Token expiration**

- "For handling token expiration, I decode the JWT and check the `exp` field. 
- I do this in either the HTTP interceptor or a token utility service. 
- If the token is expired, I automatically log the user out or redirect them to the login screen.
- In some cases, I also implement a **refresh token mechanism**, 
- where a secondary token can be used to fetch a new JWT without forcing a logout."

✅ **Key Points to Mention:**

* Token decoding using `atob()`
* Auto logout on expiration
* Optionally support refresh tokens

---

### **Protect UI elements**

- "I conditionally render UI elements using `*ngIf` based on user roles stored in a service or decoded from the token. 
- For instance, I use something like `*ngIf="roleService.hasRole('admin')"` to show admin-specific controls.
- However, I always emphasize that **UI-level access control is just for convenience**, not security. 
- Real enforcement must happen on the server side."

**Key Points to Mention:**

* Use of `*ngIf` for UI control
* RoleService for cleaner logic
* Server-side checks are mandatory

---



### **Secure role based routing**


- "For lazy-loaded modules, I use `CanLoad` guards in addition to `CanActivate`. 
- `CanLoad` prevents the module code from even being downloaded if the user lacks the required roles. 
This improves both security and performance.
- I reuse my `RoleGuard` logic within `CanLoad`, checking the route’s metadata before loading the module."

**Key Points to Mention:**

* `CanLoad` for lazy modules
* Reuse `RoleGuard` logic
* Security + performance optimization

---

### **Store authentication tokens**


- I prefer to store tokens in `localStorage` for simplicity, 
- But I’m aware of the **XSS risks**. 
- In security-sensitive apps, I recommend using **HttpOnly cookies**, which are inaccessible from JavaScript.
- However, since Angular can’t access HttpOnly cookies directly, it requires backend changes to support cookie-based authentication."

**Key Points to Mention:**

* `localStorage` is easy but risky (XSS)
* `HttpOnly` cookies are safer (but backend-dependent)
* Tradeoff between convenience and security

---

