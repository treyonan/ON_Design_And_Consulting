// ===================================
// PROJECTS PAGE (Portfolio)
// Showcase completed projects
// URL: yoursite.com/projects
// ===================================

import { useState } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import MediaViewer from '../components/MediaViewer';
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
  const [viewingMedia, setViewingMedia] = useState(null);

  /*
    PROJECT DATA STRUCTURE:
    - type: Equipment category (Testing Equipment, Assembly Equipment, etc.)
    - sector: Industry sector (Oil & Gas, Automotive, etc.)
    - Filter buttons use 'type' field
    - Cards display both type and sector
  */
  const projects = [
    {
      id: 1,
      title: 'Hydro-Static Tester',
      type: 'Testing Equipment',
      sector: 'Oil & Gas',
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
      type: 'Testing Equipment',
      sector: 'Oil & Gas',
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
      type: 'Assembly Equipment',
      sector: 'Oil & Gas',
      description:
        'Semi-automated machine to assemble flanged ball valves. Features automated seat installation, pick and placement of tail and body sections, two hole alignment check, automated torqueing, and automated stenciling.',
      image: '/projects/valve-assembly-machine/Main.jpg',
      technologies: ['Automated Assembly', 'Torque Systems', 'Pick & Place'],
      detailImages: [
        { src: '/projects/valve-assembly-machine/Valve_Assembly_001.jpg', label: 'Valve Assembly' },
        { src: '/projects/valve-assembly-machine/Valve_Production_Layout_001.jpg', label: 'Production Layout Concept' },
        { src: '/projects/valve-assembly-machine/Torque_001.mov', label: 'Automated Torqueing', type: 'video' },
      ],
    },
    {
      id: 4,
      title: 'Rotary Valve Tester',
      type: 'Testing Equipment',
      sector: 'Oil & Gas',
      description:
        'Automated hydro-static testing for ball valves.',
      image: '/projects/rotary-valve-tester/Main.JPG',
      technologies: ['Hydro-Static Testing', 'Automated Testing', 'PLC Controls'],
    },
  ];

  /*
    FILTER TYPES:
    - Fixed list of project types (not dynamically generated)
    - Includes PLC Programming and Consulting for future projects
    - OEM Design types: Testing Equipment, Assembly Equipment, etc.
  */
  const filterTypes = [
    'All',
    'Testing Equipment',
    'Assembly Equipment',
    'PLC Programming',
    'Consulting',
  ];

  /*
    FILTERED PROJECTS:
    - If activeFilter is 'All', show all projects
    - Otherwise, only show projects matching the active type
    - This runs every time activeFilter changes (reactive)
  */
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <Layout title="Projects" description="Explore ON Design LLC's portfolio of custom equipment design projects including testing equipment, assembly machines, and automation solutions">
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
            {filterTypes.map((type) => (
              <button
                key={type}
                className={`${styles.filterButton} ${
                  activeFilter === type ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(type)}
              >
                {type}
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
                  <span className={styles.projectCategory}>{project.type}</span>
                  <p className={styles.projectIndustry}>{project.sector}</p>
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
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
            <p className={styles.modalDescription}>{selectedProject.description}</p>
            <div className={styles.modalGallery}>
              {selectedProject.detailImages.map((img, index) => (
                <div
                  key={index}
                  className={styles.galleryItem}
                  onClick={() => setViewingMedia(img)}
                >
                  {img.type === 'video' ? (
                    <video className={styles.galleryVideo}>
                      <source src={img.src} />
                    </video>
                  ) : (
                    <img src={img.src} alt={img.label} />
                  )}
                  <span className={styles.galleryLabel}>{img.label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </Modal>

      {/* Media Viewer (Lightbox) */}
      <MediaViewer media={viewingMedia} onClose={() => setViewingMedia(null)} />
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
     projects.filter((p) => p.type === activeFilter)
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
