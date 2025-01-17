// Function to switch between Projects and Blog
function showTab(tab) {
    var projectsTab = document.getElementById('projects');
    var blogTab = document.getElementById('blog');
    var projectsButton = document.getElementById('projects-tab');
    var blogButton = document.getElementById('blog-tab');

    if (tab === 'projects') {
        projectsTab.style.display = 'block';
        blogTab.style.display = 'none';
        projectsButton.style.backgroundColor = '#3498db';
        blogButton.style.backgroundColor = '#444';
    } else {
        projectsTab.style.display = 'none';
        blogTab.style.display = 'block';
        blogButton.style.backgroundColor = '#3498db';
        projectsButton.style.backgroundColor = '#444';
    }
}

// Initialize with Projects tab active
window.onload = function() {
    showTab('projects');
};
