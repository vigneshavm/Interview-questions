
## App.tsx
```js
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


## Tabview.tsx
```js
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





## Grid.tsx
```js
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

