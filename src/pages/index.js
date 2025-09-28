// pages/index.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Database, MessageSquare, Users, Calendar, Briefcase, Heart } from "lucide-react";
import { motion } from "framer-motion";


// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 bg-white relative overflow-hidden">
      <Navbar />

      <main className="pt-28 max-w-6xl mx-auto px-6">
       {/* Hero Section */}
<section className="relative w-full min-h-[90vh]  from-indigo-50 to-blue-50 flex items-center overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col justify-center z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
      Build Bridges between{" "}
      <span className="text-indigo-600">Students</span>,{" "}
      <span className="text-indigo-600">Colleges</span> &{" "}
      <span className="text-indigo-600">Alumni</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl">
      Wesntr connects students, colleges, alumni and companies mentorship, placements and community, all in one place.
    </p>
    <div className="flex justify-center md:justify-start gap-4">
      <Link
        href="/signup"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
      >
        Get Started
      </Link>
      <Link
        href="/about"
        className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition"
      >
        Learn More
      </Link>
    </div>
  </div>

  {/* Right-side Cartoon Image */}
  <div className="absolute right-0 bottom-0 md:relative md:flex md:justify-center md:items-center w-full md:w-1/2 h-full">
    <div className="relative w-72 h-72 md:w-130 md:h-130 mx-auto">
      <Image
        src="/assests/hero6.jpg"
        alt="Cartoon Illustration"
        fill
        className="object-contain animate-float"
      />
    </div>
  </div>
</section>


        {/* Swiper Section */}
        <section className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {[
              "cu.jpg",
              "dcrust.jpg",
              "gju.jpeg",
              "lingyas.jpeg",
              "mdu.avif",
              "ymca",
            
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px] flex justify-center items-center">
                  <Image
                    src={`/assests/college/${img}`}
                    alt={`App Screenshot ${index + 1}`}
                    width={250}
                    height={500}
                    className="rounded-xl shadow-lg object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      

        {/* Who We Serve Section */}
        <section className="py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">WHO WE SERVE</span> 
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Students",
                desc: "Find mentorship, internships and alumni guidance.",
              },
              {
                title: "Colleges",
                desc: "Manage alumni relationships and placement pipelines.",
              },
              {
                title: "Alumni & Companies",
                desc: "Hire fresh talent and give back through mentoring.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg transition transform hover:-translate-y-1 animate-slideUp hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-blue-600">OUR SOLUTIONS</span> 
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
               {
    title: "Centralized Alumni Database",
    desc:
      "A secure, centralized platform that allows alumni to maintain and update their profiles while enabling institutions to manage and access accurate, reliable records efficiently.",
    icon: Database,
  },
  {
    title: "Seamless Communication & Networking",
    desc:
      "Built-in networking tools, messaging, and forums for alumni to connect with each other, students, and faculty in a professional space.",
    icon: MessageSquare,
  },
  {
    title: "Mentorship & Career Guidance",
    desc:
      "Alumni can register as mentors on the platform, provide guidance and career advice to students, and share job or internship opportunities, fostering professional growth and networking.",
    icon: Users,
  },
  {
    title: "Event Engagement & Participation",
    desc:
      "Comprehensive event management features including creating and sending invitations, tracking RSVPs and attendance, monitoring participant engagement, and facilitating seamless communication and interaction throughout the event lifecycle.",
    icon: Calendar,
  },
  {
    title: "Internship & Job Opportunities",
    desc:
      "The platform allows alumni and recruiters to post job and internship openings, while students can browse listings and apply directly, streamlining the recruitment and application process efficiently.",
    icon: Briefcase,
  },
  {
    title: "Fundraising & Giving Back",
    desc:
      "A transparent donation system that enables users to contribute easily, track their donations, and monitor the real-time impact of their contributions on supported causes.",
    icon: Heart,
  },
            ].map((solution, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg transition transform hover:-translate-y-1 animate-slideUp hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]"
              >
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </section>

{/* Testimonial Section 50/50 Split */}
<section className="py-16 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-11/12 mx-auto items-center gap-8">
    
    {/* Left Side Text (50%) */}
    <div className="px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
        <span className="text-blue-600">OUR ALUMNI SPEAK</span>
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed text-lg">
        Success stories from students, alumni, and professionals who achieved big milestones.  
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">
        These testimonials highlight journeys of hard work, growth, and success — inspiring the next generation to follow their dreams.  
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
        Read More Stories
      </button>
    </div>

    {/* Right Side Sliders (50%) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Column 1 */}
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        loop={true}
        speed={2500}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={5}
        className="h-[500px]"
      >
        {[
          { name: "Ashish Dubey", company: "Microsoft", role: "Software Developer Intern" },
          { name: "Kousik Snai", company: "Nagarro", role: "Associate Software Developer" },
          { name: "Rishabh Sachdeva", company: "Accenture", role: "Software Developer" },
          { name: "Aman Kushwaha", company: "UBS", role: "SDE" },
          { name: "Kanishk Raj", company: "Principal Global", role: "Software Engineer" },
          { name: "Kumkum Sing", company: "Paytm", role: "SDE Intern" },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-5 h-40 bg-blue-150 text-blue-600  rounded-xl  shadow-lg flex flex-col items-center justify-center text-center transition hover:-translate-y-1">
              <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
              <span className="text-blue-400 font-semibold">{item.company}</span>
              <span className="text-sm text-gray-300">{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Column 2 */}
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={5}
        className="h-[500px]"
      >
        {[
          { name: "Rahul Mehta", company: "Google", role: "Software Engineer" },
          { name: "Priya Sharma", company: "Amazon", role: "Data Scientist" },
          { name: "Vikram Singh", company: "Infosys", role: "System Engineer" },
          { name: "Megha Arora", company: "Deloitte", role: "Business Analyst" },
          { name: "Rohan Gupta", company: "Adobe", role: "UI/UX Designer" },
          { name: "Sneha Iyer", company: "TCS", role: "Associate Consultant" },
        ].map((item, index) => (
          <SwiperSlide key={index}>
             <div className="p-5 h-40 bg-blue-150 text-blue-600  rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition hover:-translate-y-1 ">
              <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
              <span className="text-blue-400 font-semibold">{item.company}</span>
              <span className="text-sm text-gray-300">{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        loop={true}
        speed={3500}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={5}
        className="h-[500px]"
      >
        {[
          { name: "Anjali Verma", company: "IBM", role: "AI Engineer" },
          { name: "Kunal Thakur", company: "Oracle", role: "Cloud Engineer" },
          { name: "Divya Sharma", company: "Capgemini", role: "Associate Consultant" },
          { name: "Harsh Patel", company: "Flipkart", role: "Software Developer" },
          { name: "Manish Yadav", company: "PayPal", role: "Backend Developer" },
          { name: "Isha Kapoor", company: "Wipro", role: "Testing Engineer" },
        ].map((item, index) => (
          <SwiperSlide key={index}>
           <div className="p-5 h-40 bg-white text-blue-600 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
  <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
              <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
              <span className="text-blue-400 font-semibold">{item.company}</span>
              <span className="text-sm text-gray-300">{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

{/* Blog Section with Grid Layout (2 Rows, Smaller Blocks) */}
<section className="py-10 md:py-16 bg-gray-50">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
    <span className="text-blue-600">LATEST BLOGS</span>
  </h2>
  <p className="text-center text-gray-600 mb-12">
    Read our latest insights, stories, and updates from students, alumni, and colleges
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
    {[
      {
        title: "How to Connect with Alumni Effectively",
        author: "John Doe",
        time: "2 days ago",
        image: "/assests/one.jpg",
        excerpt: "Tips and strategies to engage alumni and build lasting relationships.",
      },
      {
        title: "Mentorship Programs that Work",
        author: "Jane Smith",
        time: "5 days ago",
        image: "/assests/two.jpg",
        excerpt: "Learn how mentorship programs can impact student growth.",
      },
      {
        title: "Top Placement Trends in 2025",
        author: "Alice Johnson",
        time: "1 week ago",
        image: "/assests/three.jpg",
        excerpt: "Insights and analytics on the latest placement trends for students.",
      },
      {
        title: "Networking Tips for Students",
        author: "Michael Brown",
        time: "3 days ago",
        image: "/assests/one.jpg",
        excerpt: "Practical advice for students to expand their professional network.",
      },
      {
        title: "Alumni Success Stories",
        author: "Sarah Williams",
        time: "4 days ago",
        image: "/assests/two.jpg",
        excerpt: "Highlighting inspiring stories from our alumni community.",
      },
      {
        title: "Building a Strong College Community",
        author: "David Lee",
        time: "1 week ago",
        image: "/assests/three.jpg",
        excerpt: "How colleges can foster a vibrant and supportive environment.",
      },
    ].map((blog, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-[0_0_10px_rgba(37,99,235,0.6)] transition transform hover:-translate-y-1"
      >
        <div className="relative h-36 w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-base font-semibold mb-1">{blog.title}</h3>
          <p className="text-gray-500 text-xs mb-2">
            By {blog.author} · {blog.time}
          </p>
          <p className="text-gray-700 text-sm">{blog.excerpt}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}  
