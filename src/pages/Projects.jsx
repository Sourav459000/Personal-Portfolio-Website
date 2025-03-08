import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Real-Time Video Surveillance",
        description: "AI-powered industrial lift monitoring system with 94% accuracy, detecting unauthorized entries even in low light.",
        tech: "Python, Machine Learning, OpenCV, Networking",
        hardware: "Jetson Orin Nano, CCTV Camera",
        github: "https://github.com/Sourav459000/Real-Time-Video-Surveillance",
        demo: null,
    },
    {
        title: "Edge-Enabled Smart Doorbell System",
        description: "Real-time facial recognition doorbell with 99% accuracy, sending instant email alerts with images.",
        tech: "Python, Edge Impulse",
        hardware: "Raspberry Pi 4, Webcam",
        github: "https://github.com/Sourav459000/Edge-Enabled-Smart-Doorbell-System",
        demo: null,
    },
    {
        title: "Touropedia – Tour Management System",
        description: "GUI-based tour planner with MySQL integration and intelligent destination recommendations.",
        tech: "Python, Tkinter, MySQL",
        github: "https://github.com/Sourav459000/touropedia",
        demo: null,
    },
    {
        title: "Food Menu App",
        description: "Swiggy-inspired food menu app with a dynamic UI, API integration, and smooth user experience.",
        tech: "React.js, Tailwind CSS",
        github: "https://github.com/Sourav459000/food-menu-app",
        demo: "https://food-menu-app-sourav-toshniwal.netlify.app/",
    },
    {
        title: "Java Projects",
        description: "Library Management & To-Do List applications using Java Swing with persistent storage.",
        tech: "Java, Swing, File Handling",
        github: "https://github.com/Sourav459000/Java-Projects/",
        demo: null,
    },
    {
        title: "Web Development Projects",
        description: "A collection of frontend projects like Netflix Clone, Tic-Tac-Toe, Weather App, and more.",
        tech: "HTML5, CSS3, JavaScript",
        github: "https://github.com/Sourav459000/Web-Development-Projects",
        demo: null,
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 xl:px-28 mt-12">
            <div className="max-w-6xl text-white text-center">
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15]">
                    Projects
                </h2>

                {/* Grid Layout for Projects */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* More Projects Button */}
                <a
                    href="https://github.com/Sourav459000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block bg-[#facc15] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition text-sm md:text-base"
                >
                    View More Projects
                </a>
            </div>
        </div>
    );
}

/* Reusable Project Card Component */
function ProjectCard({ project }) {
    return (
        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            {/* Project Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#facc15] mb-2">{project.title}</h3>

            {/* Project Description */}
            <p className="text-sm sm:text-base text-gray-300">{project.description}</p>

            {/* Tech Stack */}
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
                <span className="font-semibold">Tech Stack:</span> {project.tech}
            </p>

            {/* Hardware (if available) */}
            {project.hardware && (
                <p className="mt-1 text-xs sm:text-sm text-gray-400">
                    <span className="font-semibold">Hardware:</span> {project.hardware}
                </p>
            )}

            {/* Links */}
            <div className="mt-4 flex space-x-4 items-center justify-center">
                {/* GitHub Link */}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                    >
                        <FaGithub /> <span className="text-xs sm:text-sm">GitHub</span>
                    </a>
                )}

                {/* Live Demo Link */}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                    >
                        <FaExternalLinkAlt /> <span className="text-xs sm:text-sm">Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    );
}
