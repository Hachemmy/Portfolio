import { motion } from 'framer-motion';
import { competences } from '../data/donneesPortfolio';

function rangDecompetences() {
    return competences.map((technologie) => {
        const Icone = technologie.icone;
        return (
            <span
                key={technologie.nom}
                className="flex shrink-0 items-center gap-3 opacity-40 transition hover:opacity-100"
            >
                <Icone className="h-7 w-7 text-brand" />
                <span className="whitespace-nowrap text-xl font-medium text-white">
                    {technologie.nom}
                </span>
            </span>
        );
    });
}

function BandeauTechnologies() {
    const contenuUn = rangDecompetences();
    const contenuDeux = rangDecompetences();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mt-36"
        >
            <div className="marquee-conteneur border-y border-white/10 py-10">
                <div className="marquee-trace">
                    <div className="flex shrink-0 items-center gap-14 pr-14">{contenuUn}</div>
                    <div className="flex shrink-0 items-center gap-14 pr-14">{contenuUn}</div>
                </div>
            </div>

            <div className="marquee-conteneur border-b border-white/10 py-10">
                <div className="marquee-trace marquee-trace-inverse">
                    <div className="flex shrink-0 items-center gap-14 pr-14">{contenuDeux}</div>
                    <div className="flex shrink-0 items-center gap-14 pr-14">{contenuDeux}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default BandeauTechnologies;