import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Music, Music2, Music4, Palette, ArrowUpRight, SmilePlus, 
  UsersRound, Theater, Mic2, Sparkles, Heart, Users, Trophy, 
  MapPin, MessageCircle, Facebook, Instagram, Building2, ShieldCheck,
  UserPlus, HandHeart, Home
} from 'lucide-react';

// Importación de imágenes locales
import logoImg from './assets/images/2-2.png';
import heroImg1 from './assets/images/1.png';
import heroImg2 from './assets/images/2.png';
import heroImg3 from './assets/images/3.png';
import aboutImg1 from './assets/images/29.png';
import aboutImg2 from './assets/images/28.png';
import aboutImg3 from './assets/images/27.png';
import aboutImg4 from './assets/images/24.png';
import aboutImg5 from './assets/images/23.png';
import udlaImg from './assets/images/UDLA.webp';
import instViolin from './assets/images/4-1.png';
import instViola from './assets/images/37.png';
import instCello from './assets/images/38.png';
import instContra from './assets/images/39.png';
import instPiano from './assets/images/41.png';
import instGuit from './assets/images/40.png';
import benImg from './assets/images/10.png';
import orgLogo1 from './assets/images/Logos.png';
import orgLogo2 from './assets/images/sKhXQCDA_400x400.png';
import orgLogo3 from './assets/images/logo-UDLA-png.png';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/56987257003"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
    <span className="absolute right-full mr-4 bg-[#1f3c5b] text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl translate-x-4 group-hover:translate-x-0">
      Escríbenos al WhatsApp
    </span>
  </a>
);

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Qué es', href: '#que-es' },
    { label: 'Para quién', href: '#para-quien' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Instrumentos', href: '#instrumentos' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Postular', href: '#postular' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={(e) => handleClick(e, '#inicio')} className="flex items-center gap-3 text-[#f4f1ec] group">
            <img src={logoImg} alt="Logo" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-lg" />
            <span className="text-xl md:text-2xl font-extrabold hidden sm:inline tracking-tight text-glow">Conservatorio EncontrArte</span>
            <span className="text-xl font-extrabold sm:hidden tracking-tight text-glow">EncontrArte</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-xl">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-5 py-2 text-sm rounded-full transition-all duration-300 font-semibold relative ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[#1f3c5b] bg-white shadow-md scale-105' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2 hover:bg-white/20 bg-white/10 backdrop-blur-md rounded-full shadow-lg transition-all duration-300">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-2 glass border-none !bg-[#1f3c5b]/95 p-4 rounded-2xl shadow-2xl">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-5 py-3 text-base rounded-xl transition-all duration-300 font-semibold ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[#1f3c5b] bg-white shadow-md' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const [aboutImgIndex, setAboutImgIndex] = useState(0);

  const heroImages = [heroImg1, heroImg2, heroImg3];
  const aboutImages = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5];

  useEffect(() => {
    const heroInterval = setInterval(() => setHeroImgIndex(p => (p + 1) % heroImages.length), 6000);
    const aboutInterval = setInterval(() => setAboutImgIndex(p => (p + 1) % aboutImages.length), 4000);
    
    const handleScroll = () => {
      const sections = ['inicio', 'que-es', 'para-quien', 'ubicacion', 'instrumentos', 'beneficios', 'postular'];
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(heroInterval);
      clearInterval(aboutInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#1f3c5b] selection:bg-[#3e7c6d] selection:text-white overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* SECCIÓN HERO */}
      <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
        {heroImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === heroImgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
            style={{ 
              backgroundImage: `url(${image})`,
              transition: 'transform 10s ease-in-out, opacity 1s ease-in-out'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f3c5b]/90 via-[#1f3c5b]/70 to-[#3e7c6d]/80"></div>
          </div>
        ))}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-[#f4f1ec]">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-500">
              <Music2 className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-extrabold leading-tight tracking-tight text-glow">
            Conservatorio <br className="hidden sm:block" /> EncontrArte
          </h1>
          <p className="text-xl md:text-3xl mb-4 font-medium text-white/90">Formación musical gratuita para niñas, niños y jóvenes</p>
          <p className="text-lg md:text-xl mb-10 font-medium text-[#c4d7d3] uppercase tracking-widest border-l-2 border-[#3e7c6d] pl-4 inline-block">Viña del Mar - Región de Valparaíso</p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-white/80 font-light">
              Un proyecto de educación musical comunitaria e inclusiva que ofrece formación artística de calidad entre 6 y 25 años.
            </p>
          </div>
          <div className="mb-10 text-center">
            <span className="inline-block bg-[#eab308] text-[#1f3c5b] font-extrabold px-6 py-2 rounded-full text-lg shadow-[0_0_20px_rgba(234,179,8,0.5)] animate-pulse border border-[#ca8a04]/50">
              ¡Postulaciones Abiertas! - Cupos Limitados
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSduVn3XR-A_RLDJTvkt9Vvu9zoXQXvPGSE1Lp4Fo37pdWb9Ow/viewform" target="_blank" className="bg-gradient-to-r from-[#eab308] to-[#ca8a04] text-[#1f3c5b] px-10 py-5 rounded-2xl text-xl font-extrabold hover:shadow-[0_15px_35px_rgba(234,179,8,0.4)] hover:-translate-y-1 transition-transform duration-300 w-full sm:w-auto text-center border border-white/20">
              Postular Ahora
            </a>
            <a href="https://wa.me/56987257003" target="_blank" className="glass text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-white hover:text-[#1f3c5b] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center !bg-white/10">
              Quiero más información
            </a>
          </div>
        </div>

        {/* Decorative Wave/Gradient at bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#f8f6f3] to-transparent z-10"></div>
      </section>

      {/* SECCIÓN QUÉ ES */}
      <section id="que-es" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <span className="text-[#3e7c6d] font-bold tracking-widest uppercase text-sm">Historia y Propósito</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gradient leading-tight">¿Qué es el Conservatorio EncontrArte?</h2>
              <div className="space-y-5 text-xl text-gray-700 leading-relaxed font-light">
                <p>La continuidad de una <strong className="font-semibold text-[#1f3c5b]">experiencia histórica</strong> de educación musical comunitaria nacida en 2016 en la Región de Valparaíso.</p>
                <p>Propósito: <strong className="font-semibold text-[#1f3c5b]">democratizar el acceso</strong> a la formación musical, ofreciendo clases gratuitas en un entorno seguro y respetuoso.</p>
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#3e7c6d] mt-8">
                  <p className="text-[#3e7c6d] font-medium italic text-lg hover:translate-x-1 transition-transform cursor-default">
                    "Forjando identidades a través del lenguaje universal de la música."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(31,60,91,0.15)] group">
              {aboutImages.map((image, index) => (
                <img key={index} src={image} alt="Clases" className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === aboutImgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3c5b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PARA QUIÉN */}
      <section id="para-quien" className="py-24 px-6 bg-white relative">
        {/* Background blob */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[#3e7c6d]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="text-[#3e7c6d] font-bold tracking-widest uppercase text-sm mb-2 block">Nuestra Comunidad</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1f3c5b]">¿A quién está dirigido?</h2>
          <p className="text-xl mb-16 max-w-3xl mx-auto text-gray-500 font-light">Niñas, niños y jóvenes que desean aprender en un espacio serio, gratuito e inclusivo.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            {[
              { icon: Users, text: 'Niñas, niños y jóvenes entre 6 y 25 años', title: 'Edades' },
              { icon: Sparkles, text: 'Con o sin experiencia musical previa', title: 'Experiencia' },
              { icon: Home, text: 'Familias que buscan formación accesible y de calidad', title: 'Familias' },
              { icon: UsersRound, text: 'Estudiantes con interés por el trabajo en grupo', title: 'Comunidad' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-8 rounded-3xl bg-[#f8f6f3] border border-gray-100 hover:premium-shadow hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-[#3e7c6d] transition-colors duration-300 shrink-0">
                  <item.icon className="w-8 h-8 text-[#3e7c6d] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#1f3c5b]">{item.title}</h4>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* SECCIÓN UBICACIÓN */}
      <section id="ubicacion" className="py-24 px-6 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#3e7c6d] font-bold tracking-widest uppercase text-sm mb-2 block">Nuestra Casa</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f3c5b]">¿Dónde se realizan las clases?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <p className="text-xl leading-relaxed text-gray-700 font-light">Se imparten cómodamente en instalaciones adecuadas en <strong className="font-semibold text-[#1f3c5b]">Viña del Mar</strong>.</p>
              
              <div className="bg-gradient-to-r from-[#3e7c6d] to-[#2d5b4f] text-[#f4f1ec] p-8 rounded-3xl premium-shadow hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <MapPin className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">Viña del Mar</p>
                    <p className="text-white/80 font-medium">Región de Valparaíso</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <Building2 className="w-8 h-8 text-[#3e7c6d] shrink-0" />
                  <p className="text-lg font-medium text-gray-700">Espacio educativo adecuado, seguro y de fácil acceso.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden premium-shadow h-[500px] relative group">
              <img src={aboutImg1} alt="Viña del Mar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f3c5b]/80"></div>
              <p className="absolute bottom-8 left-8 text-white font-bold text-xl drop-shadow-lg">Sede Viña del Mar</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INSTRUMENTOS */}
      <section id="instrumentos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#3e7c6d] font-bold tracking-widest uppercase text-sm mb-2 block">Oferta Educativa</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1f3c5b]">Nuestros Instrumentos</h2>
          <p className="text-xl mb-16 text-gray-500 font-light max-w-2xl mx-auto">
            La asignación se realiza según edad, contextura y disponibilidad en cada periodo de postulación.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Violín', age: 'Desde 6 años', img: instViolin, desc: 'Desarrolla coordinación, concentración y oído musical.' },
              { name: 'Viola', age: 'Desde 8 años', img: instViola, desc: 'Sonido profundo y cálido. Favorece la escucha colectiva.' },
              { name: 'Violonchelo', age: 'Desde 8 a 9 años', img: instCello, desc: 'Expresivo y envolvente, se toca sentado facilitando la postura.' },
              { name: 'Contrabajo', age: 'Desde 10-12 años', img: instContra, desc: 'Sostiene la base musical. Refuerza la responsabilidad grupal.' },
              { name: 'Piano / Teclado', age: 'Desde 6 años', img: instPiano, desc: 'Ideal para iniciación. Facilita la comprensión de la armonía.' },
              { name: 'Guitarra', age: 'Desde 7 años', img: instGuit, desc: 'Versátil y cercano, favorece la autonomía musical.' }
            ].map((inst, i) => (
              <div key={i} className="bg-[#f8f6f3] rounded-3xl overflow-hidden shadow-sm hover:premium-shadow hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1f3c5b]/10 z-10 group-hover:bg-transparent transition-colors"></div>
                  <img src={inst.img} alt={inst.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 text-left bg-white flex-grow z-20 -mt-6 rounded-t-3xl relative">
                  <div className="absolute right-8 -top-8 bg-[#3e7c6d] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    {inst.age}
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3 text-[#1f3c5b]">{inst.name}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{inst.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO Y PRÉSTAMO */}
      <section className="py-24 px-6 bg-[#f8f6f3] relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3e7c6d]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#3e7c6d] font-bold tracking-widest uppercase text-sm mb-2 block">Metodología</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1f3c5b]">¿Cómo aprenden?</h2>
            <h3 className="text-2xl text-gradient font-bold">Teoría Musical en Colores</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Palette, t: 'Visual y Amigable', d: 'Metodología progresiva diseñada para los más pequeños.' },
              { icon: SmilePlus, t: 'Menos Frustración', d: 'Aumento de motivación mediante lectura amigable e intuitiva.' },
              { icon: ArrowUpRight, t: 'Progresión Natural', d: 'Tránsito gradual y sin forzar a la lectura tradicional.' }
            ].map((item, i) => (
              <div key={i} className="glass p-10 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#3e7c6d] to-[#2d5b4f] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 hover:rotate-12 transition-transform duration-300 transform">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#1f3c5b]">{item.t}</h4>
                <p className="text-gray-600 font-light text-lg">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#1f3c5b] to-[#2c537b] text-[#f4f1ec] rounded-[2.5rem] overflow-hidden premium-shadow group">
            <div className="p-10 md:p-16 space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold">Te invitamos a participar</h2>
              <p className="text-xl text-white/80 font-light leading-relaxed">Súmate a nuestra vibrante comunidad musical donde podrás desarrollar y potenciar todo tu talento artístico en un ambiente colaborativo y estimulante.</p>
              
              <div className="space-y-6">
                <div className="flex gap-5 items-start bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/5">
                  <HandHeart className="text-[#3e7c6d] shrink-0 w-8 h-8" />
                  <p className="font-medium text-lg pt-1">Acompañamiento constante y personalizado para que disfrutes y crezcas en tu proceso formativo.</p>
                </div>
                <div className="flex gap-5 items-start bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/5">
                  <Sparkles className="text-[#3e7c6d] shrink-0 w-8 h-8" />
                  <p className="font-medium text-lg pt-1">Descubre y perfecciona tu destreza en conjunto con otros jóvenes apasionados por la música.</p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px] md:min-h-full overflow-hidden">
              <img src={heroImg3} alt="Instrumentos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 mix-blend-luminosity hover:mix-blend-normal" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ACTIVIDADES Y BENEFICIOS */}
      <section id="beneficios" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#3e7c6d] font-bold tracking-widest uppercase text-sm mb-2 block">Experiencia</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1f3c5b]">Mucho más que clases</h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">La música se vive de manera colectiva y comunitaria creando lazos duraderos.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { i: UsersRound, t: 'Ensambles por nivel', d: 'Organizados según edad y avance.' },
              { i: Music4, t: 'Orquesta progresiva', d: 'Participación activa según habilidades.' },
              { i: Theater, t: 'Muestras internas', d: 'Presentaciones íntimas para la comunidad.' },
              { i: Mic2, t: 'Conciertos', d: 'Presentaciones públicas y festivales.' }
            ].map((act, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#f8f6f3] text-center hover:premium-shadow hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <act.i className="w-10 h-10 text-[#3e7c6d]" />
                </div>
                <h4 className="font-extrabold text-xl mb-3 text-[#1f3c5b]">{act.t}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{act.d}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3e7c6d]/20 to-transparent rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"></div>
              <img src={benImg} alt="Niño tocando" className="rounded-[2.5rem] shadow-2xl h-[550px] w-full object-cover" />
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1f3c5b] mb-4">¿Qué ganan aquí?</h3>
              <div className="space-y-4">
                {[
                  { icon: Music, text: 'Aprende música de manera real y progresiva' },
                  { icon: Sparkles, text: 'Desarrolla autoestima, concentración y disciplina constante' },
                  { icon: Heart, text: 'Expresa emociones de forma sana y segura' },
                  { icon: Users, text: 'Se integra a una comunidad artística empática' },
                  { icon: Trophy, text: 'Participa de experiencias culturales significativas' }
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#f8f6f3] p-3 rounded-xl">
                      <b.icon className="w-7 h-7 text-[#3e7c6d]" />
                    </div>
                    <span className="text-xl font-medium text-gray-700">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECCIÓN POSTULAR */}
      <section id="postular" className="py-24 px-6 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#eab308] font-bold tracking-widest uppercase text-sm mb-2 block animate-pulse">¡No te quedes fuera - Cupos Limitados!</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-16 text-[#1f3c5b]">Postulaciones Abiertas</h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-20 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gray-100 z-0 border-t-2 border-dashed border-[#c4d7d3]"></div>
            
            {[
              { icon: MessageCircle, t: 'Consultar', d: 'Escríbenos por WhatsApp para resolver tus dudas.' },
              { icon: UserPlus, t: 'Postular', d: 'Llena el formulario en línea. ¡Las postulaciones están abiertas!' },
              { icon: Users, t: 'Unirse', d: 'Espera el llamado y súmate a la comunidad.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col px-4 group">
                <div className="bg-white w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-6 premium-shadow group-hover:-translate-y-2 transition-transform duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3e7c6d] to-[#2d5b4f] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <step.icon size={36} className="text-[#3e7c6d] group-hover:text-white relative z-10 transition-colors duration-300" />
                  <div className="absolute -top-3 -right-3 bg-[#1f3c5b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#1f3c5b]/30">{i+1}</div>
                </div>
                <h3 className="font-extrabold text-2xl mb-3 text-[#1f3c5b]">{step.t}</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSduVn3XR-A_RLDJTvkt9Vvu9zoXQXvPGSE1Lp4Fo37pdWb9Ow/viewform" target="_blank" className="bg-gradient-to-r from-[#eab308] to-[#ca8a04] text-[#1f3c5b] px-12 py-5 rounded-2xl text-xl font-extrabold shadow-[0_10px_30px_rgba(234,179,8,0.4)] hover:shadow-[0_15px_40px_rgba(234,179,8,0.6)] hover:-translate-y-1 transition-transform duration-300 w-full sm:w-auto hover:scale-105 border border-[#ca8a04]/50 text-center">Ir al Formulario Directo</a>
            <a href="https://wa.me/56987257003" target="_blank" className="bg-white border-2 border-[#1f3c5b] text-[#1f3c5b] px-12 py-5 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#f8f6f3] transition-all duration-300 w-full sm:w-auto text-center hover:scale-105">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN INSTAGRAM */}
      <section className="py-24 px-6 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="w-8 h-8 text-[#E1306C]" />
                <span className="text-[#E1306C] font-bold tracking-widest uppercase text-sm">@conservatorio.encontrarte</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f3c5b]">Síguenos en Instagram</h2>
            </div>
            <a href="https://www.instagram.com/conservatorio.encontrarte/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-8 py-3 rounded-full font-bold hover:shadow-[0_10px_20px_rgba(225,48,108,0.3)] hover:-translate-y-1 transition-all duration-300">
              Ver Perfil
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[heroImg1, aboutImg4, heroImg3, aboutImg5].map((img, i) => (
              <a key={i} href="https://www.instagram.com/conservatorio.encontrarte/" target="_blank" rel="noopener noreferrer" className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#833AB4]/60 via-[#FD1D1D]/60 to-[#F56040]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-12 h-12 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f3c5b] text-[#f4f1ec] py-20 px-6 overflow-hidden relative border-t-8 border-[#3e7c6d]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="bg-white/10 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
              <Music className="w-12 h-12 text-[#c4d7d3]" />
            </div>
            <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Conservatorio EncontrArte</h3>
            <p className="text-2xl text-[#c4d7d3] italic font-light max-w-2xl mx-auto">"Más que una disciplina, la música es el vehículo para el perfeccionamiento de la sensibilidad humana."</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 border-y border-white/10 py-12 mb-12">
            <div className="flex gap-6 items-start bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
              <div className="bg-[#3e7c6d] p-3 rounded-full shrink-0">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-xl mb-2 text-white">Sede Viña del Mar</p>
                <p className="text-white/70 text-lg leading-relaxed">Viña del Mar <br/> Región de Valparaíso, Chile</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
              <div className="bg-[#3e7c6d] p-3 rounded-full shrink-0">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-xl mb-2 text-white">Contacto Directo</p>
                <a href="tel:+56987257003" className="block text-white/70 text-lg hover:text-white transition-colors mb-1">+56 9 8725 7003</a>
                <a href="https://wa.me/56987257003" className="text-[#c4d7d3] hover:text-white font-medium hover:underline">Ir a WhatsApp</a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://facebook.com/conservatorio.encontrarte" className="bg-white/10 p-5 rounded-full hover:bg-[#3e7c6d] hover:-translate-y-2 transition-all duration-300 shadow-lg"><Facebook size={26} /></a>
            <a href="https://instagram.com/conservatorio.encontrarte" className="bg-white/10 p-5 rounded-full hover:bg-[#3e7c6d] hover:-translate-y-2 transition-all duration-300 shadow-lg"><Instagram size={26} /></a>
          </div>
          
          <div className="text-center text-sm font-medium text-white/50 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center gap-2 md:gap-8">
            <p>© {new Date().getFullYear()} Conservatorio EncontrArte.</p>
            <p className="flex items-center justify-center gap-1 mx-auto hidden md:flex">▪</p>
            <p>Creada por <a href="https://corporacion3id.cl" target="_blank" className="hover:text-white transition-colors border-b border-transparent hover:border-white">corporacion3id.cl</a></p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
