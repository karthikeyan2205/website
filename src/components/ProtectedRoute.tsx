import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuth();
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;