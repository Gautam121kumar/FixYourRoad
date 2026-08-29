import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ReportPage from './pages/ReportPage'
import SuccessPage from './pages/SuccessPage'
import AdminDashboard from './pages/AdminDashboard'
import ReportDetails from './pages/ReportDetails'


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<ReportPage />}
        />

        <Route
          path="/success"
          element={<SuccessPage />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/report"
          element={<ReportDetails />}
        />

      </Routes>

    </BrowserRouter>
  )
}


export default App