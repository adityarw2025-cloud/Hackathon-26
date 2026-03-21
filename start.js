// 1. Initialize Supabase
const _supabaseUrl = 'https://uobxejalrnrwttqwjvij.supabase.co';
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvYnhlamFscm5yd3R0cXdqdmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMTQ1MDMsImV4cCI6MjA4OTY5MDUwM30.YQYKqjBIIHnsdR7o1gOp-szUD4pMwRQqdFejAod-KrE';

// ✅ Correct initialization
const supabase = window.supabase.createClient(_supabaseUrl, _supabaseKey);


// 2. Select Elements
const getStartedBtn = document.querySelector('.get-started');
const loginBtn = document.querySelector('.login-btn');
const servicesBtn = document.querySelector('.services-btn');


// 3. Handle Redirects
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });
}

if (servicesBtn) {
    servicesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const servicesSection = document.querySelector('.stats-footer');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


// 4. Hover Animations
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


// 🔥 5. SIGNUP FUNCTION (IMPORTANT ADDITION)
async function signup() {
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;
    const role = document.getElementById("role")?.value;

    if (!name || !email || !password || !role) {
        alert("Please fill all fields");
        return;
    }

    // Create user
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        alert(error.message);
        return;
    }

    const user = data.user;

    // Insert into profiles table
    const { error: insertError } = await supabase
        .from('profiles')
        .insert([
            {
                id: user.id,
                full_name: name,
                email: email,
                role: role
            }
        ]);

    if (insertError) {
        alert(insertError.message);
        return;
    }

    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}


console.log("Lifestream Logic Loaded ✅");
