import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (isHomePage) {
        const sections = navLinks.map(link => link.href.replace('#', ''))
        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHomePage) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/' + href)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#1E4E79]/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#f7be03] group-hover:text-[#1E4E79] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <span className="font-dm-serif text-3xl text-[#1E4E79] group-hover:text-[#c99027] transition-colors leading-tight">
                Ronald Barnes
              </span>
              <span className="text-[10px] font-roboto-slab font-bold text-[black] uppercase tracking-[0.2em] leading-tight block">
                PhD + MA + BA • PSI CHI • NSLS 
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-2.5 text-base font-roboto-slab font-bold transition-all duration-300 rounded-full ${
                  activeSection === link.href.replace('#', '') && isHomePage
                    ? 'text-[#C9A227] bg-[white]/70'
                    : 'text-[#1E4E79]/70 hover:text-[#1E4E79] hover:bg-[#C9A227]/5'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && isHomePage && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#C9A227] rounded-full shadow-[0_0_6px_#C9A227]"></span>
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#1E4E79]"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-3 w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-6'}`}></span>
            </div>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border border-[#1E4E79]/10 rounded-2xl shadow-xl mt-3 p-5">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-5 py-4 font-roboto-slab font-bold text-lg rounded-xl transition-all ${
                  activeSection === link.href.replace('#', '') && isHomePage
                    ? 'text-[#C9A227] bg-[#C9A227]/10'
                    : 'text-[#1E4E79]/60 hover:text-[#1E4E79]'
                }`}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}