<?php
/**
 * KaraQPro - Vibrant Karaoke Venue OS
 * PHP Implementation of the Smule-inspired Dark Landing Page
 */

// Configuration / Constants
$site_name = "KaraQPro";
$primary_color = "#ff006e";
$current_year = date("Y");

$nav_links = ['Explore', 'Songs', 'Venues', 'Console'];

$features = [
    ['t' => 'Live Sync', 'd' => '98ms latency globally', 'c' => 'bg-[#ff006e]'],
    ['t' => 'Tip Engine', 'd' => 'Secure Stripe payouts', 'c' => 'bg-[#8338ec]'],
    ['t' => '100k Songs', 'd' => 'Multi-lingual library', 'c' => 'bg-[#3a86ff]'],
    ['t' => 'PWA Ready', 'd' => 'No app store needed', 'c' => 'bg-[#ffbe0b]']
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $site_name; ?> — The World is Your Main Stage</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #000; color: #fff; }
        .smule-shadow { box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
        .glass { background: rgba(22, 22, 24, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08); }
        .nav-link { position: relative; font-weight: 700; font-size: 14px; transition: color 0.2s; opacity: 0.8; }
        .nav-link:hover { color: <?php echo $primary_color; ?>; opacity: 1; }
        .btn-primary { background: <?php echo $primary_color; ?>; border-radius: 99px; transition: transform 0.2s, background 0.2s; font-weight: 800; }
        .btn-primary:hover { transform: scale(1.05); background: #ff1a7d; }
        .text-hot { color: <?php echo $primary_color; ?>; }
        .bg-hot { background-color: <?php echo $primary_color; ?>; }
        .selection\:bg-hot::selection { background-color: <?php echo $primary_color; ?>; color: white; }
    </style>
</head>
<body class="selection:bg-hot">

    <!-- NAVIGATION -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 bg-transparent">
        <div class="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
            <div class="flex items-center gap-8">
                <a href="/" class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-hot flex items-center justify-center rotate-3 shadow-lg shadow-hot/20">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-white">
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                        </svg>
                    </div>
                    <span class="text-2xl font-[900] tracking-tighter"><?php echo substr($site_name, 0, 5); ?><span class="text-hot"><?php echo substr($site_name, 5); ?></span></span>
                </a>
                <div class="hidden md:flex items-center gap-6">
                    <?php foreach ($nav_links as $link): ?>
                        <a href="#" class="nav-link"><?php echo $link; ?></a>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <button class="hidden sm:block text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">Log In</button>
                <button class="btn-primary px-6 py-2.5 text-sm uppercase tracking-wide">Get Started</button>
            </div>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.pexels.com/photos/14488406/pexels-photo-14488406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600" alt="Nightclub DJ" class="w-full h-full object-cover scale-105">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        <div class="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
            <div class="max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                    <span class="w-2 h-2 rounded-full bg-hot animate-pulse"></span>
                    Now Playing in 140+ Venues
                </div>
                <h1 class="text-5xl md:text-7xl font-[900] leading-[1.05] tracking-tight mb-6">
                    The World is Your <br/>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#3a86ff]">Main Stage</span>
                </h1>
                <p class="text-xl md:text-2xl text-zinc-400 font-medium mb-10 max-w-xl">
                    Turn any venue into a high-energy karaoke lounge. Pro-grade console, mobile singer app, and real-time syncing.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <button class="btn-primary px-10 py-4 text-lg">Launch Console</button>
                    <button class="px-10 py-4 rounded-full border-2 border-white/20 font-bold hover:bg-white/10 transition-colors">Find a Venue</button>
                </div>
            </div>
        </div>

        <!-- Floating Card -->
        <div class="absolute bottom-20 right-10 hidden xl:block w-72 glass rounded-2xl p-4 smule-shadow">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff006e] to-[#8338ec] flex items-center justify-center text-white font-bold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                    </svg>
                </div>
                <div>
                    <div class="text-[10px] font-black text-hot tracking-widest uppercase">Now Singing</div>
                    <div class="text-sm font-bold">Bohemian Rhapsody</div>
                </div>
            </div>
            <div class="flex -space-x-2 mb-3">
                <?php for($i=0; $i<4; $i++): ?>
                    <div class="w-8 h-8 rounded-full border-2 border-[#161618] bg-zinc-800"></div>
                <?php endfor; ?>
                <div class="w-8 h-8 rounded-full border-2 border-[#161618] bg-hot flex items-center justify-center text-[10px] font-bold">+18</div>
            </div>
            <div class="h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-hot w-2/3"></div>
            </div>
        </div>
    </section>

    <!-- FEATURES -->
    <section class="bg-[#0a0a0c] py-24">
        <div class="max-w-[1200px] mx-auto px-6">
            <div class="grid lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 relative h-[400px] rounded-[32px] overflow-hidden group">
                    <img src="https://images.pexels.com/photos/29298514/pexels-photo-29298514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Singing together">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div class="absolute bottom-10 left-10">
                        <h3 class="text-3xl font-black mb-2 uppercase">Mobile Singer App</h3>
                        <p class="text-white/80 max-w-md">Search 100k+ songs, join the queue instantly, and tip to bump your song.</p>
                    </div>
                </div>
                <div class="glass rounded-[32px] p-8 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-2xl bg-[#8338ec]/20 flex items-center justify-center mb-6 text-[#8338ec]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                        </div>
                        <h3 class="text-2xl font-black mb-4 uppercase">Pro Graphics</h3>
                        <p class="text-zinc-400 text-sm leading-relaxed">Studio-quality lyrics overlay with chroma key support. Syncs with your lighting setup.</p>
                    </div>
                    <button class="text-hot font-bold flex items-center gap-2 group mt-8">
                        Learn about Console <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- APP GRID -->
    <section class="py-24 bg-black">
        <div class="max-w-[1200px] mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <?php foreach ($features as $f): ?>
                    <div class="glass rounded-[24px] p-6 hover:border-white/20 transition-colors">
                        <div class="w-8 h-8 <?php echo $f['c']; ?> rounded-lg mb-4"></div>
                        <h4 class="font-black text-sm uppercase mb-1"><?php echo $f['t']; ?></h4>
                        <p class="text-xs text-zinc-400"><?php echo $f['d']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-white/5 bg-[#0a0a0c] pt-20 pb-10">
        <div class="max-w-[1200px] mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                <div class="col-span-2">
                    <span class="text-xl font-black tracking-tighter uppercase"><?php echo $site_name; ?></span>
                    <p class="text-zinc-400 text-sm max-w-xs mt-4">Empowering karaoke venues with cutting-edge technology. Built by music lovers.</p>
                </div>
                <div>
                    <h5 class="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Product</h5>
                    <ul class="space-y-4 text-sm font-bold">
                        <li><a href="#" class="hover:text-hot">Console</a></li>
                        <li><a href="#" class="hover:text-hot">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">Social</h5>
                    <ul class="space-y-4 text-sm font-bold">
                        <li><a href="#" class="hover:text-hot">TikTok</a></li>
                        <li><a href="#" class="hover:text-hot">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-[10px] font-bold text-white/30 uppercase tracking-widest pt-10 border-t border-white/5">
                © <?php echo $current_year; ?> <?php echo $site_name; ?> Inc. All rights reserved.
            </div>
        </div>
    </footer>

    <script>
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('glass', 'py-3');
                nav.classList.remove('py-5', 'bg-transparent');
            } else {
                nav.classList.remove('glass', 'py-3');
                nav.classList.add('py-5', 'bg-transparent');
            }
        });
    </script>
</body>
</html>
