/* =========================================================
   ANISH C.P — ADVANCED SCROLL & MODERN BENTO CONTROLLER
   Theme: Electric Emerald, Hyper Cobalt & Obsidian Luxe
   Features: Lenis v1.1+, GSAP ScrollTrigger, Parallax, Telemetry
   ========================================================= */

/* ---------------------------------------------------------
   1. CENTRALIZED PORTFOLIO DATA (FACTUAL & EDITABLE)
--------------------------------------------------------- */
const portfolioData = {
  personal: {
    name: "Anish C.P",
    role: "AI & Data Science Student · Embedded IoT Builder · Software Developer",
    status: "Open to Opportunities",
    location: "Kanyakumari / Chennai, Tamil Nadu, IN",
    college: "Prince Dr. K. Vasudevan College of Engineering and Technology (PDKVCET)",
    batch: "Class of 2027",
    email: "c.anish.p@gmail.com",
    phone: "+91 94453 51306",
    resume: "ANISH_RESUMEE_.pdf",
    github: "https://github.com/Anishcp2006",
    linkedin: "https://www.linkedin.com/in/anish-cp/",
    typedStrings: [
      "intelligent AI & ML systems.",
      "embedded IoT that senses the physical world.",
      "robust Java & Python software.",
      "high-performance, responsive interfaces."
    ]
  },

  skills: [
    // Programming Languages
    { name: "Python", category: "prog", icon: "fa-brands fa-python", level: "Data / ML / Scripting", desc: "Core algorithms, data analysis, ML modeling, and backend scripting." },
    { name: "Java", category: "prog", icon: "fa-brands fa-java", level: "OOP & Desktop GUI", desc: "Object-oriented design, Swing applications, and JDBC database access." },
    { name: "JavaScript (ES6+)", category: "prog", icon: "fa-brands fa-js", level: "Asynchronous Web", desc: "Modern DOM manipulation, async/await, API integration, and clean logic." },
    { name: "C / C++ (Basics)", category: "prog", icon: "fa-solid fa-code", level: "Embedded Firmware", desc: "Microcontroller logic, memory considerations, and ESP32 programming." },

    // AI, Data & Cloud
    { name: "Machine Learning", category: "ai-cloud", icon: "fa-solid fa-brain", level: "Predictive Modeling", desc: "Supervised algorithms, model evaluation, and predictive pipelines." },
    { name: "Data Analytics", category: "ai-cloud", icon: "fa-solid fa-chart-line", level: "Statistical Insights", desc: "Exploratory data analysis, dataset wrangling, and actionable reporting." },
    { name: "Microsoft Azure (AZ-900)", category: "ai-cloud", icon: "fa-brands fa-microsoft", level: "Certified Fundamentals", desc: "Cloud infrastructure, storage accounts, compute instances, and SLAs." },
    { name: "Microsoft Excel", category: "ai-cloud", icon: "fa-solid fa-table-cells", level: "Advanced Worksheets", desc: "Formulas, lookup functions, pivot tables, and dataset cleaning." },

    // Embedded IoT & Sensors
    { name: "ESP32 SoC", category: "iot", icon: "fa-solid fa-microchip", level: "Dual-Core MCU", desc: "GPIO configuration, low-power modes, and edge telemetry processing." },
    { name: "Load Sensors & FSRs", category: "iot", icon: "fa-solid fa-weight-scale", level: "Pressure Telemetry", desc: "Analog voltage sampling, signal filtering, and weight calibration." },
    { name: "Wi-Fi & BLE Protocols", category: "iot", icon: "fa-solid fa-wifi", level: "Wireless Comms", desc: "Real-time MQTT, HTTP REST, and Bluetooth Low Energy broadcasting." },
    { name: "IoT Architecture", category: "iot", icon: "fa-solid fa-network-wired", level: "System Design", desc: "End-to-end edge-to-client sensor data transmission pipelines." },

    // Web & UI/UX
    { name: "HTML5 Semantic Web", category: "web", icon: "fa-brands fa-html5", level: "Accessible Markup", desc: "WCAG compliance, SEO metadata, and semantic document structure." },
    { name: "CSS3 & Design Systems", category: "web", icon: "fa-brands fa-css3-alt", level: "Flexbox / Grid / Anim", desc: "Custom variables, responsive clamp() units, and fluid micro-interactions." },
    { name: "UI/UX & Wireframing", category: "web", icon: "fa-solid fa-pen-nib", level: "Interface Prototyping", desc: "User flows, typographic hierarchy, usability heuristics, and aesthetics." },
    { name: "Responsive Engineering", category: "web", icon: "fa-solid fa-mobile-screen", level: "Cross-Device Layouts", desc: "Mobile-first layouts adapting seamlessly from 320px to 4K displays." },

    // Tools & Soft Skills
    { name: "Git Version Control", category: "tools", icon: "fa-brands fa-git-alt", level: "Source Management", desc: "Repository branching, versioning, merges, and commit history." },
    { name: "GitHub Collaboration", category: "tools", icon: "fa-brands fa-github", level: "Workflows & Hosting", desc: "Open-source collaboration, pull requests, and asset delivery." },
    { name: "VS Code Ecosystem", category: "tools", icon: "fa-solid fa-code-compare", level: "IDE & Extensions", desc: "Debugging, terminal integrations, and modern developer tooling." },
    { name: "Event Leadership", category: "tools", icon: "fa-solid fa-people-roof", level: "DIGINOVA'25 Lead", desc: "Corporate-level technical event coordination and management." }
  ],

  projects: [
    {
      id: "ridecalm",
      title: "RideCalm — Smart Train Seat Occupancy System",
      category: "iot",
      categoryLabel: "Embedded IoT & Hardware",
      featured: true,
      image: "assets/projects/ridecalm.svg",
      tagline: "IoT-powered real-time passenger seat occupancy monitoring & telemetry system",
      summary: "Developed an IoT-based smart train seat monitoring system designed to provide real-time seat occupancy tracking for passengers. The project integrates ESP32 microcontrollers, load sensors, Wi-Fi/Bluetooth communication, and embedded systems to improve commuter convenience and optimize seat utilization.",
      problem: "Commuters often face intense overcrowding and struggle to locate available seats in train coaches without physically traversing through compartments, leading to boarding bottlenecks and inefficient seat utilization.",
      solution: "Engineered a decentralized sensor array using Force Sensitive Resistors (FSRs) and load cells interfaced with ESP32 microcontrollers. The system detects seat occupancy with low latency, filters vibration noise, and transmits occupancy telemetry via Wi-Fi/Bluetooth to a mobile application interface.",
      technologies: ["ESP32 Microcontroller", "Python", "Load Sensors (FSR)", "Wi-Fi Communication", "Bluetooth BLE", "Embedded IoT Systems", "Mobile Application Interface"],
      features: [
        "Real-time weight-threshold occupancy detection (>12.5kg threshold to prevent false positives)",
        "Microcontroller edge processing with ESP32 dual-core architecture",
        "Dual communication channels: local BLE broadcast + Wi-Fi sync",
        "Low power consumption profile suitable for auxiliary rail power grids",
        "Scalable modular design for rapid retrofit across coach compartments"
      ],
      challenges: "Filtering mechanical train vibrations and inertial motion artifacts from analog load sensor signals to eliminate false occupancy triggers while maintaining low latency.",
      outcome: "Successfully demonstrated a working multi-seat prototype with sub-200ms telemetry update rates and accurate vacant/occupied seat state tracking.",
      github: "https://github.com/Anishcp2006",
      live: null
    },
    {
      id: "student-management",
      title: "Student Management System",
      category: "desktop",
      categoryLabel: "Java & Database Systems",
      featured: false,
      image: "assets/projects/student_management.svg",
      tagline: "Desktop software for streamlined academic records, attendance, and grading management",
      summary: "A robust Java-based desktop application integrated with a relational MySQL database to manage student information, academic grades, attendance records, and department reports with high reliability.",
      problem: "Manual spreadsheet management of student academic records leads to data redundancy, concurrency issues, and slow retrieval during administrative auditing.",
      solution: "Built an intuitive desktop GUI using Java Swing coupled with JDBC and MySQL. Provides structured CRUD operations, parameterized search queries, and automated grade calculations.",
      technologies: ["Java (JDK 17)", "MySQL Database", "Java Swing (GUI)", "JDBC Connector", "OOP Architecture"],
      features: [
        "Complete student profile lifecycle management (Add, Update, Search, Archive)",
        "Attendance percentage calculator with threshold alerts",
        "Department-wise filtering and GPA/Marks computation",
        "Relational schema design with foreign key integrity in MySQL",
        "Exportable student summary reports"
      ],
      challenges: "Implementing relational database constraints and responsive GUI event dispatching without blocking the main Swing UI thread during complex search queries.",
      outcome: "Delivered a clean, error-tolerant desktop administrative utility that simplifies student database querying and reporting.",
      github: "https://github.com/Anishcp2006",
      live: null
    },
    {
      id: "weather-app",
      title: "Real-Time Weather & Forecast App",
      category: "web",
      categoryLabel: "Web & REST APIs",
      featured: false,
      image: "assets/projects/weather_app.svg",
      tagline: "Interactive dynamic weather intelligence dashboard with live API integration",
      summary: "A responsive web application that queries live meteorological REST APIs to present temperature, atmospheric humidity, wind speed, pressure, and multi-day forecasts for any global city.",
      problem: "Many public weather dashboards are cluttered with bloated scripts, advertisements, and unintuitive metric visualizations.",
      solution: "Crafted a lightweight, fast, accessible web dashboard utilizing modern asynchronous JavaScript (Fetch API), dynamic DOM updates, and responsive card components.",
      technologies: ["JavaScript (ES6+)", "REST APIs", "HTML5 Semantic", "CSS3 / Flexbox", "JSON Data Parsing"],
      features: [
        "Instant global city search with debounced user input",
        "Live temperature, humidity, wind velocity, and atmospheric pressure metrics",
        "Dynamic background theme adapting to weather conditions",
        "Graceful offline / network error handling and city not found fallbacks",
        "Zero bulky frameworks — pure vanilla JavaScript for ultra-fast loading"
      ],
      challenges: "Handling network latency gracefully and normalizing diverse weather API JSON payload formats into standardized UI cards.",
      outcome: "Created a responsive, zero-dependency web application that loads in under 1 second with 100% responsive cross-device layout.",
      github: "https://github.com/Anishcp2006",
      live: null
    },
    {
      id: "portfolio-v1",
      title: "Developer Showcase & Portfolio",
      category: "web",
      categoryLabel: "Frontend Engineering",
      featured: false,
      image: "assets/projects/portfolio.svg",
      tagline: "High-performance personal engineering portfolio with modern aesthetics & animations",
      summary: "A custom-engineered developer portfolio featuring custom canvas particle simulation, dark/light theme switching, interactive modal case studies, and smooth micro-interactions.",
      problem: "Generic templates fail to reflect technical engineering skills, performance standards, and accessibility requirements.",
      solution: "Designed and built from the ground up using modern CSS variables, semantic HTML5, GSAP scroll triggers, and modular data-driven JavaScript architecture.",
      technologies: ["JavaScript (ES6+)", "HTML5 Semantic Web", "CSS3 Custom Properties", "GSAP & ScrollTrigger", "Lenis Smooth Scroll"],
      features: [
        "Dynamic data-driven rendering of skills, projects, and certifications",
        "Lightweight particle physics canvas with reduced-motion support",
        "Interactive project case studies and certificate inspection modals",
        "Fully accessible navigation with keyboard focus trapping & ARIA support",
        "Dark / Light theme toggling with localStorage persistence"
      ],
      challenges: "Balancing high-fidelity visual effects with strict performance budgets and WCAG AA accessibility compliance.",
      outcome: "A production-grade, responsive developer portfolio achieving optimal performance scores and showcasing genuine software engineering capability.",
      github: "https://github.com/Anishcp2006",
      live: null
    }
  ],

  certifications: [
    {
      id: "cert-az900",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "July 2025",
      badge: "Azure Cloud",
      image: "assets/certificates/azure_az900.svg",
      description: "Demonstrates foundational knowledge of cloud concepts, Azure core architectural components, compute, storage, networking services, security, governance, and compliance.",
      skills: ["Cloud Architecture", "Azure Virtual Machines", "Azure Storage", "Cloud Security", "SLA & Governance"],
      verificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
    },
    {
      id: "cert-mos",
      title: "Microsoft Office Specialist Certification",
      issuer: "Power Soft Computers",
      date: "2019",
      badge: "Productivity",
      image: "assets/certificates/microsoft_office.svg",
      description: "Comprehensive proficiency certification in Microsoft Office applications, advanced Excel data manipulation, reporting, and technical documentation workflows.",
      skills: ["Data Modeling", "Spreadsheet Analytics", "Technical Documentation", "Productivity Automation"],
      verificationUrl: null
    },
    {
      id: "cert-ai-for-all",
      title: "AI For All — AI Appreciate Stage Program",
      issuer: "Intel & CBSE",
      date: "CBSE & Intel AI Initiative",
      badge: "Artificial Intelligence",
      image: "assets/certificates/intel_ai_for_all.svg",
      description: "Recognized participant in Intel's national AI readiness initiative, covering foundational AI concepts, computer vision, natural language processing, and ethical AI deployment.",
      skills: ["AI Fundamentals", "Computer Vision Basics", "NLP Concepts", "AI Ethics & Fairness"],
      verificationUrl: null
    },
    {
      id: "cert-cyber",
      title: "Cyber Hygiene Practice Workshop Certification",
      issuer: "Cyber Security Workshop Initiative",
      date: "Technical Workshop",
      badge: "Cyber Security",
      image: "assets/certificates/cyber_hygiene.svg",
      description: "Hands-on workshop certification on modern cyber safety protocols, defense against social engineering, digital footprint auditing, and secure system operation.",
      skills: ["Network Hygiene", "Data Privacy", "Secure Authentication", "Threat Mitigation"],
      verificationUrl: null
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Prince Dr. K. Vasudevan College of Engineering and Technology (PDKVCET)",
      location: "Chennai, Tamil Nadu, India",
      duration: "2023 — 2027",
      status: "In Progress (3rd Year)",
      score: "CGPA: 75%",
      highlights: [
        "Core focus on Data Structures & Algorithms, Object-Oriented Programming (Java/Python), Machine Learning, and Database Management Systems.",
        "Lead builder for the RideCalm IoT smart train seat telemetry prototype using ESP32 and load sensors.",
        "Active student coordinator for corporate technical events and academic symposiums."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Bio-Maths",
      institution: "Christucoil LMS Higher Secondary School",
      location: "Kanyakumari, Tamil Nadu, India",
      duration: "2021 — 2023",
      status: "Completed",
      score: "Score: 67%",
      highlights: [
        "Major subjects: Mathematics, Physics, Chemistry, Biology.",
        "Built strong mathematical, analytical, and scientific reasoning foundations."
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Christucoil LMS Higher Secondary School",
      location: "Kanyakumari, Tamil Nadu, India",
      duration: "2020 — 2021",
      status: "Completed",
      score: "Result: All Pass",
      highlights: [
        "Developed early enthusiasm for computing, electronics, and technology."
      ]
    }
  ],

  achievements: [
    {
      title: "Certificate of Appreciation — DIGINOVA’25",
      issuer: "Trinitysoft Solutions Ltd",
      icon: "fa-award",
      date: "2025",
      type: "Technical Leadership",
      description: "Awarded Certificate of Appreciation for organizing and coordinating DIGINOVA'25, a premier corporate-level technical symposium. Successfully managed operations, logistics, and technical participant coordination."
    },
    {
      title: "Corporate Technical Event Coordination",
      issuer: "PDKVCET & Industry Partners",
      icon: "fa-people-roof",
      date: "2024 — 2025",
      type: "Management & Coordination",
      description: "Successfully contributed to multi-departmental corporate technical events, demonstrating leadership, time management, and agile team communication."
    },
    {
      title: "Engineered RideCalm Smart Train Seat Telemetry",
      issuer: "Engineering Innovation",
      icon: "fa-train-subway",
      date: "2024",
      type: "IoT & Hardware Build",
      description: "Conceived, engineered, and prototyped an IoT-based train seat telemetry system utilizing ESP32, FSR sensors, and wireless communication to solve commuter seat discovery challenges."
    }
  ]
};

/* ---------------------------------------------------------
   2. DOM READY & INITIALIZATION DISPATCHER
--------------------------------------------------------- */
function initApp() {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Unblock body overflow immediately
  document.body.style.overflow = '';

  initPreloader();
  initTheme();
  initCursor();
  initParticles(prefersReducedMotion);
  initNavigation();
  initAdvancedSmoothScroll(prefersReducedMotion);
  initTyping();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderEducation();
  renderAchievements();
  initCardSpotlight();
  initProjectModal();
  initCertificateModal();
  initResumeModal();
  initDeveloperTerminal();
  initContactForm();
  initCounters();
  initScrollAnimations(prefersReducedMotion);
  initKonamiCode();
  initBackToTop();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ---------------------------------------------------------
   3. ADVANCED SMOOTH SCROLLING (LENIS v1.1+ & GSAP)
--------------------------------------------------------- */
function initAdvancedSmoothScroll(reducedMotion) {
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;

  // Track scroll progress bar
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  function handleScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }
  }

  window.addEventListener('scroll', handleScrollProgress, { passive: true });

  // Initialize Lenis Smooth Scroll
  if (typeof Lenis !== 'undefined' && !reducedMotion && !isMobile) {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false
    });

    window.lenisInstance = lenis;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', () => {
        ScrollTrigger.update();
        handleScrollProgress();
      });
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  // Smooth Anchor Navigation for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      e.preventDefault();

      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(targetEl, {
          offset: -75,
          duration: 1.2
        });
      } else {
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }

      // Close mobile drawer if opened
      const mobileDrawer = document.getElementById('mobileNavDrawer');
      const mobileOverlay = document.getElementById('mobileNavOverlay');
      const mobileToggle = document.getElementById('mobileMenuToggle');
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileOverlay?.classList.remove('open');
        mobileToggle?.classList.remove('active');
        mobileToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
}

/* ---------------------------------------------------------
   4. PRELOADER MODULE
--------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const pctEl = document.getElementById('preloaderPct');
  const barFill = document.getElementById('preloaderBarFill');
  if (!preloader || !pctEl || !barFill) {
    document.body.style.overflow = '';
    return;
  }

  let progress = 0;
  const startTime = Date.now();
  const maxDuration = 900;

  function dismissPreloader() {
    preloader.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 300);
  }

  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    progress = Math.min(100, Math.floor((elapsed / maxDuration) * 100) + Math.floor(Math.random() * 8));

    pctEl.textContent = `${progress}%`;
    barFill.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(dismissPreloader, 150);
    }
  }, 30);

  // Fallback dismiss guarantee
  setTimeout(() => {
    clearInterval(interval);
    dismissPreloader();
  }, 1200);

  // Quick skip on click or key
  window.addEventListener('keydown', dismissPreloader, { once: true });
  preloader.addEventListener('click', dismissPreloader, { once: true });
}

/* ---------------------------------------------------------
   5. THEME CONTROLLER
--------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark');

  setTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }
}

/* ---------------------------------------------------------
   6. CUSTOM CURSOR MODULE
--------------------------------------------------------- */
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  if (window.matchMedia && window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isVisible = true;
    }

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  window.addEventListener('mousedown', () => ring.classList.add('clicking'));
  window.addEventListener('mouseup', () => ring.classList.remove('clicking'));

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, input, textarea, .skill-card, .project-card, .cert-card, .achieve-card, .contact-card-link');
    if (target) {
      ring.classList.add('hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, input, textarea, .skill-card, .project-card, .cert-card, .achieve-card, .contact-card-link');
    if (target) {
      ring.classList.remove('hover');
    }
  });
}

/* ---------------------------------------------------------
   7. BACKGROUND PARTICLES CANVAS
--------------------------------------------------------- */
function initParticles(reducedMotion) {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  let animId = null;
  let isPaused = false;
  let mouse = { x: null, y: null };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    const count = Math.min(55, Math.floor(window.innerWidth / 28));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function render() {
    if (isPaused) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const baseColor = isDark ? '0, 245, 160' : '5, 150, 105';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${baseColor}, ${(1 - dist / 110) * 0.12})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(render);
  }

  resize();
  window.addEventListener('resize', debounce(resize, 200));

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isPaused = true;
      if (animId) cancelAnimationFrame(animId);
    } else {
      isPaused = false;
      render();
    }
  });

  render();
}

/* ---------------------------------------------------------
   8. NAVIGATION & ACTIVE SCROLLSPY
--------------------------------------------------------- */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const desktopLinks = document.querySelectorAll('#desktopNav .nav-link');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    updateActiveSection();
  }, { passive: true });

  if (mobileToggle && mobileDrawer && mobileOverlay) {
    function toggleMobileMenu(open) {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
      mobileDrawer.classList.toggle('open', isOpen);
      mobileOverlay.classList.toggle('open', isOpen);
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    mobileToggle.addEventListener('click', () => toggleMobileMenu());
    mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }

  const sections = document.querySelectorAll('section[id]');
  function updateActiveSection() {
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }
}

/* ---------------------------------------------------------
   9. CARD SPOTLIGHT INTERACTION
--------------------------------------------------------- */
function initCardSpotlight() {
  const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card, .achieve-card, .timeline-card, .featured-project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ---------------------------------------------------------
   10. ROTATING TYPED ROLES
--------------------------------------------------------- */
function initTyping() {
  const typedEl = document.getElementById('typedRole');
  if (!typedEl) return;

  if (window.Typed) {
    new Typed('#typedRole', {
      strings: portfolioData.personal.typedStrings,
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
      smartBackspace: true
    });
  } else {
    typedEl.textContent = "intelligent AI & IoT systems.";
  }
}

/* ---------------------------------------------------------
   11. SKILLS RENDERING & FILTERING
--------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  const tabs = document.querySelectorAll('.skill-tab-btn');
  if (!container) return;

  function generateCards(filter = 'all') {
    const filtered = filter === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter(s => s.category === filter);

    container.innerHTML = filtered.map(skill => `
      <div class="skill-card" data-category="${skill.category}">
        <div class="skill-top">
          <div class="skill-icon-wrapper">
            <i class="${skill.icon}"></i>
          </div>
          <span class="skill-badge">${escapeHtml(skill.level)}</span>
        </div>
        <div class="skill-info">
          <h4>${escapeHtml(skill.name)}</h4>
          <p class="skill-desc">${escapeHtml(skill.desc)}</p>
        </div>
      </div>
    `).join('');

    initCardSpotlight();
  }

  generateCards('all');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const filter = tab.dataset.filter || 'all';
      generateCards(filter);
    });
  });
}

/* ---------------------------------------------------------
   12. PROJECTS RENDERING & FILTERING
--------------------------------------------------------- */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  function renderGrid(filter = 'all') {
    const filtered = filter === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(proj => `
      <article class="project-card" data-category="${proj.category}">
        <div class="project-card-thumb">
          <span class="project-category-pill">${escapeHtml(proj.categoryLabel)}</span>
          <img src="${proj.image}" alt="${escapeHtml(proj.title)}" loading="lazy" />
        </div>
        <div class="project-card-body">
          <div>
            <h3 class="project-card-title">${escapeHtml(proj.title)}</h3>
            <p class="project-card-desc">${escapeHtml(proj.tagline)}</p>
          </div>
          <div class="tech-tag-list">
            ${proj.technologies.slice(0, 4).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="project-card-footer">
            <button class="project-btn-details open-case-study-btn" data-project-id="${proj.id}">
              <span>Explore Case Study</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-subtle btn-sm" aria-label="View ${escapeHtml(proj.title)} on GitHub">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </article>
    `).join('');

    attachProjectModalTriggers();
    initCardSpotlight();
  }

  renderGrid('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.projectFilter || 'all';
      renderGrid(filter);
    });
  });
}

/* ---------------------------------------------------------
   13. PROJECT CASE STUDY MODAL
--------------------------------------------------------- */
function initProjectModal() {
  const backdrop = document.getElementById('projectModalBackdrop');
  const closeBtn = document.getElementById('closeProjectModalBtn');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalBody = document.getElementById('modalProjectBody');
  if (!backdrop || !closeBtn || !modalBody) return;

  window.openProjectModal = function(projectId) {
    const proj = portfolioData.projects.find(p => p.id === projectId);
    if (!proj) return;

    modalTitle.textContent = proj.title;
    modalBody.innerHTML = `
      <div class="modal-media-preview">
        <img src="${proj.image}" alt="${escapeHtml(proj.title)} Architecture Preview" />
      </div>

      <div>
        <div class="modal-section-title">// Overview &amp; Context</div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${escapeHtml(proj.summary)}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-card);">
          <div class="modal-section-title" style="color: #f43f5e;">Problem Statement</div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${escapeHtml(proj.problem)}</p>
        </div>
        <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-card);">
          <div class="modal-section-title" style="color: #00f5a0;">Engineered Solution</div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${escapeHtml(proj.solution)}</p>
        </div>
      </div>

      <div>
        <div class="modal-section-title">// Key Technical Features</div>
        <ul class="modal-key-points">
          ${proj.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
        </ul>
      </div>

      <div>
        <div class="modal-section-title">// Tech Stack &amp; Hardware Components</div>
        <div class="tech-tag-list" style="margin-top: 6px;">
          ${proj.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>

      <div style="background: var(--accent-dark-tint); padding: 16px; border-radius: var(--radius-md); border: 1px solid rgba(0, 245, 160, 0.25);">
        <div class="modal-section-title">Engineering Challenges &amp; Learnings</div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${escapeHtml(proj.challenges)}</p>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 10px; align-items: center; justify-content: flex-end;">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </a>
      </div>
    `;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
}

function attachProjectModalTriggers() {
  document.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.dataset.projectId;
      if (projId && window.openProjectModal) {
        window.openProjectModal(projId);
      }
    });
  });
}

/* ---------------------------------------------------------
   14. CERTIFICATIONS RENDERING & LIGHTBOX
--------------------------------------------------------- */
function renderCertificates() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  grid.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card" data-cert-id="${cert.id}">
      <div class="cert-preview-frame">
        <img src="${cert.image}" alt="${escapeHtml(cert.title)}" loading="lazy" />
        <div class="cert-overlay-inspect">
          <i class="fa-solid fa-expand"></i>
          <span>Inspect Credential</span>
        </div>
      </div>
      <div class="cert-body">
        <span class="cert-badge-tag">${escapeHtml(cert.badge)}</span>
        <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
        <div class="cert-meta">
          <span>${escapeHtml(cert.issuer)}</span>
          <span>${escapeHtml(cert.date)}</span>
        </div>
      </div>
    </div>
  `).join('');

  initCardSpotlight();
}

function initCertificateModal() {
  const backdrop = document.getElementById('certModalBackdrop');
  const closeBtn = document.getElementById('closeCertModalBtn');
  const modalTitle = document.getElementById('modalCertTitle');
  const modalBody = document.getElementById('modalCertBody');
  if (!backdrop || !closeBtn || !modalBody) return;

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (!card) return;

    const certId = card.dataset.certId;
    const cert = portfolioData.certifications.find(c => c.id === certId);
    if (!cert) return;

    modalTitle.textContent = cert.title;
    modalBody.innerHTML = `
      <div class="modal-media-preview" style="max-height: 400px;">
        <img src="${cert.image}" alt="${escapeHtml(cert.title)} Certificate Preview" />
      </div>

      <div>
        <div class="modal-section-title">// Credential Details</div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${escapeHtml(cert.description)}</p>
      </div>

      <div>
        <div class="modal-section-title">// Core Competencies Covered</div>
        <div class="tech-tag-list" style="margin-top: 6px;">
          ${cert.skills.map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-top: 10px;">
        <span class="mono" style="font-size: 0.85rem; color: var(--text-dim);">${escapeHtml(cert.issuer)} · ${escapeHtml(cert.date)}</span>
        ${cert.verificationUrl ? `
          <a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Verify Credential
          </a>
        ` : `<span class="mono" style="font-size: 0.8rem; color: #00f5a0; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Verified Official</span>`}
      </div>
    `;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
}

/* ---------------------------------------------------------
   15. EDUCATION TIMELINE RENDERING
--------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('educationTimeline');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div class="timeline-node">
      <div class="timeline-dot-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-title">${escapeHtml(edu.degree)}</h3>
          <span class="timeline-period">${escapeHtml(edu.duration)}</span>
        </div>
        <div class="timeline-institution">
          <i class="fa-solid fa-building-columns"></i>
          <span>${escapeHtml(edu.institution)} (${escapeHtml(edu.location)})</span>
        </div>
        <div style="margin-bottom: 10px;">
          <span class="skill-badge" style="background: rgba(0, 245, 160, 0.15); color: var(--accent-primary); border-color: rgba(0, 245, 160, 0.35); font-weight: 700;">
            ${escapeHtml(edu.score)}
          </span>
        </div>
        <div class="timeline-highlights">
          ${edu.highlights.map(h => `
            <div class="timeline-highlight-item">
              <i class="fa-solid fa-caret-right"></i>
              <span>${escapeHtml(h)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  initCardSpotlight();
}

/* ---------------------------------------------------------
   16. ACHIEVEMENTS RENDERING
--------------------------------------------------------- */
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;

  grid.innerHTML = portfolioData.achievements.map(ach => `
    <div class="achieve-card">
      <div class="achieve-top">
        <div class="achieve-icon-wrap">
          <i class="fa-solid ${ach.icon}"></i>
        </div>
        <span class="achieve-type-pill mono">${escapeHtml(ach.type)}</span>
      </div>
      <div>
        <h3 class="achieve-title">${escapeHtml(ach.title)}</h3>
        <p class="achieve-desc" style="margin-top: 8px;">${escapeHtml(ach.description)}</p>
      </div>
      <div class="achieve-footer">
        <span>${escapeHtml(ach.issuer)}</span>
        <span>${escapeHtml(ach.date)}</span>
      </div>
    </div>
  `).join('');

  initCardSpotlight();
}

/* ---------------------------------------------------------
   17. RESUME MODAL
--------------------------------------------------------- */
function initResumeModal() {
  const backdrop = document.getElementById('resumeModalBackdrop');
  const closeBtn = document.getElementById('closeResumeModalBtn');
  const triggers = [
    document.getElementById('navResumeBtn'),
    document.getElementById('heroResumeBtn'),
    document.getElementById('mobileResumeBtn')
  ];

  if (!backdrop || !closeBtn) return;

  triggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }
  });

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
}

/* ---------------------------------------------------------
   18. DEVELOPER CLI / COMMAND PALETTE
--------------------------------------------------------- */
function initDeveloperTerminal() {
  const backdrop = document.getElementById('terminalModalBackdrop');
  const closeBtn = document.getElementById('closeTerminalModalBtn');
  const openBtn = document.getElementById('terminalOpenBtn');
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  if (!backdrop || !closeBtn || !input || !output) return;

  function openTerminal() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 150);
  }

  function closeTerminal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openTerminal);
  closeBtn.addEventListener('click', closeTerminal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeTerminal();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('open')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeTerminal();
    }
  });

  const commands = {
    help: () => "Available Commands:\n- about     : Print engineering background & bio\n- skills    : List primary technical stack\n- projects  : List featured engineering projects\n- certs     : View verified certifications\n- contact   : Display contact endpoints\n- resume    : Launch resume PDF modal\n- azure     : Print Microsoft Azure AZ-900 credentials\n- clear     : Wipe console screen\n- exit      : Dismiss terminal",
    about: () => `Anish C.P — B.Tech Artificial Intelligence & Data Science @ PDKVCET (2023-2027).\nLocation: Kanyakumari / Chennai, TN, India.\nFocused on embedded IoT (ESP32), Python, Java, and scalable AI solutions.`,
    skills: () => "Core Stack:\n- Programming : Python, Java, JavaScript, C/C++\n- AI & Data   : Machine Learning, Data Analytics, Azure AZ-900, Excel\n- Embedded IoT: ESP32, Load Sensors (FSR), Wi-Fi/BLE Telemetry\n- Web & UI    : Semantic HTML5, Modern CSS3, UI/UX Design\n- Tools       : Git, GitHub, VS Code, Linux",
    projects: () => "1. RideCalm — IoT Smart Train Seat Occupancy Telemetry\n2. Student Management System — Java Swing + MySQL\n3. Weather Analytics App — Live REST API\n4. Developer Portfolio — High-performance responsive showcase",
    certs: () => "1. Microsoft Certified: Azure Fundamentals (AZ-900) - July 2025\n2. Microsoft Office Specialist - Power Soft Computers (2019)\n3. AI For All - Intel & CBSE\n4. Cyber Hygiene Practice Workshop",
    contact: () => "Official Email : c.anish.p@gmail.com\nPhone Number   : +91 94453 51306\nLinkedIn       : https://www.linkedin.com/in/anish-cp/\nGitHub         : https://github.com/Anishcp2006",
    azure: () => "Microsoft Certified: Azure Fundamentals (AZ-900)\nIssued: July 2025 | Scope: Cloud Concepts, Azure Architecture, Security & Governance.",
    resume: () => {
      closeTerminal();
      const resumeBackdrop = document.getElementById('resumeModalBackdrop');
      if (resumeBackdrop) resumeBackdrop.classList.add('open');
      return "Launching resume viewer...";
    },
    clear: () => {
      output.textContent = "";
      return "";
    },
    exit: () => {
      closeTerminal();
      return "Exiting CLI...";
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value.trim().toLowerCase();
      input.value = "";
      if (!val) return;

      const cmdFn = commands[val];
      let response = "";
      if (cmdFn) {
        response = cmdFn();
      } else {
        response = `Command not recognized: '${val}'. Type 'help' for system manual.`;
      }

      if (val !== 'clear') {
        output.textContent += `\n\n> ${val}\n${response}`;
      }
      const terminalBody = document.getElementById('terminalBody');
      if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}

/* ---------------------------------------------------------
   19. CONTACT FORM — FUNCTIONAL EMAILJS INTEGRATION
--------------------------------------------------------- */

// ========================================
// EMAILJS CONFIGURATION
// ========================================

// 1. Go to your EmailJS account (https://www.emailjs.com).
// 2. Create an Email Service (e.g. Gmail) and copy its Service ID.
// 3. Create an Email Template and copy its Template ID.
// 4. Copy your EmailJS Public Key from the dashboard.
// 5. Paste your EmailJS details below.

const emailConfig = {
    publicKey: "qBfu2Gu0B0bsM2v1B",
    serviceId: "service_9sxishj",
    templateId: "template_ruuo4kt"
};

// In your EmailJS template, use these variables:
//   From:   {{from_name}}
//   Email:  {{from_email}}
//   Subject:{{subject}}
//   Message:{{message}}
//   To:     {{to_name}}            (set to the portfolio owner's name)
//   Reply-To: {{from_email}}       (set in the template so you can reply directly)

// Portfolio owner's real name & email (already present in portfolioData).
const contactOwnerName = portfolioData.personal.name;
const contactOwnerEmail = portfolioData.personal.email;

// Spam protection: cooldown between submissions (milliseconds).
const CONTACT_COOLDOWN_MS = 5000;

// Status copy.
const CONTACT_SUCCESS_MSG = "Message sent successfully! Thank you for reaching out. I'll get back to you soon.";
const CONTACT_CONFIG_MSG = "The contact form is not configured yet. Please add your EmailJS Public Key, Service ID and Template ID in script.js.";
const CONTACT_EMAILJS_MSG = "The email service is temporarily unavailable. Please try again or ";
const CONTACT_FAILURE_MSG = "Sorry, your message could not be sent right now. Please try again or ";

// Runtime state to prevent duplicate / repeated submissions.
let contactSubmitting = false;
let contactLastSubmit = 0;

// Field metadata: field key -> { input id, inline-error id }.
const contactFieldMeta = {
  name:    { input: 'cName',    error: 'cNameError' },
  email:   { input: 'cEmail',   error: 'cEmailError' },
  subject: { input: 'cSubject', error: 'cSubjectError' },
  message: { input: 'cMessage', error: 'cMessageError' }
};

// Initialise EmailJS safely using the Public Key.
// Returns true only when the SDK is loaded AND a real public key exists.
function initEmailJS() {
  if (typeof window.emailjs === 'undefined') {
    // SDK failed to load — form degrades gracefully via fallback message.
    console.warn('[Contact] EmailJS SDK not loaded.');
    return false;
  }

  const hasPublicKey = emailConfig.publicKey && emailConfig.publicKey !== 'PASTE_YOUR_EMAILJS_PUBLIC_KEY_HERE';
  if (!hasPublicKey) {
    console.warn('[Contact] EmailJS Public Key missing.');
    return false;
  }

  try {
    window.emailjs.init({ publicKey: emailConfig.publicKey });
    return true;
  } catch (err) {
    // Never crash — the form degrades to the graceful fallback message.
    console.warn('[Contact] EmailJS init failed.');
    return false;
  }
}

// Attach the contact form controller.
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const name = document.getElementById('cName');
  const email = document.getElementById('cEmail');
  const subject = document.getElementById('cSubject');
  const message = document.getElementById('cMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const btnText = document.getElementById('contactBtnText');
  const statusMsg = document.getElementById('formStatusMsg');

  if (!name || !email || !subject || !message || !submitBtn || !btnText || !statusMsg) return;

  // Initialise the EmailJS SDK (graceful if unavailable).
  initEmailJS();

  // Submit handler.
  form.addEventListener('submit', handleContactSubmit);

  // Live validation: re-check / clear a field's error while the user types.
  const fields = { name, email, subject, message };
  Object.keys(fields).forEach(fieldKey => {
    fields[fieldKey].addEventListener('input', () => {
      const errEl = document.getElementById(contactFieldMeta[fieldKey].error);
      if (!errEl || !errEl.textContent) return;

      const error = validateContactField(fieldKey, fields[fieldKey].value);
      if (error) {
        showFieldError(fieldKey, error);
      } else {
        clearFieldError(fieldKey);
      }
    });
  });
}

// Submit handler (prevent default, validate, send via EmailJS).
async function handleContactSubmit(e) {
  e.preventDefault();
  if (!contactElsExist()) return;

  // Prevent duplicate submissions while a request is in flight.
  if (contactSubmitting) return;

  // Submission cooldown (spam protection).
  const now = Date.now();
  if (contactLastSubmit && (now - contactLastSubmit) < CONTACT_COOLDOWN_MS) {
    showFormStatus('Please wait a moment before sending another message.', 'info');
    return;
  }

  // Honeypot trap: if a bot filled the hidden field, silently "accept" it
  // (do NOT send, and do not signal an error to the bot).
  const honeypot = document.getElementById('website_hp');
  if (honeypot && honeypot.value.trim() !== '') {
    clearAllFieldErrors();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      document.getElementById('contactForm').reset();
      showFormStatus(CONTACT_SUCCESS_MSG, 'success');
    }, 600);
    return;
  }

  // 1. Validate all fields.
  const { valid, errors, values } = validateContactForm();
  clearFormStatus();

  if (!valid) {
    Object.keys(errors).forEach(fieldKey => showFieldError(fieldKey, errors[fieldKey]));

    // Summarise for the aria-live status region (not colour-only).
    showFormStatus('Please correct the highlighted fields and try again.', 'error');

    // Focus the first invalid field for keyboard users.
    const firstInvalid = ['name', 'email', 'subject', 'message'].find(f => errors[f]);
    if (firstInvalid) {
      const input = document.getElementById(contactFieldMeta[firstInvalid].input);
      if (input) input.focus();
    }
    return;
  }

  // Clear inline errors once valid.
  clearAllFieldErrors();

  // 2. Graceful handling when the integration isn't ready.
  if (!isEmailConfigured()) {
    showFormStatus(CONTACT_CONFIG_MSG, 'error');
    return;
  }
  if (typeof window.emailjs === 'undefined') {
    showFormStatus(CONTACT_EMAILJS_MSG + buildContactMailtoAnchor(values, 'contact me directly via email'), 'error');
    return;
  }

  // 3. Enter loading state.
  setFormLoading(true);

  // Normalised values (trim whitespace; collapse repeated spaces in the name).
  const visitorName = values.name.replace(/\s+/g, ' ').trim();
  const visitorEmail = values.email.trim();
  const visitorSubject = values.subject.trim();
  const visitorMessage = values.message.trim();

  // EmailJS template variables.
  const templateParams = {
    from_name: visitorName,
    from_email: visitorEmail,
    reply_to: visitorEmail,     // lets the owner reply directly to the visitor
    subject: visitorSubject,
    message: visitorMessage,
    to_name: contactOwnerName   // portfolio owner's name
  };

  try {
    // 4. Send via EmailJS.
    await sendContactEmail(templateParams);

    // 5. Success — ONLY shown after EmailJS confirms delivery.
    contactLastSubmit = now;
    setFormLoading(false);
    document.getElementById('contactForm').reset();
    clearAllFieldErrors();
    clearFormStatus();
    showFormStatus(CONTACT_SUCCESS_MSG, 'success');
  } catch (err) {
    // Failure — preserve the visitor's entered information.
    contactLastSubmit = now;
    setFormLoading(false);
    clearAllFieldErrors();
    showFormStatus(CONTACT_FAILURE_MSG + buildContactMailtoAnchor(values, 'contact me directly via email'), 'error');
  }
}

// Validate every form field. Returns { valid, errors, values }.
function validateContactForm() {
  const errors = {};
  const values = {};

  Object.keys(contactFieldMeta).forEach(fieldKey => {
    const input = document.getElementById(contactFieldMeta[fieldKey].input);
    const value = input ? input.value : '';
    values[fieldKey] = value;

    const error = validateContactField(fieldKey, value);
    if (error) errors[fieldKey] = error;
  });

  return { valid: Object.keys(errors).length === 0, errors, values };
}

// Validate a single field. Returns an error string, or null when valid.
function validateContactField(fieldKey, rawValue) {
  const value = typeof rawValue === 'string' ? rawValue.trim() : '';

  switch (fieldKey) {
    case 'name':
      if (!value) return 'Please enter your full name.';
      if (value.replace(/\s+/g, ' ').length < 2) return 'Name must be at least 2 characters.';
      return null;

    case 'email':
      if (!value) return 'Please enter your email address.';
      if (!isValidEmail(value)) return 'Please enter a valid email address.';
      return null;

    case 'subject':
      if (!value) return 'Please enter a subject.';
      if (value.length < 3) return 'Subject must be at least 3 characters.';
      return null;

    case 'message':
      if (!value) return 'Please enter your message.';
      if (value.length < 10) return 'Message must be at least 10 characters.';
      return null;

    default:
      return null;
  }
}

// Show an accessible inline error for a field.
function showFieldError(fieldKey, message) {
  const meta = contactFieldMeta[fieldKey];
  if (!meta) return;

  const input = document.getElementById(meta.input);
  const errEl = document.getElementById(meta.error);

  if (input) input.setAttribute('aria-invalid', 'true');
  if (errEl) {
    errEl.textContent = message;
    errEl.classList.add('show');
  }
}

// Clear a single field's inline error.
function clearFieldError(fieldKey) {
  const meta = contactFieldMeta[fieldKey];
  if (!meta) return;

  const input = document.getElementById(meta.input);
  const errEl = document.getElementById(meta.error);

  if (input) input.setAttribute('aria-invalid', 'false');
  if (errEl) {
    errEl.textContent = '';
    errEl.classList.remove('show');
  }
}

// Clear all inline field errors.
function clearAllFieldErrors() {
  Object.keys(contactFieldMeta).forEach(fieldKey => clearFieldError(fieldKey));
}

// Toggle the loading state on the submit button.
function setFormLoading(isLoading) {
  const submitBtn = document.getElementById('contactSubmitBtn');
  const btnText = document.getElementById('contactBtnText');

  contactSubmitting = isLoading;

  if (submitBtn) {
    submitBtn.disabled = isLoading;
    submitBtn.classList.toggle('loading', isLoading);
    submitBtn.setAttribute('aria-busy', isLoading ? 'true' : 'false');
  }
  if (btnText) {
    btnText.textContent = isLoading ? 'Sending...' : 'Send Message';
  }
}

// Show a status notification (aria-live region communicates it to screen readers).
function showFormStatus(message, type) {
  const statusMsg = document.getElementById('formStatusMsg');
  if (!statusMsg) return;

  statusMsg.className = `form-status-msg ${type}`;
  if (type === 'error') {
    // Errors may embed a safe mailto fallback link.
    statusMsg.innerHTML = message;
  } else {
    statusMsg.textContent = message;
  }
}

// Clear the status notification.
function clearFormStatus() {
  const statusMsg = document.getElementById('formStatusMsg');
  if (!statusMsg) return;

  statusMsg.className = 'form-status-msg';
  statusMsg.textContent = '';
}

// Check that all three EmailJS values are present and not placeholders.
function isEmailConfigured() {
  const hasPublic = emailConfig.publicKey && emailConfig.publicKey !== 'PASTE_YOUR_EMAILJS_PUBLIC_KEY_HERE';
  const hasService = emailConfig.serviceId && emailConfig.serviceId !== 'PASTE_YOUR_SERVICE_ID_HERE';
  const hasTemplate = emailConfig.templateId && emailConfig.templateId !== 'PASTE_YOUR_TEMPLATE_ID_HERE';
  return hasPublic && hasService && hasTemplate;
}

// Send the actual form data via EmailJS. Throws on failure.
function sendContactEmail(templateParams) {
  if (typeof window.emailjs === 'undefined') {
    return Promise.reject(new Error('EmailJS SDK is not available.'));
  }

  return window.emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    templateParams,
    { publicKey: emailConfig.publicKey }
  );
}

// Build a clickable mailto: fallback using the portfolio owner's real email.
function buildContactMailtoAnchor(values, label) {
  const subject = (values && values.subject ? values.subject.trim() : '') || 'Portfolio Contact';
  const body = values && values.name
    ? `Name: ${values.name.replace(/\s+/g, ' ').trim()}\nEmail: ${values.email.trim()}\n\nMessage:\n${values.message.trim()}`
    : '';
  const href = `mailto:${contactOwnerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `<a href="${href}">${label}</a>`;
}

// Confirm required form elements exist before processing submission.
function contactElsExist() {
  return !!(
    document.getElementById('contactForm') &&
    document.getElementById('cName') &&
    document.getElementById('cEmail') &&
    document.getElementById('cSubject') &&
    document.getElementById('cMessage')
  );
}

// Reusable email format check.
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------------------------------------------------------
   20. VIEWPORT NUMBER COUNTERS
--------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        let count = 0;
        const duration = 1500;
        const stepTime = 25;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(count);
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ---------------------------------------------------------
   21. GSAP & SCROLL TRIGGER ANIMATIONS
--------------------------------------------------------- */
function initScrollAnimations(reducedMotion) {
  if (reducedMotion || !window.gsap) return;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 88%'
        }
      });
    });

    gsap.utils.toArray('.skill-card, .project-card, .cert-card, .achieve-card, .timeline-card').forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%'
        }
      });
    });
  }
}

/* ---------------------------------------------------------
   22. BACK TO TOP BUTTON
--------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/* ---------------------------------------------------------
   23. KONAMI CODE EASTER EGG
--------------------------------------------------------- */
function initKonamiCode() {
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiSequence[konamiIndex].toLowerCase()) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        triggerEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function triggerEasterEgg() {
    const banner = document.createElement('div');
    banner.style.cssText = `
      position: fixed;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #00f5a0, #38bdf8);
      color: #052e16;
      font-family: var(--font-mono);
      font-weight: 800;
      padding: 12px 24px;
      border-radius: 9999px;
      z-index: 10002;
      box-shadow: 0 0 35px rgba(0, 245, 160, 0.85);
    `;
    banner.textContent = "⚡ SYSTEM OVERDRIVE: DEVELOPER PROTOCOL UNLOCKED ⚡";
    document.body.appendChild(banner);

    setTimeout(() => {
      banner.style.transition = 'opacity 0.6s ease';
      banner.style.opacity = '0';
      setTimeout(() => banner.remove(), 600);
    }, 3000);
  }
}

/* ---------------------------------------------------------
   24. UTILITIES
--------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
