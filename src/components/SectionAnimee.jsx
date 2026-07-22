
import { motion } from 'framer-motion';

function SectionAnimee({ id: identifiant, children: enfants, className: classe = '' }) {
    return (
        <motion.section
            id={identifiant}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`scroll-mt-20 ${classe}`}
        >
            {enfants}
        </motion.section>
    );
}

export default SectionAnimee;

