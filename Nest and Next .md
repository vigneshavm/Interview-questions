- [NEXTJS OverView(React)](#NEXTJS-OverView)
- [NestJS OverView(Node)](#NestJS-OverView)





### **NEXTJS OverView**


| **Topic**                       | **Anchor Link**                     |
|--------------------------------|-------------------------------------|
| NEXTJS | [TTFB](#ttfb)     ,                   - [SSR vs CSR vs ISR](#ssr-vs-csr-vs-isr) , - [SSR](#ssr)                          , [CSR](#csr)                          [ISR](#isr)                   , [SSG](#ssg)   ,[Middleware](#Middleware)                       |
- [Optimize images](#optimize-images) 
- [Code splitting](#code-splitting)
- [Optimize a Next.js app for SEO and performance](#optimize-a-nextjs-app-for-seo-and-performance)
- [multi-language app](#in-a-multi-language-app-how-would-you-structure-i18n-in-nextjs)









### **NestJS OverView**
| Topic                      | Anchor Links                                                                                                                                                                                                                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core Concepts              | [NestJS](#nestjs), [Core principles](#core-principles), [NestJS vs Express.js](#nestjs-different-from-expressjs), [Module](#module), [AppModule](#appmodule), [`@Module()`](#module-1), [Controllers](#controllers), [Service](#service), [Route](#route), [Lifecycle](#lifecycle)           |
| Dependency Injection       | [Dependency Injection](#dependency-injection), [`@Injectable()`](#injectable), [Provider](#provider), [`@Inject()`](#use-of-inject), [Custom Factory](#custom-factory)                                                                                                                       |
| Custom Implementations     | [Custom Pipe](#custom-pipe), [Custom Guard](#custom-guard), [Custom Interceptor](#custom-interceptor), [Custom Decorator](#custom-decorator), [Custom Pipe/Guard/Interceptor?](#custom-pipeguardinterceptor)                                                                                 |
| Advanced Features          | [Dynamic modules](#dynamic-modules), [Reusable module](#reusable-module), [Large scale applications?](#large-scale-applications), [Microservices architecture](#microservices-architecture), [Metadata and reflection](#metadata-and-reflection)                                             |
| Utilities & Best Practices | [Middleware](#middleware), [Pipes](#pipes), [Guard](#guard), [Interceptor](#interceptor), [Handle validation](#handle-validation), [Handle exception filtering](#handle-exception-filtering), [Implement logging](#implement-logging), [Implement authentication](#implement-authentication) |



### **NestJS?**

- NestJS is a progressive Node.js framework built with TypeScript and heavily inspired by Angular.
- It's used to build efficient, scalable, and maintainable server-side applications. 
- It leverages strong architectural patterns like modules, controllers, and services, and supports both RESTful and microservice architectures.


### **core principles?**

- NestJS is built on three core principles: **Modularity**, **Dependency Injection**, and **Separation of Concerns**.
- It organizes code into modules, injects dependencies cleanly, and encourages a layered architecture to make the application scalable and testable.


### **NestJS different from Express.js?**


NestJS uses Express under the hood by default, but it adds a structured, opinionated architecture similar to Angular. While Express gives you freedom, NestJS offers decorators, DI, and modules out of the box. It also supports swapping Express with Fastify for better performance.

---

### **Module**


A module in NestJS is a class annotated with the `@Module()` decorator. It groups related components like controllers and providers into a cohesive block. Every NestJS app has at least one module—`AppModule`—which acts as the root module.

---

### **Controllers?**

Controllers handle incoming HTTP requests and return responses to the client. In NestJS, they're classes decorated with `@Controller()`. Each method inside the controller maps to a specific route and HTTP method.


### **Service?**


A service is a class marked with `@Injectable()` that contains business logic. Services are used by controllers to delegate tasks like data processing or database operations, keeping controllers thin.


### **Inject dependencies?**


Dependencies are injected through the constructor of a class using NestJS’s built-in Dependency Injection system. The `@Injectable()` decorator makes a class available for injection.


###  **`@Injectable()`?**


The `@Injectable()` decorator marks a class as a provider that can be managed by Nest's IoC container. It allows the class to be injected into other components like controllers or services.

---

### **lifecycle**


The request flows through Middleware → Guards → Interceptors → Pipes → Controller → Service. After the response is ready, it passes through Interceptors again before being sent back to the client.

---

### **Route?**


You create a route by defining a controller and using route decorators like `@Get()`, `@Post()`, etc. Example:

```ts
@Controller('users')
export class UserController {
  @Get()
  findAll() {
    return 'List of users';
  }
}
```

---


### **`AppModule`?**


`AppModule` is the root module of a NestJS application. It's the entry point for the module tree and registers all other modules, controllers, and providers needed to bootstrap the application.

---

### **`@Module()`**


`@Module()` defines a module’s metadata. It takes an object with keys like `imports`, `controllers`, `providers`, and `exports`. It helps organize code into reusable and encapsulated blocks.

---




### **Dependency Injection?**


DI is a design pattern where a class receives its dependencies from the outside rather than creating them internally. NestJS uses TypeScript’s metadata reflection and its IoC container to inject dependencies automatically.

---



### **Provider**


A provider is any class that can be injected as a dependency. It can be a service, repository, or factory, and it must be listed in the `providers` array of a module.

---







### **Handle validation?**


Validation is done using the `class-validator` and `class-transformer` packages along with NestJS's `ValidationPipe`. DTOs are defined with decorators like `@IsString()`, and `ValidationPipe` validates incoming requests automatically.

---



### **Guard**


A guard determines whether a request should be handled based on logic like authentication or roles. It implements the `CanActivate` interface and is applied using the `@UseGuards()` decorator.

---





###  **Interceptor**


An interceptor can modify or extend the request/response. It’s used for logging, transforming data, caching, etc. It implements the `NestInterceptor` interface and uses `@UseInterceptors()`.

---







### **Implement logging?**


NestJS provides a built-in `Logger` class. You can use it in services or create a custom logging service. For advanced use, you can implement a global interceptor to log all requests/responses.

---



### **Pipes**


Pipes are used for input validation and data transformation. You can apply them globally or at method/parameter level using `@UsePipes()` or directly in parameter decorators.

---



###  **Handle exception filtering?**


- In **NestJS**, exception handling is centralized using the **Exception Filters** mechanism. Nest provides a **built-in global exception handler**, but we can create **custom filters** to catch specific exceptions and return structured responses.

- Exception filters in NestJS help maintain **clean separation of concerns**, especially in large-scale apps where structured error responses and **observability** are crucial.

* `@Catch()` → Marks a class as an **exception filter**.
* `ArgumentsHost` → Gives access to request/response objects.
* Use `useGlobalFilters()` to apply filters globally.
* Good for **logging**, **custom error formatting**, and **business-specific exception flows**.

**When and Why I Use Custom Filters:**

*  To handle **domain-specific errors** (e.g., `BusinessRuleViolationException`)
*  To provide **custom responses** for clients (especially for APIs)
*  For **centralized error logging** (e.g., with Winston, Datadog)
*  To separate error handling from business logic



**Example: Custom Exception Filter**

```ts
// http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message,
    });
  }
}
```


**Apply Filter Globally:**

```ts
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
```





### **Custom Decorator**


A custom decorator is a function that can add metadata or modify behavior. You might create one to extract user info from requests (like `@CurrentUser()`) using `createParamDecorator()`.

- “In **NestJS**, a **custom decorator** is a reusable function that adds logic or metadata to your code in a clean, expressive way.

* `@User()` – extract logged-in user
* `@Roles('admin')` – secure routes via guard
* `@Public()` – skip auth guards
* `@CurrentOrg()` – get tenant info in multi-tenant apps

- “I use custom decorators heavily in projects where **modularity and team collaboration** matter. They help keep controllers **clean, readable, and testable**, while abstracting repeated logic elegantly.”

You typically use them to:

*  **Extract request data** (like user, headers, params)
*  **Attach metadata** (used by guards/interceptors)
*  Improve **readability** and follow **DRY principles**

**Why and When I Use Custom Decorators**

*  To **clean up controller methods**
*  To **extract request-level data** concisely
*  To **mark routes with metadata** (e.g., `@Roles('admin')`)
*  To **improve modularity** and **code reusability**



**`@User()` Decorator**

```ts
// user.decorator.ts
export const User = createParamDecorator(
  (data: keyof any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return data ? request.user?.[data] : request.user;
  },
);
```

**Usage:**

```ts
@Get('profile')
@UseGuards(AuthGuard('jwt'))
getProfile(@User('email') email: string) {
  return { email };
}
```





### **Implement authentication?**

NestJS integrates well with `@nestjs/passport`. You define a `JwtStrategy`, set up the AuthModule, and use Guards like `JwtAuthGuard` to protect routes. Passport handles strategy-based auth.

- JWT-based authentication in NestJS is implemented using `Passport.js`, which integrates cleanly with Nest’s modular architecture. 
- The typical flow includes creating an `AuthModule`, implementing a `JwtStrategy`, and securing routes with the built-in `AuthGuard`. This provides stateless, scalable authentication.”

- JWT auth in NestJS uses `Passport` and a `JwtStrategy` to validate tokens on each request. It’s modular, supports guards and decorators for clean access control, and is stateless — making it ideal for REST APIs or microservices.


| Step | Description                                                         |
| ---- | ------------------------------------------------------------------- |
| 1️⃣  | Install packages: `@nestjs/passport`, `passport-jwt`, `@nestjs/jwt` |
| 2️⃣  | Create `AuthService` for login and token generation                 |
| 3️⃣  | Implement `JwtStrategy` to validate incoming JWTs                   |
| 4️⃣  | Protect routes with `@UseGuards(AuthGuard('jwt'))`                  |
| 5️⃣  | Optionally store user info in request via custom decorator          |


**Install required packages**

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
```


**auth.service.ts**

```ts
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

**jwt.strategy.ts**

```ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```

**auth.module.ts**

```ts
@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // should be in `.env`
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
```

**auth.controller.ts**

```ts
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) throw new UnauthorizedException();
    return this.authService.login(user);
  }
}
```

**Secure Any Route**

```ts
@Controller('profile')
export class ProfileController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getProfile(@Request() req) {
    return req.user;
  }
}
```

**Optional: Custom `@User()` Decorator**

```ts
export const User = createParamDecorator((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

Use it like:

```ts
@Get()
getProfile(@User() user) {
  return user;
}
```




### **Microservices architecture**


- NestJS supports microservices natively using a **flexible transport layer** and built-in **message-based communication**. 
- It allows each service to be **standalone**, yet communicate over various protocols like **TCP**, **Redis**, **NATS**, **MQTT**, **Kafka**, or even **gRPC**.
- It abstracts the communication behind a **`ClientProxy`** and **message patterns**, making it easy to send and receive messages across distributed services.
- NestJS makes building microservices easy through its **native support** for transport layers, **message patterns**, and **ClientProxy** abstraction. It encourages decoupled services that are scalable, fault-tolerant, and easy to test or deploy independently.

* **Message-based architecture** (instead of HTTP)
* **Transport layer abstraction**: TCP, Redis, Kafka, RabbitMQ, gRPC, etc.
* **Scalability and decoupling**
* **Pattern-based message handling**
* **Built-in support for fault-tolerance and retries**

| Feature             | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `ClientsModule`     | Register remote service proxies                       |
| `@MessagePattern()` | Handle incoming messages                              |
| `Transport enums`   | Select protocol (e.g., `TCP`, `REDIS`, `KAFKA`, etc.) |
| **Scalability**     | Easily split into multiple instances                  |
| **Built-in Retry**  | Supports retry strategies and timeouts                |
| **Hybrid app**      | Support both HTTP & microservice APIs in one app      |



**Code Example: Simple Microservice Using TCP Transport**

**Microservice (Service A) - Listener**

```ts
// main.ts
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877,
    },
  });

  await app.listen();
}
bootstrap();
```

```ts
// app.service.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppService {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b, 0);
  }
}
```

---

**Client (Service B) - Sender**

```ts
// app.module.ts
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8877,
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

```ts
// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ClientProxy, Client } from '@nestjs/microservices';

@Controller()
export class AppController {
  @Client({ transport: Transport.TCP, options: { host: '127.0.0.1', port: 8877 } })
  private client: ClientProxy;

  @Get('sum')
  async getSum() {
    return this.client.send({ cmd: 'sum' }, [2, 3, 5]); // returns 10
  }
}
```




### **Use of `@Inject()`**

- `@Inject()` is used when you want to inject a dependency using a custom token. 
- For custom providers, you define a token and a `useClass`, `useValue`, or `useFactory` strategy in the module’s provider array.
- In NestJS, the `@Inject()` decorator is used to manually inject a **custom token** or a specific **provider instance** into a class. This is especially useful when:

* The token is **not a class** (e.g., a string or symbol).
* You are working with **custom providers** (e.g., factories, values).
* You need to inject **multiple implementations** of an interface.

- NestJS typically uses **constructor-based dependency injection**, and you don’t often need `@Inject()` unless you're injecting something **non-standard**.


- `@Inject()` is used when you inject something that isn’t a class—like a value, token, or a factory-based provider. 
- Custom providers help in abstracting implementations, injecting values dynamically, or supporting multiple strategies. It’s powerful for building decoupled, configurable systems.


- [`@Inject()`](#inject)
- [Custom Factory](#custom-factory)
- [Custom Provider Types](#Custom-Provider-Types)

**Custom Provider Types**

1. **useClass** – Replace an interface or token with a concrete class.
2. **useValue** – Provide a constant value (e.g., config object).
3. **useFactory** – Use a factory function for advanced setup.
4. **useExisting** – Alias one provider to another.


**Example: Using `@Inject()` with `useValue` Provider**

```ts
// constants.ts
export const CONFIG = 'CONFIG';
```

```ts
// config.provider.ts
export const ConfigProvider = {
  provide: CONFIG,
  useValue: {
    apiKey: 'XYZ-123',
    timeout: 3000,
  },
};
```

```ts
// app.module.ts
@Module({
  providers: [ConfigProvider],
  exports: [ConfigProvider],
})
export class AppModule {}
```

```ts
// example.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { CONFIG } from './constants';

@Injectable()
export class ExampleService {
  constructor(@Inject(CONFIG) private config: { apiKey: string; timeout: number }) {}

  showConfig() {
    console.log(this.config.apiKey); // XYZ-123
  }
}
```




### **Custom Factory**

```ts
export const LoggerProvider = {
  provide: 'CUSTOM_LOGGER',
  useFactory: () => {
    return new CustomLogger('AppLogger');
  },
};
```

```ts
@Injectable()
export class MyService {
  constructor(@Inject('CUSTOM_LOGGER') private logger: CustomLogger) {}
}
```




### **Dynamic modules**



- In NestJS, a **dynamic module** is a module that can be **configured at runtime**. This is useful when a module needs to accept options or dependencies that vary between environments or use cases—such as setting up email credentials, database configs, or caching strategies.

- Dynamic modules are created by exposing a static `forRoot()` or `forRootAsync()` method on the module class, which returns a special object that defines how the module should be configured.

- Dynamic modules in NestJS allow flexible and reusable configuration by using the `forRoot()` or `forRootAsync()` pattern. They're especially helpful when you want to inject runtime configuration into a module—like credentials or feature toggles—without hardcoding it. I use them for things like custom loggers, global config modules, or third-party integrations.


* A dynamic module is created using a static method like `forRoot()` or `forRootAsync()`.
* It returns a `DynamicModule` object which can include:

  * `module` → The current module
  * `providers` → Any providers configured with runtime values
  * `exports` → Exposed services
  * `imports` → Any dependencies needed

* Configurable modules (e.g., Email, Logging, Payment Gateways)
* Libraries or packages reused in different apps
* Modules needing environment-specific or user-specific configs


**Example: Custom LoggerModule**

```ts
// logger.module.ts
import { Module, DynamicModule, Global } from '@nestjs/common';

export interface LoggerOptions {
  level: 'debug' | 'info' | 'warn' | 'error';
}

@Global()
@Module({})
export class LoggerModule {
  static forRoot(options: LoggerOptions): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: 'LOGGER_OPTIONS',
          useValue: options,
        },
        LoggerService,
      ],
      exports: [LoggerService],
    };
  }
}
```


**LoggerService Example:**

```ts
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  constructor(@Inject('LOGGER_OPTIONS') private options) {}

  log(message: string) {
    if (this.options.level !== 'debug') return;
    console.log(`[${this.options.level}] ${message}`);
  }
}
```

**How to Use in AppModule:**

```ts
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    LoggerModule.forRoot({ level: 'debug' })
  ],
})
export class AppModule {}
```




### **Large scale applications?**

- I use a modular monolith or microservices architecture. 
- Features are grouped into feature modules with clear separation of concerns. I also split logic across services, repositories, and controllers.
- In large-scale NestJS applications, modular architecture is key. I typically follow a feature-based structure, where each business domain (like Users, Auth, Products, Payments) is encapsulated in its own module with clear separation of concerns.
- This helps with scalability, maintainability, and testability.

---

### **custom pipe/guard/interceptor?**

You implement the respective interface (`PipeTransform`, `CanActivate`, `NestInterceptor`) and register the class using `@Injectable()`. You apply them via decorators like `@UseGuards()` or `@UsePipes()`.


Yes, in NestJS, custom pipes, guards, and interceptors are used to **extend the framework's behavior** at different stages of the request lifecycle:

| Component       | Purpose                                    | Runs At                            |
| --------------- | ------------------------------------------ | ---------------------------------- |
| **Pipe**        | Transforms or validates input              | Before controller method is called |
| **Guard**       | Controls access to routes (e.g. auth)      | Before route is handled            |
| **Interceptor** | Manipulates request/response or adds logic | Before & after route method        |


* **Pipes** are ideal for **input transformation and validation**.
* **Guards** are used to **protect routes** based on logic like roles or authentication.
* **Interceptors** are powerful for **logging, caching, or modifying** requests/responses.

Each of these implements a specific interface (`PipeTransform`, `CanActivate`, or `NestInterceptor`) and is decorated with `@Injectable()`.

- [Custom Interceptor](#custom-interceptor)
- [Custom Guard](#custom-guard)
- [Custom Pipe](#custom-pipe) 

### **Custom Pipe** 
– e.g., Validate or Transform Input

```ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed: Not a number');
    }
    return val;
  }
}
```

**Usage:**

```ts
@Get(':id')
getById(@Param('id', ParseIntPipe) id: number) {
  return `User ID is ${id}`;
}
```


### **Custom Guard**

– e.g., Role-Based Access Control

```ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user?.roles?.includes('admin'); // Allow only admin
  }
}
```

**Usage with Decorator:**

```ts
@UseGuards(RolesGuard)
@Get('admin')
getAdminData() {
  return 'Only admins can access this.';
}
```


### **Custom Interceptor** 
– e.g., Logging or Response Transformation

```ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before handler...');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`After handler... ${Date.now() - now}ms`)),
    );
  }
}
```

**Usage:**

```ts
@UseInterceptors(LoggingInterceptor)
@Get('data')
getData() {
  return { message: 'Hello!' };
}
```


---

### **Metadata and reflection**

- NestJS uses TypeScript’s design-time metadata along with `reflect-metadata` to inspect types and manage dependency injection, validation, and custom decorators.
- NestJS heavily relies on metadata and reflection to enable features like dependency injection, routing, validation, and custom decorators. It uses the reflect-metadata package under the hood, along with TypeScript's experimental metadata APIs (like design:type, design:paramtypes).
- This allows NestJS to introspect classes, methods, and parameters at runtime, enabling powerful features like automatic DI and validation.


### **Reusable module**

- Yes, in NestJS, a reusable module is a self-contained unit that encapsulates a specific functionality—like sending emails or logging—that can be imported and reused across multiple modules in the application.

- It typically contains:
    - Providers like services or strategies
    - Optional controllers
    - An exports array to expose only what needs to be shared

**Use**
- Promotes DRY principles (Don’t Repeat Yourself)
- Encourages clean, modular architecture
- Makes your codebase more maintainable and testable
- Essential for large-scale applications



**Create the service**

```ts
@Injectable()
export class MailService {
  sendEmail(to: string, subject: string, content: string): string {
    // Imagine this sends a real email
    return `Sent to ${to} - Subject: ${subject}`;
  }
}
```

**Define the reusable module**

```ts
@Module({
  providers: [MailService],
  exports: [MailService], // Important: expose it for reuse
})
export class MailModule {}
```

**Import and use in another module**

For example, in the `UserModule`:

```ts
@Module({
  imports: [MailModule], // bring in the reusable module
  providers: [UserService],
})
export class UserModule {}
```

**Inject MailService where needed**

```ts
@Injectable()
export class UserService {
  constructor(private mailService: MailService) {}

  registerUser(email: string) {
    return this.mailService.sendEmail(email, 'Welcome!', 'Thanks for joining us!');
  }
}
```




## SSR vs CSR vs ISR

| Rendering Type | Meaning                         | When It Happens                              | Key Next.js Method                |
| -------------- | ------------------------------- | -------------------------------------------- | --------------------------------- |
| **CSR**        | Client-Side Rendering           | In browser (after load)                      | No special method (default React) |
| **SSR**        | Server-Side Rendering           | On **every request**                         | `getServerSideProps`              |
| **ISR**        | Incremental Static Regeneration | At **build**, then **rebuild** in background | `getStaticProps` + `revalidate`   |



| Feature        | CSR              | SSR                          | SSG                  | ISR                                    |
| -------------- | ---------------- | ---------------------------- | -------------------- | -------------------------------------- |
| Rendering      | Client           | Server per request           | Build time           | Build + periodic revalidation          |
| SEO            | ❌ Poor           | ✅ Good                       | ✅ Good               | ✅ Good                                 |
| Data Freshness | Depends on fetch | Always fresh                 | Stale until build    | Updated after interval                 |
| Performance    | Fast after load  | Slower initial load          | Very fast            | Fast + updated periodically            |
| Use Case       | Dashboards, SPAs | User profiles, dynamic pages | Blogs, landing pages | Blogs/products with occasional updates |
| Next.js Method | `useEffect / client fetch` | `getStaticProps` | `getServerSideProps`             | `getStaticProps` + `revalidate`   |

---

### **CSR**
- Client Side Rendering

* **What**: The HTML is mostly empty initially. JavaScript takes over and renders the UI **in the browser**.
* **Next.js Behavior**: Only uses React without any `getStaticProps` or `getServerSideProps`.
* **Use When**:

  * SEO is **not important** (e.g., dashboards, internal tools)
  * Heavy user interactivity, charts, or client-specific data

✅ *Example*: Admin panel, chat app, user dashboard.

---

## **SSR**
- Server Side Rendering
* **What**: HTML is generated **on the server** for **every request**. The latest data is fetched server-side.
* **Next.js Function**: `getServerSideProps`
* **Use When**:

  * SEO **is important**
  * Content is **dynamic** and changes often
  * Data needs to be fresh **on every request**


- `getServerSideProps()`
- If a page requires fresh data on every request, we use `getServerSideProps()`. 
- This function runs **on the server at request time**, and the result is sent to the browser.


This ensures the content is always up to date — perfect for dashboards, authenticated content, or real-time updates.

✅ *Example*: News website homepage, logged-in user profile, live sports scores.

```ts
// SSR Example
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}
```

---

### **ISR**
- Incremental Static Regeneration


ISR lets you update static pages **after deployment** without rebuilding the whole site. Use `revalidate`:

* **What**: Pre-renders page at **build time**, but **regenerates** it **in background** after a set time.
* **Next.js Function**: `getStaticProps` with `revalidate` key
* **Use When**:

  * SEO **is important**
  * Content is mostly static but updates periodically (every few seconds/minutes)
  * You want the performance of static but some freshness

✅ *Example*: Blog posts, product listings, marketing pages.

```ts
// ISR Example
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  return {
    props: { products },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
}
```



### When to Use Which?

| Scenario                                     | Recommended Strategy                    |
| -------------------------------------------- | --------------------------------------- |
| **Marketing site with rarely changing info** | **Static/ISR**                          |
| **Blog site with updates every few hours**   | **ISR** (e.g., revalidate every 10 min) |
| **User profile page with private data**      | **SSR**                                 |
| **Internal admin dashboard**                 | **CSR**                                 |
| **Product page with daily updates**          | **ISR**                                 |


### Summary Table

| Feature      | CSR                  | SSR                | ISR                           |
| ------------ | -------------------- | ------------------ | ----------------------------- |
| SEO Friendly | ❌ No                 | ✅ Yes              | ✅ Yes                         |
| Fresh Data   | ✅ (fetch in browser) | ✅ (every request)  | ✅ (after revalidate interval) |
| Performance  | 🟡 Medium            | 🔴 Slower          | ✅ Fast (cached static)        |
| Use Case     | Dashboards, SPAs     | News feed, Profile | Blogs, Product Pages, FAQs    |

---







## **SSG**

- `getStaticProps()`
- For content that doesn’t change frequently, we use getStaticProps().
- It runs at build time, generating static HTML for each page.
- These pages are then served from a CDN, ensuring very low TTFB and fast performance.
- SSG is SEO-friendly since HTML is pre-rendered and ready for search engine crawlers.
- Ideal for marketing pages, blogs, documentation, and similar static content.
- For dynamic routes, we use getStaticPaths() along with getStaticProps.
- If content needs periodic updates without full rebuilds, we use Incremental Static Regeneration (ISR) by adding a revalidate key.
- SSG improves scalability by offloading rendering from server to build time.

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





## CSR
Client-Side Rendering 

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


Middleware runs **before** route handlers and is similar to Express middleware. Interceptors work **around** the method execution, before and after the controller method is called. Middleware is lower-level and doesn’t have access to DI by default.

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





### **Optimize a Next.js app for SEO and performance?**

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



### **In a multi-language app, how would you structure i18n in Next.js?**

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


## TTFB

- **TTFB** is the time between the user's request and the browser receiving the **first byte of data** from the server.
- It impacts **perceived performance**, **SEO**, and **Core Web Vitals**.
- Especially important in **SSR** and **ISR** where server work is involved.
- To optimize TTFB in Next.js, 
- I prefer using static generation (ISR/SSG) whenever possible, minimize heavy work in `getServerSideProps`, leverage caching with CDN or edge functions, and ensure database queries are fast and efficient.
- If serverless is used, I warm up functions to reduce cold start delays.**"
- * React 18 + Next.js supports **Server Components** and **streaming**, which can send chunks of HTML faster (lower TTFB).


---

## ✅ Strategies to Optimize TTFB in Next.js

### 1. **Use Static Generation (ISR/SSG) Whenever Possible**

* **SSG/ISR pages** are served from **CDNs**, with almost zero TTFB.
* Use `getStaticProps` + `revalidate` instead of `getServerSideProps`.

```tsx
// Prefer this
export async function getStaticProps() {
  // build-time fetch
}
```

---

### 2. **Avoid Heavy Work Inside `getServerSideProps`**

* Keep `getServerSideProps` **lightweight**:

  * Avoid slow DB queries or chaining multiple APIs.
  * Cache wherever possible.

```tsx
export async function getServerSideProps(context) {
  // ✅ Cache responses or use Redis to reduce DB/API latency
}
```

---

### 3. **Use Edge Functions or Middleware**

* Run logic **closer to the user** using **Edge Functions** in Next.js.
* Faster cold starts compared to traditional serverless functions.

```js
// edge-config.ts
export const config = {
  runtime: 'edge',
};
```

---

### 4. **Enable HTTP Caching (CDN/Server-side)**

* Cache headers help CDNs serve pages faster.
* Use `Cache-Control` headers wisely.

```ts
res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
```

---

### 5. **Preload Critical Resources**

* Use `<link rel="preload">` for fonts, images, or scripts.

```html
<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
```

---



### 7. **Warm Up Serverless Functions**

* SSR in serverless = cold starts.
* Use a scheduled ping/health check to keep serverless functions warm (e.g., AWS Lambda, Vercel Functions).

---

### 8. **Monitor TTFB**

* Use tools like:

  * [WebPageTest](https://www.webpagetest.org/)
  * Lighthouse
  * Chrome DevTools → Network tab → TTFB column











## **Middleware*

**Answer (Interview Style):**

- Middleware in Next.js is a function that runs **before a request reaches a page or API route**. 
- It allows you to handle tasks like **authentication, redirects, URL rewrites, or adding headers** at the edge, making it fast and efficient. 
- Middleware can be scoped to specific routes using a matcher.
- 


**Use Case:** 
- This middleware ensures that **unauthenticated users are redirected to the login page** before accessing any dashboard route. 
- Other common use cases include **A/B testing, localization, role-based access, and adding security headers**.


>
> **Example:** Suppose we want to protect the `/dashboard` page so only logged-in users can access it:
>
> ```javascript
> import { NextResponse } from "next/server";
>
> export function middleware(request) {
>   const token = request.cookies.get("authToken");
>   if (!token) {
>     return NextResponse.redirect(new URL("/login", request.url));
>   }
>   return NextResponse.next();
> }
>
> export const config = { matcher: ["/dashboard/:path*"] };
> ```
>

In **Next.js**, the `middleware.js` (or `middleware.ts`) file is **automatically detected and executed by the framework**—you **do not need to import or call it manually**

**Key Points for Interviews**

* Middleware is **automatic**, you never import it manually.
* Runs on the **Edge Runtime**, before SSR/SSG or API route execution.
* Can be scoped using `matcher` for specific routes.
* Used for auth, redirects, logging, headers, and edge logic.

**1. How Next.js Calls Middleware**

1. Place the file at the **root of your project** (next to `pages/`) or inside the **app directory** if using App Router.

   ```
   my-next-app/
   ├─ pages/
   ├─ middleware.js
   ```
2. Next.js automatically runs the `middleware` function on **every request that matches the routes specified in `config.matcher`**.

   ```javascript
   export function middleware(request) {
     // your code here
     return NextResponse.next();
   }

   export const config = {
     matcher: ["/dashboard/:path*", "/dashboard"],
   };
   ```
3. The `matcher` defines **which routes the middleware should apply to**. If no matcher is provided, it runs for **all routes** by default.


**2. Example Flow**

1. User requests `/dashboard`.
2. Next.js detects that `middleware.js` exists and checks the `matcher`.
3. Middleware executes **before the page or API route**.
4. Middleware can:

   * Redirect the user
   * Modify headers
   * Block access
   * Continue with `NextResponse.next()`
5. After middleware finishes, the request proceeds to the **page or API route**.
---





