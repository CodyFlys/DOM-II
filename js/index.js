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

// linksEffect = document.querySelector('a')

// // document.querySelectorAll("a").forEach(function (item){
// //         item.preventDefault();
// // })

// logo = document.querySelector('h1')
// leave = document.getElementById('bus')
// footerEffect = document.getElementsByClassName(".footer")
// last = document.querySelector("h4")


// linksEffect.addEventListener('mouseover', () =>{
//     linksEffect.style.color = 'green';
//     linksEffect.style.fontSize = '30px';
// })

// document.addEventListener('keydown', () =>{
//     console.log("KEY PRESSED")
//     img.style.display = 'none';
// })

// logo.addEventListener('drag', () => {
//     console.log("DRAGGGGGGGG")
//     document.body.style.backgroundColor = 'red';
// })

// document.body.addEventListener('wheel', () => {
//     document.body.style.color = 'yellow';
// })
// document.body.addEventListener('wheel', (event) => {
//     event.stopPropagation()
//     console.log('STOPPED!!!!!')
// })
// document.body.addEventListener('wheel', () => {
//     document.body.style.color = 'red';
// })

// leave.addEventListener('dblclick', () => {
//     console.log('click')
//     document.body.innerHTML = '<div> </div>';
//     alert('BYEEEEEEEEEEEEEEEEEEEEEEE')
// })

// window.addEventListener('resize', () => {
//     logo.style.display = 'none';
//     console.log("RESIZING")
// })

// document.body.addEventListener('copy', () => {
//     alert('I KNOW WHAT YOU ARE COPYING!')
// })

// document.body.addEventListener('contextmenu', () => {
//     alert('PLEASE STOP RIGHT CLICKING')
//     nagivation[1].style.display = "none"
// })

// pick.addEventListener('mouseenter', () => {
//     console.log("ENTERED")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
//     window.open("https://www.google.com/maps")
// })

// last.addEventListener('mousedown', () =>{
//     alert("I KNOW YOU ARE clicking on THIS")
//     last.style.color = 'red'
// })

// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)


// document.addEventListener('click', () => {
//     console.log('you clicked on the document')
// })

// window.addEventListener('click', () => {
//     console.log('you clicked on the window')
// })



document.querySelector("header").addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "blue"
})

document.querySelector("header").addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "white"
})

document.querySelector("nav").addEventListener("click", event => {
    event.target.style.color = "red"
})

document.querySelector("nav").addEventListener("click", event => {
    event.preventDefault()
})

document.body.addEventListener("wheel", event => {
    event.target.style.backgroundColor = "yellow";
})

bus.addEventListener("dblclick", event => {
    event.target.style.display = "none";
})

bus.addEventListener("mouseenter", event => {
    event.target.style.width = "50%";
})

bus.addEventListener("mouseout", event => {
    event.target.style.width = "100%";
})

document.querySelectorAll("p").forEach(function (item){
    item.addEventListener("copy", item => {
        alert("DO NOT COPY!")
    })
})

window.addEventListener("resize", event => {
    bus.style.display = "none";
})



document.querySelectorAll("p").forEach(function (item){
    item.addEventListener("click", event => {
        item.style.color = "red";
        event.stopPropagation()
    })
})

document.querySelector("text-content")
})





















