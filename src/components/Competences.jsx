import { motion } from 'framer-motion';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';
import BandeauTechnologies from './BandeauTechnologies';
import iconesCompetences from './iconesCompetences';
import { competencesDetaillees } from '../data/donneesPortfolio';
import { useLangue } from '../context/ContexteLangue';

const piliersCompetences = [
    {
        titre: 'Langages & Framework',
        elements: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL', 'C++', 'Shell', 'Python', 'C#', 'Java', 'React.js', 'Tailwind CSS'],
    },
    {
        titre: 'Réseau & Services',
        elements: competencesDetaillees.reseau,
    },
    {
        titre: 'Outils, Systèmes & IoT',
        elements: ['MySQL', 'Docker', 'Git', 'Linux', 'Arduino', 'Tinkercad', 'Windows', 'Wireshark', 'GNS3', 'Cisco Packet Tracer', 'VirtualBox', 'GitHub'],
    },
];

function Competences() {
    const { t } = useLangue();
    return (
        <SectionAnimee
            id="competences"
            className="relative px-6 pt-16 pb-32 lg:px-8 lg:pt-20"
        >
            <div className="halo-blu -left-52 top-1/4 h-[40rem] w-[40rem] opacity-50" />

            <div className="relative mx-auto max-w-[1480px]">

                <div className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

                    {/* Colonne gauche : étapes numérotées */}
                    <div>
                        <TitreSection
                            etiquette={t('Compétences')}
                            titre={t('Un socle technique solide, moderne et polyvalent')}
                            description={t('Je développe avec des technologies récentes, tout en gardant une approche claire, durable et orientée performance.')}
                        />

                        <div className="mt-16 space-y-12">
                            {piliersCompetences.map((etape, index) => (
                                <motion.div
                                    key={etape.titre}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                                    className="flex gap-8"
                                >
                                    <span className="nombre-contour shrink-0 text-6xl font-black leading-none tracking-[-0.04em] sm:text-7xl">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div className="border-t border-white/20 pt-6">
                                        <h3 className="text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                                            {t(etape.titre)}
                                        </h3>

                                        <div className="mt-5 flex flex-wrap gap-2.5">
                                            {etape.elements.map((element) => {
                                                const Icone = iconesCompetences[element];
                                                return (
                                                    <span
                                                        key={element}
                                                        className="inline-flex items-center gap-2 rounded-[40px] border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-brand/50 hover:text-brand"
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
                        </div>
                    </div>

                    {/* Colonne droite : grand portrait verre */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative flex h-full w-full flex-col"
                    >
                        <div className="halo-blu -inset-20 opacity-60" />

                        <div className="carte-verre-forte relative flex rotate-2 flex-col rounded-[20px] p-4 transition-transform duration-500 hover:rotate-0">
                            <img
                                src={process.env.PUBLIC_URL + '/assets/HC.png'}
                                alt={t('Portrait')}
                                className="w-full min-h-0 flex-1 rounded-[16px] object-cover"
                            />
                        </div>

                        <div className="carte-verre-forte absolute bottom-10 left-4 rounded-lg px-6 py-3 sm:left-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                                {t('Compétences')}
                            </p>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Bandeau défilant des technologies (façon partenaires NFTity) */}
            <BandeauTechnologies />
        </SectionAnimee>
    );
}

export default Competences;