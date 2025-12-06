import { useState, useEffect } from 'react'
import Heroimage from '../assets/mejepeg.jpeg'
import Resume from '../assets/resume.pdf'

export default function Header(){
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        function calcGreeting(){
            const hour = new Date().getHours()
            if(hour >= 1 && hour < 12) return 'Good morning'
            if(hour >= 12 && hour < 17) return 'Good afternoon'
            if(hour >= 17 || hour < 1) return 'Good evening'
        }

        setGreeting(calcGreeting())
        const timer = setInterval(() => setGreeting(calcGreeting()), 60 * 1000) // update every minute
        return () => clearInterval(timer)
    }, [])

    return(
        <header className='bg-black text-white text-center py-16' id='home'>
            <img src={Heroimage} alt="" 
            className='mx-auto mb-8 h-60 w-60 border border-4 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
            {/* Time based greeting - displays: "Hello, Good morning/afternoon/evening" based on visitor's local time */}
            <p className='text-2xl text-gray-300 mb-4 '>Hello!, {greeting}</p>
            <h2 className='text-4xl font-bold'>I'm
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Hanafi Ishaq </span> 
                 ,Frontend developer
            </h2>
            <p className='mt-4 text-lg text-gray-300'>I specialize in building modern responsive and user friendly applications.</p>
            <div className='mt-8 space-x-4'>
                <a href='#contact' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
                 px-4 py-2 rounded-full flex-between ' aria-label="Engage with me" title="Engage with me">Engage Me</a>
                <a href={Resume} className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline 
                transform transition-transform duration-300 hover: scale-105 px-4 py-2 rounded-full flex-between' target="_blank" rel="noopener noreferrer" aria-label="Message me on WhatsApp" title="View my Resume">Resume</a>
            </div>
        </header>
    );
}