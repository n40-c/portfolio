/*adapted lightbox from web dev simplified*/

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox);

const boxImgs = document.querySelectorAll('.project img')
boxImgs.forEach(img => {
    img.addEventListener('click', e => {
        lightbox.classList.add('active')
        const showcase = document.createElement('img')
        showcase.src = img.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
    
        if (showcase.height > window.innerHeight*1.2) {
            lightbox.classList.add('long')
        }
        lightbox.appendChild(showcase)
        
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return

    lightbox.classList.remove('active')
    lightbox.classList.remove('long')
})

/*insert the code for the project gallery at the end of each case study page*/
/*The code in projGallery is the html needed for the project gallery. It should be the last child inside main (for case study pagse)*/
const projGallery = `<section class="container px-4" id="works">
<h2 class="mt-5">See More Projects</h2>
<div class="row gx-4">
    <div class="col-12 col-md-6 col-lg-4">
        <a href="#">
            <div class="card">
                <div class="card-body px-0">
                    <h3 class="card-title">Bellevue Botanical Garden</h3>
                    <p class="card-text">Refreshing the Bellevue Botanical Garden website to strengthen promotions and appeal to local tourists</p>  
                </div>
                <div class="bg-image"><img src="../../images/botanical-cover.png" class="card-img-bottom" alt="..."></div>
            </div>
        </a>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4">
        <a href="#">
            <div class="card">
                <div class="card-body px-0">
                    <h3 class="card-title">Libby</h3>
                    <p class="card-text">Innovating the book exploration experience for digital library users</p>  
                </div>
                <div class="bg-image"><img src="../../images/libby-cover.png" class="card-img-bottom" alt="..."></div>
            </div>
        </a>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
        <a href="#">
            <div class="card">
                <div class="card-body px-0">
                    <h3 class="card-title">Dutch Bros.</h3>
                    <p class="card-text">Finetuning key goals for Dutch Bros & their users</p>  
                </div>
                <div class="bg-image"><img src="../../images/dutchbros-cover.png" class="card-img-bottom" alt="..."></div>
            </div>
        </a>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
        <a href="#">
            <div class="card">
                <div class="card-body px-0">
                    <h3 class="card-title">Step</h3>
                    <p class="card-text">Enhancing the e-commerce experience for online shoppers</p>  
                </div>
                <div class="bg-image"><img src="../../images/step-cover.png" class="card-img-bottom" alt="..."></div>
            </div>
        </a>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
        <a href="#">
            <div class="card">
                <div class="card-body px-0">
                    <h3 class="card-title">Monet</h3>
                    <p class="card-text">Creating a one-page, one-stop shop marketing page</p>  
                </div>
                <div class="bg-image"><img src="../../images/monet-cover.png" class="card-img-bottom" alt="..."></div>
            </div>
        </a>
    </div>
</div>
</section>
`
let caseStudy = document.querySelector(".project main")
if(caseStudy) {
    caseStudy.insertAdjacentHTML('afterend', projGallery)
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

