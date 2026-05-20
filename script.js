/* ==================== Portfolio JS ==================== */

// ---- Preloader ----
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => preloader.classList.add('hidden'), 1500);
});

document.addEventListener('DOMContentLoaded', () => {

    // ---- Custom Cursor ----
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    let cursorX = 0, cursorY = 0, dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX; cursorY = e.clientY;
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
    });
    // Smooth cursor ring follows with slight lag
    (function animateCursor() {
        dotX += (cursorX - dotX) * 0.12;
        dotY += (cursorY - dotY) * 0.12;
        cursor.style.left = (dotX) + 'px';
        cursor.style.top = (dotY) + 'px';
        requestAnimationFrame(animateCursor);
    })();
    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .cert-card, .skill-tag, .contact-link-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
    // ---- Theme Toggle ----
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.className = 'fas fa-sun';
    }

    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // ---- Back to Top ----
    const backToTop = document.getElementById('backToTop');

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Typing Effect ----
    const roles = [
        'Aspiring Software Developer',
        'Flutter Developer',
        'Python | Java | C Programmer',
        'Open Source Enthusiast',
        'CSE Student @ NNRESGI',
        'Problem Solver'
    ];
    const typedEl = document.getElementById('typedRole');
    let roleIdx = 0, charIdx = 0, deleting = false;

    function typeRole() {
        const current = roles[roleIdx];
        typedEl.textContent = deleting
            ? current.substring(0, charIdx--)
            : current.substring(0, charIdx++);

        if (!deleting && charIdx > current.length) {
            setTimeout(() => { deleting = true; typeRole(); }, 2000);
            return;
        }
        if (deleting && charIdx < 0) {
            deleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
        }
        setTimeout(typeRole, deleting ? 40 : 80);
    }
    typeRole();

    // ---- Navbar Scroll ----
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const fabResume = document.getElementById('fabResume');
    function onScroll() {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        backToTop.classList.toggle('visible', scrollY > 400);
        
        // Toggle FAB visibility (show after 200px)
        if (fabResume) fabResume.style.opacity = scrollY > 200 ? '1' : '0';
        if (fabResume) fabResume.style.pointerEvents = scrollY > 200 ? 'all' : 'none';

        // Parallax Effect for Project Images
        document.querySelectorAll('.parallax-img').forEach(img => {
            const wrap = img.parentElement;
            const wrapTop = wrap.getBoundingClientRect().top;
            const viewHeight = window.innerHeight;
            
            if (wrapTop < viewHeight && wrapTop + wrap.offsetHeight > 0) {
                const percentage = (wrapTop / viewHeight) * 100;
                // Subtle move between -15% and 5%
                const translateY = (percentage * 0.2) - 10;
                img.style.transform = `translateY(${translateY}%)`;
            }
        });

        let current = '';
        sections.forEach(sec => {
            if (scrollY >= sec.offsetTop - 200) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // ---- Mobile Nav Toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinksEl = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksEl.classList.toggle('active');
    });
    navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksEl.classList.remove('active');
        });
    });

    // ---- Scroll Animations ----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 80}ms`;
        observer.observe(el);
    });

    // ---- Counter Animation ----
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(num => {
                    const target = +num.dataset.target;
                    const duration = 1500;
                    const start = performance.now();
                    function update(now) {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        num.textContent = Math.round(target * eased);
                        if (progress < 1) requestAnimationFrame(update);
                    }
                    requestAnimationFrame(update);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) counterObserver.observe(statsEl);

    // ---- Cursor Glow ----
    const glow = document.getElementById('cursorGlow');
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }, { passive: true });
    } else {
        glow.style.display = 'none';
    }

    // ---- Particle Background ----
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 50;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = Math.random() * 0.3 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 92, 231, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 92, 231, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ---- EmailJS Setup ----
    if (typeof emailjs !== 'undefined') {
        emailjs.init('HVnF5mPeKgOKl5pCQ');
    }

    // ---- Contact Form (EmailJS) ----
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('formSubmitBtn');

        if (typeof emailjs === 'undefined') {
            alert('Email service is loading. Please try again.');
            return;
        }

        btn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;

        try {
            await emailjs.sendForm('service_iynsmlf', 'template_qb0m7n9', form);
            // Show Thank You overlay
            const nameVal = form.querySelector('[name="from_name"]')?.value || 'there';
            document.getElementById('senderName').textContent = nameVal;
            document.getElementById('thankyouOverlay').classList.add('show');
            launchConfetti();
            form.reset();
        } catch (error) {
            console.error('EmailJS error:', error);
            btn.innerHTML = '<span>Failed to Send</span><i class="fas fa-times"></i>';
            btn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
        }

        setTimeout(() => {
            btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    });

    // ---- Thank You overlay close ----
    document.getElementById('thankyouClose').addEventListener('click', () => {
        document.getElementById('thankyouOverlay').classList.remove('show');
        // Reset button
        const btn = document.getElementById('formSubmitBtn');
        btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        btn.style.background = '';
        btn.disabled = false;
    });
    document.getElementById('thankyouOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
    });

    // ---- Confetti ----
    function launchConfetti() {
        const canvas = document.getElementById('confettiCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const colors = ['#6c5ce7','#00cec9','#fd79a8','#fdcb6e','#55efc4','#a29bfe'];
        const pieces = Array.from({length: 120}, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            w: Math.random() * 10 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rot: Math.random() * 360,
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 3 + 1.5,
            vr: (Math.random() - 0.5) * 5
        }));
        let raf;
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(p => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.85;
                ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
                ctx.restore();
                p.x += p.vx; p.y += p.vy; p.rot += p.vr;
            });
            if (pieces.some(p => p.y < canvas.height)) raf = requestAnimationFrame(draw);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if (raf) cancelAnimationFrame(raf);
        draw();
    }
    // ---- Smooth scroll for all anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ---- Copy to Clipboard ----
    window.copyToClipboard = function(text, el) {
        navigator.clipboard.writeText(text).then(() => {
            const feedback = document.createElement('div');
            feedback.className = 'copy-feedback';
            feedback.textContent = 'Copied!';
            el.appendChild(feedback);
            
            // Change icon temporarily
            const icon = el.querySelector('i');
            const originalClass = icon.className;
            icon.className = 'fas fa-check';
            icon.style.color = '#00c853';
            
            setTimeout(() => {
                feedback.remove();
                icon.className = originalClass;
                icon.style.color = '';
            }, 1500);
        });
    };
    // ---- Interactive Terminal ----
    const termInput = document.getElementById('terminalInput');
    const termHistory = document.getElementById('terminalHistory');
    const termBody = document.querySelector('.terminal-body');
    
    // Command history buffer
    let cmdHistoryList = [];
    let cmdHistoryIndex = -1;

    if (termInput) {
        termInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = termInput.value.trim();
                const cmdLower = cmd.toLowerCase();
                termInput.value = '';
                
                if (cmd !== '') {
                    // Push to history only if it's different from the last command
                    if (cmdHistoryList.length === 0 || cmdHistoryList[cmdHistoryList.length - 1] !== cmd) {
                        cmdHistoryList.push(cmd);
                    }
                    cmdHistoryIndex = cmdHistoryList.length;
                }
                
                // Add input to display history
                const promptLine = document.createElement('div');
                promptLine.className = 'terminal-line';
                promptLine.innerHTML = `<span class="terminal-prompt">guest@rounaq-dev:~$</span> <span class="output-cmd">${escapeHTML(cmd)}</span>`;
                termHistory.appendChild(promptLine);
                
                // Process command
                let reply = '';
                if (cmdLower === 'help') {
                    reply = `<div class="terminal-line output-text">Available commands:<br>
                             - <span class="highlight-cmd">about</span>: Brief summary about me.<br>
                             - <span class="highlight-cmd">skills</span>: List of developer tools and stack.<br>
                             - <span class="highlight-cmd">projects</span>: Display my built projects.<br>
                             - <span class="highlight-cmd">contact</span>: How to get in touch with me.<br>
                             - <span class="highlight-cmd">clear</span>: Clear this console screen.</div>`;
                } else if (cmdLower === 'about') {
                    reply = `<div class="terminal-line output-text">Hi, I'm Md Rounaq Ali! I am a B.Tech Computer Science student graduating in 2027. I specialize in building secure, high-performance web and mobile products. Passionate about problem-solving and software architecture.</div>`;
                } else if (cmdLower === 'skills') {
                    reply = `<div class="terminal-line output-text"><strong>Languages:</strong> Python, Java, C, SQL<br>
                             <strong>Frameworks:</strong> Flutter, Flask<br>
                             <strong>DevOps/Tools:</strong> GitHub, Git, MySQL, Devops, Network Security</div>`;
                } else if (cmdLower === 'projects') {
                    reply = `<div class="terminal-line output-text"><strong>Featured Projects:</strong><br>
                             - <strong>VoxCalc</strong> (Flutter, Dart, Google ML Kit AI computational suite)<br>
                             - <strong>Block Crush</strong> (Flutter, Dart, 60+ FPS game)<br>
                             - <strong>FinTrack</strong> (Flask, MySQL tracker)<br>
                             - <strong>Weather Intel</strong> (Flutter, REST API)</div>`;
                } else if (cmdLower === 'contact') {
                    reply = `<div class="terminal-line output-text"><strong>Let's connect!</strong><br>
                             - Email: tabrasali7@gmail.com<br>
                             - WhatsApp: +91 9030059421<br>
                             - Location: Hyderabad, India</div>`;
                } else if (cmdLower === 'clear') {
                    termHistory.innerHTML = '';
                } else if (cmd !== '') {
                    reply = `<div class="terminal-line output-text" style="color: #ff5f56;">Command not found: '${escapeHTML(cmd)}'. Type 'help' to see list of options.</div>`;
                }
                
                if (reply) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = reply;
                    termHistory.appendChild(tempDiv.firstElementChild);
                }
                
                // Auto scroll to bottom
                termBody.scrollTop = termBody.scrollHeight;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (cmdHistoryList.length > 0) {
                    if (cmdHistoryIndex > 0) {
                        cmdHistoryIndex--;
                    }
                    termInput.value = cmdHistoryList[cmdHistoryIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (cmdHistoryIndex < cmdHistoryList.length - 1) {
                    cmdHistoryIndex++;
                    termInput.value = cmdHistoryList[cmdHistoryIndex];
                } else {
                    cmdHistoryIndex = cmdHistoryList.length;
                    termInput.value = '';
                }
            }
        });
        
        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g, 
                tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
            );
        }
    }
});
