export interface LocalizedCourseContent {
  title: string;
  description: string;
  moduleTitles: Record<string, string>;
}

export const COURSE_CONTENT: Record<string, Record<string, LocalizedCourseContent>> = {
  id: {
    "saham-dasar": {
      title: "Saham & Pasar Modal Dasar",
      description: "Mulai investasi saham dengan benar. Pelajari cara memilih saham berfundamental kuat, memahami rasio keuangan, membaca grafik harga, dan menyusun portofolio investasi yang kokoh.",
      moduleTitles: {
        m1: "Apa itu Saham?",
        m2: "Analisis Fundamental",
        m3: "Analisis Teknikal",
        m4: "Strategi Portofolio",
      },
    },
    "kripto-dasar": {
      title: "Kripto & Web3 Dasar",
      description: "Pahami dunia blockchain, cryptocurrency, smart contract, pengoperasian dompet digital, dan potensi masa depan keuangan terdesentralisasi (DeFi) secara menyeluruh.",
      moduleTitles: {
        m1: "Pengenalan Blockchain",
        m2: "Cara Kerja Bitcoin & Ethereum",
        m3: "Dompet Kripto & Keamanan",
        m4: "Masa Depan Web3",
      },
    },
    "laporan-keuangan": {
      title: "Analisis Laporan Keuangan",
      description: "Cara membaca neraca, laporan laba rugi, dan laporan arus kas perusahaan untuk menilai kesehatan finansial bisnis atau instrumen investasi sebelum mengambil keputusan.",
      moduleTitles: {
        m1: "Tiga Laporan Keuangan Utama",
        m2: "Analisis Rasio Keuangan",
        m3: "Mendeteksi Rekayasa Keuangan",
      },
    },
    "startup-bisnis": {
      title: "Strategi Startup & Bisnis",
      description: "Bangun bisnismu dari ide hingga eksekusi. Pelajari riset pasar, model bisnis, skema pendanaan awal, serta strategi scaling up bisnis.",
      moduleTitles: {
        m1: "Validasi Ide Bisnis",
        m2: "Lean Business Model",
        m3: "Mendapatkan Pendanaan Pertama",
        m4: "Strategi Scaling Up",
      },
    },
    "digital-marketing": {
      title: "Digital Marketing Modern",
      description: "Kuasai pemasaran digital menggunakan media sosial, optimasi mesin pencari (SEO), periklanan berbayar, dan strategi copywriting untuk mendongkrak penjualan bisnis Anda.",
      moduleTitles: {
        m1: "Dasar Pemasaran Digital",
        m2: "Search Engine Optimization (SEO)",
        m3: "Iklan Berbayar (FB, Google Ads)",
        m4: "Copywriting & Content Strategy",
      },
    },
    "ecommerce-dasar": {
      title: "Kuasai E-Commerce & Dropshipping",
      description: "Bangun toko online-mu sendiri, temukan produk pemenang (winning products), pelajari manajemen supply chain, dan operasikan bisnis e-commerce yang menguntungkan tanpa harus stok barang.",
      moduleTitles: {
        m1: "Model Bisnis E-Commerce",
        m2: "Riset Produk Terlaris",
        m3: "Membangun Toko Online Shopify",
      },
    },
    "personal-finance": {
      title: "Manajemen Uang Pribadi",
      description: "Kuasai pengelolaan arus kas pribadi, metode menabung efektif, alokasi anggaran bulanan dengan sistematis, serta langkah penting persiapan dana darurat.",
      moduleTitles: {
        m1: "Prinsip Pengelolaan Cashflow",
        m2: "Metode Budgeting 50/30/20",
        m3: "Dana Darurat & Proteksi",
        m4: "Menghindari Utang Konsumtif",
      },
    },
    "passive-income": {
      title: "Strategi Pasif Income & Dividen",
      description: "Cara membangun portofolio investasi yang menghasilkan arus kas pasif secara konsisten dari dividen saham, reksa dana indeks, atau aset digital lainnya secara aman.",
      moduleTitles: {
        m1: "Mengenal Konsep Pasif Income",
        m2: "Investasi Saham Dividen",
        m3: "Pasif Income dari Aset Digital",
        m4: "Pajak & Pengelolaan Portofolio",
      },
    },
    "growth-mindset": {
      title: "Growth Mindset & Kebiasaan Sukses",
      description: "Kembangkan mental pembelajar, singkirkan pembatas mental, dan bentuk kebiasaan harian (atomic habits) untuk mencapai puncak potensi diri Anda.",
      moduleTitles: {
        m1: "Prinsip Growth vs Fixed Mindset",
        m2: "Mengatasi Rasa Takut Gagal",
        m3: "Membangun Kebiasaan Mikro",
        m4: "Disiplin & Konsistensi Diri",
      },
    },
    "time-management": {
      title: "Manajemen Waktu & Produktivitas",
      description: "Kuasai teknik Pomodoro, kuadran prioritas Eisenhower, serta cara mengalahkan prokrastinasi untuk bekerja lebih pintar dan efisien setiap hari.",
      moduleTitles: {
        m1: "Prinsip Manajemen Waktu",
        m2: "Kuadran Prioritas Eisenhower",
        m3: "Mengalahkan Prokrastinasi",
      },
    },
  },
  en: {
    "saham-dasar": {
      title: "Stock Market & Shares Basics",
      description: "Start investing in stocks correctly. Learn how to choose stocks with strong fundamentals, understand financial ratios, read price charts, and build a sturdy investment portfolio.",
      moduleTitles: {
        m1: "What are Stocks?",
        m2: "Fundamental Analysis",
        m3: "Technical Analysis",
        m4: "Portfolio Strategies",
      },
    },
    "kripto-dasar": {
      title: "Crypto & Web3 Basics",
      description: "Understand the world of blockchain, cryptocurrency, smart contracts, digital wallet operations, and the future potential of decentralized finance (DeFi) in detail.",
      moduleTitles: {
        m1: "Introduction to Blockchain",
        m2: "How Bitcoin & Ethereum Work",
        m3: "Crypto Wallets & Security",
        m4: "The Future of Web3",
      },
    },
    "laporan-keuangan": {
      title: "Financial Statement Analysis",
      description: "How to read balance sheets, income statements, and cash flows to evaluate the financial health of businesses or investments before making an active decision.",
      moduleTitles: {
        m1: "Three Key Financial Statements",
        m2: "Financial Ratio Analysis",
        m3: "Detecting Financial Red Flags",
      },
    },
    "startup-bisnis": {
      title: "Startup & Business Strategy",
      description: "Build your business from idea to execution. Learn market research, business models, initial funding schemes, and modern business scaling strategies.",
      moduleTitles: {
        m1: "Validating Business Ideas",
        m2: "Lean Business Model Canvas",
        m3: "Securing Initial Funding",
        m4: "Scaling Up Strategies",
      },
    },
    "digital-marketing": {
      title: "Modern Digital Marketing",
      description: "Master digital marketing using social media, search engine optimization (SEO), paid advertising, and high-converting copywriting to boost your business sales.",
      moduleTitles: {
        m1: "Digital Marketing Foundations",
        m2: "Search Engine Optimization (SEO)",
        m3: "Paid Ads (FB, Google Ads)",
        m4: "Copywriting & Content Strategy",
      },
    },
    "ecommerce-dasar": {
      title: "E-Commerce & Dropshipping Mastery",
      description: "Build your own online store, find winning products, master supply chain management, and operate a profitable e-commerce business without holding inventory.",
      moduleTitles: {
        m1: "E-Commerce Business Models",
        m2: "Winning Product Research",
        m3: "Building a Shopify Store",
      },
    },
    "personal-finance": {
      title: "Personal Finance & Budgeting",
      description: "Master personal cashflow management, effective saving methods, systematic monthly budget allocation, and essential steps to establish your emergency fund.",
      moduleTitles: {
        m1: "Cashflow Management Principles",
        m2: "The 50/30/20 Budgeting Rule",
        m3: "Emergency Funds & Protection",
        m4: "Avoiding Bad Consumer Debt",
      },
    },
    "passive-income": {
      title: "Passive Income & Dividend Strategies",
      description: "How to build an investment portfolio that generates consistent passive cashflow from stock dividends, index funds, or digital assets safely.",
      moduleTitles: {
        m1: "The Concept of Passive Income",
        m2: "Investing in Dividend Stocks",
        m3: "Passive Cashflow from Digital Assets",
        m4: "Taxes & Portfolio Preservation",
      },
    },
    "growth-mindset": {
      title: "Growth Mindset & Success Habits",
      description: "Develop a learner's mindset, overcome limiting beliefs, and build daily micro-habits (atomic habits) to achieve your full potential and success.",
      moduleTitles: {
        m1: "Growth vs Fixed Mindset",
        m2: "Overcoming Fear of Failure",
        m3: "Building Atomic Habits",
        m4: "Self-Discipline & Consistency",
      },
    },
    "time-management": {
      title: "Time Management & Productivity",
      description: "Master the Pomodoro technique, the Eisenhower priority matrix, and beat procrastination to work smarter and more efficiently every single day.",
      moduleTitles: {
        m1: "Time Management Core Principles",
        m2: "The Eisenhower Priority Matrix",
        m3: "Overcoming Procrastination",
      },
    },
  },
  es: {
    "saham-dasar": {
      title: "Bolsa de Valores y Acciones",
      description: "Comience a invertir en acciones correctamente. Aprenda a elegir acciones con fundamentos sólidos, comprender ratios financieros, leer gráficos de precios y estructurar una cartera de inversión sólida.",
      moduleTitles: {
        m1: "¿Qué son las acciones?",
        m2: "Análisis Fundamental",
        m3: "Análisis Técnico",
        m4: "Estrategias de Portafolio",
      },
    },
    "kripto-dasar": {
      title: "Cripto y Web3 para Principiantes",
      description: "Entienda en detalle el mundo de la tecnología blockchain, criptomonedas, contratos inteligentes, gestión de monederos virtuales y el potencial de las finanzas descentralizadas (DeFi).",
      moduleTitles: {
        m1: "Introducción a Blockchain",
        m2: "Cómo funcionan Bitcoin y Ethereum",
        m3: "Monederos y Seguridad",
        m4: "El futuro de Web3",
      },
    },
    "laporan-keuangan": {
      title: "Análisis de Estados Financieros",
      description: "Cómo leer balances generales, estados de resultados y flujos de efectivo para evaluar la salud financiera de empresas o proyectos antes de invertir.",
      moduleTitles: {
        m1: "Los Tres Estados Financieros Clave",
        m2: "Análisis de Ratios Financieros",
        m3: "Detección de Manipulación Financiera",
      },
    },
    "startup-bisnis": {
      title: "Estrategia de Startup y Negocios",
      description: "Construya su propio negocio desde la idea inicial hasta la ejecución del mercado. Aprenda investigación de mercado, modelos de negocio, esquemas de financiamiento y estrategias de escala.",
      moduleTitles: {
        m1: "Validación de Ideas de Negocio",
        m2: "Lean Business Model",
        m3: "Cómo Obtener Financiamiento",
        m4: "Estrategias de Escalabilidad",
      },
    },
    "digital-marketing": {
      title: "Marketing Digital Moderno",
      description: "Domine el marketing digital utilizando redes sociales, optimización SEO, publicidad paga en Facebook y Google, y copywriting persuasivo para impulsar las ventas.",
      moduleTitles: {
        m1: "Fundamentos de Marketing Digital",
        m2: "Optimización SEO",
        m3: "Publicidad Paga (FB, Google Ads)",
        m4: "Copywriting y Estrategia de Contenidos",
      },
    },
    "ecommerce-dasar": {
      title: "E-Commerce y Dropshipping",
      description: "Cree su propia tienda en línea, encuentre productos ganadores, domine la gestión de suministros y opere un negocio electrónico altamente rentable sin inventario físico.",
      moduleTitles: {
        m1: "Modelos de Negocio E-Commerce",
        m2: "Investigación de Productos Ganadores",
        m3: "Creación de Tiendas Shopify",
      },
    },
    "personal-finance": {
      title: "Finanzas Personales y Presupuesto",
      description: "Domine la gestión del flujo de caja personal, métodos de ahorro eficaces, asignación mensual metódica de presupuestos y la preparación de fondos de emergencia.",
      moduleTitles: {
        m1: "Principios de Gestión de Flujo de Caja",
        m2: "Regla de Presupuesto 50/30/20",
        m3: "Fondos de Emergencia",
        m4: "Evitar Deudas de Consumo Malas",
      },
    },
    "passive-income": {
      title: "Estrategias de Ingresos Pasivos",
      description: "Aprenda a construir una cartera de inversiones diversificada que genere un flujo de caja pasivo constante de manera segura mediante acciones de dividendos y fondos indexados.",
      moduleTitles: {
        m1: "El concepto de Ingreso Pasivo",
        m2: "Inversión en Acciones con Dividendos",
        m3: "Flujo de caja de activos digitales",
        m4: "Impuestos y Conservación",
      },
    },
    "growth-mindset": {
      title: "Mentalidad de Crecimiento y Éxito",
      description: "Desarrolle una mentalidad de aprendizaje continuo, supere creencias mentales limitantes y cree hábitos diarios eficientes para alcanzar su máximo potencial.",
      moduleTitles: {
        m1: "Mentalidad de Crecimiento vs Fija",
        m2: "Superar el Miedo al Fracaso",
        m3: "Construcción de Hábitos Atómicos",
        m4: "Autodisciplina y Consistencia",
      },
    },
    "time-management": {
      title: "Gestión del Tiempo y Productividad",
      description: "Domine la técnica Pomodoro, la matriz de prioridades de Eisenhower y elimine la procrastinación para trabajar de manera más inteligente y eficaz.",
      moduleTitles: {
        m1: "Principios de Gestión del Tiempo",
        m2: "Matriz de Prioridades de Eisenhower",
        m3: "Superar la Procrastinación",
      },
    },
  },
  fr: {
    "saham-dasar": {
      title: "Bourse et Actions de Base",
      description: "Commencez à investir en bourse correctement. Apprenez à choisir des actions aux fondamentaux solides, analyser les ratios, lire les graphiques et structurer un portefeuille résistant.",
      moduleTitles: {
        m1: "Qu'est-ce que les Actions?",
        m2: "Analyse Fondamentale",
        m3: "Analyse Technique",
        m4: "Stratégies de Portefeuille",
      },
    },
    "kripto-dasar": {
      title: "Crypto & Web3 de Base",
      description: "Comprenez en détail l'univers de la technologie blockchain, des crypto-monnaies, des smart contracts, la gestion des portefeuilles et le potentiel de la finance décentralisée (DeFi).",
      moduleTitles: {
        m1: "Introduction à la Blockchain",
        m2: "Fonctionnement de Bitcoin & Ethereum",
        m3: "Portefeuilles Crypto & Sécurité",
        m4: "L'Avenir du Web3",
      },
    },
    "laporan-keuangan": {
      title: "Analyse des États Financiers",
      description: "Comment lire le bilan, le compte de résultat et le tableau des flux de trésorerie pour évaluer la santé financière d'une entreprise avant d'investir.",
      moduleTitles: {
        m1: "Les Trois États Financiers Clés",
        m2: "Analyse des Ratios Financiers",
        m3: "Détecter les Anomalies Financières",
      },
    },
    "startup-bisnis": {
      title: "Stratégie de Startup & Entreprise",
      description: "Lancez votre entreprise de l'idée initiale à l'exécution sur le marché. Apprenez l'étude de marché, les modèles d'affaires, le financement et le scaling.",
      moduleTitles: {
        m1: "Validation d'Idées de Business",
        m2: "Lean Business Model Canvas",
        m3: "Obtenir son Premier Financement",
        m4: "Stratégies de Croissance",
      },
    },
    "digital-marketing": {
      title: "Marketing Digital Moderne",
      description: "Maîtrisez le marketing digital : réseaux sociaux, SEO, publicité payante (Facebook & Google Ads) et rédaction de contenu pour booster vos ventes.",
      moduleTitles: {
        m1: "Fondations du Marketing Digital",
        m2: "Optimisation pour les Moteurs de Recherche (SEO)",
        m3: "Publicités Payantes (FB, Google Ads)",
        m4: "Copywriting & Stratégie de Contenu",
      },
    },
    "ecommerce-dasar": {
      title: "Maîtrise de l'E-Commerce & Dropshipping",
      description: "Créez votre propre boutique en ligne, trouvez des produits à fort potentiel, gérez vos fournisseurs et pilotez une activité de e-commerce rentable sans aucun stock physique.",
      moduleTitles: {
        m1: "Modèles d'Affaires E-Commerce",
        m2: "Recherche de Produits Gagnants",
        m3: "Créer sa Boutique en ligne",
      },
    },
    "personal-finance": {
      title: "Finances Personnelles & Budget",
      description: "Maîtrisez la gestion de votre trésorerie personnelle, les méthodes d'épargne les plus efficaces, l'allocation budgétaire systématique et la création d'un fonds de secours.",
      moduleTitles: {
        m1: "Principes de Gestion de Trésorerie",
        m2: "La Règle de Budget 50/30/20",
        m3: "Fonds d'Urgence & Protection",
        m4: "Éviter les Mauvaises Dettes",
      },
    },
    "passive-income": {
      title: "Stratégies de Revenus Passifs",
      description: "Comment bâtir pas à pas un portefeuille d'investissement générant des flux de revenus passifs réguliers grâce aux dividendes et aux fonds indiciels.",
      moduleTitles: {
        m1: "Le Concept de Revenu Passif",
        m2: "Investir dans des Actions à Dividendes",
        m3: "Revenus des Actifs Numériques",
        m4: "Impôts & Gestion de Portefeuille",
      },
    },
    "growth-mindset": {
      title: "Growth Mindset & Habitudes de Succès",
      description: "Développez un état d'esprit de croissance, libérez-vous de vos barrières mentales limitantes et adoptez des micro-habitudes quotidiennes pour libérer votre plein potentiel.",
      moduleTitles: {
        m1: "Esprit de Croissance vs Fixe",
        m2: "Surmonter la Peur de l'Échec",
        m3: "Instaurer des Habitudes Atomiques",
        m4: "Auto-discipline & Régularité",
      },
    },
    "time-management": {
      title: "Gestion du Temps & Productivité",
      description: "Maîtrisez la technique Pomodoro, la matrice de priorité d'Eisenhower et surmontez la procrastination pour travailler plus intelligemment au quotidien.",
      moduleTitles: {
        m1: "Principes de la Gestion du Temps",
        m2: "Matrice de Priorité d'Eisenhower",
        m3: "Vaincre la Procrastination",
      },
    },
  },
  de: {
    "saham-dasar": {
      title: "Aktien & Börsen-Grundlagen",
      description: "Beginnen Sie richtig mit dem Investieren. Lernen Sie, wie Sie solide Aktien auswählen, Finanzkennzahlen verstehen, Kurscharts lesen und ein robustes Anlageportfolio aufbauen.",
      moduleTitles: {
        m1: "Was sind Aktien?",
        m2: "Fundamentalanalyse",
        m3: "Technische Analyse",
        m4: "Portfoliostrategien",
      },
    },
    "kripto-dasar": {
      title: "Krypto- & Web3-Grundlagen",
      description: "Verstehen Sie detailliert die Blockchain-Technologie, Kryptowährungen, Smart Contracts, den Umgang mit Krypto-Wallets sowie das enorme Potenzial von DeFi.",
      moduleTitles: {
        m1: "Einführung in Blockchain",
        m2: "Wie Bitcoin & Ethereum funktionieren",
        m3: "Crypto Wallets & Sicherheit",
        m4: "Die Zukunft von Web3",
      },
    },
    "laporan-keuangan": {
      title: "Bilanzanalyse & Finanzen",
      description: "Lernen Sie, wie Sie Bilanzen, Gewinn- und Verlustrechnungen sowie Cashflow-Rechnungen interpretieren, um die finanzielle Gesundheit von Firmen zu beurteilen.",
      moduleTitles: {
        m1: "Die drei Hauptfinanzberichte",
        m2: "Kennzahlenanalyse",
        m3: "Finanzielle Warnsignale erkennen",
      },
    },
    "startup-bisnis": {
      title: "Startup- & Business-Strategie",
      description: "Bauen Sie Ihr Unternehmen von der ersten Idee bis zur Markteinführung auf. Lernen Sie Marktforschung, schlanke Geschäftsmodelle, Gründungsfinanzierung und Skalierungsmethoden.",
      moduleTitles: {
        m1: "Geschäftsideen validieren",
        m2: "Lean Business Model Canvas",
        m3: "Sicherung der Erstfinanzierung",
        m4: "Skalierungsstrategien",
      },
    },
    "digital-marketing": {
      title: "Modernes Digital Marketing",
      description: "Meistern Sie digitales Marketing über soziale Medien, Suchmaschinenoptimierung (SEO), Online-Werbung (Facebook & Google Ads) und conversionstarke Werbetexte.",
      moduleTitles: {
        m1: "Grundlagen des digitalen Marketings",
        m2: "Suchmaschinenoptimierung (SEO)",
        m3: "Bezahlte Anzeigen (FB, Google Ads)",
        m4: "Copywriting & Content-Strategie",
      },
    },
    "ecommerce-dasar": {
      title: "E-Commerce & Dropshipping Meisterklasse",
      description: "Bauen Sie Ihren eigenen profitablen Online-Shop auf, recherchieren Sie Bestseller-Produkte und steuern Sie eine Logistikkette komplett ohne physisches Eigenlager.",
      moduleTitles: {
        m1: "E-Commerce-Geschäftsmodelle",
        m2: "Erfolgreiche Produktrecherche",
        m3: "Aufbau eines Shopify-Shops",
      },
    },
    "personal-finance": {
      title: "Persönliche Finanzen & Budgetierung",
      description: "Meistern Sie Ihr persönliches Budget, optimieren Sie Ihre Sparraten, lernen Sie systematische Budgetregeln und bauen Sie zügig einen soliden Notgroschen auf.",
      moduleTitles: {
        m1: "Prinzipien des Cashflow-Managements",
        m2: "Die 50/30/20 Budgetierungsregel",
        m3: "Notgroschen & Absicherung",
        m4: "Vermeidung konsumorientierter Schulden",
      },
    },
    "passive-income": {
      title: "Passive Einkommens- & Dividendenstrategie",
      description: "Erfahren Sie, wie Sie ein rentables Anlageportfolio aufbauen, das durch Dividendenaktien und breit gestreute Indexfonds verlässliche Cashflows generiert.",
      moduleTitles: {
        m1: "Das Konzept des passiven Einkommens",
        m2: "Investieren in Dividendenaktien",
        m3: "Passiver Cashflow aus digitalen Assets",
        m4: "Steuern & Portfolioerhalt",
      },
    },
    "growth-mindset": {
      title: "Growth Mindset & Erfolgsgewohnheiten",
      description: "Entwickeln Sie eine dynamische Wachstumsmentalität, überwinden Sie innere Zweifel und Blockaden und etablieren Sie tägliche Routinen für langfristigen Erfolg.",
      moduleTitles: {
        m1: "Wachstums- vs. starre Mentalität",
        m2: "Angst vor dem Scheitern überwinden",
        m3: "Aufbau atomarer Gewohnheiten",
        m4: "Selbstdisziplin & Konsistenz",
      },
    },
    "time-management": {
      title: "Zeitmanagement & Produktivität",
      description: "Meistern Sie die Pomodoro-Technik, das Eisenhower-Prinzip und bekämpfen Sie Aufschieberitis, um täglich produktiver, fokussierter und entspannter zu arbeiten.",
      moduleTitles: {
        m1: "Kernprinzipien des Zeitmanagements",
        m2: "Die Eisenhower-Prioritätenmatrix",
        m3: "Aufschieberitis erfolgreich bekämpfen",
      },
    },
  },
  ja: {
    "saham-dasar": {
      title: "株式投資・市場入門",
      description: "正しい株式投資を始めるための入門講義。財務指標の評価、ファンダメンタルズ分析、チャートの基本、ポートフォリオ運用戦略を網羅的に解説します。",
      moduleTitles: {
        m1: "株式とは何か？",
        m2: "ファンダメンタル分析",
        m3: "テクニカル分析",
        m4: "ポートフォリオ戦略",
      },
    },
    "kripto-dasar": {
      title: "暗号資産＆Web3入門",
      description: "ブロックチェーンの基本原理、暗号通貨、スマートコントラクトの仕組み、デジタルウォレットの操作、分散型金融（DeFi）の可能性について学習します。",
      moduleTitles: {
        m1: "ブロックチェーン入門",
        m2: "ビットコインとイーサリアムの仕組み",
        m3: "仮想通貨ウォレットとセキュリティ",
        m4: "Web3の未来",
      },
    },
    "laporan-keuangan": {
      title: "財務諸表・決算書の読み方",
      description: "貸借対照表（B/S）、損益計算書（P/L）、キャッシュフロー計算書を分析し、企業や投資先の真の財政状態と安全性を評価します。",
      moduleTitles: {
        m1: "3大財務諸表の基礎",
        m2: "主要な財務比率分析",
        m3: "不適切な会計・警告サインの検知",
      },
    },
    "startup-bisnis": {
      title: "スタートアップ・ビジネス戦略",
      description: "起業のアイデア出しから事業立ち上げ、資金調達スキーム、収益性高いビジネスモデルの構築、スケーリング手法まで体系的に学習します。",
      moduleTitles: {
        m1: "ビジネスアイデアの検証",
        m2: "リーンビジネスモデルキャンバス",
        m3: "最初の資金調達の成功法則",
        m4: "グロース・スケーリング戦略",
      },
    },
    "digital-marketing": {
      title: "モダンデジタルマーケティング",
      description: "SNSマーケティング、SEO最適化、有料ネット広告（Facebook & Google）、売上を最大化するコピーライティング技術を包括的に学びます。",
      moduleTitles: {
        m1: "デジタルマーケティング基礎",
        m2: "SEO（検索エンジン最適化）",
        m3: "ネット有料広告（FB・Google Ads）",
        m4: "コピーライティングとコンテンツ設計",
      },
    },
    "ecommerce-dasar": {
      title: "ECサイト＆ドロップシッピング",
      description: "自社オンラインショップの立ち上げ、売れ筋商品のリサーチ、サプライチェーン管理、在庫を持たずに高収益をあげるECモデルの構築方法。",
      moduleTitles: {
        m1: "ECビジネスモデル入門",
        m2: "売れ筋商品のリサーチ法",
        m3: "Shopifyストアの構築と運用",
      },
    },
    "personal-finance": {
      title: "パーソナルファイナンス・家計管理",
      description: "個人の資金流動性の管理、効率的な貯蓄計画、50/30/20ルールの実用、緊急資金（生活防衛資金）を確実に構築する財務プラン。",
      moduleTitles: {
        m1: "キャッシュフロー管理の原則",
        m2: "50/30/20予算ルールの実践",
        m3: "緊急資金と資産防衛",
        m4: "消費者ローン・悪質な負債の回避",
      },
    },
    "passive-income": {
      title: "不労所得・配当金投資戦略",
      description: "高配当株投資、安全性の高いインデックス投資、デジタル資産ポートフォリオを構築し、安定的かつ継続的なキャッシュフローを生み出す方法。",
      moduleTitles: {
        m1: "不労所得・パッシブインカムの真実",
        m2: "高配当株・配当金投資の実践",
        m3: "デジタルアセットを活用した資産構築",
        m4: "税金対策とポートフォリオ維持",
      },
    },
    "growth-mindset": {
      title: "グロースマインドセットと習慣",
      description: "成長思考を身につけ、限界を定める心理的ブロック（メンタルブロック）を解除し、目標を確実に達成するための習慣設計（Atomic Habits）を導入します。",
      moduleTitles: {
        m1: "成長マインドと停滞マインドの比較",
        m2: "失敗の恐怖を克服するメンタル術",
        m3: "アトミック・ハビットの設計",
        m4: "強固な自己規律と持続力の養成",
      },
    },
    "time-management": {
      title: "時間管理・生産性向上",
      description: "ポモドーロ手法、アイゼンハワー優先順位付けマトリクス、そして効率的な先延ばし癖克服アプローチを学び、毎日の仕事の効率を劇的に向上させます。",
      moduleTitles: {
        m1: "時間管理の本質と基礎",
        m2: "アイゼンハワー優先順位マトリクス",
        m3: "先延ばしグセを科学的に克服する",
      },
    },
  },
  zh: {
    "saham-dasar": {
      title: "股票与证券市场基础",
      description: "零基础开始学习股票投资。讲授如何分析企业基本面、理解核心财务指标、解读价格K线图以及构建抗风险的投资组合。",
      moduleTitles: {
        m1: "什么是股票？",
        m2: "基本面分析",
        m3: "技术分析",
        m4: "投资组合策略",
      },
    },
    "kripto-dasar": {
      title: "加密货币与Web3入门",
      description: "全面了解区块链底层逻辑、加密资产、智能合约、加密钱包的安全配置，以及去中心化金融（DeFi）的未来风口。",
      moduleTitles: {
        m1: "区块链技术介绍",
        m2: "比特币与以太坊的工作原理",
        m3: "加密钱包与安全",
        m4: "Web3的未来展望",
      },
    },
    "laporan-keuangan": {
      title: "财务报表分析",
      description: "解读资产负债表、利润表和现金流量表，帮助您在开展商业合作或进行证券投资前精确评估企业的经营健康度。",
      moduleTitles: {
        m1: "三大核心财务报表",
        m2: "财务比率分析法",
        m3: "识别财务造假与红线",
      },
    },
    "startup-bisnis": {
      title: "初创企业与商业战略",
      description: "将绝妙的创意转化为成功的商业实体。课程涵盖市场痛点调研、MVP产品验证、股权及初创融资路径和规模化扩张逻辑。",
      moduleTitles: {
        m1: "验证商业创意",
        m2: "精益商业画布模型",
        m3: "成功获得首笔融资",
        m4: "业务规模化增长策略",
      },
    },
    "digital-marketing": {
      title: "现代数字营销实践",
      description: "深度掌握搜索引擎优化（SEO）、社交媒体流量逻辑、精准付费广告投放（FB/Google Ads）和高效的销售文案撰写套路。",
      moduleTitles: {
        m1: "数字营销基础框架",
        m2: "搜索引擎优化 (SEO)",
        m3: "付费广告投放 (Facebook & Google Ads)",
        m4: "文案策划与内容策略",
      },
    },
    "ecommerce-dasar": {
      title: "电子商务与无货源电商",
      description: "手把手带你搭建自己的在线网店，掌握爆款选品和供应链管理技巧，开启低风险、高毛利的无货源跨境电商业务。",
      moduleTitles: {
        m1: "电商主流商业模式",
        m2: "爆款产品选品与调研",
        m3: "Shopify独立站搭建与优化",
      },
    },
    "personal-finance": {
      title: "个人理财与理财预算",
      description: "掌控个人或家庭的现金流量。学习高效强制储蓄方法、50/30/20分配法则，并逐步建立抵御外部风险的应急储备金。",
      moduleTitles: {
        m1: "现金流管理的核心原则",
        m2: "50/30/20 预算分配黄金法则",
        m3: "应急基金与保险保障",
        m4: "如何规避有害的消费性负债",
      },
    },
    "passive-income": {
      title: "被动收入与股息分配策略",
      description: "掌握构建低波动高股息投资组合的核心技术，利用指数基金、优质派息股以及数字资产产生源源不断的被动现金流收入。",
      moduleTitles: {
        m1: "揭秘被动收入的底层逻辑",
        m2: "高股息股票投资实战",
        m3: "利用数字资产赚取被动收入",
        m4: "税务筹划与投资组合维护",
      },
    },
    "growth-mindset": {
      title: "成长型思维与成功习惯",
      description: "突破固定思维壁垒，重塑“终身成长”内核，用微习惯（原子习惯）的力量管理日常生活，全面迈向财富与心智双重跃迁。",
      moduleTitles: {
        m1: "成长型思维 vs 固定型思维",
        m2: "如何直面并克服对失败的恐惧",
        m3: "原子微习惯的落地构建步骤",
        m4: "自律与持续执行力的底层逻辑",
      },
    },
    "time-management": {
      title: "时间管理与高效生产力",
      description: "掌握番茄时间工作法、艾森豪威尔四象限优先法则，并运用心理暗示与工具科学戒掉拖延症，大幅提升工作效能。",
      moduleTitles: {
        m1: "高效时间管理的底层逻辑",
        m2: "艾森豪威尔核心优先矩阵",
        m3: "科学戒掉拖延症的实操课",
      },
    },
  },
  ru: {
    "saham-dasar": {
      title: "Основы фондового рынка",
      description: "Начните правильно и безопасно инвестировать в акции. Узнайте, как выбирать надежные компании на основе фундаментального анализа, читать графики и строить портфель.",
      moduleTitles: {
        m1: "Что такое акции?",
        m2: "Фундаментальный анализ",
        m3: "Технический анализ",
        m4: "Портфельные стратегии",
      },
    },
    "kripto-dasar": {
      title: "Основы Криптовалюты и Web3",
      description: "Подробно разберитесь в концепциях блокчейна, криптовалют, смарт-контрактов, децентрализованных финансов (DeFi) и безопасности личных кошельков.",
      moduleTitles: {
        m1: "Введение в блокчейн",
        m2: "Как устроены Bitcoin и Ethereum",
        m3: "Криптокошельки и безопасность",
        m4: "Будущее Web3",
      },
    },
    "laporan-keuangan": {
      title: "Анализ финансовых отчетов",
      description: "Как профессионально читать балансы, отчеты о финансовых результатах и движении денежных средств для оценки стабильности бизнеса перед инвестициями.",
      moduleTitles: {
        m1: "Три главных финансовых отчета",
        m2: "Анализ финансовых коэффициентов",
        m3: "Выявление финансовых уловок",
      },
    },
    "startup-bisnis": {
      title: "Стратегия Стартапа и Бизнеса",
      description: "Пройдите путь от идеи до создания работающего бизнеса. Поймите процессы проверки рынка, экономику стартапа, раунды финансирования и методы быстрого роста.",
      moduleTitles: {
        m1: "Валидация бизнес-идеи",
        m2: "Бизнес-модель Lean Canvas",
        m3: "Привлечение первых инвестиций",
        m4: "Стратегии масштабирования",
      },
    },
    "digital-marketing": {
      title: "Современный Интернет-Маркетинг",
      description: "Освойте запуск контекстной и таргетированной рекламы (Google/FB), поисковую оптимизацию (SEO), позиционирование бренда и создание вирусного контента.",
      moduleTitles: {
        m1: "Основы интернет-маркетинга",
        m2: "Поисковая оптимизация (SEO)",
        m3: "Платный трафик (FB, Google Ads)",
        m4: "Копирайтинг и контент-маркетинг",
      },
    },
    "ecommerce-dasar": {
      title: "E-Commerce и Дропшиппинг",
      description: "Создайте прибыльный онлайн-магазин с нуля, научитесь находить вирусные товары и контролировать логистические цепочки без закупки собственного склада.",
      moduleTitles: {
        m1: "Бизнес-модели в электронной коммерции",
        m2: "Поиск и анализ прибыльных товаров",
        m3: "Создание онлайн-магазина на Shopify",
      },
    },
    "personal-finance": {
      title: "Личные Финансы и Бюджетирование",
      description: "Научитесь разумно планировать свои доходы, использовать правило распределения 50/30/20, избегать плохих долгов и быстро формировать резервный фонд.",
      moduleTitles: {
        m1: "Принципы контроля денежных потоков",
        m2: "Правило составления бюджета 50/30/20",
        m3: "Резервный фонд и финансовая защита",
        m4: "Избавление от потребительских долгов",
      },
    },
    "passive-income": {
      title: "Пассивный Доход и Дивиденды",
      description: "Стратегия создания пассивного денежного потока из дивидендных акций, надежных индексных фондов и стейкинга цифровых активов.",
      moduleTitles: {
        m1: "Концепция пассивного дохода",
        m2: "Инвестирование в дивидендные акции",
        m3: "Пассивный доход от цифровых активов",
        m4: "Налоги и управление портфелем",
      },
    },
    "growth-mindset": {
      title: "Growth Mindset и Полезные Привычки",
      description: "Сформируйте психологию роста, разрушьте внутренние ограничения и барьеры, внедрите полезные микропривычки (Atomic Habits) для достижения больших целей.",
      moduleTitles: {
        m1: "Гибкое сознание против зажатого",
        m2: "Преодоление страха неудач",
        m3: "Создание микропривычек",
        m4: "Самодисциплина и системность",
      },
    },
    "time-management": {
      title: "Тайм-менеджмент и Продуктивность",
      description: "Освойте матрицу приоритетов Эйзенхауэра, Pomodoro-таймер и психологические приемы борьбы с прокрастинацией для эффективной работы без выгорания.",
      moduleTitles: {
        m1: "Принципы эффективного тайм-менеджмента",
        m2: "Матрица приоритетов Эйзенхауэра",
        m3: "Победа над прокрастинацией",
      },
    },
  },
  ar: {
    "saham-dasar": {
      title: "أساسيات سوق الأسهم",
      description: "ابدأ الاستثمار في الأسهم بطريقة صحيحة وآمنة. تعلم كيفية اختيار الأسهم بناءً على التحليل الأساسي وتحليل الرسوم البيانية وصياغة محفظة استثمارية متوازنة.",
      moduleTitles: {
        m1: "ما هي الأسهم؟",
        m2: "التحليل الأساسي",
        m3: "التحليل الفني",
        m4: "استراتيجيات المحفظة",
      },
    },
    "kripto-dasar": {
      title: "أساسيات العملات الرقمية وWeb3",
      description: "افهم بالتفصيل تكنولوجيا البلوكشين والعملات المشفرة والعقود الذكية وإدارة محافظ التشفير والفرص الكامنة في التمويل اللامركزي (DeFi).",
      moduleTitles: {
        m1: "مقدمة في البلوكشين",
        m2: "كيف يعمل البيتكوين والإيثيريوم",
        m3: "محافظ العملات الرقمية والأمان",
        m4: "مستقبل Web3",
      },
    },
    "laporan-keuangan": {
      title: "تحليل القوائم المالية",
      description: "كيفية قراءة وتحليل الميزانية العمومية وقائمة الدخل وقائمة التدفقات النقدية لتقييم الوضع المالي الحقيقي للشركات قبل اتخاذ أي قرار استثماري.",
      moduleTitles: {
        m1: "القوائم المالية الثلاث الرئيسية",
        m2: "تحليل النسب المالية",
        m3: "كشف التلاعب المالي",
      },
    },
    "startup-bisnis": {
      title: "استراتيجية الشركات الناشئة والأعمال",
      description: "ابنِ مشروعك الريادي من مجرد فكرة إلى التطبيق الفعلي في السوق. تغطي الدورة دراسة جدوى الأفكار، نموذج العمل المرن، خطط التمويل واستراتيجيات النمو.",
      moduleTitles: {
        m1: "التحقق من فكرة العمل",
        m2: "مخطط نموذج العمل المرن",
        m3: "تأمين التمويل الأولي",
        m4: "استراتيجيات التوسع والنمو",
      },
    },
    "digital-marketing": {
      title: "التسويق الرقمي الحديث",
      description: "احترف قنوات التسويق الرقمي الحديثة: تحسين محركات البحث (SEO)، إدارة الحملات الإعلانية المدفوعة (فيسبوك وجوجل)، وكتابة النصوص الإعلانية الجاذبة للمبيعات.",
      moduleTitles: {
        m1: "أسس التسويق الرقمي",
        m2: "تحسين محركات البحث (SEO)",
        m3: "الإعلانات المدفوعة (فيسبوك، جوجل)",
        m4: "كتابة الإعلانات واستراتيجية المحتوى",
      },
    },
    "ecommerce-dasar": {
      title: "احتراف التجارة الإلكترونية والدروب شيبنج",
      description: "قم بإنشاء متجرك الإلكتروني الخاص، وتعرّف على طرق اختيار المنتجات الأكثر مبيعاً وإدارة الموردين والشحن دون الحاجة للاحتفاظ بمخزون فعلي.",
      moduleTitles: {
        m1: "نماذج أعمال التجارة الإلكترونية",
        m2: "البحث عن المنتجات المربحة",
        m3: "بناء متجر Shopify",
      },
    },
    "personal-finance": {
      title: "المالية الشخصية والتخطيط المالي",
      description: "سيطر على تدفقاتك المالية الشخصية بالكامل. تعلم أساليب الادخار والإنفاق الذكي باستخدام قاعدة 50/30/20 وبناء صندوق للطوارئ لحماية نفسك.",
      moduleTitles: {
        m1: "مبادئ إدارة التدفق النقدي",
        m2: "قاعدة الميزانية 50/30/20",
        m3: "صندوق الطوارئ والحماية",
        m4: "تجنب الديون الاستهلاكية السيئة",
      },
    },
    "passive-income": {
      title: "استراتيجيات الدخل السلبي والأرباح",
      description: "تعرف على كيفية صياغة محفظة استثمارية تدرّ عليك تدفقات نقدية مستمرة وأرباحاً سلبية متنامية من أسهم العوائد وصناديق المؤشرات بشكل مدروس.",
      moduleTitles: {
        m1: "مفهوم الدخل السلبي",
        m2: "الاستثمار في أسهم توزيعات الأرباح",
        m3: "التدفق النقدي من الأصول الرقمية",
        m4: "الضرائب وإدارة المحفظة",
      },
    },
    "growth-mindset": {
      title: "عقلية النمو وعادات النجاح",
      description: "تبنّ عقلية التطوير المستمر، وحطم الحواجز النفسية والمعتقدات المقيدة لك، وابنِ العادات اليومية الإيجابية المتراكمة (Atomic Habits) لنجاحك المالي والمهني.",
      moduleTitles: {
        m1: "عقلية النمو مقابل العقلية الثابتة",
        m2: "التغلب على الخوف من الفشل",
        m3: "بناء العادات الذرية الصغيرة",
        m4: "الانضباط الذاتي والاستمرارية",
      },
    },
    "time-management": {
      title: "إدارة الوقت والإنتاجية",
      description: "احترف مهارات تنظيم الوقت باستخدام مصفوفة إيزنهاور لتحديد الأولويات وتقنية بومودورو لتفادي التشتت والتخلص النهائي من عادة تأجيل المهام.",
      moduleTitles: {
        m1: "المبادئ الأساسية لإدارة الوقت",
        m2: "مصفوفة أولويات إيزنهاور",
        m3: "التغلب على التسويف والمماطلة",
      },
    },
  },
  ko: {
    "saham-dasar": {
      title: "주식 투자 및 시장 기초",
      description: "성공적인 주식 투자를 위한 첫걸음. 우량주의 재무 펀더멘털을 분석하고 정밀한 차트 읽기 법을 마스터하여 장기적이고 안정적인 자산 포트폴리오를 완성합니다.",
      moduleTitles: {
        m1: "주식이란 무엇인가?",
        m2: "기본적 분석",
        m3: "기술적 분석",
        m4: "포트폴리오 전략",
      },
    },
    "kripto-dasar": {
      title: "암호화폐 및 Web3 기초",
      description: "블록체인 시스템 아키텍처, 비트코인 및 이더리움 메커니즘, 암호화폐 지갑 설정 및 보안, 그리고 탈중앙화 금융(DeFi) 트렌드를 완벽 정복합니다.",
      moduleTitles: {
        m1: "블록체인 기술 소개",
        m2: "비트코인과 이더리움의 작동 원리",
        m3: "크립토 지갑 설정 및 보안",
        m4: "Web3의 미래와 기회",
      },
    },
    "laporan-keuangan": {
      title: "재무제표 및 결산서 분석",
      description: "기업 및 스타트업의 재무 건전성을 자산과 손익 관점에서 완벽히 해석하기 위한 3대 재무제표(B/S, P/L, Cashflow) 핵심 지표 분석 실전 코스.",
      moduleTitles: {
        m1: "3대 핵심 재무제표 읽기",
        m2: "주요 재무 비율 분석법",
        m3: "분식회계 및 재무 리스크 감지",
      },
    },
    "startup-bisnis": {
      title: "스타트업 창업 및 비즈니스 전략",
      description: "비즈니스 아이디어를 기획하고 이를 정밀하게 스케일업하는 창업의 전 과정을 학습합니다. 린 캔버스 모형 구축부터 첫 자금 조달 및 마켓 확장 전략까지 전수합니다.",
      moduleTitles: {
        m1: "비즈니스 아이디어 검증",
        m2: "린 비즈니스 모델 캔버스",
        m3: "초기 투자 유치 전략",
        m4: "규모 확장 및 성장 전략",
      },
    },
    "digital-marketing": {
      title: "현대 디지털 마케팅 실무",
      description: "소셜 미디어 분석, 정밀 검색엔진 최적화(SEO) 마스터, 유료 광고 집행(Facebook/Google Ads), 그리고 고객을 사로잡는 전환 카피라이팅 기법을 학습합니다.",
      moduleTitles: {
        m1: "디지털 마케팅의 프레임워크",
        m2: "검색엔진 최적화 (SEO) 실전",
        m3: "유료 광고 집행 (FB & Google Ads)",
        m4: "카피라이팅 및 브랜드 콘텐츠 전략",
      },
    },
    "ecommerce-dasar": {
      title: "이커머스 및 드롭쉬핑 실무",
      description: "자신만의 독자적인 쇼핑몰 구축부터 글로벌 1등 유망 아이템 발굴 및 재고 보유 없이 매출을 유기적으로 올리는 스마트 드롭쉬핑 풀팩 비즈니스 과정.",
      moduleTitles: {
        m1: "이커머스 비즈니스 모델 유형",
        m2: "시장성 있는 핵심 소싱 상품 발굴",
        m3: "Shopify를 활용한 쇼핑몰 구축",
      },
    },
    "personal-finance": {
      title: "개인 재무 관리 및 자산 기초",
      description: "개인 가계 현금 흐름의 가시성 확보, 합리적인 자금 배분(50/30/20 규칙), 비소비성 강제 저축안 설계, 자산을 안전하게 보호해 줄 비상 예비금 설계안을 완성합니다.",
      moduleTitles: {
        m1: "현금 흐름 관리의 핵심 원칙",
        m2: "50/30/20 자금 분배 규칙",
        m3: "비상금 마련 및 리스크 방어",
        m4: "나쁜 소비성 부채 피하기",
      },
    },
    "passive-income": {
      title: "패시브 인컴 및 배당주 투자 전략",
      description: "안전 지향적 고배당주 포트폴리오를 설계하고 인덱스 펀드 및 디지털 크립토 자산과의 시너지 배치를 수행하여 영구적인 배당 현금 흐름을 창출합니다.",
      moduleTitles: {
        m1: "패시브 인컴의 참된 정의와 구조",
        m2: "우량 고배당주 포트폴리오 실전",
        m3: "디지털 자산을 통한 현금 흐름 다변화",
        m4: "절세 혜택 및 자산 포트폴리오 방어",
      },
    },
    "growth-mindset": {
      title: "성장 마인드셋 및 성공 습관",
      description: "삶의 전 영역에서 도약을 이뤄내기 위해 고정된 마인드를 파괴하고 아토믹 해빗(Atomic Habits) 행동 체계를 이식하여 매일의 삶을 180도 업그레이드합니다.",
      moduleTitles: {
        m1: "성장형 마인드셋 vs 고정형 마인드셋",
        m2: "실패에 대한 근원적 두려움 극복",
        m3: "원자 단위의 미세 습관 설계 공식",
        m4: "자기 규율과 지속적인 행동력 구축",
      },
    },
    "time-management": {
      title: "시간 관리 및 생산성 극대화",
      description: "뽀모도로 포커싱 기술, 아이젠하워 사분면 우선순위 기반 조직화, 그리고 미루기 습관의 정밀한 행동심리적 해독법을 마스터하여 하루의 성취를 최대화합니다.",
      moduleTitles: {
        m1: "시간 관리의 마인드와 기초 원칙",
        m2: "아이젠하워 사분면 우선순위 기법",
        m3: "과학적인 미루기 습관 극복 가이드",
      },
    },
  },
  pt: {
    "saham-dasar": {
      title: "Bolsa de Valores & Ações Básicas",
      description: "Comece a investir em ações corretamente. Aprenda a escolher ações com fundamentos sólidos, compreender rácios financeiros, ler gráficos de preços e construir uma carteira de investimentos robusta.",
      moduleTitles: {
        m1: "O que são Ações?",
        m2: "Análise Fundamentalista",
        m3: "Análise Técnica",
        m4: "Estratégias de Carteira",
      },
    },
    "kripto-dasar": {
      title: "Cripto & Fundamentos de Web3",
      description: "Compreenda detalhadamente o mundo do blockchain, criptomoedas, contratos inteligentes, operações de carteiras digitais e o potencial futuro das finanças descentralizadas (DeFi).",
      moduleTitles: {
        m1: "Introdução ao Blockchain",
        m2: "Como Funcionam o Bitcoin & Ethereum",
        m3: "Carteiras Cripto & Segurança",
        m4: "O Futuro da Web3",
      },
    },
    "laporan-keuangan": {
      title: "Análise de Demonstrações Financeiras",
      description: "Como ler balanços, demonstrações de resultados e fluxos de caixa para avaliar a saúde financeira de empresas ou investimentos antes de tomar decisões ativos.",
      moduleTitles: {
        m1: "Três Demonstrações Financeiras Principais",
        m2: "Análise de Rácios Financeiros",
        m3: "Deteção de Alertas Financeiros",
      },
    },
    "startup-bisnis": {
      title: "Estratégia de Startup & Negócios",
      description: "Crie o seu negócio desde a ideia até à execução. Aprenda pesquisa de mercado, modelos de negócio, esquemas de financiamento inicial e estratégias modernas de escalabilidade.",
      moduleTitles: {
        m1: "Validação de Ideias de Negócio",
        m2: "Canvas de Modelo de Negócio Lean",
        m3: "Obtenção de Financiamento Inicial",
        m4: "Estratégias de Escalabilidade",
      },
    },
    "digital-marketing": {
      title: "Marketing Digital Moderno",
      description: "Domine o marketing digital utilizando redes sociais, otimização de motores de pesquisa (SEO), publicidade paga e copywriting de alta conversão para impulsionar as vendas do seu negócio.",
      moduleTitles: {
        m1: "Fundamentos do Marketing Digital",
        m2: "Otimização de Motores de Pesquisa (SEO)",
        m3: "Anúncios Pagos (FB, Google Ads)",
        m4: "Copywriting & Estratégia de Conteúdo",
      },
    },
    "ecommerce-dasar": {
      title: "Domínio de E-Commerce & Dropshipping",
      description: "Crie a sua própria loja online, encontre produtos vencedores, domine a gestão da cadeia de abastecimento e opere um negócio de comércio eletrónico rentável sem necessidade de stock.",
      moduleTitles: {
        m1: "Modelos de Negócio de E-Commerce",
        m2: "Pesquisa de Produtos Mais Vendidos",
        m3: "Construção de Loja Online Shopify",
      },
    },
    "personal-finance": {
      title: "Gestão de Finanças Pessoais",
      description: "Domine a gestão do seu fluxo de caixa pessoal, métodos eficazes de poupança, alocação sistemática do orçamento mensal e passos cruciais para a preparação de um fundo de emergência.",
      moduleTitles: {
        m1: "Princípios de Gestão de Fluxo de Caixa",
        m2: "Método de Orçamento 50/30/20",
        m3: "Fundo de Emergência & Proteção",
        m4: "Evitar Dívidas de Consumo",
      },
    },
    "passive-income": {
      title: "Estratégias de Rendimento Passivo & Dividendos",
      description: "Como construir uma carteira de investimentos que gere fluxos de caixa passivos consistentes a partir de dividendos de ações, fundos de índice ou outros ativos digitais de forma segura.",
      moduleTitles: {
        m1: "Conceito de Rendimento Passivo",
        m2: "Investimento em Ações de Dividendos",
        m3: "Rendimento Passivo com Ativos Digitais",
        m4: "Impostos & Gestão de Carteira",
      },
    },
    "growth-mindset": {
      title: "Mentalidade de Crescimento & Hábitos de Sucesso",
      description: "Desenvolva uma mentalidade de aprendizagem contínua, elimine crenças limitadoras e crie micro-hábitos diários (hábitos atómicos) para alcançar o seu potencial máximo.",
      moduleTitles: {
        m1: "Princípio da Mentalidade de Crescimento vs Fixa",
        m2: "Superar o Medo do Fracasso",
        m3: "Construir Micro-Hábitos",
        m4: "Autodisciplina & Consistência",
      },
    },
    "time-management": {
      title: "Gestão de Tempo & Produtividade",
      description: "Domine a técnica Pomodoro, a matriz de prioridades de Eisenhower e aprenda a combater a procrastinação para trabalhar de forma mais inteligente e eficiente todos os dias.",
      moduleTitles: {
        m1: "Princípios da Gestão de Tempo",
        m2: "Matriz de Prioridades de Eisenhower",
        m3: "Superar a Procrastinação",
      },
    },
  },
};

export function getLocalizedCourseContent(
  langCode: string,
  courseId: string
): LocalizedCourseContent | null {
  const byLang = COURSE_CONTENT[langCode] || COURSE_CONTENT["id"];
  return byLang[courseId] || null;
}
