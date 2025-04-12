
| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Grid View](#Grid-View) | [search input with debouncing using a custom useDebounce hook](#search-input-with-debouncing-using-a-custom-useDebounce-hook) | [React Form API Call](#React-Form-API-Call) | 
| [Node.js API using TypeScript for CRUD operations](#Node.js-API-using-TypeScript-for-CRUD-operations) | 


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


## Node.js API using TypeScript for CRUD operations

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

