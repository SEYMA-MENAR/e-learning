// import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../src/ComponentsFolders/About/About";
import Blog from "../src/ComponentsFolders/Blog/Blog";
import BlogDetail from "../src/ComponentsFolders/BlogDetail/BlogDetail";
import Calender from "../src/ComponentsFolders/Calender/Calender";
import CheckOut from "../src/ComponentsFolders/Checkout/CheckOut";
import CourseCategory from "../src/ComponentsFolders/CourseCategory/CourseCategory";
import CourseContent from "../src/ComponentsFolders/CourseContent/CourseContent";
import CourseDetail from "../src/ComponentsFolders/CourseDetail/CourseDetail";
import Courses from "../src/ComponentsFolders/Courses/Courses";
import Events from "../src/ComponentsFolders/EventsFolder/Events";
import Footer from "../src/ComponentsFolders/Footer/Footer";
import HomePage from "../src/ComponentsFolders/HomePage/HomePage";
import Login from "../src/ComponentsFolders/Login/Login";
import Meetings from "../src/ComponentsFolders/Meeting/Meetings";
import MemberShip from "../src/ComponentsFolders/Membership/MemberShip";
import Navbar from "../src/ComponentsFolders/Navbar/Navbar";
import Search from "../src/ComponentsFolders/Search/Search";
// import Sidebar from "../src/ComponentsFolders/Sidebar/Sidebar";
import SignUp from "../src/ComponentsFolders/SignUp/SignUp";
import UserCourseContent from "../src/ComponentsFolders/UserCourseContent/UserCourseContent";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //   <Route exact path="/" element={<HomePage />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/blog" element={<Blog />} />
    //   <Route path="/blogdetail" element={<BlogDetail />} />
    //   <Route path="/calender" element={<Calender />} />
    //   <Route path="/checkout" element={<CheckOut />} />
    //   <Route path="/coursecategory" element={<CourseCategory />} />
    //   <Route path="/coursecontent" element={<CourseContent />} />
    //   <Route path="/coursedetail" element={<CourseDetail />} />
    //   <Route path="/courses" element={<Courses />} />
    //   <Route path="/events" element={<Events />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/meetings" element={<Meetings />} />

    //     <Meetings />
    //     <MemberShip />

    //     <Search />
    //     <SignUp />
    //     <UserCourseContent />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <>
      <About />
      <Blog />
      <BlogDetail />
      <Calender />
      <CheckOut />
      <CourseCategory />
      <CourseContent />
      <CourseDetail />
      <Courses />
      <Events />
      <Footer />
      <HomePage />
      <Login />
      <Meetings />
      <MemberShip />
      <Navbar />
      <Search />
      {/* <Sidebar/> */}
      <SignUp />
      <UserCourseContent />
    </>
  );
}

export default App;
