"use client";

import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export interface TimelineItem {
  title: string;
  company: string;
  companyColor?: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ title, items, className = "" }: TimelineProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2 }}
      className={`w-full flex flex-col px-4 py-20 ${className}`}
    >
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-600 dark:text-zinc-400 mb-4">
          {title}
        </h2>
      </div>

      <div className="">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="relative flex items-start mb-16 last:mb-0"
          >
            <div className="flex-shrink-0 w-7 h-7 bg-[var(--brand)] rounded-full z-10 mr-8 relative">
              <div className="absolute left-1/2 top-full w-[1px] h-[100px] bg-zinc-300 dark:bg-zinc-700 -translate-x-1/2" />
            </div>

            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-bold text-zinc-600 dark:text-zinc-400 mb-2">
                {item.title}
              </h3>

              <h4 className={`text-lg font-semibold mb-4 text-[var(--brand)]`}>
                {item.company}
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}