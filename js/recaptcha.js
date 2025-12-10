// reCAPTCHA Configuration
// TODO: Replace with your reCAPTCHA Site Key from https://www.google.com/recaptcha/admin
const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';

// reCAPTCHA callback functions
window.onRecaptchaSuccess = function() {
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.disabled = false;
  }
};

window.onRecaptchaExpired = function() {
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
  }
};

// Function to verify reCAPTCHA
function verifyRecaptcha() {
  if (typeof grecaptcha === 'undefined') {
    return false;
  }
  const recaptchaResponse = grecaptcha.getResponse();
  return recaptchaResponse !== '';
}

// Function to reset reCAPTCHA
function resetRecaptcha() {
  if (typeof grecaptcha !== 'undefined') {
    grecaptcha.reset();
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
    }
  }
}

