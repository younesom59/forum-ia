import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';

export default function PageTopBar({ hideFavBadge = false }: { hideFavBadge?: boolean }) {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Logo cliquable → accueil */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src="/logo-kiabi.png"
          alt="KIABI"
          className="h-8 w-auto object-contain"
        />
      </motion.div>

      {/* Badge favoris */}
      {!hideFavBadge && favorites.length > 0 && (
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
    </div>
  );
}
