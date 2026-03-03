import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { USE_CASES } from '../data/usecases';
import { SERVICES, IRRITANTS, STATUS_CONFIG } from '../types';
import StatusBadge from '../components/StatusBadge';
import BackButton from '../components/BackButton';
import { useFavorites } from '../context/FavoritesContext';

const STATUS_PERCENT: Record<string, number> = {
  industrialise: 100,
  'en-deploiement': 90,
  'en-attente': 75,
  poc: 50,
  qualifie: 25,
  contact: 5,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function ProgressBar({ status }: { status: string }) {
  const pct = STATUS_PERCENT[status] ?? 0;
  const cfg = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG];

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold" style={{ color: 'rgba(4,0,55,0.45)' }}>
          Maturité du déploiement
        </span>
        <span className="text-sm font-black" style={{ color: cfg?.color ?? '#00C8FF' }}>
          {pct}%
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(4,0,55,0.08)' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, ${cfg?.color ?? '#00C8FF'}, ${cfg?.color ?? '#00C8FF'}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function UseCaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggle, isFav } = useFavorites();

  const useCase = USE_CASES.find((uc) => uc.id === id);

  if (!useCase) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F8F9FF' }}>
        <div className="text-center">
          <p className="mb-4" style={{ color: 'rgba(4,0,55,0.50)' }}>Use case introuvable</p>
          <button
            onClick={() => navigate('/')}
            className="text-kiabi-electric font-semibold hover:underline"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const service = SERVICES.find((s) => s.id === useCase.service);
  const fav = isFav(useCase.id);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 30%, #F8F9FF 100%)' }}
    >
      <div
        className="orb orb-blue"
        style={{ width: 400, height: 400, top: -100, right: -100, opacity: 0.30 }}
      />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-4"
      >
        {/* Back + Favorite row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <BackButton />
          <motion.button
            onClick={() => toggle(useCase.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: fav ? 'rgba(255, 184, 48, 0.12)' : 'rgba(4,0,55,0.05)',
              border: fav ? '1px solid rgba(255, 184, 48, 0.35)' : '1px solid rgba(4,0,55,0.10)',
              color: fav ? '#B87C00' : 'rgba(4,0,55,0.45)',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span animate={{ scale: fav ? [1, 1.4, 1] : 1 }} transition={{ duration: 0.3 }}>
              {fav ? '⭐' : '☆'}
            </motion.span>
            <span className="hidden sm:inline">
              {fav ? 'Sauvegardé' : 'Intéressé pour mon service'}
            </span>
          </motion.button>
        </div>

        {/* Meta info */}
        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {service && (
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
                style={{
                  background: 'rgba(4,0,55,0.05)',
                  border: '1px solid rgba(4,0,55,0.10)',
                  color: 'rgba(4,0,55,0.75)',
                }}
              >
                {service.emoji} {service.label}
              </span>
            )}
            <StatusBadge status={useCase.status} />
          </div>

          <h1 className="text-2xl md:text-3xl font-black leading-snug mb-3" style={{ color: '#040037' }}>
            {useCase.storytellingName}
          </h1>

          {/* Irritants */}
          <div className="flex flex-wrap gap-2 mb-3">
            {useCase.irritants.map((irritantId) => {
              const irritant = IRRITANTS.find((i) => i.id === irritantId);
              if (!irritant) return null;
              return (
                <span
                  key={irritantId}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(0, 200, 255, 0.08)',
                    border: '1px solid rgba(0, 200, 255, 0.18)',
                    color: '#0080CC',
                  }}
                >
                  {irritant.emoji} {irritant.label}
                </span>
              );
            })}
          </div>

          {/* Outil */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
            style={{
              background: 'rgba(4,0,55,0.04)',
              border: '1px solid rgba(4,0,55,0.08)',
              color: 'rgba(4,0,55,0.50)',
            }}
          >
            🔧 Outil :{' '}
            <span className="font-semibold" style={{ color: 'rgba(4,0,55,0.75)' }}>{useCase.outil}</span>
          </div>

          {/* Progress bar */}
          <ProgressBar status={useCase.status} />
        </div>
      </motion.div>

      {/* Storytelling blocks */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 space-y-4">

        {/* Hero Image */}
        {useCase.imageUrl && (
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ height: '220px' }}
          >
            <img
              src={useCase.imageUrl}
              alt={useCase.storytellingName}
              className="w-full h-full object-cover"
              onError={(e) => {
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) parent.style.display = 'none';
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(248,249,255,0.05) 0%, rgba(238,242,255,0.50) 100%)',
              }}
            />
          </motion.div>
        )}

        {/* Block 1 — L'enjeu */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255, 100, 50, 0.04)',
            border: '1px solid rgba(255, 120, 60, 0.12)',
          }}
        >
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{
              background: 'rgba(255, 100, 50, 0.06)',
              borderBottom: '1px solid rgba(255, 120, 60, 0.10)',
            }}
          >
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-black text-sm" style={{ color: '#040037' }}>L'enjeu</p>
              <p className="text-xs" style={{ color: 'rgba(4,0,55,0.45)' }}>
                Ce qui motive l'initiative
              </p>
            </div>
          </div>
          <div className="px-6 py-5">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(4,0,55,0.80)' }}>
              {useCase.probleme}
            </p>
          </div>
        </motion.div>

        {/* Block 2 — Ce que l'IA fait */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="rounded-2xl overflow-hidden bg-white"
          style={{ boxShadow: '0 2px 16px rgba(4,0,55,0.06)', border: '1px solid rgba(4,0,55,0.07)' }}
        >
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{ borderBottom: '1px solid rgba(4,0,55,0.07)' }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #040037, #0a0060)', color: '#00C8FF' }}
            >
              IA
            </div>
            <div>
              <p className="font-black text-sm" style={{ color: '#040037' }}>Ce que l'IA fait</p>
              <p className="text-xs" style={{ color: 'rgba(4,0,55,0.45)' }}>
                La solution concrète
              </p>
            </div>
          </div>
          <div className="px-6 py-5">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(4,0,55,0.80)' }}>
              {useCase.solution}
            </p>
          </div>
        </motion.div>

        {/* Block 3 — Impact */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(0,200,255,0.04)',
            border: '1px solid rgba(0, 200, 255, 0.18)',
          }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between gap-3 flex-wrap"
            style={{ borderBottom: '1px solid rgba(0, 200, 255, 0.12)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <p className="font-black text-sm" style={{ color: '#040037' }}>L'impact</p>
                <p className="text-xs" style={{ color: 'rgba(4,0,55,0.45)' }}>
                  Ce que ça change concrètement
                </p>
              </div>
            </div>
            {useCase.impactChiffre && (
              <span
                className="text-sm font-black px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,128,204,0.10))',
                  color: '#0080CC',
                  border: '1px solid rgba(0, 200, 255, 0.25)',
                }}
              >
                {useCase.impactChiffre}
              </span>
            )}
          </div>
          <div className="px-6 py-5">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(4,0,55,0.80)' }}>
              {useCase.impact}
            </p>
          </div>
        </motion.div>

        {/* Citation */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42 }}
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'rgba(4,0,55,0.03)',
            border: '1px solid rgba(4,0,55,0.07)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ background: 'linear-gradient(180deg, #00C8FF, transparent)' }}
          />
          <div className="pl-3">
            <svg
              className="w-6 h-6 mb-3 opacity-20"
              style={{ color: '#00C8FF' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p
              className="text-base italic leading-relaxed mb-3"
              style={{ color: 'rgba(4,0,55,0.72)' }}
            >
              {useCase.citation}
            </p>
            {useCase.citationAuteur && (
              <p className="text-sm font-semibold" style={{ color: '#0080CC' }}>
                — {useCase.citationAuteur}
              </p>
            )}
          </div>
        </motion.div>

        {/* Quick info */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.48 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { label: 'Service', value: service ? `${service.emoji} ${service.label}` : useCase.service },
            { label: 'Outil', value: `🔧 ${useCase.outil}` },
            {
              label: 'Statut',
              value:
                useCase.status === 'industrialise' ? '✅ Actif' :
                useCase.status === 'en-deploiement' ? '⏳ En déploiement' :
                useCase.status === 'poc' ? '🧪 POC' :
                useCase.status === 'en-attente' ? '⏳ En attente' :
                useCase.status === 'qualifie' ? '📋 En qualification' :
                '🔭 En exploration',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-3 text-center"
              style={{
                background: 'rgba(255,255,255,0.70)',
                border: '1px solid rgba(4,0,55,0.07)',
                boxShadow: '0 1px 8px rgba(4,0,55,0.04)',
              }}
            >
              <p className="text-xs mb-1" style={{ color: 'rgba(4,0,55,0.40)' }}>
                {item.label}
              </p>
              <p className="text-xs font-semibold leading-snug" style={{ color: '#040037' }}>{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom navigation */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.52 }}
          className="pt-2 grid grid-cols-3 gap-3"
        >
          <button
            onClick={() => navigate('/service')}
            className="py-3 rounded-xl text-sm font-semibold transition-colors"
            style={{
              background: 'rgba(255,255,255,0.70)',
              border: '1px solid rgba(4,0,55,0.08)',
              color: 'rgba(4,0,55,0.55)',
            }}
          >
            🏢 Par service
          </button>
          <button
            onClick={() => navigate('/irritant')}
            className="py-3 rounded-xl text-sm font-semibold transition-colors"
            style={{
              background: 'linear-gradient(135deg, rgba(0,200,255,0.10), rgba(0,128,204,0.06))',
              border: '1px solid rgba(0, 200, 255, 0.22)',
              color: '#0080CC',
            }}
          >
            ⚡ Par enjeu
          </button>
          <button
            onClick={() => navigate('/favoris')}
            className="py-3 rounded-xl text-sm font-semibold transition-colors"
            style={{
              background: 'rgba(255, 184, 48, 0.07)',
              border: '1px solid rgba(255, 184, 48, 0.18)',
              color: '#B87C00',
            }}
          >
            ⭐ Coups de cœur
          </button>
        </motion.div>
      </div>
    </div>
  );
}
