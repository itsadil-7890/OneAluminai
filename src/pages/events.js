"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const upcomingEvents = [
  {
    title: "AI Symposium 2025",
    date: "Oct 15, 2025",
    location: "Virtual",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero5.jpg"],
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
    title: "AI Symposium 2025",
    date: "Oct 15, 2025",
    location: "Virtual",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero5.jpg"],
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
];

const pastEvents = [
  {
    title: "Alumni Networking Night",
    date: "Aug 10, 2025",
    location: "GJU Convention Center",
    images: ["/assets/hero/hero6.jpg", "/assets/hero/hero5.jpg"],
    description:
      "An evening for alumni and students to connect, share stories, and build professional relationships.",
  },
  {
    title: "Hackathon 2024",
    date: "Dec 18, 2024",
    location: "UIET Campus",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero6.jpg"],
    description:
      "A 48-hour coding marathon where innovators solved real-world challenges.",
  },
  {
    title: "Alumni Networking Night",
    date: "Aug 10, 2025",
    location: "GJU Convention Center",
    images: ["/assets/hero/hero6.jpg", "/assets/hero/hero5.jpg"],
    description:
      "An evening for alumni and students to connect, share stories, and build professional relationships.",
  },
  {
    title: "Hackathon 2024",
    date: "Dec 18, 2024",
    location: "UIET Campus",
    images: ["/assets/hero/hero3.png", "/assets/hero/hero6.jpg"],
    description:
      "A 48-hour coding marathon where innovators solved real-world challenges.",
  },
];

const highlights = [
  "/assets/hero/hero3.png",
  "/assets/hero/hero5.jpg",
  "/assets/hero/hero6.jpg",
  "/assets/hero/hero2.png",
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <Navbar />

      {/* 🎥 Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
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
            Explore our upcoming events and relive the highlights from the past.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition">
            Organize Your Event!
          </button>
        </div>
      </section>

      {/* Highlights Swiper */}
      <section mt-15 className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-center text-3xl font-extrabold text-purple-700">
          Event Highlights
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {highlights.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`Highlight ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex justify-center mb-8">
            <h2 className="text-center text-5xl md:text-6xl font-extrabold text-purple-700">
              Upcoming Events
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="relative h-44 w-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop
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
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 text-blue-700">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    📅 {event.date} · 📍 {event.location}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    {event.description}
                  </p>

                  {/* ❤️ Like count */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-red-500 space-x-1">
                      <FaHeart />
                      <span className="text-sm font-medium">124</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium rounded-lg hover:opacity-90 transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Past Events */}
        <section className="mt-40">
          <div className="flex justify-center mb-8">
            <h2 className="text-center text-5xl md:text-6xl font-extrabold text-purple-700">
              Past Events
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {pastEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="relative h-44 w-full">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop
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
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 text-purple-700">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    📅 {event.date} · 📍 {event.location}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    {event.description}
                  </p>

                  {/* ❤️ Like count */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-red-500 space-x-1">
                      <FaHeart />
                      <span className="text-sm font-medium">98</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-700 text-white font-medium rounded-lg hover:opacity-90 transition">
                    View Recap
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
