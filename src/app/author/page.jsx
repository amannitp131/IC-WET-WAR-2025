"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const registrationFees = [
  { label: 'Students/Research scholars', value: 'Rs. 5000 / USD 100' },
  { label: 'Academician/Industry Professionals', value: 'Rs. 9000 / USD 200' },
  { label: 'Spouse', value: 'Rs. 4500 / USD 100' }
];

const sponsors = [
  { label: 'Bronze', value: '25000' },
  { label: 'Silver', value: '50000' },
  { label: 'Gold', value: '100000' },
  { label: 'Diamond', value: '200000 and above' }
];

const majorThemes = [
  'Wetlands and Sustainable Development',
  'Water resources and sustainable development',
  'Climate change impacts on wetlands and water resources',
  'Water quality monitoring, modelling and pollution remediation techniques',
  'Integrated management plan for wetlands',
  'Modelling of wetlands and water resources using AI, ML, and other soft computing techniques.',
  'Integrated Water Resources Management (IWRM) for Sustainable Development',
  'Wetlands as Nature Based Solutions',
  'Wetlands and water resources in Architecture and Planning'
];

const importantDates = [
  { label: 'Abstract submission:', value: '30th June 2025' },
  { label: 'Abstract acceptance:', value: '15th July 2025' },
  { label: 'Full length paper:', value: '30th August 2025' },
  { label: 'Acceptance/Rejection:', value: '15th September 2025' },
  { label: 'Final submission:', value: '30th September 2025' },
  { label: 'Early Birds Registration [Avails 10% discount]:', value: '15th October, 2025', highlight: true },
  { label: 'Registration(Full register):', value: '15th November 2025' }
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/author', label: 'Author Section' },
  { href: '/people', label: 'Key People' },
  { href: '/register', label: 'Registration' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Page = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #b3e0fc 0%, #5ac8fa 100%)",
          color: "#0d223a",
        }}
        className="relative w-screen min-h-screen  shadow-xl overflow-x-hidden flex flex-col"
      >
        <Navbar/>
        {/* Main Content */}
        <div
          style={{
            background: "rgba(179,224,252,0.85)", // light sky blue background
            color: "#0d223a",
          }}
          className="w-screen mx-auto p-6 pt-28  shadow-xl flex-1 flex flex-col"
        >
          {/* Conference Introduction */}
          <section className="mb-10">
            <h1
              style={{ color: "#0288d1" }}
              className="text-4xl font-bold mb-4 text-center decoration-[#64b5f6] font-sans"
            >
              International Conference WET-WAR 2025
            </h1>
            <p
              style={{ color: "#174366" }}
              className="text-base leading-7 font-serif"
            >
              Wetland ecosystems and water resources are among the most productive and biodiversity-rich environments on Earth. Organizing the first-ever conference on wetland ecosystems for sustainable development is a significant step in addressing both local and global environmental challenges such as habitat loss, climate change, and water scarcity. This conference will provide a unique platform for experts, policymakers, researchers, and local communities to come together and share knowledge, collaborate on conservation strategies, and develop solutions for safeguarding wetlands and water resources.
            </p>
          </section>

          {/* Major Themes */}
          <section>
            <h2
              style={{ color: "#0288d1" }}
              className="text-4xl font-bold mb-4 text-center decoration-[#64b5f6] font-sans"
            >
              Major Themes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {majorThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="rounded-lg shadow-sm flex items-center justify-center text-center h-30 w-full min-h-[96px] min-w-[180px] max-w-full font-medium font-serif bg-gradient-to-br from-sky-200 to-sky-100 border border-sky-300"
                  style={{
                    color: "#1565c0",
                    fontWeight: 600,
                    fontSize: "1.08rem",
                    letterSpacing: "0.5px"
                  }}
                >
                  <span className="px-2">{theme}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Important Dates */}
          <section
            style={{
              background: "rgba(90,200,250,0.18)",
              border: "1.5px solid #4fc3f7",
              color: "#0d223a",
            }}
            className="my-12 rounded-2xl shadow-xl p-4 sm:p-8 backdrop-blur-md overflow-x-auto"
          >
            <h2
              style={{ color: "#0288d1", borderBottom: "4px solid #4fc3f7" }}
              className="text-2xl sm:text-3xl font-extrabold inline-block mb-6 pb-2 tracking-wide font-sans"
            >
              Important Dates
            </h2>
            {/* Responsive: Table on md+, stacked on small screens */}
            <div className="w-full">
              <table className="hidden sm:table w-full min-w-[340px] text-base sm:text-lg font-mono">
                <tbody>
                  {importantDates.map((item, idx) => (
                    <tr
                      key={idx}
                      style={{ color: "#0d223a" }}
                      className="transition-all duration-300 hover:bg-[#b3e0fc]/60 rounded-lg"
                    >
                      <td
                        className={`py-3 px-2 sm:px-4 font-semibold ${
                          item.highlight
                            ? "bg-gradient-to-r from-[#00e676] to-[#1976d2] bg-clip-text text-transparent"
                            : ""
                        } font-sans`}
                        style={
                          item.highlight
                            ? {
                                background:
                                  "linear-gradient(to right, #00e676, #1976d2)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                              }
                            : { color: "#0277bd" }
                        }
                      >
                        {item.label}
                      </td>
                      <td
                        className="py-3 px-2 sm:px-4 text-right font-medium font-mono"
                        style={{ color: "#174366" }}
                      >
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Stacked for small screens */}
              <div className="sm:hidden flex flex-col gap-4">
                {importantDates.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(90,200,250,0.13)",
                      color: "#0d223a",
                    }}
                    className="rounded-lg px-4 py-3 flex flex-col shadow transition-all duration-300 font-mono"
                  >
                    <span
                      className={`font-semibold ${
                        item.highlight
                          ? "bg-gradient-to-r from-[#00e676] to-[#1976d2] bg-clip-text text-transparent"
                          : ""
                      } font-sans`}
                      style={
                        item.highlight
                          ? {
                              background:
                                "linear-gradient(to right, #00e676, #1976d2)",
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }
                          : { color: "#0277bd" }
                      }
                    >
                      {item.label}
                    </span>
                    <span
                      className="font-medium mt-1 font-mono"
                      style={{ color: "#174366" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Buttons for submissions */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <button
              style={{ background: "#0288d1", color: "#fff" }}
              className="hover:bg-[#0277bd] font-semibold px-6 py-2 rounded-lg shadow-md transition"
              onClick={() => window.open('#', '_blank')}
            >
              Abstract Submission
            </button>
            <button
              style={{ background: "#0288d1", color: "#fff" }}
              className="hover:bg-[#0277bd] font-semibold px-6 py-2 rounded-lg shadow-md transition"
              onClick={() => window.open('#', '_blank')}
            >
              Paper Submission
            </button>
          </div>

          {/* Registration Fee Details */}
          <section className="mb-10">
            <h2 style={{ color: "#0288d1" }} className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#0288d1" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
              </svg>
              Registration Fee <span className="text-xs font-normal" style={{ color: "#174366" }}>(Free fooding + Inclusive GST (18%))</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {registrationFees.map((fee, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(90,200,250,0.18)",
                    border: "1.5px solid #4fc3f7",
                    color: "#0d223a",
                  }}
                  className="rounded-xl shadow-lg p-5 flex flex-col items-center justify-center transition-transform hover:scale-105"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#0288d1" }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" />
                    </svg>
                    <span className="font-semibold text-lg" style={{ color: "#0277bd" }}>{fee.label}</span>
                  </div>
                  <div className="text-xl font-bold" style={{ color: "#174366" }}>{fee.value}</div>
                </div>
              ))}
            </div>
            
          </section>
          
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Page;