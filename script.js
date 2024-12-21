document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handling for both project and experience buttons
    const buttons = document.querySelectorAll('.project-rect');
    const dialog = document.getElementById('projectDialog');
    const projectContent = document.getElementById('projectContent');
    const projectTitle = document.getElementById('projectTitle');
    const closeDialog = document.getElementById('closeDialog');

    // Event listener for project and experience buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if the button is for a project or an experience
            const id = button.getAttribute('data-project') || button.getAttribute('data-experience');
            const content = document.getElementById(id);
            if (content) {
                projectTitle.textContent = button.textContent; // Set the title of the dialog
                projectContent.innerHTML = content.innerHTML; // Set the content
                dialog.showModal(); // Show the dialog as a modal
            }
        });
    });

    // Event listener for the close button
    closeDialog.addEventListener('click', () => {
        dialog.close(); // Close the dialog when the close button is clicked
    });

    // Event listener for clicking outside the dialog
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close(); // Close the dialog if clicking outside of it
        }
    });
});