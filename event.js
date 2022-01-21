const div = document.createElement("div");
div.classList.add("wrapper");
const body = document.body;
body.appendChild(div);
const buttonCount = 4;
const buttonFragment = document.createDocumentFragment();
for (let i = 1; i <= buttonCount; i++) {
    const button = document.createElement('button');
    button.textContent = `Click `;
   const elemHTML = `<strong>${i}</strong>`

   button.insertAdjacentHTML('beforeend', elemHTML)
    button.classList.add('btnClass');
    button.id = `btn${i}`;
    buttonFragment.append(button);
    button.setAttribute('data-num', `${i}`)
}
div.append(buttonFragment);
const buttons = document.querySelectorAll('.btnClass');
const handleClick = (event) => {
    console.log('target >', event.target)
    console.log('currentTarget >', event.currentTarget)
    console.log(event.target === event.currentTarget)
    //event.stopPropagation()
}
window.addEventListener('click', function(event){
    console.log('WINDOW!', event.target);
    event.stopPropagation();
}, {capture: true})

buttons.forEach(b => {
    b.addEventListener('click', handleClick)
});
const imgHTML = `<img src="https://github.com/N0vum/All-the-promises/blob/main/flags.png?raw=true">`
div.insertAdjacentHTML('beforebegin', imgHTML);
const img = document.querySelector('img')
img.addEventListener('mouseover', (event) => {
    console.log(event.currentTarget)
    console.log(this)
})
