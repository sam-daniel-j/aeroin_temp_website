export type ProjectCategory =
  | 'CubeSat'
  | 'Rockets'
  | 'UAV'
  | 'Robotics'
  | 'Aerospace Design'
  | 'Space Research';

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  technology: string;
  image: string;
  isPlaceholder: boolean;
};

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'CubeSat',
  'Rockets',
  'UAV',
  'Robotics',
  'Aerospace Design',
  'Space Research',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Conceptual CubeSat Mission',
    category: 'CubeSat',
    description:
      'A conceptual student project exploring satellite architecture, mission planning and spacecraft subsystems.',
    technology: 'CubeSat Systems / Mission Design',
    image:
      'https://images.pexels.com/photos/30596892/pexels-photo-30596892.png?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 2,
    title: 'Planetary Rover Concept',
    category: 'Robotics',
    description:
      'A conceptual rover project exploring autonomous navigation, sensors and planetary exploration.',
    technology: 'Robotics / Autonomous Navigation',
    image:
      'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 3,
    title: 'UAV Design Concept',
    category: 'UAV',
    description:
      'A conceptual UAV project exploring aircraft configuration, flight systems and control concepts.',
    technology: 'UAV Systems / Flight Control',
    image:
      'https://images.pexels.com/photos/3946004/pexels-photo-3946004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 4,
    title: 'Aerospace Flow Analysis',
    category: 'Aerospace Design',
    description:
      'A conceptual engineering project exploring aerodynamic flow and simulation.',
    technology: 'CFD / Aerodynamic Analysis',
    image:
      'https://images.pexels.com/photos/3862143/pexels-photo-3862143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 5,
    title: 'Satellite Orbit Mission',
    category: 'Space Research',
    description:
      'A conceptual mission-design project exploring orbital mechanics and satellite mission planning.',
    technology: 'Orbital Mechanics / Mission Analysis',
    image:
      'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 6,
    title: 'Aerospace Structural Concept',
    category: 'Aerospace Design',
    description:
      'A conceptual structural design project exploring aerospace loads and structural analysis.',
    technology: 'Structural Analysis / FEA',
    image:
      'https://images.pexels.com/photos/38038481/pexels-photo-38038481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 7,
    title: 'Rocket Propulsion Study',
    category: 'Rockets',
    description:
      'A conceptual propulsion project exploring rocket engine concepts and performance analysis.',
    technology: 'Propulsion / CFD Analysis',
    image:
      'https://images.pexels.com/photos/18015296/pexels-photo-18015296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
  {
    id: 8,
    title: 'Spacecraft Component Design',
    category: 'Aerospace Design',
    description:
      'A conceptual design project exploring spacecraft component engineering and assembly.',
    technology: 'Engineering Design / CAD',
    image:
      'https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    isPlaceholder: true,
  },
];
