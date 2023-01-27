
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom"

import DashboardLayout from './pages/dashboardlayout'
import HomePage from './pages/home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        <Route path='dashboard' element={<DashboardLayout />} />

      </Route>
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
