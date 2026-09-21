import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import {
    experiencesProfessionnelles,
    formations,
    langues,
} from '../data/donneesPortfolio';
import SectionAnimee from './SectionAnimee';
import TitreSection from './TitreSection';

const statistiquesReelles = [
    { fin: 21, label: 'Projets réalisés' },
    { fin: experiencesProfessionnelles.length, label: 'Expériences & challenges' },
    { fin: formations.length, label: 'Formations & certifications' },
    { fin: langues.length, label: 'Langues parlées' },
];

function Compteur({ fin }) {
    const reference = useRef(null);
    const dansVue = useInView(reference, { once: true, amount: 0.5 });
    const [valeur, setValeur] = useState(0);

    useEffect(() => {
        if (!dansVue) return;
        const controles = animate(0, fin, {
            duration: 1.8,
            ease: 'easeOut',
            onUpdate: (miseAJour) => setValeur(Math.round(miseAJour)),
        });
        return () => controles.stop();
    }, [dansVue, fin]);

    return <span ref={reference}>{valeur}</span>;
}

function Statistiques() {
    return (
        <SectionAnimee
            id="statistiques"
            className="relative px-6 pt-8 pb-36 lg:px-8"
        >
            <div className="halo-blu -left-56 -top-20 h-[34rem] w-[34rem] opacity-45" />

            <div className="relative mx-auto max-w-[1480px]">

                <TitreSection
                    etiquette="Chiffres"
                    titre="Des résultats concrets et mesurables"
                    description="Des projets livrés, des expériences cumulées et une curiosité qui ne s’arrête jamais."
                />

                <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {statistiquesReelles.map((statistique, index) => (
                        <motion.div
                            key={statistique.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                            whileHover={{ y: -6 }}
                            className="carte-verre-forte p-8 lg:p-10"
                        >
                            <p className="text-5xl font-bold tracking-[-0.04em] text-white lg:text-[56px]">
                                <Compteur fin={statistique.fin} />
                            </p>
                            <p className="mt-3 text-lg text-white/60">
                                {statistique.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SectionAnimee>
    );
}

export default Statistiques;