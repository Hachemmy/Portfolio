
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projets } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';

function Projets() {
    return (
        <SectionAnimee id="projets" className="px-6 pt-16 pb-24 lg:px-8 lg:pt-20">
            <div className="mx-auto max-w-7xl">
                <TitreSection
                    etiquette="Projets"
                    titre="Des réalisations à la fois techniques et visuellement raffinées"
                    description="Chaque projet reflète une approche soignée du détail, du responsive et de l’expérience utilisateur."
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {projets.map((projet, index) => (
                        <motion.article
                            key={projet.titre}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/70 shadow-[0_0_50px_rgba(59,130,246,0.08)]"
                        >
                            <img src={projet.image} alt={projet.titre} className="h-56 w-full object-cover" />
                            <div className="p-7">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-semibold text-slate-50">{projet.titre}</h3>
                                    <a href={projet.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 p-3 text-slate-300 transition hover:border-sky-400 hover:text-sky-300">
                                        <FaGithub />
                                    </a>
                                </div>
                                <p className="mt-4 text-sm leading-7 text-slate-400">{projet.description}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {projet.technologies.map((technologie) => (
                                        <span key={technologie} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
                                            {technologie}
                                        </span>
                                    ))}
                                </div>
                                {projet.telecharger ? (
                                    <a
                                        href={projet.demo}
                                        download
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                                    >
                                        Télécharger le projet <FaArrowRight />
                                    </a>
                                ) : (
                                    <a
                                        href={projet.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                                    >
                                        Voir la démo <FaArrowRight />
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </SectionAnimee>
    );
}

export default Projets;

