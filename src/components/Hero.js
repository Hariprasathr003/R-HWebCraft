import HeroImg from '../assets/hero.png';
import NaukriLogo from '../assets/naukri.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Your Vision, Our Craft - Full-stack Developer & Designer',
        social: {
            Naukri: 'https://www.naukri.com/mnjuser/profile?id=&altresid',
            Github: 'https://github.com/Hariprasathr003',
            linkedin: 'https://www.linkedin.com/in/hari-prasath-r-a28801246/'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Welcome to <span className='text-black'>R&H WebCraft</span><br/>
                    <span className='text-xl'>{config.subtitle}</span>
                </h1>
                <p className='text-2xl text-white mt-4'>
                    We specialize in creating exceptional websites, tailored to your needs. 
                    From design to development, we bring your ideas to life.
                </p>
                <div className='flex py-10'>
                    <a href={config.social.Naukri} className='pr-5 hover:text-white'>
                        <img src={NaukriLogo} alt="Naukri" width={40} />
                    </a>
                    <a href={config.social.Github} className='pr-5 hover:text-white'>
                        <AiOutlineGithub size={40}/>
                    </a>
                    <a href={config.social.linkedin} className='hover:text-white'>
                        <AiOutlineLinkedin size={40}/>
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="R&H WebCraft Hero" />
        </section>
    );
}
