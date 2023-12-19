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
document.querySelector("button").addEventListener('click', copy)