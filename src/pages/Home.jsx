import { FaTint, FaChartLine, FaBug, FaBell, FaFlask, FaMobileAlt, FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-gray-800 pt-8">
        {/* Hero Section */}
        <section className="relative px-8 md:px-16 py-12 flex items-center justify-start overflow-hidden">
            {/* Background Image with opacity */}
            <img
                src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1974&auto=format&fit=crop"
                alt="Smart Farming"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* Green overlay for blending */}
            <div className="absolute inset-0 bg-green-200/60"></div>

            {/* Text Content */}
            <div className="relative max-w-xl space-y-6 text-left z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-green-900">
                Revolutionizing Agriculture with Smart Technology
                </h1>
                <p className="text-lg text-green-800">
                AgroPal integrates IoT and Machine Learning to optimize irrigation,
                improve crop yields, and make farming sustainable.
                </p>
                <div className="flex space-x-4">
                <a
                    href="/services"
                    className="px-6 py-3 rounded-full font-semibold text-green-900 
                            bg-white/30 backdrop-blur-md border border-white/50 
                            hover:bg-white/40 transition shadow-lg"
                >
                    Get Started
                </a>
                <a
                    href="/about"
                    className="px-6 py-3 rounded-full font-semibold text-green-900 
                            bg-white/30 backdrop-blur-md border border-white/50 
                            hover:bg-white/40 transition shadow-lg"
                >
                    Learn More
                </a>
                </div>
            </div>
        </section>


        {/* Features Section */}
        <section id="features" className="px-8 md:px-16 py-12 bg-green-100/50">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
            Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { icon: <FaTint />, title: "Smart Irrigation", desc: "Automated watering using real-time soil and weather data, reducing water waste by 30-50%." },
                { icon: <FaChartLine />, title: "Crop Prediction", desc: "ML algorithms analyze data to predict crop yields and optimize planting strategies." },
                { icon: <FaBug />, title: "Disease Detection", desc: "AI-powered image processing detects diseases & pests early with timely warnings." },
                { icon: <FaBell />, title: "Activity Reminders", desc: "Automated alerts for planting, fertilizing, and harvesting at optimal times." },
                { icon: <FaFlask />, title: "Fertilizer Optimization", desc: "Recommends correct fertilizer type and amount for soil health & crop growth." },
                { icon: <FaMobileAlt />, title: "Mobile Access", desc: "Monitor and control your farm from anywhere via our mobile app." },
            ].map((f, idx) => (
                <div
                key={idx}
                className="p-6 rounded-2xl shadow-md bg-white/40 backdrop-blur-lg border border-white/50 hover:shadow-xl transition"
                >
                <div className="text-green-600 text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-700 text-sm">{f.desc}</p>
                </div>
            ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section
        id="benefits"
        className="relative px-8 md:px-16 py-16 flex items-center justify-start overflow-hidden"
        >
        {/* Background Image with opacity */}
        <img
            src="https://images.unsplash.com/photo-1711900177029-93798ef45bb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy Farmer"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Green overlay for blending */}
        <div className="absolute inset-0 bg-green-200/60"></div>

        {/* Text Content */}
        <div className="relative max-w-xl space-y-6 text-left z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Benefits for Farmers
            </h2>
            <ul className="space-y-3 text-green-800 font-medium">
            {[
                "Reduce water wastage by 20-30% through precise irrigation",
                "Increase crop productivity by 15-25% with optimal conditions",
                "Lower operational costs by reducing labor dependency",
                "Prevent over-irrigation and soil degradation",
                "Gain technological literacy with advanced tools",
                "Adaptable to diverse farm sizes and crop types",
            ].map((b, idx) => (
                <li key={idx} className="flex items-start">
                <FaCheckCircle className="text-green-700 mt-1 mr-2" />
                {b}
                </li>
            ))}
            </ul>
        </div>
        </section>

    </div>
  );
}
