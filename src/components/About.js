import AboutImg from '../assets/about.png';

export default function About () {
    const config = {
        line1: 'Welcome to R&H WebCraft – Innovating the Web, One Pixel at a Time.',
        line2: 'Founded in 2024, R&H WebCraft is a dynamic web development and content creation company built with a passion for transforming your digital vision into reality.',
        line3: 'We specialize in crafting cutting-edge websites that not only look great but also deliver exceptional performance and seamless user experiences.',
        line4: 'Our Approach: A website is more than just a digital presence—it’s a reflection of your brand, goals, and audience.',
        line5: 'Technologies We Use: HTML5, CSS3, JavaScript, ReactJS, PHP, and NestJS to ensure the best web experience.',
        line6: 'Our Mission: To craft websites that elevate your brand and drive business growth with a commitment to excellence and customer satisfaction.'
    };

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 py-32' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="About R&H WebCraft" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>
                        About Us
                    </h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                    <p className='pb-5'>{config.line4}</p>
                    <p className='pb-5'>{config.line5}</p>
                    <p className='pb-5'>{config.line6}</p>
                </div>
            </div>
        </section>
    );
}
