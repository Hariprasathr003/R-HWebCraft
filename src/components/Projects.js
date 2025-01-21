import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects: [
            {
                name: 'Ecommerce Website',
                image: websiteImg1,
                description: 'A fully functional Ecommerce Website built with MERN Stack.',
                link: 'https://hariprasathr003.github.io/123wallpapersdecors/'
            },
            {
                name: 'Food Ecommerce Website',
                image: websiteImg2,
                description: 'Food Ecommerce platform similar to Swiggy, built with Angular & .Net.',
                link: 'https://hariprasathr003.github.io/ecommercesite/'
            },
            {
                name: 'Blog Website',
                image: websiteImg3,
                description: 'A basic Blog website built with Next JS and MongoDB.',
                link: 'https://aquawaterproofing.in/'
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>OUR Templates</h1>
                    <p>Explore our top website templates! These are some of our best works built with modern technologies such as React, MERN stack, Angular, and more. Check them out and see how they can be customized for your needs.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative'>
                            <img className='h-[200px] w-[500px] object-cover' src={project.image} alt={project.name} />
                            <div className='absolute top-0 left-0 right-0 bottom-0 bg-secondary opacity-0 hover:opacity-80 duration-300'>
                                <div className='flex flex-col justify-center h-full'>
                                    <p className='text-center px-5 py-5 text-xl font-bold'>{project.name}</p>
                                    <p className='text-center px-5 py-2'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a className='btn' target='_blank' rel="noopener noreferrer" href={project.link}>View Template</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
