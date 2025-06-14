

Nodejs ---  [Middleware for Only Sensitive Routes](#Middleware-for-Only-Sensitive-Routes)   -- [Location based IP-based restrictions](#Location-based-IP-based-restrictions)  -- [Build simple API](#Build-simple-API) --  [Nodejs API using TypeScript for CRUD operations](#Nodejs-API-using-TypeScript-for-CRUD-operations)  --  [JWT Auth Flow Overview](#JWT-Auth-Flow-Overview)  --  [Rate Limiter Middleware](#Rate-Limiter-Middleware) -- [Whitelist IPs in Rate Limiter](#Whitelist-IPs-in-Rate-Limiter)
- [Rate Limit only using express](#Rate-Limit-only-using-express)

React -   [Fetch-and-display-list](#React-Fetch-and-display-list-users-with-user-search)  - [search input with debouncing using a custom useDebounce hook](#search-input-with-debouncing-using-a-custom-useDebounce-hook) 
- [Debounced Search Component](#debounced-search-component)
- [Autocomplete Component](#autocomplete-component)
- [Todo List](#todo-list)
- [React Table with Sorting](#react-table-with-sorting)
- [Infinite Scroll](#infinite-scroll)
- [Custom Hook - useToggle](#custom-hook-usetoggle)
- [Form with Validation](#form-with-validation)
- [Highlight Text](#highlight-text)
- [Counter](#Counter)



Angular --  [Fetch-and-display-list](#Angular-Fetch-and-display-list-users-with-user-search)   --  [Debounce Input Search](#Angular-Debounce-Input-Search)




[polyfill programs](#polyfill-programs)


| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Grid View](#Grid-View) |  | [React Form API Call](#React-Form-API-Call) || [Handling API Errors in React](#Handling-API-Errors-in-React)
|| |  | |[TodoList](#TodoList)   | 


## polyfill programs

- [Array.prototype.map](#arrayprototypemap)
- [Array.prototype.filter](#arrayprototypefilter)
- [Array.prototype.reduce](#arrayprototypereduce)
- [Function.prototype.call](#functionprototypecall)
- [Object.create](#objectcreate)
- [Promise](#Promise)



## Grid View

```js
 App.tsx
import UserTable from './components/tableview';
import Grid from './components/Grid';
import './App.css';

function App() {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Grid Example</h1>
      <Grid items={data} columns={3} />
      <h1 style={{ textAlign: 'center' }}>Table Grid Example</h1>
      <UserTable />
    </div>
  );
  
}

export default App;
```


##  Table View
```js
Tabview.tsx
import React, { useEffect, useState } from 'react';

type User = { name: string; age: number; profilePic: string; };
const thStyle = { padding: '12px', backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd', };
const tdStyle = { padding: '10px', borderBottom: '1px solid #ccc', };

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) { throw new Error('Failed to fetch users'); }
        return response.json();
      })
      .then(data => {
        const userDetails = data.users.map((user: any) => ({
          name: `${user.firstName} ${user.maidenName} ${user.lastName}`,
          age: user.age,
          profilePic: user.image,
        }));
        setUsers(userDetails);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
  }

  return (
    <table style={{ width: '60%', margin: 'auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Profile Pic</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i} style={{ textAlign: 'center' }}>
            <td style={tdStyle}>{user.name}</td>
            <td style={tdStyle}>{user.age}</td>
            <td style={tdStyle}>
              <img src={user.profilePic} alt={user.name} width="50" height="50" style={{ borderRadius: '50%' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default UserTable;
```

```js
Grid.tsx
import React from 'react';
import '../App.css';

type GridProps = { items: string[]; columns?: number; };

const gridContainer: React.CSSProperties = { display: 'grid', gap: '1rem', margin: '20px', };

const gridItem: React.CSSProperties = {
  padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center',
  borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', fontWeight: 'bold',
};

const Grid: React.FC<GridProps> = ({ items, columns = 3 }) => {
  return (
    <div style={{ ...gridContainer, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items.map((item, index) => (
        <div key={index} style={gridItem}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default Grid;
```



## **search input with debouncing using a custom useDebounce hook**.

---

### ✅ Step 1: Create `useDebounce` Hook

```js
import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout if value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

---

### ✅ Step 2: Create the Search Component

```js
import React, { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce"; // adjust path as needed

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Replace this with your actual API call
      console.log("Calling API with:", debouncedSearchTerm);
      // fetchData(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchInput;
```

---

## React Form API Call:
```jsx
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ name: "", email: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // hide after 3s
      } else {
        console.error("Failed to submit contact.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: "green" }}>Contact submitted successfully!</p>}
    </div>
  );
}

export default ContactForm;
```


---


## Nodejs API using TypeScript for CRUD operations

### 📁 Project Structure
```
my-api/
├── src/
│   ├── models/
│   │   └── Contact.ts
│   ├── routes/
│   │   └── contactRoutes.ts
│   ├── controllers/
│   │   └── contactController.ts
│   ├── app.ts
│   └── server.ts
├── tsconfig.json
├── package.json
```

---

### 1️⃣ `package.json` dependencies

```bash
npm init -y
npm install express mongoose
npm install -D typescript ts-node-dev @types/express @types/node
```

---

### 2️⃣ `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

### 3️⃣ MongoDB Model – `src/models/Contact.ts`

```ts
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

export const Contact = mongoose.model("Contact", contactSchema);
```

---

### 4️⃣ Controller – `src/controllers/contactController.ts`

```ts
import { Request, Response } from "express";
import { Contact } from "../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: "Failed to create contact" });
  }
};

export const getContacts = async (_req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const getContact = async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(404).json({ error: "Not found" });
  res.json(contact);
};

export const updateContact = async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!contact) return res.status(404).json({ error: "Not found" });
  res.json(contact);
};

export const deleteContact = async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Contact deleted" });
};
```

---

### 5️⃣ Routes – `src/routes/contactRoutes.ts`

```ts
import express from "express";
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
} from "../controllers/contactController";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.get("/:id", getContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
```

---

### 6️⃣ App – `src/app.ts`

```ts
import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/contactDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.use("/api/contacts", contactRoutes);

export default app;
```

---

### 7️⃣ Start Server – `src/server.ts`

```ts
import app from "./app";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

---

### 🧪 Run the API
In `package.json`, add:
```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```

Then run:
```bash
npm run dev
```

---




## JWT Auth Flow Overview

1. **User Signup/Login** on React frontend  
2. **API request** to backend (Node.js + Express + MongoDB)  
3. Backend issues a **JWT token** (access token)  
4. Token stored in **HTTP-only cookie** or **localStorage** (based on security needs)  
5. On every request, frontend **sends token**  
6. Backend **verifies token** before processing

---

### 📦 Backend – Node.js + Express + TypeScript

### 1. Install Required Packages

```bash
npm install express mongoose bcryptjs jsonwebtoken cors cookie-parser
npm install -D typescript ts-node-dev @types/node @types/express @types/jsonwebtoken @types/cookie-parser
```

---

### 2. Backend Directory Structure

```
/server
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── utils/
  ├── app.ts
  ├── server.ts
```

---

### 3. JWT Auth Functions – `utils/jwt.ts`

```ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
```

---

### 4. Middleware to Protect Routes – `middleware/auth.ts`

```ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
```

---

### 5. Auth Controller – `controllers/authController.ts`

```ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  const token = generateToken(user._id);
  res.json({ token, user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(user._id);
  res.json({ token, user });
};
```

---

### 6. User Model – `models/User.ts`

```ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

export default mongoose.model("User", userSchema);
```

---

### 7. Routes – `routes/auth.ts`

```ts
import express from "express";
import { signup, login } from "../controllers/authController";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify-token", authenticate, (req, res) => {
  const user = (req as any).user;
  res.json({ message: "Token is valid", user });
});

export default router;
```

---

### 🧑‍🎨 Frontend – React (with Axios & Context)

### 1. Axios Setup with JWT

```tsx
// utils/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
```

---

### 2. Auth Context – `context/AuthContext.tsx`

```tsx
import React, { createContext, useState, useEffect } from "react";
import axios from "../utils/axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const signup = async (name, email, password) => {
    const res = await axios.post("/auth/signup", { name, email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

### 3. Protected Route (Frontend)

```tsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <div>Login required</div>;
  return children;
};
```

---

### 🧪 Try It Out

- Run backend: `npm run dev`
- Run frontend: `npm start`
- Use Signup/Login form → store token → send to protected API

---

## Rate Limiter Middleware
```tsx
import rateLimit from "express-rate-limit";

// Apply to all requests
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,  // Disable `X-RateLimit-*` headers
});
```


 ## Whitelist IPs in Rate Limiter

```tsx
import rateLimit from "express-rate-limit";
import { Request } from "express";

// Add the IPs you want to whitelist
const WHITELISTED_IPS = ["127.0.0.1", "::1", "192.168.1.100"];

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,

  // 🛡️ Skip function for whitelisting
  skip: (req: Request): boolean => {
    const ip = req.ip || req.connection.remoteAddress;
    return WHITELISTED_IPS.includes(ip);
  },
});

```


 ## Location based IP-based restrictions
```tsx
 import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

// Set of allowed countries (ISO Alpha-2 codes)
const ALLOWED_COUNTRIES = new Set(["IN", "US", "CA"]); // Example: India, USA, Canada

export const geoBlocker = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket.remoteAddress;

  const geo = geoip.lookup(ip || "");

  if (geo && ALLOWED_COUNTRIES.has(geo.country)) {
    return next(); // Allow
  }

  return res.status(403).json({
    message: "Access denied: Your region is not allowed",
    ip,
    country: geo?.country || "Unknown"
  });
};
```

## Middleware for Only Sensitive Routes

```tsx
import express from "express";
import { geoBlocker } from "./middleware/geoBlocker";

const app = express();

app.use(express.json());

// Public Route — No geo blocking
// 🛡️ Apply geoBlocker to ALL incoming requests
app.use(geoBlocker);

app.get("/api/public", (req, res) => {
  res.send("Even this route is geo-restricted.");
});

app.get("/api/secure", (req, res) => {
  res.send("Secure route with geo restriction.");
});
```
**Or**
```tsx
const geoBypassRoutes = ["/api/health", "/api/version"];

app.use((req, res, next) => {
  if (geoBypassRoutes.includes(req.path)) return next();
  geoBlocker(req, res, next);
});

```






## Build simple API
```tsx
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory data
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011 }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a single book
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// POST a new book
app.post('/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, publishedYear } = req.body;
  book.title = title ?? book.title;
  book.author = author ?? book.author;
  book.publishedYear = publishedYear ?? book.publishedYear;

  res.json(book);
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: 'Book deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

## TodoList
```tsx


import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (title.trim() === '') {
      setError('Todo title cannot be empty');
      return;
    }
    const newTodo = { id: Date.now(), title };
    setTodos([...todos, newTodo]);
    setTitle('');
    setError('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-xl bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow border p-2 rounded"
          placeholder="Enter todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{todo.title}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && <p className="text-gray-500">No todos yet.</p>}
      </ul>
    </div>
  );
};

export default TodoList;
```








 ## React Fetch and display list users with user search


```tsx


import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch users on component mount
 useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data, "user API data");
        setUsers(data);
      } catch (err) {
        console.log("Error fetching user details", err);
      }
    };

    fetchData();
  }, []);

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;

```


## Angular Fetch and display list users with user search

#### **1. app.module.ts** – Import `HttpClientModule` and `FormsModule`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

#### **2. user-list.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  search: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => this.users = data,
        error: (err) => console.error('Error fetching users:', err)
      });
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
```

---

#### **3. user-list.component.html**

```html
<div style="padding: 20px;">
  <h2>User List</h2>

  <input
    type="text"
    placeholder="Search by name..."
    [(ngModel)]="search"
    style="padding: 8px; margin-bottom: 10px; width: 100%;"
  />

  <ul>
    <li *ngFor="let user of filteredUsers">
      {{ user.name }} – {{ user.email }}
    </li>
    <li *ngIf="filteredUsers.length === 0">No users found</li>
  </ul>
</div>
```

---






---

#### `Array.prototype.map`

```js
Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// ✅ Usage
const nums = [1, 2, 3];
const doubled = nums.myMap(x => x * 2);  // [2, 4, 6]
```

---

#### `Array.prototype.filter`

```js
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// ✅ Usage
const nums = [1, 2, 3, 4];
const evens = nums.myFilter(x => x % 2 === 0);  // [2, 4]
```

---

#### `Array.prototype.reduce`

```js
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

// ✅ Usage
const total = [1, 2, 3, 4].myReduce((sum, val) => sum + val); // 10
```

---

#### `Function.prototype.call`

```js
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnKey = Symbol();
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};

// ✅ Usage
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}
const person = { name: 'Alice' };
console.log(greet.myCall(person, 'Hello'));  // "Hello, Alice"
```

---

#### `Object.create`

```js
function myCreate(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

// ✅ Usage
const parent = { greet: () => 'hi' };
const child = myCreate(parent);
console.log(child.greet()); // "hi"
```

---


#### Promise

```js
(function (global) {
  if (typeof global.Promise !== 'undefined') return;

  function MyPromise(executor) {
    var self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilled = [];
    self.onRejected = [];

    function resolve(value) {
      if (self.status === 'pending') {
        self.status = 'fulfilled';
        self.value = value;
        self.onFulfilled.forEach(function (fn) {
          fn(self.value);
        });
      }
    }

    function reject(reason) {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.reason = reason;
        self.onRejected.forEach(function (fn) {
          fn(self.reason);
        });
      }
    }

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var self = this;
    return new MyPromise(function (resolve, reject) {
      if (self.status === 'fulfilled') {
        try {
          var result = onFulfilled ? onFulfilled(self.value) : self.value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      } else if (self.status === 'rejected') {
        try {
          var result = onRejected ? onRejected(self.reason) : self.reason;
          reject(result);
        } catch (err) {
          reject(err);
        }
      } else {
        self.onFulfilled.push(function (value) {
          try {
            var result = onFulfilled ? onFulfilled(value) : value;
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });

        self.onRejected.push(function (reason) {
          try {
            var result = onRejected ? onRejected(reason) : reason;
            reject(result);
          } catch (err) {
            reject(err);
          }
        });
      }
    });
  };

  MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  global.Promise = MyPromise;
})(this);
```


## Handling API Errors in React
```js
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchUsers();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```




### **Angular Debounce Input Search**

#### 🔧 **1. Setup (Using RxJS `Subject`)**

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html'
})
export class DebouncedSearchComponent implements OnInit, OnDestroy {
  searchInput$ = new Subject<string>();
  subscription!: Subscription;
  searchTerm = '';

  ngOnInit(): void {
    this.subscription = this.searchInput$
      .pipe(
        debounceTime(300),            // wait for 300ms pause in events
        distinctUntilChanged()        // only emit if value is different
      )
      .subscribe(value => {
        this.searchTerm = value;
        console.log('Search triggered with:', value);
        // call API or filter here
      });
  }

  onSearchChange(value: string): void {
    this.searchInput$.next(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

---

#### 📄 **2. Template: `debounced-search.component.html`**

```html
<input
  type="text"
  placeholder="Search..."
  (input)="onSearchChange($event.target.value)"
  style="padding: 8px; width: 100%;"
/>

<p *ngIf="searchTerm">You searched for: {{ searchTerm }}</p>
```

---

### 🧠 **How It Works:**

* `(input)="onSearchChange(...)"` emits every keystroke.
* The `Subject` pipes the values through:

  * `debounceTime(300)` → waits 300ms of silence before emitting
  * `distinctUntilChanged()` → skips if same value


---






## Debounced Search Component
```ts
import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      // fetch API call
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />;
}
```

## Autocomplete Component
```ts
function Autocomplete() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch(`/api/suggest?q=${input}`);
      const data = await res.json();
      setSuggestions(data);
    };
    if (input) fetchSuggestions();
  }, [input]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {suggestions.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
```
## Todo List
```ts
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask('');
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  return (
    <div>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id} style={{ textDecoration: t.done ? 'line-through' : '' }} onClick={() => toggleDone(t.id)}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
## React Table with Sorting
```ts
function SortableTable({ data }) {
  const [sortKey, setSortKey] = useState(null);
  const [asc, setAsc] = useState(true);

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    return asc ? a[sortKey] > b[sortKey] ? 1 : -1 : a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map(k => (
            <th key={k} onClick={() => { setSortKey(k); setAsc(!asc); }}>{k}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell, j) => <td key={j}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```
## Infinite Scroll
```ts
function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMore = async () => {
    const res = await fetch(`/api/items?page=${page}`);
    const data = await res.json();
    setItems(prev => [...prev, ...data]);
  };

  useEffect(() => {
    fetchMore();
  }, [page]);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setPage(p => p + 1);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
}  
```


## Custom Hook useToggle
```ts
function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}
```

## Form with Validation
```ts
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Invalid email';
    if (password.length < 6) newErrors.password = 'Too short';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) setErrors(errs);
    else console.log('Login success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      {errors.email && <div>{errors.email}</div>}
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Login</button>
    </form>
  );
}
```
## Highlight Text
```ts
function Highlight({ text, highlight }) {
  if (!highlight) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return <span>{parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part)}</span>;
}
```

## Counter

```ts
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() =>
        setSeconds(prev => {
          if (prev + 1 === 10) {
            return 0;
          }
          return prev + 1;
        }), 1000
      );
    }

    return () => clearInterval(timerRef.current); // cleanup on unmount or isRunning change
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const stop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Timer: {seconds} secs</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
```


## Rate Limit only using express

```ts
const express = require('express');
const app = express();

const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const maxRequests = 100; // max requests per IP per window

// In-memory store: { "ip": { count: x, startTime: Date } }
const ipRequestMap = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip;

  const currentTime = Date.now();
  const requestInfo = ipRequestMap.get(ip);

  if (!requestInfo) {
    // First request from this IP
    ipRequestMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  const elapsedTime = currentTime - requestInfo.startTime;

  if (elapsedTime < rateLimitWindowMs) {
    // Still within the time window
    if (requestInfo.count < maxRequests) {
      requestInfo.count += 1;
      return next();
    } else {
      res.status(429).send('Too many requests. Please try again later.');
    }
  } else {
    // Reset window
    ipRequestMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }
};

app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Hello, this is a rate-limited endpoint!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

```
