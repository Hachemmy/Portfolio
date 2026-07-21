
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { elementsAPropos, personalInfo } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';

function APropos() {
    return (
        <SectionAnimee id="a-propos" className="flex min-h-screen items-center px-6 py-16 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <TitreSection
                    etiquette="À propos"
                    titre="Un profil technique, créatif et orienté résultat"
                    description="Je combine une forte base en informatique, un sens du design soigné et une motivation réelle pour créer des expériences web modernes."
                />

                <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex flex-col justify-center rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 shadow-[0_0_60px_rgba(59,130,246,0.08)]"
                    >
                        <p className="text-lg leading-8 text-slate-400">{personalInfo.aPropos}</p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-5 py-3 font-medium text-sky-300 transition hover:bg-sky-500/20"
                        >
                            Discuter d’un projet <FaArrowRight />
                        </a>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {elementsAPropos.map((element, index) => {
                            const Icone = element.icone;
                            return (
                                <motion.article
                                    key={element.titre}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="rounded-[1.4rem] border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_0_40px_rgba(59,130,246,0.05)]"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">
                                        <Icone />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-slate-50">{element.titre}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{element.corps}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionAnimee>
    );
}

export default APropos;

