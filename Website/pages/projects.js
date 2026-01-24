// ===================================
// PROJECTS PAGE (Portfolio)
// Showcase completed projects
// URL: yoursite.com/projects
// ===================================

import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  /*
    STATE MANAGEMENT:
    - useState is a React Hook (special function)
    - Stores which filter is currently selected
    - 'All' means show all projects
    - Changing this state triggers re-render (page updates)
  */
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Hydro-Static Tester',
      category: 'OEM Design',
      sector: 'Manufacturing',
      subSector: '',
      description:
        'Fully automated machine to hydro statically test castings. Automated part loading using a UR cobot.',
      image: '/projects/hydro-static-tester/Main.jpg',
      technologies: ['UR Cobot', 'Hydro-Static Testing', 'PLC Controls'],
      detailImages: [
        { src: '/projects/hydro-static-tester/Control_Panel_001.jpg', label: 'Control Panel' },
        { src: '/projects/hydro-static-tester/Fixture_001.jpg', label: 'Fixture' },
        { src: '/projects/hydro-static-tester/Fixture_002.jpg', label: 'Fixture' },
        { src: '/projects/hydro-static-tester/HMI_001.jpg', label: 'HMI' },
        { src: '/projects/hydro-static-tester/SMC_Manifold_001.jpg', label: 'SMC Manifold' },
        { src: '/projects/hydro-static-tester/Valveing_001.jpg', label: 'Valving' },
      ],
    },
    {
      id: 2,
      title: 'Thrust Chamber Test Bench',
      category: 'OEM Design',
      sector: 'Manufacturing',
      subSector: 'Oil & Gas',
      description:
        'Automated test bench for testing high capacity thrust chambers for horizontal pump systems.',
      image: '/projects/thrust-chamber-test-bench/Main.jpg',
      technologies: ['Test Bench Design', 'Automated Testing', 'High Capacity Pumps'],
      detailImages: [
        { src: '/projects/thrust-chamber-test-bench/HMI_001.jpg', label: 'HMI' },
        { src: '/projects/thrust-chamber-test-bench/Tester_ISO_001.jpg', label: 'Tester ISO View' },
        { src: '/projects/thrust-chamber-test-bench/Tester_Section_001.jpg', label: 'Tester Section View' },
      ],
    },
    {
      id: 3,
      title: 'Valve Assembly Machine',
      category: 'OEM Design',
      sector: 'Manufacturing',
      subSector: 'Oil & Gas',
      description:
        'Semi-automated machine to assemble flanged ball valves. Features automated seat installation, pick and placement of tail and body sections, two hole alignment check, automated torqueing, and automated stenciling.',
      image: '/projects/valve-assembly-machine/Main.jpg',
      technologies: ['Automated Assembly', 'Torque Systems', 'Pick & Place'],
      detailImages: [
        { src: '/projects/valve-assembly-machine/Torque_001.mov', label: 'Automated Torqueing', type: 'video' },
      ],
    },
    {
      id: 4,
      title: 'Packaging Line Optimization',
      category: 'Consulting',
      sector: 'Manufacturing',
      subSector: 'Packaging',
      description:
        'Process analysis and optimization resulting in 25% increase in OEE and significant reduction in material waste.',
      image: '/projects/project-placeholder-3.jpg',
      technologies: ['Process Analysis', 'OEE Improvement', 'Training'],
    },
    {
      id: 5,
      title: 'Custom Material Handling System',
      category: 'OEM Design',
      sector: 'Manufacturing',
      subSector: 'Material Handling',
      description:
        'Design and fabrication of automated guided vehicle (AGV) system for warehouse material transport.',
      image: '/projects/project-placeholder-4.jpg',
      technologies: ['Conveyor Design', 'AGV Integration', 'Safety Systems'],
    },
    {
      id: 6,
      title: 'SCADA System Implementation',
      category: 'PLC Programming',
      sector: 'Manufacturing',
      subSector: 'Pharmaceutical',
      description:
        'Enterprise-level SCADA system for multi-site monitoring and data collection with 21 CFR Part 11 compliance.',
      image: '/projects/project-placeholder-5.jpg',
      technologies: ['Ignition SCADA', 'SQL Database', 'FDA Compliance'],
    },
    {
      id: 7,
      title: 'Plant-Wide Equipment Audit',
      category: 'Consulting',
      sector: 'Manufacturing',
      subSector: 'Automotive',
      description:
        'Comprehensive audit of 50+ production machines with upgrade roadmap and ROI analysis for modernization.',
      image: '/projects/project-placeholder-6.jpg',
      technologies: ['Equipment Assessment', 'ROI Analysis', 'Strategic Planning'],
    },
  ];

  /*
    FILTER LOGIC:
    - Get unique categories from projects
    - Add 'All' as first option
    - Creates array: ['All', 'OEM Design', 'PLC Programming', 'Consulting']
  */
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  /*
    FILTERED PROJECTS:
    - If activeFilter is 'All', show all projects
    - Otherwise, only show projects matching the active category
    - This runs every time activeFilter changes (reactive)
  */
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Layout title="Projects" description="Explore ON Design LLC's portfolio of successful OEM design, PLC programming, and consulting projects">
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Our Projects</h1>
          <p className={styles.headerSubtitle}>
            Real-world solutions delivered for manufacturing excellence
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filterButtons}>
            {/*
              MAP FUNCTION:
              - Loops through categories array
              - Creates a button for each category
              - 'category' is the current item in the loop
            */}
            {categories.map((category) => (
              <button
                key={category} // Unique key required by React for list items
                /*
                  CONDITIONAL CLASSNAME:
                  - If this button's category matches activeFilter, add 'active' class
                  - Active class makes button look selected (different color)
                */
                className={`${styles.filterButton} ${
                  activeFilter === category ? styles.active : ''
                }`}
                /*
                  ONCLICK HANDLER:
                  - When button clicked, update activeFilter state
                  - This triggers re-render with new filtered projects
                */
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {/*
              MAPPING PROJECTS TO CARDS:
              - Loop through filteredProjects array
              - Create a card for each project
              - Displays project details from the data
            */}
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                {/* Project Image */}
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <p className={styles.projectIndustry}>
                    {project.subSector || project.sector}
                  </p>
                  <p className={styles.projectDescription}>{project.description}</p>

                  {/* Technologies Used */}
                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details Button - only shows if project has detail images */}
                  {project.detailImages && (
                    <button
                      className={styles.detailsButton}
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className={styles.noResults}>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
            <p className={styles.modalDescription}>{selectedProject.description}</p>
            <div className={styles.modalGallery}>
              {selectedProject.detailImages.map((img, index) => (
                <div key={index} className={styles.galleryItem}>
                  {img.type === 'video' ? (
                    <video controls className={styles.galleryVideo}>
                      <source src={img.src} />
                    </video>
                  ) : (
                    <img src={img.src} alt={img.label} />
                  )}
                  <span className={styles.galleryLabel}>{img.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

/*
  KEY REACT CONCEPTS:

  1. useState HOOK:
     const [value, setValue] = useState(initialValue)
     - value: current state
     - setValue: function to update state
     - When state changes, component re-renders

  2. ARRAY.MAP():
     array.map((item) => <Component key={item.id} />)
     - Loops through array
     - Returns new array of JSX elements
     - Requires unique 'key' prop for React optimization

  3. CONDITIONAL RENDERING:
     {condition && <Element />}
     - Shows element only if condition is true
     - Used for "no results" message

  4. FILTER FUNCTION:
     projects.filter((p) => p.category === activeFilter)
     - Creates new array with only matching items
     - Non-destructive (original array unchanged)

  5. TEMPLATE LITERALS:
     `${className} ${condition ? 'active' : ''}`
     - Combines strings dynamically
     - Adds 'active' class conditionally

  CUSTOMIZATION CHECKLIST:
  [ ] Replace projects array with YOUR projects (line 25)
  [ ] Add actual project images to /public/projects/
  [ ] Update project descriptions, industries, technologies
  [ ] Optionally add more details (date, client, etc.)

  FUTURE ENHANCEMENTS:
  - Click project card to see full details page
  - Add project images gallery
  - Connect to CMS for easier content management
  - Add search functionality
*/
