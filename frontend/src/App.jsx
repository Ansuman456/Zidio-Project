import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DragNDrop from './components/DragNDrop';
import SelectAxis from './components/SelectAxis';
import History from './components/history';
import Chart from './components/Chart';
import ProtectedRoute from './pages/ProtectedRoute';
import Admin from './pages/Admin';
import AdminManagement from './components/AdminManagement';
import AdminActivity from './components/AdminActivity';
import HeroPage from './components/HeroPage';

const router = createBrowserRouter([
  {
      path: "/",
    element: <HeroPage/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <ProtectedRoute><Dashboard/></ProtectedRoute>
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />, 
    children: [
      {
        path: "",
        element: <Dashboard/>, 
        children: [
          {
            path: "",
            element: <DragNDrop />
          },
          {
            path: "configure",
            element: <SelectAxis />
          },
          {
            path: "history",
            element: <History />
          },
          {
            path: "chart-list",
            element: <Chart />
          }
        ]
      },
    ]
  },
  {
    path: "/admin",
    element: <ProtectedRoute />, // ✅ guard the whole dashboard
    children: [
      {
        path: "",
        element: <Admin />, // ✅ still renders the layout
        children: [
          {
            path: "",
            element: <AdminManagement/>
          },
          {
            path: "activity",
            element: <AdminActivity />
          }
        ]
      },
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
