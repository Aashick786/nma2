// script.js

// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle resume section visibility
const toggleResumeButton = document.getElementById('toggle-resume');
const resumeSection = document.getElementById('resume');

toggleResumeButton.addEventListener('click', () => {
    if (resumeSection.style.display === 'none' || resumeSection.style.display === '') {
        resumeSection.style.display = 'block';
        toggleResumeButton.textContent = 'Hide Resume';
    } else {
        resumeSection.style.display = 'none';
        toggleResumeButton.textContent = 'Show Resume';
    }
});

// Add a link to access and interact with your resume on Google Drive
const resumeLink = document.getElementById('https://drive.google.com/file/d/1NxpDeeZgzheXbWTJaeRaJNPPoQR73ow1/view?usp=drivesdk');
resumeLink.href = 'https://drive.google.com/file/d/1NxpDeeZgzheXbWTJaeRaJNPPoQR73ow1/view?usp=sharing';
// script.js

// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle resume section visibility
const toggleResumeButton = document.getElementById('toggle-resume');
const resumeSection = document.getElementById('resume');

toggleResumeButton.addEventListener('click', () => {
    if (resumeSection.style.display === 'none' || resumeSection.style.display === '') {
        resumeSection.style.display = 'block';
        toggleResumeButton.textContent = 'Hide Resume';
    } else {
        resumeSection.style.display = 'none';
        toggleResumeButton.textContent = 'Show Resume';
    }
});

// Add a link to access and interact with your resume on Google Drive
const resumeLink = document.getElementById('resume-link');
resumeLink.href = 'https://drive.google.com/file/d/1NxpDeeZgzheXbWTJaeRaJNPPoQR73ow1/view?usp=sharing';
