import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { USE_CASES } from '../data/usecases';
import { useFavorites } from '../context/FavoritesContext';

const TOTAL = USE_CASES.length;

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const timer = setTimeout(() => requestAnimationFrame(animate), 600);
    return () => clearTimeout(timer);
  }, [target]);

  return <>{count}</>;
}

// Floating particle component
function Particle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'rgba(0, 200, 255, 0.35)',
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.35, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 3,
  delay: Math.random() * 5,
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomePage() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 40%, #F8F9FF 100%)' }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="orb orb-blue absolute"
        style={{ width: 700, height: 700, top: -200, right: -200 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-purple absolute"
        style={{ width: 600, height: 600, bottom: -200, left: -150 }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.38, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <Particle key={p.id} x={p.x} y={p.y} size={p.size} delay={p.delay} />
        ))}
      </div>

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-8 py-5"
      >
        {/* Logo Kiabi */}
        <motion.div whileHover={{ scale: 1.04 }} className="flex items-center">
          <img
            src="/logo-kiabi.png"
            alt="KIABI"
            className="h-10 w-auto object-contain"
          />
        </motion.div>

        <div className="flex items-center gap-3">
          {/* Favorites shortcut */}
          {favorites.length > 0 && (
            <motion.button
              onClick={() => navigate('/favoris')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(255, 184, 48, 0.12)',
                border: '1px solid rgba(255, 184, 48, 0.30)',
                color: '#B87C00',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              ⭐ {favorites.length} coup{favorites.length > 1 ? 's' : ''} de cœur
            </motion.button>
          )}
          <div
            className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2"
            style={{
              background: 'rgba(0, 200, 255, 0.08)',
              border: '1px solid rgba(0, 200, 255, 0.22)',
              color: '#0080CC',
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#00D68F' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Forum IA 2025
          </div>
        </div>
      </motion.div>

      {/* Main content — centered, optimized for 1920×1080 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl w-full mx-auto"
        >
          {/* Counter badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <motion.div
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(4,0,55,0.10)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 2px 16px rgba(4,0,55,0.06)',
              }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-3xl font-black" style={{ color: '#00C8FF' }}>
                <AnimatedCounter target={TOTAL} />
              </span>
              <div
                className="w-px h-6"
                style={{ background: 'rgba(4,0,55,0.12)' }}
              />
              <span className="text-sm font-medium" style={{ color: 'rgba(4,0,55,0.62)' }}>
                use cases IA déployés ou en cours chez KIABI
              </span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-5 flex items-center justify-center gap-4 flex-wrap"
          >
            <span style={{ color: '#040037' }}>L'IA chez</span>
            <img
              src="/logo-kiabi.png"
              alt="KIABI"
              style={{ height: '0.82em', width: 'auto', objectFit: 'contain' }}
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl font-medium mb-4"
            style={{ color: 'rgba(4,0,55,0.52)' }}
          >
            Découvre ce qui change déjà le quotidien de tes collègues
          </motion.p>

          <motion.div variants={itemVariants} className="line-glow w-48 mx-auto mb-14" />

          {/* Two main CTAs */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8"
          >
            {/* Service CTA */}
            <motion.button
              onClick={() => navigate('/service')}
              className="group relative flex flex-col items-start p-8 rounded-3xl text-left overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.80)',
                border: '1px solid rgba(4,0,55,0.08)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 2px 20px rgba(4,0,55,0.06)',
              }}
              whileHover={{
                scale: 1.03,
                background: 'rgba(255,255,255,0.95)',
                borderColor: 'rgba(0, 200, 255, 0.4)',
                boxShadow: '0 8px 32px rgba(4,0,55,0.10)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(0,200,255,0.06) 0%, transparent 70%)' }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 relative z-10"
                style={{ background: 'rgba(0,200,255,0.08)', border: '1px solid rgba(0,200,255,0.18)' }}
              >
                🏢
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-black" style={{ color: '#040037' }}>Mon service</h2>
                  <svg
                    className="w-5 h-5 transition-all duration-200 group-hover:translate-x-1"
                    style={{ color: 'rgba(4,0,55,0.25)' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-base" style={{ color: 'rgba(4,0,55,0.50)' }}>
                  Explore les use cases de ta direction
                </p>
              </div>
            </motion.button>

            {/* Enjeu CTA */}
            <motion.button
              onClick={() => navigate('/irritant')}
              className="group relative flex flex-col items-start p-8 rounded-3xl text-left overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,200,255,0.07), rgba(0,128,204,0.04))',
                border: '1px solid rgba(0,200,255,0.22)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 2px 20px rgba(0,200,255,0.05)',
              }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0,200,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(0,200,255,0.08) 0%, transparent 70%)' }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,200,255,0.14), rgba(0,128,204,0.09))',
                  border: '1px solid rgba(0,200,255,0.28)',
                }}
              >
                ⚡
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-black" style={{ color: '#00C8FF' }}>
                    Mon enjeu
                  </h2>
                  <svg
                    className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-all duration-200"
                    style={{ color: '#00C8FF' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-base" style={{ color: 'rgba(4,0,55,0.50)' }}>
                  Explore les solutions IA selon ton enjeu terrain
                </p>
              </div>
            </motion.button>
          </motion.div>

          {/* Hint */}
          <motion.p
            variants={itemVariants}
            className="text-base"
            style={{ color: 'rgba(4,0,55,0.30)' }}
          >
            Un animateur est là pour te guider ✨ — approche-toi et explore !
          </motion.p>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,255,0.35), transparent)' }}
      />
    </div>
  );
}
