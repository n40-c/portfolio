/*adapted lightbox from web dev simplified*/

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox);

const boxImgs = document.querySelectorAll('main img')
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

/*buttons to see full image*/
const seeFullBtns = document.querySelectorAll('.see-full')
seeFullBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        lightbox.classList.add('active')
        const showcase = document.createElement('img')
        showcase.src = e.target.nextElementSibling.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
    
        if (showcase.height > window.innerHeight*1.5) {
            lightbox.classList.add('long')
        }
        lightbox.appendChild(showcase)
    })
})

/*insert the code for the project gallery at the end of each case study page*/
/*The code in projGallery is the html needed for the project gallery. It should be the last child inside main (for case study pagse)*/
const projGallery = `<div class="bkgd-container">
<section id="proj-gallery">
    <h2>More projects</h2>

    <section>
        <a href="libby.html">
            <div><img src="images/libby/libby-cover.png"></div>
            <h3>Libby UX</h3>
            <p>Improving the book exploration process</p>
        </a>
    </section>

    <section>
        <a href="dutchbros.html">
            <div><img src="images/dutchbros/dutchbros-cover.png"></div>
            <h3>Dutch Bros UX</h3>
            <p>Evaluating the Dutch Bros. website</p>
        </a>
    </section>

    <section>
        <a href="step.html">
            <div><img src="images/step/step-banner.png"></div>
            <h3>Step Responsive Design</h3>
            <p>E-commerce site design</p>
        </a>
    </section>

    <section>
        <a href="monet.html">
            <div><img src="images/monet/monet-cover.png"></div>
            <h3>Monet: Creating a 1-Page Site</h3>
            <p>UI design and front-end implementation</p>
        </a>
    </section>
</section>
</div>`
let caseStudy = document.querySelector(".case-study main")
if(caseStudy) {
    caseStudy.insertAdjacentHTML('beforeend', projGallery)
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
    buttonE.textContent = "Copy"; /*default text for button label*/
}
document.querySelector("button[value]").addEventListener('click', copy)

