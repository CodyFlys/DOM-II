// Your code goes here

// const itemclick = document.getElementsByClassName(nav-link);
// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!');
//     console.log(event.target)
//     console.log(event.currentTarget)
// }


// homeLink.addEventListener(
//     'click', // string with the name of the event
//     () => {
//         //things we want happening when this link gets clicked

//         console.log('the link got clicked')
//     }
// )


linksEffect = document.querySelector('a')
logo = document.querySelector('h1')
leave = document.getElementById('bus')
footerEffect = document.getElementsByClassName("footer")
last = document.querySelector("h4")
button = document.querySelectorAll("btn")


linksEffect.addEventListener('mouseover', () =>{
    linksEffect.style.color = 'green';
    linksEffect.style.fontSize = '30px';
})

document.addEventListener('keydown', () =>{
    console.log("KEY PRESSED")
    img.style.display = 'none';
})

logo.addEventListener('drag', () => {
    console.log("DRAGGGGGGGG")
    document.body.style.backgroundColor = 'red';
})

document.body.addEventListener('wheel', () => {
    document.body.style.color = 'yellow';
})

leave.addEventListener('dblclick', () => {
    console.log('click')
    document.body.innerHTML = '<div> </div>';
    alert('BYEEEEEEEEEEEEEEEEEEEEEEE')
})

window.addEventListener('resize', () => {
    console.log("RESIZING")
    logo.style.display = 'none';
})

document.body.addEventListener('copy', () => {
    alert('I KNOW WHAT YOU ARE COPYING!')
})

document.body.addEventListener('contextmenu', () => {
    alert('PLEASE STOP RIGHT CLICKING')

})

pick.addEventListener('mouseenter', () => {
    console.log("ENTERED")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
    window.open("https://www.google.com/maps")
})

last.addEventListener('mousedown', () =>{
    alert("I KNOW YOU ARE clicking on THIS")
    last.style.color = 'red'
})

// this is broken
button.addEventListener('mouseover', () => {
    button[0].style.display = 'none'
})






// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)


// document.addEventListener('click', () => {
//     console.log('you clicked on the document')
// })

// window.addEventListener('click', () => {
//     console.log('you clicked on the window')
// })