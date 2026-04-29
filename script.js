// ====================================
// ALEX BRITTON - PORTFOLIO
// Interactive Features
// ====================================

// Header scroll behavior
const siteHeader = document.querySelector('.site-header');

const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const scrollIndicator = document.querySelector('.scroll-indicator');

function handleScroll() {
    if (window.scrollY > 100) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }

    // Hero fade-out on scroll
    if (heroSection && heroContent) {
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = Math.min(window.scrollY / (heroHeight * 0.6), 1);
        const opacity = 1 - scrollProgress;
        const scale = 1 - scrollProgress * 0.08;
        const translateY = window.scrollY * 0.3;

        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(${translateY}px) scale(${scale})`;

        if (scrollIndicator) {
            scrollIndicator.style.opacity = Math.max(1 - scrollProgress * 3, 0);
        }
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check

// Project Data
const projectsData = {
    1: {
        title: "Elbow Torque EMG Prediction",
        tag: "Machine Learning",
        description: "A two-stage machine learning pipeline for predicting elbow varus torque in baseball pitchers using biomechanical data and EMG signals. Stage 1 uses XGBoost with 30 biomechanical features achieving R²=0.764 and RMSE of 18.55 Nm. Stage 2 predicts residuals using EMG features from forearm flexor muscles (FCU, FCR). Built with 5-fold GroupKFold cross-validation and comprehensive feature selection algorithms including genetic algorithms and sequential floating selection.",
        image: "content/emgmodel (1).png",
        tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "MySQL"],
        liveLink: "#",
        codeLink: "#",
        video: null,
        socialLinks: null,
        additionalImages: ["content/biomechvizzy.png"]
    },
    2: {
        title: "EMG Processing Pipeline",
        tag: "Signal Processing",
        description: "A comprehensive electromyography signal processing system for sports biomechanics research at Driveline Baseball. Processes EMG data from Delsys Trigno sensors, calculating 96+ metrics per event including time/frequency domain analysis, wavelet decomposition, and coactivation indices. Features an interactive GUI for manual event labeling, automated batch processing, database integration, and Slack notifications for quality control.",
        image: "content/emgpipeline.png",
        tech: ["Python", "SciPy", "PyWavelets", "MySQL", "Matplotlib", "Slack SDK"],
        liveLink: "#",
        codeLink: "#",
        video: null,
        tweetId: "1968387963953295509",
        additionalImages: null
    },
    3: {
        title: "3D Pose Estimation System",
        tag: "Computer Vision",
        description: "A multi-camera 3D human pose estimation system migrated from Theia3D to an open-source OpenCV-based architecture. Features camera intrinsic/extrinsic calibration using checkerboard patterns, 2D pose detection via MediaPipe with 33 body landmarks, multi-view triangulation using Direct Linear Transform (DLT), and C3D file generation for downstream analysis. Developed in collaboration with Brent Hokeness.",
        image: "content/annotation.jpeg",
        tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "ezc3d", "YAML"],
        liveLink: "#",
        codeLink: "#",
        video: "content/multi_view_overlay/multi_view_overlay.mp4",
        socialLinks: null,
        additionalImages: null
    },
    4: {
        title: "Bat Path Visuals & Analysis",
        tag: "Data Visualization",
        description: "A 3D bat path visualization and analysis system for baseball hitting biomechanics at Driveline Baseball. Generates animated visualizations of swing mechanics from motion capture data, calculating key metrics like bat speed (X/Y/Z components), attack angle, horizontal attack angle, and vertical bat angle. Features automated PDF report generation showing top view path analysis, behind view analysis, and swing comparisons across sessions. Integrated into athlete assessment workflows for actionable hitting insights.",
        image: "content/batpathvizzy.jpeg",
        tech: ["Python", "Matplotlib", "NumPy", "Motion Capture", "PDF Generation"],
        liveLink: "#",
        codeLink: "#",
        video: "content/bat-path-animation.mp4",
        tweetId: "1993008754334597234",
        additionalImages: ["content/3pagebatpath.png", "content/batpathcomparison.jpeg"]
    },
    5: {
        title: "DL SQL MCP Server",
        tag: "AI / LLM Tool",
        description: "A Model Context Protocol (MCP) server for Claude Desktop that enables natural language queries to baseball biomechanics databases. Users can ask questions like 'Show me John's velocity progression' or 'Compare shoulder rotation between pitchers and catchers' without knowing SQL. Features intelligent schema discovery, automatic table joins, and formatted results. Supports 47+ pitching metrics and 50+ hitting metrics with easy one-click installation.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
        tech: ["Python", "MCP Protocol", "MySQL", "Claude AI", "UV Package Manager"],
        liveLink: "#",
        codeLink: "#",
        video: "content/mcpdemo.mp4",
        socialLinks: null,
        additionalImages: null
    },
    6: {
        title: "Edger Case Design",
        tag: "3D Modeling",
        description: "A custom protective case designed in FreeCAD to protect high-speed Edgertronic cameras from foul balls in the Tampa facility. After 3 lens casualties, I designed this two-piece enclosure to emulate the commercial protective case ($700+) at a fraction of the cost. Features a simple two-piece design with built-in joints, precise tolerances for camera fit, and optimized geometry for FDM 3D printing.",
        image: "content/edger-case-iso.png",
        tech: ["FreeCAD", "STEP", "STL", "3D Printing", "CAD Design"],
        liveLink: "#",
        codeLink: "#",
        video: null,
        tweetId: "1995626157044347035"
    },
    7: {
        title: "Motion Capture System Frontend",
        tag: "UI / App Design",
        description: "A web-based control interface for managing an 8-camera Edgertronic high-speed motion capture system. The dashboard provides real-time camera previews, system status monitoring, athlete management, and recording controls. Features include primary/secondary camera designation, pre-trigger buffer management, FPS and ISO settings display, and pitching/hitting mode switching for different assessment types.",
        image: "content/mocaptoolsfrontend.png",
        tech: ["PHP", "JavaScript", "HTML/CSS", "Edgertronic API", "Real-time Preview"],
        liveLink: "#",
        codeLink: "#",
        video: null,
        socialLinks: null
    },
    8: {
        title: "Torpedo Bat FEA",
        tag: "FEA Analysis",
        description: "A finite element analysis (FEA) study of the Torpedo Bat design to evaluate structural integrity and performance characteristics. The analysis examines stress distribution, deformation patterns, and material behavior under various loading conditions typical of baseball bat impacts. Used to optimize bat geometry and material selection for improved durability and performance.",
        image: "content/torpedo.jpeg",
        tech: ["FEA Software", "ANSYS", "SolidWorks", "Structural Analysis", "Material Science"],
        liveLink: "#",
        codeLink: "#",
        video: null,
        tweetId: "1907822967536369921",
        additionalImages: null
    },
    9: {
        title: "Baseball Pitch Detection",
        tag: "Computer Vision",
        description: "A YOLOv8-based object detection system for tracking baseballs in high-speed pitching video. Trained on 3,000+ manually annotated frames using CVAT, achieving mAP50 of 0.813 and precision of 0.875. Features a custom trajectory scoring algorithm for first-pitch detection that analyzes movement patterns, direction consistency, and temporal density. Includes auto-labeling tools, a local review GUI, and integration with Driveline's production API for real-time pitch analysis.",
        image: "content/ball-detection.jpg",
        tech: ["Python", "YOLOv8", "CVAT", "OpenCV", "RTX 3090", "Ultralytics"],
        liveLink: "#",
        codeLink: "https://github.com/drivelineresearch/api",
        video: null,
        socialLinks: null,
        additionalImages: null
    },
    10: {
        title: "Be Brief — Pilot Briefing App",
        tag: "UI / App Design",
        description: "A general aviation pilot briefing app designed to streamline pre-flight preparation and enhance safety. Features a comprehensive route planner with multi-leg support, real-time weather briefings with go/no-go status indicators (VFR category, airspace alerts, wind, daylight, weight, and minimums), route summary with distance, heading, and ETE calculations, daylight analysis with sunset/twilight timing, weight & balance computations, NOTAM integration, and fuel availability by type at departure and destination airports. The dark-themed UI was designed for cockpit readability and quick at-a-glance decision making. Currently pursuing FAA approval.",
        image: "content/bebrief-planner.png",
        tech: ["React Native", "UI Design", "Aviation", "Weather APIs", "Route Planning", "FAA Data"],
        liveLink: "https://flybebrief.com/",
        codeLink: "https://github.com/abritton2002/BeBrief",
        video: null,
        socialLinks: null,
        additionalImages: ["content/bebrief-brief.png"]
    },
    11: {
        title: "MoCap iPad Interface",
        tag: "UI / App Design",
        description: "An iPad-optimized control interface for Driveline Baseball's motion capture system, designed to let trainers seamlessly operate the full capture pipeline from a tablet on the gym floor. Features athlete search with TRAQ ID integration, pitch type and hitting tag selection, manual and auto capture modes with MPH readout, bat hand/length configuration, and real-time camera status monitoring for 9+ cameras across hitting and pitching setups. Packages all motion capture software into a clean, touch-friendly UI built for fast-paced training environments.",
        image: "content/mocap-ipad.png",
        tech: ["JavaScript", "HTML", "CSS", "iPad UI", "Camera API", "Real-time Monitoring"],
        liveLink: "#",
        codeLink: "#",
        video: null,
        socialLinks: null,
        additionalImages: null
    },
    12: {
        title: "Slice of Heaven Vintage Cakes",
        tag: "UI / Web Design",
        description: "A custom-designed website for a vintage-style cake business. Built from scratch to showcase the brand's personality and make it easy for customers to browse offerings and place orders. Features a multi-step order form with instant price estimates, cake design customization, and event details. Designed with a warm, inviting aesthetic that reflects the handcrafted nature of the products.",
        image: "content/soh-main.png",
        tech: ["HTML", "CSS", "JavaScript", "Web Design", "Responsive"],
        liveLink: "https://sliceofheavenvintagecakes.com",
        codeLink: "#",
        video: null,
        socialLinks: null,
        additionalImages: ["content/soh-order.png"]
    },
    13: {
        title: "Agentic Coding Loop",
        tag: "Walkthrough",
        description: "Most \"vibe coding\" failures aren't the model's fault. The pattern I see constantly is vague prompt in, mediocre code out, blame the LLM, tweet about how AI can't really code. Taking the time to learn agentic coding from people who do it at a high level gives you a simple solution: a better loop.\n\nWhat's been working for me is a minimal fork on a mixture-of-agents framework Kyle Boddy open sourced.\n\n1. One model drafts a plan first. I review and approve before any code is written. (Anthropic Claude Code)\n2. A second model implements against the approved plan.\n3. A different provider reviews the diff (OpenAI Codex).\n\nIt's the same loop good engineering teams have run for decades. We just get to run it in minutes instead of days now. This video walks through a simple version of that loop end-to-end.",
        image: "content/demo-coding-loops.jpg",
        tech: ["Claude Code", "OpenAI Codex", "Mixture of Agents", "Agentic Workflows"],
        liveLink: null,
        codeLink: null,
        video: "content/demo-coding-loops.mp4",
        socialLinks: null,
        additionalImages: null
    },
    14: {
        title: "CV Pitch Detection Pipeline",
        tag: "Walkthrough",
        description: "A quick video showing part of the workflow behind a baseball computer vision project I've been working on in my free time at Driveline Baseball.\n\nI walk through how I used Roboflow as one part of the pipeline for uploading images, organizing and versioning the dataset, and then carrying that into our own training and post-processing workflow.\n\nThe point of the video isn't really the tooling by itself — it's about showing how the whole process connects. Going from raw image data, to dataset management, to training, to the final visual output is something that never really gets much love. A lot of people only ever see the finished result, but the interesting part is how all the pieces actually tie together to make that result possible. In this case, that meant turning labeled footage into a system that could eventually play a role in our broader tech stack.",
        image: "content/demo-cv-pitch.jpg",
        tech: ["Roboflow", "YOLOv8", "Python", "Dataset Versioning", "Training Pipelines"],
        liveLink: null,
        codeLink: null,
        video: "content/demo-cv-pitch.mp4",
        socialLinks: null,
        additionalImages: null
    },
    15: {
        title: "GPU Thermal Throttling Debug",
        tag: "Walkthrough",
        description: "Our computer vision processing server was crashing endlessly and processing at snail speed.\n\nOne card was hitting 84°C under load with nearly 2 hours of accumulated thermal throttling — silently killing performance on every single batch and actually crashing the server.\n\nWanted to document the process from start to finish, with some use of Claude Code and some trial and error. Good example of the importance of thermal regulation in hardware, especially at scale.",
        image: "content/demo-gpu-thermal.jpg",
        tech: ["GPU Diagnostics", "Thermal Profiling", "Claude Code", "Hardware Debugging"],
        liveLink: null,
        codeLink: null,
        video: "content/demo-gpu-thermal.mp4",
        socialLinks: null,
        additionalImages: null
    },
    16: {
        title: "Claude Code + Blender Bracket",
        tag: "Walkthrough",
        description: "Just designed and 3D printed a mounting bracket with nothing but Claude Code and a ruler.\n\nI described a mounting bracket I needed for an LED board project (hole spacing, fastener sizes, thickness) and watched Claude Code cook. It worked live in Blender, verified the mesh was watertight, and exported a print-ready STL directly to my desktop.\n\nWhat impressed me most was that it actually was aware of some important 3D printing concepts. When I said \"make the outer holes M4,\" it knew the difference between a clearance hole and a tap drill. When I changed the inner spacing, it rebuilt and re-exported without me touching a file. When I asked if it was ready to print, it actually checked the mesh for any poor design.\n\nThis is what AI-assisted hardware prototyping can look like in the future. The gap between \"I need a part\" and \"it's printing\" is getting smaller.",
        image: "content/demo-blender-bracket.jpg",
        tech: ["Claude Code", "Blender", "STL Export", "3D Printing", "CAD"],
        liveLink: null,
        codeLink: null,
        video: "content/demo-blender-bracket.mp4",
        socialLinks: null,
        additionalImages: null
    },
    18: {
        title: "Biomech Viewer",
        tag: "Design",
        description: "A 3D biomechanics lab in the browser. Load motion capture trials from our database, play them back frame by frame, and compare multiple athletes on a single synchronized timeline.\n\nBuilt with a FastAPI backend and a vanilla Three.js frontend — no bundler, no framework overhead. The backend exposes JSON APIs for athletes, trials, and dynamic time warping (DTW), while the browser handles all the 3D rendering and signal plotting.\n\nThe core of the app is a sync frame pipeline: one global playhead drives every loaded skeleton simultaneously. DTW lets you warp two trials into alignment so you can compare mechanics directly, even when movement timings differ. Plotly signal panels stay locked to the same playhead so kinematics and time-series data stay in sync as you scrub.\n\nUsed daily at Driveline by coaches and sport scientists to inspect pitcher and hitter mechanics.",
        image: "content/Screenshot 2026-04-27 174439.png",
        tech: ["FastAPI", "Three.js", "Python", "SQLAlchemy", "Plotly", "Dynamic Time Warping"],
        liveLink: "#",
        codeLink: "#",
        video: "content/demo-skeleton-viewer.mp4",
        socialLinks: null,
        additionalImages: null
    },
    17: {
        title: "PR From iPhone with Codex",
        tag: "Walkthrough",
        description: "Just opened a PR from my iPhone in like 5 minutes.\n\nWasn't anything crazy, but I didn't open my laptop at all. There are some cases where I'm working out or just relaxing and I come across an idea for a project. I used to type it into my notes to save it for later — now I can literally deploy a cloud agent.\n\nUsed Codex to make an update and open the PR. I mostly just described what I wanted and sanity checked it.\n\nThese phone-based cloud tools aren't for every task, but they definitely have valid use cases. Curious if others are using this kind of workflow regularly yet or if it still feels too clunky.",
        image: "content/demo-pr-iphone.jpg",
        tech: ["OpenAI Codex Cloud", "GitHub", "Mobile Workflow"],
        liveLink: null,
        codeLink: null,
        video: "content/demo-pr-iphone.mp4",
        socialLinks: null,
        additionalImages: null
    }
};

// DOM Elements
const modal = document.getElementById('projectModal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalCodeLink = document.getElementById('modalCodeLink');
const modalVideoSection = document.getElementById('modalVideoSection');
const modalDemoVideo = document.getElementById('modalDemoVideo');
const modalTweetSection = document.getElementById('modalTweetSection');
const modalTweetEmbeds = document.getElementById('modalTweetEmbeds');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');
const projectCards = document.querySelectorAll('.work-card');

// Carousel state
let currentSlide = 0;
let totalSlides = 0;
let touchStartX = 0;
let touchEndX = 0;

function goToSlide(index) {
    currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Update dots
    carouselDots.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function buildCarousel(images) {
    currentSlide = 0;
    totalSlides = images.length;

    carouselTrack.innerHTML = images.map(src =>
        `<div class="carousel-slide"><img src="${src}" alt="Project visual"></div>`
    ).join('');
    carouselTrack.style.transform = 'translateX(0)';

    // Dots
    if (totalSlides > 1) {
        carouselDots.innerHTML = images.map((_, i) =>
            `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></button>`
        ).join('');
        carouselDots.style.display = 'flex';
    } else {
        carouselDots.innerHTML = '';
        carouselDots.style.display = 'none';
    }
}

// Swipe handling on carousel
document.getElementById('modalCarousel').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById('modalCarousel').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
    }
}, { passive: true });

// Dot clicks
carouselDots.addEventListener('click', (e) => {
    if (e.target.classList.contains('carousel-dot')) {
        goToSlide(parseInt(e.target.dataset.index));
    }
});

// Open Modal
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Build carousel — hide it entirely when this is a video-first project
    // (video is shown at the top instead of the static poster)
    const carousel = document.getElementById('modalCarousel');
    const hasExtraImages = Array.isArray(project.additionalImages) && project.additionalImages.length > 0;
    if (project.video && !hasExtraImages) {
        carousel.style.display = 'none';
    } else {
        carousel.style.display = '';
        const images = [project.image];
        if (project.additionalImages) {
            images.push(...project.additionalImages);
        }
        buildCarousel(images);
    }

    // Basic info
    modalTag.textContent = project.tag;
    modalTitle.textContent = project.title;
    const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    modalDescription.innerHTML = project.description
        .split(/\n\n+/)
        .map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
        .join('');

    // Live link
    const hasLive = project.liveLink && project.liveLink !== '#';
    modalLiveLink.href = hasLive ? project.liveLink : '#';
    modalLiveLink.style.display = hasLive ? 'inline-flex' : 'none';

    // Code link
    const hasCode = project.codeLink && project.codeLink !== '#';
    modalCodeLink.href = hasCode ? project.codeLink : '#';
    modalCodeLink.style.display = hasCode ? 'inline-flex' : 'none';

    // Tech tags
    modalTech.innerHTML = project.tech
        .map(tech => `<span>${tech}</span>`)
        .join('');

    // Tweet embed
    if (project.tweetId) {
        modalTweetSection.style.display = 'block';
        modalTweetEmbeds.innerHTML = `<div id="tweet-container-${project.tweetId}"></div>`;
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.createTweet(
                project.tweetId,
                document.getElementById(`tweet-container-${project.tweetId}`),
                { theme: 'dark', dnt: true }
            );
        }
    } else {
        modalTweetSection.style.display = 'none';
    }

    // Video
    if (project.video) {
        modalVideoSection.style.display = 'block';
        modalDemoVideo.setAttribute('poster', project.image);
        const videoSource = modalDemoVideo.querySelector('source');
        videoSource.src = project.video;
        videoSource.type = 'video/mp4';
        modalDemoVideo.load();
        modalDemoVideo.currentTime = 0;
    } else {
        modalVideoSection.style.display = 'none';
        modalDemoVideo.removeAttribute('poster');
    }

    // Show modal and scroll to top
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-content').scrollTop = 0;
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Pause any playing videos
    if (modalDemoVideo) {
        modalDemoVideo.pause();
        modalDemoVideo.currentTime = 0;
    }
}

// Event Listeners for Project Cards
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        openModal(projectId);
    });

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const projectId = card.dataset.project;
            openModal(projectId);
        }
    });

    // Make cards focusable
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
});

// Close modal events
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Hamburger nav toggle
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.05
});

// Observe project cards for animations
let groupIndex = 0;
let lastGroup = null;
projectCards.forEach((card) => {
    const group = card.closest('.work-group, .latest-group');
    if (group !== lastGroup) { groupIndex = 0; lastGroup = group; }
    const delay = Math.min(groupIndex * 0.07, 0.3);
    groupIndex++;
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`;
    observer.observe(card);
});

// Parallax effect for hero glows
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.glow');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    glows.forEach((glow, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ====================================
// IMAGE LIGHTBOX
// ====================================
const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxBackdrop = document.querySelector('.lightbox-backdrop');
const lightboxZoomIn = document.querySelector('.lightbox-zoom-in');
const lightboxZoomOut = document.querySelector('.lightbox-zoom-out');
const lightboxReset = document.querySelector('.lightbox-reset');

let currentZoom = 1;
const zoomStep = 0.25;
const maxZoom = 4;
const minZoom = 0.5;

function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    currentZoom = 1;
    lightboxImage.style.transform = `scale(${currentZoom})`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    currentZoom = 1;
}

function zoomIn() {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        lightboxImage.style.transform = `scale(${currentZoom})`;
    }
}

function zoomOut() {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        lightboxImage.style.transform = `scale(${currentZoom})`;
    }
}

function resetZoom() {
    currentZoom = 1;
    lightboxImage.style.transform = `scale(${currentZoom})`;
}

// Event listeners for lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
lightboxZoomIn.addEventListener('click', zoomIn);
lightboxZoomOut.addEventListener('click', zoomOut);
lightboxReset.addEventListener('click', resetZoom);

// Close lightbox on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Zoom with mouse wheel
lightbox.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        zoomIn();
    } else {
        zoomOut();
    }
});

// Make modal images clickable for lightbox
document.addEventListener('click', (e) => {
    // Check if clicked element is an image in the modal
    if (e.target.matches('.carousel-slide img')) {
        openLightbox(e.target.src);
    }
});

// ====================================
// LATEST CAROUSEL
// ====================================
(function () {
    const track = document.getElementById('latestTrack');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.latest-card'));
    const dots = Array.from(document.querySelectorAll('.latest-dot'));
    const prevBtn = document.getElementById('latestPrev');
    const nextBtn = document.getElementById('latestNext');
    const total = cards.length;
    let current = 0;

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        if (prevBtn) prevBtn.disabled = false;
        if (nextBtn) nextBtn.disabled = false;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    // Touch swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    }, { passive: true });

    goTo(0);
})();

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Cards are already observed above
});

