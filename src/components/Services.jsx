import { motion } from 'framer-motion';
import { competencesDetaillees } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import iconesCompetences from './iconesCompetences';
import { useLangue } from '../context/ContexteLangue';

const piliers = [
    {
        nom: 'Réseau & Services',
        elements: competencesDetaillees.reseau,
    },
    {
        nom: 'Développement Web',
        elements: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'React.js', 'Tailwind CSS'],
    },
    {
        nom: 'Systèmes & IoT',
        elements: ['Python', 'C#', 'Java', 'Shell', 'Docker', 'Tinkercad'],
    },
];

function Services() {
    const { t } = useLangue();
    return (
        <SectionAnimee
            id="services"
            className="relative px-6 pt-8 pb-36 lg:px-8"
        >
            <div className="halo-blu -right-56 -top-24 h-[38rem] w-[38rem] opacity-50" />
            <div className="halo-blu -left-52 bottom-0 h-[36rem] w-[36rem] opacity-45" />

            <div className="relative mx-auto max-w-[1130px]">

                <TitreSection
                    etiquette={t('Services')}
                    titre={t('Mes trois piliers techniques')}
                    description={t('Trois domaines complémentaires, une même exigence : un travail sérieux et des résultats fiables.')}
                />

                <p className="font-quantum mt-14 text-center text-3xl font-normal uppercase tracking-[0.3em] text-brand">
                    {t('Mes armes')}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="carte-verre-forte mt-6 grid gap-6 p-8 sm:p-10 lg:grid-cols-3 lg:gap-10"
                >
                    {piliers.map((pilier, index) => (
                        <motion.div
                            key={pilier.nom}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            className="relative flex flex-col items-center gap-6 px-6 py-10 text-center"
                        >
                            <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">
                                {t(pilier.nom)}
                            </h3>

                            <div className="flex items-baseline gap-2">
                                <span className="text-[80px] font-bold leading-[1.1] tracking-[-0.04em] text-white">
                                    {pilier.elements.length}
                                </span>
                                <span className="text-lg text-white/50">
                                    {t('compétences')}
                                </span>
                            </div>

                            <div className="w-full border-t border-white/10 pt-6">
                                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                                    {t('Inclus')}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {pilier.elements.map((element) => {
                                        const Icone = iconesCompetences[element];
                                        return (
                                            <span
                                                key={element}
                                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/80"
                                            >
                                                {Icone && <Icone className="text-sm text-brand" />}
                                                {element}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </SectionAnimee>
    );
}

export default Services;