import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LightBulbIcon, RocketLaunchIcon , ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function About() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Run only in browser
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen text-gray-900 bg-white font-sans"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      <main className="pt-28 max-w-6xl mx-auto px-6 space-y-16">
        {/* Hero Heading Card */}
        <div
          className="relative p-10 rounded-2xl shadow-lg 
                     bg-white/70 backdrop-blur-md 
                     transition-transform duration-500 
                     hover:scale-[1.02]"
          style={{
            transform:
              windowSize.width && windowSize.height
                ? `perspective(1000px) rotateX(${
                    (cursor.y - windowSize.height / 2) / 100
                  }deg) rotateY(${
                    -(cursor.x - windowSize.width / 2) / 100
                  }deg)`
                : "none",
         
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Strengthening Bonds Between Alumni, Students, and{" "}
            <span className="text-blue-600">Institutions for a Brighter Future</span>
          </h1>
        </div>

      {/* Image Row */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="rounded-xl overflow-hidden shadow-lg transition duration-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]">
    <img
      src="/assests/three.jpg"
      alt="Sample 1"
      className="w-full h-64 object-contain"
    />
  </div>

  <div className="rounded-xl overflow-hidden shadow-lg transition duration-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]">
    <img
      src="/assests/two.jpg"
      alt="Sample 2"
      className="w-full h-64 object-contain"
    />
  </div>

  <div className="rounded-xl overflow-hidden shadow-lg transition duration-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]">
    <img
      src="/assests/one.jpg"
      alt="Sample 3"
      className="w-full h-64 object-cover"
    />
  </div>
</section>


       <div
  className="relative p-12 rounded-3xl border-l-4 border-blue-600 bg-white/40 backdrop-blur-lg transition duration-500"
  style={{
    transform:
      windowSize.width && windowSize.height
        ? `perspective(1000px) rotateX(${
            (cursor.y - windowSize.height / 2) / 100
          }deg) rotateY(${-(cursor.x - windowSize.width / 2) / 100}deg)`
        : "none",
  }}
>

<h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-gray-900 mb-6">
  <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600" /> Our Success Story
</h1>

  <p className="text-[19px] leading-relaxed font-semibold text-gray-700 text-center max-w-3xl mx-auto">
     We are a dedicated platform designed to bridge the gap between institutions, alumni, and students. Our mission is to create a vibrant community where connections last beyond graduation and opportunities flow across generations. ✨
  </p>
</div>

        {/* Vision + Mission Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="relative bg-white border-t-4 border-blue-600 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-500"    style={{
            transform:
              windowSize.width && windowSize.height
                ? `perspective(1000px) rotateX(${
                    (cursor.y - windowSize.height / 2) / 100
                  }deg) rotateY(${
                    -(cursor.x - windowSize.width / 2) / 100
                  }deg)`
                : "none",
         
          }}>
            <div className="flex items-center gap-3 mb-4">
              <LightBulbIcon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
           We aim to empower institutions by building a strong alumni network that supports mentorship, career growth, knowledge sharing, and new opportunities. Our goal is to create lasting bonds, inspire innovation, and encourage a culture of giving back, sustainability, and collective success.
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-white border-t-4 border-blue-600 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center gap-3 mb-4"    style={{
            transform:
              windowSize.width && windowSize.height
                ? `perspective(1000px) rotateX(${
                    (cursor.y - windowSize.height / 2) / 100
                  }deg) rotateY(${
                    -(cursor.x - windowSize.width / 2) / 100
                  }deg)`
                : "none",
         
          }}>
              <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our platform creates meaningful connections between alumni, students, and institutions, unlocking mentorship, internships, career opportunities, and scholarships, while encouraging alumni contributions, celebrating their achievements, and building a strong, engaged global community.
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">
            ← Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
