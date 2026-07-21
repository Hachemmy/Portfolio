import { motion } from 'framer-motion';
import { parcours, experiencesProfessionnelles, formations } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';

function Parcours() {
    return (
        <SectionAnimee id="parcours" className="px-6 pt-16 pb-24 lg:px-8 lg:pt-20">
            <div className="mx-auto max-w-7xl">
                <TitreSection
                    etiquette="Expérience"
                    titre="Une progression orientée apprentissage, innovation et qualité"
                    description="Mon parcours se construit autour de projets concrets, d’une curiosité technique forte et d’une volonté constante d’aller plus loin."
                />

                <div className="mt-16 relative mx-auto max-w-4xl">
                    <div className="absolute left-4 top-0 h-full w-px bg-slate-800 sm:left-1/2 sm:-translate-x-1/2" />
                    <div className="space-y-10">
                        {(experiencesProfessionnelles && experiencesProfessionnelles.length > 0 ? experiencesProfessionnelles : parcours).map((element, index) => (
                            <motion.div
                                key={element.titre}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                                className={`relative flex ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                            >
                                <div className="ml-12 w-full max-w-xl rounded-[1.5rem] border border-slate-800/80 bg-slate-900/70 p-7 shadow-[0_0_40px_rgba(59,130,246,0.06)] sm:ml-0 sm:w-[calc(50%-1.5rem)]">
                                    <div className="absolute left-2 top-6 h-5 w-5 rounded-full border-4 border-sky-400 bg-slate-950 sm:left-1/2 sm:-translate-x-1/2" />
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{element.periode || element.date}</p>
                                    <h3 className="mt-3 text-xl font-semibold text-slate-50">{element.titre || element.poste}</h3>
                                    <p className="mt-2 text-sm font-medium text-slate-300">{element.entreprise || element.structure}</p>
                                    <p className="mt-4 text-sm leading-7 text-slate-400">{element.description || element.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {formations && formations.length > 0 && (
                    <div className="mt-24">
                        <TitreSection
                            etiquette="Formation"
                            titre="Un parcours académique solide et diversifié"
                            description="Des bases théoriques renforcées par des certifications et des expériences complémentaires."
                        />

                        <div className="mt-16 relative mx-auto max-w-4xl">
                            <div className="absolute left-4 top-0 h-full w-px bg-slate-800 sm:left-1/2 sm:-translate-x-1/2" />
                            <div className="space-y-10">
                                {formations.map((element, index) => (
                                    <motion.div
                                        key={element.titre}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                                        className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                                    >
                                        <div className="w-full sm:w-[calc(50%-1.5rem)] ml-0 sm:ml-12 max-w-xl rounded-[1.5rem] border border-slate-800/80 bg-slate-900/70 p-7 shadow-[0_0_40px_rgba(59,130,246,0.06)]">
                                            <div className="absolute left-4 sm:left-1/2 top-6 h-5 w-5 rounded-full border-4 border-sky-400 bg-slate-950 sm:-translate-x-1/2" />
                                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{element.periode || element.date}</p>
                                            <h3 className="mt-3 text-xl font-semibold text-slate-50">{element.titre || element.poste}</h3>
                                            <p className="mt-2 text-sm font-medium text-slate-300">{element.entreprise || element.structure}</p>
                                            <p className="mt-4 text-sm leading-7 text-slate-400">{element.description || element.details}</p>
                                        </div>
                                    </motion.div>

                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </SectionAnimee>
    );
}

export default Parcours;