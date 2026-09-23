import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, detailsContact } from '../data/donneesPortfolio';

function Accueil() {
    const emailContact = detailsContact.find((d) => d.etiquette === 'Email')?.href || 'mailto:hachejoven@gmail.com';

    const reseauxSociaux = [
        { icone: <FaGithub />, href: 'https://github.com/Hachemmy/', etiquette: 'GitHub' },
        { icone: <FaLinkedin />, href: 'https://www.linkedin.com/in/hachemmy-jovenno-325149420/', etiquette: 'LinkedIn' },
        { icone: <FaFacebook />, href: 'https://www.facebook.com/hachemmyjovenno/', etiquette: 'Facebook' },
        { icone: <FaEnvelope />, href: emailContact, etiquette: 'Email' },
    ];

    const conteneurVariants = {
        cache: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.14, delayChildren: 0.15 },
        },
    };

    const elementVariants = {
        cache: { opacity: 0, y: 36, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section id="accueil" className="relative overflow-hidden px-6 pb-32 pt-36 lg:px-8 lg:pb-40 lg:pt-44">

            <div className="halo-blu -left-44 top-16 h-[46rem] w-[46rem] opacity-70" />
            <div className="halo-blu -right-56 top-1/4 h-[44rem] w-[44rem] opacity-60" />

            <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
                <motion.div
                    variants={conteneurVariants}
                    initial="cache"
                    animate="visible"
                >
                    <motion.p
                        variants={elementVariants}
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-brand"
                    >
                        Bonjour, je suis
                    </motion.p>

                    <motion.h1
                        variants={elementVariants}
                        className="font-aladin mt-8 text-4xl font-normal leading-[1.25] tracking-[0.06em] text-white sm:text-6xl sm:leading-[1.25] lg:text-[72px]"
                    >
                        Hachemmy Jovenno{' '}
                        <span
                            className="font-quantum text-brand block max-sm:text-[clamp(1.25rem,7.5vw,2.25rem)] max-sm:leading-[1.3] max-sm:tracking-[0.05em] sm:inline sm:tracking-[0.1em]"
                            style={{ textTransform: 'uppercase' }}
                        >
                            RAZAFINTIAMASY
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={elementVariants}
                        className="font-aladin mt-10 text-2xl font-normal leading-10 tracking-[0.05em] text-brand sm:text-3xl"
                    >
                        {personalInfo.titre}
                    </motion.p>

                    <motion.p
                        variants={elementVariants}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70"
                    >
                        {personalInfo.aPropos}
                    </motion.p>

                    <motion.div
                        variants={elementVariants}
                        className="mt-10 flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            to="/projets"
                            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-8 py-4 text-base font-medium text-brand transition hover:-translate-y-1 hover:border-brand/70 hover:bg-brand/20 sm:px-10 sm:py-5 sm:text-lg"
                        >
                            Voir mes projets <FaArrowRight />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-4 text-base font-medium text-black transition hover:-translate-y-1 hover:border-white/80 hover:bg-white/90 sm:px-10 sm:py-5 sm:text-lg"
                        >
                            Me contacter
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={elementVariants}
                        className="mt-10 flex flex-wrap justify-center gap-3"
                    >
                        {reseauxSociaux.map((reseau, index) => (
                            <motion.a
                                key={reseau.etiquette}
                                href={reseau.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={reseau.etiquette}
                                variants={elementVariants}
                                animate={{
                                    y: [0, -8, 0],
                                    transition: {
                                        duration: 3.2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 0.8 + index * 0.35,
                                    },
                                }}
                                whileHover={{ scale: 1.15 }}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand/50 hover:text-brand"
                            >
                                {reseau.icone}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Accueil;