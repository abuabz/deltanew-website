"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Users, TrendingUp, Shield, Target } from "lucide-react";

export function WhyChooseDelta() {
  const reasons = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Recognized for delivering premium solutions with world-class standards.",
      gradient: "from-[#fba844] to-[#e8912d]"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment with minimal disruption to your daily operations.",
      gradient: "from-[#1a1a1a] to-[#4a4b4f]"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with decades of combined corporate expertise.",
      gradient: "from-[#fba844] to-[#fbc17a]"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Solutions designed to scale seamlessly as your business expands.",
      gradient: "from-[#1a1a1a] to-[#3a3b3e]"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability you can depend on 24/7.",
      gradient: "from-[#fba844] to-[#f7941e]"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Deeply focused on delivering measurable and impactful business outcomes.",
      gradient: "from-[#1a1a1a] to-[#000000]"
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#fba844]/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1a1a1a]/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-[#fba844]/10 text-[#fba844]">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight mb-6">
              Why Choose
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fba844] to-[#e8912d]"> Delta?</span>
            </h2>
            <div className="w-24 h-1.5 mx-auto bg-linear-to-r from-[#fba844] to-[#1a1a1a] rounded-full" />
            <p className="mt-8 text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto leading-relaxed">
              We combine innovation with experience to deliver corporate solutions that don't just solve problems, but drive sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-[#fba844]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col items-start">
                {/* Icon Container - Smaller */}
                <div className={`w-12 h-12 mb-4 rounded-xl bg-linear-to-br ${reason.gradient} flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-transform duration-500`}>
                  <reason.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] group-hover:text-[#fba844] transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-sm text-[#1a1a1a]/70 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Corner Shape - Simplified */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-[#fba844]/5 to-transparent rounded-tr-2xl -z-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
