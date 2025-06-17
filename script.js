// PROPAGATE NAVBAR ACROSS ALL PAGES
/*const navbar = `
<!--Section: Nav-->
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <h2 class="visually-hidden">Main Navigation</h2>
            <div class="container-fluid">
                <a class="navbar-brand disabled" href="index.html"><img src="images/Short-Logo.svg" alt="Naomi Chau"></a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link px-1 mx-3 mb-0 pt-3 h5 text-body-secondary" href="index.html">Work</a></li>
                    <li class="nav-item"><a class="nav-link px-1 mx-3 mb-0 pt-3 h5 text-body-secondary" href="about.html">About</a></li>
                  </ul>
                </div>
            </div>
        </nav>
    </div>
`
let topofthepage = document.querySelector("script");
topofthepage.insertAdjacentHTML('afterend', navbar);*/


// PROPAGATE PROJECTS CARDS
// puts cards at the end of each project, not including the current project's card
const pageTitle = document.title.toLowerCase();
const path = window.location.pathname.toLowerCase();

// Keywords that identify pages where cards should NOT appear
const excludePages = ["about", "index", "/ "];

// Project definitions (with keyword to match current page)
const projects = [
  {
    keyword: "libby",
    html: `<div class="col-12 col-lg-6 d-flex mb-4">
      <a href="libby.html" class="card custom-card h-100 w-100 text-decoration-none text-reset">
        <h3 class="card-title">
         Overlooked to empowered: Elevating book discovery, targeted at e&#8209;borrower behavior
        </h3>
        <div class="card-subtitle mb-3 text-muted">
        App design・User research・UI showcase
        </div>
        <div class="card-image-container">
          <img src="images/libby/libby-cover.png" alt="Card image">
          <span class="visit-button">Visit</span>
        </div>
      </a>
    </div>`
  },
  {
    keyword: "dutch bros",
    html: `<div class="col-12 col-lg-6 d-flex mb-4">
      <a href="dutchbros.html" class="card custom-card h-100 w-100 text-decoration-none text-reset">
        <h3 class="card-title">Removing navigation barriers to help Dutch Bros customers find what matters
        </h3>
        <div class="card-subtitle mb-3 text-muted">
        Team・User research・Responsive
        </div>
        <div class="card-image-container">
          <img src="images/dutchbros/dutchbros-cover.png" alt="Card image">
          <span class="visit-button">Visit</span>
        </div>
      </a>
    </div>`
  },
  {
    keyword: "ai",
    html: `<div class="col-12 col-lg-6 d-flex mb-4">
    <a href="ai.html" class="card custom-card h-100 w-100 text-decoration-none text-reset">
      <h3 class="card-title">Cutting through clutter for 40% increase in task success on AI&#8209;powered media platform
      </h3>
      <div class="card-subtitle mb-3 text-muted">
      NDA・AI tools・Cross-functional team
      </div>
      <div class="card-image-container">
        <img src="images/ai/ai-cover.png" alt="Card image">
        <span class="visit-button">Visit</span>
      </div>
    </a>
  </div>`
  }
];

// Locate the tag to insert into
const works = document.querySelector("#works .row");

// Determine if this is a case study page or an excluded one
const isExcluded = excludePages.some(keyword => pageTitle.includes(keyword) || path.includes(keyword));

// Reveal "more projects" heading only if JS fires
const worksContainer = document.querySelector("#works h2");

// Insert project cards if this is a case study page
if (!isExcluded) {
  worksContainer.classList.remove('visually-hidden');

  const currentProject = projects.find(project => pageTitle.includes(project.keyword));
  projects
    .filter(project => project !== currentProject)
    .forEach(project => {
      works.insertAdjacentHTML("beforeend", project.html);
    });
}


// PROPAGATE FOOTER ACROSS ALL PAGES
// footer html
const footer = `
<div class="container px-4" id="info">
        <div class="row">
        <div class="col-md-6 mb-4">
            <h2 class="mb-3">Email & Resume</h2>
            <ul class="nav flex-column">

                <li class="nav-item mb-2"><i class="bi bi-envelope text-primary"></i>
            <a href="mailto:nchau@protonmail.com" class="text-secondary link-underline link-underline-opacity-0">nchau@protonmail.com</a><button value="nchau@protonmail.com" class="btn btn-outline-primary text-primary ms-2 py-0">Copy</button></li>

                <li class="nav-item mb-2"><i class="bi bi-card-text text-primary"></i>
            <a href="images/2025April-Resume.pdf" target="_blank" class="text-secondary link-underline link-underline-opacity-0">Resume</a></li>

            </ul>
        </div>
        <div class="col-md-4 mb-3">
            <h2 class="mb-3">Social Media</h2>
            <ul class="nav flex-column">

                <li class="nav-item mb-2"><i class="bi bi-linkedin text-primary"></i>
            <a href="https://www.linkedin.com/in/naomi-chau-6a94ab184/" class="text-secondary link-underline link-underline-opacity-0">LinkedIn</a></li>

                <li class="nav-item mb-2"><i class="bi bi-behance text-primary"></i>
            <a href="https://www.behance.net/naomichau" class="text-secondary link-underline link-underline-opacity-0">Behance</a></li>
            </ul>
        </div>
        </div>
        <div class="row"><small>&copy; 2024 Naomi Chau</small></div>
    </div>
`
// where to put it
if (path !== "/" && !path.includes("index")) {
    let footerE = document.querySelector("footer");
    footerE.insertAdjacentHTML('beforeend', footer);
}
//NOTE ON PROPAGATION: all pages have the html for nav & index.html has html for both the project cards and the footer. Whereas, the footer & the project cards for the other pages are propagated with JS.



// COPY EMAIL FUNCTION
// copy function to copy email to clipboard.
const copy = async (e) => {
  let toCopy = e.target.value;
  try {
      await navigator.clipboard.writeText(toCopy);
      console.log('Content copied to clipboard');

      e.target.textContent = "Copied!" /*change label iimmediately*/
      setTimeout(changeBtnLabel, 1000, e.target)
  } catch (err) {
      console.error('Failed to copy: ', err);
  }
}
function changeBtnLabel(buttonE){
  buttonE.innerHTML = `Copy`; /*default text for button label*/ 
}
let copyBtn = document.querySelector("button[value]")
if(copyBtn) {
  copyBtn.addEventListener('click', copy)
}