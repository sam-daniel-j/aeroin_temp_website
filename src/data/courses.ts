import {
  Satellite,
  Rocket,
  Cpu,
  Telescope,
  Radar,
  Gauge,
  Battery,
  Antenna,
  Orbit,
  Target,
  Layers,
  Settings,
  ScanLine,
  Plane,
  Flame,
  Wind,
  Zap,
  Boxes,
  Wrench,
  Navigation,
  Bot,
  Armchair,
  Globe,
  Star,
  Search,
  Calculator,
  TrendingUp,
  Workflow,
  PenTool,
  Microscope,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export type CourseCategory =
  | 'Space Technology'
  | 'Aerospace Engineering'
  | 'UAV & Drones'
  | 'Robotics'
  | 'Astronomy';

export type LearningOutcome = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type CurriculumModule = {
  number: string;
  title: string;
  topics: string[];
};

export type CourseFAQ = {
  question: string;
  answer: string;
};

export type Course = {
  id: number;
  title: string;
  slug: string;
  category: CourseCategory;
  shortDescription: string;
  description: string;
  level: string;
  mode: string;
  image: string;
  learningOutcomes: LearningOutcome[];
  curriculum: CurriculumModule[];
  project: string;
  audience: string[];
  skills: string[];
  faqs: CourseFAQ[];
};

export type ProgramPlan = {
  id: string;
  duration: string;
  price: number;
  gstIncluded: boolean;
};

export const courseCategories: ('All Courses' | CourseCategory)[] = [
  'All Courses',
  'Space Technology',
  'Aerospace Engineering',
  'UAV & Drones',
  'Robotics',
  'Astronomy',
];

export const programPlans: ProgramPlan[] = [
  { id: '15-days', duration: '15 Days', price: 3539, gstIncluded: true },
  { id: '4-weeks', duration: '4 Weeks', price: 5899, gstIncluded: true },
  { id: '8-weeks', duration: '8 Weeks', price: 10619, gstIncluded: true },
  { id: '3-months', duration: '3 Months', price: 25370, gstIncluded: true },
];

export const coursePricingNote = 'Programs from ₹3,539';
export const coursePricingSubNote = 'Inclusive of GST';

export const courses: Course[] = [
  {
    id: 1,
    title: 'CubeSat Technology',
    slug: 'cubesat-technology',
    category: 'Space Technology',
    shortDescription:
      'Learn satellite systems, CubeSat architecture, mission planning and spacecraft subsystems.',
    description:
      'Gain a thorough understanding of small satellite systems through the CubeSat platform. This course covers satellite fundamentals, spacecraft subsystems, attitude control, payload integration, and end-to-end mission development — combining theory with a practical mission design project.',
    level: 'Beginner – Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/30596893/pexels-photo-30596893.png?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Satellite, title: 'Satellite Fundamentals', description: 'Understand satellite types, orbits, and space mission concepts.' },
      { icon: Layers, title: 'CubeSat Architecture', description: 'Learn CubeSat standards, structure, and subsystem design.' },
      { icon: Battery, title: 'Spacecraft Subsystems', description: 'Explore power, communication, and onboard computer systems.' },
      { icon: Radar, title: 'Attitude Control', description: 'Study attitude determination and control for small satellites.' },
      { icon: Antenna, title: 'Communication Systems', description: 'Understand satellite communication and ground station links.' },
      { icon: Target, title: 'Mission Planning', description: 'Design a CubeSat mission from concept to testing.' },
    ],
    curriculum: [
      { number: '01', title: 'Introduction to Satellites', topics: ['Introduction to satellites', 'Satellite types', 'Space missions'] },
      { number: '02', title: 'CubeSat Architecture', topics: ['CubeSat standards', 'Satellite architecture', 'Spacecraft subsystems'] },
      { number: '03', title: 'Satellite Subsystems', topics: ['Electrical Power Systems', 'Communication Systems', 'Onboard Computers'] },
      { number: '04', title: 'Attitude & Payload', topics: ['Attitude Determination & Control', 'Payload Systems', 'Sensor concepts'] },
      { number: '05', title: 'Mission Development', topics: ['Ground Stations', 'Mission Planning', 'Satellite Testing', 'CubeSat Mission Design'] },
    ],
    project: 'Design a conceptual CubeSat mission.',
    audience: ['School Students', 'Engineering Students', 'Space Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['Space Technology Fundamentals', 'Mission Design', 'Subsystem Engineering', 'Systems Thinking', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This course is designed for school students, engineering students, space enthusiasts, and aspiring space professionals. The beginner-to-intermediate level makes it accessible to those new to satellite systems.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will design a conceptual CubeSat mission as part of the course.' },
    ],
  },
  {
    id: 2,
    title: 'Rocket Propulsion & CFD',
    slug: 'rocket-propulsion-cfd',
    category: 'Aerospace Engineering',
    shortDescription:
      'Learn rocket propulsion fundamentals, engine concepts, performance analysis and CFD fundamentals.',
    description:
      'Dive into the principles of rocket propulsion — from engine components and propulsion types to combustion, nozzle design, and performance analysis. The course introduces CFD fundamentals for propulsion system simulation, culminating in a conceptual propulsion system design project.',
    level: 'Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/18015296/pexels-photo-18015296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Rocket, title: 'Propulsion Fundamentals', description: 'Understand rocket engine components and propulsion systems.' },
      { icon: Flame, title: 'Propulsion Types', description: 'Learn solid, liquid, and hybrid propulsion systems.' },
      { icon: Zap, title: 'Combustion & Nozzles', description: 'Study combustion, nozzle design, thrust, and specific impulse.' },
      { icon: Gauge, title: 'Performance Analysis', description: 'Analyze propulsion performance and design considerations.' },
      { icon: Wind, title: 'CFD Fundamentals', description: 'Apply CFD concepts to propulsion system simulation.' },
    ],
    curriculum: [
      { number: '01', title: 'Rocket Propulsion Fundamentals', topics: ['Propulsion fundamentals', 'Rocket engine components', 'Propulsion systems'] },
      { number: '02', title: 'Propulsion Types', topics: ['Solid propulsion', 'Liquid propulsion', 'Hybrid propulsion'] },
      { number: '03', title: 'Combustion & Nozzles', topics: ['Combustion fundamentals', 'Nozzle design', 'Thrust', 'Specific impulse'] },
      { number: '04', title: 'Performance Analysis', topics: ['Propulsion performance', 'System analysis', 'Design considerations'] },
      { number: '05', title: 'CFD Fundamentals', topics: ['CFD concepts', 'Flow simulation', 'Propulsion system analysis'] },
    ],
    project: 'Design and analyze a conceptual rocket propulsion system.',
    audience: ['Engineering Students', 'Aerospace Students', 'Space Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['Propulsion Fundamentals', 'Engineering Analysis', 'CFD Basics', 'Performance Analysis', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This intermediate-level course is ideal for engineering students, aerospace students, space enthusiasts, and aspiring space professionals with an interest in propulsion systems.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will design and analyze a conceptual rocket propulsion system as part of the course.' },
    ],
  },
  {
    id: 3,
    title: 'Drones & UAV Technology',
    slug: 'drones-uav-technology',
    category: 'UAV & Drones',
    shortDescription:
      'Learn UAV systems, drone components, flight principles, control systems and autonomous UAV concepts.',
    description:
      'Explore the world of unmanned aerial vehicles — from drone fundamentals and components to flight systems, design, and autonomous navigation. The course combines theory with a hands-on UAV system design project, covering motors, ESCs, propellers, flight controllers, and more.',
    level: 'Beginner – Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/3823555/pexels-photo-3823555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Plane, title: 'UAV Fundamentals', description: 'Understand drone types, applications, and UAV concepts.' },
      { icon: Cpu, title: 'Drone Components', description: 'Learn motors, ESCs, propellers, batteries, and flight controllers.' },
      { icon: Wind, title: 'Flight Systems', description: 'Study aerodynamics, sensors, and flight control.' },
      { icon: Settings, title: 'UAV Design', description: 'Design and integrate a basic UAV system.' },
      { icon: Navigation, title: 'Autonomous UAVs', description: 'Explore autonomous navigation and UAV applications.' },
    ],
    curriculum: [
      { number: '01', title: 'UAV Fundamentals', topics: ['UAV fundamentals', 'Drone types', 'UAV applications'] },
      { number: '02', title: 'Drone Components', topics: ['Motors', 'ESC', 'Propellers', 'Batteries', 'Flight controllers'] },
      { number: '03', title: 'Flight Systems', topics: ['Aerodynamics', 'Sensors', 'Communication systems', 'Flight control'] },
      { number: '04', title: 'UAV Design', topics: ['UAV design', 'System integration', 'Flight planning'] },
      { number: '05', title: 'Autonomous UAVs', topics: ['Autonomous systems', 'Navigation', 'UAV applications'] },
    ],
    project: 'Design and configure a basic UAV system.',
    audience: ['School Students', 'Engineering Students', 'UAV Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['UAV Fundamentals', 'System Integration', 'Flight Control', 'Autonomous Systems', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This course is suitable for school students, engineering students, UAV enthusiasts, and aspiring space professionals. The beginner-to-intermediate level makes it accessible to those new to drone technology.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will design and configure a basic UAV system as part of the course.' },
    ],
  },
  {
    id: 4,
    title: 'Space Robotics',
    slug: 'space-robotics',
    category: 'Robotics',
    shortDescription:
      'Explore rovers, robotic systems, autonomous navigation and planetary exploration.',
    description:
      'Discover the field of space robotics — from rover design and robotic arms to autonomous navigation and planetary exploration. The course covers embedded systems, sensors, actuators, and simulation, ending with a conceptual planetary rover design project.',
    level: 'Beginner – Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/32083788/pexels-photo-32083788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Bot, title: 'Robotics Fundamentals', description: 'Understand robotics principles and space applications.' },
      { icon: Cpu, title: 'Rover Systems', description: 'Learn rover design, motors, sensors, and actuators.' },
      { icon: Armchair, title: 'Robotic Systems', description: 'Explore robotic arms and embedded systems.' },
      { icon: Navigation, title: 'Autonomous Navigation', description: 'Study obstacle detection and autonomous systems.' },
      { icon: Globe, title: 'Planetary Exploration', description: 'Understand planetary missions and robotics simulation.' },
    ],
    curriculum: [
      { number: '01', title: 'Space Robotics Fundamentals', topics: ['Robotics fundamentals', 'Space robotics applications'] },
      { number: '02', title: 'Rover Systems', topics: ['Rover design', 'Motors', 'Sensors', 'Actuators'] },
      { number: '03', title: 'Robotic Systems', topics: ['Robotic arms', 'Embedded systems', 'Communication'] },
      { number: '04', title: 'Autonomous Navigation', topics: ['Navigation', 'Obstacle detection', 'Autonomous systems'] },
      { number: '05', title: 'Planetary Exploration', topics: ['Planetary missions', 'Robotics simulation', 'Mission planning'] },
    ],
    project: 'Design a conceptual planetary rover.',
    audience: ['School Students', 'Engineering Students', 'Robotics Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['Robotics Fundamentals', 'Autonomous Navigation', 'Embedded Systems', 'Systems Thinking', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This course is designed for school students, engineering students, robotics enthusiasts, and aspiring space professionals. The beginner-to-intermediate level makes it accessible to those new to robotics.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will design a conceptual planetary rover as part of the course.' },
    ],
  },
  {
    id: 5,
    title: 'Astronomy & Astrophysics',
    slug: 'astronomy-astrophysics',
    category: 'Astronomy',
    shortDescription:
      'Explore planets, stars, galaxies, black holes, exoplanets and modern astronomy.',
    description:
      'Journey through the universe — from the solar system and stars to galaxies, black holes, and exoplanets. This beginner-friendly course covers modern astronomy, cosmology, observation techniques, and space missions, with a practical astronomical observation project.',
    level: 'Beginner',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/7387475/pexels-photo-7387475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Globe, title: 'Solar System', description: 'Understand planets, celestial objects, and the solar system.' },
      { icon: Star, title: 'Stars & Evolution', description: 'Learn star formation, evolution, and classification.' },
      { icon: Orbit, title: 'Galaxies & Black Holes', description: 'Explore galaxies, black holes, and galactic structures.' },
      { icon: Telescope, title: 'Modern Astronomy', description: 'Study exoplanets, cosmology, and space observation.' },
      { icon: Search, title: 'Observation Techniques', description: 'Learn telescope use and astronomical observation methods.' },
    ],
    curriculum: [
      { number: '01', title: 'Introduction to Astronomy', topics: ['Astronomy fundamentals', 'Solar system', 'Celestial objects'] },
      { number: '02', title: 'Stars', topics: ['Star formation', 'Stellar evolution', 'Star classification'] },
      { number: '03', title: 'Galaxies & Black Holes', topics: ['Galaxies', 'Black holes', 'Galactic structures'] },
      { number: '04', title: 'Modern Astronomy', topics: ['Exoplanets', 'Cosmology', 'Space observation'] },
      { number: '05', title: 'Observation & Missions', topics: ['Telescopes', 'Astronomical observation', 'Space missions'] },
    ],
    project: 'Conduct a basic astronomical observation project.',
    audience: ['School Students', 'Space Enthusiasts', 'Graduates', 'Aspiring Space Professionals'],
    skills: ['Astronomy Fundamentals', 'Observation Techniques', 'Cosmology Concepts', 'Scientific Thinking', 'Analytical Skills'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This beginner-level course is perfect for school students, space enthusiasts, graduates, and anyone curious about the universe. No prior astronomy knowledge is required.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will conduct a basic astronomical observation project as part of the course.' },
    ],
  },
  {
    id: 6,
    title: 'Orbital Mechanics & Mission Design',
    slug: 'orbital-mechanics',
    category: 'Space Technology',
    shortDescription:
      'Learn orbital mechanics, orbital transfers, satellite missions and mission analysis.',
    description:
      "Master the fundamentals of orbital mechanics — from Newton's and Kepler's laws to orbital elements, transfers, and mission design. This intermediate course covers inclination, launch windows, and mission analysis, with a practical satellite orbit and mission design project.",
    level: 'Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Orbit, title: 'Orbital Fundamentals', description: "Understand Newton's and Kepler's laws and orbital concepts." },
      { icon: Calculator, title: 'Orbital Elements', description: 'Learn circular and elliptical orbit parameters.' },
      { icon: TrendingUp, title: 'Orbital Transfers', description: 'Study escape velocity and Hohmann transfers.' },
      { icon: Target, title: 'Mission Design', description: 'Design satellite missions with inclination and launch windows.' },
      { icon: ScanLine, title: 'Mission Analysis', description: 'Analyze orbits and plan mission scenarios.' },
    ],
    curriculum: [
      { number: '01', title: 'Orbital Fundamentals', topics: ['Newton\'s Laws', 'Kepler\'s Laws', 'Orbital concepts'] },
      { number: '02', title: 'Orbital Elements', topics: ['Orbital elements', 'Circular orbits', 'Elliptical orbits'] },
      { number: '03', title: 'Orbital Transfers', topics: ['Escape velocity', 'Orbital transfers', 'Hohmann transfers'] },
      { number: '04', title: 'Mission Design', topics: ['Inclination', 'Satellite mission design', 'Launch windows'] },
      { number: '05', title: 'Mission Analysis', topics: ['Mission planning', 'Orbit analysis', 'Mission scenarios'] },
    ],
    project: 'Design a conceptual satellite orbit and mission.',
    audience: ['Engineering Students', 'Aerospace Students', 'Space Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['Orbital Mechanics', 'Mission Design', 'Engineering Analysis', 'Systems Thinking', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This intermediate-level course is ideal for engineering students, aerospace students, space enthusiasts, and aspiring space professionals with an interest in orbital mechanics and mission design.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will design a conceptual satellite orbit and mission as part of the course.' },
    ],
  },
  {
    id: 7,
    title: 'Aerodynamics & Flow Analysis',
    slug: 'aerodynamics-flow-analysis',
    category: 'Aerospace Engineering',
    shortDescription:
      'Learn fluid mechanics, lift, drag, compressible flow, shockwaves and CFD fundamentals.',
    description:
      'Understand the principles of aerodynamics — from fluid mechanics and lift/drag to compressible flow and shockwaves. This intermediate course introduces CFD fundamentals for aerospace flow analysis, with a practical project analyzing aerodynamic flow around an aerospace vehicle.',
    level: 'Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/1431830/pexels-photo-1431830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Wind, title: 'Aerodynamics Fundamentals', description: 'Understand fluid mechanics, pressure, and velocity.' },
      { icon: Plane, title: 'Lift & Drag', description: 'Study airfoils, boundary layers, and aerodynamic forces.' },
      { icon: Zap, title: 'Compressible Flow', description: 'Learn Mach number and supersonic flow behavior.' },
      { icon: Flame, title: 'Shockwaves', description: 'Understand shockwave fundamentals and supersonic applications.' },
      { icon: ScanLine, title: 'CFD Analysis', description: 'Apply CFD fundamentals to aerospace flow simulation.' },
    ],
    curriculum: [
      { number: '01', title: 'Aerodynamics Fundamentals', topics: ['Fluid mechanics', 'Pressure', 'Velocity'] },
      { number: '02', title: 'Lift & Drag', topics: ['Lift', 'Drag', 'Airfoils', 'Boundary layers'] },
      { number: '03', title: 'Compressible Flow', topics: ['Mach number', 'Compressible flow', 'Supersonic flow'] },
      { number: '04', title: 'Shockwaves', topics: ['Shockwave fundamentals', 'Flow behavior', 'Supersonic applications'] },
      { number: '05', title: 'CFD', topics: ['CFD fundamentals', 'Flow simulation', 'Aerospace flow analysis'] },
    ],
    project: 'Analyze aerodynamic flow around an aerospace vehicle.',
    audience: ['Engineering Students', 'Aerospace Students', 'Space Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['Aerodynamics Fundamentals', 'Fluid Mechanics', 'CFD Basics', 'Engineering Analysis', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This intermediate-level course is designed for engineering students, aerospace students, space enthusiasts, and aspiring space professionals interested in aerodynamics and flow analysis.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will analyze aerodynamic flow around an aerospace vehicle as part of the course.' },
    ],
  },
  {
    id: 8,
    title: 'Aerospace Structures',
    slug: 'aerospace-structures',
    category: 'Aerospace Engineering',
    shortDescription:
      'Learn aerospace loads, stress, materials, structural design and structural simulation.',
    description:
      'Learn the principles of aerospace structural engineering — from loads, stress, and strain to materials, structural design, and failure analysis. This intermediate course introduces Finite Element Analysis and structural simulation, with a practical aerospace structure design and analysis project.',
    level: 'Intermediate',
    mode: 'Online / Offline / Hybrid',
    image:
      'https://images.pexels.com/photos/459402/pexels-photo-459402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: Boxes, title: 'Structural Fundamentals', description: 'Understand aerospace structures, loads, stress, and strain.' },
      { icon: Layers, title: 'Aerospace Materials', description: 'Learn material selection and lightweight structures.' },
      { icon: Wrench, title: 'Structural Design', description: 'Study beam analysis and load analysis.' },
      { icon: ShieldCheck, title: 'Failure Analysis', description: 'Understand structural failure and safety concepts.' },
      { icon: Microscope, title: 'FEA & Simulation', description: 'Apply Finite Element Analysis to structural simulation.' },
    ],
    curriculum: [
      { number: '01', title: 'Structural Fundamentals', topics: ['Aerospace structures', 'Structural loads', 'Stress', 'Strain'] },
      { number: '02', title: 'Aerospace Materials', topics: ['Aerospace materials', 'Lightweight structures', 'Material selection'] },
      { number: '03', title: 'Structural Design', topics: ['Beam analysis', 'Structural design', 'Load analysis'] },
      { number: '04', title: 'Structural Failure', topics: ['Failure analysis', 'Structural safety concepts'] },
      { number: '05', title: 'Simulation', topics: ['Finite Element Analysis', 'Structural simulation', 'Design evaluation'] },
    ],
    project: 'Design and analyze a conceptual aerospace structure.',
    audience: ['Engineering Students', 'Aerospace Students', 'Space Enthusiasts', 'Aspiring Space Professionals'],
    skills: ['Structural Engineering', 'Material Science', 'FEA Fundamentals', 'Engineering Analysis', 'Technical Problem Solving'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This intermediate-level course is ideal for engineering students, aerospace students, space enthusiasts, and aspiring space professionals with an interest in structural engineering.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online, Offline, and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will design and analyze a conceptual aerospace structure as part of the course.' },
    ],
  },
  {
    id: 9,
    title: 'Aerospace Design & Simulation',
    slug: 'aerospace-design-simulation',
    category: 'Aerospace Engineering',
    shortDescription:
      'Learn aerospace CAD, engineering design, CFD, structural analysis and simulation workflows.',
    description:
      'Master the aerospace design and simulation workflow — from engineering design fundamentals and CAD modelling to CFD, structural analysis, and system integration. This intermediate-to-advanced course culminates in a complete aerospace engineering design and simulation project.',
    level: 'Intermediate – Advanced',
    mode: 'Online / Hybrid',
    image:
      'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    learningOutcomes: [
      { icon: PenTool, title: 'Engineering Design', description: 'Understand the aerospace design process and fundamentals.' },
      { icon: Boxes, title: 'CAD Modelling', description: 'Learn CAD fundamentals and aerospace modelling.' },
      { icon: ScanLine, title: 'Simulation', description: 'Apply CFD and structural analysis simulation.' },
      { icon: Settings, title: 'System Design', description: 'Study system integration and design optimization.' },
      { icon: Workflow, title: 'Project Development', description: 'Complete a full simulation workflow and design evaluation.' },
    ],
    curriculum: [
      { number: '01', title: 'Engineering Design', topics: ['Engineering design fundamentals', 'Aerospace design process'] },
      { number: '02', title: 'CAD Modelling', topics: ['CAD fundamentals', 'Aerospace modelling', 'Design development'] },
      { number: '03', title: 'Simulation', topics: ['Simulation fundamentals', 'CFD', 'Structural analysis'] },
      { number: '04', title: 'System Design', topics: ['Aerospace systems', 'System integration', 'Design optimization'] },
      { number: '05', title: 'Project Development', topics: ['Simulation workflow', 'Design evaluation', 'Final project'] },
    ],
    project: 'Complete an aerospace engineering design and simulation project.',
    audience: ['Engineering Students', 'Aerospace Students', 'Graduates', 'Aspiring Space Professionals'],
    skills: ['Engineering Design', 'CAD Modelling', 'CFD & Structural Analysis', 'System Integration', 'Project Development'],
    faqs: [
      { question: 'Who can join this course?', answer: 'This intermediate-to-advanced course is designed for engineering students, aerospace students, graduates, and aspiring space professionals who want to master design and simulation workflows.' },
      { question: 'What is the duration?', answer: 'Multiple program duration options are available: 15 Days, 4 Weeks, 8 Weeks, and 3 Months. Choose the duration that fits your learning goals.' },
      { question: 'Is GST included?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
      { question: 'Is the course online or offline?', answer: 'This course is available in Online and Hybrid modes, giving you flexibility in how you learn.' },
      { question: 'Will I receive a certificate?', answer: 'Students who successfully complete the applicable program will receive a certificate from Aeroin EduTech, subject to the program\'s completion requirements.' },
      { question: 'Is there a practical project?', answer: 'Yes. You will complete an aerospace engineering design and simulation project as part of the course.' },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
