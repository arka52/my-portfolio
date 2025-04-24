"use client"
import { motion } from 'framer-motion';

export const Contact = () => {
    return(
        <section id='contact' className='py-32 text-white max-w-[1200px] mx-auto px-4'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap16'
            >
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-gray-300'
                    >
                        Get in <span className='text-gray-500'>Touch</span>

                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-8 rounded-2xl space-y-8'
                    >
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Phone</p>
                            <a
                                 href="tel:+91 8101038813"
                                 className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                                 >
                                    +91 8101038813
                                    <span className='text-gray-500'>↗</span>
                                 </a>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Email</p>
                            <a
                                 href="mailto:arka7751@gmail.com"
                                 className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                                 >
                                    arka7751@gmail.com
                                    <span className='text-gray-500'>↗</span>
                                 </a>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Office</p>
                            <address className='text-xl not-italic leading-relaxed'>
                                Nabadwip,Nadia, <br />
                                Nadia, West Bengal, <br />
                                India - 741302
                            </address>
                        </div>

                        {/* <motion.div
                            initial={{ opacity: 0, x: 20 }} 
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
                        >
                            <iframe
                            src='https://www.google.co.in/maps/@23.4206425,88.3456035,13.25z?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D'
                            width="100%"
                            height="100%"
                            style={{ border: 0 }} 
                            allowFullScreen
                            loading="lazy"
                            >
                            </iframe>

                        </motion.div> */}

                    </motion.div>
                </div>
                
            </motion.div>
        </section>
    )
}