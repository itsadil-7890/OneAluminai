import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Database, MessageSquare, Users, Calendar, Briefcase, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 backdrop-blur-lg rounded-3xl max-w-5xl mx-auto h-full -z-10" />
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 flex items-center justify-center gap-3">
          <Users className="h-10 w-10 text-blue-600" />
          Bridging Alumni, <span className="text-blue-600"> Students and Institutions</span>
        </h1>
        <p className="mt-16 max-w-3xl  mx-auto text-[20px] text-gray-700 animate-fadeIn">
          Most institutions struggle to keep alumni connected and engaged. Our platform solves this 
          by creating a centralized space for mentorship, career growth, networking, and giving back 
          ensuring alumni, students, and institutions grow together.
        </p>

        {/* KPI Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <StatCard key={idx} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Feature Cards */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg transition transform hover:-translate-y-1 animate-slideUp hover:shadow-[0_0_5px_rgba(37,99,235,0.6)]"
          >
            <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-[17px]">{feature.solution}</p>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}

/* Animated Stat Counter Component */
function StatCard({ icon, value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, "")); // extract numbers
    if (start === end) return;

    const duration = 2000; // 2s animation
    const stepTime = Math.max(Math.floor(duration / end), 20); // keep smooth
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer); // stop at final
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-lg rounded-2xl mt-20 shadow hover:scale-120 transition">
      {/* Icon with blurred background */}
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute w-14 h-14 bg-blue-200/40 blur-xl rounded-full"></div>
        <div className="relative text-4xl">{icon}</div>
      </div>
      {/* Counter */}
      <h2 className="text-3xl font-bold text-blue-600 mt-2">
        {count}
        {value.replace(/[0-9]/g, "")} {/* Keep +, M, etc */}
      </h2>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
}

/* Static Stats Data */
const stats = [
  { icon: "🎓", value: "100+", label: "Alumni Connected" },
  { icon: "💼", value: "50+", label: "Mentorship Sessions Conducted" },
  { icon: "🌍", value: "50+", label: "Global Chapters Active" },
  { icon: "💰", value: "90+", label: "Raised in Scholarships & Support" },
];

const features = [
  {
    title: "Centralized Alumni Database",
    solution:
      "A secure, centralized platform that allows alumni to maintain and update their profiles while enabling institutions to manage and access accurate, reliable records efficiently.",
    icon: Database,
  },
  {
    title: "Seamless Communication & Networking",
    solution:
      "Built-in networking tools, messaging, and forums for alumni to connect with each other, students, and faculty in a professional space.",
    icon: MessageSquare,
  },
  {
    title: "Mentorship & Career Guidance",
    solution:
      "Alumni can register as mentors on the platform, provide guidance and career advice to students, and share job or internship opportunities, fostering professional growth and networking.",
    icon: Users,
  },
  {
    title: "Event Engagement & Participation",
    solution:
      "Comprehensive event management features including creating and sending invitations, tracking RSVPs and attendance, monitoring participant engagement, and facilitating seamless communication and interaction throughout the event lifecycle.",
    icon: Calendar,
  },
  {
    title: "Internship & Job Opportunities",
    solution:
      "The platform allows alumni and recruiters to post job and internship openings, while students can browse listings and apply directly, streamlining the recruitment and application process efficiently.",
    icon: Briefcase,
  },
  {
    title: "Fundraising & Giving Back",
    solution:
      "A transparent donation system that enables users to contribute easily, track their donations, and monitor the real-time impact of their contributions on supported causes.",
    icon: Heart,
  },
];
