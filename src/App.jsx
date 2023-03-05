import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"
import SignInForm from "./components/signin"
import SignUpForm from "./components/signup"
import Tasks from "./components/tasks"
import DashboardHome from "./pages/dashboardhome"
import DashboardLayout from './pages/dashboardlayout'
import HomePage from './pages/home'
import NotFound from "./pages/pagenotfound"
import PrivateRoute from "./components/private-routes"
import UserProfile from "./pages/profile"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} />
      <Route path="/login" element={<SignInForm />} />
      <Route path="/register" element={<SignUpForm />} />
      {/* private routes */}
      <Route element={<DashboardLayout />}>
        <Route path='/dashboard' element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
        <Route path='/tasks' element={<PrivateRoute><Tasks /></PrivateRoute>} />
      </Route>
      <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </>
  )
)


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
