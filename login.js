const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page refresh

    // Get values from your HTML input IDs
    const username = document.getElementById('email').value.toLowerCase(); 
    const password = document.getElementById('password').value;

    // --- ROUTING LOGIC ---

    // 1. Admin Routing
if (username === "admin@test.com" && password === "admin123") {
    alert("Access Granted: Admin Dashboard");
    window.location.href = "admindashboard.html";
} 

// 2. Donor Routing
else if (username === "logindonor@test" && password === "donor123") {
    alert("Access Granted: Donor Dashboard");
    localStorage.setItem('userName', 'Aditya'); 
    window.location.href = "donordashbord.html";
}

// 3. User Routing
else if (username === "userdashboard@test" && password === "user123") {
    alert("Access Granted: Hospital Portal");
    window.location.href = "userdashbord.html";
}

    // 4. Default Error
    else {
        alert("Invalid Credentials! Try: \nAdmin: admin/admin123 \nDonor: aditya/donor123");
    }
});