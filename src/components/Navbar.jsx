export default function Navbar(){
    return(
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 transform transition-transform duration-300 hover:scale-105">EasyDev</h1>
                <div className="space-x-8 hidden md:inline">
                    <a href="#home"className="hover:text-gray-300 text-xl">Home</a>
                    <a href="#about"className="hover:text-gray-400 text-xl">About Us</a>
                    <a href="#services"className="hover:text-gray-400 text-xl">Services</a>
                    <a href="#project"className="hover:text-gray-400 text-xl">Projects</a>
                    <a href="#contact"className="hover:text-gray-400 text-xl">Contact Us</a>
                </div>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline hidden
                px-4 py-2 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105">Engage Me</button>
            </div>
        </nav>
    );
}