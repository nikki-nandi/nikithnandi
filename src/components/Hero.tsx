import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Function to force download
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Nikith_Resume.pdf'; // Must be inside public/
    link.download = 'Nikith_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* ✅ Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ✅ Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium skill-badge mb-4">
                🚀 Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hi, I'm <span className="heading-gradient">Nikith</span>
            </motion.h1>

            {/* Typing Animation */}
            <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-20 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  'AI & ML Enthusiast 👨‍💻',
                  2000,
                  'Hackathon Finalist 🏆',
                  2000,
                  'AI Model Trainer 🤖',
                  2000,
                  'Future Tech Builder 🚀',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="heading-gradient font-medium"
                repeat={Infinity}
              />
            </div>

            {/* Short Intro */}
            <motion.p
              className="text-lg text-foreground/70 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Training models to think, and myself to think beyond. Currently
              pursuing B.Tech in CSE (AI & ML) at ALIET – JNTU Kakinada with
              8.8 CGPA. Multiple-time hackathon finalist passionate about
              building intelligent systems.
            </motion.p>

            {/* ✅ Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              {/* View Projects */}
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="glass-card bg-primary/20 border-primary/30 hover:glow-cyan text-primary font-semibold"
              >
                <Eye className="w-5 h-5 mr-2" />
                View My Work
              </Button>

              {/* ✅ Download Resume */}
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-accent/30 hover:glow-purple"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* ✅ Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold heading-gradient">8.8</div>
                <div className="text-sm text-foreground/60">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold heading-gradient">4+</div>
                <div className="text-sm text-foreground/60">Hackathon Finalist</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold heading-gradient">5+</div>
                <div className="text-sm text-foreground/60">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold heading-gradient">2</div>
                <div className="text-sm text-foreground/60">Internships</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ✅ Right Side Profile */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 blur-sm"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full rounded-full bg-background"></div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden glass-card floating"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <img
                  src="/lovable-uploads/ff606a4e-1584-4192-85aa-056d84441eb6.png"
                  alt="Nandi Nikith"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="text-2xl">🧠</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="p-3 glass-card rounded-full hover:glow-soft"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
