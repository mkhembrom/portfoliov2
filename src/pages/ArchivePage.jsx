import React, { useState } from 'react'
import { TbExternalLink } from 'react-icons/tb'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BiSolidFolder } from 'react-icons/bi'

const ArchivePage = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        rootMargin: '-100px',
        threshold: 0,
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    const items = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    }

    const [archive, setArchive] = useState([
        { id: 1, year: 2021, title: "Weather app", madeAt: "devchallanges", builtWith: "react, styled-component ", link: "#" },
        { id: 2, year: 2021, title: "Random Quote Generator", madeAt: "devchallanges", builtWith: "Javascript", link: "https://mkquote.netlify.app/" },
        { id: 3, year: 2021, title: "Windbnb", madeAt: "devchallanges", builtWith: "react", link: "https://mkhembrom.github.io/windbnb/" },
        { id: 4, year: 2022, title: "Grandiose Art Gallary", madeAt: "Luxeveda", builtWith: "vue . gridsome . wordpress", link: "https://grandioseart.com/" },
        { id: 5, year: 2022, title: "Buymyev", madeAt: "Luxeveda", builtWith: "vue . nuxt . stripe", link: "https://indibike.in/" },
        { id: 6, year: 2022, title: "Cat Wiki", madeAt: "devchallanges", builtWith: "react . ", link: "https://catmk.netlify.app/" },
        { id: 7, year: 2022, title: "Todo", madeAt: "devchallanges", builtWith: "react . redux ", link: "https://mkstodo.netlify.app/" },
        { id: 8, year: 2022, title: "404 Not Found", madeAt: "devchallanges", builtWith: "tailwindcss", link: "https://mkhembrom.github.io/404-NOT_FOUND/" },
        { id: 9, year: 2023, title: "Message Box", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/10892" },
        { id: 10, year: 2023, title: "News Letter List", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11025" },
        { id: 11, year: 2023, title: "Order Place", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11225" },
        { id: 12, year: 2023, title: "Order Place 2", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11331" },
        { id: 13, year: 2023, title: "Pending Invitation", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11452" },
        { id: 14, year: 2023, title: "Sign In Form 2", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11570" },
        { id: 15, year: 2023, title: "Statistics 2", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11629" },
        { id: 16, year: 2023, title: "Subscribe 2", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/11712" },
        { id: 17, year: 2023, title: "Image Uploader", madeAt: "devchallanges", builtWith: "react, cloudinary, tailwindcss", link: "https://mkuploads.netlify.app/" },
        { id: 18, year: 2023, title: "Video Player 2", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/12009" },
        { id: 19, year: 2023, title: "Updates Card", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/12249" },
        { id: 20, year: 2023, title: "Dashboard Ui", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/12311" },
        { id: 21, year: 2023, title: "Links Section 2", madeAt: "icodethis", builtWith: "tailwindcss", link: "https://icodethis.com/submissions/12405" },
        { id: 22, year: 2021, title: "Weather App (old)", madeAt: "_", builtWith: "react", link: "https://vigilant-wright-d74474.netlify.app/" },
        { id: 23, year: 2023, title: "Pixel Gallery", madeAt: "_", builtWith: "react, api", link: "https://mkpixels.netlify.app/" },
        { id: 24, year: 2023, title: "Online Resume", madeAt: "_", builtWith: "Html, Css, Javascript", link: "https://mkhembrom.github.io/online_resume/" },
        { id: 25, year: 2022, title: "Url Shortened", madeAt: "_", builtWith: "Next.js", link: "https://shorturl-theta.vercel.app/" },
    ])


    return (
        <div className='min-h-screen h-full w-full relative z-10'>
            <div className='z-20 max-w-full md:max-w-[1200px] w-full mx-auto backdrop-blur-md relative px-4'>
                <Link to={'/'} className='text-sm absolute top-20 flex space-x-2 items-center cursor-pointer text-[#849DC9] dark:text-[#CDD6F7] group'><HiArrowLongLeft className='mr-2 group-hover:-translate-x-2 group-hover:text-blue-600 dark:group-hover:text-[#FF0063]' size={20} /> Home page</Link>
                <h1 className='pt-40 mb-10 text-6xl font-semibold text-[#849DC9] dark:text-[#CDD6F7]'>Archive </h1>
                <p className='text-blue-600 dark:text-[#FF0063] leading-6 tracking-wide font-normal text-lg'>A big list of things I’ve worked on</p>

                <div className='hidden md:flex items-start justify-center w-full mt-10 pb-20'>
                    <table ref={ref} className=" table-auto w-full">
                        <thead className=' my-4'>
                            <tr className='text-left h-10 text-slate-400'>
                                <th className='px-4 '>Year</th>
                                <th>Title</th>
                                <th className=''>Made at</th>
                                <th className=''>Built with</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <AnimatePresence>
                            <motion.tbody

                                variants={container}
                                initial="hidden"
                                animate={inView ? "show" : "hidden"}
                            >
                                {


                                    archive.sort((a, b) => a.year <= b.year ? 1 : -1).map((item) => (
                                        <motion.tr variants={items} key={item.id} className='h-14 hover:bg-[#dce3ec]  dark:hover:bg-[#102340] group cursor-pointer'>
                                            <td className='px-4 font-bold text-blue-600 dark:text-[#FF0063]'>{item.year}</td>
                                            <td className='font-bold text-[#849DC9] dark:text-[#CDD6F7]'>{item.title}</td>
                                            <td className='text-sm text-[#849DC9] dark:text-[#CDD6F7]'>{item.madeAt}</td>
                                            <td className='text-sm text-[#849DC9] dark:text-[#CDD6F7]'>{item.builtWith}</td>
                                            <td className='text-[#849DC9] dark:text-[#CDD6F7] transition-colors hover:text-blue-600 hover:dark:text-[#FF0063]'>
                                                <a href={item.link} target='_blank'>
                                                    <TbExternalLink size={20} />
                                                </a>
                                            </td>

                                        </motion.tr>
                                    ))
                                }

                            </motion.tbody>
                        </AnimatePresence>
                    </table>
                </div>

                <div className='grid md:hidden grid-cols-2 sm:grid-cols-3 gap-4 mt-10 pb-20'>

                    {
                        archive.sort((a, b) => (a.year <= b.year && a.id < b.id) ? 1 : -1).map((item) => (
                            <a href={item.link} key={item.id} className='flex flex-col items-start justify-start p-2 w-full h-32 border-2 border-[#849DC9] dark:border-[#CDD6F7] rounded-md '>
                                <div className='flex items-center justify-between w-full'>
                                    <BiSolidFolder className='text-[#849DC9] dark:text-[#CDD6F7] text-2xl' />
                                    <TbExternalLink className='text-blue-600 dark:text-[#FF0063] text-2xl' />
                                </div>
                                <p className='text-sm h-full text-[#849DC9] dark:text-[#CDD6F7] py-2'>{item.title}</p>
                                <p className='text-sm text-blue-600 dark:text-[#FF0063]'>{item.year}</p>
                            </a>
                        ))
                    }

                </div>




            </div>
        </div >

    )
}

export default ArchivePage