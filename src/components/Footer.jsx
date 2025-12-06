import { FaFacebook,FaLinkedin, FaGithub, FaTwitter  } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
                    <div className="flex-1 mb-4 md:mb-0"> 
                        <h3 className="text-2xl font-bold mb-6">EasyDev</h3>
                        <p className="text-gray-400">Frontend developer based in Nigeria, specializing in 
                            web and software development
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="flex items-center justify-center">
                            <input type="email" className="w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600
                            focus:outline-none focus:border-green-400" placeholder="Enter Email" />
                            <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r -lg">Subscribe</button>
                        </form>
                    </div>
                </div> 
                <div className="border-t border-gray-500 pt-4 flex flex-col md:flex-row
                    justify-between items-center">
                    <p className="text-gray-400">&copy;{new Date().getFullYear()} EasyDev. All rights reserved.</p>
                    <div className="flex space-x-4 my-4 md:my-8">
                        <a href="https://web.facebook.com/Harlarbe" className="text-gray-400 hover:text-white">  <FaFacebook size={25} /></a>
                        <a href="https://www.linkedin.com/in/isiaq-hanofi" className="text-gray-400 hover:text-white"><FaLinkedin size={25} /></a>
                        <a href="https://github.com/EasyBee18" className="text-gray-400 hover:text-white"><FaGithub size={25} /></a>
                        <a href="#"  className="text-gray-400 hover:text-white"><FaTwitter size={25} /></a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="" className="text-gray-400 hover:text-white">privacy</a>
                        <a href="" className="text-gray-400 hover:text-white">Terms of Services</a>
                    </div>
                </div>  
            </div>
        </footer>
    );
}