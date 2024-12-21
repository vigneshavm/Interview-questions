## **Angular**

### 1. **What is Angular?**
Angular is a TypeScript-based, open-source front-end framework developed by Google for building single-page applications (SPAs). It follows the MVC (Model-View-Controller) architecture and uses components and modules to create scalable web applications.

---

### 2. **Life Cycle Hooks**
Angular components have life cycle hooks that provide insights into their creation, update, and destruction:

1. **Constructor**  
   The constructor is invoked when the component is instantiated. It is used to initialize class members and inject dependencies. Avoid placing complex logic or DOM manipulations here.

2. **ngOnChanges**  
   This method is triggered whenever an input or output binding value changes. It allows you to respond to changes in the component's data-bound properties.

3. **ngOnInit**  
   Called after the first `ngOnChanges`. This is the perfect place for component initialization logic, such as fetching data or setting up default values.

4. **ngDoCheck**  
   A custom change detection hook that developers can use to implement manual or optimized change detection logic.

5. **ngAfterContentInit**  
   Executed after Angular initializes any projected content inside the component (e.g., `<ng-content>`).

6. **ngAfterContentChecked**  
   Called after every change detection check of the projected content. This allows you to respond to any changes in the content.

7. **ngAfterViewInit**  
   Triggered after the component's view and its child views have been fully initialized. Ideal for logic that requires the DOM to be ready.

8. **ngAfterViewChecked**  
   Invoked after every change detection cycle of the component's view and child views. It can be used to respond to changes in the view.

9. **ngOnDestroy**  
   This is called just before the component or directive is destroyed. Use this hook for cleanup tasks, such as unsubscribing from Observables or detaching event listeners.

---

### 3. **Explain Module**
Modules in Angular are containers for a cohesive block of code (components, services, pipes, and directives). The `@NgModule` decorator is used, and the root module is `AppModule`. Each module can import/export components and services.

---

### 4. **What is Interceptor and Why We Use It?**
HTTP Interceptors intercept and modify HTTP requests and responses globally. They are used for:
- Adding headers (like authentication tokens).
- Logging requests/responses.
- Handling errors globally.

---

### 5. **Routes and Child Routes**
Routes define navigation paths in Angular:
- **Routes:** Map URL paths to components.
- **Child Routes:** Used for nested components.

Example:
```typescript
const routes: Routes = [
  { path: 'parent', component: ParentComponent, children: [
      { path: 'child', component: ChildComponent }
    ]
  }
];
```

---

### 6. **Input and Output Decorators**
Here's an optimized version of the **Input** and **Output** decorator example with a concise explanation:

---

### **`@Input` and `@Output` in Angular**

1. **`@Input`**: Passes data from the parent component to the child component.
2. **`@Output`**: Sends data or events from the child component to the parent using `EventEmitter`.

---

### **Example**

#### **Parent Component: `app.component.ts`**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent Component</h1>
    <app-child 
      [dataFromParent]="message" 
      (dataToParent)="handleChildEvent($event)">
    </app-child>
  `
})
export class AppComponent {
  message = "Hello from Parent!";

  handleChildEvent(childMessage: string) {
    console.log("Received from Child:", childMessage);
  }
}
```

---

#### **Child Component: `child.component.ts`**
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>Parent says: {{ dataFromParent }}</p>
    <button (click)="notifyParent()">Send Message to Parent</button>
  `
})
export class ChildComponent {
  @Input() dataFromParent!: string; // Data from parent
  @Output() dataToParent = new EventEmitter<string>(); // Event to parent

  notifyParent() {
    this.dataToParent.emit("Hello from Child!");
  }
}
```

---

### **How It Works**

1. **`@Input`: Passing data from Parent to Child**  
   - The parent binds the `message` property to the `dataFromParent` input in the child using `[dataFromParent]`.  
   - In the child, `dataFromParent` receives the value `"Hello from Parent!"`.

2. **`@Output`: Sending data from Child to Parent**  
   - The child defines an `EventEmitter` called `dataToParent`.
   - When the button is clicked, the child calls `notifyParent()` and emits `"Hello from Child!"` using `this.dataToParent.emit()`.
   - The parent listens to the event with `(dataToParent)` and executes `handleChildEvent()`.

---

### **Output**
```
Received from Child: Hello from Child!
```

---

### 7. **Directive and Types**

1. **Component Directive**: Creates reusable components with templates.
2. **Attribute Directive**: Modifies the behavior of an element.
   - Example: `ngClass`, `ngStyle`.
3. **Structural Directive**: Changes DOM structure.
   - Example: `*ngIf`, `*ngFor`, `*ngSwitch`.

---

### 8. **Data Binding and Types**
Data binding synchronizes data between the model and the view:
1. **Interpolation**: `{{ value }}`
2. **Property Binding**: `[property]="value"`
3. **Event Binding**: `(event)="method()"`
4. **Two-Way Binding**: `[(ngModel)]="value"`

---

### 9. **Route Protection (Auth Guard)**
Auth Guards prevent unauthorized access to routes. Example:
```typescript
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return isAuthenticated ? true : false;
  }
}
```
Added to routes: `{ path: 'protected', canActivate: [AuthGuard] }`

---

### 10. **Promise and Observable**
- **Promise**: Handles a single asynchronous event; resolved or rejected once.
- **Observable**: Handles multiple events over time; can be subscribed to.

---

### 11. **RxJS Operators**
1. `of` – Emits values as observables.
2. `forkJoin` – Combines observables and emits their final results.
3. `tap` – Performs side effects without modifying data.
4. `pipe` – Chains RxJS operators.
5. `map` – Transforms data emitted by an observable.

---

### 12. **HostListener and HostBinding**
- **HostListener**: Listens to events on the host element.
- **HostBinding**: Binds properties to host element attributes.

---

### 13. **ViewChild and ViewChildren**
- **ViewChild**: Access a single child component.
- **ViewChildren**: Access multiple child components.

---

### 14. **Lazy Loading**
Loads modules on demand using `loadChildren` to improve performance.

---

### 15. **Component Factory Encapsulation**
Encapsulates components for dynamic creation and rendering.

---

### 16. **Services and Injectors**
Services provide reusable logic. Dependency injectors supply instances to components.

---

### 17. **EventEmitter**
`EventEmitter` is used with `@Output` to send custom events from child to parent.

---

### 18. **Pipes**
Pipes transform data in the template. Example: `| date`, `| uppercase`, or custom pipes.

---

### 19. **Reactive Forms vs Template-Driven Forms**
- **Template-Driven**: Uses `ngModel`, less code.
- **Reactive Forms**: Uses `FormControl` and `FormGroup`, more scalable.

---

### 20. **setTimeout and setInterval**
- **setTimeout**: Executes once after a delay.
- **setInterval**: Executes repeatedly after a delay.

---

### 21. **HttpModule**
Enables HTTP communication in Angular.

---

### 22. **Module and Components**
A module groups related components.

---

### 23. **Dependency Injection**
DI provides instances of services or objects to components efficiently.

---

## **React**

### 1. **useState**
`useState` is a React Hook to manage local state in functional components:
```javascript
const [count, setCount] = useState(0);
setCount(count + 1);
```

---

### 2. **What Happens When a Component Receives New Props?**
- React re-renders the component with the updated props.
- `componentDidUpdate` or `useEffect` can track these changes.

---

### 3. **Share State Between Components**
- **Lifting State Up**: Pass state via props to child components.
- **Context API**: Share state without prop drilling.
- **State Management Libraries**: Redux, Zustand, Recoil.

---

### 4. **React Without JSX**
JSX is syntactic sugar for `React.createElement`. React can work without it:
```javascript
React.createElement('div', null, 'Hello');
```

---

### 5. **Controlled vs Uncontrolled Components**
- **Controlled**: React controls the input value via `useState`.
- **Uncontrolled**: Use `ref` to access input values.

---

### 6. **What is VDOM (Virtual DOM)?**
The Virtual DOM is a lightweight copy of the real DOM. React updates only the changed nodes for better performance.

---

### 7. **Pitfalls When Fetching Data**
- Not handling errors.
- Memory leaks when unmounted.
- Not cleaning up subscriptions.

---

### 8. **useEffect Usage and Pitfalls**
- Used for side effects (e.g., API calls).
- **Pitfalls**: Infinite loops, forgetting clean-up functions, dependency array misconfigurations.

---

