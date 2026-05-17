import { Navigate, useLocation } from "react-router-dom"
import { getToken } from "../auth"

export default function ProtectedRoute({ children }) {
  const location = useLocation()
  if (!getToken()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }
  return children
}
