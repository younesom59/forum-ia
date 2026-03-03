import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IRRITANTS } from '../types';
import { USE_CASES } from '../data/usecases';
import BackButton from '../components/BackButton';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function IrritantPage() {
  const navigate = useNavigate();

  const countByIrritant = (irritantId: string) =>
    USE_CASES.filter((uc) => uc.irritants.includes(irritantId as never)).length;

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 40%, #F8F9FF 100%)' }}
    >
      <div className="orb orb-blue" style={{ width: 700, height: 700, top: -250, left: -150, opacity: 0.35 }} />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <BackButton to="/" label="Accueil" />
          <div className="mt-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: 'rgba(0, 200, 255, 0.08)',
                border: '1px solid rgba(0, 200, 255, 0.20)',
                color: '#0080CC',
              }}
            >
              ⚡ Navigation par enjeu
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#040037' }}>
              Quel est ton principal enjeu ?
            </h1>
            <p className="text-base" style={{ color: 'rgba(4,0,55,0.52)' }}>
              Sélectionne ton enjeu principal — l'IA a probablement déjà une solution
            </p>
          </div>
        </motion.div>

        {/* Irritants grid — 2 columns on md, 3 on lg */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {IRRITANTS.map((irritant) => {
            const count = countByIrritant(irritant.id);

            return (
              <motion.button
                key={irritant.id}
                variants={itemVariants}
                onClick={() => navigate(`/irritant/${irritant.id}`)}
                className="group relative flex flex-col p-5 rounded-2xl text-left overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(4,0,55,0.08)',
                  boxShadow: '0 1px 12px rgba(4,0,55,0.05)',
                }}
                whileHover={{
                  scale: 1.03,
                  background: 'rgba(255,255,255,0.95)',
                  borderColor: 'rgba(0, 200, 255, 0.30)',
                  boxShadow: '0 6px 24px rgba(4,0,55,0.09)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(ellipse at top left, rgba(0,200,255,0.06) 0%, transparent 70%)',
                  }}
                />

                {/* Top: emoji + count + arrow */}
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: 'rgba(4,0,55,0.05)',
                      border: '1px solid rgba(4,0,55,0.08)',
                    }}
                  >
                    {irritant.emoji}
                  </div>
                  <div className="flex items-center gap-2">
                    {count > 0 && (
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                        style={{
                          background: 'rgba(0, 200, 255, 0.10)',
                          border: '1px solid rgba(0, 200, 255, 0.20)',
                          color: '#0080CC',
                        }}
                      >
                        {count} solutions
                      </span>
                    )}
                    <svg
                      className="w-4 h-4 opacity-25 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all duration-200"
                      style={{ color: '#00C8FF' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <p className="text-sm font-semibold leading-snug mb-1" style={{ color: '#040037' }}>
                    {irritant.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(4,0,55,0.48)' }}>
                    {irritant.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #00C8FF, transparent)' }}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
