import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { elementsAPropos, personalInfo, pointsFortAccueil } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import { useLangue } from '../context/ContexteLangue';

function numeleroComplet(index) {
    return String(index + 1).padStart(3, '0');
}

function APropos() {
    const { t } = useLangue();
    return (
        <SectionAnimee
            id="a-propos"
            className="relative px-6 pt-16 pb-32 lg:px-8 lg:pt-24"
        >
            <div className="halo-blu -left-56 top-1/3 h-[38rem] w-[38rem] opacity-50" />
            <div className="halo-blu -right-40 -bottom-24 h-[34rem] w-[34rem] opacity-50" />

            <div className="relative mx-auto max-w-[1480px]">

                <TitreSection
                    etiquette={t('À propos')}
                    titre={t('Un profil technique, créatif et orienté résultat')}
                    description={t('Je combine une forte base en informatique, un sens du design soigné et une motivation réelle pour créer des expériences web modernes.')}
                />

                <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-16">

                    {/* Colonne gauche : lignes numérotées (001 → 006) avec séparateurs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div>
                            {elementsAPropos.map((element, index) => {
                                const Icone = element.icone;
                                return (
                                    <motion.article
                                        key={element.titre}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                                        whileHover={{ x: 6 }}
                                        className="group flex items-start gap-7 border-b border-white/10 py-8 last:border-b-0"
                                    >
                                        <span className="mt-1 text-3xl font-bold tracking-[-0.03em] text-brand/50 transition group-hover:text-brand sm:text-4xl">
                                            ({numeleroComplet(index)})
                                        </span>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                                                    {t(element.titre)}
                                                </h3>
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand transition group-hover:rotate-6 group-hover:border-brand/70">
                                                    <Icone />
                                                </div>
                                            </div>
                                            <p className="mt-2 text-base leading-7 text-white/70">
                                                {t(element.corps)}
                                            </p>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Colonne droite : grande carte de présentation avec portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="carte-verre-forte relative flex h-full flex-col overflow-hidden"
                    >
                        {/* Aperçu portrait : occupe toute la hauteur restante */}
                        <div className="relative min-h-[240px] w-full flex-1 lg:min-h-0">
                            <img
                                src={process.env.PUBLIC_URL + '/assets/Hache.png'}
                                alt={personalInfo.nom}
                                className="absolute inset-0 h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            {/* Pastille verre flottante "Mon profil" */}
                            <div className="carte-verre-forte absolute left-6 top-0.5 rounded-lg px-5 py-2.5 sm:top-12">
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                                    {t('Mon profil')}
                                </p>
                            </div>

                            {/* Pastille du titre */}
                            <div className="absolute bottom-6 left-1/2 w-[calc(100%-3rem)] -translate-x-1/2">
                                <p className="rounded-full border border-white/10 bg-black/50 px-5 py-2.5 text-center text-sm font-medium text-white backdrop-blur-md">
                                    {t(personalInfo.titre)}
                                </p>
                            </div>
                        </div>

                        {/* Contenu descriptif */}
                        <div className="flex flex-col items-start p-6 sm:p-8 lg:p-12">
                            <p className="text-xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-2xl lg:text-3xl">
                                {personalInfo.nom}
                            </p>

                            <p className="mt-4 text-sm leading-6 text-white/70 sm:mt-5 sm:text-base sm:leading-7">
                                {t(personalInfo.aPropos)}
                            </p>

                            <div className="mt-6 sm:mt-9">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-6 py-3.5 text-sm font-medium text-brand transition hover:border-brand/70 hover:bg-brand/20 sm:px-8 sm:py-4 sm:text-base"
                                >
                                    {t('Discuter d’un projet')} <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Puces verre façon "Buy / Sell / Explore" */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-5">
                    {pointsFortAccueil.map((pointFort) => (
                        <span
                            key={pointFort}
                            className="rounded-[60px] border border-brand/50 bg-black/[0.5] px-8 py-6 text-lg font-medium text-white backdrop-blur-[50px] transition hover:border-brand hover:text-brand sm:px-10"
                        >
{t(pointFort)}
                        </span>
                    ))}
                </div>

            </div>
        </SectionAnimee>
    );
}

export default APropos;