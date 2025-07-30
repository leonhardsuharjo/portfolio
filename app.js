// Enhanced portfolio app with fixed navigation and typing animation

const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Leonhard Satria Suharjo",
    title: "Backend Developer & Data Engineer",
    specialties: [
      "Backend Development",
      "Data Engineering", 
      "Machine Learning",
      "Full-Stack Development"
    ],
    bio: "A full-time student from Indonesia, currently taking the International Baccalaureate Diploma Program at Sekolah Victory Plus. Love doing projects and participating in organizations in and beyond the school environment. Has technical information and experience in programming projects, founder of the SVP Computer Scientist club.",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Data Analysis", level: 90 },
      { name: "Cloud Computing", level: 80 },
      { name: "Databases", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "C Programming", level: 80 }
    ],
    technologies: [
      "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "MongoDB", 
      "Flask", "FastAPI", "React", "Node.js", "Google Cloud", "AWS", 
      "Machine Learning", "Data Analysis", "Git", "Docker"
    ]
  },
  projects: [
    {
      id: 1,
      title: "Company Website",
      duration: "Jul 2025",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "Modern company website with responsive design and animations",
      featured: true
    },
    {
      id: 2,
      title: "Kaggle Capstone Project 2025 - Gen AI LLM Chat Interface",
      duration: "Apr 2025 - May 2025",
      category: "Machine Learning",
      technologies: ["Python", "Google Gemini", "RAG", "Databases"],
      description: "Le Petit Cafe — A Prototype Generative AI Large Language Model Chat Interface with RAG capabilities",
      featured: true
    },
    {
      id: 3,
      title: "LifeSynced Web Application",
      duration: "Oct 2024 - Nov 2024",
      category: "Web Development",
      technologies: ["TypeScript", "HTML", "JavaScript", "CSS"],
      description: "All-in-one health companion syncing wellness, community, and technology. Features biodata, connect & sync, wiki-health, and lifestyle schedule manager",
      featured: true
    },
    {
      id: 4,
      title: "Enterprise Sales Scheduler Application",
      duration: "Jun 2023 - Jul 2023",
      category: "Data Engineering",
      technologies: ["Python", "Tkinter", "SQL", "Databases"],
      description: "Scheduler application with functioning database for manufacturer enterprises. Records project details, sale profits, materials suppliers, customer addresses, etc.",
      featured: true
    },
    {
      id: 5,
      title: "Torque, Inertia, and Force Calculator",
      duration: "Feb 2023 - Mar 2023",
      category: "Tkinter Apps",
      technologies: ["Python", "SQL", "Databases"],
      description: "Physics calculator app with database feature to calculate and store torque, inertia, and force calculations",
      featured: false
    },
    {
      id: 6,
      title: "Building a Company Website",
      duration: "Apr 2022 - Jul 2022",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "Company website with multiple animations, responsive layout, and static/floating buttons",
      featured: false
    },
    {
      id: 7,
      title: "Web Application Login System",
      duration: "Apr 2022 - May 2022",
      category: "Web Development",
      technologies: ["Python", "Flask", "SQLite3", "MySQL"],
      description: "Secure login and registration system built with Flask Python and SQLite3",
      featured: false
    },
    {
      id: 8,
      title: "Explotour - Indonesia Tourism Website",
      duration: "Oct 2021 - Mar 2022",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "Informative website featuring linked tabs, clickable icons, smooth UI, and information on Indonesia's tourism",
      featured: false
    }
  ],
  certifications: [
    {
      name: "Digital Transformation with Google Cloud",
      issuer: "Google Cloud",
      date: "May 2025",
      credentialId: "15873556",
      skills: ["Cloud Computing"],
      category: "Recent"
    },
    {
      name: "Exploring Data Transformation with Google Cloud",
      issuer: "Google Cloud", 
      date: "May 2025",
      credentialId: "16036449",
      skills: ["Databases", "Cloud Computing"],
      category: "Recent"
    },
    {
      name: "2 years on Kaggle",
      issuer: "Kaggle",
      date: "Apr 2025",
      skills: ["Data Analysis"],
      category: "Recent"
    },
    {
      name: "5-day Intensive Gen AI course with Kaggle & Google",
      issuer: "Kaggle & Google",
      date: "Apr 2025",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      category: "Recent"
    },
    {
      name: "Deep Dive: Building Your First Pipeline",
      issuer: "Palantir",
      date: "Apr 2025",
      credentialId: "geikuyhsk7se",
      skills: ["Data Analysis"],
      category: "Recent"
    },
    {
      name: "Deep Dive: Data Analysis in Contour",
      issuer: "Palantir",
      date: "Apr 2025",
      credentialId: "ybygtse7p5r3",
      skills: ["Data Analysis"],
      category: "Recent"
    },
    {
      name: "Deep Dive: Data Analysis in Quiver",
      issuer: "Palantir",
      date: "Apr 2025",
      credentialId: "cecqrtityojm",
      skills: ["Data Analysis"],
      category: "Recent"
    },
    {
      name: "Foundry & AIP Builder Foundations",
      issuer: "Palantir",
      date: "Apr 2025",
      credentialId: "62wbt6q3tnbu",
      skills: ["Data Analysis"],
      category: "Recent"
    },
    {
      name: "C Programming - 4 Star Silver Badge",
      issuer: "HackerRank",
      date: "Mar 2025",
      skills: ["C Programming"],
      category: "Programming"
    },
    {
      name: "Python Programming - 5 Star Gold Badge",
      issuer: "HackerRank", 
      date: "Nov 2024",
      skills: ["Python"],
      category: "Programming"
    },
    {
      name: "Belajar DevOps",
      issuer: "Dicoding Indonesia",
      date: "Nov 2024",
      expires: "Nov 2027",
      credentialId: "81P24LM38ZOY",
      skills: ["DevOps"],
      category: "Programming"
    },
    {
      name: "Project Management",
      issuer: "Dicoding Indonesia",
      date: "Sep 2024",
      expires: "Sep 2027",
      credentialId: "1RXYL9RR9PVM",
      category: "Management"
    },
    {
      name: "Bilingual Diploma",
      issuer: "International Baccalaureate",
      date: "Jul 2024",
      category: "Academic"
    },
    {
      name: "IB Academic Award for Computer Science SL",
      issuer: "International Baccalaureate",
      date: "July 2023",
      skills: ["Databases", "Python"],
      category: "Academic"
    },
    {
      name: "IB Academic Award for Indonesian LL SL",
      issuer: "International Baccalaureate",
      date: "Dec 2023",
      skills: ["Indonesian", "Literature"],
      category: "Academic"
    },
    {
      name: "IB Academic Award for Mathematics Analysis and Approaches HL",
      issuer: "International Baccalaureate",
      date: "Dec 2022",
      skills: ["Mathematics", "Analysis"],
      category: "Academic"
    },
    {
      name: "IELTS Academic English Language Exam - Band 7.5",
      issuer: "IELTS",
      date: "Aug 2023",
      skills: ["English"],
      category: "Language"
    },
    {
      name: "Machine Learning",
      issuer: "Dicoding Indonesia",
      date: "Aug 2022",
      expires: "Aug 2025",
      credentialId: "JMZVG5R6JZN9",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      category: "Machine Learning"
    },
    {
      name: "Machine Learning",
      issuer: "Kaggle",
      date: "Jun 2022",
      skills: ["Python", "Machine Learning"],
      category: "Machine Learning"
    },
    {
      name: "Juara 1 Kuis Penjaga Langit - National Level (Twice)",
      issuer: "Indonesian Air Force",
      date: "Dec 2020",
      category: "Awards"
    }
  ],
  contact: {
    email: "leonhard.suharjo@gmail.com",
    phone: "+62 811-1588-521",
    location: "Bogor-West Java-Indonesia",
    linkedin: "https://linkedin.com/in/leonhard-satria-suharjo",
    github: "https://github.com/leonhardsuharjo"
  },
  stats: {
    yearsExperience: 4,
    projectsCompleted: 8,
    certificationsEarned: 35,
    programmingLanguages: 6
  }
};

// Helper functions
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const createEl = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  return el;
};

// Loader
function initLoader() {
  const loader = $("#loader");
  if (!loader) return;
  
  const removeLoader = () => {
    loader.style.opacity = "0";
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 500);
  };

  if (document.readyState === "complete") {
    setTimeout(removeLoader, 100);
  } else {
    window.addEventListener("load", removeLoader);
    setTimeout(removeLoader, 2000);
  }
}

// Scroll Progress
function initScrollProgress() {
  const bar = $("#scroll-progress");
  if (!bar) return;
  
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollTop / docHeight) * 100, 100);
    bar.style.width = `${progress}%`;
  };
  
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

// Theme Toggle
function initThemeToggle() {
  const toggleBtn = $("#theme-toggle");
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-color-scheme") || "dark";
    const newTheme = current === "dark" ? "light" : "dark";
    html.setAttribute("data-color-scheme", newTheme);
  });
}

// Hamburger Menu
function initHamburger() {
  const hamburger = $("#hamburger");
  const drawer = $("#mobile-drawer");
  if (!hamburger || !drawer) return;
  
  hamburger.addEventListener("click", () => {
    drawer.classList.toggle("active");
  });
  
  $$(".drawer-link").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("active");
    });
  });
}

// Fixed Typing Effect
function initTypingEffect() {
  const el = $("#typing");
  if (!el) return;
  
  const specialties = PORTFOLIO_DATA.personalInfo.specialties;
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const current = specialties[currentIndex];
    
    if (!current) {
      // Reset if we somehow get an undefined specialty
      currentIndex = 0;
      charIndex = 0;
      isDeleting = false;
      setTimeout(type, 100);
      return;
    }
    
    if (!isDeleting) {
      // Typing forward
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === current.length) {
        // Finished typing current word, start deleting after pause
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
        return;
      }
      setTimeout(type, 150); // Typing speed
    } else {
      // Deleting backward
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        // Finished deleting, move to next word
        isDeleting = false;
        currentIndex = (currentIndex + 1) % specialties.length;
        setTimeout(type, 500); // Pause before next word
        return;
      }
      setTimeout(type, 75); // Deleting speed
    }
  }
  
  // Start typing after initial delay
  setTimeout(type, 1000);
}

// Stats Animation
function initStatsAnimation() {
  const statNumbers = $$('.stat-number');
  
  function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 30);
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateNumber(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

// About Section
function initAbout() {
  const bioEl = $("#bio");
  if (bioEl) {
    bioEl.textContent = PORTFOLIO_DATA.personalInfo.bio;
  }
  
  const techList = $("#tech-list");
  if (techList) {
    PORTFOLIO_DATA.personalInfo.technologies.forEach(tech => {
      const li = createEl("li", "tech-item");
      li.textContent = tech;
      techList.appendChild(li);
    });
  }
  
  const container = $("#skill-charts");
  if (container && window.Chart) {
    const colors = ["#1FB8CD", "#FFC185", "#B4413C", "#ECEBD5", "#5D878F", "#DB4545", "#D2BA4C", "#964325"];
    
    PORTFOLIO_DATA.personalInfo.skills.forEach((skill, index) => {
      const wrapper = createEl("div", "skill-chart fade-in");
      
      const chartContainer = createEl("div", "chart-container");
      chartContainer.style.position = "relative";
      chartContainer.style.height = "120px";
      chartContainer.style.width = "120px";
      
      const canvas = createEl("canvas");
      chartContainer.appendChild(canvas);
      wrapper.appendChild(chartContainer);
      
      const label = createEl("span", "skill-name");
      label.textContent = skill.name;
      wrapper.appendChild(label);
      
      container.appendChild(wrapper);
      
      new Chart(canvas.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["Level", "Remaining"],
          datasets: [{
            data: [skill.level, 100 - skill.level],
            backgroundColor: [colors[index % colors.length], "rgba(255,255,255,0.1)"],
            borderWidth: 0
          }]
        },
        options: {
          cutout: "70%",
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });
  }
}

// Projects
function initProjects() {
  const grid = $("#project-grid");
  const filtersContainer = $("#filters");
  const searchInput = $("#project-search");
  
  if (!grid || !filtersContainer) return;
  
  const categories = ["All", ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];
  categories.forEach((category, index) => {
    const btn = createEl("button", `filter-btn${index === 0 ? " active" : ""}`);
    btn.textContent = category;
    btn.dataset.category = category;
    filtersContainer.appendChild(btn);
  });
  
  function renderProjects() {
    const activeCategory = $(".filter-btn.active")?.dataset.category || "All";
    const searchQuery = searchInput?.value.toLowerCase() || "";
    
    grid.innerHTML = "";
    
    const filteredProjects = PORTFOLIO_DATA.projects.filter(project => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
    
    filteredProjects.forEach(project => {
      const card = createEl("article", "project-card fade-in");
      card.innerHTML = `
        <div class="project-thumbnail">📁 ${project.title}</div>
        <div class="project-content">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-duration">Duration: ${project.duration}</div>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>
        </div>
      `;
      
      card.addEventListener("click", () => {
        openProjectModal(project);
      });
      
      grid.appendChild(card);
    });
    
    if (filteredProjects.length === 0) {
      const message = createEl("p");
      message.textContent = "No projects found matching your criteria.";
      message.style.textAlign = "center";
      message.style.color = "var(--color-text-secondary)";
      grid.appendChild(message);
    }
    
    if (window.observer) {
      $$(".fade-in").forEach(el => window.observer.observe(el));
    }
  }
  
  filtersContainer.addEventListener("click", (e) => {
    if (e.target.matches(".filter-btn")) {
      $$(".filter-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      renderProjects();
    }
  });
  
  if (searchInput) {
    searchInput.addEventListener("input", renderProjects);
  }
  
  renderProjects();
}

// Certifications
function initCertifications() {
  const grid = $("#certifications-grid");
  const filtersContainer = $("#cert-filters");
  
  if (!grid || !filtersContainer) return;
  
  const categories = ["All", ...new Set(PORTFOLIO_DATA.certifications.map(c => c.category))];
  categories.forEach((category, index) => {
    const btn = createEl("button", `filter-btn${index === 0 ? " active" : ""}`);
    btn.textContent = category;
    btn.dataset.category = category;
    filtersContainer.appendChild(btn);
  });
  
  function renderCertifications() {
    const activeCategory = $(".filter-btn.active", filtersContainer)?.dataset.category || "All";
    
    grid.innerHTML = "";
    
    const filteredCerts = PORTFOLIO_DATA.certifications.filter(cert => {
      return activeCategory === "All" || cert.category === activeCategory;
    });
    
    // Sort by date (most recent first)
    filteredCerts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    filteredCerts.forEach(cert => {
      const card = createEl("div", "cert-card fade-in");
      card.innerHTML = `
        <h3 class="cert-title">${cert.name}</h3>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-date">${cert.date}${cert.expires ? ` - Expires: ${cert.expires}` : ""}</div>
        ${cert.credentialId ? `<div class="cert-credential">ID: ${cert.credentialId}</div>` : ""}
        ${cert.skills ? `<div class="cert-skills">
          ${cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
        </div>` : ""}
      `;
      grid.appendChild(card);
    });
    
    if (window.observer) {
      $$(".fade-in").forEach(el => window.observer.observe(el));
    }
  }
  
  filtersContainer.addEventListener("click", (e) => {
    if (e.target.matches(".filter-btn")) {
      $$(".filter-btn", filtersContainer).forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      renderCertifications();
    }
  });
  
  renderCertifications();
}

// Resume PDF functionality
function initResume() {
  const fullscreenBtn = $("#fullscreen-btn");
  const downloadBtn = $("#download-btn");
  const resumePdf = $("#resume-pdf");
  const pdfModal = $("#pdf-modal");
  const fullscreenPdf = $("#fullscreen-pdf");
  
  // Since we don't have an actual PDF, show a placeholder message
  const placeholderHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: var(--color-bg-1); color: var(--color-text); padding: 2rem; text-align: center; border-radius: var(--radius-lg);">
      <h3 style="color: var(--color-primary); margin-bottom: 1rem;">📄 Resume PDF</h3>
      <p style="margin-bottom: 1.5rem; color: var(--color-text-secondary);">PDF functionality ready - upload your resume PDF to enable viewing and downloading.</p>
      <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-base); border: 1px solid var(--color-border);">
        <p style="margin: 0;"><strong>Leonhard Satria Suharjo</strong></p>
        <p style="margin: 0.5rem 0; color: var(--color-primary);">Backend Developer & Data Engineer</p>
        <p style="margin: 0; color: var(--color-text-secondary);">📧 leonhard.suharjo@gmail.com</p>
        <p style="margin: 0.5rem 0 0 0; color: var(--color-text-secondary);">📍 Bogor-West Java-Indonesia</p>
      </div>
    </div>
  `;
  
  if (resumePdf) {
    resumePdf.style.display = 'none';
    resumePdf.parentNode.innerHTML = placeholderHTML;
  }
  
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      if (pdfModal && fullscreenPdf) {
        fullscreenPdf.parentNode.innerHTML = placeholderHTML;
        pdfModal.classList.remove("hidden");
        pdfModal.classList.add("active");
      }
    });
  }
  
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      alert("Resume download functionality ready - connect your PDF file to enable downloads.");
    });
  }
}

// Modal functionality
function openProjectModal(project) {
  const modal = $("#project-modal");
  const title = $("#modal-title");
  const body = $("#modal-body");
  const footer = $("#modal-footer");
  
  if (!modal || !title || !body || !footer) return;
  
  title.textContent = project.title;
  
  body.innerHTML = `
    <div class="project-thumbnail" style="margin-bottom: 1rem;">📁 ${project.title}</div>
    <p><strong>Duration:</strong> ${project.duration}</p>
    <p><strong>Category:</strong> ${project.category}</p>
    <p style="margin: 1rem 0;">${project.description}</p>
    <h4 style="margin-bottom: 0.5rem;">Technologies Used</h4>
    <div class="project-tech">
      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
    </div>
  `;
  
  footer.innerHTML = `
    <button class="btn btn--primary btn--sm" onclick="alert('Demo link would go here')">View Details</button>
  `;
  
  modal.classList.remove("hidden");
  modal.classList.add("active");
}

function initModal() {
  const modals = $$(".modal");
  
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target.dataset.close !== undefined || 
          e.target.classList.contains("modal__overlay") ||
          e.target === modal) {
        modal.classList.remove("active");
        modal.classList.add("hidden");
      }
    });
  });
}

// Contact Form with enhanced validation
function initContact() {
  const detailsContainer = $("#contact-details");
  if (detailsContainer) {
    const contact = PORTFOLIO_DATA.contact;
    const icons = {
      email: "📧",
      phone: "📞", 
      location: "📍",
      linkedin: "💼",
      github: "💻"
    };
    
    Object.entries(contact).forEach(([key, value]) => {
      const detail = createEl("div", "contact-detail fade-in");
      
      const icon = createEl("span", "contact-icon");
      icon.textContent = icons[key] || "🔗";
      
      const content = createEl("div");
      if (key === "email") {
        content.innerHTML = `<a href="mailto:${value}" class="link-btn">${value}</a>`;
      } else if (key === "phone") {
        content.innerHTML = `<a href="tel:${value}" class="link-btn">${value}</a>`;
      } else if (value.startsWith("http")) {
        content.innerHTML = `<a href="${value}" target="_blank" class="link-btn">${value.replace("https://", "")}</a>`;
      } else {
        content.textContent = value;
      }
      
      detail.appendChild(icon);
      detail.appendChild(content);
      detailsContainer.appendChild(detail);
    });
  }
  
  // Enhanced form validation and submission
  const form = $("#contact-form");
  if (form) {
    const fields = {
      name: $("#name"),
      email: $("#email"),
      subject: $("#subject"),
      message: $("#message")
    };
    
    const errorElements = {
      name: $("#name-error"),
      email: $("#email-error"),
      subject: $("#subject-error"),
      message: $("#message-error")
    };
    
    const formStatus = $("#form-status");
    
    function validateField(field, value) {
      switch(field) {
        case 'name':
          return value.trim().length >= 2 ? null : "Name must be at least 2 characters long";
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value) ? null : "Please enter a valid email address";
        case 'subject':
          return value.trim().length >= 5 ? null : "Subject must be at least 5 characters long";
        case 'message':
          return value.trim().length >= 10 ? null : "Message must be at least 10 characters long";
        default:
          return null;
      }
    }
    
    function showError(field, message) {
      const errorEl = errorElements[field];
      const fieldEl = fields[field];
      if (errorEl && fieldEl) {
        errorEl.textContent = message;
        errorEl.classList.add("show");
        fieldEl.classList.add("error");
      }
    }
    
    function clearError(field) {
      const errorEl = errorElements[field];
      const fieldEl = fields[field];
      if (errorEl && fieldEl) {
        errorEl.classList.remove("show");
        fieldEl.classList.remove("error");
      }
    }
    
    function showFormStatus(message, type) {
      if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
      }
    }
    
    function hideFormStatus() {
      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
      }
    }
    
    // Real-time validation
    Object.entries(fields).forEach(([fieldName, fieldEl]) => {
      if (fieldEl) {
        fieldEl.addEventListener("blur", () => {
          const error = validateField(fieldName, fieldEl.value);
          if (error) {
            showError(fieldName, error);
          } else {
            clearError(fieldName);
          }
        });
        
        fieldEl.addEventListener("input", () => {
          if (fieldEl.classList.contains("error")) {
            const error = validateField(fieldName, fieldEl.value);
            if (!error) {
              clearError(fieldName);
            }
          }
        });
      }
    });
    
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Clear previous status
      hideFormStatus();
      
      // Validate all fields
      let hasErrors = false;
      Object.entries(fields).forEach(([fieldName, fieldEl]) => {
        if (fieldEl) {
          const error = validateField(fieldName, fieldEl.value);
          if (error) {
            showError(fieldName, error);
            hasErrors = true;
          } else {
            clearError(fieldName);
          }
        }
      });
      
      if (hasErrors) {
        showFormStatus("Please fix the errors above", "error");
        return;
      }
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        showFormStatus("✅ Thank you for your message! I'll get back to you soon.", "success");
        form.reset();
      } catch (error) {
        showFormStatus("❌ There was an error sending your message. Please try again.", "error");
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

// Back to top button
function initBackToTop() {
  const backToTopBtn = $("#back-to-top");
  if (!backToTopBtn) return;
  
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }
  
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Footer
function initFooter() {
  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Scroll Animations
function initScrollAnimations() {
  window.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        window.observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  $$(".fade-in").forEach(el => window.observer.observe(el));
}

// Fixed smooth scrolling for navigation links
function initSmoothScrolling() {
  // Handle all navigation links
  const navLinks = $$('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      
      // Skip if it's just "#" or empty
      if (!href || href === "#") {
        return;
      }
      
      e.preventDefault();
      
      const targetId = href.substring(1); // Remove the #
      const target = document.getElementById(targetId);
      
      if (target) {
        const header = $(".header");
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = target.offsetTop - headerHeight - 20; // Extra padding
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });
        
        // Close mobile menu if open
        const drawer = $("#mobile-drawer");
        if (drawer && drawer.classList.contains("active")) {
          drawer.classList.remove("active");
        }
      }
    });
  });
}

// Initialize everything
function init() {
  // Set smooth scrolling behavior
  document.documentElement.style.scrollBehavior = "smooth";
  
  // Initialize all components
  initLoader();
  initScrollProgress();
  initThemeToggle();
  initHamburger();
  initTypingEffect();
  initStatsAnimation();
  initAbout();
  initProjects();
  initCertifications();
  initResume();
  initModal();
  initContact();
  initBackToTop();
  initFooter();
  initScrollAnimations();
  initSmoothScrolling();
}

// Start the application
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}