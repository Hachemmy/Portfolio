import { motion } from 'framer-motion';

function TitreSection({
    eyebrow: etiquette,
    title: titre,
    description: descriptionTexte,
    centered: centre = true,
    surbrillance = null,
}) {

    let contenuTitre = titre;
    if (surbrillance && titre.includes(surbrillance)) {
        const [avant, apres] = titre.split(surbrillance);
        contenuTitre = (
            <>
                {avant}
                <span className="text-brand">{surbrillance}</span>
                {apres}
            </>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`max-w-3xl ${centre ? 'mx-auto text-center' : ''}`}
        >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                {etiquette}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-[38px]">
                {contenuTitre}
            </h2>

            {descriptionTexte && (
                <p className="mt-4 text-lg leading-8 text-white/70">
                    {descriptionTexte}
                </p>
            )}
        </motion.div>
    );
}

export default TitreSection;