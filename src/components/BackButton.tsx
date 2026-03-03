import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  to?: string;
  label?: string;
}

export default function BackButton({ to, label = 'Retour' }: Props) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group"
      style={{ color: hovered ? 'rgba(4,0,55,0.85)' : 'rgba(4,0,55,0.45)' }}
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {label}
    </motion.button>
  );
}
