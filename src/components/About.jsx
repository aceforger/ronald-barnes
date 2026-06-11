import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#1E4E79]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C9A227]/3 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A227]/30 text-[#C9A227] px-4 py-2 mb-4 text-sm font-roboto-slab font-medium rounded-full">
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-dm-serif text-[#1E4E79] mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#1E4E79] mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1E4E79] to-[#153A5C] rounded-3xl p-8 md:p-10 text-center mb-12 animate-fade-up shadow-lg">
            <svg className="w-8 h-8 text-white/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-white/80 font-playfair italic text-xl md:text-2xl leading-relaxed">"{authorInfo.quote}"</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8F7F2] p-8 rounded-2xl border border-[#1E4E79]/8 hover-lift animate-fade-up">
              <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="text-[#1E4E79]/60 leading-relaxed font-roboto-slab text-sm">{authorInfo.bio}</p>
            </div>
            <div className="bg-[#F8F7F2] p-8 rounded-2xl border border-[#1E4E79]/8 hover-lift animate-fade-up-delayed">
              <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <p className="text-[#1E4E79]/60 leading-relaxed font-roboto-slab text-sm">{authorInfo.bio2}</p>
            </div>
            <div className="bg-[#F8F7F2] p-8 rounded-2xl border border-[#1E4E79]/8 hover-lift animate-fade-up-delayed-2">
              <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="text-[#1E4E79]/60 leading-relaxed font-roboto-slab text-sm">{authorInfo.bio3}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {authorInfo.roles.map((role, i) => (
              <span key={i} className="px-6 py-3 bg-white text-[#1E4E79] text-sm font-roboto-slab font-medium border border-[#1E4E79]/15 hover:border-[#C9A227]/40 hover:text-[#C9A227] hover-lift transition-all rounded-2xl shadow-sm">
                {role}
              </span>
            ))}
          </div>
          {/* Tribute to Ms. Carolyn Smith */}
        <div className="mt-16 animate-fade-up">
        <div className="bg-gradient-to-br from-[#1E4E79] to-[#153A5C] rounded-3xl p-8 md:p-10 shadow-lg">
            <div className="w-14 h-14 bg-[#C9A227]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            </div>
            <h3 className="text-2xl font-dm-serif text-[#C9A227] mb-8 text-center">A Legacy of Gratitude</h3>
            
            {/* Photos */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Ronald Photo */}
            <div className="bg-white/5 rounded-2xl p-4 text-center flex flex-col items-center">
                <div className="inline-block rounded-2xl overflow-hidden border-2 border-[#C9A227]/30 mb-3">
                <img 
                    src="/images/ronald.png" 
                    alt="Dr. Ronald Barnes" 
                    className="w-48 h-auto object-contain block"
                    onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-[#C9A227]/10', 'w-48', 'h-48')
                    e.target.parentElement.innerHTML = `<span class="text-4xl font-dm-serif text-[#C9A227]">RB</span>`
                    }}
                />
                </div>
                <p className="text-white/60 font-roboto-slab text-sm">Dr. Ronald Barnes</p>
                <p className="text-[#C9A227]/50 font-playfair italic text-xs mt-1">Author & Scholar</p>
            </div>

            {/* Ms. Smith Photo */}
            <div className="bg-white/5 rounded-2xl p-4 text-center flex flex-col items-center">
                <div className="inline-block rounded-2xl overflow-hidden border-2 border-[#C9A227]/30 mb-3 mt-10">
                <img 
                    src="/images/ms-smith-1.png" 
                    alt="Ms. Carolyn Smith" 
                    className="w-90 h-auto object-contain block"
                    onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-[#C9A227]/10', 'w-48', 'h-48')
                    e.target.parentElement.innerHTML = `<span class="text-4xl font-dm-serif text-[#C9A227]">CS</span>`
                    }}
                />
                </div>
                <p className="text-white/60 font-roboto-slab text-sm">Ms. Carolyn Smith</p>
                <p className="text-[#C9A227]/50 font-playfair italic text-xs mt-1">Counselor, University of Chicago Laboratory High School</p>
            </div>
            </div>

            {/* Tribute Text */}
            <div className="text-white/70 font-roboto-slab text-sm leading-relaxed space-y-4 max-w-3xl mx-auto">
            {authorInfo.tribute.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            </div>
            
            {/* Academic Link */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-[#C9A227] font-roboto-slab text-sm mb-3">Read more academic works:</p>
            <a 
                href={authorInfo.academicLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-white font-roboto-slab font-semibold text-sm rounded-full hover:bg-[#B08F1E] transition-all"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Academia.edu Profile
            </a>
            </div>
        </div>
        </div>
          
        </div>
      </div>
    </section>
  )
}