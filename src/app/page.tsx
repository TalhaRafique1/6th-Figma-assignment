import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/Hero";
import CoursesSection from "@/components/CourseCategory/CourseCategory";
import Courses from "@/components/Courses/Courses";
import OurTeam from "@/components/OurTeam/OurTeam";
import Footer from "@/components/Footer/Footer"
import CustomerTestimomial from "@/components/CustomerTestimomial/CustomerTestimomial";
import Achievement from "@/components/Achivement/Achivement";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <CoursesSection/>
      <Achievement/>
      <Courses/>
      <OurTeam/>
      <CustomerTestimomial/>
      <Footer/>
    </div>
    
  );
}
