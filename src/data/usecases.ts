import type { UseCase } from '../types';

export const USE_CASES: UseCase[] = [
  // ─── MARQUES / BRAND CONTENT ────────────────────────────────────────────────
  {
    id: "descriptifs-produits",
    name: "Génération de Descriptifs Produits + Éditos",
    storytellingName: "Des descriptifs produits écrits en quelques secondes",
    service: "marques",
    irritants: ["contenu", "repetitif"],
    status: "en-deploiement",
    outil: "IAK / Factory",
    probleme:
      "L'enjeu : produire des descriptifs produits cohérents à grande échelle sur tout le catalogue, sans mobiliser des équipes entières sur des tâches répétitives ni dépendre de prestataires coûteux.",
    solution:
      "IAK génère automatiquement des descriptifs produits et des éditos cohérents avec le tone of voice KIABI, en quelques secondes par référence. La Factory orchestre le tout à grande échelle, sur tout le catalogue.",
    impact:
      "Réduction massive des coûts de rédaction freelance et agence. Cohérence parfaite du tone of voice sur toutes les références. Les équipes se concentrent sur la stratégie créative, pas l'exécution.",
    impactChiffre: "90% du catalogue couvert",
    citation:
      "Avant, rédiger 50 descriptifs me prenait toute une matinée. Maintenant c'est fait en 20 minutes et la qualité est vraiment au rendez-vous.",
    citationAuteur: "Chargée de contenu, Marques",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "traduction-descriptifs",
    name: "Traduction Descriptif Produit Pays Socle",
    storytellingName: "170 000 € économisés sur les traductions produits chaque année",
    service: "marques",
    irritants: ["international", "contenu", "repetitif"],
    status: "en-deploiement",
    outil: "Factory",
    probleme:
      "L'enjeu : adapter chaque descriptif produit dans les langues des pays socles rapidement et à moindre coût, tout en préservant la cohérence du ton de marque sur tous les marchés.",
    solution:
      "La Factory traduit automatiquement les descriptifs produits vers les langues des pays socles, en moins d'une minute par référence. La qualité est contrôlée et le tone of voice est préservé.",
    impact:
      "170 000 € économisés par an. Moins d'1 minute par descriptif traduit. Une note qualité mesurée à 8,1/10 — comparable aux traducteurs humains.",
    impactChiffre: "170K€/an économisés",
    citation:
      "La qualité des traductions a vraiment surpris tout le monde. Et le gain de temps est impressionnant — on n'imagine plus s'en passer.",
    citationAuteur: "Responsable contenu e-commerce",
    imageUrl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "visuels-kids-ia",
    name: "Génération de Contenus Visuels IA (Kids/Baby)",
    storytellingName: "Des visuels enfants créés par IA, sans budget shoot",
    service: "marques",
    irritants: ["visuel"],
    status: "poc",
    outil: "ArtCare / Fashion Snap",
    probleme:
      "L'enjeu : disposer de visuels produits de qualité pour les collections Kids et Baby sans mobiliser un budget shoot conséquent à chaque saison.",
    solution:
      "ArtCare et Fashion Snap génèrent des visuels produits réalistes par IA directement sur les pièces, sans mannequin physique ni studio. Le POC explore le rendu et la qualité perçue.",
    impact:
      "Réduction significative du budget shoots, des coûts mannequins et des droits image. Un time-to-market accéléré sur les nouvelles références.",
    citation:
      "Les premiers visuels générés sont vraiment bluffants pour des produits Kids. On teste encore, mais le potentiel est énorme.",
    citationAuteur: "Chef de projet créa, Kids",
    imageUrl: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "mannequins-ecom-ia",
    name: "Génération de Mannequins IA E-COM",
    storytellingName: "Des mannequins e-commerce générés par IA pour chaque référence",
    service: "marques",
    irritants: ["visuel", "repetitif"],
    status: "poc",
    outil: "Meeddle / Style3D",
    probleme:
      "L'enjeu : accélérer la mise en ligne de nouvelles références e-commerce avec des visuels de qualité, sans les contraintes logistiques et financières d'un shooting mannequin à chaque fois.",
    solution:
      "Meeddle et Style3D permettent de générer des mannequins IA portant les vêtements KIABI sur des photos produits, avec un réalisme croissant.",
    impact:
      "Réduction des coûts de shoots e-commerce et accélération du time-to-market. Possibilité de mettre en ligne des produits sans attendre un shooting.",
    citation:
      "Si ça marche à grande échelle, on révolutionne notre façon de faire le e-com. Le POC est prometteur.",
    citationAuteur: "Directeur e-commerce",
    imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "social-media-pencil",
    name: "Déclinaison Social Media PAID (Pencil)",
    storytellingName: "+79% de performance créa sur les campagnes social media",
    service: "marques",
    irritants: ["contenu", "visuel"],
    status: "poc",
    outil: "Pencil",
    probleme:
      "L'enjeu : maximiser la performance des campagnes social media payantes en testant rapidement un maximum de variantes créatives, sans sur-solliciter les équipes créa et media.",
    solution:
      "Pencil génère et optimise automatiquement des dizaines de déclinaisons créatives pour les campagnes social media payantes, en quelques minutes.",
    impact:
      "+79% de performance créative mesurée. Doublement de l'amélioration des résultats des campagnes par rapport aux créas manuelles.",
    impactChiffre: "+79% performance créa",
    citation:
      "Les chiffres de performance ont vraiment convaincu les sceptiques. On voit la différence dans les KPIs de façon très claire.",
    citationAuteur: "Responsable Social Media",
    imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "creative-lift",
    name: "Analyse Creative LIFT Social Media",
    storytellingName: "70% des performances d'une campagne viennent de la créa — on peut maintenant le mesurer",
    service: "marques",
    irritants: ["analyse"],
    status: "industrialise",
    outil: "Creative LIFT",
    probleme:
      "L'enjeu : objectiver les décisions créatives sur les campagnes social media en s'appuyant sur des données réelles plutôt que l'intuition, pour maximiser le ROI de chaque investissement.",
    solution:
      "Creative LIFT analyse en temps réel les performances créatives de chaque visuel et copy pour identifier objectivement les leviers gagnants et guider les arbitrages.",
    impact:
      "Investissement de 25K€ avec une découverte majeure : 70% des performances d'une campagne sont directement liées à la qualité créative. Des décisions mieux informées.",
    impactChiffre: "70% des perfs = la créa",
    citation:
      "On savait intuitivement que la créa comptait, mais là on a des preuves chiffrées. Ça change complètement nos arbitrages de budget.",
    citationAuteur: "Head of Digital Marketing",
    imageUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "validateur-bat",
    name: "Validateur BAT & Bon de Commande ILV/PLV",
    storytellingName: "Zéro erreur sur les BAT magasin avant production",
    service: "marques",
    irritants: ["repetitif", "analyse"],
    status: "poc",
    outil: "IAK / Factory",
    probleme:
      "L'enjeu : fiabiliser la chaîne de validation des BAT et bons de commande ILV/PLV pour éliminer les erreurs avant production et réduire les allers-retours entre équipes.",
    solution:
      "IAK vérifie automatiquement les BAT et bons de commande ILV/PLV avant envoi, en détectant les incohérences de prix, de références et de conformité.",
    impact:
      "Réduction des erreurs qui arrivent jusqu'en magasin. Moins d'allers-retours entre équipes. Moins de corrections coûteuses après production.",
    citation:
      "On avait régulièrement des erreurs découvertes en magasin. Maintenant le validateur catch la plupart des problèmes avant qu'ils partent.",
    citationAuteur: "Responsable ILV/PLV",
    imageUrl: "https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "edito-kiabi",
    name: "Édito Kiabi multi-supports",
    storytellingName: "L'édito Kiabi, cohérent et prêt sur tous les supports",
    service: "marques",
    irritants: ["contenu"],
    status: "industrialise",
    outil: "ChatGPT / IAK",
    probleme:
      "L'enjeu : maintenir une cohérence éditoriale parfaite sur tous les supports de communication KIABI, sans dépendre entièrement de l'agence pour chaque production de contenu.",
    solution:
      "ChatGPT et IAK co-rédigent les contenus éditoriaux Kiabi multi-supports en respectant la charte éditoriale, avec des variations adaptées à chaque canal.",
    impact:
      "Réduction des coûts d'agence LSDP. Cohérence éditoriale assurée sur tous les canaux de communication.",
    citation:
      "On gagne un temps précieux et l'agence se concentre maintenant sur la stratégie plutôt que l'exécution mécanique.",
    citationAuteur: "Brand Content Manager",
    imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "traduction-comms-internationales",
    name: "Traduction Communications Internationales",
    storytellingName: "Tes communications internationales traduites en quelques clics",
    service: "marques",
    irritants: ["international", "contenu"],
    status: "qualifie",
    outil: "Factory",
    probleme:
      "L'enjeu : mettre les communications à disposition des équipes internationales rapidement, sans que les délais de traduction ne freinent l'avancement des projets.",
    solution:
      "La Factory traduit automatiquement les communications internes et externes vers les langues des marchés KIABI, en conservant le tone of voice.",
    impact:
      "Réduction significative du time-to-market. Economies sur les coûts de traduction des communications courantes.",
    citation:
      "Plus besoin d'attendre une semaine pour avoir une traduction. C'est quasi instantané et le rendu est propre.",
    citationAuteur: "Coordinatrice International",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "audio-elevenlabs",
    name: "Déclinaison Langues Audio (ElevenLabs)",
    storytellingName: "Les spots audio TV déclinés en 8 langues pour moitié moins cher",
    service: "marques",
    irritants: ["international", "contenu"],
    status: "industrialise",
    outil: "ElevenLabs",
    probleme:
      "L'enjeu : adapter les campagnes audiovisuelles à chaque pays à moindre coût et dans des délais réduits, sans sacrifier la qualité des voix ni l'impact émotionnel.",
    solution:
      "ElevenLabs clone et adapte les voix des spots en plusieurs langues automatiquement, avec une qualité proche du studio. Déployé sur la campagne TV été 2024.",
    impact:
      "Coût audio divisé par 2 : 13K€ contre 35K€ pour la campagne TV été 2024. Même qualité perçue, délais réduits.",
    impactChiffre: "Coût / 2 (13K€ vs 35K€)",
    citation:
      "La qualité des voix IA a dépassé nos attentes. Même l'équipe créa a été surprise — on ne fait plus sans.",
    citationAuteur: "Responsable production audiovisuelle",
    imageUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── SUPPLY CHAIN ────────────────────────────────────────────────────────────
  {
    id: "assistant-sc-fourn-entrepot",
    name: "Assistant Supply Chain Fournisseur vers Entrepôt",
    storytellingName: "Tes questions supply chain répondues instantanément, sans déranger personne",
    service: "supply-chain",
    irritants: ["information", "repetitif"],
    status: "qualifie",
    outil: "IAK RAG",
    probleme:
      "L'enjeu : permettre aux équipes terrain d'accéder instantanément aux informations supply chain — délais, procédures, contacts — sans monopoliser l'attention des experts.",
    solution:
      "IAK RAG centralise toute la documentation supply chain et répond en temps réel aux questions des équipes, du fournisseur jusqu'à l'entrepôt — en langage naturel.",
    impact:
      "Réduction significative du flux de questions répétitives sur Teams. Les équipes sont plus autonomes et les réponses sont plus rapides et fiables.",
    citation:
      "Je cherchais une info sur un délai fournisseur, j'avais la réponse en 10 secondes sans avoir à déranger personne.",
    citationAuteur: "Responsable logistique entrepôt",
    imageUrl: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-sc-entrepot-magasin",
    name: "Assistant Supply Chain Entrepôt vers Magasin",
    storytellingName: "La documentation technique supply, accessible en un mot",
    service: "supply-chain",
    irritants: ["information", "repetitif"],
    status: "qualifie",
    outil: "IAK RAG",
    probleme:
      "L'enjeu : rendre la documentation technique entrepôt-magasin réellement accessible, pour que les équipes trouvent la bonne procédure en quelques secondes plutôt qu'en plusieurs minutes de recherche.",
    solution:
      "IAK RAG indexe toute la documentation entrepôt-magasin et permet une recherche en langage naturel pour un accès immédiat à la bonne information.",
    impact:
      "Accès immédiat à la documentation technique. Plus besoin de fouiller dans des dossiers partagés pendant de longues minutes.",
    citation:
      "Avant je passais 20 minutes à chercher une procédure dans les fichiers. Maintenant je pose la question et j'ai la réponse.",
    citationAuteur: "Coordinateur flux magasins",
    imageUrl: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "doc-supply",
    name: "Documentation Supply (rédaction assistée)",
    storytellingName: "Rédiger et mettre à jour la doc supply en deux fois moins de temps",
    service: "supply-chain",
    irritants: ["contenu", "repetitif"],
    status: "qualifie",
    outil: "IAK",
    probleme:
      "L'enjeu : disposer d'une documentation supply chain à jour et homogène, sans mobiliser en permanence les experts sur une tâche à faible valeur ajoutée pour eux.",
    solution:
      "IAK assiste la rédaction de documentation supply, en structurant et uniformisant automatiquement les contenus à partir des informations clés.",
    impact:
      "Gain de productivité notable sur la production documentaire. Base documentaire unifiée et plus facilement maintenable.",
    citation:
      "La doc était un chantier constant. Avec l'assistant, on a enfin une base propre, à jour et que tout le monde peut utiliser.",
    citationAuteur: "Expert process Supply Chain",
    imageUrl: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── RESSOURCES HUMAINES ─────────────────────────────────────────────────────
  {
    id: "assistant-entretien-embauche",
    name: "Assistant Entretien d'Embauche",
    storytellingName: "Des entretiens d'embauche mieux préparés, plus cohérents",
    service: "rh",
    irritants: ["repetitif", "contenu"],
    status: "en-attente",
    outil: "IAK",
    probleme:
      "L'enjeu : garantir des entretiens de recrutement structurés et homogènes sur tous les postes, en dotant chaque recruteur des bons outils de préparation.",
    solution:
      "IAK génère des guides d'entretien personnalisés selon le poste, avec les questions adaptées, les critères d'évaluation et les points de vigilance.",
    impact:
      "Meilleure qualité d'évaluation des candidats. Entretiens plus structurés et objectifs. Expérience candidat améliorée.",
    citation:
      "J'avais tendance à poser toujours les mêmes questions. L'assistant me challenge vraiment sur ce que je dois évaluer pour chaque profil.",
    citationAuteur: "Recruteuse RH",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "noota",
    name: "Noota (compte rendu entretiens auto)",
    storytellingName: "Le compte rendu d'entretien, rédigé pendant la réunion",
    service: "rh",
    irritants: ["repetitif", "contenu"],
    status: "contact",
    outil: "Noota",
    probleme:
      "L'enjeu : capturer fidèlement les échanges clés de chaque entretien pour des décisions de recrutement mieux documentées, sans sacrifier la qualité de l'écoute.",
    solution:
      "Noota transcrit et synthétise automatiquement les entretiens en compte rendu structuré, en temps réel, pendant que tu te concentres sur l'échange.",
    impact:
      "Gain de temps majeur post-entretien. Comptes rendus standardisés. Réduction des biais de mémoire dans les décisions de recrutement.",
    citation:
      "Je peux enfin me concentrer sur le candidat pendant l'entretien, sans avoir un stylo dans la main pour noter en permanence.",
    citationAuteur: "Manager recrutement",
    imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "matching-jobdesc-kornferry",
    name: "Assistant Matching JobDesc / Korn Ferry",
    storytellingName: "5 heures gagnées par fiche de poste RH",
    service: "rh",
    irritants: ["repetitif", "contenu"],
    status: "contact",
    outil: "IAK",
    probleme:
      "L'enjeu : aligner efficacement chaque fiche de poste avec le référentiel Korn Ferry pour garantir la cohérence du système de classification, sans y consacrer des heures.",
    solution:
      "IAK analyse et aligne automatiquement les fiches de poste avec le référentiel Korn Ferry, en suggérant les modifications pertinentes.",
    impact:
      "5 heures gagnées par fiche de poste. La RH peut se concentrer sur des missions à plus haute valeur ajoutée.",
    impactChiffre: "5h gagnées par fiche",
    citation:
      "Ce travail d'alignement Korn Ferry était fastidieux. Maintenant c'est fait en 15 minutes au lieu d'une demi-journée.",
    citationAuteur: "HRBP senior",
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "classification-cv",
    name: "Assistant Classification CV",
    storytellingName: "Trier 200 CVs sans y passer sa journée",
    service: "rh",
    irritants: ["repetitif", "analyse"],
    status: "poc",
    outil: "IAK",
    probleme:
      "L'enjeu : traiter efficacement un volume important de candidatures pour identifier rapidement les profils les plus pertinents, et recentrer les recruteurs sur leur vrai rôle.",
    solution:
      "IAK analyse et classe automatiquement les CVs selon les critères du poste, en produisant une shortlist argumentée avec les profils les plus pertinents.",
    impact:
      "Optimisation majeure de la présélection RH. Les recruteurs focalisent leur énergie sur l'essentiel — évaluer les meilleurs profils.",
    citation:
      "Sur notre dernier recrutement, on avait 180 CVs. L'assistant nous a sorti un top 20 pertinent en quelques minutes. Bluffant.",
    citationAuteur: "Chargée de recrutement",
    imageUrl: "https://images.pexels.com/photos/3760510/pexels-photo-3760510.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "carto-risques-magasins",
    name: "Cartographie des risques magasins",
    storytellingName: "Anticiper les risques magasin avant qu'ils surviennent",
    service: "rh",
    irritants: ["analyse"],
    status: "qualifie",
    outil: "IAK",
    probleme:
      "L'enjeu : passer d'un management réactif à un management préventif en détectant les signaux faibles dans les indicateurs magasin, avant que les situations ne deviennent critiques.",
    solution:
      "IAK analyse les indicateurs clés de chaque magasin et génère une cartographie des risques avec des plans d'action préventifs priorisés.",
    impact:
      "Plans d'action préventifs par magasin. Réduction des situations critiques non anticipées. Management plus proactif.",
    citation:
      "On pouvait voir les problèmes arriver dans certains magasins, mais on manquait d'outils pour les prioriser et agir avant.",
    citationAuteur: "DRH Retail",
    imageUrl: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "kit-formation",
    name: "Assistant Kit de Formation",
    storytellingName: "Les kits de formation construits avant même d'appeler un prestataire",
    service: "rh",
    irritants: ["contenu", "repetitif"],
    status: "industrialise",
    outil: "IAK",
    probleme:
      "L'enjeu : prendre la main sur le contenu pédagogique en amont du prestataire pour arriver avec une base solide et challengée, et garantir un résultat final de qualité.",
    solution:
      "IAK génère des kits de formation complets et structurés sur mesure, permettant de challenger le contenu pédagogique avant de le confier à un sous-traitant.",
    impact:
      "Production de formations accélérée. Meilleur contenu challengé en amont. Les prestataires travaillent sur une base solide.",
    citation:
      "Maintenant j'arrive chez le prestataire avec une base vraiment solide. Le résultat final est bien meilleur qu'avant.",
    citationAuteur: "Responsable formation",
    imageUrl: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "entretiens-developpement",
    name: "Assistant Entretiens de Développement",
    storytellingName: "Des entretiens de développement qui ont vraiment du sens",
    service: "rh",
    irritants: ["repetitif", "information"],
    status: "industrialise",
    outil: "IAK RAG",
    probleme:
      "L'enjeu : permettre à chaque manager de mener des entretiens de développement de qualité, en leur donnant accès aux bons repères et outils au bon moment.",
    solution:
      "IAK RAG guide les managers dans la conduite d'entretiens de développement avec des recommandations contextualisées et des outils adaptés à chaque collaborateur.",
    impact:
      "Qualité des entretiens managers nettement améliorée. Meilleure cohérence dans l'accompagnement des équipes sur toute l'organisation.",
    citation:
      "J'ai des managers qui m'ont dit que c'était les premiers entretiens de dev où ils se sentaient vraiment prêts et outillés.",
    citationAuteur: "DRH Développement RH",
    imageUrl: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── INNOVATION & IA ─────────────────────────────────────────────────────────
  {
    id: "coach-bienetre",
    name: "Assistant Coach Bien-être & Productivité",
    storytellingName: "Un coach perso dans ta poche pour gérer ton énergie",
    service: "innovation",
    irritants: ["information", "repetitif"],
    status: "industrialise",
    outil: "IAK",
    probleme:
      "L'enjeu : aider les collaborateurs à mieux gérer leur énergie et leurs priorités au quotidien, pour des journées plus sereines et une meilleure efficacité dans la durée.",
    solution:
      "IAK joue le rôle de coach personnel en proposant des conseils de bien-être et de productivité adaptés à ton rythme, tes priorités et tes objectifs.",
    impact:
      "Meilleure gestion de l'énergie quotidienne. Journées moins stressantes et mieux structurées. Plus de sérénité dans le travail.",
    citation:
      "C'est un peu comme avoir un coach perso dans sa poche. Ça aide vraiment à prendre du recul sur ses journées.",
    citationAuteur: "Collaboratrice, siège KIABI",
    imageUrl: "https://images.pexels.com/photos/3822819/pexels-photo-3822819.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "planification-intelligente",
    name: "Assistant Planification Intelligente",
    storytellingName: "Ta roadmap projet construite en un clic",
    service: "innovation",
    irritants: ["repetitif", "analyse"],
    status: "en-attente",
    outil: "IAK",
    probleme:
      "L'enjeu : structurer rapidement un plan projet rigoureux intégrant priorités, dépendances et contraintes — pour démarrer sur des bases solides et ajustables.",
    solution:
      "IAK structure intelligemment les tâches et génère une roadmap projet optimisée selon les priorités, les contraintes et les ressources disponibles.",
    impact:
      "Roadmap générée en quelques minutes plutôt que quelques heures. Structuration des tâches plus rigoureuse et facilement ajustable.",
    citation:
      "J'ai testé sur mon dernier projet. En 10 minutes j'avais une roadmap que j'aurais mis 2h à faire seul, et bien mieux structurée.",
    citationAuteur: "Chef de projet digital",
    imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "compte-rendu-reunion",
    name: "Assistant Compte Rendu de Réunion",
    storytellingName: "Plus jamais de réunion sans compte rendu",
    service: "innovation",
    irritants: ["repetitif", "contenu"],
    status: "industrialise",
    outil: "IAK",
    probleme:
      "L'enjeu : systématiser la production de comptes rendus de qualité après chaque réunion, sans que ce soit une charge supplémentaire pour les équipes.",
    solution:
      "IAK génère automatiquement des comptes rendus de réunion structurés avec les actions, décisions et points à suivre, à partir de quelques notes clés.",
    impact:
      "Gain de temps majeur sur les CR. Homogénéisation de la pratique dans toute l'entreprise. Plus aucune décision oubliée.",
    citation:
      "Mon équipe s'est mise à faire des CR de toutes les réunions depuis qu'on a l'assistant. Avant, on en faisait quasiment aucun.",
    citationAuteur: "Manager, direction digitale",
    imageUrl: "https://images.pexels.com/photos/3182795/pexels-photo-3182795.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "lemon-learning",
    name: "Lemon Learning (adoption digitale)",
    storytellingName: "Les tutos directement dans l'outil, au moment où tu en as besoin",
    service: "innovation",
    irritants: ["information", "repetitif"],
    status: "poc",
    outil: "Lemon Learning",
    probleme:
      "L'enjeu : maximiser l'adoption des outils digitaux en rendant la formation disponible au moment exact où l'utilisateur en a besoin, directement dans son contexte d'usage.",
    solution:
      "Lemon Learning intègre des tutoriels IA directement dans les interfaces des outils digitaux, affichés au moment précis où l'utilisateur en a besoin.",
    impact:
      "Meilleure adoption des outils digitaux. Moins de sollicitations du support. Formation juste-à-temps, plus efficace que les formations ponctuelles.",
    citation:
      "C'est comme avoir quelqu'un à côté de toi qui te guide dans l'outil. Ça change tout pour les nouveaux arrivants.",
    citationAuteur: "Responsable digital workplace",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── FINANCE & JURIDIQUE ─────────────────────────────────────────────────────
  {
    id: "assistant-juridique",
    name: "Assistant Juridique",
    storytellingName: "Une première lecture de contrat en 2 minutes",
    service: "finance",
    irritants: ["information", "analyse", "repetitif"],
    status: "industrialise",
    outil: "IAK",
    probleme:
      "L'enjeu : donner aux équipes métier une première autonomie sur les questions juridiques courantes pour accélérer les projets, sans surcharger les experts sur des demandes basiques.",
    solution:
      "IAK fait une première analyse des contrats et documents juridiques, en identifiant les points clés, les clauses à risque et les éléments à valider.",
    impact:
      "Première lecture contrats accélérée. Les équipes métier montent en compétences sur les basics juridiques sans solliciter les experts pour chaque question.",
    citation:
      "Je peux maintenant répondre à des questions juridiques simples sans solliciter l'équipe juridique à chaque étape de mon projet.",
    citationAuteur: "Chef de projet Innovation",
    imageUrl: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "challenge-achats-indirects",
    name: "Assistant Challenge Achats Indirects",
    storytellingName: "Challenger les devis fournisseurs avec des données réelles",
    service: "finance",
    irritants: ["analyse", "information"],
    status: "qualifie",
    outil: "IAK",
    probleme:
      "L'enjeu : arriver en négociation fournisseur avec des benchmarks solides pour challenger les devis de manière objective et maximiser les économies sur les achats indirects.",
    solution:
      "IAK recherche des données de marché et analyse les fichiers fournisseurs pour aider les acheteurs à challenger les offres reçues avec des arguments concrets.",
    impact:
      "Meilleure capacité de négociation grâce à des benchmarks précis. Economies potentielles sur les achats indirects.",
    citation:
      "Avant je prenais les devis un peu comme ils venaient. Maintenant j'arrive en négociation avec des benchmarks solides.",
    citationAuteur: "Acheteur indirect",
    imageUrl: "https://images.pexels.com/photos/3183131/pexels-photo-3183131.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "process-achats-indirects",
    name: "Assistant Process Achats Indirects",
    storytellingName: "Les procédures achats disponibles en temps réel",
    service: "finance",
    irritants: ["information", "repetitif"],
    status: "industrialise",
    outil: "IAK RAG",
    probleme:
      "L'enjeu : rendre les procédures achats indirects immédiatement accessibles pour que les équipes avancent en autonomie, sans perdre de temps en recherche documentaire.",
    solution:
      "IAK RAG indexe toutes les procédures achats et répond instantanément aux questions des équipes en langage naturel.",
    impact:
      "Gain de productivité mesurable. Réponses aux procédures en quelques secondes plutôt qu'en plusieurs minutes de recherche.",
    citation:
      "Je tape ma question et j'ai la procédure applicable. C'est simple et ça fait gagner un temps fou au quotidien.",
    citationAuteur: "Gestionnaire achats indirects",
    imageUrl: "https://images.pexels.com/photos/3760316/pexels-photo-3760316.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-dpo",
    name: "Assistant DPO (RGPD)",
    storytellingName: "L'autonomie RGPD pour chaque chef de projet",
    service: "finance",
    irritants: ["information", "repetitif"],
    status: "contact",
    outil: "IAK",
    probleme:
      "L'enjeu : permettre aux chefs de projet de gérer les questions RGPD courantes en autonomie et d'avancer en conformité, sans bloquer chaque étape sur la disponibilité du DPO.",
    solution:
      "IAK répond aux questions RGPD courantes et guide les chefs de projet dans leur démarche de conformité de façon autonome.",
    impact:
      "Autonomie des chefs de projet sur les questions RGPD basiques. Moins de sollicitations du DPO sur des questions récurrentes.",
    citation:
      "Je n'osais pas avancer sur un projet sans passer par le DPO à chaque étape. Maintenant je peux avancer seul sur les bases.",
    citationAuteur: "Chef de projet data",
    imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── RETAIL INTERNATIONAL ────────────────────────────────────────────────────
  {
    id: "newtone-ppt",
    name: "Newtone (traduction PPT & docs)",
    storytellingName: "Tes PowerPoints traduits en 8 langues en quelques minutes",
    service: "retail-international",
    irritants: ["international", "repetitif"],
    status: "en-attente",
    outil: "Newtone SaaS",
    probleme:
      "L'enjeu : adapter instantanément les présentations et documents pour les équipes internationales, sans que la traduction manuelle devienne un frein à la collaboration.",
    solution:
      "Newtone traduit automatiquement les présentations PowerPoint et documents en 8 langues, en conservant intégralement la mise en page originale.",
    impact:
      "Traduction PPT en quelques minutes au lieu de plusieurs heures. 8 langues couvertes. Mise en page parfaitement préservée.",
    impactChiffre: "8 langues, quelques minutes",
    citation:
      "J'avais une pres à envoyer à nos équipes espagnoles en urgence. Newtone l'a traduite en 5 minutes, mise en page incluse. Parfait.",
    citationAuteur: "Directeur Retail International",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "kudo-traduction",
    name: "KUDO (traduction simultanée réunions)",
    storytellingName: "Des réunions internationales sans barrière de langue",
    service: "retail-international",
    irritants: ["international"],
    status: "poc",
    outil: "KUDO / Teams",
    probleme:
      "L'enjeu : créer un environnement de réunion internationale où chacun s'exprime et comprend dans sa langue, pour des échanges plus riches et des décisions mieux partagées.",
    solution:
      "KUDO intégré à Teams assure une traduction simultanée en temps réel, permettant à chacun de s'exprimer dans sa langue et de comprendre les autres.",
    impact:
      "Zéro barrière linguistique en réunion. Participation accrue des équipes internationales. Décisions plus rapides et mieux comprises.",
    citation:
      "Nos collègues espagnols participaient beaucoup plus depuis qu'on utilise KUDO. La dynamique de réunion a complètement changé.",
    citationAuteur: "Responsable coordination internationale",
    imageUrl: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-veille-pays",
    name: "Assistant Veille Pays",
    storytellingName: "Une étude géopolitique pays bouclée en un jour au lieu de quatre",
    service: "retail-international",
    irritants: ["analyse", "information", "international"],
    status: "contact",
    outil: "IAK",
    probleme:
      "L'enjeu : produire rapidement une veille pays fiable et structurée pour accélérer les décisions d'expansion, sans mobiliser des équipes pendant plusieurs jours.",
    solution:
      "IAK structure et synthétise automatiquement les informations clés pour une veille pays complète : géopolitique, analyse de marché, paysage concurrentiel.",
    impact:
      "Gain d'environ 3 jours par étude pays. Information structurée, exploitable et partageable rapidement en interne.",
    impactChiffre: "~3 jours gagnés par étude",
    citation:
      "On avait besoin d'une analyse rapide sur un nouveau marché. En quelques heures, j'avais quelque chose de vraiment solide.",
    citationAuteur: "Business Developer International",
    imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "etude-pays-kid",
    name: "Étude nouveau pays KID (franchises)",
    storytellingName: "Évaluer un nouveau marché franchise en un jour",
    service: "retail-international",
    irritants: ["analyse", "information", "international"],
    status: "contact",
    outil: "IAK",
    probleme:
      "L'enjeu : accélérer l'évaluation de nouveaux marchés franchise pour saisir les opportunités d'expansion plus vite, avec des analyses structurées et actionnables.",
    solution:
      "IAK analyse les données clés d'un marché potentiel pour les franchises KID et produit une synthèse actionnable pour la prise de décision.",
    impact:
      "Gain d'environ 3 jours par étude pays franchise. Décisions d'expansion mieux informées et plus rapides.",
    impactChiffre: "~3 jours gagnés par étude",
    citation:
      "Avant on passait une semaine sur chaque analyse pays franchise. Maintenant on a une base solide en une journée.",
    citationAuteur: "Responsable développement franchise",
    imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── OMNICANAL & DATA ────────────────────────────────────────────────────────
  {
    id: "data-bigquery",
    name: "IA pour accélérer la DATA (BigQuery)",
    storytellingName: "Interroger la data sans code SQL, en français",
    service: "omnicanal",
    irritants: ["analyse", "information"],
    status: "contact",
    outil: "Agent sémantique BigQuery / SFEIR",
    probleme:
      "L'enjeu : démocratiser l'accès à la donnée pour les équipes métier, sans dépendance technique à l'IT ni connaissance SQL, pour des décisions plus rapides et plus autonomes.",
    solution:
      "Un agent sémantique développé avec SFEIR permet d'interroger BigQuery en langage naturel, sans écrire une seule ligne de SQL.",
    impact:
      "Données accessibles directement pour les équipes métier. Plus besoin de passer par l'IT pour chaque requête data. Décisions accélérées.",
    citation:
      "Je posais des questions à l'IT et j'attendais 3 jours. Maintenant je pose la question directement et j'ai la donnée.",
    citationAuteur: "Business Analyst Marketing",
    imageUrl: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "traduction-marketplace",
    name: "Traduction Auto Marketplace International",
    storytellingName: "Les fiches produit marketplace traduites automatiquement sur tous les marchés",
    service: "omnicanal",
    irritants: ["international", "repetitif", "contenu"],
    status: "poc",
    outil: "Mirakl + API",
    probleme:
      "L'enjeu : déployer les fiches produit sur toutes les marketplaces internationales simultanément, sans que la traduction manuelle devienne un goulot d'étranglement sur le time-to-market.",
    solution:
      "L'intégration Mirakl + API traduit automatiquement les fiches produits pour chaque marketplace internationale, en conservant la cohérence des données.",
    impact:
      "Accélération du time-to-market sur IT/ES/BE/PT. Moins de ressources mobilisées sur la traduction répétitive.",
    citation:
      "On peut maintenant lancer des produits sur toutes les marketplaces en même temps, sans délai de traduction. Gain réel.",
    citationAuteur: "Responsable Marketplace",
    imageUrl: "https://images.pexels.com/photos/5632387/pexels-photo-5632387.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "feed-ia-arcane",
    name: "FEED IA by Arcane",
    storytellingName: "Plus d'impressions, plus de clics sur les flux produits",
    service: "omnicanal",
    irritants: ["analyse", "contenu"],
    status: "contact",
    outil: "Arcane",
    probleme:
      "L'enjeu : maximiser les performances des flux produits sur chaque canal digital, en maintenant une optimisation continue sans mobiliser de ressources dédiées.",
    solution:
      "Arcane optimise automatiquement les flux produits avec l'IA pour maximiser les impressions et le taux de clics sur chaque canal.",
    impact:
      "Optimisation continue des flux produits sans effort manuel. Augmentation mesurable des impressions et du taux de clics.",
    citation:
      "On sous-exploitait clairement nos flux. Les premières optimisations Arcane ont eu un impact visible en quelques semaines.",
    citationAuteur: "Traffic Manager",
    imageUrl: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "vigie-marketplace",
    name: "Vigie (analyse marketplace)",
    storytellingName: "Trouver les trous dans la raquette marketplace avant la concurrence",
    service: "omnicanal",
    irritants: ["analyse"],
    status: "contact",
    outil: "Vigie.co",
    probleme:
      "L'enjeu : identifier en continu les opportunités de croissance sur les marketplaces avant la concurrence, pour un positionnement offre plus agile et réactif.",
    solution:
      "Vigie.co analyse en continu les marketplaces pour identifier les opportunités de croissance et détecter les segments de marché sous-représentés.",
    impact:
      "Identification des segments à forte opportunité. Détection des trous de marché avant la concurrence.",
    citation:
      "On a découvert des niches produits qu'on n'aurait jamais identifiées sans Vigie. C'était de la croissance qu'on laissait sur la table.",
    citationAuteur: "Category Manager",
    imageUrl: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── COLLECTION ──────────────────────────────────────────────────────────────
  {
    id: "livetrend",
    name: "Livetrend (anticipation tendances mode)",
    storytellingName: "Anticiper les tendances mode avec 1 000+ attributs analysés en temps réel",
    service: "collection",
    irritants: ["analyse"],
    status: "industrialise",
    outil: "Livetrend SaaS",
    probleme:
      "L'enjeu : anticiper les tendances mode avec précision à partir d'un volume de signaux impossible à traiter manuellement, pour des décisions de collection mieux fondées.",
    solution:
      "Livetrend analyse automatiquement plus de 1 000 attributs mode sur l'ensemble des marchés pour des insights prédictifs sur les tendances émergentes.",
    impact:
      "Décisions créatives data-driven. Analyse de 1 000+ attributs mode en temps réel. Meilleure précision dans les choix de collection.",
    impactChiffre: "1 000+ attributs analysés",
    citation:
      "Les data nous montrent parfois des tendances contre-intuitives. Et quand on les suit, les ventes le confirment systématiquement.",
    citationAuteur: "Directrice Création",
    imageUrl: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-marketing-offre",
    name: "Assistant Marketing de l'Offre",
    storytellingName: "Des préconisations stratégiques collection en quelques minutes",
    service: "collection",
    irritants: ["analyse", "contenu"],
    status: "industrialise",
    outil: "IAK",
    probleme:
      "L'enjeu : accélérer la production de préconisations stratégiques sur les collections en s'appuyant sur une synthèse des données offre, pour mieux challenger les intuitions créatives.",
    solution:
      "IAK analyse les données d'offre et génère des préconisations stratégiques sur les collections, avec une argumentation structurée et des insights activables.",
    impact:
      "Préconisations stratégiques produites bien plus rapidement. Meilleure cohérence dans l'analyse de l'offre entre les équipes.",
    citation:
      "Je peux challenger mes propres intuitions avec des données. L'assistant me force à argumenter mes recommandations.",
    citationAuteur: "Responsable marketing produit",
    imageUrl: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ─── OPÉRATIONS ──────────────────────────────────────────────────────────────
  {
    id: "assistant-chef-projet-copil",
    name: "Assistant Chef de Projet (COPIL)",
    storytellingName: "Des slides COPIL qui racontent vraiment ton projet",
    service: "operations",
    irritants: ["contenu", "repetitif"],
    status: "qualifie",
    outil: "IAK",
    probleme:
      "L'enjeu : arriver en COPIL avec des slides qui racontent clairement l'avancement du projet et convainquent le comité, pour des prises de décision facilitées.",
    solution:
      "IAK aide à construire et challenger les slides COPIL, en améliorant le storytelling, la structure argumentaire et la clarté des messages.",
    impact:
      "COPIL mieux construits et plus convaincants. Storytelling challengé avant la présentation. Moins de retours en séance.",
    citation:
      "Mon directeur m'a dit que c'était mes meilleurs slides COPIL. J'avais utilisé l'assistant pour les challenger avant de présenter.",
    citationAuteur: "Chef de projet transversal",
    imageUrl: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "photo2product",
    name: "Photo2Product (Seconde Main)",
    storytellingName: "150 collaborateurs qui gagnent du temps sur la seconde main",
    service: "operations",
    irritants: ["repetitif", "visuel"],
    status: "qualifie",
    outil: "NS",
    probleme:
      "L'enjeu : simplifier le référencement des articles de seconde main pour les équipes terrain en réduisant le travail manuel à chaque mise en vente.",
    solution:
      "Photo2Product analyse automatiquement les photos produits de seconde main et génère les fiches articles correspondantes en quelques secondes.",
    impact:
      "Gain de temps significatif pour les équipes terrain. 150 utilisateurs actifs. Meilleure cohérence des fiches seconde main.",
    impactChiffre: "150 utilisateurs actifs",
    citation:
      "Mes équipes en magasin passaient beaucoup de temps sur cette partie. Maintenant c'est bien plus rapide et tout le monde est soulagé.",
    citationAuteur: "Responsable seconde main",
    imageUrl: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-avis-google",
    name: "Assistant Avis Google",
    storytellingName: "Répondre à 100 avis Google sans y passer sa journée",
    service: "operations",
    irritants: ["repetitif", "contenu"],
    status: "industrialise",
    outil: "IAK",
    probleme:
      "L'enjeu : maintenir une présence active et cohérente sur les avis Google de chaque magasin, pour soigner la réputation de la marque et renforcer la confiance client.",
    solution:
      "IAK génère des réponses personnalisées aux avis Google en respectant le tone of voice KIABI, pour chaque magasin et chaque type d'avis.",
    impact:
      "Cohérence de la marque sur tous les avis. Gain de temps majeur sur la gestion de la réputation en ligne. Taux de réponse en forte hausse.",
    citation:
      "On avait des dizaines d'avis sans réponse. Maintenant on répond à tout, et la qualité est bien meilleure qu'avant.",
    citationAuteur: "Responsable expérience client",
    imageUrl: "https://images.pexels.com/photos/4195763/pexels-photo-4195763.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-reunion-internationale",
    name: "Assistant Réunion Internationale",
    storytellingName: "Transformer un tableau photo en restitution de réunion",
    service: "operations",
    irritants: ["international", "analyse", "repetitif"],
    status: "qualifie",
    outil: "IAK",
    probleme:
      "L'enjeu : tirer le meilleur parti des réunions internationales en exploitant immédiatement tous les supports — même en langue étrangère — pour une collaboration plus efficace.",
    solution:
      "IAK analyse les photos de tableaux blancs et de documents en langue étrangère et génère une restitution structurée en français.",
    impact:
      "Analyse de tableaux photo transformée en restitution claire. Meilleure exploitation des réunions internationales.",
    citation:
      "Je prenais une photo du tableau blanc de nos collègues italiens, et j'avais une synthèse en français 2 minutes après. Magique.",
    citationAuteur: "Manager projets internationaux",
    imageUrl: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "bibliotheque-assets",
    name: "Bibliothèque Assets Graphiques",
    storytellingName: "Tes assets graphiques, enfin documentés et cherchables",
    service: "operations",
    irritants: ["information", "visuel"],
    status: "qualifie",
    outil: "IAK Imagen",
    probleme:
      "L'enjeu : disposer d'une bibliothèque d'assets graphiques documentée et cherchable, pour que les équipes créa et IT trouvent immédiatement ce dont elles ont besoin.",
    solution:
      "IAK Imagen génère automatiquement une documentation lisible et cohérente pour chaque asset graphique, les rendant cherchables et bien organisés.",
    impact:
      "Documentation technique des assets graphiques lisible et cohérente. Meilleure productivité des équipes sur la recherche d'assets.",
    citation:
      "On avait une bibliothèque assets avec zéro documentation. Maintenant tout est clair, cherchable et bien organisé.",
    citationAuteur: "Responsable assets visuels",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "assistant-procedures-village",
    name: "Assistant Procédures Kiabi Village",
    storytellingName: "Kiabi Village : les procédures à portée de main pour tous",
    service: "operations",
    irritants: ["information", "repetitif"],
    status: "contact",
    outil: "IAK RAG",
    probleme:
      "L'enjeu : donner à chaque collaborateur de Kiabi Village une autonomie complète sur les procédures internes, sans sollicitation systématique des référents.",
    solution:
      "IAK RAG indexe toutes les procédures Kiabi Village et répond instantanément en langage naturel à toute question des collaborateurs.",
    impact:
      "Autonomie des collaborateurs sur les procédures internes. Réduction forte des demandes répétitives sur Teams.",
    citation:
      "Mes collègues me demandaient la même chose dix fois par semaine. Maintenant ils ont les réponses sans avoir à me chercher.",
    citationAuteur: "Référent opérations Kiabi Village",
    imageUrl: "https://images.pexels.com/photos/1181623/pexels-photo-1181623.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];
