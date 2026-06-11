import { useState } from 'react'

export default function MimesisSeries() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'stages', label: 'The Three Stages' },
  { id: 'volumes', label: 'Volume Guide' },
  { id: 'approach', label: 'How to Read' },
  { id: 'takeaways', label: 'Key Takeaways' },
  { id: 'author', label: 'Author Credentials' },
  { id: 'references', label: 'References' },
]

  return (
    <section id="mimesis" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#1E4E79]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C9A227]/3 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C9A227]/30 text-[#C9A227] px-4 py-2 mb-4 text-sm font-roboto-slab font-medium rounded-full">
            Flagship Series
          </div>
          <h2 className="text-4xl md:text-5xl font-dm-serif text-[#1E4E79] mb-4">The Three-Fold Mimesis of Life</h2>
          <p className="text-[#1E4E79]/50 font-playfair italic text-lg">A Four Volume Set Including an Overview Booklet</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#1E4E79] mx-auto mt-6"></div>
        </div>

        {/* Synopsis Card */}
        <div className="bg-gradient-to-br from-[#1E4E79] to-[#153A5C] rounded-3xl p-8 md:p-10 text-white mb-10 animate-fade-up">
          <h3 className="text-xl font-dm-serif text-[#C9A227] mb-4">Synopsis</h3>
          <p className="text-white/70 font-roboto-slab text-sm leading-relaxed">
            The Three-Fold Mimesis of Life is comprised of four Volumes with an accompanying overview. The Three-Fold Mimesis as it relates to life is the construction of an individual's reality based in their lived experiences. The book frames an individual's lived experiences into three stages of their life.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-roboto-slab font-medium rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-[#C9A227] text-white shadow-lg'
                  : 'bg-[#F8F7F2] text-[#1E4E79]/60 hover:bg-[#C9A227]/10 hover:text-[#1E4E79]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#F8F7F2] rounded-2xl p-6 md:p-8 border border-[#1E4E79]/8 animate-fade-up min-h-[400px]">
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
              <p>The Three-Fold Mimesis of Life frames an individual's lived experiences into three stages:</p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-5 rounded-xl border border-[#1E4E79]/8 text-center">
                  <div className="w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-dm-serif text-lg">1</span>
                  </div>
                  <h4 className="font-dm-serif text-[#1E4E79] mb-2">Coming Into Being</h4>
                  <p className="text-xs">Birth to engagement with others in a formal learning environment. Parents establish the foundation for the individual's future.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#1E4E79]/8 text-center">
                  <div className="w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-dm-serif text-lg">2</span>
                  </div>
                  <h4 className="font-dm-serif text-[#1E4E79] mb-2">Accumulation of Experiences</h4>
                  <p className="text-xs">The longest stage. Individuals encounter and accumulate lived experiences that shape their Mimesis construction.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#1E4E79]/8 text-center">
                  <div className="w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-dm-serif text-lg">3</span>
                  </div>
                  <h4 className="font-dm-serif text-[#1E4E79] mb-2">Reflection</h4>
                  <p className="text-xs">The individual looks back on their life and evaluates. Includes the final Mimesis—death and legacy.</p>
                </div>
              </div>
            </div>
          )}

          {/* Stages */}
          {activeTab === 'stages' && (
            <div className="space-y-6 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Stage 1: Coming Into Being</h4>
                <p>Birth to engagement with others kids in a formal learning environment. Parents or guardians are the primary caretakers. A child's foundational learning takes place in Stage 1. The foundation established in Stage 1 is critical to the projection of the individual's future life experiences.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Stage 2: Accumulation of Lived Experiences</h4>
                <p>The longest stage in life, spanning from experiences outside of the parents until Stage 3 when the individual reflects on their past. Characterized by a myriad of life experiences and encounters. The individual's response to these experiences and decisions they make cannot be underestimated in their impact.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Stage 3: Reflection</h4>
                <p>The individual looks back on their life and evaluates. Others also evaluate the Mimesis the individual has constructed. When one's perception aligns with how others perceive their Mimesis—that is their Reality. Stage 3 also includes the final Mimesis—death. However, as long as the memory of an individual is profound in the lives of those who survive, Stage 3 Mimesis is still active.</p>
              </div>
            </div>
          )}

          {/* Volume Guide */}
          {activeTab === 'volumes' && (
            <div className="space-y-6 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-2">Volume I</h4>
                <p className="text-[#C9A227] font-semibold text-xs mb-2">Foundation & Psychology</p>
                <p>Background on the concept evolution and meaning of Mimesis from Plato to Aristotle to Paul Riceour to Dr. Ronald Barnes' application. Addresses developmental theories of Freud, Piaget, Bandura, Bowlby, Erikson, and Vygotsky. Gives insight into how environment acts as a determinant factor in Mimesis Construction.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-2">Volume II</h4>
                <p className="text-[#C9A227] font-semibold text-xs mb-2">Stages of Development</p>
                <p>Discusses the stages of Mimesis in the development process from birth through Stage 3. Takes the reader through a practical life process with examples of Mimesis constructing phenomena and resulting situations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-2">Volume III</h4>
                <p className="text-[#C9A227] font-semibold text-xs mb-2">Profiles in Mimesis</p>
                <p>Profiles the lived experiences and Mimesis of: Dr. Martin Luther King, Jr., Muhammad Ali, Oprah Winfrey, Barack Obama, Billy Graham, Queen Elizabeth II, Richard Nixon, Malcolm X, Stanley "Tookie" Williams, Donald Trump, Jay-Z, Tupac Shakur, Elvis Presley, Beyoncé, Marilyn Monroe.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-2">Volume IV</h4>
                <p className="text-[#C9A227] font-semibold text-xs mb-2">Environment & Society</p>
                <p>Explores the impact of the environment on Mimesis construction, including social group interactions, government, economics, education, politics and general phenomena institutionally constructed by humans.</p>
              </div>
            </div>
          )}

          {/* How to Read */}
          {activeTab === 'approach' && (
            <div className="space-y-4 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Recommended Reading Approach</h4>
                <ul className="space-y-3 list-disc pl-5">
                  <li><strong>Volume I first</strong> — Foundation for understanding the meaning, concept and evolution of Mimesis. Complete reading recommended.</li>
                  <li><strong>Volume II</strong> — Takes the reader through the general nature of the life evolution process. Complete reading recommended.</li>
                  <li><strong>Volume III</strong> — Read at least two individual Mimesis descriptions, then read their comparative descriptions in Chapter 2.</li>
                  <li><strong>Volume IV</strong> — Details the relationship between Mimesis construction and the environment. Thorough reading recommended.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Reader Preparation</h4>
                <p>Approach the book with an interest to understand how to influence the developmental process of children and how to establish the developmental foundation that influences positive lived experiences. Adult readers can gain insight into approaching their own lives, addressing challenges, and making decisions aligned with life objectives.</p>
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          {activeTab === 'takeaways' && (
            <div className="space-y-4 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
              {[
                "Individuals have the opportunity to create their own story, to write their own narrative. Understanding this concept at an early age can mitigate ambiguity and give direction and purpose.",
                "Application of Mimesis to real life experiences—constructed with positive aforethought—can lead to engaging productive and satisfying lived experiences.",
                "Understanding and internalizing 'Future-oriented cognition bias'—the human tendency to favor positive future events over positive past events—is realistically possible when Mimesis is constructed with positive forethought.",
                "For every step you take up the ladder of success there is someone who makes it possible. 'I did it all by myself' does not exist.",
                "An individual has agency over the lived experiences they encounter and the decisions they make regarding their experiences, to determine the projection of their life path."
              ].map((takeaway, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[#1E4E79]/8 flex gap-4">
                  <div className="w-8 h-8 bg-[#C9A227] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-dm-serif text-sm">{i + 1}</span>
                  </div>
                  <p>{takeaway}</p>
                </div>
              ))}
            </div>
          )}

          {/* Author Credentials */}
          {activeTab === 'author' && (
            <div className="space-y-4 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Academic Background</h4>
                <ul className="space-y-2">
                  <li>• B.A. in Economics — Coe College</li>
                  <li>• Master's in Religious Studies — University of Chicago</li>
                  <li>• PhD in Psychology — Grand Canyon University</li>
                  <li>• Second PhD in Community Psychology — National Louis University (2027)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
                <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-3">Honors & Memberships</h4>
                <ul className="space-y-2">
                  <li>• PSI CHI — International Psychology Honor Society</li>
                  <li>• NSLS — National Success and Leadership Society</li>
                  <li>• Kappa Alpha Psi Fraternity</li>
                </ul>
              </div>
            </div>
          )}

          {/* References */}
        {activeTab === 'references' && (
        <div className="space-y-4 text-[#1E4E79]/60 font-roboto-slab text-sm leading-relaxed">
            <div className="bg-white p-6 rounded-xl border border-[#1E4E79]/8">
            <h4 className="font-dm-serif text-[#1E4E79] text-lg mb-4">Academic References</h4>
            <div className="space-y-4">
                <div className="border-b border-[#1E4E79]/8 pb-4">
                <p className="mb-1">Fitzgerald, E., Hor, K., & Drake, A. J. (2020). Maternal influences on fetal brain development: The role of nutrition, infection and stress, and the potential for intergenerational consequences. <em>Early human development</em>, 150, 105190.</p>
                <a href="https://doi.org/10.1016/j.earlhumdev.2020.105190" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">DOI Link</a>
                <span className="text-[#1E4E79]/30 mx-2">|</span>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7481314/" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">PMC Article</a>
                </div>

                <div className="border-b border-[#1E4E79]/8 pb-4">
                <p className="mb-1">Baker, Joe (2017). Refiguration, Understanding and Transformation.</p>
                <a href="https://figuration.al/refiguration-understanding-and-transformation-2492d2b40212" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">Read Article</a>
                </div>

                <div className="border-b border-[#1E4E79]/8 pb-4">
                <p className="mb-1">Turello, D. (2015). How We Experience Time: Paul Riceour on Past, Present, and Future.</p>
                <a href="https://blogs.loc.gov/kluge/2015/04/paul-Riceour/" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">Library of Congress Blog</a>
                </div>

                <div className="border-b border-[#1E4E79]/8 pb-4">
                <p className="mb-1">Firestone, Robert W. (2008). The Human Experience. <em>Psychology Today</em>.</p>
                <a href="https://www.psychologytoday.com/us/blog/the-human-experience/200812/the-human-experience" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">Psychology Today Article</a>
                </div>

                <div className="border-b border-[#1E4E79]/8 pb-4">
                <p className="mb-1">Caruso, E. M., Latham, A. J., & Miller, K. (2024). Is future bias just a manifestation of the temporal value asymmetry? <em>Philosophical Psychology</em>, 1–40.</p>
                <a href="https://doi.org/10.1080/09515089.2024.2360673" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">DOI Link</a>
                <span className="text-[#1E4E79]/30 mx-2">|</span>
                <a href="https://www.tandfonline.com/doi/full/10.1080/09515089.2024.2360673#abstract" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">Full Article</a>
                </div>

                <div className="pb-2">
                <p className="mb-1">McCormack, T., Burns, P., O'Connor, P., Jaroslawska, A., & Caruso, E. M. (2019). Do children and adolescents have a future-oriented bias? A developmental study of spontaneous and cued past and future thinking. <em>Psychological research</em>, 83(4), 774–787.</p>
                <a href="https://doi.org/10.1007/s00426-018-1077-5" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">DOI Link</a>
                <span className="text-[#1E4E79]/30 mx-2">|</span>
                <a href="https://pubmed.ncbi.nlm.nih.gov/30159672/" target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:text-[#B08F1E] text-xs">PubMed</a>
                </div>
            </div>
            </div>
        </div>
        )}
        </div>
      </div>
    </section>
  )
}