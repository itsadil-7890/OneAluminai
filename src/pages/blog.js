import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How to Connect with Alumni Effectively",
    author: "John Doe",
    time: "2 days ago",
    image: "/assets/blogpage/blog1.jpeg",
    excerpt: "Practical strategies to engage alumni networks and build lasting mentorship bridges.",
  },
  {
    title: "Mentorship Programs that Work",
    author: "Jane Smith",
    time: "5 days ago",
    image: "/assets/blogpage/blog2.jpeg",
    excerpt: "How mentorship programs drive student success and foster real-world skills.",
  },
  {
    title: "Top Placement Trends in 2025",
    author: "Alice Johnson",
    time: "1 week ago",
    image: "/assets/blogpage/blog2.jpeg",
    excerpt: "Insights into hiring trends, AI recruitment tools, and placement strategies shaping careers.",
  },
  {
    title: "The Rise of AI in Education",
    author: "Michael Chen",
    time: "1 week ago",
    image: "/assets/blogpage/blog4.jpeg",
    excerpt: "How AI tutors, chatbots, and smart analytics are transforming student learning.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <Navbar />
           {/* 🎥 Video Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/videos/event-04.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Connect. Learn. Enjoy. 
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore our upcoming blogs and create unforgettable experiences.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition">
            Post Your Blog!
          </button>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-16 px-4">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12 mt-20 text-blue-700 drop-shadow-sm"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech & AI Blog
        </motion.h1>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-300 transition hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-500 text-xs mb-2">
                  By {blog.author} · {blog.time}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">{blog.excerpt}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm shadow">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
