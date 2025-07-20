import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DragNDrop from './components/DragNDrop';
import SelectAxis from './components/SelectAxis';
import History from './components/History.jsx';
import Chart from './components/Chart.jsx';
import ProtectedRoute from './pages/ProtectedRoute';
import Admin from './pages/Admin';
import AdminManagement from './components/AdminManagement';
import ErrorPage from './pages/ErrorPage.jsx';
import Heropage from './pages/Heropage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Heropage />,
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
    element: <ProtectedRoute />, // ✅ guard the whole dashboard
    children: [
      {
        path: "",
        element: <Dashboard />, // ✅ still renders the layout
        children: [
          {
            path: "",
            element: <DragNDrop />
          },
          {
            path: "configure",
            element: <SelectAxis />,
            errorElement: <ErrorPage />
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
