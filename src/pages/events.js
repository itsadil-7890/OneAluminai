"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "AI Symposium 2025",
    date: "Oct 15, 2025",
    location: "Virtual",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero5.jpg", "/assets/hero/hero6.jpg"],
    description:
      "A gathering of industry leaders and students to discuss the future of Artificial Intelligence.",
  },
  {
    title: "Campus Placement Seminar",
    date: "Nov 2, 2025",
    location: "CU Auditorium",
    images: ["/assets/hero/hero5.jpg", "/assets/hero/hero3.png"],
    description:
      "Workshops and talks on placement strategies, resume building, and interview skills.",
  },
  {
    title: "Alumni Networking Night",
    date: "Dec 10, 2025",
    location: "GJU Convention Center",
    images: ["/assets/hero/hero6.jpg", "/assets/hero/hero5.jpg"],
    description:
      "An evening for alumni and students to connect, share stories, and build professional relationships.",
  },
    {
    title: "AI Symposium 2025",
    date: "Oct 15, 2025",
    location: "Virtual",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero5.jpg", "/assets/hero/hero6.jpg"],
    description:
      "A gathering of industry leaders and students to discuss the future of Artificial Intelligence.",
  },
    {
    title: "AI Symposium 2025",
    date: "Oct 15, 2025",
    location: "Virtual",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero5.jpg", "/assets/hero/hero6.jpg"],
    description:
      "A gathering of industry leaders and students to discuss the future of Artificial Intelligence.",
  },
    {
    title: "AI Symposium 2025",
    date: "Oct 15, 2025",
    location: "Virtual",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero5.jpg", "/assets/hero/hero6.jpg"],
    description:
      "A gathering of industry leaders and students to discuss the future of Artificial Intelligence.",
  },
];

export default function Events() {
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
            Connect. Learn. Celebrate. 🎉
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore our upcoming events and create unforgettable experiences.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition">
            Organize Your Event 🚀
          </button>
        </div>
      </section>

      {/* 🎊 Upcoming Events */}
      <main className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-700 drop-shadow-sm">
            📅 Upcoming Events
          </h2>
          <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg font-medium shadow hover:opacity-90 transition">
            Organize in Your Place
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* 🖼️ Gallery/Slider */}
              <div className="relative h-56 w-full">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop
                  className="h-full"
                >
                  {event.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={img}
                        alt={`${event.title} - ${i}`}
                        fill
                        className="object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* 📖 Event Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-700">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  📅 {event.date} · 📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium rounded-lg hover:opacity-90 transition">
                  Learn More
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
