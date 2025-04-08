<!-- TABLE_OF_CONTENTS:TOP:START -->

|  |  |  |
| --- | --- | --- |
| [Hoisting in JavaScript](#hoisting-in-javascript) | [Script Loading Strategies: `<script>`, `async`, and `defer`](#script-loading-strategies-script-async-and-defer) | [`'use strict'` Directive in JavaScript](#use-strict-directive-in-javascript) |
| [Variable Declarations: `let`, `var`, and `const`](#variable-declarations-let-var-and-const) | [`null`, `undefined`, and Undeclared Variables](#null-undefined-and-undeclared-variables) | [Synchronous vs Asynchronous Functions](#synchronous-vs-asynchronous-functions) |
| [`==` vs `===` Operators](#vs-operators) | [Differences Between `.call` and `.apply`](#differences-between-call-and-apply) | [Promises vs Callbacks](#promises-vs-callbacks) |
| [JavaScript Event Loop](#javascript-event-loop) | [`Function.prototype.bind`](#functionprototypebind) | [AJAX Explained in Detail](#ajax-explained-in-detail) |
| [Event Delegation](#event-delegation) | [Using Arrow Functions in Constructors](#using-arrow-functions-in-constructors) | [Advantages and Disadvantages of AJAX](#advantages-and-disadvantages-of-ajax) |
| [`this` Keyword in JavaScript](#this-keyword-in-javascript) | [Prototypal Inheritance](#prototypal-inheritance) | [`XMLHttpRequest` vs `fetch()`](#xmlhttprequest-vs-fetch) |
| [Cookies vs `sessionStorage` vs `localStorage`](#cookies-vs-sessionstorage-vs-localstorage) | [Function Declarations vs Expressions vs Instantiation](#function-declarations-vs-expressions-vs-instantiation) | [Aborting Web Requests with `AbortController`](#aborting-web-requests-with-abortcontroller) |
| [Function Declarations vs Function Expressions](#function-declarations-vs-function-expressions) | [Use Cases for Anonymous Functions](#use-cases-for-anonymous-functions) | [JavaScript Polyfills](#javascript-polyfills) |
| [Object Creation Techniques](#object-creation-techniques) | [Closures in JavaScript](#closures-in-javascript) | [Extending Built-in Objects](#extending-built-in-objects) |
| [Higher-Order Functions](#higher-order-functions) | [ES2015 Classes vs ES5 Constructors](#es2015-classes-vs-es5-constructors) | [Avoiding Pollution of Global Scope](#avoiding-pollution-of-global-scope) |
| [Event Bubbling](#event-bubbling) | [Event Capturing](#event-capturing) | [CommonJS vs ES Modules](#commonjs-vs-es-modules) |
| [`mouseenter` vs `mouseover`](#mouseenter-vs-mouseover) | [JavaScript Data Types](#javascript-data-types) | [Looping Through Objects and Arrays](#looping-through-objects-and-arrays) |
| [Spread Syntax vs Rest Syntax](#spread-syntax-vs-rest-syntax) | [Iterators and Generators](#iterators-and-generators) | [Mutable vs Immutable Objects](#mutable-vs-immutable-objects) |
| [`Map` vs Plain Object](#map-vs-plain-object) | [`Map`/`Set` vs `WeakMap`/`WeakSet`](#mapset-vs-weakmapweakset) | [Static Class Members](#static-class-members) |
| [`Symbol` Type in JavaScript](#symbol-type-in-javascript) | [Server-Sent Events](#server-sent-events) | [Object Property Flags and Descriptors](#object-property-flags-and-descriptors) |
| [Getters and Setters](#getters-and-setters) | [JavaScript Proxies](#javascript-proxies) | [Debugging Tools and Techniques](#debugging-tools-and-techniques) |
| [Web Workers](#web-workers) | [Garbage Collection in JavaScript](#garbage-collection-in-javascript) |  |
| [Variable Declarations](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const) | [Global Scope](#why-is-it-in-general-a-good-idea-to-leave-the-global-javascript-scope-of-a-website-as-is-and-never-touch-it) | [String to Number Conversion](#how-do-you-convert-a-string-to-a-number-in-javascript) |
| [Template Literals](#what-are-template-literals-and-how-are-they-used) | [Tagged Templates](#explain-the-concept-of-tagged-templates) | [Spread Operator](#what-is-the-spread-operator-and-how-is-it-used) |
| [Symbols](#what-are-symbols-used-for-in-javascript) | [Proxies](#what-are-proxies-in-javascript-used-for) | [Hoisting](#explain-the-concept-of-hoisting-in-javascript) |
| [Hoisting: var, let, const](#explain-the-difference-in-hoisting-between-var-let-and-const) | [Function Hoisting](#how-does-hoisting-affect-function-declarations-and-expressions) | [Hoisting Issues](#what-are-the-potential-issues-caused-by-hoisting) |
| [Avoiding Hoisting Problems](#how-can-you-avoid-problems-related-to-hoisting) | [Loose vs Strict Equality](#what-is-the-difference-between--and--in-javascript) | [Object & Array Iteration](#what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items-in-javascript) |
| [Break & Continue](#what-is-the-purpose-of-the-break-and-continue-statements) | [Ternary Operator](#what-is-the-ternary-operator-and-how-is-it-used) | [Array Index Access](#how-do-you-access-the-index-of-an-element-in-an-array-during-iteration) |
| [Switch Statement](#what-is-the-purpose-of-the-switch-statement) | [Rest Parameters](#what-are-rest-parameters-and-how-are-they-used) | [Spread vs Rest Syntax](#explain-the-concept-of-the-spread-operator-and-its-uses) |
| [Spread Syntax Benefits](#what-are-the-benefits-of-using-spread-syntax-in-javascript-and-how-is-it-different-from-rest-syntax) |  |  |




<!-- TABLE_OF_CONTENTS:TOP:END -->
