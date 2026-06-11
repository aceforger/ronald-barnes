import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#1E4E79]/3 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#C9A227]/3 rounded-full blur-[70px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#C9A227]/30 text-[#C9A227] px-4 py-2 mb-8 text-sm font-roboto-slab font-medium rounded-full">
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-dm-serif text-[#1E4E79] mb-6 animate-fade-up">Get in Touch</h2>
        <p className="text-[#1E4E79]/40 text-lg mb-12 max-w-md mx-auto font-roboto-slab animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly
        </p>
        <div className="bg-[#F8F7F2] p-10 shadow-2xl border border-[#1E4E79]/10 rounded-3xl animate-fade-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#C9A227] to-[#1E4E79] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A227] text-white font-roboto-slab font-semibold hover:bg-[#B08F1E] transition-all text-lg w-full justify-center rounded-full shadow-[0_0_20px_rgba(201,162,39,0.15)]">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}