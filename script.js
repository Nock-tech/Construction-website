// Idoko Contech - JavaScript Functions

// Form validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validatePhone(phone) {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Show message
function showMessage(message, type) {
  const messageDiv = document.getElementById('message');
  if (messageDiv) {
    messageDiv.innerHTML = `<div class="message ${type}">${message}</div>`;
    messageDiv.scrollIntoView({ behavior: 'smooth' });
    
    if (type === 'success') {
      setTimeout(() => {
        messageDiv.innerHTML = '';
      }, 5000);
    }
  }
}

// Register form submission
function handleRegister(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const company = document.getElementById('company').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  // Validation
  if (!fullName) {
    showMessage('Please enter your full name.', 'error');
    return;
  }
  
  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }
  
  if (!validatePhone(phone)) {
    showMessage('Please enter a valid phone number (at least 10 digits).', 'error');
    return;
  }
  
  if (!validatePassword(password)) {
    showMessage('Password must be at least 6 characters long.', 'error');
    return;
  }
  
  if (password !== confirmPassword) {
    showMessage('Passwords do not match.', 'error');
    return;
  }
  
  // Store in localStorage (for demo purposes)
  const userData = {
    fullName,
    email,
    phone,
    company,
    password: btoa(password) // Simple base64 encoding (NOT for production)
  };
  
  localStorage.setItem('idokoUser_' + email, JSON.stringify(userData));
  
  showMessage('Registration successful! Redirecting to login...', 'success');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
}

// Show popup modal
function showPopup(title, message, callback) {
  const modal = document.getElementById('popupModal');
  const modalTitle = document.getElementById('popupTitle');
  const modalMessage = document.getElementById('popupMessage');
  
  if (modal && modalTitle && modalMessage) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add('show');
    
    if (callback) {
      // Auto-close after 3 seconds and execute callback
      setTimeout(() => {
        closePopup();
        callback();
      }, 3000);
    }
  }
}

// Close popup modal
function closePopup() {
  const modal = document.getElementById('popupModal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Login form submission
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  
  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }
  
  if (!password) {
    showMessage('Please enter your password.', 'error');
    return;
  }
  
  // Check localStorage for user
  const userData = localStorage.getItem('idokoUser_' + email);
  
  if (!userData) {
    showMessage('Email not found. Please register first.', 'error');
    return;
  }
  
  const user = JSON.parse(userData);
  if (btoa(password) !== user.password) {
    showMessage('Incorrect password. Please try again.', 'error');
    return;
  }
  
  // Successful login - Show popup
  localStorage.setItem('loggedInUser', email);
  showPopup('Login Successful!', 'Redirecting to your dashboard...', function() {
    window.location.href = 'dashboard.html';
  });
}

// Check if user is logged in
function checkLogin() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser && window.location.pathname.includes('dashboard')) {
    window.location.href = 'login.html';
  }
}

// Logout
function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}

// Display logged-in user info
function showUserInfo() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const userElement = document.getElementById('userInfo');
  
  if (loggedInUser && userElement) {
    const userData = JSON.parse(localStorage.getItem('idokoUser_' + loggedInUser));
    userElement.innerHTML = `
      <span>Welcome, ${userData.fullName}!</span>
      <a href="#" onclick="logout()" class="btn btn-primary" style="margin-left: 10px; padding: 8px 15px;">Logout</a>
    `;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  checkLogin();
  showUserInfo();
  initSlideshow();
  initExitIntent();
});

// Slideshow variables
let slideshowIndex = 0;
let slideshowTimer;

// Initialize slideshow
function initSlideshow() {
  showSlide(slideshowIndex);
  autoSlideshow();
}

// Auto advance slideshow
function autoSlideshow() {
  clearTimeout(slideshowTimer);
  slideshowIndex++;
  showSlide(slideshowIndex);
  slideshowTimer = setTimeout(autoSlideshow, 5000); // Change slide every 5 seconds
}

// Show specific slide
function showSlide(n) {
  const slides = document.querySelectorAll('.slideshow-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (slides.length === 0) return;
  
  if (n >= slides.length) {
    slideshowIndex = 0;
  }
  if (n < 0) {
    slideshowIndex = slides.length - 1;
  }
  
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current slide
  slides[slideshowIndex].classList.add('active');
  dots[slideshowIndex].classList.add('active');
}

// Manual slide selection
function currentSlide(n) {
  clearTimeout(slideshowTimer);
  slideshowIndex = n;
  showSlide(n);
  slideshowTimer = setTimeout(autoSlideshow, 5000);
}

// Change slide with buttons
function changeSlide(n) {
  clearTimeout(slideshowTimer);
  slideshowIndex += n;
  showSlide(slideshowIndex);
  slideshowTimer = setTimeout(autoSlideshow, 5000);
}

// Exit Intent Modal Functions
let exitModalShown = false;

// Initialize exit intent listener
function initExitIntent() {
  document.addEventListener('mouseleave', handleMouseLeave);
}

// Handle mouse leaving the page
function handleMouseLeave(event) {
  // Only show if exiting from top and hasn't been shown yet
  if (event.clientY <= 0 && !exitModalShown) {
    exitModalShown = true;
    showExitModal();
  }
}

// Show exit modal
function showExitModal() {
  const modal = document.getElementById('exitModal');
  if (modal) {
    modal.classList.add('show');
  }
}

// Close exit modal
function closeExitModal() {
  const modal = document.getElementById('exitModal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Handle exit form submission
function handleExitFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('exitName').value.trim();
  const email = document.getElementById('exitEmail').value.trim();
  const phone = document.getElementById('exitPhone').value.trim();
  const message = document.getElementById('exitMessage').value.trim();
  
  // Validate
  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Store the inquiry (in production, this would send to a server)
  const inquiry = {
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString(),
    source: '20% Discount Offer'
  };
  
  // Save to localStorage
  const inquiries = JSON.parse(localStorage.getItem('idokoInquiries')) || [];
  inquiries.push(inquiry);
  localStorage.setItem('idokoInquiries', JSON.stringify(inquiries));
  
  // Show success message
  alert('Thank you! We\'ve received your inquiry. Check your email for the 20% discount code!');
  
  // Reset form
  event.target.reset();
  closeExitModal();
}
