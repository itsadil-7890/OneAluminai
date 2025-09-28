import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="relative min-h-screen text-gray-900 bg-gradient-to-br from-white via-gray-50 to-white font-sans">
      <Navbar />
      

      <main className="relative z-10 pt-28 max-w-3xl mx-auto px-2 py-4">
         <p className="text-gray-600 text-center font-semibold mt-10 text-[22px] ">
          ✨  Let’s Stay Connected and Build the Future Together ✨
          </p>
        {/* Contact Form Card */}
        <div
          className="group bg-transparent  mt-20 shadow-xl rounded-2xl p-8 
                     border border-white/20 t  hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] transform transition duration-500 hover:scale-[1.02] hover:rotate-0.5"
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Contact Us
          </h1>
         

          {/* Contact Form */}
        <form className="space-y-5">
  {/* Name Fields Inline */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* First Name */}
    <div>
      <label className="block text-gray-700 mb-2 font-medium">
        First Name
      </label>
      <input
        required
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800
                   placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-blue-600 
                   transition duration-300 shadow-sm"
        placeholder="First Name"
      />
    </div>

    {/* Last Name (optional) */}
    <div>
      <label className="block text-gray-700 mb-2 font-medium">
        Last Name <span className="text-gray-400 text-sm">(Optional)</span>
      </label>
      <input
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800
                   placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-blue-600 
                   transition duration-300 shadow-sm"
        placeholder="Last Name"
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-gray-700 mb-2 font-medium">Email</label>
    <input
      type="email"
      required
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800
                 placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-blue-600 
                 transition duration-300 shadow-sm"
      placeholder="you@example.com"
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-gray-700 mb-2 font-medium">Message</label>
    <textarea
      rows="5"
      required
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800
                 placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-blue-600 
                 transition duration-300 shadow-sm"
      placeholder="Write your message..."
    ></textarea>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold
               shadow-md hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]
               transition duration-300"
  >
    Send Message
  </button>
</form>

        </div>

        {/* Contact Info Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Card */}
          <div
            className="group flex items-center gap-4 p-6 bg-transparent backdrop-blur-lg
                       rounded-xl shadow-md border border-white/20 
                       transition duration-500 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]"
          >
            <div className="p-3 bg-blue-600 text-white rounded-full shadow-lg group-hover:scale-110 transition">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Call Us</p>
              <p className="text-lg font-bold text-gray-900">+91 98765 43210</p>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="group flex items-center gap-4 p-6 bg-transparent backdrop-blur-lg
                       rounded-xl shadow-md border border-white/20 
                       transition duration-500 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]"
          >
            <div className="p-3 bg-blue-600 text-white rounded-full shadow-lg group-hover:scale-110 transition">
              <EnvelopeIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Email Us</p>
              <p className="text-lg font-bold text-gray-900">support@onealumunai.com</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
