
/*propagate footer across project pages*/
const footer = `
<footer class="container px-4" id="contact">
        <div class="row">
        <div class="col-md-4 mb-4">
            <h2 class="mb-3">Connect</h2>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="mailto:nchau@protonmail.com" class="p-0 text-body-secondary">nchau@protonmail.com</a></li>
                <li class="nav-item mb-2"><a href="#" class="text-body-secondary p-0">LinkedIn</a></li>
                <li class="nav-item mb-2"><a href="#" class="text-body-secondary p-0">Behance</a></li>
            </ul>
        </div>
        <div class="col-4 mb-3">
            <h2 class="mb-3">Resume</h2>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="../../resume.html" class="nav-link p-0 text-body-secondary stylized">View Resume <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg></a></li>
            </ul>
        </div>
        </div>
        <div class="row"><small>&copy; 2024 Naomi Chau</small></div>
    </footer>
`
const footerToplevel = `
<footer class="container px-4" id="contact">
        <div class="row">
        <div class="col-md-4 mb-4">
            <h2 class="mb-3">Connect</h2>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="mailto:nchau@protonmail.com" class="p-0 text-body-secondary">nchau@protonmail.com</a></li>
                <li class="nav-item mb-2"><a href="#" class="text-body-secondary p-0">LinkedIn</a></li>
                <li class="nav-item mb-2"><a href="#" class="text-body-secondary p-0">Behance</a></li>
            </ul>
        </div>
        <div class="col-4 mb-3">
            <h2 class="mb-3">Resume</h2>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="resume.html" class="nav-link p-0 text-body-secondary stylized">View Resume <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg></a></li>
            </ul>
        </div>
        </div>
        <div class="row"><small>&copy; 2024 Naomi Chau</small></div>
    </footer>
`

let worksProject = document.querySelector(".project #works") /*project pages*/
let worksIndex = document.querySelector("#works") /* index */
let other = document.querySelector("main") /*about and resume */
if(worksProject) {
    works.insertAdjacentHTML('afterend', footer)
}else if(worksIndex){
    worksIndex.insertAdjacentHTML('afterend', footerToplevel)
}else if(other){
    other.insertAdjacentHTML('afterend', footerToplevel)
}



/*copy function to copy email to clipboard. Will need to adjust */
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
    buttonE.innerHTML = `Copy <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
  </svg>`; /*default text for button label*/
    
}
let copyBtn = document.querySelector("button[value]")
if(copyBtn) {
    copyBtn.addEventListener('click', copy)
}

