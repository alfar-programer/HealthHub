import React from 'react'
import { heroData } from '../constant/index'

const Hero = () => {
  return (
    <section className='hero'>
    <div className='container flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-12 w-full mx-auto px-5 md:px-10 py-16 md:py-24'>

        {/* left side */}
        <div className='hero-left justify-between align-middle flex flex-col w-full md:w-1/2 md:max-w-[50%]'>
            <div className='hero-left-title'>
              <h1 className='text-9xl md:text-7xl font-extrabold leading-tight tracking-tight'>صحتك في جيبك</h1>
            </div> 
            <div className='hero-left-description mt-4 space-y-4'>
                <h2 className='text-4xl md:text-4.5xl font-semibold text-white/90'>Your health, one click away</h2>
                <p className='text-white/80 max-w-2xl text-2xl'>Connect AI-powered health insights, preventive care, and unified medical records in one intelligent platform designed for your wellbeing.</p>
                <p className='text-white/70 max-w-2xl text-2xl'>منصة ذكية تجمع بين تحليل الذكاء الاصطناعي والرعاية الوقائية والسجلات الطبية الموحدة لصحتك</p>
            </div>
            <div className='mt-6 flex flex-wrap items-center gap-3'>
                <button className='inline-flex items-center gap-2 rounded-xl bg-white text-black font-semibold px-6 py-3 shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-100 transition'>Get Started</button>
                <button className='inline-flex items-center gap-2 rounded-xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition'>Learn more</button>
            </div>

            <div className='hero-stats mt-10 grid grid-cols-3 gap-6 max-w-md'>
                {heroData.map((item, index) => (    
                    <div key={index} className='stat-item text-center'>
                        <h2 className='stat-number text-2xl md:text-3xl font-bold'>{item.Numb}</h2>
                        <p className='stat-description text-white/70 text-sm md:text-base'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* right side 3D/visual mock */}
        <div className='hero-right w-full md:w-1/2 md:max-w-[50%]'>
          
           
        </div>

    </div>
    
</section>
  )
}

export default Hero