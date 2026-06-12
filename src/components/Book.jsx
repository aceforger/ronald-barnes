import { useState } from 'react'
import { book } from '../data'

export default function Book() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <section id="books" className="py-24 bg-[#F8F7F2] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1E4E79]/3 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A227]/30 text-[#C9A227] px-4 py-2 mb-4 text-sm font-roboto-slab font-medium rounded-full">
            Literary Works
          </div>
          <h2 className="text-4xl md:text-5xl font-dm-serif text-[#1E4E79] mb-4">Books by Dr. Ronald Barnes</h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#1E4E79] mx-auto mt-6"></div>
          <p className="text-[#1E4E79]/40 text-sm font-roboto-slab mt-4 max-w-lg mx-auto">
            "Exploring world phenomena from a psychology perspective"
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {book.map((bookItem, i) => (
            <div key={bookItem.id} className="group animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="bg-white border border-[#1E4E79]/8 hover:border-[#C9A227]/25 transition-all shadow-md hover:shadow-lg hover-lift h-full flex flex-col rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#F8F7F2] to-white overflow-hidden relative flex items-center justify-center p-4">
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#C9A227] text-white text-xs font-roboto-slab font-semibold rounded-full">
                    {bookItem.statusText}
                  </div>
                  {/* Trailer indicator */}
                  {bookItem.trailer && (
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  )}
                  <img src={bookItem.coverImage} alt={bookItem.title} className="w-36 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('min-h-[200px]')
                      e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-3xl font-dm-serif text-[#1E4E79]">${bookItem.title.split(' ').map(w => w[0]).slice(0, 2).join('')}</div></div>`
                    }}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  {bookItem.subtitle && (
                    <p className="text-[#C9A227] text-[10px] font-roboto-slab font-semibold uppercase tracking-wider mb-1.5 line-clamp-1">{bookItem.subtitle}</p>
                  )}
                  <h3 className="text-sm font-playfair italic text-[#1E4E79] mb-1.5 group-hover:text-[#C9A227] transition-colors line-clamp-2">{bookItem.title}</h3>
                  <p className="text-[#1E4E79]/40 text-xs font-roboto-slab leading-relaxed mb-3 flex-1 line-clamp-3">{bookItem.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#F8F7F2] text-[#1E4E79] text-[9px] font-roboto-slab font-medium rounded-full border border-[#1E4E79]/8">{theme}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedBook(bookItem)} className="w-full py-2 border border-[#C9A227]/30 text-[#C9A227] font-roboto-slab font-semibold text-xs rounded-full hover:bg-[#C9A227]/5 hover:border-[#C9A227]/50 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#F8F7F2]/90 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-white max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#1E4E79]/10 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-[#1E4E79]/8 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C9A227] text-white text-xs font-roboto-slab font-semibold rounded-full">{selectedBook.statusText}</span>
                {selectedBook.trailer && (
                  <span className="text-[10px] font-roboto-slab font-bold text-red-500 tracking-wider uppercase flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                    </svg>
                    Has Trailer
                  </span>
                )}
              </div>
              <button onClick={() => setSelectedBook(null)} className="text-[#1E4E79]/40 hover:text-[#C9A227] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-10">
              

              {/* Book Details */}
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                  <div className="bg-[#F8F7F2] rounded-xl p-4 flex items-center justify-center">
                    <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-full h-auto max-h-[350px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('min-h-[250px]')
                        e.target.parentElement.innerHTML = `<div class="text-center p-8"><div class="text-4xl font-dm-serif text-[#1E4E79]">${selectedBook.title.split(' ').map(w => w[0]).slice(0, 2).join('')}</div></div>`
                      }}
                    />
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center space-y-5">
                  <div>
                    {selectedBook.subtitle && (
                      <p className="text-[#C9A227] text-xs font-roboto-slab font-semibold uppercase tracking-wider mb-2">{selectedBook.subtitle}</p>
                    )}
                    <h2 className="text-2xl md:text-3xl font-playfair italic text-[#1E4E79] mb-2">{selectedBook.title}</h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#1E4E79] mt-3"></div>
                  </div>
                  <p className="text-[#1E4E79]/60 leading-relaxed font-roboto-slab text-sm">{selectedBook.description}</p>
                  {selectedBook.description2 && <p className="text-[#1E4E79]/40 leading-relaxed font-roboto-slab text-xs">{selectedBook.description2}</p>}
                  {selectedBook.description3 && (
                    <p className="text-[#1E4E79]/30 leading-relaxed font-roboto-slab text-xs italic border-l-2 border-[#C9A227]/20 pl-3">{selectedBook.description3}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F8F7F2] text-[#1E4E79] text-xs font-roboto-slab font-medium rounded-full border border-[#1E4E79]/8">{theme}</span>
                    ))}
                  </div>
                  {selectedBook.status === 'published' && selectedBook.purchaseLinks && (
                    <div className="pt-3 space-y-2">
                      <p className="text-[#C9A227] text-xs font-roboto-slab font-semibold">Available at:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedBook.purchaseLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-white font-roboto-slab font-semibold text-xs rounded-full hover:bg-[#B08F1E] transition-all hover-lift">
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Trailer Section - Show at top if available */}
              {selectedBook.trailer && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs font-roboto-slab font-bold text-[#1E4E79] tracking-wider uppercase">Book Trailer</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#C9A227]/20">
                    <div className="bg-[#1A1210] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-[10px] font-roboto-slab font-bold text-white/40 tracking-wider uppercase ml-2">
                        {selectedBook.title.length > 40 ? selectedBook.title.substring(0, 40) + '...' : selectedBook.title}
                      </span>
                    </div>
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedBook.trailer.split('v=')[1]}?rel=0&modestbranding=1`}
                        title={`${selectedBook.title} - Trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}