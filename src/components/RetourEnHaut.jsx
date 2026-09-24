import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useLangue } from '../context/ContexteLangue';

function RetourEnHaut() {
    const [estVisible, setEstVisible] = useState(false);
    const { t } = useLangue();

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
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-brand/40 bg-black/70 text-white backdrop-blur-xl transition hover:text-brand"
            aria-label={t('Retour en haut')}
        >
            <FaArrowUp />
        </motion.button>
    );
}

export default RetourEnHaut;
