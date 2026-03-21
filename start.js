// 1. Initialize Supabase 
// Replace these with your actual project URL and Anon Key from the Supabase Dashboard
const _supabaseUrl = 'https://your-project-id.supabase.co';
const _supabaseKey = 'your-anon-key-here';

// Check if supabase is loaded from the CDN in HTML
let supabase;
if (typeof supabase !== 'undefined') {
    supabase = supabase.createClient(_supabaseUrl, _supabaseKey);
}

// 2. Select Elements
const getStartedBtn = document.querySelector('.get-started');
const loginBtn = document.querySelector('.login-btn');
const servicesBtn = document.querySelector('.services-btn');

// 3. Handle Redirects
// Redirect "Get Started" to Signup/Login
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html'; 
    });
}

// Redirect top "Login" button
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
}

// Smooth scroll to services if needed
if (servicesBtn) {
    servicesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // If you add a services section later, this will scroll to it
        const servicesSection = document.querySelector('.stats-footer');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// 4. Subtle Hover Animations for Floating Cards
// This makes the UI feel even more reactive
const floatingCards = document.querySelectorAll('.floating-card, .floating-badge');

floatingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animationPlayState = 'paused';
        card.style.transform = 'scale(1.05) translateY(-20px)';
        card.style.transition = '0.3s';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animationPlayState = 'running';
        card.style.transform = 'scale(1) translateY(0)';
    });
});

console.log("Lifestream Logic Loaded: Redirects Active.");