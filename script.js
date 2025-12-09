// ====================================
// ALEX BRITTON - PORTFOLIO
// Interactive Features
// ====================================

// Header scroll behavior
const siteHeader = document.querySelector('.site-header');

function handleScroll() {
    if (window.scrollY > 100) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
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
        description: "A multi-camera 3D human pose estimation system migrated from Theia3D to an open-source OpenCV-based architecture. Features camera intrinsic/extrinsic calibration using checkerboard patterns, 2D pose detection via MediaPipe with 33 body landmarks, multi-view triangulation using Direct Linear Transform (DLT), and C3D file generation for downstream analysis.",
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
        tag: "Frontend Design",
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
    }
};

// DOM Elements
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
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
const modalGallerySection = document.getElementById('modalGallerySection');
const modalLeft = document.getElementById('modalLeft');
const modalMediaFallback = document.getElementById('modalMediaFallback');
const modalGallery = document.getElementById('modalGallery');
const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');
const projectCards = document.querySelectorAll('.project-card');

// Open Modal
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Basic info
    modalTag.textContent = project.tag;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLiveLink.href = project.liveLink;
    modalCodeLink.href = project.codeLink;

    // Handle Live Link visibility
    if (project.liveLink === '#') {
        modalLiveLink.style.display = 'none';
    } else {
        modalLiveLink.style.display = 'inline-flex';
    }

    // Handle Code Link visibility
    if (project.codeLink === '#') {
        modalCodeLink.style.display = 'none';
    } else {
        modalCodeLink.style.display = 'inline-flex';
    }

    // Generate tech tags
    modalTech.innerHTML = project.tech
        .map(tech => `<span>${tech}</span>`)
        .join('');

    // Handle tweet embed section (LEFT SIDE)
    if (project.tweetId) {
        modalTweetSection.style.display = 'block';
        modalMediaFallback.style.display = 'none';
        modalTweetEmbeds.innerHTML = `<div id="tweet-container-${project.tweetId}"></div>`;
        
        // Use Twitter's widget API to render the tweet
        if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.createTweet(
                project.tweetId,
                document.getElementById(`tweet-container-${project.tweetId}`),
                {
                    theme: 'dark',
                    dnt: true
                }
            );
        }
    } else {
        // Show image fallback if no tweet
        modalTweetSection.style.display = 'none';
        modalMediaFallback.style.display = 'flex';
        modalImage.src = project.image;
        modalImage.alt = project.title;
    }

    // Handle demo video section (RIGHT SIDE - first)
    if (project.video) {
        modalVideoSection.style.display = 'block';
        const videoSource = modalDemoVideo.querySelector('source');
        videoSource.src = project.video;
        videoSource.type = 'video/mp4';
        modalDemoVideo.load();
        modalDemoVideo.currentTime = 0;
    } else {
        modalVideoSection.style.display = 'none';
    }

    // Handle additional images gallery (RIGHT SIDE - second)
    if (project.additionalImages && project.additionalImages.length > 0) {
        modalGallerySection.style.display = 'block';
        modalGallery.innerHTML = project.additionalImages
            .map(img => `<img src="${img}" alt="Project visual">`)
            .join('');
    } else {
        modalGallerySection.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
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

// Smooth scroll for nav pills
document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = pill.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
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
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe project cards for animations
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add animation class handler
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations when visible
    const style = document.createElement('style');
    style.textContent = `
        .project-card.animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
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
    if (e.target.matches('.modal-media img, .modal-gallery img')) {
        openLightbox(e.target.src);
    }
});

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Cards are already observed above
});

