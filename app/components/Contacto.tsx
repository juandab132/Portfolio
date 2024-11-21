import React from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M16.5 7.5v.01" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
  </svg>
);

const Contacto = () => {
  return (
    <section id="contact" className="bg-[#6A9CA6] py-16 relative text-white">
      <main className="max-w-6xl mx-auto px-6">
        <article className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          <section className="contact-form">
            <h2 className="text-3xl font-serif text-black mb-8">CONTACTO</h2>
            <form className="space-y-6">
              <fieldset>
                <input
                  type="text"
                  placeholder="Nombre*"
                  className="w-full p-3 rounded bg-white text-black"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  type="email"
                  placeholder="Correo*"
                  className="w-full p-3 rounded bg-white text-black"
                  required
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Mensaje*"
                  rows={6}
                  className="w-full p-3 rounded bg-white text-black"
                  required
                />
              </fieldset>
              <button
                type="submit"
                className="bg-[#446B76] text-white px-6 py-2 rounded hover:bg-[#1a2a30] transition-colors"
              >
                Enviar Correo
              </button>
            </form>
          </section>

          
          <aside className="contact-info flex flex-col justify-between">
            <section>
              <h3 className="text-2xl font-serif text-black mb-4 font-bold">Ponte en contacto</h3>
              <p className="mb-4 text-bl text-black">
                Si te interesa colaborar en algún proyecto, quieres saber más sobre mí o simplemente decir hola ¡me encantaría escucharte!
              </p>
              <p className="mb-8 text-black">
                Rellena el formulario con tus datos y me pondré en contacto contigo lo antes posible.
              </p>
              <p className="mb-4 text-black">¡Encuéntrame en mis redes sociales!</p>
              <nav className="flex gap-4">
                <a 
                  href="https://github.com/juandab132" 
                  className="hover:text-gray-300 transition-colors" 
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://x.com/fruscia23417672" 
                  className="hover:text-gray-300 transition-colors" 
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                  <span className="sr-only">Twitter</span>
                </a>
                <a 
                  href="https://www.instagram.com/juandab_c/" 
                  className="hover:text-gray-300 transition-colors" 
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                  <span className="sr-only">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/juan-david-sanchez-meza-a4119220a/" 
                  className="hover:text-gray-300 transition-colors" 
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </nav>
            </section>
          </aside>
        </article>
      </main>
      
      
      <footer className="absolute bottom-0 left-0 right-0 bg-gray-100 py-4 text-black text-center">
        <p className="text-sm">Made by Juan Sanchez</p>
      </footer>
    </section>
  );
};

export default Contacto;