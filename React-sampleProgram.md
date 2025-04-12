
| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Grid View](#Grid-View) | [search input with debouncing using a custom useDebounce hook](#search-input-with-debouncing-using-a-custom-useDebounce-hook) | [React Form API Call](#React-Form-API-Call) | 


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

### ✨ Bonus Suggestion:
Want me to help integrate this with a mock API (like `jsonplaceholder`) or hook it into a real-time suggestion dropdown UI?
