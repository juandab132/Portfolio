import React from 'react';

const SkillIcon: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs uppercase">{name}</span>
    </div>
  );
};

const HabilidadesYHerramientas: React.FC = () => {
  return (
    <section className="bg-[#e8f4f2] py-16 relative text-black">
      {/* Top decorative angle */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-[#e8f4f2]" 
           style={{
             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
           }}
      />
      
      {/* Bottom decorative angle */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#e8f4f2]"
           style={{
             clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
           }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-serif mb-8 text-black">
            HABILIDADES Y HERRAMIENTAS
          </h2>
          
          <p className="mb-12 text-black">
            Las habilidades, herramientas y tecnologías que utilizo son:
          </p>

          <div className="grid grid-cols-5 gap-x-8 gap-y-10 mb-16">
            <SkillIcon 
              name="GITHUB" 
              icon={
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              }
            />
            
            <SkillIcon 
              name="GIT" 
              icon={<span className="text-2xl">GIT</span>}
            />
            
            <SkillIcon 
              name="JAVASCRIPT" 
              icon={<span className="text-2xl">JS</span>}
            />
            
            <SkillIcon 
              name="HTML" 
              icon={<span className="text-2xl">HTML</span>}
            />
            
            <SkillIcon 
              name="VS CODE" 
              icon={
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8L2 22M16 16L22 22M22 2L2 2M8 16L2 16"/>
                </svg>
              }
            />
            
            <SkillIcon 
              name="REACT" 
              icon={
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                </svg>
              }
            />
            
            <SkillIcon 
              name="PYTHON" 
              icon={
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                </svg>
              }
            />
            
            <SkillIcon 
              name="DJANGO" 
              icon={<span className="text-2xl">dj</span>}
            />
            
            <SkillIcon 
              name="MYSQL" 
              icon={<span className="text-2xl">SQL</span>}
            />
            
            <SkillIcon 
              name="NODEJS" 
              icon={<span className="text-2xl">JS</span>}
            />
          </div>

          <div>
            <h3 className="font-serif mb-4">Actualmente estoy trabajando en:</h3>
            <p className="text-sm leading-relaxed">
              Mejorar mis habilidades en React y el diseño de interfaces con Tailwind CSS, 
              profundizar en el desarrollo backend con Python y Django explorando la creación de APIs, 
              trabajando en proyectos personales para consolidar mis conocimientos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabilidadesYHerramientas;