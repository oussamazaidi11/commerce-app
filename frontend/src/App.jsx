import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./zone auth/Login";
import Register from "./zone auth/Register";
import Home from "./zone public/Home";
import Profile from "./zone client/Profile";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./zone admin/Dashboard";
import ManageProduct from "./zone admin/product/ManageProduct";
import ManageStock from "./zone admin/stock/ManageStock";
import ManageUser from "./zone admin/user/ManageUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<ManageProduct />} />
          <Route path="stock" element={<ManageStock />} />
          <Route path="user" element={<ManageUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
