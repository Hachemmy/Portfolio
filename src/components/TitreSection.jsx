import { motion } from 'framer-motion';

function TitreSection({
    eyebrow: etiquette,
    title: titre,
    description: descriptionTexte,
    centered: centre = true,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`max-w-3xl ${centre ? 'mx-auto text-center' : ''}`}
        >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-400">
                {etiquette}
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50 sm:text-4xl">
                {titre}
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                {descriptionTexte}
            </p>
        </motion.div>
    );
}

export default TitreSection;