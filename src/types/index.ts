export type Status =
  | 'industrialise'
  | 'en-deploiement'
  | 'poc'
  | 'en-attente'
  | 'qualifie'
  | 'contact';

export type Service =
  | 'marques'
  | 'supply-chain'
  | 'rh'
  | 'innovation'
  | 'finance'
  | 'retail-international'
  | 'omnicanal'
  | 'collection'
  | 'operations';

export type Irritant =
  | 'repetitif'
  | 'contenu'
  | 'international'
  | 'information'
  | 'analyse'
  | 'visuel';

export interface UseCase {
  id: string;
  name: string;
  storytellingName: string;
  service: Service;
  irritants: Irritant[];
  status: Status;
  outil: string;
  probleme: string;
  solution: string;
  impact: string;
  impactChiffre?: string;
  citation: string;
  citationAuteur?: string;
  imageUrl?: string;
}

export interface ServiceDef {
  id: Service;
  label: string;
  emoji: string;
  description: string;
}

export interface IrritantDef {
  id: Irritant;
  label: string;
  emoji: string;
  description: string;
}

export const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; dot: string }> = {
  'industrialise': {
    label: 'Actif',
    color: '#00D68F',
    bg: 'rgba(0, 214, 143, 0.12)',
    dot: '#00D68F',
  },
  'en-deploiement': {
    label: 'En déploiement',
    color: '#FFB830',
    bg: 'rgba(255, 184, 48, 0.12)',
    dot: '#FFB830',
  },
  'en-attente': {
    label: 'En attente',
    color: '#FFB830',
    bg: 'rgba(255, 184, 48, 0.12)',
    dot: '#FFB830',
  },
  'poc': {
    label: 'POC',
    color: '#00C8FF',
    bg: 'rgba(0, 200, 255, 0.12)',
    dot: '#00C8FF',
  },
  'qualifie': {
    label: 'En qualification',
    color: '#8892B0',
    bg: 'rgba(136, 146, 176, 0.12)',
    dot: '#8892B0',
  },
  'contact': {
    label: 'En exploration',
    color: '#8892B0',
    bg: 'rgba(136, 146, 176, 0.12)',
    dot: '#8892B0',
  },
};

export const SERVICES: ServiceDef[] = [
  { id: 'marques', label: 'Marques & Brand Content', emoji: '🎨', description: 'Contenus, visuels, descriptifs produits' },
  { id: 'supply-chain', label: 'Supply Chain', emoji: '🚚', description: 'Logistique, fournisseurs, entrepôts' },
  { id: 'rh', label: 'Ressources Humaines', emoji: '👥', description: 'Recrutement, formation, développement' },
  { id: 'innovation', label: 'Innovation & IA', emoji: '⚡', description: 'Productivité, outils, transformation' },
  { id: 'finance', label: 'Finance & Juridique', emoji: '⚖️', description: 'Achats, contrats, conformité RGPD' },
  { id: 'retail-international', label: 'Retail International', emoji: '🌍', description: 'Expansion, traduction, veille pays' },
  { id: 'omnicanal', label: 'Omnicanal & Data', emoji: '📊', description: 'Data, marketplace, e-commerce' },
  { id: 'collection', label: 'Collection', emoji: '👗', description: 'Tendances mode, offre produit' },
  { id: 'operations', label: 'Opérations', emoji: '🏪', description: 'Projets transverses, magasins, réputation' },
];

export const IRRITANTS: IrritantDef[] = [
  { id: 'repetitif', emoji: '🕐', label: "Gagner du temps sur les tâches répétitives", description: "Actions manuelles, copier-coller, routines chronophages" },
  { id: 'contenu', emoji: '📝', label: "Accélérer et scaler ma production de contenu", description: "Rédaction, édition, descriptifs, briefs, CR" },
  { id: 'international', emoji: '🌍', label: "Réussir ma collaboration internationale", description: "Traduction, langues, adaptation culturelle" },
  { id: 'information', emoji: '🔍', label: "Centraliser l'information et y accéder en un instant", description: "Documentation, procédures, connaissances dispersées" },
  { id: 'analyse', emoji: '📊', label: "Exploiter mes données pour décider plus vite", description: "Rapports, tendances, tableaux, décisions" },
  { id: 'visuel', emoji: '🎨', label: "Produire des visuels de qualité professionnelle", description: "Photos, shoots, assets graphiques, créas" },
];
