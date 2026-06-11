import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/bg.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-[#F8F7F2]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F2]/50 via-transparent to-[#F8F7F2]/40"></div>
      </div>

      {/* Floating light particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.5 ? '#C9A227' : '#1E4E79',
            opacity: 0,
            animation: `floatUp ${5 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            boxShadow: '0 0 6px rgba(201,162,39,0.3)'
          }}
        ></div>
      ))}

      {/* Subtle rotating ring */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border border-[#C9A227]/5 rounded-full animate-subtle-rotate pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] border border-[#1E4E79]/5 rounded-full animate-subtle-rotate pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '40s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#C9A227]/30 text-[#C9A227] px-4 py-2 mb-8 text-sm font-roboto-slab font-medium rounded-full bg-white/60 backdrop-blur-sm animate-fade-up">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                </svg>
              </div>
              Author • Scholar • Psychologist
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-dm-serif text-[#1E4E79] mb-2 leading-tight animate-fade-up">
              {authorInfo.name}
            </h1>
            <p className="text-lg font-roboto-slab text-[#121213] mb-6 animate-fade-up-delayed">
              PhD, MA, BA • PSI CHI • NSLS
            </p>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#1E4E79] mb-8 mx-auto md:mx-0"></div>

            {/* Main tagline */}
            {/* <p className="text-xl text-[#1E4E79]/70 mb-4 font-roboto-slab font-medium animate-fade-up-delayed">
              <span className="text-[#C9A227] font-bold">Practice</span> what you Preach,{" "}
              <span className="text-[#C9A227] font-bold">Preach</span> what you Practice
            </p> */}

            {/* Subtitle - Exploring world phenomena */}
            <p className="text-[#02345f] font-playfair italic text-2xl mb-6 animate-fade-up-delayed">
              "Exploring world phenomena from a psychology perspective"
            </p>

            {/* Key stats */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start animate-fade-up-delayed">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 text-center border border-[#1E4E79]/10">
                <p className="text-2xl font-dm-serif text-[#C9A227]">16</p>
                <p className="text-[10px] font-roboto-slab text-[#1E4E79]/50 uppercase tracking-wider">Books Written</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 text-center border border-[#1E4E79]/10">
                <p className="text-2xl font-dm-serif text-[#C9A227]">10</p>
                <p className="text-[10px] font-roboto-slab text-[#1E4E79]/50 uppercase tracking-wider">Published</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 text-center border border-[#1E4E79]/10">
                <p className="text-2xl font-dm-serif text-[#C9A227]">850+</p>
                <p className="text-[10px] font-roboto-slab text-[#1E4E79]/50 uppercase tracking-wider">Pages</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-[#02345f]/90 leading-relaxed max-w-lg mx-auto md:mx-0 font-playfair italic text-base border-l-2 border-[#C9A227]/40 pl-6 py-2 animate-fade-up-delayed-2">
              "Where one person sees a skeptical impossibility, another sees a realistic possibility."
            </p>

            {/* Roles */}
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-sm text-[#1E4E79] text-sm font-roboto-slab font-medium border border-[#1E4E79]/15 hover:border-[#C9A227]/40 hover:text-[#C9A227] hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-8 py-4 bg-[#C9A227] text-white font-roboto-slab font-semibold hover:bg-[#B08F1E] transition-all text-center hover-lift rounded-full shadow-[0_0_25px_rgba(201,162,39,0.2)]">
                About the Author
              </a>
              <a href="#books" onClick={(e) => handleScroll(e, '#books')} className="px-8 py-4 border-2 border-[#C9A227]/30 text-[#1E4E79] font-roboto-slab font-semibold hover:border-[#C9A227] hover:text-[#C9A227] transition-all text-center hover-lift rounded-full">
                View All Books
              </a>
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="relative mx-auto animate-fade-up flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-[#C9A227]/8 rounded-full blur-3xl animate-eye-pulse"></div>
              
              {/* Main Card */}
              <div className="relative w-72 md:w-80 bg-white/80 backdrop-blur-sm shadow-2xl border border-[#1E4E79]/10 overflow-hidden hover-lift rounded-3xl">
                {/* Profile Image */}
                <div className="w-full">
                  <img 
                    src="/images/profile.png" 
                    alt="Dr. Ronald Barnes"
                    className="w-full h-auto object-cover block"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1E4E79]/10', 'to-[#C9A227]/10', 'min-h-[300px]')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <div class="text-6xl font-dm-serif text-[#1E4E79] mb-2">RB</div>
                          <p class="text-sm font-roboto-slab text-[#1E4E79]/50">Dr. Ronald Barnes</p>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>

              {/* Floating academic icon */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}