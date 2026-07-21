import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function ProgressionDefilement() {
    const [progression, setProgression] = useState(0);

    useEffect(() => {
        const mettreAJourProgression = () => {
            const positionDefilement = window.scrollY;
            const hauteur = document.documentElement.scrollHeight - window.innerHeight;
            const valeur = hauteur > 0 ? (positionDefilement / hauteur) * 100 : 0;
            setProgression(valeur);
        };

        mettreAJourProgression();
        window.addEventListener('scroll', mettreAJourProgression, { passive: true });
        return () => window.removeEventListener('scroll', mettreAJourProgression);
    }, []);

    return (
        <motion.div
            className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-300"
            style={{ scaleX: progression / 100 }}
        />
    );
}

export default ProgressionDefilement;
