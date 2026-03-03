import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';
import { USE_CASES } from '../data/usecases';
import UseCaseCard from '../components/UseCaseCard';
import BackButton from '../components/BackButton';

export default function FavoritesPage() {
  const { favorites, toggle } = useFavorites();
  const navigate = useNavigate();

  const favCases = USE_CASES.filter((uc) => favorites.includes(uc.id));

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 40%, #F8F9FF 100%)' }}
    >
      <div className="orb orb-blue" style={{ width: 500, height: 500, top: -100, right: -100, opacity: 0.30 }} />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
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
                background: 'rgba(255, 184, 48, 0.10)',
                border: '1px solid rgba(255, 184, 48, 0.25)',
                color: '#B87C00',
              }}
            >
              ⭐ Mes coups de cœur
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#040037' }}>
              Ce qui m'intéresse pour mon équipe
            </h1>
            <p className="text-base" style={{ color: 'rgba(4,0,55,0.52)' }}>
              {favCases.length === 0
                ? "Tu n'as pas encore ajouté de coup de cœur"
                : `${favCases.length} use case${favCases.length > 1 ? 's' : ''} sauvegardé${favCases.length > 1 ? 's' : ''}`}
            </p>
          </div>
        </motion.div>

        {/* Empty state */}
        {favCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-5">⭐</div>
            <p className="font-medium mb-2" style={{ color: 'rgba(4,0,55,0.50)' }}>
              Aucun coup de cœur pour l'instant
            </p>
            <p className="text-sm mb-6" style={{ color: 'rgba(4,0,55,0.35)' }}>
              Sur chaque fiche use case, clique sur "Intéressé pour mon service" pour l'ajouter ici
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(0,200,255,0.12), rgba(0,128,204,0.07))',
                border: '1px solid rgba(0, 200, 255, 0.22)',
                color: '#0080CC',
              }}
            >
              Découvrir les use cases
            </button>
          </motion.div>
        )}

        {/* Favorites grid */}
        {favCases.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <AnimatePresence mode="sync">
                {favCases.map((uc, i) => (
                  <UseCaseCard key={uc.id} useCase={uc} index={i} />
                ))}
              </AnimatePresence>
            </div>

            {/* Clear all */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <button
                onClick={() => favCases.forEach((uc) => toggle(uc.id))}
                className="text-sm transition-colors underline-offset-2 hover:underline"
                style={{ color: 'rgba(4,0,55,0.30)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(4,0,55,0.55)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(4,0,55,0.30)')}
              >
                Tout effacer
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
