/**
 * SERENDIB · SRI LANKA — Interactive Static Client Application
 * Pure Vanilla ES6+ JavaScript · Zero External Runtime Dependencies
 */

(() => {
  'use strict';

  /* ========================================================================
     1. Rich Field Guide Data for Destinations & Waypoints
     ======================================================================== */
  const DESTINATIONS = {
    sigiriya: {
      id: 'sigiriya',
      name: 'Sigiriya Lion Rock Citadel',
      region: 'Cultural Triangle · Central Province',
      image: './assets/images/sigiriya-hero.jpg',
      description:
        'Rising 200 meters sheer above the central plains, King Kashyapa I’s 5th-century fortress-palace blends hydraulic engineering, symmetrical water gardens, ancient frescoes, and colossal carved lion paws guarding the final skyward stair.',
      transit: '3.5 hrs from Colombo Airport (CMB) via Kurunegala Highway',
      entry: '$36 USD Foreign Adult (CCF Heritage Ticket)',
      goldenHour: 'Arrive at 06:30 AM gate opening; climb neighboring Pidurangala Rock at 04:45 PM for sunset.',
      mapInfo: '3.5 hrs NE of Colombo · Climb at 06:30 AM before midday heat; pair with Pidurangala sunset.'
    },
    ella: {
      id: 'ella',
      name: 'Ella & Nine Arch Viaduct',
      region: 'Uva Tea Highlands · 1,041m Elevation',
      image: './assets/images/ella-train.jpg',
      description:
        'Cradled in cool mountain mist looking out through Ella Gap to the southern plains, Ella is the culmination of the famous Main Line railway—home to the 1921 colonial stone Nine Arch Bridge, Little Adam’s Peak, and Ravana Falls.',
      transit: '6.5 hrs scenic train from Kandy (08:47 AM or 11:10 AM departure)',
      entry: 'Free access to Nine Arch Bridge & Little Adam’s Peak trails',
      goldenHour: 'Catch the 06:40 AM or 09:30 AM blue train crossing Nine Arch Bridge from the tea-slope viewpoint.',
      mapInfo: '1,041m Highland Pass · Famous for the Nine Arch Bridge, Ella Rock, and misty Ceylon tea estates.'
    },
    mirissa: {
      id: 'mirissa',
      name: 'Mirissa & Coconut Tree Hill',
      region: 'Southern Coast · Indian Ocean',
      image: './assets/images/mirissa-beach.jpg',
      description:
        'A palm-draped crescent bay along Sri Lanka’s deep continental shelf where blue whales and spinner dolphins pass close to shore between November and April, framed by Coconut Tree Hill and Secret Beach.',
      transit: '2 hrs from Colombo via Southern Expressway (E01) to Matara',
      entry: 'Free beaches · Ethical whale boats ~$65 USD',
      goldenHour: 'Walk out onto the red-laterite Coconut Tree Hill headland at 05:30 PM as rollers catch amber light.',
      mapInfo: 'Southern Surf & Whale Corridor · Calm turquoise bays from November through April.'
    },
    galle: {
      id: 'galle',
      name: 'Galle Dutch Fort',
      region: 'UNESCO Heritage Coast · Southern Province',
      image: './assets/images/galle-fort.jpg',
      description:
        'Built first by the Portuguese in 1588 and extensively fortified by the Dutch East India Company (VOC) from 1649, Galle Fort’s coral-and-granite sea walls enclose cobblestone lanes, verandah cafes, and the iconic 1939 lighthouse.',
      transit: '1 hr 45 mins from Colombo via Southern Expressway or coastal rail',
      entry: 'Free entry · Walk the full 2.6 km rampart circuit',
      goldenHour: 'Stroll from Point Utrecht Lighthouse to Flag Rock Bastion between 05:15 PM and 06:15 PM.',
      mapInfo: '16th-Century Walled Quarter · Walk ocean ramparts at dusk and dine in restored merchant courtyards.'
    },
    yala: {
      id: 'yala',
      name: 'Yala National Park (Ruhuna)',
      region: 'Southeastern Dry-Zone Wilderness',
      image: './assets/images/yala-leopard.jpg',
      description:
        'Where monsoon scrub jungle meets Indian Ocean dunes and granitic outcrops (inselbergs), Yala protects Sri Lankan leopards (Panthera pardus kotiya), tusked elephants, sloth bears, mugger crocodiles, and painted storks.',
      transit: '1.5 hrs descent from Ella via Wellawaya & Tissamaharama',
      entry: '~$43 USD Park Permit + Private 4x4 Safari Jeep (~$65 USD)',
      goldenHour: 'Book a 05:30 AM dawn entry into Block 1 or quieter Block 5 to track leopards on cool granite rocks.',
      mapInfo: 'Dry-Zone Wildlife Sanctuary · Highest density of wild leopards (Panthera pardus kotiya).'
    },
    kandy: {
      id: 'kandy',
      name: 'Kandy & Temple of the Sacred Tooth',
      region: 'Sacred Hill Capital · 500m Elevation',
      image: './assets/images/kandy-temple.jpg',
      description:
        'Surrounded by biodiverse Udawattakele forest hills, Kandy preserved Sri Lankan independence until 1815. Its heart is the golden-roofed Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) beside tranquil Kandy Lake.',
      transit: '3 hrs from Colombo or 2.5 hrs south from Sigiriya via Matale spice gardens',
      entry: '~$7 USD (2,000 LKR) Temple Sanctuary Ticket',
      goldenHour: 'Attend the 06:30 PM evening Puja drumming ceremony as oil lamps reflect across the temple moat.',
      mapInfo: 'UNESCO Royal Hill Capital · Gateway to the highland railway and home of Sri Dalada Maligawa.'
    },
    colombo: {
      id: 'colombo',
      name: 'Colombo Port & Heritage Quarter',
      mapInfo: 'Island Gateway (CMB) · Dutch Hospital dining, Geoffrey Bawa architecture, and Galle Face sunset.'
    },
    trincomalee: {
      id: 'trincomalee',
      name: 'Trincomalee & Nilaveli (East Coast)',
      mapInfo: 'East Coast Gem · Powder-white sands, Pigeon Island coral reef, and Koneswaram cliff temple (Best May–Sep).'
    }
  };

  /* ========================================================================
     2. Curated Multi-Day Route Circuits & SVG Map Coordinates
     ======================================================================== */
  const ROUTES = {
    '7day': {
      distance: '~460 km',
      highlightLeg: 'Kandy \u2192 Ella Scenic Highland Rail',
      pace: 'Fast-Paced Classic',
      polyline: '86,338 172,195 166,282 198,342 108,436',
      nodes: ['colombo', 'sigiriya', 'kandy', 'ella', 'galle'],
      stops: [
        {
          days: 'Day 1–2',
          title: 'Sigiriya & Dambulla Cave Temples',
          desc: 'Transfer from CMB airport to the Cultural Triangle. Dawn ascent of Lion Rock and cycling through ancient Polonnaruwa.'
        },
        {
          days: 'Day 3–4',
          title: 'Kandy Royal Capital & Botanical Gardens',
          desc: 'Visit Matale heritage spice gardens en route to Kandy Lake and the evening drumming ritual at the Temple of the Tooth.'
        },
        {
          days: 'Day 5–6',
          title: 'Blue Train to Ella & Nine Arch Bridge',
          desc: 'Board the highland observation train winding through Nuwara Eliya cloud forests to Ella Gap and Little Adam’s Peak.'
        },
        {
          days: 'Day 7',
          title: 'Galle Dutch Fort & Coastal Return',
          desc: 'Descend to the southern coast for lunch inside 17th-century Galle Fort ramparts before Expressway transfer to Colombo.'
        }
      ]
    },
    '10day': {
      distance: '~690 km',
      highlightLeg: 'Kandy \u2192 Ella Rail + Yala Leopard Safari',
      pace: '2 Nights per Base',
      polyline: '86,338 172,195 166,282 198,342 246,396 154,454 108,436',
      nodes: ['colombo', 'sigiriya', 'kandy', 'ella', 'yala', 'mirissa', 'galle'],
      stops: [
        {
          days: 'Day 1–2',
          title: 'Sigiriya Sky Citadel & Minneriya Elephants',
          desc: 'Early climb up Sigiriya water gardens and frescoes, followed by an afternoon 4x4 safari watching wild elephant herds.'
        },
        {
          days: 'Day 3–4',
          title: 'Kandy Sacred City & Ceylon Tea Tasting',
          desc: 'Explore Peradeniya Royal orchids, Kandy Lake, and a working 19th-century high-grown tea factory in Giragama.'
        },
        {
          days: 'Day 5–6',
          title: 'Scenic Highland Railway to Ella',
          desc: 'Cross misty viaducts and waterfalls into Ella; hike Ella Rock at sunrise and watch trains traverse Nine Arch Bridge.'
        },
        {
          days: 'Day 7–8',
          title: 'Yala National Park Wilderness Camp',
          desc: 'Descend past Ravana Falls to Tissamaharama for dawn and dusk game drives tracking Sri Lankan leopards and sloth bears.'
        },
        {
          days: 'Day 9–10',
          title: 'Mirissa Coconut Hill & Galle Dutch Ramparts',
          desc: 'Unwind on palm-fringed southern bays, sail out for blue whales, and toast sunset along Galle Fort’s lighthouse walls.'
        }
      ]
    },
    '14day': {
      distance: '~1,080 km',
      highlightLeg: 'East Coast Lagoons + Highland Rail + South Coast',
      pace: 'Slow Immersive Odyssey',
      polyline: '86,338 172,195 234,156 166,282 198,342 246,396 154,454 108,436 86,338',
      nodes: ['colombo', 'sigiriya', 'trincomalee', 'kandy', 'ella', 'yala', 'mirissa', 'galle'],
      stops: [
        {
          days: 'Day 1–3',
          title: 'Anuradhapura, Sigiriya & Polonnaruwa',
          desc: 'Immerse in 2,300 years of hydraulic civilization across Sri Lanka’s sacred Bodhi tree shrines and rock fortresses.'
        },
        {
          days: 'Day 4–5',
          title: 'Trincomalee & Pigeon Island Coral Reefs',
          desc: 'Head east to Nilaveli’s calm beaches, snorkel with blacktip reef sharks, and visit cliffside Koneswaram Kovil.'
        },
        {
          days: 'Day 6–8',
          title: 'Kandy, Nuwara Eliya Tea Bungalows & Horton Plains',
          desc: 'Stay in a colonial planter’s bungalow at 1,868m and trek to World’s End sheer escarpment at daybreak.'
        },
        {
          days: 'Day 9–11',
          title: 'Ella Viaducts & Yala Leopard Sanctuary',
          desc: 'Ride the final mountain rail loop into Ella before two days of coastal dry-zone safari exploration in Yala.'
        },
        {
          days: 'Day 12–14',
          title: 'Tangalle, Mirissa, Galle Fort & Colombo Bawa Trail',
          desc: 'Follow the palm coastline west to Galle Fort and conclude with Geoffrey Bawa architectural landmarks in Colombo.'
        }
      ]
    }
  };

  /* ========================================================================
     3. 12-Month Dual-Monsoon Climate & Festival Data
     ======================================================================== */
  const SEASONS = [
    {
      month: 'January — Peak Southern Sunshine',
      verdict: 'Dry, sun-drenched days across the South & West coasts and crisp highland mornings; ideal all-island conditions.',
      south: [95, '95% Peak Dry'],
      hill: [90, '90% Crisp & Clear'],
      culture: [86, '86% Pleasant'],
      east: [55, '55% Late Maha Breeze'],
      bestRoute: 'South Coast Surf, Galle Fort & Adam’s Peak Pilgrimage',
      packing: 'Light UV breathable linens, reef-safe sunscreen, and a warm sweater for early highland treks.',
      festival: 'Duruthu Perahera in Kelaniya & peak Mirissa blue whale sightings.'
    },
    {
      month: 'February — Sapphire Seas & Leopard Safaris',
      verdict: 'Statistically the driest month island-wide. Calmest ocean visibility for diving and whale watching in Mirissa and Weligama.',
      south: [96, '96% Glassy Seas'],
      hill: [92, '92% Sunny Trails'],
      culture: [90, '90% Dry & Warm'],
      east: [68, '68% Clearing Skies'],
      bestRoute: 'Grand 10-Day Citadels, Tea & Southern Bays',
      packing: 'Polarized sunglasses for safari glare, light cottons, and a windproof layer for Horton Plains.',
      festival: 'National Independence Day (Feb 4) & Navam Perahera around Colombo’s Gangaramaya Temple.'
    },
    {
      month: 'March — Golden Plains & Highland Clarity',
      verdict: 'Warm tropical sunshine from Galle to Sigiriya, with receding waterholes drawing wildlife into open view in Yala.',
      south: [92, '92% Warm & Sunny'],
      hill: [90, '90% Clear Views'],
      culture: [92, '92% Dry Season'],
      east: [80, '80% Calm Lagoons'],
      bestRoute: 'Yala Wildlife Safari, Ella Rail & Bentota Coast',
      packing: 'Wide-brimmed sun hat, hydration electrolytes for Sigiriya climbs, and light evening resort wear.',
      festival: 'Peak pilgrimage season up Sri Pada (Adam’s Peak) lit by trailside lanterns.'
    },
    {
      month: 'April — Sinhala & Tamil New Year (Avurudu)',
      verdict: 'Both coasts enjoy warm seas during the spring transition, while the whole island celebrates the harvest New Year.',
      south: [84, '84% Warm Swells'],
      hill: [82, '82% Lush Tea Flush'],
      culture: [85, '85% Tropical Sun'],
      east: [86, '86% Season Opening'],
      bestRoute: 'Cultural Triangle & Dual-Coast Transition',
      packing: 'Breathable natural fabrics and modest white attire if visiting temples during New Year festivities.',
      festival: 'Aluth Avurudu (Apr 13–14): island-wide hearth rituals, sweetmeats (kokis, kavum), and village games.'
    },
    {
      month: 'May — East Coast Awakening & Vesak Lanterns',
      verdict: 'As the southwest Yala monsoon brings dramatic showers to the south, the East Coast opens with calm, crystal-clear waters.',
      south: [55, '55% Monsoon Surf'],
      hill: [68, '68% Misty Waterfalls'],
      culture: [84, '84% Warm & Dry'],
      east: [92, '92% Prime Beach'],
      bestRoute: 'Sigiriya, Polonnaruwa & Trincomalee Coral Bays',
      packing: 'Snorkel gear for Pigeon Island, light cotton clothing, and a compact travel umbrella.',
      festival: 'Vesak Full Moon Poya: streets across Sri Lanka glow with intricate bamboo paper lanterns and free dansal food stalls.'
    },
    {
      month: 'June — Arugam Bay Surf & East Coast Sun',
      verdict: 'Endless blue skies along the eastern shoreline from Pasikudah to Arugam Bay, paired with dry Cultural Triangle exploration.',
      south: [58, '58% Breezy Swells'],
      hill: [72, '72% Emerald Mist'],
      culture: [90, '90% Sunny & Dry'],
      east: [96, '96% Peak East Coast'],
      bestRoute: 'Cultural Triangle, Knuckles Range & Arugam Bay',
      packing: 'Rashguard, reef sandals, binoculars for dry-zone elephant gatherings, and light layers.',
      festival: 'Poson Poya at Mihintale (cradle of Sri Lankan Buddhism) & international surf point breaks at Arugam Bay.'
    },
    {
      month: 'July — The Great Elephant Gathering',
      verdict: 'Dry-zone reservoirs in Minneriya and Kaudulla draw hundreds of wild Asian elephants—one of Asia’s greatest wildlife spectacles.',
      south: [64, '64% Sunny Breaks'],
      hill: [75, '75% Cool Highland Breeze'],
      culture: [92, '92% Prime Safari'],
      east: [96, '96% Crystal Waters'],
      bestRoute: 'Minneriya Safari, Trincomalee & Kandy Highlands',
      packing: 'Neutral earth-toned safari clothing, telephoto camera lens, and light summer wear.',
      festival: 'Kataragama Esala Festival in the deep south & Minneriya Elephant Gathering.'
    },
    {
      month: 'August — Kandy Esala Perahera Pageantry',
      verdict: 'The cultural pinnacle of the year in Kandy, accompanied by prime beach weather on the East Coast and dry northern plains.',
      south: [68, '68% Pleasant Bays'],
      hill: [80, '80% Festive & Crisp'],
      culture: [92, '92% Clear Skies'],
      east: [94, '94% Prime Sun'],
      bestRoute: 'Kandy Perahera, Sigiriya & East Coast Beaches',
      packing: 'Book Kandy seats early; bring respectful white temple attire and comfortable walking sandals.',
      festival: 'Kandy Esala Perahera: ten nights of fire-dancers, Kandyan drummers, and ceremonial processions.'
    },
    {
      month: 'September — Golden Shoulder & Quiet Trails',
      verdict: 'Fewer crowds at UNESCO monuments, warm East Coast swims, and dramatic cloudscapes across Ella and Horton Plains.',
      south: [66, '66% Shoulder Sun'],
      hill: [76, '76% Dramatic Vistas'],
      culture: [88, '88% Dry & Quiet'],
      east: [88, '88% Warm Lagoons'],
      bestRoute: 'Sigiriya, Ella Highland Rail & Arugam Bay',
      packing: 'Hiking shoes for Little Adam’s Peak and a light rain shell for late-afternoon tropical showers.',
      festival: 'Binara Full Moon Poya & late-season elephant gatherings at Kaudulla National Park.'
    },
    {
      month: 'October — Lush Waterfalls & Boutique Value',
      verdict: 'The inter-monsoon brings dramatic late-afternoon rain and roaring highland waterfalls, alongside sunny morning windows and boutique hotel value.',
      south: [65, '65% Morning Sun'],
      hill: [70, '70% Roaring Falls'],
      culture: [76, '76% Emerald Green'],
      east: [65, '65% Inter-Monsoon'],
      bestRoute: 'Cultural Triangle Heritage & Luxury Tea Estate Retreats',
      packing: 'Waterproof daypack cover, quick-dry trail footwear, and cozy layers for reading on tea-bungalow verandahs.',
      festival: 'Deepavali (Festival of Lights) celebrated brightly across Hindu kovils in Colombo, Jaffna, and the tea highlands.'
    },
    {
      month: 'November — South Coast Awakening',
      verdict: 'Inter-monsoon showers clear toward crisp mornings; southern bays open for whale watching and early-season surf.',
      south: [85, '85% Prime'],
      hill: [78, '78% Crisp Mornings'],
      culture: [80, '80% Lush Green'],
      east: [40, '40% Maha Showers'],
      bestRoute: 'Galle Ramparts & Misty Highland Rail',
      packing: 'Pack breathable linen for humid coastal afternoons, a light rain shell for brief dusk showers, and a warm fleece layer for 14°C nights in Nuwara Eliya.',
      festival: 'Il Full Moon Poya illuminations & opening of the Mirissa blue whale migration channel.'
    },
    {
      month: 'December — Festive South Coast & Highland Mist',
      verdict: 'Peak winter sunshine returns to Galle, Weligama, and Mirissa, paired with cool, pine-scented mornings in the central hills.',
      south: [92, '92% Festive Sun'],
      hill: [86, '86% Crisp & Cool'],
      culture: [84, '84% Pleasant'],
      east: [42, '42% Northeast Monsoon'],
      bestRoute: '10-Day Classic: Sigiriya, Kandy, Ella & Southern Coast',
      packing: 'Swimwear, resort linens for Galle Fort dinners, and a light sweater for highland train journeys.',
      festival: 'Unduvap Poya (commemorating arrival of the sacred Bodhi sapling in 288 BCE) & coastal festive celebrations.'
    }
  ];

  /* ========================================================================
     4. Application State (with localStorage persistence)
     ======================================================================== */
  const STORAGE_KEY = 'serendib_saved_stops_v1';
  let savedStops = new Set(['sigiriya', 'ella', 'mirissa']);
  let currentModalDestId = null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        savedStops = new Set(parsed);
      }
    }
  } catch (_) {
    // Ignore storage errors in restricted browsing modes
  }

  function persistSavedStops() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedStops]));
    } catch (_) {
      // No-op
    }
  }

  /* ========================================================================
     5. Header Scroll Behavior, Mobile Menu & Live Colombo Clock
     ======================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const colomboClock = document.getElementById('colomboClock');

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  if (mobileMenuBtn && siteHeader && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = siteHeader.classList.toggle('menu-open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteHeader.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function updateColomboClock() {
    if (!colomboClock) return;
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      colomboClock.textContent = `CMB ${formatter.format(new Date())} IST`;
    } catch (_) {
      colomboClock.textContent = 'CMB UTC+5:30';
    }
  }
  updateColomboClock();
  setInterval(updateColomboClock, 30000);

  /* ========================================================================
     6. Destination Filter Pills & Save-to-Route Sync
     ======================================================================== */
  const filterPills = document.querySelectorAll('.filter-pill');
  const destCards = document.querySelectorAll('.dest-card');
  const savedCountBadge = document.getElementById('savedCountBadge');
  const plannerStopChips = document.getElementById('plannerStopChips');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const region = pill.getAttribute('data-filter');
      filterPills.forEach((p) => {
        p.classList.toggle('is-active', p === pill);
        p.setAttribute('aria-selected', String(p === pill));
      });

      destCards.forEach((card) => {
        const cardRegion = card.getAttribute('data-region');
        const matches = region === 'all' || cardRegion === region;
        card.hidden = !matches;
      });
    });
  });

  function renderSavedStateUI() {
    if (savedCountBadge) {
      savedCountBadge.textContent = String(savedStops.size);
    }

    document.querySelectorAll('[data-save-id]').forEach((btn) => {
      const id = btn.getAttribute('data-save-id');
      const isSaved = savedStops.has(id);
      btn.classList.toggle('is-saved', isSaved);
      btn.innerHTML = isSaved ? '&#10003;' : '+';
      btn.setAttribute('aria-pressed', String(isSaved));
    });

    if (plannerStopChips) {
      plannerStopChips.innerHTML = '';
      ['sigiriya', 'ella', 'mirissa', 'galle', 'yala', 'kandy'].forEach((id) => {
        const dest = DESTINATIONS[id];
        if (!dest) return;
        const isSelected = savedStops.has(id);
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `stop-chip${isSelected ? ' is-selected' : ''}`;
        chip.setAttribute('aria-pressed', String(isSelected));
        chip.innerHTML = `<span>${isSelected ? '&#10003;' : '+'}</span><span>${dest.name.split('&')[0].trim()}</span>`;
        chip.addEventListener('click', () => {
          toggleStopInItinerary(id);
        });
        plannerStopChips.appendChild(chip);
      });
    }

    if (currentModalDestId) {
      const modalSaveBtn = document.getElementById('modalSaveToggleBtn');
      if (modalSaveBtn) {
        const isSaved = savedStops.has(currentModalDestId);
        modalSaveBtn.textContent = isSaved ? '✓ Saved in Your Route' : 'Add to My Route';
      }
    }

    recalculateBudget();
  }

  function toggleStopInItinerary(id) {
    if (savedStops.has(id)) {
      if (savedStops.size > 1) {
        savedStops.delete(id);
      }
    } else {
      savedStops.add(id);
    }
    persistSavedStops();
    renderSavedStateUI();
  }

  document.querySelectorAll('[data-save-id]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-save-id');
      if (id) toggleStopInItinerary(id);
    });
  });

  /* ========================================================================
     7. Destination Field Guide Modal
     ======================================================================== */
  const destModal = document.getElementById('destModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissSecondary = document.getElementById('modalDismissSecondary');
  const modalSaveToggleBtn = document.getElementById('modalSaveToggleBtn');

  function openDestModal(id) {
    const data = DESTINATIONS[id];
    if (!data || !destModal) return;
    currentModalDestId = id;

    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.name;
    document.getElementById('modalRegion').textContent = data.region;
    document.getElementById('modalTitle').textContent = data.name;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalTransit').textContent = data.transit;
    document.getElementById('modalEntry').textContent = data.entry;
    document.getElementById('modalGolden').textContent = data.goldenHour;

    renderSavedStateUI();

    destModal.hidden = false;
    requestAnimationFrame(() => {
      destModal.classList.add('is-open');
      if (modalCloseBtn) modalCloseBtn.focus();
    });
  }

  function closeDestModal() {
    if (!destModal) return;
    destModal.classList.remove('is-open');
    setTimeout(() => {
      destModal.hidden = true;
      currentModalDestId = null;
    }, 220);
  }

  document.querySelectorAll('[data-inspect-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openDestModal(btn.getAttribute('data-inspect-id'));
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDestModal);
  if (modalDismissSecondary) modalDismissSecondary.addEventListener('click', closeDestModal);
  if (modalSaveToggleBtn) {
    modalSaveToggleBtn.addEventListener('click', () => {
      if (currentModalDestId) toggleStopInItinerary(currentModalDestId);
    });
  }

  if (destModal) {
    destModal.addEventListener('click', (e) => {
      if (e.target === destModal) closeDestModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && destModal && !destModal.hidden) {
      closeDestModal();
    }
  });

  /* ========================================================================
     8. Interactive Route Circuits & Sri Lanka SVG Waypoint Atlas
     ======================================================================== */
  const routeTabs = document.querySelectorAll('.route-tab');
  const routeDistance = document.getElementById('routeDistance');
  const routeHighlightLeg = document.getElementById('routeHighlightLeg');
  const routePace = document.getElementById('routePace');
  const routeStopsList = document.getElementById('routeStopsList');
  const mapRoutePolyline = document.getElementById('mapRoutePolyline');
  const mapNodes = document.querySelectorAll('.map-node');
  const mapReadoutName = document.getElementById('mapReadoutName');
  const mapReadoutInfo = document.getElementById('mapReadoutInfo');

  function renderRoute(routeKey) {
    const route = ROUTES[routeKey];
    if (!route) return;

    if (routeDistance) routeDistance.textContent = route.distance;
    if (routeHighlightLeg) routeHighlightLeg.textContent = route.highlightLeg;
    if (routePace) routePace.textContent = route.pace;

    if (mapRoutePolyline) {
      mapRoutePolyline.setAttribute('points', route.polyline);
    }

    mapNodes.forEach((node) => {
      const nodeId = node.getAttribute('data-node');
      node.classList.toggle('is-in-route', route.nodes.includes(nodeId));
    });

    if (routeStopsList) {
      routeStopsList.innerHTML = '';
      route.stops.forEach((stop) => {
        const li = document.createElement('li');
        li.className = 'route-stop-item';
        li.innerHTML = `
          <span class="route-day-pill">${stop.days}</span>
          <div>
            <div class="route-stop-title">${stop.title}</div>
            <p class="route-stop-desc">${stop.desc}</p>
          </div>
        `;
        routeStopsList.appendChild(li);
      });
    }
  }

  routeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-route');
      routeTabs.forEach((t) => {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', String(t === tab));
      });
      renderRoute(key);

      const daysInput = document.getElementById('planDays');
      if (daysInput) {
        daysInput.value = key === '7day' ? '7' : key === '14day' ? '14' : '10';
        recalculateBudget();
      }
    });
  });

  function selectMapWaypoint(nodeId) {
    const info = DESTINATIONS[nodeId];
    if (!info) return;

    mapNodes.forEach((n) => {
      n.classList.toggle('is-selected', n.getAttribute('data-node') === nodeId);
    });

    if (mapReadoutName) mapReadoutName.textContent = info.name;
    if (mapReadoutInfo) mapReadoutInfo.textContent = info.mapInfo;
  }

  mapNodes.forEach((node) => {
    node.addEventListener('click', () => {
      selectMapWaypoint(node.getAttribute('data-node'));
    });
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectMapWaypoint(node.getAttribute('data-node'));
      }
    });
  });

  renderRoute('10day');

  /* ========================================================================
     9. Dual-Monsoon 12-Month Compass
     ======================================================================== */
  const monthBtns = document.querySelectorAll('.month-btn');

  function renderSeasonMonth(monthIdx) {
    const s = SEASONS[monthIdx];
    if (!s) return;

    document.getElementById('seasonMonthHeading').textContent = s.month;
    document.getElementById('seasonVerdict').textContent = s.verdict;

    const updateBar = (barId, textId, tuple) => {
      const [pct, label] = tuple;
      const bar = document.getElementById(barId);
      const txt = document.getElementById(textId);
      if (bar) {
        bar.style.width = `${pct}%`;
        bar.style.backgroundColor = pct >= 80 ? '#1B4D3E' : pct >= 65 ? '#D49B35' : '#A08B73';
      }
      if (txt) txt.textContent = label;
    };

    updateBar('rateSouthBar', 'rateSouthText', s.south);
    updateBar('rateHillBar', 'rateHillText', s.hill);
    updateBar('rateCultureBar', 'rateCultureText', s.culture);
    updateBar('rateEastBar', 'rateEastText', s.east);

    document.getElementById('seasonBestRoute').textContent = s.bestRoute;
    document.getElementById('seasonPackingTip').textContent = s.packing;
    document.getElementById('seasonFestivalText').textContent = s.festival;
  }

  monthBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-month'));
      monthBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      renderSeasonMonth(idx);
    });
  });

  // Initialize to current month automatically
  const activeMonthIndex = new Date().getMonth();
  monthBtns.forEach((b) => {
    b.classList.toggle('is-active', Number(b.getAttribute('data-month')) === activeMonthIndex);
  });
  renderSeasonMonth(activeMonthIndex);

  /* ========================================================================
     10. Interactive Ground Budget Estimator & Dossier Exporter
     ======================================================================== */
  const planDaysInput = document.getElementById('planDays');
  const planTravelersSelect = document.getElementById('planTravelers');
  const planCurrencySelect = document.getElementById('planCurrency');
  const tierBtns = document.querySelectorAll('.tier-btn');
  const copyBriefBtn = document.getElementById('copyBriefBtn');
  const downloadBriefBtn = document.getElementById('downloadBriefBtn');
  const plannerToast = document.getElementById('plannerToast');

  const CURRENCY_RATES = {
    USD: { symbol: '$', rate: 1, code: 'USD' },
    EUR: { symbol: '€', rate: 0.92, code: 'EUR' },
    GBP: { symbol: '£', rate: 0.79, code: 'GBP' },
    AUD: { symbol: 'A$', rate: 1.52, code: 'AUD' },
    LKR: { symbol: 'Rs ', rate: 300, code: 'LKR' }
  };

  let activeTier = { name: 'Boutique & Private Chauffeur', rate: 145 };

  function recalculateBudget() {
    const days = Math.max(4, Math.min(30, Number(planDaysInput?.value) || 10));
    const travelers = Number(planTravelersSelect?.value) || 2;
    const currKey = planCurrencySelect?.value || 'USD';
    const curr = CURRENCY_RATES[currKey] || CURRENCY_RATES.USD;
    const stopBonus = savedStops.size * 38 * travelers;

    const baseTotalUsd = days * travelers * activeTier.rate + stopBonus;
    const baseTotal = Math.round(baseTotalUsd * curr.rate);
    const stays = Math.round(baseTotal * 0.56);
    const transport = Math.round(baseTotal * 0.2);
    const permits = Math.round(baseTotal * 0.12);
    const dining = baseTotal - stays - transport - permits;

    const fmt = (n) => `${curr.symbol}${n.toLocaleString('en-US')}`;

    const totalEl = document.getElementById('estimateTotal');
    const lkrEquivEl = document.getElementById('estimateLkrEquiv');
    const subEl = document.getElementById('estimateSubtitle');
    if (totalEl) totalEl.textContent = fmt(baseTotal);
    if (lkrEquivEl) {
      const lkrTotal = Math.round(baseTotalUsd * CURRENCY_RATES.LKR.rate);
      lkrEquivEl.textContent =
        currKey === 'LKR'
          ? `\u2248 $${baseTotalUsd.toLocaleString('en-US')} USD`
          : `\u2248 Rs ${lkrTotal.toLocaleString('en-US')} LKR`;
    }
    if (subEl) {
      subEl.textContent = `For ${travelers} traveler${travelers > 1 ? 's' : ''} · ${days} days · ${activeTier.name} (${savedStops.size} curated stops)`;
    }

    document.getElementById('costStays').textContent = fmt(stays);
    document.getElementById('costTransport').textContent = fmt(transport);
    document.getElementById('costPermits').textContent = fmt(permits);
    document.getElementById('costDining').textContent = fmt(dining);
  }

  if (planDaysInput) planDaysInput.addEventListener('input', recalculateBudget);
  if (planTravelersSelect) planTravelersSelect.addEventListener('change', recalculateBudget);
  if (planCurrencySelect) planCurrencySelect.addEventListener('change', recalculateBudget);

  tierBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tierBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      activeTier = {
        name: btn.querySelector('.tier-name')?.textContent || 'Boutique',
        rate: Number(btn.getAttribute('data-rate')) || 145
      };
      recalculateBudget();
    });
  });

  function buildItinerarySummaryText() {
    const days = planDaysInput?.value || 10;
    const travelers = planTravelersSelect?.value || 2;
    const total = document.getElementById('estimateTotal')?.textContent || '$2,900';
    const stopsList = [...savedStops]
      .map((id, i) => `  ${i + 1}. ${DESTINATIONS[id]?.name || id} (${DESTINATIONS[id]?.region || ''})`)
      .join('\n');

    return [
      '============================================================',
      'SERENDIB · SRI LANKA — CUSTOM JOURNEY FIELD BRIEF',
      '============================================================',
      `Duration        : ${days} Days`,
      `Party Size      : ${travelers} Traveler(s)`,
      `Comfort Style   : ${activeTier.name}`,
      `Estimated Budget: ${total} USD (Ground stays, transit, permits & dining)`,
      '',
      'SELECTED ISLAND WAYPOINTS:',
      stopsList,
      '',
      'KEY LOGISTICS REMINDERS:',
      '  - Book Kandy -> Ella scenic rail seats 30 days in advance.',
      '  - Complete Sri Lanka Tourist ETA online before boarding.',
      '  - Emergency Tourist Hotline in Sri Lanka: 1912',
      '============================================================'
    ].join('\n');
  }

  function showToast(msg) {
    if (!plannerToast) return;
    plannerToast.textContent = msg;
    setTimeout(() => {
      if (plannerToast.textContent === msg) plannerToast.textContent = '';
    }, 4000);
  }

  if (copyBriefBtn) {
    copyBriefBtn.addEventListener('click', async () => {
      const text = buildItinerarySummaryText();
      try {
        await navigator.clipboard.writeText(text);
        showToast('✓ Copied Sri Lanka itinerary summary to clipboard!');
      } catch (_) {
        showToast('✓ Summary ready—use Download .TXT button below.');
      }
    });
  }

  if (downloadBriefBtn) {
    downloadBriefBtn.addEventListener('click', () => {
      const text = buildItinerarySummaryText();
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sri-lanka-itinerary-brief.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast('✓ Downloaded sri-lanka-itinerary-brief.txt');
    });
  }

  // Initial UI render
  renderSavedStateUI();
})();
