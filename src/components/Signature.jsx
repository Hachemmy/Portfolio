import { motion } from 'framer-motion';
import SectionAnimee from './SectionAnimee';

function Signature() {
    return (
        <SectionAnimee
            id="signature"
            className="relative px-6 pt-16 pb-36 lg:px-8 lg:pt-24"
        >
            <div className="halo-blu -right-56 -bottom-32 h-[42rem] w-[42rem] opacity-60" />
            <div className="halo-blu -left-48 top-16 h-[36rem] w-[36rem] opacity-50" />

            <div className="relative mx-auto grid max-w-[1480px] items-center gap-16 lg:grid-cols-2">

                {/* Mot géant */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-1 py-6 sm:gap-2"
                >
                    <span className="nombre-contour text-[clamp(56px,10vw,104px)] font-black leading-none tracking-[-0.04em]">
                        HACHEMMY
                    </span>
                    <span className="nombre-contour text-[clamp(34px,6vw,60px)] font-black leading-none tracking-[0.05em]">
                        JOVENNO
                    </span>
                </motion.div>

                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                        Signature
                    </p>

                    <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
                        Le Professionalisme est le <span className="text-brand">meilleur chemin</span>
                    </h2>

                </motion.div>

            </div>
        </SectionAnimee>
    );
}

export default Signature;