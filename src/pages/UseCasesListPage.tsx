import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { USE_CASES } from '../data/usecases';
import { SERVICES, IRRITANTS, STATUS_CONFIG, type Status } from '../types';
import UseCaseCard from '../components/UseCaseCard';
import BackButton from '../components/BackButton';
import PageTopBar from '../components/PageTopBar';

export default function UseCasesListPage({ filterType }: { filterType: 'service' | 'irritant' }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

  const filtered =
    filterType === 'service'
      ? USE_CASES.filter((uc) => uc.service === id)
      : USE_CASES.filter((uc) => uc.irritants.includes(id as never));

  const service = filterType === 'service' ? SERVICES.find((s) => s.id === id) : null;
  const irritant = filterType === 'irritant' ? IRRITANTS.find((i) => i.id === id) : null;

  const backTo = filterType === 'service' ? '/service' : '/irritant';
  const backLabel = filterType === 'service' ? 'Choisir un service' : 'Choisir un enjeu';

  const title = service
    ? `${service.emoji} ${service.label}`
    : irritant
    ? `${irritant.emoji} ${irritant.label}`
    : 'Use cases';

  // Statuses present in this filtered list, in a fixed order
  const STATUS_ORDER: Status[] = [
    'industrialise',
    'en-deploiement',
    'en-attente',
    'poc',
    'qualifie',
    'contact',
  ];

  const availableStatuses = useMemo(() => {
    const counts: Partial<Record<Status, number>> = {};
    filtered.forEach((uc) => {
      counts[uc.status] = (counts[uc.status] ?? 0) + 1;
    });
    return STATUS_ORDER.filter((s) => counts[s]);
  }, [filtered]);

  const countByStatus = useMemo(() => {
    const counts: Partial<Record<Status, number>> = {};
    filtered.forEach((uc) => {
      counts[uc.status] = (counts[uc.status] ?? 0) + 1;
    });
    return counts;
  }, [filtered]);

  const displayed = selectedStatus
    ? filtered.filter((uc) => uc.status === selectedStatus)
    : filtered;

  const subtitle = service
    ? `${filtered.length} use case${filtered.length > 1 ? 's' : ''} IA dans cette direction`
    : `${filtered.length} solution${filtered.length > 1 ? 's' : ''} IA pour cet enjeu`;

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 40%, #F8F9FF 100%)' }}
    >
      <div className="orb orb-blue" style={{ width: 500, height: 500, top: -100, right: -150, opacity: 0.30 }} />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <PageTopBar />
          <BackButton to={backTo} label={backLabel} />

          <div className="mt-6">
            <h1 className="text-2xl md:text-3xl font-black mb-1 leading-snug" style={{ color: '#040037' }}>
              {title}
            </h1>
            <p className="text-sm" style={{ color: 'rgba(4,0,55,0.50)' }}>
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Status filter pills */}
        {availableStatuses.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="flex items-center gap-2 flex-wrap mb-6"
          >
            {/* "Tous" pill */}
            <button
              onClick={() => setSelectedStatus(null)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={
                selectedStatus === null
                  ? {
                      background: '#040037',
                      color: '#ffffff',
                      boxShadow: '0 2px 8px rgba(4,0,55,0.20)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.80)',
                      border: '1px solid rgba(4,0,55,0.12)',
                      color: 'rgba(4,0,55,0.60)',
                    }
              }
            >
              Tous
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{
                  background: selectedStatus === null ? 'rgba(255,255,255,0.20)' : 'rgba(4,0,55,0.08)',
                }}
              >
                {filtered.length}
              </span>
            </button>

            {availableStatuses.map((status) => {
              const cfg = STATUS_CONFIG[status];
              const isActive = selectedStatus === status;
              return (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(isActive ? null : status)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: cfg.color,
                          color: '#ffffff',
                          boxShadow: `0 2px 10px ${cfg.color}55`,
                        }
                      : {
                          background: cfg.bg,
                          border: `1px solid ${cfg.color}44`,
                          color: cfg.color,
                        }
                  }
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: isActive ? 'rgba(255,255,255,0.80)' : cfg.dot }}
                  />
                  {cfg.label}
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.20)' : `${cfg.color}22`,
                    }}
                  >
                    {countByStatus[status]}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Empty state */}
        {displayed.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-medium" style={{ color: 'rgba(4,0,55,0.50)' }}>
              Aucun use case pour ce statut.
            </p>
            <button
              onClick={() => setSelectedStatus(null)}
              className="mt-4 text-sm font-semibold hover:underline"
              style={{ color: '#00C8FF' }}
            >
              Voir tous les use cases
            </button>
          </motion.div>
        )}

        {/* Grid */}
        <AnimatePresence mode="wait">
          {displayed.length > 0 && (
            <motion.div
              key={selectedStatus ?? 'all'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {displayed.map((uc, i) => (
                <UseCaseCard key={uc.id} useCase={uc} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
