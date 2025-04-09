
| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 | Questions8 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [What is Angular?](#1-what-is-angular) | 2. [Lifecycle Hooks](#2-lifecycle-hooks) | 3. [Modules (`@NgModule`)](#3-modules-ngmodule) | 4. [HTTP Interceptor](#4-http-interceptor) | 5. [Routing & Child Routes](#5-routing--child-routes) | 6. [Input & Output Decorators](#6-input--output-decorators) | [Directives](#7-directives) | 8. [Data Binding](#8-data-binding) |
| [Route Protection (`AuthGuard`)](#9-route-protection-authguard) | 10. [Promise vs Observable](#10-promise-vs-observable) | 11. [RxJS Operators](#11-rxjs-operators) | 12. [ViewChild & ViewChildren](#12-viewchild--viewchildren) | 13. [Lazy Loading](#13-lazy-loading) | 14. [Dependency Injection (DI)](#14-dependency-injection-di) | 15. [Forms](#15-forms) |



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

