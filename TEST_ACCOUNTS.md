# Idoko Contech Website - Test Credentials & Account Guide

## Getting Started with Testing

When you first visit the website, there are no pre-defined accounts. You'll need to create one through the registration process.

## Creating a Test Account

Follow these steps to create your first account:

1. **Go to Home Page**: Open `index.html`
2. **Click Register**: Click the "Register" button
3. **Fill the Form**:
   ```
   Full Name: John Odunayo
   Email: john@example.com
   Phone: 08012345678
   Company: Odunayo Constructions (optional)
   Password: Test1234
   Confirm: Test1234
   ```
4. **Accept Terms**: Check the terms and conditions checkbox
5. **Submit**: Click "Create Account"
6. **Redirects**: You'll be taken to the login page

## Logging In

After registering, you can log in:

1. **Go to Login Page**: Click "Login" in the navigation bar
2. **Enter Credentials**:
   ```
   Email: john@example.com
   Password: Test1234
   ```
3. **Submit**: Click "Login"
4. **Dashboard**: You'll be taken to your dashboard

## Example Test Accounts

Create these accounts for testing different scenarios:

### Account 1 - Contractor
```
Full Name: Ahmed Hassan
Email: ahmed@contractor.com
Phone: 08098765432
Company: Hassan Building Solutions
Password: Contractor123
```

### Account 2 - Project Manager
```
Full Name: Chioma Nwosu
Email: chioma@project.com
Phone: 07087654321
Company: Nwosu Projects Ltd
Password: Manager123
```

### Account 3 - Business Owner
```
Full Name: Obinna Ikechukwu
Email: obinna@business.com
Phone: 09012345678
Company: Ikechukwu Enterprises
Password: Owner123
```

## Testing Form Validation

The website includes comprehensive validation. Try these tests:

### Test 1: Invalid Email
- Try: `invalidemail` (missing @)
- Expected: Error message "Please enter a valid email address"

### Test 2: Short Password
- Try: `12345` (5 characters)
- Expected: Error message "Password must be at least 6 characters long"

### Test 3: Password Mismatch
- Password: `Test1234`
- Confirm: `Test1235` (different)
- Expected: Error message "Passwords do not match"

### Test 4: Invalid Phone
- Try: `123` (less than 10 digits)
- Expected: Error message "Please enter a valid phone number"

### Test 5: Empty Fields
- Leave Full Name blank
- Expected: Error message "Please enter your full name"

## Testing Login Scenarios

### Scenario 1: Correct Credentials
- Email: Your registered email
- Password: Your registered password
- Expected: Redirects to dashboard

### Scenario 2: Wrong Password
- Email: Your registered email
- Password: incorrect_password
- Expected: Error message "Incorrect password"

### Scenario 3: Unregistered Email
- Email: newuser@test.com (not registered)
- Password: anypassword
- Expected: Error message "Email not found. Please register first"

### Scenario 4: Empty Fields
- Leave fields empty
- Expected: Error messages for empty fields

## Dashboard Features to Test

After logging in, test these features:

1. **View User Info**
   - Check if your name appears in the header
   - It should say "Welcome, [Your Name]!"

2. **Project Statistics**
   - View active projects count
   - View completed projects count
   - Check messages and meeting counts

3. **Recent Projects Table**
   - Verify table displays correctly
   - Check different project statuses
   - Click "View" links (demo buttons)

4. **Quick Actions**
   - All buttons should be clickable (demo functionality)
   - No actual functionality needed yet

5. **Documents Section**
   - View recent documents
   - Download buttons are clickable (demo)

6. **Logout**
   - Click the "Logout" button in the header
   - You should return to the home page
   - Trying to access dashboard should redirect to login

## Data Persistence

### Where Data is Stored
- Browser's localStorage
- `idokoUser_[email]` = User account data
- `loggedInUser` = Currently logged-in user email

### How to Check Stored Data
1. Open browser DevTools (F12)
2. Go to "Application" tab
3. Click "Local Storage" → "file://" or your domain
4. View stored keys and values

### How to Clear Data
1. Open browser DevTools (F12)
2. Go to "Application" tab  
3. Click "Local Storage"
4. Right-click → "Clear All"
5. Refresh page

### Example Stored Data
```javascript
// After registering john@example.com
idokoUser_john@example.com: {
  "fullName": "John Odunayo",
  "email": "john@example.com",
  "phone": "08012345678",
  "company": "Odunayo Constructions",
  "password": "VGVzdDEyMzQ=" // base64 encoded
}

// After login
loggedInUser: "john@example.com"
```

## Important Testing Notes

⚠️ **Data Loss**: When you clear your browser cache or cookies, all stored accounts will be deleted. It's a good idea to know your test credentials.

📝 **Multiple Browsers**: Each browser maintains its own localStorage. An account registered in Chrome won't work in Firefox.

🔒 **Security Note**: This is for testing only. The password encoding is NOT secure. Production systems must use proper password hashing.

## Performance Testing

Test the website's performance:

1. **Page Load**: Time how long each page takes to load
2. **Form Submission**: Test form responsiveness
3. **Responsiveness**: Test on different screen sizes using DevTools
4. **Mobile View**: Use DevTools device emulation
5. **Console Errors**: Check F12 console for any JavaScript errors

## Browser Compatibility Testing

Test on these browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (Chrome Mobile, Safari iOS)

## Accessibility Testing

Check accessibility features:
1. **Keyboard Navigation**: Can you tab through forms?
2. **Color Contrast**: Are text colors readable?
3. **Screen Reader**: Does semantic HTML work?
4. **Form Labels**: Are all inputs properly labeled?

## Responsive Design Testing

Test these breakpoints:
- **Mobile**: < 480px (iPhone 5)
- **Tablet**: 481px - 768px (iPad)
- **Desktop**: > 768px (Desktop/Laptop)

Use DevTools device emulation to test.

## Common Test Scenarios

### Scenario 1: New User Journey
1. Start at home page
2. Read about company
3. Browse services
4. Click "Get Started"
5. Fill registration form
6. Create account
7. Login with new account
8. View dashboard
9. Logout
10. Return to home page

### Scenario 2: Returning User
1. Go to login page
2. Enter valid credentials
3. Access dashboard
4. View projects
5. Logout

### Scenario 3: Form Validation
1. Try to register with invalid email
2. Try to register with weak password
3. Try to login with unregistered email
4. Try to login with wrong password

## Reporting Issues

If you find any bugs during testing, document:
1. **What you did**: Step-by-step instructions to reproduce
2. **What happened**: The actual result
3. **What should happen**: The expected result
4. **Browser/Device**: What browser and device you used
5. **Console Errors**: Copy any error messages from F12 console

## Next Steps

After testing:
1. Customize the website with your branding
2. Add real project information
3. Replace placeholder content
4. Add company logo and images
5. Set up a backend server
6. Implement a real database
7. Deploy to a web hosting service

---

**Happy Testing! 🧪**

For more information, see SETUP_GUIDE.md or README.md
