const number = document.querySelector(".number");
const textContent = document.querySelector(".textContent");
const button = document.querySelector(".button");


button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice").then((res) => {
    // console.log(res) 

    return res.json()
}).then((data) => {
    // console.log(data)
    number.innerHTML = data.slip.id;
    textContent.innerHTML = `"${data.slip.advice}"`;
})
})


// let slip, text;

// fetch("https://api.adviceslip.com/advice").then((res) => {
//     console.log(res) 

//     return res.json()
// }).then((data) => {
//     console.log(data)
//     slip = data.slip.id;
//     text = `"${data.slip.advice}"`;
// })


// button.addEventListener("click", () => {
//     console.log("clicked")
//     number.innerHTML = slip;
//     textContent.innerHTML = text;
//     // getAdvice()

// })

// let slip, text;

// const getAdvice = async () => {
//     try {
//         const response = await fetch("https://api.adviceslip.com/advice");
        
//         const data = await response.json();
        
//         console.log(data.slip);
//         slip = data.slip.id;
//         text = data.slip.advice;
//         // alert(data.slip.advice);
//     }catch(error){
//         console.log(error);
//         alert(error.message);
//     }
// }

// button.addEventListener("click", () => {
//     console.log("clicked")
//     number.innerHTML = slip;
//     textContent.innerHTML = `"${text}"`;
//     getAdvice()

// })
