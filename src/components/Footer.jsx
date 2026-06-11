import { useNavigate } from 'react-router-dom'
import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (e, href) => {
    e.preventDefault()
    navigate('/' + href)
  }

  return (
    <footer className="bg-[#1E4E79] text-white">
      <div className="bg-[#153A5C]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-playfair italic text-[#C9A227] mb-1">Ready to Publish?</h3>
              <p className="text-white/50 text-sm font-roboto-slab">Access the go-live portal for your book</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A227] text-[#1E4E79] text-xl font-roboto-slab font-semibold py-5 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#C9A227]/30"
              >
                Launch & Go-Live Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
              </svg>
              <span className="font-dm-serif text-xl text-[#C9A227]">{authorInfo.name}</span>
            </div>
            <p className="text-white/40 text-sm font-roboto-slab leading-relaxed">Scholar & Author</p>
          </div>
          <div>
            <h4 className="text-sm font-roboto-slab font-semibold mb-4 text-[#C9A227] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-white/40 hover:text-[#C9A227] transition-colors text-sm font-roboto-slab">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-roboto-slab font-semibold mb-4 text-[#C9A227] uppercase tracking-wider">Contact</h4>
            <a href={`mailto:${authorInfo.email}`} className="text-white/40 hover:text-[#C9A227] transition-colors text-sm font-roboto-slab block">{authorInfo.email}</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/20 text-sm font-roboto-slab">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}