import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { UseCase } from '../types';
import { SERVICES, IRRITANTS } from '../types';
import StatusBadge from './StatusBadge';

interface Props {
  useCase: UseCase;
  index?: number;
}

export default function UseCaseCard({ useCase, index = 0 }: Props) {
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === useCase.service);
  const primaryIrritant = IRRITANTS.find((i) => i.id === useCase.irritants[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/usecase/${useCase.id}`)}
      className="group relative bg-white rounded-2xl p-5 cursor-pointer overflow-hidden"
      style={{
        boxShadow: '0 2px 16px rgba(4, 0, 55, 0.08)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 16px 40px rgba(4, 0, 55, 0.16)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #00C8FF, #040037)' }}
      />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-lg flex-shrink-0">{service?.emoji}</span>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full truncate"
            style={{
              backgroundColor: 'rgba(4, 0, 55, 0.06)',
              color: '#040037',
            }}
          >
            {service?.label}
          </span>
        </div>
        <StatusBadge status={useCase.status} size="sm" />
      </div>

      <h3
        className="font-bold text-base leading-snug mb-2 group-hover:text-kiabi-dark transition-colors"
        style={{ color: '#040037' }}
      >
        {useCase.storytellingName}
      </h3>

      {primaryIrritant && (
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#8892B0' }}>
          {primaryIrritant.emoji} {primaryIrritant.label}
        </p>
      )}

      {useCase.impactChiffre && (
        <div
          className="mt-3 pt-3 border-t flex items-center gap-2"
          style={{ borderColor: 'rgba(4, 0, 55, 0.08)' }}
        >
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: 'rgba(0, 200, 255, 0.1)',
              color: '#0080CC',
            }}
          >
            ✨ {useCase.impactChiffre}
          </span>
        </div>
      )}

      <div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
      >
        <svg
          className="w-4 h-4"
          style={{ color: '#00C8FF' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}
