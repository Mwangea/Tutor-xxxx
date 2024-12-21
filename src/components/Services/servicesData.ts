import { 
  BookOpen, GraduationCap, Users, Target, Award, Clock, 
  Calculator, Globe, Brain, Laptop, Languages, PenTool,
  BookCheck, School, Microscope, Music, Palette, Code
} from 'lucide-react';

export const allServices = [
  {
    title: 'All online tutoring and proctored exams assistance',
    description: 'Comprehensive online tutoring support for all academic levels. Get personalized help with assignments, test preparation, and live proctored exam assistance from experienced tutors.',
    Icon: Users,
    image: 'online-ed.png',
    alt: 'Students engaging in online tutoring session',
    category: 'Tutoring',
    metaDescription: 'Expert online tutoring and proctored exam assistance for all subjects and academic levels.'
  },
  {
    title: 'GED Exams',
    description: 'Professional GED exam preparation and support services. Our experienced tutors help you master all four subjects: Mathematical Reasoning, Reasoning Through Language Arts, Science, and Social Studies.',
    Icon: GraduationCap,
    image: 'Ged.png',
    alt: 'GED exam preparation materials and study resources',
    category: 'Standardized Tests',
    metaDescription: 'Comprehensive GED exam preparation and support services for all four test subjects.'
  },
  {
    title: 'ATI TEAS Exams',
    description: 'Specialized preparation for the ATI TEAS exam, covering Reading, Math, Science, and English. Get personalized strategies and practice tests to boost your score.',
    Icon: Target,
    image: 'TEAS.png',
    alt: 'ATI TEAS exam study materials',
    category: 'Healthcare Education',
    metaDescription: 'Expert ATI TEAS exam preparation covering all test sections with personalized support.'
  },
  {
    title: 'HESI Exams',
    description: 'Comprehensive HESI exam preparation services. Get expert guidance for all subjects including Anatomy, Physiology, Biology, Chemistry, and Math.',
    Icon: Calculator,
    image: 'HESI.png',
    alt: 'HESI exam preparation resources',
    category: 'Healthcare Education',
    metaDescription: 'Professional HESI exam preparation with subject matter experts.'
  },
  {
    title: 'Online Classes',
    description: 'Full-service online class support for various subjects. Get help with assignments, discussions, projects, and exam preparation in a virtual learning environment.',
    Icon: Microscope,
    image: 'classes.png',
    alt: 'Online classroom environment',
    category: 'Academic Support',
    metaDescription: 'Comprehensive online class support and management services for all subjects.'
  },
  {
    title: 'Wonderlic Exams',
    description: 'Expert preparation for Wonderlic cognitive ability and basic skills tests. Learn time management strategies and practice with sample questions.',
    Icon: Languages,
    image: 'wonderlic.png',
    alt: 'Wonderlic test preparation materials',
    category: 'Professional Tests',
    metaDescription: 'Professional Wonderlic test preparation and practice resources.'
  },
  {
    title: 'Coding Tasks and Exams',
    description: 'Specialized support for programming assignments and coding exams in various languages including Python, Java, C++, and JavaScript.',
    Icon: Laptop,
    image: 'coding.jpeg',
    alt: 'Programming and coding environment',
    category: 'Technical Education',
    metaDescription: 'Expert assistance with coding assignments and programming exams.'
  },
  {
    title: 'Web Development Assignment',
    description: 'Professional help with web development projects including HTML, CSS, JavaScript, React, Angular, and full-stack development tasks.',
    Icon: Clock,
    image: 'web-dev.jpg',
    alt: 'Web development workspace',
    category: 'Technical Education',
    metaDescription: 'Comprehensive web development assignment assistance and support.'
  },
  {
    title: 'App Development Assignment',
    description: 'Expert assistance with mobile and desktop application development assignments, covering iOS, Android, and cross-platform development.',
    Icon: BookOpen,
    image: 'app-dev.png',
    alt: 'App development tools and interface',
    category: 'Technical Education',
    metaDescription: 'Professional app development project assistance and guidance.'
  },
  {
    title: 'Physiology Exams',
    description: 'Comprehensive support for physiology examinations, covering human body systems, cellular processes, and physiological mechanisms.',
    Icon: PenTool,
    image: 'physiology.png',
    alt: 'Physiology study materials',
    category: 'Medical Education',
    metaDescription: 'Expert physiology exam preparation and support services.'
  },
  {
    title: 'Immunology Exams',
    description: 'Specialized assistance for immunology exams, covering immune system components, mechanisms, and clinical applications.',
    Icon: BookCheck,
    image: 'immunology.png',
    alt: 'Immunology course materials',
    category: 'Medical Education',
    metaDescription: 'Professional immunology exam preparation and study support.'
  },
  {
    title: 'Microbiology Exams',
    description: 'Expert support for microbiology examinations, covering microorganisms, laboratory techniques, and clinical applications.',
    Icon: School,
    image: 'Microbiology.png',
    alt: 'Microbiology laboratory setup',
    category: 'Medical Education',
    metaDescription: 'Comprehensive microbiology exam preparation and assistance.'
  },
  {
    title: 'Pathology Exams',
    description: 'Professional assistance with pathology examinations, covering disease processes, diagnostic methods, and clinical correlations.',
    Icon: Code,
    image: 'pathology.png',
    alt: 'Pathology study materials',
    category: 'Medical Education',
    metaDescription: 'Expert pathology exam preparation and study support.'
  },
  {
    title: 'Biochemistry Exams',
    description: 'Comprehensive support for biochemistry exams, covering molecular processes, metabolic pathways, and laboratory techniques.',
    Icon: Music,
    image: 'Biochem.png',
    alt: 'Biochemistry course materials',
    category: 'Medical Education',
    metaDescription: 'Professional biochemistry exam preparation and assistance.'
  },
  {
    title: 'Anatomy Exams',
    description: 'Expert assistance with anatomy examinations, covering human body structure, systems, and clinical applications.',
    Icon: Palette,
    image: 'Anatomy.png',
    alt: 'Anatomy study resources',
    category: 'Medical Education',
    metaDescription: 'Comprehensive anatomy exam preparation and study support.'
  },
  {
    title: 'English Exam',
    description: 'Professional support for English language examinations, covering grammar, comprehension, writing, and communication skills.',
    Icon: Award,
    image: 'Atieng.png',
    alt: 'English exam preparation materials',
    category: 'Language Arts',
    metaDescription: 'Expert English exam preparation and language skills support.'
  },
  {
    title: 'Online Pearson VUE Exams',
    description: 'Specialized assistance for Pearson VUE certification exams across various professional fields and technical domains.',
    Icon: Globe,
    image: 'vue.png',
    alt: 'Pearson VUE exam preparation',
    category: 'Professional Certification',
    metaDescription: 'Professional Pearson VUE exam preparation and support services.'
  },
  {
    title: 'Online Exams',
    description: 'Comprehensive support for various online examinations, including test preparation, practice questions, and exam strategies.',
    Icon: Brain,
    image: 'Helper.png',
    alt: 'Online exam assistance tools',
    category: 'General Education',
    metaDescription: 'Expert online exam preparation and support for all subjects.'
  }
] as const;

// Categories for filtering
export const serviceCategories = [
  'Tutoring',
  'Standardized Tests',
  'Healthcare Education',
  'Academic Support',
  'Professional Tests',
  'Technical Education',
  'Medical Education',
  'Language Arts',
  'Professional Certification',
  'General Education'
] as const;

// Helper function to get services by category
export const getServicesByCategory = (category: string) => {
  return allServices.filter(service => service.category === category);
};

// Helper function to get featured services (you can customize the logic)
export const getFeaturedServices = () => {
  return allServices.slice(0, 6); // Returns first 6 services as featured
};

// Types for type safety
export type Service = typeof allServices[number];
export type ServiceCategory = typeof serviceCategories[number];