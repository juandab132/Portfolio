import React from 'react';

const ExperienciaLaboral = () => {
  return (
    <section id="experience" className="bg-[#C4DADD] py-16 relative text-black">
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-[#e8f4f2]" 
           style={{
             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
           }}
      />
      
     
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#e8f4f2]"
           style={{
             clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
           }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-black text-center">
            EXPERIENCIA LABORAL Y ACADÉMICA
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <header>
              <h3 className="font-serif font-medium mb-4">
                Ingeniería de Software - Universidad Cooperativa de Colombia (2022-presente)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Enfoque en desarrollo de software, bases de datos arquitectura web y gestión de proyectos.</li>
                <li>Participación en proyectos de equipo.</li>
                <li>Uso de metodologías ágiles para el desarrollo de proyectos.</li>
              </ul>
            </header>
            
            
            <header>
              <h3 className="font-serif font-medium mb-4">
                Proyecto Personal - Desarrollador Web (2023-presente)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Desarrollo de proyectos web utilizando diferentes tecnologías y lenguajes de programación</li>
                <li>Uso de buenas prácticas</li>
                <li>Metodologías ágiles</li>
                <li>Constante trabajo en equipo</li>
                <li>Habilidades blandas</li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaLaboral;