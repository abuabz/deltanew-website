"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  Award,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  History
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "Delta Business Solutions was officially founded by CA & CMA youngsters with the vision to simplify Accounts & Taxation."
    },
    {
      year: "2023",
      title: "Growth Milestone",
      description: "Achieved our first major milestone of serving 15+ business clients and building the core team of 10+ dedicated professionals."
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Successfully implemented an in-house cloud accounts system for faster, smoother client service."
    },
    {
      year: "2025",
      title: "Excellence in Retention",
      description: "Maintain a client retention rate exceeding 95%, reflecting the high trust placed in our firm."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero / Reduced Size With Background Video */}
      <section className="relative h-[60vh] flex items-center px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-working-in-a-modern-office-room-9556-large.mp4" type="video/mp4" />
          </video>
          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-white z-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-[#fba844]/10 text-[#fba844]">
                About Delta
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
                Empowering Firms to <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fba844] to-[#e8912d]">
                  Grow Better
                </span>
              </h1>
              <p className="text-lg text-[#1a1a1a]/80 leading-relaxed max-w-xl">
                Delta Business Solutions is the trusted account outsourcing partner dedicated to empowering firms to grow better.
                Built on a foundation of integrity and financial precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[350px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/assets/office01.png"
                alt="Delta Office"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#fba844] flex items-center justify-center mb-8 shadow-lg shadow-[#fba844]/20 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                Our Vision
                <div className="h-px grow bg-white/10" />
              </h2>
              <p className="text-lg text-white/70 leading-relaxed italic">
                Our vision is to be the indispensable strategic intelligence partner for every client, transforming routine accounting functions into a source of real-time, predictive business advantage. We won't just process transactions; we will power intelligent decision-making.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-lg shadow-white/10 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                Our Mission
                <div className="h-px grow bg-white/10" />
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                To transform our clients' financial operations by seamlessly integrating advanced systems and predictive intelligence, providing the strategic clarity needed to drive measurable, sustainable growth, all while upholding the highest standards of data security, privacy, and unwavering professional trust.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-[#1a1a1a]/5 text-[#1a1a1a]">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
              Milestones of <span className="text-[#fba844]">Success</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#fba844] mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline Line - Visible only on Desktop */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-100 hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className={`p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white relative group ${idx % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-3xl md:text-4xl font-black text-[#fba844] transition-colors">
                          {item.year}
                        </div>
                        <History className="w-8 h-8 md:hidden text-[#fba844]/20" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                      <p className="text-[#1a1a1a]/70 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>

                      {/* Connector Dot - Desktop Only */}
                      <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block w-4 h-4 rounded-full bg-[#fba844] border-4 border-white shadow-md z-20 ${idx % 2 === 0 ? "-left-[3.4rem]" : "-right-[3.4rem]"
                        }`} />
                    </div>
                  </div>
                  <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
                    <History className="w-24 h-24 lg:w-32 lg:h-32 text-gray-50 opacity-50" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action or Closure */}
      <section className="py-24 px-6 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#fba844]/10 flex items-center justify-center mx-auto mb-8 text-[#fba844]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">
            Ready to simplify your financial operations?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-2xl font-bold hover:bg-[#fba844] transition-all group shadow-xl hover:shadow-[#fba844]/20"
          >
            Get Started Now
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
