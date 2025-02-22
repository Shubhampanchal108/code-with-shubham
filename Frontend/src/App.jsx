import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notes from "./Pages/Notes";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Admin/Pages/Dashboard";
import Sidebar from "./Pages/Admin/Components/Sidebar";
import NavbarAdmin from "./Pages/Admin/Components/NavbarAdmin";
import AddNotes from "./Pages/Admin/Pages/AddNotes";
import AddCourses from "./Pages/Admin/Pages/AddCourses";
import CoursesList from "./Pages/Admin/Pages/CoursesList";
import NotesList from "./Pages/Admin/Pages/NotesList";
import AdminLogin from "./Pages/Admin/Pages/AdminLogin";
import PageNotFound from "./Pages/page_not_found";

export const URL = `http://localhost:5000`;
export const url = `http://localhost:5000`;

const AdminLayout = ({ children }) => (
  <div className="flex items-start min-h-screen">
    <Sidebar />
    <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
      <NavbarAdmin />
      <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">{children}</div>
    </div>
  </div>
);

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && location.pathname.startsWith("/admin") && location.pathname !== "/admin/login") {
      navigate("/admin/login");
    }
  }, [location, navigate]);

  return (
    <>
      {!location.pathname.startsWith("/admin") && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="addnote" element={<AddNotes />} />
                <Route path="addcourse" element={<AddCourses />} />
                <Route path="list-course" element={<CoursesList />} />
                <Route path="notes-list" element={<NotesList />} />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
      {!location.pathname.startsWith("/admin") && <Footer />}
    </>
  );
};

export default App;
