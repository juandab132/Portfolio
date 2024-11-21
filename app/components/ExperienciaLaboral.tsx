import React from 'react';

const ExperienciaLaboral = () => {
  return (
    <section id="experience" className="bg-[#C4DADD] py-16 text-black">
      <main className="max-w-6xl mx-auto px-6">
        <article className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-black text-center">
            EXPERIENCIA LABORAL Y ACADÉMICA
          </h2>
          
          <section className="grid md:grid-cols-2 gap-8">
            
            <article className="academic-experience">
              <h3 className="font-serif font-medium mb-4">
                Ingeniería de Software - Universidad Cooperativa de Colombia (2022-presente)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Enfoque en desarrollo de software, bases de datos arquitectura web y gestión de proyectos.</li>
                <li>Participación en proyectos de equipo.</li>
                <li>Uso de metodologías ágiles para el desarrollo de proyectos.</li>
              </ul>
            </article>
            
            
            <article className="personal-project-experience">
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
            </article>
          </section>
        </article>
      </main>
    </section>
  );
};

export default ExperienciaLaboral;