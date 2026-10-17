import React from 'react';
import { Briefcase, Gift, Megaphone, Users, GraduationCap } from 'lucide-react';
import { AUDIENCE_SEGMENTS } from '../data/products';

interface AudienceSegmentsProps {
  darkMode: boolean;
}

export const AudienceSegments: React.FC<AudienceSegmentsProps> = ({ darkMode }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-7 h-7" />;
      case 'Gift':
        return <Gift className="w-7 h-7" />;
      case 'Megaphone':
        return <Megaphone className="w-7 h-7" />;
      case 'Users':
        return <Users className="w-7 h-7" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7" />;
      default:
        return <Briefcase className="w-7 h-7" />;
    }
  };

  return (
    <section
      id="para-quien"
      className={`py-16 sm:py-20 border-b transition-colors duration-200 ${
        darkMode ? 'bg-[#080C10] border-gray-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border inline-block mb-3 ${
              darkMode
                ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
                : 'text-yellow-800 bg-yellow-100 border-yellow-300'
            }`}
          >
            Punto 6 del Catálogo
          </span>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            ¿IDEAL PARA{' '}
            <span className="font-script text-[#0EA5E9] text-4xl lowercase">quién?</span>
          </h2>

          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Desarrollamos soluciones personalizadas que se adaptan a tus necesidades,
            presupuesto y estética.
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {AUDIENCE_SEGMENTS.map((seg, idx) => (
            <div
              key={seg.id}
              className={`p-5 sm:p-6 rounded-2xl border text-center transition-all duration-200 group hover:-translate-y-1 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              } ${
                darkMode
                  ? 'bg-[#161F2E] border-gray-800 hover:border-yellow-400'
                  : 'bg-white border-gray-200 hover:border-yellow-400 shadow-sm'
              }`}
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${
                  seg.accent.includes('sky')
                    ? 'bg-sky-500/10 text-sky-400'
                    : seg.accent.includes('pink')
                    ? 'bg-pink-500/10 text-pink-400'
                    : seg.accent.includes('yellow')
                    ? 'bg-yellow-500/10 text-yellow-400'
                    : seg.accent.includes('emerald')
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-purple-500/10 text-purple-400'
                }`}
              >
                {getIcon(seg.iconName)}
              </div>

              <h3
                className={`font-extrabold text-base uppercase tracking-wider ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {seg.title}
              </h3>

              <p
                className={`text-xs mt-2 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {seg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
