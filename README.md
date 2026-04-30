# Idoko Contech Construction Company Website

A modern, responsive website for Idoko Contech Construction Company with home, login, and registration pages.

## Project Structure

```
website/
├── index.html              # Home page
├── login.html              # Login page
├── register.html           # Registration page
├── dashboard.html          # User dashboard (protected)
├── public/
│   ├── css/
│   │   └── styles.css      # Global styles and responsive design
│   ├── js/
│   │   └── script.js       # Form validation and authentication logic
│   └── images/             # Image assets (for future use)
└── pages/                  # Additional pages directory (for future use)
```

## Features

### 1. Home Page (index.html)
- Professional hero section with company information
- Features section highlighting why choose Idoko Contech
- Services section with 6 main service categories
- Track record statistics
- Call-to-action sections
- Responsive design for mobile and desktop

### 2. Registration Page (register.html)
- Form validation for all fields
- Fields included:
  - Full Name (required)
  - Email Address (required, validated)
  - Phone Number (required, at least 10 digits)
  - Company Name (optional)
  - Password (required, minimum 6 characters)
  - Confirm Password (required, must match)
  - Terms & Conditions agreement
- Form data is stored in browser's localStorage
- Automatic redirect to login page after successful registration

### 3. Login Page (login.html)
- Email and password input fields
- "Remember me" checkbox
- "Forgot password" link
- Form validation
- Authenticates against localStorage data
- Redirects to dashboard on successful login
- Links to registration page for new users

### 4. Dashboard (dashboard.html)
- Protected page (requires login)
- Displays logged-in user information
- Shows user statistics (active projects, completed projects, messages, meetings)
- Recent projects table with status tracking
- Quick action buttons
- Document management section
- Logout functionality

## How to Use

### Getting Started

1. Open the website in a web browser
2. Start from the home page (`index.html`)
3. Navigate between pages using the navigation menu

### Registration

1. Click on "Register" button on the home page or navigation menu
2. Fill in all required fields
3. Accept the Terms of Service
4. Click "Create Account"
5. You will be redirected to the login page

### Login

1. Go to the login page using the "Login" button
2. Enter your registered email and password
3. Click "Login"
4. You will be redirected to your dashboard

### Navigation

- **Home Page**: Shows company information and services
- **Services**: Section on home page with detailed service offerings
- **About**: Why Choose Idoko Contech section
- **Login/Register**: Access authentication pages
- **Dashboard**: Available after login - view projects and documents

## Form Validation

The website includes comprehensive client-side form validation:

- **Email**: Must be a valid email format
- **Phone**: Must contain at least 10 digits
- **Password**: Minimum 6 characters
- **Password Confirmation**: Must match the password field
- **Full Name**: Required field
- **All required fields**: Must be filled before submission

## Data Storage

- User registration data is stored in the browser's localStorage
- Passwords are encoded using base64 (for demo purposes only - NOT suitable for production)
- Each user is stored with a key: `idokoUser_[email]`
- Logged-in user information is stored as: `loggedInUser`

⚠️ **Important**: This application uses localStorage for demonstration purposes. For production use:
- Implement a proper backend server
- Use encryption for passwords
- Store data in a secure database
- Implement proper session management

## Styling

The website uses a professional color scheme:
- **Primary Color**: #1a5c3a (Green) - Used for headers and main elements
- **Secondary Color**: #f39c12 (Orange) - Used for accents and CTAs
- **Text Color**: #2c3e50 (Dark Gray) - For readability

### Responsive Design

The website is responsive and works on:
- Desktop screens (1200px and above)
- Tablets (768px - 1199px)
- Mobile devices (below 768px)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- All modern browsers that support HTML5 and ES6

## JavaScript Features

- Form validation functions
- localStorage-based authentication
- Password encoding/decoding
- Session management
- Automatic page protection for logged-in pages
- User information display
- Logout functionality

## Testing the Website

### Test Registration Flow:
1. Fill out the registration form with:
   - Full Name: John Doe
   - Email: john@example.com
   - Phone: 08012345678
   - Company: ABC Construction
   - Password: password123
2. Click Create Account
3. You'll be redirected to login

### Test Login Flow:
1. Use the credentials from registration
2. Enter email: john@example.com
3. Enter password: password123
4. Click Login
5. You'll see the Dashboard

### Test Form Validation:
- Try submitting with empty fields - you'll see error messages
- Try entering invalid email format
- Try entering passwords that don't match
- Try entering phone number with less than 10 digits

## Future Enhancements

- Add backend server (Node.js/Express, Python/Django, etc.)
- Implement real database (MongoDB, PostgreSQL, etc.)
- Add email verification
- Implement password reset functionality
- Add user profile page with edit capabilities
- Add project creation and management features
- Integrate payment processing
- Add file upload functionality
- Implement real-time notifications
- Add team collaboration features

## Support

For questions or issues with the website, contact:
- 📞 Phone: +234 (0) 700 000 0000
- 📧 Email: info@idokocontech.com
- 📍 Location: Lagos, Nigeria

## License

© 2026 Idoko Contech Construction Company. All rights reserved.

---

**Version**: 1.0
**Last Updated**: April 2026
**Created**: April 2026
