import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import happyHomeowner1 from '../../images/Happy Homeowners_1.jpg';
import happyHomeowner2 from '../../images/Happy Homeowners_2.jpg';
import happyHomeowner3 from '../../images/Team section.jpg';
import rightFeatureCard from '../../images/Right side feature card.jpg';

const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const propertyImages = [
    happyHomeowner1,
    happyHomeowner2,
    happyHomeowner3,
    rightFeatureCard, 
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Ahmedabad'];

  return (
    <section className="relative bg-[#F8F6F6] pt-20 pb-32 overflow-hidden">
        {/* Background decorative blurs */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut" as const
          }}
          className="absolute right-0 top-14 w-72 h-72 bg-[rgba(236,70,19,0.12)] rounded-full blur-[40px]"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            delay: 1,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut" as const
          }}
          className="absolute left-[738px] bottom-22 w-80 h-80 bg-[rgba(254,215,170,0.25)] rounded-full blur-[40px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,117,91,0.06),transparent_50%)] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-white border border-[rgba(212,117,91,0.25)] rounded-full px-5 py-2.5 mb-8 shadow-[0px_4px_14px_rgba(212,117,91,0.12)]">
                <motion.div
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: prefersReducedMotion ? 0 : Infinity }}
                  className="w-2 h-2 bg-[#D4755B] rounded-full"
                />
                <span className="font-manrope font-extrabold text-xs text-[#D4755B] uppercase tracking-[0.15em]">
                  India's AI Property Platform
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 data-speakable variants={itemVariants} className="font-fraunces font-bold text-[52px] sm:text-[60px] lg:text-[72px] leading-[1.05] text-[#111827] mb-6 tracking-tight">
                Stop Searching.
                <br />
                Start{' '}
                <span className="italic font-extrabold bg-gradient-to-r from-[#D4755B] via-[#EC4613] to-[#D4755B] bg-clip-text text-transparent">
                  Finding.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p data-speakable variants={itemVariants} className="font-manrope text-lg sm:text-xl leading-8 text-[#374151] mb-6 max-w-[600px]">
                <span className="font-bold text-[#111827]">Flats, villas & apartments</span> across India's top cities — matched to you in seconds by AI that understands your budget, lifestyle, and goals.
              </motion.p>

              {/* City chips */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="font-manrope font-semibold text-xs text-[#6b7280] bg-white border border-[#e5e7eb] rounded-full px-3.5 py-1.5 shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </motion.div>

              {/* Value props */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <span className="font-material-icons text-[#D4755B] text-xl" aria-hidden="true">bolt</span>
                  <span className="font-manrope font-bold text-sm text-[#111827]">Instant AI Matches</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-material-icons text-[#D4755B] text-xl" aria-hidden="true">trending_up</span>
                  <span className="font-manrope font-bold text-sm text-[#111827]">Live Market Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-material-icons text-[#D4755B] text-xl" aria-hidden="true">verified</span>
                  <span className="font-manrope font-bold text-sm text-[#111827]">Verified Listings</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
                <Link to="/properties" className="group bg-[#D4755B] text-white font-manrope font-extrabold text-lg px-9 py-4 rounded-xl shadow-[0px_12px_24px_-4px_rgba(212,117,91,0.4)] hover:bg-[#B86851] hover:shadow-[0px_16px_32px_-4px_rgba(212,117,91,0.5)] hover:-translate-y-0.5 transition-all inline-flex items-center">
                  Explore Properties
                  <span className="font-material-icons text-sm ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                </Link>
                <Link to="/ai-hub" className="group bg-white border-2 border-[#111827] text-[#111827] font-manrope font-extrabold text-lg px-9 py-4 rounded-xl hover:bg-[#111827] hover:text-white transition-all inline-flex items-center shadow-sm">
                  <span className="font-material-icons text-2xl text-[#D4755B] group-hover:text-white mr-2 transition-colors" aria-hidden="true">smart_toy</span>
                  {import.meta.env.PROD ? 'AI Property Hub' : 'Try AI Search'}
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
                <div className="flex -space-x-2.5">
                  <img src={propertyImages[0]} alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src={propertyImages[1]} alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src={propertyImages[2]} alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
                  <div className="w-11 h-11 bg-[#111827] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                    <span className="font-manrope font-extrabold text-xs text-white">+2k</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="font-material-icons text-[#D4755B] text-base" aria-hidden="true">star</span>
                    ))}
                    <span className="font-manrope font-extrabold text-sm text-[#111827] ml-1">4.9</span>
                  </div>
                  <span className="font-manrope font-semibold text-sm text-[#6b7280]">
                    Trusted by 2,000+ happy homeowners
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Featured Property Card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_#e5e7eb]">
                <div className="relative h-[625px]">
                  <img
                    src={propertyImages[3]}
                    alt="Villa Serenity"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Property Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 border border-white/20 rounded-xl p-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-fraunces font-bold text-lg text-[#111827] mb-1">Villa Serenity</h3>
                        <p className="font-space-mono text-xs text-[#6b7280] uppercase tracking-wide">Beverly Hills, CA</p>
                      </div>
                      <div className="bg-[rgba(212,117,91,0.1)] px-2 py-1 rounded">
                        <span className="font-manrope font-bold text-xs text-[#D4755B]">AI MATCH: 98%</span>
                      </div>
                    </div>
                    <div className="border-t border-[#e5e7eb] pt-3 flex items-center justify-between">
                      <span className="font-space-mono text-sm text-[#4b5563]">$4,250,000</span>
                      <div className="flex items-center gap-4 text-[#4b5563]">
                        <div className="flex items-center gap-1">
                          <span className="font-material-icons text-xs" aria-hidden="true">bed</span>
                          <span className="font-manrope text-sm">4</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-material-icons text-xs" aria-hidden="true">shower</span>
                          <span className="font-manrope text-sm">3.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
