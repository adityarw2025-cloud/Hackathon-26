window.onload = () => {
    const userRole = localStorage.getItem('userRole'); // We saved this in the login script
    
    if (userRole !== 'admin') {
        alert("Access Denied! Admins only.");
        window.location.href = "login.html";
    }
};

// Add your Admin specific functions here (e.g. ApproveRequest())