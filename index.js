class Project {
    constructor(name, description, link, stat) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.stat = stat;
    }
}

async function loadProjects() {
    try {
        const response = await fetch('./projects.json');
        const projectData = await response.json();
        const projects = projectData.map(
            data => new Project(data.name, data.description, data.link, data.stat)
        );

        projects.sort((a, b) => {
            const statusOrder = {
                'done': 1,
                'in-progress': 2,
                'not-started': 3
            };

            return statusOrder[a.stat] - statusOrder[b.stat];
        });

        displayProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    projects.forEach((project, index) => {
        // Determine the class based on project status
        let statusClass = '';
        if (project.stat === 'in-progress') {
            statusClass = 'in-progress';
        } else if (project.stat === 'not-started') {
            statusClass = 'not-started';
        }

        // Create a new div element for the project
        const projectElement = document.createElement('div');

        // Set the innerHTML of the project element
        projectElement.innerHTML = `
            <a href="${project.link}" class="project-link">
                <div class="project ${statusClass}">
                    <h2>${index + 1}. ${project.name}</h2>
                    <p>${project.description}</p>
                </div>
            </a>
        `;

        // Append the project element to the container
        container.appendChild(projectElement);
    });
}

window.onload = loadProjects;