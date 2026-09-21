import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projets } from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';

function Projets() {
    const titresVedettes = ['Storage Manager', "Flem'art", 'Routage IP'];
    const projetsVedettes = titresVedettes
        .map((titre) => projets.find((projet) => projet.titre === titre))
        .filter(Boolean);

    return (
        <SectionAnimee
            id="projets"
            className="relative px-6 pt-16 pb-32 lg:px-8 lg:pt-20"
        >
            <div className="halo-blu -right-56 top-0 h-[36rem] w-[36rem] opacity-50" />

            <div className="relative mx-auto max-w-[1480px]">

                {/* ——— Bandeau "Top collections" : grille des projets ——— */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
                    <TitreSection
                        etiquette="Projets"
                        titre="Mes réalisations, techniques et visuellement raffinées"
                        description="Chaque projet reflète une approche soignée du détail, du responsive et de l’expérience utilisateur."
                    />

                    <a
                        href="https://github.com/Hachemmy/"
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-lg font-medium text-brand transition hover:text-white"
                    >
                        Voir plus sur GitHub →
                    </a>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {projets.map((projet, index) => (
                        <motion.article
                            key={projet.titre}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                            whileHover={{ y: -6 }}
                            className="group cursor-pointer carte-verre overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={projet.image}
                                    alt={projet.titre}
                                    className="h-44 w-full object-cover"
                                />
                                <span className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-1.5">
                                    {projet.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-[60px] border border-brand/50 bg-black px-3 py-1 text-[11px] font-medium text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </span>
                                <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold leading-tight tracking-[-0.02em] text-white">
                                    {projet.titre}
                                </h3>
                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/60">
                                    {projet.description}
                                </p>

                                <div className="mt-4 flex items-center gap-2">
                                    <a
                                        href={projet.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition hover:border-brand/50 hover:text-brand"
                                    >
                                        <FaGithub className="text-sm" /> GitHub
                                    </a>
                                    <a
                                        href={projet.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-2 text-xs font-medium text-brand transition hover:border-brand/70 hover:bg-brand/20"
                                    >
                                        <FaArrowRight className="text-sm" />
                                        {projet.telecharger ? 'Télécharger' : 'Voir la démo'}
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* ——— Bandeau "Marketplace" : projets sélectionnés ——— */}
                <div className="mt-32">
                    <TitreSection
                        etiquette="Sélection"
                        titre="Mes plus grands projets"
                        description="Trois projets dans le détail"
                    />

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {projetsVedettes.map((projet, index) => (
                            <motion.article
                                key={projet.titre}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                                whileHover={{ y: -8 }}
                                className="carte-verre-forte rounded-[60px] p-4"
                            >
                                <img
                                    src={projet.image}
                                    alt={projet.titre}
                                    className="h-60 w-full rounded-[40px] object-cover"
                                />

                                <div className="p-5 pb-3">
                                    <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">
                                        {projet.titre}
                                    </h3>
                                </div>

                                <p className="px-5 pb-5 text-sm leading-6 text-white/60">
                                    {projet.description}
                                </p>

                                <div className="px-5 pb-5 flex items-center gap-3">
                                    <a
                                        href={projet.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-[60px] border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:border-brand/50 hover:text-brand"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={projet.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-[60px] border border-brand/40 bg-brand/10 px-6 py-4 text-sm font-medium text-brand transition hover:border-brand/70 hover:bg-brand/20"
                                    >
                                        <FaArrowRight /> {projet.telecharger ? 'Télécharger' : 'Voir la démo'}
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <div className="mt-20 flex items-center justify-center">
                    <a
                        href="https://github.com/Hachemmy/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-8 py-4 text-base font-medium text-brand transition hover:border-brand/70 hover:bg-brand/20"
                    >
                        <FaGithub /> Tous mes dépôts
                    </a>
                </div>

            </div>
        </SectionAnimee>
    );
}

export default Projets;