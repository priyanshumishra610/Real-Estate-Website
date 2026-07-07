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
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating AI badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-[#111827] text-white font-manrope font-extrabold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="font-material-icons text-sm text-[#D4755B]" aria-hidden="true">auto_awesome</span>
                AI MATCHED
              </div>

              <div className="rounded-2xl overflow-hidden shadow-[0px_32px_64px_-12px_rgba(17,24,39,0.18)] ring-1 ring-black/5">
                <div className="relative h-[625px]">
                  <img
                    src={propertyImages[3]}
                    alt="Skyline Residency, Bandra West"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Property Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/95 border border-white/30 rounded-2xl p-5 shadow-[0px_20px_40px_-8px_rgba(0,0,0,0.2)]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-fraunces font-extrabold text-xl text-[#111827] mb-1">Skyline Residency</h3>
                        <p className="font-space-mono text-xs text-[#6b7280] uppercase tracking-wide flex items-center gap-1">
                          <span className="font-material-icons text-xs" aria-hidden="true">location_on</span>
                          Bandra West, Mumbai
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#D4755B] to-[#EC4613] px-3 py-1.5 rounded-lg shadow-sm">
                        <span className="font-manrope font-extrabold text-xs text-white">98% MATCH</span>
                      </div>
                    </div>
                    <div className="border-t border-[#e5e7eb] pt-4 flex items-center justify-between">
                      <div>
                        <span className="font-space-mono font-bold text-lg text-[#111827]">₹4.2 Cr</span>
                        <span className="font-manrope text-xs text-[#6b7280] ml-2">onwards</span>
                      </div>
                      <div className="flex items-center gap-5 text-[#4b5563]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-material-icons text-sm text-[#D4755B]" aria-hidden="true">bed</span>
                          <span className="font-manrope font-bold text-sm">4 BHK</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-material-icons text-sm text-[#D4755B]" aria-hidden="true">square_foot</span>
                          <span className="font-manrope font-bold text-sm">2,400 sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
