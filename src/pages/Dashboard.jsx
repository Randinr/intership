import React, { useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom"; // Import Outlet for nested routes
import { MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signOut } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Dashboard = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const firebaseAuth = getAuth();
  const adminEmail = "randinurrizki85@gmail.com";

  useEffect(() => {
    if (!user || user.email !== adminEmail) {
      navigate("/login");
    }
  }, [user, navigate]);

  const logout = () => {
    signOut(firebaseAuth)
      .then(() => {
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
        localStorage.clear();
        navigate("/"); // Redirect to home page after logout
      })
      .catch((error) => console.error("Error during logout", error));
  };

  return (
    <div className="flex min-h-screen p-4 bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-full bg-primary text-black p-6 flex flex-col justify-between shadow-lg">
        <div className="max-h-full px-3 py-28 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <ul className="space-y-4">
            <li className="flex justify-center">
              <Link
                to="/dashboard/createItem"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                <MdAdd />
                New Category
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                to="/dashboard/createProduct" // New link to CreateProduct
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                <MdAdd />
                New Product
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
        >
          Logout <MdLogout />
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
