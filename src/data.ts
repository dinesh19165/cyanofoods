/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProductItem, NewsItem, CareerPosition, DownloadDoc, FAQItem, CouncilMember, RegionalCouncilActivity } from './types';

export const ABOUT_OVERVIEW = {
  whoWeAre: `Cyano Foods India OPC Private Limited is a pioneering biotechnology, agriculture, and food technology enterprise. Rooted in research and driven by a vision of sustainable abundance, we harness microalgae biotechnology—primarily Spirulina—and advanced organic agronomy to address global nutrition security and soil degradation. We operate a highly integrated ecosystem that spans from microalgal cellular optimization and state-of-the-art closed photobioreactor systems to deep-tech food formulations and farmer-led natural agriculture networks.`,
  story: `Founded by a coalition of biotech scientists, agronomists, and food tech specialists, Cyano Foods India was established to bridge the gap between advanced biological research and rural execution. Recognized by key scientific bodies, we have transitioned microalgae cultivation from labor-intensive traditional systems to precision ecological farming. By combining laboratory research with our 'KhetiBharat' farmer empowerment program, we have successfully developed a circular value chain that heals the soil, provides sustainable livelihoods to hundreds of smallholder farmers, and delivers clinical-grade nutraceuticals and clean superfoods to the global market.`,
  vision: `To lead the global transition toward bio-centric food systems, restoring planetary health and human vitality through the power of advanced microalgae biotechnology and climate-resilient natural farming.`,
  mission: `To pioneer research-backed microalgal formulations and agricultural inputs; to empower smallholder farming communities through 'KhetiBharat' with scientific training and direct market linkages; and to deliver clean, highly-bioavailable wellness and nutritional products with complete transparency and ecological integrity.`,
  leadershipMessage: {
    author: "Dr. Avanish Kumar",
    role: "Founder & Chief Scientific Officer",
    avatar: "🔬",
    text: "At Cyano Foods India, we look at the microscopic world to solve macroscopic problems. Microalgae represent the ultimate synthesis of solar energy and biological efficiency—converting carbon dioxide into rich proteins and complex vitamins at rates ten times higher than conventional terrestrial crops. But biotechnology cannot exist in a vacuum. By aligning our laboratory breakthroughs with the hard work of Indian farmers through our natural farming initiatives, we are creating a unique model of distributed bio-manufacturing that is regenerative by design. Our commitment is to deliver science-backed nourishment that heals both the consumer and the earth."
  }
};

export const CORE_VALUES = [
  {
    title: "Scientific Rigor",
    desc: "Every product, input, and certification protocol we deploy is backed by empirical research, chromatography analysis, and rigorous scientific trial."
  },
  {
    title: "Ecological Circularity",
    desc: "We design our manufacturing and cultivation processes to minimize carbon footprints, recycle water, utilize co-products, and restore active soil biology."
  },
  {
    title: "Farmer Sovereignty",
    desc: "Through KhetiBharat, we ensure farmers receive fair, guaranteed pricing, free natural farming education, and direct regional support to eliminate exploitative middlemen."
  },
  {
    title: "Uncompromising Purity",
    desc: "Our Spirulina and functional foods are certified free of heavy metals, microcystins, chemical adulterants, and synthetic pesticides."
  }
];

export const TIMELINE_EVENTS = [
  { year: "2021", title: "Scientific Inception", desc: "Established our core microalgal research lab in collaboration with regional biotech institutes, optimizing high-yield Spirulina strains." },
  { year: "2022", title: "Pilot Photobioreactor Facility", desc: "Commissioned India's first closed-loop glass tube photobioreactor pilot to cultivate sterile, clinical-grade cyanobacteria." },
  { year: "2023", title: "Launch of 'KhetiBharat'", desc: "Initiated our farmer integration program in dry regions, converting 120+ hectares to certified organic and natural farming." },
  { year: "2024", title: "Regional Council Formation", desc: "Formed the Cyano Foods Regional Councils to monitor, verify, and streamline organic certification and natural farming compliance." },
  { year: "2025", title: "Global Formulation Launch", desc: "Commercialized our advanced natural food colorants (Phycocyanin) and microalgae-based natural agriculture inputs." },
  { year: "2026", title: "Carbon-Negative Scaling", desc: "Targeting complete carbon-neutrality across our production blocks and expanding the KhetiBharat network to over 5,000 farmers." }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "research",
    title: "Biotech & Algal Research",
    shortDescription: "Translational research in microalgal strain improvement, metabolic optimization, and extraction of high-value bioactive compounds.",
    description: "Cyano Foods India operates advanced laboratories dedicated to strain selection, photobioreactor fluid dynamics, and molecular identification. We work closely with universities to research the therapeutic properties of Phycocyanin, Chlorophyll, and beta-carotene extracted from premium cyanobacterial cultures.",
    iconName: "Beaker",
    benefits: [
      "Access to proprietary, climate-adapted Spirulina mother cultures",
      "DNA sequencing and contaminant-free verification assays",
      "High-efficiency extraction techniques for thermo-sensitive proteins",
      "Joint IP development and academic-industrial collaboration options"
    ],
    process: [
      { step: 1, title: "Strain Sourcing & Isolation", desc: "Selecting and purifying parent microalgae cultures under strict aseptic environments." },
      { step: 2, title: "Photobioreactor Optimization", desc: "Simulating light paths, nutrient ratios, and carbon dioxide absorption curves." },
      { step: 3, title: "Bioactive Extraction", desc: "Using eco-friendly, green chemistry solvents and ultrasonic-assisted separation." },
      { step: 4, title: "Efficacy & Safety Assays", desc: "In-vitro testing, toxicology review, and nutritional profiling." }
    ]
  },
  {
    id: "natural-farming",
    title: "Natural Farming Systems",
    shortDescription: "Scientific protocols and support systems to transition conventional farmlands into highly productive, biodiverse natural farms.",
    description: "We design and disseminate structured natural farming regimes that completely eliminate synthetic nitrogen, chemical pesticides, and GMO inputs. By combining traditional Indian agronomy (Jeevamrutha, Beejamrutha) with scientific bio-enhancers, we restore microbial soil health and lower input costs for farmers.",
    iconName: "Leaf",
    benefits: [
      "Up to 60% reduction in agricultural input costs for participating farmers",
      "Substantial improvements in soil organic carbon (SOC) levels within 18 months",
      "Enhanced moisture retention capacity and natural pest resilience in crops",
      "Access to premium, certified organic crop markets with high buy-back prices"
    ],
    process: [
      { step: 1, title: "Soil Microbiome Baseline", desc: "Analyzing initial soil microbiology, carbon percentage, and heavy metal residuals." },
      { step: 2, title: "Custom Agronomic Design", desc: "Creating regional crop rotation, multi-cropping, and natural composting guidelines." },
      { step: 3, title: "On-Farm Bio-enhancer Setup", desc: "Setting up local fermentation units for microbial cultures and botanical extracts." },
      { step: 4, title: "Continuous Satellite & Field Audit", desc: "Monitoring crop vigor and soil moisture through remote sensing and regular visits." }
    ]
  },
  {
    id: "certification",
    title: "Organic & Natural Certification",
    shortDescription: "Facilitating structured PGS-India, NPOP, and Cyano-Verified natural farming credentials for rural agricultural clusters.",
    description: "Certification is the bridge to high-value global markets. Cyano Foods, through its Regional Councils, coordinates the complete documentation, group registration, and external auditing required for farmers to achieve recognized Organic and Natural Certification status.",
    iconName: "Award",
    benefits: [
      "Step-by-step guidance on land transition documentation and buffer zone setups",
      "Subsidized certification costs through group-certification programs",
      "Complete transparency with QR-code based block-chain supply chain tracing",
      "Official representation in NPOP and global market clearance databases"
    ],
    process: [
      { step: 1, title: "Cluster Mobilization", desc: "Grouping adjacent smallholder farms into co-operative verification units." },
      { step: 2, title: "Peer-to-Peer Auditing", desc: "Implementing internal peer control checks according to PGS-India standards." },
      { step: 3, title: "Third-Party Inspections", desc: "Coordinating field sampling and chemical residue testing with accredited labs." },
      { step: 4, title: "Certificate Issuance & Traceability", desc: "Mapping individual crop lots to certification numbers and unique QR codes." }
    ]
  },
  {
    id: "consultancy",
    title: "Agritech & Food Tech Consultancy",
    shortDescription: "Providing specialized technical consultancy for microalgae cultivation, greenhouse automation, and clean-label food formulations.",
    description: "We offer technical advisory services to agricultural agencies, private enterprises, and institutional investors on setting up high-yield Spirulina farms, automated greenhouse systems, and clean-label nutritional food processing lines.",
    iconName: "Briefcase",
    benefits: [
      "Feasibility modeling and detailed project reports (DPR) with high accuracy",
      "Energy and water optimization pathways for commercial algae farming",
      "Formulation adjustments to meet European, US-FDA, and FSSAI standards",
      "Risk assessment of microcystin and environmental contamination vectors"
    ],
    process: [
      { step: 1, title: "Requirements Gathering", desc: "Understanding geographic, climatic, and commercial goals of the project." },
      { step: 2, title: "Techno-Economic Modeling", desc: "Developing capital expenditure (CAPEX) and operating expenditure (OPEX) analyses." },
      { step: 3, title: "Engineering & Layout Design", desc: "Drafting layout plans, piping schematics, and processing lines." },
      { step: 4, title: "Commissioning Support", desc: "Supervising site setup, culture inoculation, and initial processing runs." }
    ]
  },
  {
    id: "product-development",
    title: "Clean-Label Formulation",
    shortDescription: "End-to-end development of microalgae-fortified foods, functional beverages, and highly bioavailable nutraceuticals.",
    description: "We help brands develop clean-label, plant-based products utilizing microalgae. Our capabilities include stabilizing Phycocyanin in beverages, masking grassy algae notes, and optimizing the bioavailability of amino acids and trace minerals in final formulations.",
    iconName: "Sparkles",
    benefits: [
      "100% natural, plant-sourced ingredient profiles with clean labels",
      "Thermal-stable and pH-stable natural blue and green pigment systems",
      "High protein concentration ratios without synthetic isolates or bloating",
      "Custom sensory analysis and taste-profiling by certified food technologists"
    ],
    process: [
      { step: 1, title: "Conceptual Recipe Design", desc: "Defining target nutritional, allergen, and sensory properties." },
      { step: 2, title: "Micro-algal Infiltration", desc: "Blending microalgae powders, extracts, or active enzymes into test bases." },
      { step: 3, title: "Sensory & Shelf-Life Trials", desc: "Accelerated stability chamber testing and sensory panel feedback loops." },
      { step: 4, title: "Sourcing & Scale-Up Plan", desc: "Selecting raw materials and transferring protocols to industrial lines." }
    ]
  },
  {
    id: "manufacturing",
    title: "Precision Microalgae Manufacturing",
    shortDescription: "Advanced spray-drying, freeze-drying, and closed-system cultivation for sterile, clinical-grade cyanobacterial products.",
    description: "Our state-of-the-art facilities feature closed photobioreactors and cleanroom processing zones. We provide contract manufacturing, spray-drying, and high-vacuum freeze-drying of pure Spirulina biomass, preserving sensitive proteins, carotenoids, and vital enzymes.",
    iconName: "Hammer",
    benefits: [
      "ISO 22000, HACCP, GMP and Halal-certified manufacturing environments",
      "Gentle, low-temperature spray drying ensuring over 15% Phycocyanin retention",
      "No contact with open environmental dust, bird droppings, or heavy-metal soils",
      "Custom tableting, capsules, extrusion, and high-barrier aseptic packaging"
    ],
    process: [
      { step: 1, title: "Closed Cultivation", desc: "Growing cultures inside isolated glass or food-grade polycarbonate loops." },
      { step: 2, title: "High-G Harvesting", desc: "Continuous micro-filtration and gentle centrifugal dewatering of biomass." },
      { step: 3, title: "Cold Dehydration", desc: "Spray drying or freeze drying within sterile nitrogen atmospheres." },
      { step: 4, title: "Metal & Purity Control", desc: "Running double electromagnetic filtration and spectrophotometer test assays." }
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "spirulina-powder",
    name: "Pure Premium Spirulina Powder (Organic)",
    category: "spirulina",
    categoryLabel: "Spirulina",
    description: "Deep-green, ultra-fine, pure Arthrospira platensis powder cultivated in closed, sterile photobioreactors. Rich in complete proteins, organic iron, and the powerful blue antioxidant Phycocyanin.",
    benefits: [
      "Over 65% highly digestible protein with all 9 essential amino acids",
      "High concentrations of Phycocyanin (>16% total active pigment content)",
      "Tested zero heavy metals, microcystins, and chemical solvent residues",
      "Rich in Gamma-Linolenic Acid (GLA) for immune system modulation"
    ],
    specifications: [
      { key: "Botanical Name", value: "Arthrospira platensis" },
      { key: "Appearance", value: "Fine, dark-green homogeneous powder" },
      { key: "Phycocyanin Content", value: "Min 16.5% on dry basis" },
      { key: "Moisture", value: "< 5.0%" },
      { key: "Certifications", value: "Organic NPOP, GMP, Halal, Kosher" }
    ],
    isFeatured: true
  },
  {
    id: "spirulina-crunchies",
    name: "Sun-Dried Organic Spirulina Crunchies",
    category: "spirulina",
    categoryLabel: "Spirulina",
    description: "Crispy, mild-tasting Spirulina crystals processed at low temperatures to maintain delicate enzymes. Designed as a functional, crunchy sprinkle for salads, smoothies, and breakfast bowls.",
    benefits: [
      "Mild, non-fishy flavor, highly acceptable for sensory-sensitive palettes",
      "Zero added sugars, artificial binders, preservatives, or chemical agents",
      "High natural iron absorption profile, ideal for combatting anemia",
      "100% raw and minimally processed to preserve active super-oxide dismutase (SOD)"
    ],
    specifications: [
      { key: "Processing Method", value: "Low-temperature vacuum extrusion & sun-dehydration" },
      { key: "Texture", value: "Crisp, needle-shaped micro-granules" },
      { key: "Iron Content", value: "85mg / 100g" },
      { key: "Active Enzymes", value: "High levels of active Chlorophyll & Carotenoids" }
    ],
    isFeatured: true
  },
  {
    id: "phycocyanin-blue",
    name: "Cyano-Blue Liquid Phycocyanin Extract",
    category: "superfoods",
    categoryLabel: "Superfoods",
    description: "A natural, water-soluble, brilliant blue antioxidant pigment extracted from Spirulina using advanced physical cold-extraction methods. Used as a high-value clinical antioxidant or luxury clean-label food color.",
    benefits: [
      "Vibrant sky-blue color, completely free of toxic synthetic dye residues",
      "Powerful free-radical scavenging action and protective liver effects",
      "Excellent thermal stability when formulated in cold-press beverages",
      "Standardized dose of biological active C-Phycocyanin"
    ],
    specifications: [
      { key: "Active Ingredient", value: "C-Phycocyanin protein complex" },
      { key: "Color Value (E10%)", value: "E18 - E25 customizable" },
      { key: "Solubility", value: "100% water-soluble, brilliant blue shade" },
      { key: "pH Stability Range", value: "pH 4.5 to 8.0" }
    ],
    isFeatured: true
  },
  {
    id: "cyano-soil-reviver",
    name: "Cyano-Grow Algal Soil Bio-Stimulant",
    category: "agricultural_inputs",
    categoryLabel: "Agriculture Inputs",
    description: "An advanced liquid bio-stimulant made from microalgal extracts, amino acids, and soil-active cyanobacteria. Restores soil biology, unlocks bound phosphorus, and stimulates dense root growth.",
    benefits: [
      "Triggers rapid multiplication of mycorrhizae and beneficial soil bacteria",
      "Enhances natural drought tolerance by creating organic water-retaining hydrogels",
      "Improves crop yield by 15-25% through faster nutrient transportation",
      "Completely natural, certified organic input, suitable for natural farming"
    ],
    specifications: [
      { key: "Active Ingredients", value: "Liquid Microalgae extract, Nitrogen-fixing Cyanobacteria" },
      { key: "Application Method", value: "Soil drenching, drip irrigation, or foliar spray" },
      { key: "Dilution Ratio", value: "5 ml per liter of clean water" },
      { key: "Compatibility", value: "Compatible with all organic manure and herbal sprays" }
    ],
    isFeatured: true
  },
  {
    id: "microalgae-protein-bar",
    name: "Active Green Microalgae & Seed Protein Bar",
    category: "functional_foods",
    categoryLabel: "Functional Foods",
    description: "A clean-label, high-protein bar formulated with cold-processed Spirulina, organic seeds, dark cocoa, and natural dates. Delivers sustained cellular energy without synthetic sweeteners or whey isolates.",
    benefits: [
      "12g of complete plant-based protein per bar with zero grittiness",
      "Slow-release low-glycemic carbs for sustained endurance",
      "Loaded with natural magnesium, zinc, and energy-releasing B-vitamins",
      "Raw, vegan, gluten-free, and sweetened purely with biological dates"
    ],
    specifications: [
      { key: "Main Protein Source", value: "Spirulina, Pumpkin seed protein, Pea isolate" },
      { key: "Calories", value: "190 kcal per 45g bar" },
      { key: "Dietary Fibers", value: "6g prebiotic dietary fibers" },
      { key: "Preservation", value: "Natural rosemary extract antioxidant stabilization" }
    ],
    isFeatured: false
  },
  {
    id: "algal-omega3",
    name: "Algal DHA-EPA Vegan Softgels",
    category: "nutraceuticals",
    categoryLabel: "Nutraceuticals",
    description: "Premium vegan Omega-3 capsules extracted directly from Schizochytrium microalgae, bypassing the ocean food chain. Supports heart, brain, and joint health without heavy metal pollution or fishy taste.",
    benefits: [
      "Direct, pure algal Omega-3, completely free of ocean microplastics and mercury",
      "High concentrations of active DHA (Docosahexaenoic Acid) and EPA",
      "100% plant-sourced softgel casing made from non-GMO tapioca starch",
      "Sustainable production that does not deplete vulnerable global marine fish stocks"
    ],
    specifications: [
      { key: "Active DHA", value: "250 mg per single softgel capsule" },
      { key: "Active EPA", value: "125 mg per single softgel capsule" },
      { key: "Source", value: "Sterile-cultured Schizochytrium sp. microalgae" },
      { key: "Heavy Metals", value: "Undetectable at 0.01 ppb resolution" }
    ],
    isFeatured: true
  },
  {
    id: "millet-algae-cookie",
    name: "Ancient Millet & Spirulina Healthy Cookies",
    category: "healthy_foods",
    categoryLabel: "Healthy Foods",
    description: "Nutritious, high-fiber biscuits baked using sprouted ancient millets (Ragi, Bajra) and microalgae powder. A healthy daily snack packed with iron, calcium, and natural plant proteins.",
    benefits: [
      "Rich in natural calcium and iron from sprouted millets and Spirulina",
      "Zero refined wheat flour (Maida), palm oil, hydrogenated fats, or white sugar",
      "High prebiotic fiber content, extremely beneficial for digestive transit",
      "Delightful light cardamom and nutty roasted-seed sensory profile"
    ],
    specifications: [
      { key: "Flour Blend", value: "Sprouted Finger Millet (Ragi), Pearl Millet, Amaranth" },
      { key: "Sweetener", value: "Raw coconut sugar and organic jaggery syrup" },
      { key: "Algae Fortification", value: "2.5% Premium dry Spirulina powder" },
      { key: "Gluten Content", value: "Gluten-Free certified recipe" }
    ],
    isFeatured: false
  },
  {
    id: "future-phyco-protein",
    name: "Phyco-isolate Pure Protein Powder (Concept Project)",
    category: "future_products",
    categoryLabel: "Future Products",
    description: "Our upcoming, next-generation protein isolate extracted entirely from microalgal cellular walls. It offers a completely neutral taste, near-100% solubility, and a superior amino acid profile compared to soy, whey, or pea.",
    benefits: [
      "Neutral cream color and 100% absence of 'algae green' tinting",
      "Complete dispersion in water with zero sediment or sandy texture",
      "Excellent foaming, emulsifying, and water-binding capacity for bakery use",
      "Grown in clean vertical bioreactors utilizing upcycled bio-CO2"
    ],
    specifications: [
      { key: "Project Status", value: "Active pilot phase / scale-up validation" },
      { key: "Target Protein", value: "85% pure hypoallergenic microalgae protein" },
      { key: "Target Launch Date", value: "Q4 2026" },
      { key: "Expected Applications", value: "Infant formulas, clinical supplements, premium clean-label drinks" }
    ],
    isFeatured: false
  }
];

export const KHETI_BHARAT_DETAILS = {
  title: "KhetiBharat Initiative",
  subtitle: "Restoring the Earth, Empowering the Farmer",
  tagline: "A comprehensive rural ecosystem that bridges advanced microalgae biotechnology with sustainable, biodiverse natural farming practices across India.",
  overview: "KhetiBharat is Cyano Foods India's flagship social enterprise and agricultural development program. We operate on the foundational belief that healthy human nutrition is inseparable from healthy, biologically active soils. We organize, educate, certify, and support smallholder Indian farmers as they transition from chemistry-based, high-cost agriculture to low-cost, biology-driven natural and organic farming. By deploying our advanced bio-stimulants and guaranteeing direct purchase agreements, we restore depleted village ecosystems and significantly increase farmer incomes.",
  pillars: [
    {
      title: "Farmer Training Academies",
      desc: "Establishing regional, zero-cost training schools where agronomists teach scientific composting, multi-cropping, seed conservation, and biological pest management."
    },
    {
      title: "Bio-Input Decentralization",
      desc: "Setting up small-scale biological input production centers in villages to supply farmers with freshly cultured nitrogen-fixing bacteria, algal bio-stimulants, and botanical pest repellents."
    },
    {
      title: "Direct Procurement & Buybacks",
      desc: "Guaranteeing fair, stable, pre-harvest price agreements for all certified organic and natural grains, superfoods, and microalgae, removing intermediate commission agents completely."
    },
    {
      title: "Collection & Value-Addition Centres",
      desc: "Building solar-powered post-harvest collection centers and primary sorting/cleaning houses directly in agricultural blocks, minimizing transit damage and retaining wealth within local village economies."
    }
  ],
  processFlow: [
    { step: 1, title: "Farmer Enrolment & Onboarding", desc: "Mapping farmer lands, checking baseline soil carbon, and signing mutual transparent buyback pledges." },
    { step: 2, title: "Ecology Conversion Phase", desc: "Providing active bio-stimulants, heirloom seeds, and natural farming composts while transitioning land away from chemicals." },
    { step: 3, title: "Regional Council Verification", desc: "Continuous internal controls, audits, and third-party NPOP/PGS certifications coordinated by Cyano regional committees." },
    { step: 4, title: "Solar Post-Harvest Processing", desc: "Crops are harvested, cleaned, dried, and graded at local solar-powered Cyano collection centers." },
    { step: 5, title: "Direct Value-Add Distribution", desc: "Processing crops into high-value functional foods at Cyano facilities, sharing premium margins with the grower community." }
  ],
  statistics: [
    { label: "Active Farmers Enrolled", value: "1,250+", suffix: "" },
    { label: "Organic Land Transitioned", value: "3,400+", suffix: " Acres" },
    { label: "Village Bio-Input Centers", value: "18", suffix: "" },
    { label: "Average Farmer Income Lift", value: "45", suffix: "%" }
  ]
};

export const COUNCIL_DATA = {
  overview: "The Cyano Foods Regional Councils are autonomous advisory and regulatory committees established across diverse agro-climatic zones in India. Operating under Cyano Foods India OPC Private Limited, these councils are composed of veteran agronomists, organic certification auditors, biotechnology researchers, and community leaders. They serve as localized regulatory, education, and validation bodies to monitor the integrity of natural farming inputs, implement group organic certification standards, audit supply chain transparency, and defend fair-pricing mandates for rural farmer associations.",
  responsibilities: [
    "Setting up local PGS-India (Participatory Guarantee System) regional groups and documenting farmer compliance",
    "Conducting random multi-residue pesticide and heavy metal spot-tests on agricultural soils and crop lots",
    "Establishing and managing rural KhetiBharat bio-input formulation hubs in block districts",
    "Arbitrating trade agreements between regional farmer co-operatives and central processing complexes",
    "Providing direct agronomic alert systems for local climate variations, pest migrations, and soil hydration"
  ],
  members: [
    { name: "Dr. Rameshwar Shinde", role: "Chairperson, Maharashtra & Gujarat Council", region: "Western Region", qualification: "Ph.D. in Agronomy, Organic Soil Chemistry Specialist" },
    { name: "Smt. K. Sarojini Devi", role: "Director of Organic Compliance, Andhra & Karnataka", region: "Deccan Southern Region", qualification: "Former PGS-India Group Coordinator, Veteran Agribusiness Lead" },
    { name: "Dr. Upendra Nath Roy", role: "Lead Biotechnologist & Algal Auditor", region: "Eastern & Gangetic Plain Council", qualification: "Post-Doc in Microalgae Physiology, Environmental Assayer" },
    { name: "Shri Harpreet Singh Bajwa", role: "Head of Natural Soil Rejuvenation", region: "Northern & Plains Region", qualification: "Advisor to National Natural Farming Council, Soil Carbon Specialist" }
  ],
  activities: [
    { title: "Quarterly Soil Health Mapping", desc: "Deploying rapid-testing mobile soil labs to measure microbial activity, soil respiration, and Organic Carbon values on over 1,200 farms." },
    { title: "Local Seed Conservation Banks", desc: "Preserving and distributing over 45 heirloom varieties of high-nutrition climate-hardy millets, pulses, and oilseeds to farmers." },
    { title: "Village Natural Farming Audits", desc: "Conducting systematic double-blind internal field audits to ensure zero synthetic chemical compounds are stored or applied in transition sectors." },
    { title: "Rural Entrepreneurship Workshops", desc: "Training village youths to construct and maintain decentralized bio-fertilizer and microalgae tank nurseries as profitable micro-enterprises." }
  ]
};

export const RESEARCH_DETAILS = {
  overview: "Research is the structural foundation of Cyano Foods India. We combine molecular biology, microalgal physiology, state-of-the-art biochemistry, and regenerative soil science to design future food and agricultural systems. Our laboratories specialize in high-efficiency light-capture biology, high-vacuum sterile cell extraction, and bio-stimulative soil interactions.",
  areas: [
    { title: "Microalgal Strain Optimization", desc: "Applying selective breeding and adaptive evolution (non-GMO) to produce resilient Arthrospira strains with elevated Phycocyanin, iron, and active cell walls." },
    { title: "Closed Photobioreactor Engineering", desc: "Developing advanced fluid dynamic piping layouts and smart borosilicate tube configurations to optimize natural sunlight exposure while reducing bio-fouling risks." },
    { title: "Soil Microbiome Signaling", desc: "Researching how specific microalgal cellular secretions and amino-acid matrices trigger nutrient-solubilizing pathways and trigger native mycorrhizae germination in depleted soils." },
    { title: "Clean-Label Biopolymer Development", desc: "Formulating healthy, functional algae-based natural food coatings, thickeners, and clean water-soluble pigments to replace artificial petrochemical food colors." }
  ],
  publications: [
    { title: "Evaluation of Arthrospira platensis Cultivated in Closed Tubular Photobioreactors for Elevated C-Phycocyanin Syntheses", journal: "Journal of Applied Algal Biotechnology", year: "2024", author: "Dr. Avanish Kumar et al." },
    { title: "Restoration of Rhizospheric Microbial Dynamics in Semi-Arid Indian Soils via Microalgal Amino-Acid Bio-Stimulants", journal: "International Agronomy & Organic Soil Review", year: "2025", author: "R. Shinde, A. Kumar" },
    { title: "Microalgae-based Proteins as Hypoallergenic Alternatives to Soy and Dairy: Sensory, Rheological, and Nutritional Analysis", journal: "Future Food Tech Communications", year: "2025", author: "Dr. Upendra Roy et al." }
  ],
  collaborations: [
    "National Institute of Interdisciplinary Science and Technology (NIIST)",
    "Regional Agricultural University, Department of Organic Soil Agronomy",
    "State Bio-Science Laboratory, Cellular Extraction Division",
    "Microalgae Physiology Research Group, European Algal Science Society"
  ]
};

export const SUSTAINABILITY_ESG = {
  overview: "At Cyano Foods India, sustainability is not a metric we report; it is the physical architecture of our operations. We operate a zero-waste biorefinery concept where carbon dioxide is transformed into proteins, water is fully recycled, and by-products are re-fermented into potent organic bio-stimulants for rural agriculture.",
  csrScope: "Our CSR (Corporate Social Responsibility) budget is deployed entirely into establishing KhetiBharat village libraries, constructing community biogas plants, and running free health screening camps for smallholder farming families.",
  metrics: [
    { title: "Carbon Capture Ratio", value: "2.4x", desc: "Our closed photobioreactors capture 2.4 kilograms of carbon dioxide for every 1.0 kilogram of pure dry Spirulina produced." },
    { title: "Water Recycled", value: "94%", desc: "We deploy multi-stage ceramic membrane filtration to recycle 94% of all liquid growth media back into our cultivation loops." },
    { title: "Chemical Inputs Eliminated", value: "140 Tons+", desc: "By transitioning lands to natural farming, we have prevented over 140 tons of synthetic pesticides and urea from entering local aquifers." },
    { title: "Zero Waste Refinery", value: "100%", desc: "The cellulose pulp and wash-waters left after extracting active blue Phycocyanin are fully upcycled into high-nitrogen soil inputs." }
  ],
  esgStrategy: {
    environmental: "Continuous reduction of carbon intensities, closed-loop solar power integration, and biological soil remediation.",
    social: "Fair-price agreements, child-labor prevention audits in our farming clusters, and complete gender parity in our laboratory and rural management boards.",
    governance: "Absolute financial transparency, strict scientific integrity panels, and independent regional council audits."
  }
};

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What makes Cyano Foods' Spirulina different from standard open-pond Spirulina?",
    answer: "Most commercial Spirulina is grown in open concrete raceway ponds exposed to atmospheric dust, bird droppings, insect contamination, and heavy-metal accumulation from the soil. Cyano Foods cultivates its premium strains in isolated, closed glass-tube photobioreactors. This ensures complete sterility, precise control over light and nutrient uptake, and a product that is certified 100% free of heavy metals, environmental pathogens, and toxic microcystins.",
    category: "products"
  },
  {
    id: "faq-2",
    question: "How does the KhetiBharat initiative support smallholder farmers in India?",
    answer: "KhetiBharat provides farmers with three core supports: free structured training in scientific natural and organic agronomy; free or highly subsidized biological soil inputs (algae bio-stimulants, bio-manure); and a legally-guaranteed pre-harvest buyback contract at fair, stable premium prices. This completely shields small farmers from market volatility and exploitative intermediate buyers.",
    category: "khetibharat"
  },
  {
    id: "faq-3",
    question: "What are the roles of the Cyano Foods Regional Councils?",
    answer: "Our Regional Councils are independent verification, education, and regulatory bodies. They coordinate local farmer groups, provide third-party accredited organic certification documentation, perform strict random soil and pesticide checks, and manage community bio-input centers. They act as localized advocates for farmer communities and protect agricultural compliance.",
    category: "regional_council"
  },
  {
    id: "faq-4",
    question: "Are your agricultural inputs chemical-free and safe for NPOP/PGS-India organic farming?",
    answer: "Yes, our Cyano-Grow soil bio-stimulants and bio-inputs are 100% natural, manufactured from premium microalgal extracts and beneficial nitrogen-fixing microbial cultures. They are completely certified organic inputs and conform strictly to NPOP (National Programme for Organic Production) and PGS-India requirements.",
    category: "certification"
  },
  {
    id: "faq-5",
    question: "How can academic institutions or organic cooperatives partner with Cyano Foods India?",
    answer: "We offer structured partnerships. Research institutions can collaborate with us on joint biotech studies, compound extraction IPs, and clinical trials. Organic farming cooperatives and farmer producer organizations (FPOs) can partner with KhetiBharat to receive scientific inputs, block certification, and stable buyback channels. You can register via our 'Partner With Us' portal.",
    category: "general"
  }
];

export const CAREER_LISTINGS: CareerPosition[] = [
  {
    id: "car-1",
    title: "Senior Microalgae Biotechnologist",
    type: "full_time",
    typeLabel: "Full-Time",
    department: "R&D - Algae Physiology Division",
    location: "Pune Research Complex, Maharashtra",
    description: "We are seeking an experienced biotechnologist to lead our strain improvement and photobioreactor optimization projects. You will analyze metabolic pathways, optimize cellular growth rates under varying light spectra, and supervise chemical purity checks of commercial biomass.",
    requirements: [
      "Ph.D. or Master's degree in Algal Biotechnology, Microbiology, or Bioprocess Engineering.",
      "Minimum 4 years of experience managing closed photobioreactors or commercial microalgae cultivation systems.",
      "Expertise in cellular cultivation, chromatography (HPLC), and aseptic laboratory methodologies.",
      "Passion for sustainability and research-driven product development."
    ]
  },
  {
    id: "car-2",
    title: "Agronomist - Natural Farming Support",
    type: "full_time",
    typeLabel: "Full-Time",
    department: "KhetiBharat Field Operations",
    location: "Anantapur & Kurnool Clusters, Andhra Pradesh",
    description: "Join our on-field agricultural support team. You will lead farmer education classes, set up on-farm biological composting systems, run soil organic carbon baseline analyses, and ensure strict natural farming compliance among enrolled rural communities.",
    requirements: [
      "B.Sc. or M.Sc. in Agronomy, Organic Agriculture, or Soil Science.",
      "Fluency in Telugu and English; strong communication and rural mobilization skills.",
      "Practical experience in zero-chemical natural farming or certified organic crop production.",
      "Willingness to travel regularly across farming villages and regional collection centers."
    ]
  },
  {
    id: "car-3",
    title: "Food Formulation Scientist",
    type: "full_time",
    typeLabel: "Full-Time",
    department: "Product Innovation Lab",
    location: "Pune Research Complex, Maharashtra",
    description: "We are hiring a food technologist to design innovative, clean-label plant-based foods and beverages fortified with microalgal proteins. You will optimize sensory properties, mask herbal taste profiles, and run accelerated stability and nutrient retention trials.",
    requirements: [
      "Master's degree in Food Science, Food Technology, or Nutrition.",
      "2-3 years of proven experience in clean-label formulating, functional foods, or baking sciences.",
      "Deep understanding of sensory evaluation, natural emulsifiers, and shelf-life extension methodologies.",
      "Strong analytical mind with precise documentation skills."
    ]
  },
  {
    id: "car-4",
    title: "Field Intern - KhetiBharat Rural Development",
    type: "internship",
    typeLabel: "Internship (Paid)",
    department: "Community Relations",
    location: "Multiple Districts (Maharashtra / Karnataka)",
    description: "A unique hands-on opportunity to understand rural agricultural economics, sustainable supply chain logistics, and organic group certification procedures. You will work side-by-side with our regional council leads and farming co-operatives.",
    requirements: [
      "Enrolled in or recently graduated from Agribusiness, Rural Development, Social Work, or Agronomy courses.",
      "Strong conversational skills in local languages (Marathi, Kannada, or Telugu).",
      "Eagerness to work directly in field environments and compile accurate field data sheets.",
      "Basic computer proficiency (MS Excel, mobile data collection applications)."
    ]
  }
];

export const DOWNLOADS_LIST: DownloadDoc[] = [
  { id: "dl-1", title: "Cyano Foods India - Corporate Brochure 2026", category: "brochure", categoryLabel: "Corporate Brochure", fileSize: "4.8 MB", format: "PDF" },
  { id: "dl-2", title: "KhetiBharat Sustainable Farmer Impact Report 2025", category: "reports", categoryLabel: "Impact Reports", fileSize: "12.4 MB", format: "PDF" },
  { id: "dl-3", title: "Microalgae Bio-Stimulants for Modern Agronomy - Technical Guide", category: "guidelines", categoryLabel: "Technical Guidelines", fileSize: "3.2 MB", format: "PDF" },
  { id: "dl-4", title: "Pure Spirulina Biomass Certification & Heavy Metal Analysis", category: "certifications", categoryLabel: "Purity Certifications", fileSize: "1.9 MB", format: "PDF" },
  { id: "dl-5", title: "Regional Councils - Natural Farming Compliance Handbook", category: "guidelines", categoryLabel: "Technical Guidelines", fileSize: "2.6 MB", format: "PDF" },
  { id: "dl-6", title: "PGS-India Group Organic Registration Manual - Telugu / Marathi", category: "guidelines", categoryLabel: "Technical Guidelines", fileSize: "5.1 MB", format: "PDF" }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: "news-1",
    title: "Cyano Foods India Receives National Biotechnology Research Grant for Phycocyanin Isolation",
    category: "news",
    categoryLabel: "Press Release",
    date: "May 12, 2026",
    summary: "The National Biotech Promotion Council has awarded Cyano Foods a prestigious scientific research grant to advance cold-temperature physical separation of clinical-grade Phycocyanin blue protein.",
    content: "We are deeply honored to receive this recognition. This research grant will fund the acquisition of next-generation continuous chromatography systems at our Pune research complex. Over the next 18 months, our scientific panel will focus on isolating specialized blue proteins that show significant anti-inflammatory and cellular cytoprotective properties. Crucially, the process uses only physical, water-based filtration technology, completely avoiding the chemical solvents common in industrial dyes.",
    imagePlaceholder: "🔬"
  },
  {
    id: "news-2",
    title: "KhetiBharat Reaches Landmark of 1,000 Certified Organic Farmers in Dry-Belt Regions",
    category: "success_story",
    categoryLabel: "Success Story",
    date: "April 05, 2026",
    summary: "Our flagship rural program, KhetiBharat, has successfully assisted its 1,000th farmer in Andhra Pradesh and Maharashtra to secure formal NPOP organic certification, boosting average household incomes by 45%.",
    content: "Transitioning arid farmland to ecological, chemical-free natural farming is a massive challenge. By organizing farmers into tightly-knit Regional Council clusters, supplying high-potency microalgae bio-stimulants, and handling all administrative auditing, Cyano Foods has turned low-yield dry farms into high-value organic hubs. Farmer Ramesh Goud of Anantapur shares: 'With Cyano bio-inputs, my irrigation water lasts longer, my soil feels alive, and I have a guaranteed buyer who pays me on time directly.'",
    imagePlaceholder: "🌾"
  },
  {
    id: "news-3",
    title: "Cyano Foods India to Present Microalgae Protein Formulations at the Global Food Tech Summit 2026",
    category: "event",
    categoryLabel: "Upcoming Event",
    date: "July 24, 2026",
    summary: "Our R&D team will showcase clean-label, high-solubility microalgal protein formulations and allergen-free alternatives at the upcoming Global Food Tech Summit in New Delhi.",
    content: "As the global demand for plant-based proteins spikes, current options like soy and pea present allergen risks and land-use concerns. Cyano Foods is excited to unveil our state-of-the-art biological isolates. Dr. Avanish Kumar will present on 'Microalgae as the Primary Source of Bioavailable Amino Acid Matrices for Future Cities', demonstrating how vertical photobioreactors can feed urban populations with negligible water footprints.",
    imagePlaceholder: "🌱"
  },
  {
    id: "news-4",
    title: "Inauguration of New Solar-Powered Collection and Value-Addition Centre in Pune District",
    category: "news",
    categoryLabel: "General News",
    date: "February 18, 2026",
    summary: "Cyano Foods India commissions a fully off-grid, solar-powered agricultural collection centre to handle post-harvest cleaning, vacuum dehydration, and direct-grade packaging for rural cooperatives.",
    content: "Post-harvest loss is a major pain point for Indian smallholders. This new 50,000-square-foot facility operates entirely on solar rooftop power and utilizes high-efficiency thermodynamic drying blocks. By bringing modern sorting, gentle drying, and direct QR-code labeling into the village cluster, we reduce transit carbon footprints, preserve maximum active nutrients in our crops, and directly employ 35 local rural youths.",
    imagePlaceholder: "☀️"
  }
];

export const OFFICE_LOCATIONS = [
  {
    name: "Corporate Headquarters & R&D Complex",
    address: "Cyano House, Biotech Innovation Park, Phase 2, Hinjawadi, Pune, Maharashtra - 411057, India",
    phone: "+91 (20) 555-8392",
    email: "corporate@cyanofoodsindia.com",
    role: "Central administration, analytical chemistry laboratories, bioreactor engineering, global sales, and export logistics."
  },
  {
    name: "Deccan Southern Regional Council & Training Hub",
    address: "Krishi Seva Bhavan, Industrial Development Area, Anantapur, Andhra Pradesh - 515001, India",
    phone: "+91 (8554) 223-455",
    email: "southcouncil@cyanofoodsindia.com",
    role: "PGS-India coordination, farmer training academies, biological input production hubs, and solar collection center management."
  }
];
