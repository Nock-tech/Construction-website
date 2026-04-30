# Idoko Contech Website - Setup Guide

## Quick Start

### Option 1: Direct Browser Opening (Simplest)
1. Navigate to the `website` folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Using VS Code Live Server (Recommended)
1. Open the `website` folder in VS Code
2. Install the "Live Server" extension if you haven't already
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install on the extension by Ritwick Dey
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. The website will open at `http://127.0.0.1:5500`

### Option 3: Using Python Local Server
1. Open command prompt/terminal in the `website` folder
2. Run: `python -m http.server 8000`
3. Open browser and go to `http://localhost:8000`

### Option 4: Using Node.js HTTP Server
1. Open command prompt/terminal in the `website` folder
2. Install http-server: `npm install -g http-server`
3. Run: `http-server`
4. Open the provided localhost URL in your browser

## Website Navigation

### Home Page (index.html)
- Entry point to the website
- Contains information about Idoko Contech
- Shows services offered
- Has links to register and login

### Registration (register.html)
- Create a new account
- Required fields: Full Name, Email, Phone, Password
- Optional: Company Name
- Test Registration:
  ```
  Full Name: John Odunayo
  Email: john@idokocontech.com
  Phone: 08012345678
  Company: ABC Builders
  Password: Password123!
  ```

### Login (login.html)
- Sign in with your registered email and password
- After successful login, you'll be redirected to the dashboard
- Test Login:
  ```
  Email: john@idokocontech.com
  Password: Password123!
  ```

### Dashboard (dashboard.html)
- Accessible only after logging in
- Shows project overview
- Displays recent projects
- Contains quick action buttons
- Shows documents and files

## File Structure Explanation

```
website/
│
├── index.html              # Home page (START HERE)
├── login.html              # Login page
├── register.html           # Registration page
├── dashboard.html          # User dashboard
├── README.md               # Full documentation
├── package.json            # Project metadata
│
├── public/
│   ├── css/
│   │   └── styles.css      # All styling (2000+ lines)
│   │                        # Includes responsive design
│   │                        # Color scheme and layout
│   │
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   │                        # Form validation
│   │                        # Authentication logic
│   │                        # localStorage management
│   │
│   └── images/             # Reserved for images
│
└── pages/                  # Reserved for future pages
```

## Features Overview

### ✅ Home Page Features
- Professional hero section
- 6 features highlighting company strengths
- 6 service categories
- Company statistics (150+ projects, 15+ years experience)
- Call-to-action buttons
- Responsive navigation bar
- Professional footer

### ✅ Registration Features
- Full form validation
- Email format checking
- Phone number validation (10+ digits)
- Password strength validation (6+ characters)
- Password confirmation matching
- Terms acceptance checkbox
- Auto-redirect after successful registration

### ✅ Login Features
- Email and password verification
- Remember me checkbox
- Forgot password link
- Form validation
- Auto-redirect to dashboard on success
- Error messages for invalid credentials

### ✅ Dashboard Features
- Logged-in user greeting
- Project statistics display
- Recent projects table
- Status tracking (In Progress, Completed, Planning)
- Quick action buttons
- Document management section
- Logout button

### ✅ Design Features
- Professional color scheme
- Fully responsive (mobile, tablet, desktop)
- Hover effects and transitions
- Clean and modern UI
- Green (#1a5c3a) and Orange (#f39c12) branding
- Easy navigation
- Accessibility-friendly

## Testing Checklist

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Registration form validates input
- [ ] Can register a new account
- [ ] Registered account redirects to login
- [ ] Login works with registered credentials
- [ ] Login fails with wrong credentials
- [ ] Dashboard appears after successful login
- [ ] User name displays in header
- [ ] Logout button works
- [ ] Website is responsive on mobile (open DevTools, press F12, toggle device toolbar)
- [ ] All buttons are clickable
- [ ] Form messages appear as expected

## Important Notes

### Data Storage
- **Currently**: Uses browser localStorage (for demo/testing)
- **Limitations**: 
  - Data is stored on this computer only
  - Each browser has separate data
  - Clearing browser cache will delete all accounts
  - Not suitable for production use

### For Production Deployment
You will need to:
1. Set up a backend server (Node.js, Python, Java, etc.)
2. Create a database (MongoDB, PostgreSQL, MySQL, etc.)
3. Implement proper authentication
4. Use HTTPS (SSL/TLS)
5. Remove localStorage dependency
6. Implement email verification
7. Add password reset functionality
8. Deploy to a web hosting service

### Security Note
⚠️ This is a demonstration website. The current implementation:
- Uses localStorage for persistence
- Encodes passwords in base64 (NOT encryption)
- Has no backend validation
- Is vulnerable to XSS attacks

For production, implement proper:
- Password hashing (bcrypt, argon2)
- Backend validation
- CSRF protection
- Session management
- Rate limiting
- SQL injection prevention

## Troubleshooting

### Issue: Page won't load
- **Solution**: Make sure you're opening from the correct directory
- Try using a local server (Live Server or Python server)

### Issue: Styles look broken
- **Solution**: Make sure all CSS paths are correct
- The HTML files reference: `public/css/styles.css`
- The JS files reference: `public/js/script.js`

### Issue: Form validation not working
- **Solution**: Check browser console (F12) for errors
- Make sure JavaScript is enabled in your browser

### Issue: Login not working
- **Solution**: Make sure you registered first
- Use the email and password you registered with
- Check if browser localStorage is enabled

### Issue: Mobile view looks wrong
- **Solution**: Check if your browser is in responsive mode
- The CSS includes mobile styles for screens below 768px
- Try rotating your device or resizing the browser window

## Browser DevTools Tips

To test responsive design:
1. Press F12 to open DevTools
2. Click the device toggle (📱) icon
3. Select different device sizes
4. Or use Ctrl+Shift+M to toggle responsive mode

To clear localStorage (reset all accounts):
1. Press F12 to open DevTools
2. Go to Application tab
3. Click on Storage → Local Storage
4. Right-click and "Clear All"
5. Refresh the page

## Next Steps

1. **Test the website**: Try registering and logging in
2. **Customize**: Modify colors, text, and images
3. **Add pages**: Create additional pages as needed
4. **Upgrade**: Add backend and database when ready
5. **Deploy**: Host on a web server (GitHub Pages, Netlify, AWS, etc.)

## Support & Questions

If you encounter any issues:
1. Check the README.md for detailed documentation
2. Review your browser console (F12) for errors
3. Ensure all file paths are correct
4. Try using a different browser
5. Try clearing browser cache and localStorage

---

**Happy Building! 🏗️**

For more information, see README.md in the website folder.
