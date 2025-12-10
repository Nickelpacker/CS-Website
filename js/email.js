// EmailJS Configuration
// TODO: Replace these with your EmailJS credentials
// Get these from: https://dashboard.emailjs.com/admin/integration
const EMAILJS_SERVICE_ID = 'service_uxbu2vv';
const EMAILJS_TEMPLATE_ID = 'template_4mn9qv5'; // Template for sending to unionvillelandscaping@gmail.com
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_rcagyar'; // Template for auto-reply to customer
const EMAILJS_PUBLIC_KEY = 'q4xfxeqEK1FaBsBEA';
const BUSINESS_EMAIL = 'unionvillelandscaping@gmail.com';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verify reCAPTCHA (from recaptcha.js)
    if (!verifyRecaptcha()) {
      alert('Please complete the reCAPTCHA verification before submitting.');
      return;
    }
    
    // Get form data - try multiple methods for reliability
    const formData = new FormData(this);
    let name = formData.get('name');
    let email = formData.get('email');
    let phone = formData.get('phone');
    let message = formData.get('message');
    
    // Fallback: get values directly from form elements if FormData fails
    if (!name || !name.trim()) {
      const nameInput = this.querySelector('#name');
      name = nameInput ? nameInput.value.trim() : null;
    } else {
      name = name.trim(); // Ensure name is trimmed
    }
    if (!email) {
      const emailInput = this.querySelector('#email');
      email = emailInput ? emailInput.value.trim() : null;
    }
    if (!phone) {
      const phoneInput = this.querySelector('#phone');
      phone = phoneInput ? phoneInput.value.trim() : null;
    }
    if (!message) {
      const messageInput = this.querySelector('#message');
      message = messageInput ? messageInput.value.trim() : null;
    }
    
    // Debug logging removed for security - form data should not be logged in production
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      resetRecaptcha(); // Reset reCAPTCHA on validation error
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      resetRecaptcha(); // Reset reCAPTCHA on validation error
      return;
    }
    
    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      alert('Email service is not configured yet. Please set up EmailJS credentials in email.js');
      return;
    }
    
    // Check if auto-reply template is configured (optional, will skip auto-reply if not set)
    const hasAutoReply = EMAILJS_AUTOREPLY_TEMPLATE_ID !== 'YOUR_AUTOREPLY_TEMPLATE_ID';
    
    // Disable submit button to prevent multiple submissions
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Prepare email parameters for sending to business
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone || 'Not provided',
      message: message,
      to_name: 'Unionville Landscaping',
      to_email: BUSINESS_EMAIL
    };
    
    // Prepare auto-reply parameters
    // Template uses {{name}} for the customer's name
    const customerName = name && name.trim() ? name.trim() : 'Valued Customer';
    const autoReplyParams = {
      name: customerName, // Primary variable - matches {{name}} in template
      to_name: customerName, // Backup variable (in case template uses {{to_name}})
      to_email: email,
      from_name: 'Unionville Landscaping'
    };
    
    // Debug logging removed for security - customer data should not be logged
    
    // Send email using EmailJS
    if (typeof emailjs !== 'undefined') {
      // Send main email to business
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
          console.log('Main email sent successfully', response.status, response.text);
          
          // Send auto-reply to customer if template is configured
          if (hasAutoReply) {
            return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, autoReplyParams);
          } else {
            // Return resolved promise if no auto-reply
            return Promise.resolve({ status: 200, text: 'OK' });
          }
        })
        .then(function(response) {
          if (hasAutoReply) {
            console.log('Auto-reply sent successfully', response.status, response.text);
          }
          alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon at ${email}.`);
          contactForm.reset();
          // Reset reCAPTCHA after successful submission
          resetRecaptcha();
        })
        .catch(function(error) {
          console.error('EmailJS Error:', error);
          // Reset reCAPTCHA on error
          resetRecaptcha();
          // Check if main email was sent but auto-reply failed
          if (error.text && error.text.includes('template')) {
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon. (Note: Auto-reply could not be sent)`);
          } else {
            alert('Sorry, there was an error sending your message. Please try again later or contact us directly.');
          }
        })
        .finally(function() {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        });
    } else {
      alert('Email service is not available. Please check your internet connection.');
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

