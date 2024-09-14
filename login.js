document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.form-container.sign-up');
    const signInForm = document.querySelector('.form-container.sign-in');
    const signUpLink = document.querySelector('.link .signup-link');
    const signInLink = document.querySelector('.link .signin-link');

    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    });

    signInLink.addEventListener('click', (e) => {
        e.preventDefault();
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });

    // Initially show sign-in form and hide sign-up form
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});
