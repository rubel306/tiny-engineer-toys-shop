import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  useEffect(() => {
    if (!user) {
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to view this page",
      });
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default PrivateRoute;
