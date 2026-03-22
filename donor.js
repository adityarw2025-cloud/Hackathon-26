function showDonorSection(id) {
    // Hide all sections
    document.querySelectorAll('.donor-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Show target
    document.getElementById('section-' + id).classList.add('active');
    document.getElementById('link-' + id).classList.add('active');
}

// Simulated countdown logic
window.onload = () => {
    let days = 72;
    const daysEl = document.getElementById('days-left');
    
    // Simple visual tick
    console.log("Donor Dashboard initialized. Remaining days: " + days);
};