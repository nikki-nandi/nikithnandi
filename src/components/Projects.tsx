import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Digital Twin for Smart Metering',
      description: 'Real-time energy dashboard with ML analytics for smart meter data processing and visualization.',
      image: '/lovable-uploads/fd825c09-f87a-4581-9980-d336407b2b20.png',
      tags: ['Python', 'Streamlit', 'ML', 'IoT'],
      github: 'https://github.com/nikki-nandi/DIGITAL-TWIN-SMART-METERING',
      demo: '#',
      category: 'AI/ML'
    },
    {
      title: 'ISRO Air Pollution Monitor',
      description: 'Satellite data analysis for air quality monitoring using remote sensing and ISRO APIs.',
      image: '/lovable-uploads/f4e354b5-ce2e-4e4f-8351-4598446f3d74.png',
      tags: ['Python', 'Pandas', 'ISRO APIs', 'Remote Sensing'],
      github: 'https://github.com/nikki-nandi/ISRO-FINAL.git',
      demo: '#',
      category: 'Computer Vision'
    },
    {
      title: 'Deepfake Detection System',
      description: 'Advanced CNN + LSTM model for detecting manipulated videos and ensuring digital media authenticity.',
      image: '/lovable-uploads/facf9518-85ef-467e-8ce1-966fdc5264cb.png',
      tags: ['TensorFlow', 'OpenCV', 'CNN', 'LSTM'],
      github: '#',
      demo: '#',
      category: 'Computer Vision'
    },
    {
      title: 'Web3 Uber (AI Ride Sharing)',
      description: 'Blockchain-powered ride sharing platform with EV filters and AI-driven smart contract automation.',
      image: '/lovable-uploads/481ea639-2793-42fc-9560-67b32d02003f.png',
      tags: ['Solidity', 'MongoDB', 'FastAPI', 'Web3'],
      github: '#',
      demo: '#',
      category: 'Blockchain'
    },
    {
      title: 'Disaster Tweet Classifier',
      description: 'NLP model with BIO tagging for real-time disaster tweet detection and emergency response.',
      image: '/lovable-uploads/8e550830-46eb-4d57-a6c6-fa9134265c1a.png',
      tags: ['Python', 'Scikit-learn', 'NLP', 'BIO Tagging'],
      github: '#',
      demo: '#',
      category: 'NLP'
    },
  ];

  const categories = ['All', 'AI/ML', 'Computer Vision', 'Blockchain', 'NLP'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Innovative AI/ML solutions built with cutting-edge technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`glass-card ${
                  selectedCategory === category 
                    ? 'bg-primary/20 border-primary/50 text-primary' 
                    : 'border-foreground/20 hover:border-primary/30'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-card border-primary/50 hover:glow-cyan"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="glass-card bg-primary/20 border-primary/50 hover:glow-cyan"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-3 h-3 rounded-full bg-primary pulse-glow"></div>
                </div>

                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-badge text-xs"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card border-foreground/20 hover:border-primary/30 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="glass-card bg-primary/20 border-primary/30 hover:glow-soft flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="glass-card border-primary/30 hover:glow-cyan"
            asChild
          >
            <a href="https://github.com/nikki-nandi" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;