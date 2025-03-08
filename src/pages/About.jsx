import { FaLaptopCode, FaDatabase, FaCloud, FaMicrochip, FaUniversity, FaServer, FaCode } from "react-icons/fa";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <div className="max-w-5xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl p-6 sm:p-8 xl:p-10 text-white">

                {/* About Section */}
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15] text-center">
                    About Me
                </h2>
                <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 text-center md:text-justify">
                    Curious by nature, I love exploring technology and solving real-world problems. Whether it’s AI, web development, or cloud computing, I enjoy learning, building, and pushing my limits.
                    <br /><br />
                    A strong believer in continuous growth, I’m always looking for new challenges and opportunities to create impactful solutions.
                </p>

                {/* Education Section */}
                <h2 className="mt-16 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15] text-center">
                    Education
                </h2>
                <div className="mt-6 border-l-4 border-[#facc15] pl-6">
                    <div className="mb-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2">
                            <FaUniversity className="text-[#facc15]" /> MIT ADT University
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-300">
                            Bachelor of Technology in Computer Science and Engineering
                            <br />
                            <span className="font-semibold">CGPA:</span> 8.53
                            <br />
                            <span className="font-semibold">2021 - 2025 (Present)</span>
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <h2 className="mt-16 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15] text-center">
                    Skills
                </h2>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 xl:gap-10 justify-center ml-[-1rem] sm:ml-0">
                    <SkillCard icon={<FaCode />} title="Programming" skills="Python, Java, JavaScript" />
                    <SkillCard icon={<FaLaptopCode />} title="Web Development" skills="React.js & Django" />
                    <SkillCard icon={<FaDatabase />} title="Databases" skills="MySQL, Basic MongoDB" />
                    <SkillCard icon={<FaCloud />} title="Cloud Computing" skills="AWS & Azure" />
                    <SkillCard icon={<FaServer />} title="Frontend & Styling" skills="HTML5, CSS3, Tailwind CSS" />
                    <SkillCard icon={<FaMicrochip />} title="AI & Edge Computing" skills="ML & Micro-processors" />
                </div>
            </div>
        </div>
    );
}

/* Reusable Skill Card Component */
function SkillCard({ icon, title, skills }) {
    return (
        <div className="flex flex-col items-center bg-gray-700 rounded-lg p-3 sm:p-4 xl:p-5 shadow-md w-32 xs:w-36 sm:w-40 md:w-36 lg:w-44 xl:w-48">
            <div className="text-lg xs:text-xl sm:text-2xl xl:text-3xl text-[#facc15]">{icon}</div>
            <h3 className="mt-2 text-xs xs:text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-center">
                {title}
            </h3>
            <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm xl:text-base text-gray-300 text-center">
                {skills}
            </p>
        </div>
    );
}
