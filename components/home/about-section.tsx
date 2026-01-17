"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

export function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/office01.png",
    "/assets/office02.png",
    "/assets/office03.png",
    "/assets/office04.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategic Growth",
      description: "Driving your business forward with data-backed corporate strategies."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Consulting",
      description: "A team of seasoned professionals dedicated to your success."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Uncompromising standards in every solution we deliver."
    }
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center py-16 px-6 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#DC9D14]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#DC9D14]/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-[#DC9D14]/10 text-[#DC9D14]"
              >
                About DELTA
              </motion.span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight">
                Your Trusted <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#DC9D14] to-[#B8860B]">
                  Business Partner
                </span>
              </h2>
            </div>

            <p className="text-md lg:text-lg text-gray-600 leading-relaxed max-w-xl">
              With years of expertise in corporate solutions, DELTA is committed to delivering premium services that drive
              your business forward. We provide tailored solutions that work.
            </p>

            <div className="grid gap-4 lg:gap-6 py-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#DC9D14]/10 flex items-center justify-center text-[#DC9D14] group-hover:bg-[#DC9D14] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-bold text-[#1a1a1a] mb-0.5 lg:mb-1">{feature.title}</h4>
                    <p className="text-sm lg:text-base text-gray-500 line-clamp-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-2"
            >
              {/* <Link href="/about" className="inline-block group">
                <button
                  className="px-6 py-3 rounded-lg text-white font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-[#DC9D14]/20 cursor-pointer flex items-center gap-2"
                  style={{ backgroundColor: "#DC9D14" }}
                >
                  Discover Our Story
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </button>
              </Link> */}
            </motion.div>
          </motion.div>

          {/* Right Content - Visuals (Slider) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Image Slider Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-20 group aspect-video lg:aspect-video bg-black">
              <AnimatePresence>
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={`Office view ${currentImage + 1}`}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 z-25" />

              {/* Overlay Logo */}
              <div className="absolute top-6 left-6 z-30">
                <Image
                  src="/assets/icon.png"
                  alt="DELTA Logo"
                  width={50}
                  height={50}
                  className="brightness-0 invert opacity-90"
                />
              </div>

              {/* Floating Badge - Small Bottom Right */}
              <div className="absolute bottom-3 right-3 p-2 lg:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg z-30 max-w-[140px] lg:max-w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#DC9D14] flex items-center justify-center text-white shadow-md shrink-0">
                    <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[10px] lg:text-xs leading-tight">Trusted Partner</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <span key={i} className="text-[#DC9D14] text-[8px] lg:text-[10px]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Layers */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-full h-full border-2 border-[#DC9D14]/20 rounded-3xl -z-10 translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
