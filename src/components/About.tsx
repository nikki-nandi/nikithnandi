import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { icon: '🏆', title: 'Smart India Hackathon 2024', subtitle: 'Finalist' },
    { icon: '🥇', title: 'MSME Hackathon 5.0', subtitle: 'Finalist' },
    { icon: '🌟', title: 'NRI Hackathon', subtitle: 'Finalist' },
    { icon: '🚀', title: 'Bharatiya Antariksh Hackathon 2025', subtitle: 'Ongoing' },
  ];

  const certifications = [
    { title: 'Generative AI', provider: 'Blackbuck', status: 'Verified', color: 'from-green-400 to-blue-500' },
    { title: 'ML Developer', provider: 'Eficaa', status: 'Verified', color: 'from-purple-400 to-pink-500' },
    { title: 'Python for Data Science', provider: 'NPTEL', status: 'Ongoing', color: 'from-yellow-400 to-orange-500' },
  ];

  const experiences = [
    {
      role: 'ML Developer',
      company: 'Eficaa Energy',
      period: '2024',
      description: 'Smart meter analytics & ML integration',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      role: 'Generative AI Intern',
      company: 'Blackbuck + APSCHE',
      period: '2024',
      description: 'Built digital twins & ChatGPT-like AI',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
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
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            "Training models to think, and myself to think beyond."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Personal Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">B.Tech CSE (AI & ML)</div>
                  <div className="text-sm text-foreground/70">ALIET – JNTU Kakinada • 2022–2026</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">CGPA: 8.8</div>
                  <div className="text-sm text-foreground/70">Academic Excellence</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold">Vijayawada, Andhra Pradesh</div>
                  <div className="text-sm text-foreground/70">India</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold">Available for Opportunities</div>
                  <div className="text-sm text-foreground/70">Full-time & Internships</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 glass-card rounded-lg border border-primary/20">
              <p className="text-foreground/80 leading-relaxed">
                Passionate AI & ML developer with expertise in building intelligent systems. 
                Currently pursuing advanced studies while gaining hands-on experience through 
                internships and hackathons. Focused on creating impactful solutions using 
                cutting-edge technologies.
              </p>
            </div>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Technologies</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-accent">AI/ML & Data Science</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'].map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-green-400">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'FastAPI', 'MongoDB', 'Streamlit', 'HTML/CSS', 'JavaScript'].map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-purple-400">Blockchain & Web3</h4>
                <div className="flex flex-wrap gap-2">
                  {['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum', 'DeFi'].map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-orange-400">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Google Cloud', 'Jupyter', 'VS Code'].map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 heading-gradient">Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:glow-soft"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-foreground/70">{achievement.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 heading-gradient">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${cert.color} mb-4`}></div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-foreground/70 mb-2">{cert.provider}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs ${
                  cert.status === 'Verified' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 heading-gradient">Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${exp.color} mb-6`}></div>
                <h4 className="text-xl font-bold mb-2">{exp.role}</h4>
                <p className="text-lg text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-foreground/70 mb-4">{exp.period}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;