import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';
import {
    parcours,
    experiencesProfessionnelles,
    formations,
} from '../data/donneesPortfolio';

import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import { useLangue } from '../context/ContexteLangue';

function Parcours() {
    const { t } = useLangue();

    const experiences =
        experiencesProfessionnelles && experiencesProfessionnelles.length > 0
            ? experiencesProfessionnelles
            : parcours;


    return (
        <SectionAnimee
            id="parcours"
            className="relative px-6 pt-16 pb-28 lg:px-8 lg:pt-20"
        >
            <div className="halo-blu -left-44 top-1/3 h-[32rem] w-[32rem] opacity-45" />

            <div className="relative mx-auto max-w-[1480px]">

                <TitreSection
                    etiquette={t('Expérience')}
                    titre={t('Une progression orientée apprentissage, innovation et qualité')}
                    description={t('Mon parcours se construit autour de projets concrets, d’une curiosité technique forte et d’une volonté constante d’aller plus loin.')}
                />


                {/* EXPERIENCES */}
                <div className="relative mx-auto mt-16 max-w-4xl">

                    <motion.div
                        className="absolute inset-y-0 left-4 w-px origin-top bg-gradient-to-b from-brand/70 via-brand/30 to-white/5 sm:left-1/2 sm:-translate-x-1/2"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.08 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    />

                    <div className="space-y-12">

                        {experiences.map((element, index) => {
                            const aGauche = index % 2 === 0;
                            const libelle =
                                element.titre || element.poste;
                            const structure =
                                element.entreprise || element.structure;
                            const description =
                                element.description || element.details;

                            return (
                                <motion.div
                                    key={
                                        element.titre ||
                                        element.poste ||
                                        index
                                    }
                                    initial={{ opacity: 0, x: aGauche ? -60 : 60, y: 24 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`
                                        relative flex
                                        ${aGauche
                                            ? 'sm:justify-start'
                                            : 'sm:justify-end'
                                        }
                                    `}
                                >

                                    <motion.div
                                        className="absolute left-3 top-7 flex h-5 w-5 items-center justify-center sm:left-1/2 sm:-translate-x-1/2"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.08 + 0.15,
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 15,
                                        }}
                                    >
                                        <span className="absolute h-10 w-10 animate-pulse rounded-full border border-brand/40" />
                                        <span className="h-3 w-3 rounded-full bg-brand shadow-[0_0_14px_rgba(174,208,252,0.9)]" />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                        className="carte-verre-forte group relative ml-12 w-full max-w-xl overflow-hidden rounded-[30px] p-7 transition-shadow duration-300 hover:shadow-[0_24px_70px_-24px_rgba(174,208,252,0.45)] sm:ml-0 sm:w-[calc(50%_-_1.5rem)]"
                                    >
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                                        <span className="pointer-events-none absolute right-6 top-4 text-6xl font-black leading-none tracking-[-0.04em] text-white/[0.04] transition-colors duration-300 group-hover:text-brand/10">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <span className="relative inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                                            {element.periode || element.date}
                                        </span>

                                        <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
                                            {t(libelle)}
                                        </h3>

                                        {structure && (
                                            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white/60">
                                                <FaBuilding className="shrink-0 text-brand" />
                                                {t(structure)}
                                            </p>
                                        )}

                                        {description && (
                                            <p className="mt-4 text-sm leading-7 text-white/70">
                                                {t(description)}
                                            </p>
                                        )}

                                    </motion.div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>



                {/* FORMATIONS */}

                {
                    formations &&
                    formations.length > 0 && (

                        <div className="mt-24">

                            <TitreSection
                                etiquette={t('Formation')}
                                titre={t('Un parcours académique solide et diversifié')}
                                description={t('Des bases théoriques renforcées par des certifications et des expériences complémentaires.')}
                            />

                            <div className="relative mx-auto mt-16 max-w-4xl">

                                <motion.div
                                    className="absolute inset-y-0 left-4 w-px origin-top bg-gradient-to-b from-brand/70 via-brand/30 to-white/5 sm:left-1/2 sm:-translate-x-1/2"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true, amount: 0.08 }}
                                    transition={{ duration: 1.2, ease: 'easeOut' }}
                                />

                                <div className="space-y-12">

                                    {formations.map((element, index) => {
                                        const aGauche = index % 2 === 0;
                                        return (
                                            <motion.div
                                                key={element.titre || index}
                                                initial={{ opacity: 0, x: aGauche ? -60 : 60, y: 24 }}
                                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                                viewport={{ once: true, amount: 0.25 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: index * 0.08,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className={`
                                                    relative flex
                                                    ${aGauche
                                                        ? 'sm:justify-start'
                                                        : 'sm:justify-end'
                                                    }
                                                `}
                                            >

                                                <motion.div
                                                    className="absolute left-3 top-7 flex h-5 w-5 items-center justify-center sm:left-1/2 sm:-translate-x-1/2"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: index * 0.08 + 0.15,
                                                        type: 'spring',
                                                        stiffness: 300,
                                                        damping: 15,
                                                    }}
                                                >
                                                    <span className="absolute h-10 w-10 animate-pulse rounded-full border border-brand/40" />
                                                    <span className="h-3 w-3 rounded-full bg-brand shadow-[0_0_14px_rgba(174,208,252,0.9)]" />
                                                </motion.div>

                                                <motion.div
                                                    whileHover={{ y: -6 }}
                                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                                    className="carte-verre-forte group relative ml-12 w-full max-w-xl overflow-hidden rounded-[30px] p-7 transition-shadow duration-300 hover:shadow-[0_24px_70px_-24px_rgba(174,208,252,0.45)] sm:ml-0 sm:w-[calc(50%_-_1.5rem)]"
                                                >
                                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                                                    <span className="pointer-events-none absolute right-6 top-4 text-6xl font-black leading-none tracking-[-0.04em] text-white/[0.04] transition-colors duration-300 group-hover:text-brand/10">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>

                                                    <span className="relative inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                                                        {element.periode}
                                                    </span>

                                                    <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
                                                        {t(element.titre)}
                                                    </h3>

                                                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white/60">
                                                        <FaBuilding className="shrink-0 text-brand" />
                                                        {element.etablissement}
                                                    </p>

                                                    {(element.mention || element.niveau) && (
                                                        <p className="mt-2 text-sm font-semibold text-brand">
                                                            {t(element.mention || element.niveau)}
                                                        </p>
                                                    )}

                                                    {element.details && (
                                                        <p className="mt-4 text-sm leading-7 text-white/70">
                                                            {t(element.details)}
                                                        </p>
                                                    )}

                                                </motion.div>

                                            </motion.div>
                                        );
                                    })}

                                </div>

                            </div>

                        </div>

                    )
                }


            </div>

        </SectionAnimee>
    );
}


export default Parcours;