import { FaTractor, FaChartLine, FaUsers, FaUserGraduate, FaChalkboardTeacher, FaLeaf } from "react-icons/fa";
import { FaHandsHelping, FaChartBar, FaCloudSun, FaGlobeAsia } from "react-icons/fa";


export default function About() {
  return (
    <div className="text-gray-800 pt-8">
      {/* Our Story Section */}
      <section className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="relative max-w-3xl bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-8 shadow-lg z-10">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-green-900">Who are we?</h2>
          </div>
          <p className="text-green-800 leading-relaxed">
            We are <span className="font-semibold">AgroPal</span>, a visionary
            initiative committed to transforming agriculture into a practice
            that is not only productive but also sustainable and farmer-friendly.
            Rooted in the belief that farming should preserve natural resources
            while feeding the world, we combine forward-looking ideas with a
            deep respect for traditional agricultural values. Our team is driven
            by the vision of creating smarter farms that conserve water,
            improve productivity, and adapt seamlessly to diverse farming
            conditions. By blending innovation with empathy, we aim to build an
            ecosystem where farmers, regardless of their farm size or
            background, can thrive in a data-driven and environmentally
            responsible future.
          </p>
        </div>
        <div className="relative max-w-3xl bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-8 shadow-lg z-10">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-green-900">Why are we?</h2>
          </div>
          <p className="text-green-800 leading-relaxed">
            Agriculture today faces challenges that threaten its long-term
            viability: water scarcity, climate unpredictability, soil
            degradation, and heavy dependence on manual labor. Studies and
            field trials have shown that precise irrigation can{" "}
            <span className="font-semibold">reduce water wastage by 20–30%</span>,
            while optimized farming strategies can{" "}
            <span className="font-semibold">increase crop yields by 15–25%</span> —
            figures that underline the urgent need for change. Our purpose is to
            address these pressing issues by offering farmers knowledge, support,
            and innovation that reduce costs, enhance efficiency, and protect
            resources. We are here to ensure that agriculture is not only more
            productive in the present but also sustainable and resilient for
            generations to come.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="relative px-8 md:px-16 py-16 bg-green-100/50">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
        Our Mission & Vision
      </h2>

      <div className="flex flex-row sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <FaHandsHelping />,
            title: "Empower Farmers with Innovation",
            desc: "Bridge the gap between traditional practices and modern technology, making IoT and AI tools accessible to every farmer.",
          },
          {
            icon: <FaLeaf />,
            title: "Promote Sustainable Agriculture",
            desc: "Conserve natural resources by reducing water wastage by 20–30% and improving soil health through precision farming.",
          },
          {
            icon: <FaChartBar />,
            title: "Enhance Productivity & Profitability",
            desc: "Increase crop yields by 15–25% while lowering operational costs and minimizing dependency on manual labor.",
          },
          {
            icon: <FaCloudSun />,
            title: "Build Climate Resilience",
            desc: "Help farmers adapt to climate change, soil degradation, and unpredictable weather using data-driven insights.",
          },
          {
            icon: <FaGlobeAsia />,
            title: "Create an Inclusive Future",
            desc: "Design solutions that are scalable, affordable, and adaptable for farms of all sizes to ensure agriculture thrives for generations.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-md bg-white/30 backdrop-blur-lg border border-white/40 hover:shadow-xl transition"
          >
            <div className="flex justify-center text-green-700 text-3xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-xl text-center text-green-900 mb-2">{item.title}</h3>
            <p className="text-green-800 text-sm text-center leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Meet The Team Section */}
      <section id="team" className="px-8 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
          Meet The Team
        </h2>
        <div className="max-w-4xl flex flex-row justify-between mx-auto md:grid-cols-3 gap-8">
          {/* Team Member Card */}
          <div className="text-center p-4">
            <FaUserGraduate className="text-7xl text-gray-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Aman Gour</h3>
            <p className="text-green-700 text-sm font-medium">Creator</p>
            <p className="text-gray-600 text-sm mt-1">B.Tech, Medi-Caps University</p>
          </div>

          {/* Team Member Card */}
          <div className="text-center p-4">
            <FaUserGraduate className="text-7xl text-gray-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Anant Dosi</h3>
            <p className="text-green-700 text-sm font-medium">Co-Creator</p>
            <p className="text-gray-600 text-sm mt-1">B.Tech, Medi-Caps University</p>
          </div>
        </div>
      </section>
    </div>
  );
}