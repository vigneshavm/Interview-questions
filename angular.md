
| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 | Questions8 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [What is Angular?](#1-what-is-angular) | [Lifecycle Hooks](#2-lifecycle-hooks) | [Modules (`@NgModule`)](#3-modules-ngmodule) | [HTTP Interceptor](#4-http-interceptor) | [Routing & Child Routes](#5-routing--child-routes) | [Input & Output Decorators](#6-input--output-decorators) | [Directives](#7-directives) | [Data Binding](#8-data-binding) |
| [Route Protection (`AuthGuard`)](#9-route-protection-authguard) | [Promise vs Observable](#10-promise-vs-observable) |  [RxJS Operators](#11-rxjs-operators) | [ViewChild & ViewChildren](#12-viewchild--viewchildren) |  [Lazy Loading](#13-lazy-loading) | [Dependency Injection (DI)](#14-dependency-injection-di) |  [Forms](#15-forms) |



# **Angular Interview Guide**

### **1. What is Angular?**
- A TypeScript-based open-source framework by Google for building SPAs (Single-Page Applications).
- Follows component-based architecture.

### **2. Lifecycle Hooks**
- **`constructor`**: Initialize class members.
- **`ngOnChanges`**: Detect input property changes.
- **`ngOnInit`**: Best for API calls, runs once after initialization.
- **`ngDoCheck`**: Custom change detection.
- **`ngAfterContentInit`**: After projected content is initialized.
- **`ngAfterViewInit`**: After the component’s view is initialized.
- **`ngOnDestroy`**: Cleanup (unsubscribe from Observables).

### **3. Modules (`@NgModule`)**
- Group components, directives, and services.
- **`AppModule`**: Root module.

### **4. HTTP Interceptor**
- Intercepts HTTP requests/responses (e.g., for authentication or logging).

### **5. Routing & Child Routes**
```typescript
const routes: Routes = [
  { path: 'parent', component: ParentComponent, children: [
    { path: 'child', component: ChildComponent }
  ]}
];
```

### **6. Input & Output Decorators**
- **`@Input()`**: Pass data from parent to child.
- **`@Output()`**: Emit events from child to parent using `EventEmitter`.

### **7. Directives**
- **Component Directive**: Reusable UI components.
- **Attribute Directive**: Modify element behavior (e.g., `ngClass`).
- **Structural Directive**: Modify DOM structure (e.g., `*ngIf`, `*ngFor`).

### **8. Data Binding**
- **Interpolation**: `{{ value }}`
- **Property Binding**: `[property]="value"`
- **Event Binding**: `(event)="method()"`
- **Two-Way Binding**: `[(ngModel)]="value"`

### **9. Route Protection (`AuthGuard`)**
```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return isAuthenticated;
  }
}
```

### **10. Promise vs Observable**
- **Promise**: Handles a single async event.
- **Observable**: Handles multiple events, supports operators (`map`, `pipe`).

### **11. RxJS Operators**
- **`of()`**: Emits a single value.
- **`forkJoin()`**: Runs multiple observables in parallel.
- **`tap()`**: Side effects (e.g., logging).
- **`map()`**: Transforms emitted values.

### **12. ViewChild & ViewChildren**
- **`@ViewChild()`**: Access a single child component.
- **`@ViewChildren()`**: Access multiple child components.

### **13. Lazy Loading**
- Load modules on demand for performance.
```typescript
loadChildren: () => import('./feature.module').then(m => m.FeatureModule)
```

### **14. Dependency Injection (DI)**
- Inject services into components efficiently.

### **15. Forms**
- **Template-Driven Forms**: Simpler, for small apps.
- **Reactive Forms**: Scalable, for complex forms.

---



- [Component-Based Architecture](#component-based-architecture)
- [Change Detection and Zone.js](#change-detection-and-zonejs)
- [NgModules and App Structure](#ngmodules-and-app-structure)
- [Standalone Components](#standalone-components)
- [Component Communication Techniques](#component-communication-techniques)
- [OnPush Change Detection Strategy](#onpush-change-detection-strategy)
- [Reactive vs Template-Driven Forms](#reactive-vs-template-driven-forms)
- [Custom Validators](#custom-validators)
- [Lazy Loading Modules](#lazy-loading-modules)
- [RxJS in Angular](#rxjs-in-angular)
- [RxJS Mapping Operators: switchMap, mergeMap, concatMap, exhaustMap](#rxjs-mapping-operators-switchmap-mergemap-concatmap-exhaustmap)
- [NgRx for State Management](#ngrx-for-state-management)
- [Performance Optimization](#performance-optimization)
- [Structuring Angular Libraries](#structuring-angular-libraries)
- [Testing Angular Components](#testing-angular-components)
- [Dependency Injection in Angular](#dependency-injection-in-angular)
- [Security: XSS and CSRF Protection](#security-xss-and-csrf-protection)
- [Authentication and Role-Based Access](#authentication-and-role-based-access)
- [Micro-Frontend Architecture](#micro-frontend-architecture)
- [Token Expiration and Refresh Logic](#token-expiration-and-refresh-logic)
- [Architectural Decision Example](#architectural-decision-example)
- [Debugging Performance Issues](#debugging-performance-issues)
- [Handling Large Forms](#handling-large-forms)
- [CI/CD Practices](#cicd-practices)
- [HTTP Interceptors in Angular](#http-interceptors-in-angular)


## Component-Based Architecture

Angular follows a component-based architecture, where the UI is broken into smaller, reusable components. 
Each component controls a patch of screen called a view. 
Components encapsulate HTML, CSS, and logic, promoting reusability and maintainability.
Angular applications start with a root component and create a tree of components.

## Change Detection and Zone.js



####  What is Change Detection?

Change detection in Angular is the process by which Angular determines whether the **model (component state)** has changed and updates the **view (DOM)** accordingly.

When change detection runs:

1. Angular walks through the component tree.
2. It compares the current values of bound properties (e.g., in templates) with the previous ones.
3. If a change is detected, it updates the DOM.

---

####  What is Zone.js?

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

####  How Change Detection Works with Zone.js

1. Zone.js wraps all async operations in a “zone.”
2. When an async task completes (like an HTTP call or timer), Zone.js tells Angular to run change detection.
3. Angular checks all components and updates the view if necessary.

---

####  Change Detection Flow

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

####  Disabling Zone.js (Advanced)

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

####  Optimizing with OnPush Strategy

Using `ChangeDetectionStrategy.OnPush` minimizes unnecessary checks by only triggering CD when:

* `@Input()` references change
* Events inside the component occur
* You explicitly call `markForCheck()` or `detectChanges()`

---

####  Debugging Tip

Use `ng.profiler.timeChangeDetection()` in the browser console (when Angular is in dev mode) to measure CD performance.

---

####  Summary

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

Standalone components allow us to create Angular components without declaring them in an NgModule. They simplify the module structure and support better tree-shaking and lazy loading. As of Angular 14+, this feature helps reduce boilerplate and speeds up development.

## Component Communication Techniques

* `@Input()` and `@Output()` for parent-child
* Services with Subjects/Observables for unrelated components
* `ViewChild`/`ContentChild` to access template references
* Router parameters for navigation-based communication

## OnPush Change Detection Strategy

OnPush tells Angular to check a component only when its input reference changes, significantly reducing the number of change detection cycles. It improves performance in large applications.

## Reactive vs Template-Driven Forms

Reactive Forms offer more control, better scalability, and unit testability. They use `FormGroup`, `FormControl`, and `FormBuilder`. Template-Driven Forms are simpler but less flexible. I prefer Reactive Forms for large and complex forms.

## Custom Validators

We implement a function that returns `ValidationErrors | null`. For async validators, it returns an Observable. These can be passed to `FormControl` or `FormGroup` during instantiation.

```ts
function ageValidator(control: AbstractControl): ValidationErrors | null {
  return control.value > 18 ? null : { underage: true };
}
```

## Lazy Loading Modules

Lazy loading defers the loading of feature modules until needed. We define routes with `loadChildren` and Angular splits bundles automatically. This improves initial load time and performance.

## RxJS in Angular

**RxJS (Reactive Extensions for JavaScript)** is a powerful library for reactive programming using observables, to make it easier to compose asynchronous or callback-based code. 
In Angular, RxJS is fundamental to managing streams of data, particularly in forms, HTTP calls, component communication, and state management.

---

## 🔹 Core Concepts of RxJS

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

* `Subject`: Basic multicast observable.
* `BehaviorSubject`: Requires an initial value and emits the current value to new subscribers.
* `ReplaySubject`: Replays the last n values to new subscribers.
* `AsyncSubject`: Emits the last value upon completion.

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

## 🔸 RxJS in Angular

* **HTTP Calls**: Angular’s `HttpClient` returns observables.
* **Reactive Forms**: We can listen to `valueChanges` which is an observable.
* **Component Communication**: Services with `Subject` or `BehaviorSubject`.
* **Async Pipe**: Automatically subscribes to and unsubscribes from observables in templates.

```html
<p>{{ userData$ | async }}</p>
```

---

## 🔸 Common RxJS Pitfalls in Angular

* **Not unsubscribing** from long-lived observables → leads to memory leaks.

  * Use `takeUntil()`, `async` pipe, or `Subscription.unsubscribe()` in `ngOnDestroy`.
* **Improper use of mapping operators** (e.g., using `mergeMap` when `switchMap` is required).
* **Nested subscriptions** → leads to messy and hard-to-maintain code.

---

## 🔸 Helpful Operators for Angular Use Cases

| Operator       | Use Case                                                                |
| -------------- | ----------------------------------------------------------------------- |
| `switchMap`    | Cancel previous HTTP requests on input change (e.g., typeahead search). |
| `mergeMap`     | Handle parallel HTTP requests (e.g., batch requests).                   |
| `concatMap`    | Queue HTTP requests one after another.                                  |
| `exhaustMap`   | Ignore new requests while one is in progress (e.g., login form submit). |
| `debounceTime` | Wait for user to stop typing before sending HTTP request.               |

---



## RxJS Mapping Operators: switchMap, mergeMap, concatMap, exhaustMap

* `switchMap`: Cancels previous Observable when a new one arrives
* `mergeMap`: Subscribes to all inner Observables concurrently
* `concatMap`: Subscribes sequentially
* `exhaustMap`: Ignores new Observables while one is active

## NgRx for State Management

NgRx is suitable for large-scale applications requiring predictable state management. It helps separate concerns and centralizes state using Actions, Reducers, Effects, and Selectors. However, for smaller apps, simple services with Subjects may suffice.

## Performance Optimization

* Use `OnPush` change detection
* TrackBy in `*ngFor`
* Lazy load modules and components
* Detach change detector where needed
* Avoid memory leaks using `takeUntil`
* Use virtual scrolling for large lists




## Structuring Angular Libraries

I use the Angular CLI to generate libraries (`ng generate library`). I keep them feature-specific and reusable. Shared UI components go in a separate UI library. Use `ng-packagr` for packaging.

## Testing Angular Components

Using TestBed, I configure testing modules. I test components with `fixture.detectChanges()`, use spies for dependencies, and test async behavior with `fakeAsync` and `tick`. I also write unit tests for services and pipes.

## Dependency Injection in Angular

Angular's DI system provides services or objects where needed. We declare providers at module/component level. Tree-shakable providers via `providedIn: 'root'` ensure services are included only when used.

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


