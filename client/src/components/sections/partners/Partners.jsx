import { motion } from "framer-motion";
import { partners } from "@/data/partners";
import { Zap, Shield, Globe, Award, TrendingUp, Star } from "lucide-react";

const LOGO_ICONS = [Zap, Shield, Globe, Award, TrendingUp, Star];
const doubled = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-12 bg-white border-y border-slate-100" id="partners">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm text-slate-400 font-medium">
          Trusted by{" "}
          <span className="text-slate-600 font-semibold">100+ Famous Companies</span>
        </p>
      </div>

      <div className="relative overflow-hidden animate-marquee-pause">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
          {doubled.map((partner, i) => {
            const Icon = LOGO_ICONS[i % LOGO_ICONS.length];
            return (
              <div
                key={`${partner.id}-${i}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full grayscale hover:grayscale-0 transition-all duration-300 cursor-default group"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors" />
                <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-700 transition-colors whitespace-nowrap">
                  {partner.logo}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
