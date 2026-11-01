import React from 'react';
import { Star, Users, HeartHandshake } from 'lucide-react';

interface TrustedByProps {
  darkMode: boolean;
}

export const TrustedBy: React.FC<TrustedByProps> = ({ darkMode }) => {
  const testimonials = [
    {
      name: 'María García',
      role: 'Empresa de eventos',
      text: 'Pedimos 50 tazas corporativas y quedaron perfectas. La calidad del estampado es impecable.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Profesor de educación especial',
      text: 'Los kits sensoriales fueron un hit en mi clase. Mis alumnos los usan todos los días.',
      rating: 5,
    },
    {
      name: 'Laura Méndez',
      role: 'Organizadora de eventos',
      text: 'Los souvenirs personalizados para la boda fueron únicos. Todos preguntaron dónde los había conseguido.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '500+', label: 'Clientes satisfechos' },
    { value: '1000+', label: 'Productos entregados' },
    { value: '4.9', label: 'Promedio de rating' },
  ];

  return (
    <section
      id="confian-en-nosotros"
      className={`py-16 sm:py-20 transition-colors duration-200 ${
        darkMode ? 'bg-[#0B1017]' : 'bg-slate-50'
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              darkMode
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-emerald-100 border border-emerald-300 text-emerald-700'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>QUIÉNES CONFIAN EN NOSOTROS</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            MÁS QUE{' '}
            <span className="text-[#FACC15]">CLIENTES</span>
            <br />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Somos parte de tu historia</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Empresas, escuelas, familias y emprendedores confían en Raíces para hacer realidad sus proyectos.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-4 rounded-2xl border ${
                darkMode
                  ? 'bg-[#141C2B] border-gray-800'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-black text-[#FACC15]">{stat.value}</div>
              <div className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-[#141C2B] border-gray-800 hover:border-yellow-400/50'
                  : 'bg-white border-gray-200 hover:border-yellow-400'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FACC15] to-[#EC4899] flex items-center justify-center text-black font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`rounded-3xl border p-6 sm:p-8 text-center ${
            darkMode
              ? 'bg-gradient-to-r from-[#141C2B] via-[#1A2332] to-[#141C2B] border-gray-800'
              : 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-gray-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <HeartHandshake className="w-6 h-6 text-[#EC4899]" />
            <span className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              ¿Querés ser parte de nuestra comunidad?
            </span>
          </div>
          <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Unete a cientos de clientes que ya confían en nosotros para sus proyectos personalizados.
          </p>
          <a
            href="https://wa.me/5492216268594?text=Hola!%20Quiero%20saber%20más%20sobre%20sus%20productos%20personalizados"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-500 text-black font-extrabold px-6 py-3 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105"
          >
            <span>Contáctanos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
