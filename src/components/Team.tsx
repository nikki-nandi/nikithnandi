import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Nandi Nikith',
      role: 'AI & ML Lead',
      image: '/lovable-uploads/ff606a4e-1584-4192-85aa-056d84441eb6.png',
      description: 'AI/ML enthusiast with expertise in deep learning, computer vision, and intelligent systems.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision'],
      github: 'https://github.com/nikki-nandi',
      linkedin: 'https://lnk.ink/072A8',
      email: 'nikithnandi08@gmail.com',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Bhanu',
      role: 'UI/UX Designer',
      image: '/lovable-uploads/e6c9f4cc-2342-43b9-bb9d-54e55616f8d7.png',
      description: 'Creative designer focused on user-centered design and modern UI/UX principles.',
      skills: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping'],
      github: '#',
      linkedin: '#',
      email: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Yogesh',
      role: 'JS & Web Developer',
      image: '/lovable-uploads/5ac8380f-12c4-41a4-ae81-288e33a1c351.png',
      description: 'Full-stack developer specializing in modern JavaScript frameworks and web technologies.',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      github: '#',
      linkedin: '#',
      email: '#',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Passionate individuals working together to build innovative solutions
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="glass-card p-8 rounded-2xl text-center group hover:glow-soft"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  {/* Animated Border */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} p-1`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </motion.div>
                  
                  {/* Profile Image */}
                  <div className="relative w-28 h-28 mx-auto mt-2 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Role Badge */}
                <motion.div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${member.gradient} text-white`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {member.role}
                </motion.div>
              </div>

              {/* Member Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:glow-cyan"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:glow-cyan"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full glass-card hover:glow-cyan"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Floating Animation Elements */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Team Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-foreground/80 italic mb-4">
              "Innovation happens when diverse minds collaborate to solve complex problems. 
              Together, we're building the future of AI and technology."
            </blockquote>
            <div className="text-primary font-semibold">— Our Team Philosophy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;