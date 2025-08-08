Perfect! You want a **step-by-step guide to set up a full-stack app using React (without Next.js)**, with:

* ✅ React (via Vite)
* ✅ Express (for RESTful API)
* ✅ MongoDB (via Mongoose)
* ✅ Swagger for API docs
* ✅ ESLint + Prettier
* ✅ Jest for testing
* ✅ Storybook (optional)
* ✅ Swagger API docs
* ✅ GitHub ready

Let’s build this step by step!

---

## ✅ STEP 0: **Prerequisites**

Ensure the following are installed:

* Node.js v18+
* npm or yarn
* Git
* MongoDB Atlas account
* VS Code or similar IDE
* GitHub account (for pushing code)

---

## ✅ STEP 1: **Project Structure**

We'll separate **frontend** and **backend**.

```
vaisala-app/
├── client/      # React frontend
├── server/      # Express backend
```

---

## ✅ STEP 2: **Initialize Frontend (React with Vite)**

### 2.1 Create React App with Vite

```bash
mkdir vaisala-app && cd vaisala-app
npm create vite@latest client -- --template react-ts
cd client
npm install
npm install -D eslint prettier jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom    // Install ESLint, Prettier, and Testing Tools
npx eslint --init   // Setup ESLint and Prettier
```

Choose:

* React
* TypeScript
* Browser + Node
* JSON config

**`.prettierrc`**

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100
}
```

**Add test script in `package.json`**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "jest"
}
```

### 2.4 Optional: Add Storybook

```bash
npx storybook init
```

---

## ✅ STEP 3: **Initialize Backend (Express + MongoDB)**

### 3.1 Set up server folder

```bash
cd .. && mkdir server && cd server
npm init -y
```

### 3.2 Install Dependencies

```bash
npm install express mongoose cors dotenv
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init
```

### 3.3 Project Structure

```
server/
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── index.ts
├── .env
├── tsconfig.json
├── swagger.json
```

### 3.4 Basic Express Server (`src/index.ts`)

```ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('API running'));

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
```

### 3.5 Create `.env`

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourdbname
```

### 3.6 Create User Model (`src/models/User.ts`)

```ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.model('User', userSchema);
```

---

## ✅ STEP 4: **Add API Routes + Controllers**

### `src/routes/userRoutes.ts`

```ts
import express from 'express';
import { getUsers, addUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);

export default router;
```

### `src/controllers/userController.ts`

```ts
import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (_: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};
```

### In `src/index.ts`

```ts
import userRoutes from './routes/userRoutes';
app.use('/api/users', userRoutes);
```

---

## ✅ STEP 5: **Add Swagger API Docs**

### `swagger.json`

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Vaisala Hackathon API",
    "version": "1.0.0"
  },
  "paths": {
    "/api/users": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "List of users"
          }
        }
      },
      "post": {
        "summary": "Add a user",
        "responses": {
          "201": {
            "description": "User added"
          }
        }
      }
    }
  }
}
```

### Swagger route in `src/index.ts`

```ts
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

---

## ✅ STEP 6: **Connect Frontend to Backend**

### 6.1 Example API call (React)

**`client/src/api/userService.ts`**

```ts
export async function getUsers() {
  const res = await fetch('http://localhost:5000/api/users');
  return res.json();
}
```

Use inside any component.

---

## ✅ STEP 7: **Run Everything**

### In `server/package.json`

```json
"scripts": {
  "dev": "ts-node-dev src/index.ts"
}
```

Run servers:

```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev
```

Now open:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000/api/users`
* Swagger Docs: `http://localhost:5000/api-docs`

---

## ✅ STEP 8: **Push to GitHub**

```bash
git init
git add .
git commit -m "Initial full-stack app"
git remote add origin https://github.com/YOUR_USERNAME/vaisala-app.git
git push -u origin main
```

