"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    BarChart3,
    Settings,
    ShieldCheck,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

export function WhatWeDo() {
    const services = [
        {
            title: "Bookkeeping and Record Management",
            description: "Maintain impeccable financial health with our precision-driven bookkeeping services. We ensure every transaction is meticulously recorded and organized, guaranteeing regulatory compliance and instant access to your financial data when you need it.",
            icon: <BookOpen className="w-8 h-8" />,
            color: "#fba844",
            button: "Schedule a Consultation"
        },
        {
            title: "Actionable Financial Insights",
            description: "Go beyond standard spreadsheets. We transform complex data into clear, strategic reports that reveal the true story behind your numbers. From profitability analysis to cash flow trends, get the deep-dive intelligence you need to make confident business decisions.",
            icon: <BarChart3 className="w-8 h-8" />,
            color: "#1a1a1a",
            button: "Get a Sample Report"
        },
        {
            title: "Scalable Financial Systems",
            description: "Build a financial backbone that grows with your business. We don't just fix today's problems; we design and implement custom accounting workflows and internal controls that eliminate bottlenecks, reduce manual errors, and prepare you for future expansion.",
            icon: <Settings className="w-8 h-8" />,
            color: "#fba844",
            button: "Build My System"
        },
        {
            title: "Strategic Tax Planning",
            description: "Don't just pay taxes; optimize them. Our expert team provides proactive tax planning strategies designed to minimize liabilities while maintaining full legal compliance. We help you structure your finances efficiently so you keep more of what you earn.",
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "#1a1a1a",
            button: "Optimize My Taxes"
        },
        {
            title: "Virtual CFO & Advisory",
            description: "Access high-level financial leadership without the overhead. We act as your strategic partner, guiding you through complex market shifts, investment decisions, and long-term planning to ensure your business stays profitable and resilient.",
            icon: <TrendingUp className="w-8 h-8" />,
            color: "#fba844",
            button: "Get Strategic Advice"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#f8f9fa] relative overflow-hidden">
            {/* Subtle Background Text */}
            <div className="absolute top-20 left-0 text-[15rem] font-bold text-[#1a1a1a]/5 whitespace-nowrap pointer-events-none select-none">
                SERVICES
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-[#fba844]/10 text-[#fba844]">
                            Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-8">
                            Comprehensive <br />
                            <span className="text-[#fba844]">Financial </span>
                            Solutions
                        </h2>
                        <p className="text-lg text-[#1a1a1a]/70 mb-10 leading-relaxed">
                            We empower businesses with precision-driven financial management. From day-to-day record keeping to high-level strategic advisory, We turn your data into actionable growth.
                        </p>
                        <div className="hidden lg:block">
                            <div className="w-20 h-1 bg-[#fba844] rounded-full" />
                        </div>
                    </motion.div>

                    {/* Right Column: Services Cards */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full ${index === services.length - 1 ? "md:col-span-2" : ""
                                    }`}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                                    style={{ backgroundColor: service.color, color: "white" }}
                                >
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#fba844] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-[#1a1a1a]/70 leading-relaxed mb-6 grow">
                                    {service.description}
                                </p>
                                <Link href={`https://wa.me/917012828331?text=Iam Interest to know about ${service.title}`} target="_blank">
                                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#fba844] group-hover:gap-2 transition-all cursor-pointer">
                                        {service.button}
                                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </Link>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
