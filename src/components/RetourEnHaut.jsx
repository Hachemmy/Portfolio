import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

function RetourEnHaut() {
    const [estVisible, setEstVisible] = useState(false);

    useEffect(() => {
        const gererDefilement = () => setEstVisible(window.scrollY > 600);
        gererDefilement();
        window.addEventListener('scroll', gererDefilement);
        return () => window.removeEventListener('scroll', gererDefilement);
    }, []);

    return (
        <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: estVisible ? 1 : 0, y: estVisible ? 0 : 20 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/40 bg-slate-900/80 text-slate-100 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-xl"
            aria-label="Retour en haut"
        >
            <FaArrowUp />
        </motion.button>
    );
}

export default RetourEnHaut;
