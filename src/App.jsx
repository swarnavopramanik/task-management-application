import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"
import Tasks from "./components/tasks"
import DashboardLayout from './pages/dashboardlayout'
import HomePage from './pages/home'
import NotFound from "./pages/pagenotfound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        <Route path='dashboard' element={<Tasks />} />
      </Route>
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

export default App
