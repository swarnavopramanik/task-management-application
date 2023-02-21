import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"
import Calender from "./components/calender/calender"
import CalenderTwo from "./components/calender/calender"
import Tasks from "./components/tasks"
import DashboardHome from "./pages/dashboardhome"
import DashboardLayout from './pages/dashboardlayout'
import HomePage from './pages/home'
import NotFound from "./pages/pagenotfound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        <Route path='dashboard' element={<DashboardHome />} />
        <Route path='tasks' element={<Tasks />} />
        <Route element={<Tasks />}>
          <Route path='tasks/calender' element={<CalenderTwo />} />          
        </Route>
      </Route>
      <Route path='calender' element={<CalenderTwo />} />
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
