import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../types';
import { USE_CASES } from '../data/usecases';
import BackButton from '../components/BackButton';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicePage() {
  const navigate = useNavigate();

  const countByService = (serviceId: string) =>
    USE_CASES.filter((uc) => uc.service === serviceId).length;

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 40%, #F8F9FF 100%)' }}
    >
      {/* Orbs */}
      <div className="orb orb-blue" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.35 }} />
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
                background: 'rgba(4,0,55,0.05)',
                border: '1px solid rgba(4,0,55,0.10)',
                color: 'rgba(4,0,55,0.60)',
              }}
            >
              🏢 Navigation par service
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#040037' }}>
              Dans quel service tu travailles ?
            </h1>
            <p className="text-base" style={{ color: 'rgba(4,0,55,0.52)' }}>
              Sélectionne ta direction pour voir les use cases IA qui te concernent
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {SERVICES.map((service) => {
            const count = countByService(service.id);
            return (
              <motion.button
                key={service.id}
                variants={itemVariants}
                onClick={() => navigate(`/service/${service.id}`)}
                className="group relative flex flex-col items-start p-5 rounded-2xl text-left overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(4,0,55,0.08)',
                  boxShadow: '0 1px 12px rgba(4,0,55,0.05)',
                }}
                whileHover={{
                  scale: 1.03,
                  background: 'rgba(255,255,255,0.95)',
                  borderColor: 'rgba(0, 200, 255, 0.35)',
                  boxShadow: '0 6px 24px rgba(4,0,55,0.09)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: 'radial-gradient(ellipse at top left, rgba(0,200,255,0.06) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10 w-full">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{service.emoji}</span>
                    {count > 0 && (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(0, 200, 255, 0.10)',
                          color: '#0080CC',
                          border: '1px solid rgba(0, 200, 255, 0.20)',
                        }}
                      >
                        {count}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm leading-snug mb-1" style={{ color: '#040037' }}>
                    {service.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(4,0,55,0.48)' }}>
                    {service.description}
                  </p>
                </div>

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
