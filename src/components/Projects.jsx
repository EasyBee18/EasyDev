import Images from '../assets/dev.png'
import Fashion from '../assets/fashionstyle.png'
import Dart from '../assets/dartcopy.png'
export default function Projects(){
    return(
        <div className="bg-black text-white py-20" id="project">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Work Done
                </h2>                  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                   <div className="bg-gray-800
                        px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-2xl font-bold bg-clip-text
                            bg-gradient-to-r from green-600 to-blue-400">
                               
                                <img src={Images} alt="" className='mt-8 w-180' />
                                <h3 className="text-2xl font-bold mb-2">
                                    Clone Dev Space
                                </h3>
                                <p className="text-gray-300 mb-4">HTML & CSS</p>
                                <a href="https://candid-peony-b62ae7.netlify.app/" className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='blank'>Netlify</a>
                            </div>
                            
                    </div>

                    <div className="bg-gray-800
                        px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-2xl font-bold bg-clip-text
                            bg-gradient-to-r from green-600 to-blue-400">
                               
                                <img src={Fashion} alt="" className='mt-8 w-180' />
                                <h3 className="text-2xl font-bold mb-2">
                                    Fashion Design
                                </h3>
                                <p className="text-gray-400 mb-4">REACT JS</p>
                                <a href="https://candid-peony-b62ae7.netlify.app/" className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='blank'>Netlify</a>
                            </div>
                            
                    </div>

                    <div className="bg-gray-800
                        px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-2xl font-bold bg-clip-text
                            bg-gradient-to-r from green-600 to-blue-400">
                               
                                <img src={Dart} alt="" className='mt-8 w-180' />
                                <h3 className="text-2xl font-bold mb-2">
                                    Dart
                                </h3>
                                <p className="text-gray-400 mb-4">HTML & CSS</p>
                                <a href="https://candid-peony-b62ae7.netlify.app/" className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='blank'>Netlify</a>
                            </div>
                            
                    </div>
                    
                </div>
            </div>
       </div>     
    );
}