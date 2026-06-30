import { useEffect, useState } from 'react'

function MicIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" x2="12" y1="19" y2="22"/>
    </svg>
  )
}

function MusicIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Singers')
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-white bg-black selection:bg-hot selection:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <style>{`
        .smule-shadow { box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
        .glass { background: rgba(22, 22, 24, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); }
        .auth-card { border: 3px solid rgba(255,255,255,0.15); }
        .nav-link { position: relative; font-weight: 700; font-size: 14px; transition: color 0.2s; }
        .nav-link:hover { color: #ff006e; }
        .btn-primary { background: #ff006e; border-radius: 99px; transition: transform 0.2s, background 0.2s; font-weight: 800; }
        .btn-primary:hover { transform: scale(1.05); background: #ff1a7d; }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2 sm:py-3' : 'py-3 sm:py-5 bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-hot flex items-center justify-center rotate-3 shadow-lg shadow-hot/20">
                <MicIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-[900] tracking-tighter">KaraQ<span className="text-hot">Pro</span></span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {['Explore', 'Songs', 'Venues', 'Console'].map(l => (
                <a key={l} href="#" className="nav-link opacity-80 hover:opacity-100">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Smule Inspired */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 sm:py-0">
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/14488406/pexels-photo-14488406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600" 
            alt="Nightclub DJ" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            {/* Left: Headline */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[8px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-6">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-hot animate-pulse" />
                Live in 140+ Venues
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-[900] leading-[1.05] tracking-tight mb-3 sm:mb-6">
                The World is Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hot via-violet to-aqua">Main Stage</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-grey font-medium mb-6 sm:mb-10 max-w-xl">
                Pro-grade console, mobile singer app, and real-time syncing for venues.
              </p>
              <div className="flex flex-row gap-3">
                <button className="btn-primary px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-lg">
                  Launch Console
                </button>
                <button className="px-6 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-white/20 text-xs sm:text-lg font-bold hover:bg-white/10 transition-colors">Find a Venue</button>
              </div>
            </div>

            {/* Right: Auth Form */}
            <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
              <div className="glass auth-card p-6 sm:p-8 rounded-[32px] smule-shadow">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-hot flex items-center justify-center rotate-3">
                    <MicIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-[900] tracking-tighter">KaraQ<span className="text-hot">Pro</span></span>
                </div>

                <h2 className="text-2xl font-black mb-1">{authMode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
                <p className="text-grey text-xs mb-6">{authMode === 'login' ? 'Enter your venue credentials to continue.' : 'Start your 14-day free trial today.'}</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {authMode === 'signup' && (
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-1.5 ml-1">Venue Name</label>
                      <input type="text" placeholder="The Neon Lounge" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-hot transition-colors text-sm" />
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-1.5 ml-1">Email Address</label>
                    <input type="email" placeholder="admin@venue.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-hot transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-1.5 ml-1">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-hot transition-colors text-sm" />
                  </div>
                  <button className="btn-primary w-full py-4 mt-2 uppercase tracking-widest text-sm">
                    {authMode === 'login' ? 'Sign In' : 'Create Venue'}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                    className="text-sm font-bold text-hot"
                  >
                    {authMode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating "Now Singing" Card - Smule style */}
        <div className="absolute bottom-10 right-10 hidden xl:block w-72 glass rounded-2xl p-4 smule-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-hot to-violet flex items-center justify-center">
              <MusicIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black text-hot tracking-widest uppercase">Now Singing</div>
              <div className="text-sm font-bold">Bohemian Rhapsody</div>
            </div>
          </div>
          <div className="flex -space-x-2 mb-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-zinc-800" />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-card bg-hot flex items-center justify-center text-[10px] font-bold">+18</div>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-hot w-2/3" />
          </div>
        </div>
      </section>

      {/* FEATURE SECTION - Dark, Card-based like Smule */}
      <section className="bg-deep py-12 sm:py-24 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-4xl font-[900] tracking-tight mb-2 sm:mb-4 uppercase">Run the Show</h2>
              <p className="text-grey text-sm sm:text-lg max-w-xl">Powerful tools for owners, KJs, and singers.</p>
            </div>
            <div className="flex gap-2">
              {['Singers', 'KJs', 'Owners'].map(t => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold transition-all ${activeTab === t ? 'bg-white text-black' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 relative h-[250px] sm:h-[400px] rounded-[24px] sm:rounded-[32px] overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/29298514/pexels-photo-29298514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Singing together"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
                <h3 className="text-xl sm:text-3xl font-black mb-1 sm:mb-2">Mobile Singer App</h3>
                <p className="text-xs sm:text-white/80 max-w-xs sm:max-w-md">Search 100k+ songs, join the queue instantly, and tip to bump your song.</p>
              </div>
            </div>

            <div className="glass rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-violet/20 flex items-center justify-center mb-4 sm:mb-6">
                  <MusicIcon className="w-5 h-5 sm:w-6 sm:h-6 text-violet" />
                </div>
                <h3 className="text-lg sm:text-2xl font-black mb-2 sm:mb-4">Pro Graphics</h3>
                <p className="text-grey text-xs sm:text-sm leading-relaxed">Studio-quality lyrics overlay with chroma key support.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <button className="text-hot text-xs sm:text-base font-bold flex items-center gap-2 group">
                  Learn about Console <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP-LIKE GRID */}
      <section className="py-12 sm:py-24 bg-black">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-3xl font-[900] uppercase tracking-wider mb-2">The Experience</h2>
            <div className="h-1 w-12 sm:h-1.5 sm:w-16 bg-hot mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { t: 'Live Sync', d: '98ms latency globally', c: 'bg-hot' },
              { t: 'Tip Engine', d: 'Secure Stripe payouts', c: 'bg-violet' },
              { t: '100k Songs', d: 'Multi-lingual library', c: 'bg-aqua' },
              { t: 'PWA Ready', d: 'No app store needed', c: 'bg-yellow' }
            ].map(item => (
              <div key={item.t} className="glass rounded-[24px] p-6 hover:border-white/20 transition-colors">
                <div className={`w-8 h-8 ${item.c} rounded-lg mb-4`} />
                <h4 className="font-black text-sm uppercase mb-1">{item.t}</h4>
                <p className="text-xs text-grey">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-deep pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-hot flex items-center justify-center">
                  <MicIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-black tracking-tighter">KaraQPro</span>
              </div>
              <p className="text-grey text-sm max-w-xs leading-relaxed">
                Empowering karaoke venues with cutting-edge technology. Built by music lovers, for music lovers.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Product</h5>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-hot">Console</a></li>
                <li><a href="#" className="hover:text-hot">Mobile App</a></li>
                <li><a href="#" className="hover:text-hot">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Social</h5>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-hot">Instagram</a></li>
                <li><a href="#" className="hover:text-hot">Twitter</a></li>
                <li><a href="#" className="hover:text-hot">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
              © {new Date().getFullYear()} KaraQPro Inc. All rights reserved.
            </div>
            <div className="flex gap-8 text-[10px] font-bold text-white/30 uppercase tracking-widest">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
