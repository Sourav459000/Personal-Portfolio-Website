export default function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-20">
            {/* Left Half - Image */}
            <div className="flex-1 flex justify-center mt-16 md:mt-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-lg">
                    <img
                        src="/Sourav.jpg"
                        alt="Sourav Toshniwal"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Half - Text */}
            <div className="flex-1 text-center md:text-left mt-[-6rem] sm:mt-[-5rem] md:mt-0">
                <h1 className="text-xl md:text-[1.75rem] lg:text-4xl font-bold text-white">
                    Hi, I'm <span className="text-[#facc15]">Sourav Toshniwal</span>
                </h1>
                <p className="mt-2 sm:mt-3 md:mt-5 lg:mt-6 text-base md:text-lg lg:text-2xl text-gray-300 w-full lg:w-11/12 xl:w-3/4 mx-auto md:mx-0 text-center md:text-justify">
                    Passionate about building <span className="font-bold">Edge AI solutions</span> and crafting <span className="font-bold">elegant websites.</span>
                </p>
                {/* Download Resume Button */}
                <div className="mt-6">
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-[#facc15] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
