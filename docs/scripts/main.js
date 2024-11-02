// const myHeading = document.querySelector("h1");
// myHeading.textContent = "hello world";

let a = document.querySelector('h2');

/*JavaScript的注释方式*/
// 另一种注释方式
// 这简直就跟c++一模一样啊哈哈哈哈哈哈

let b = 3;
let c = b === 4;

// document.querySelector("html").addEventListener
// ("click", 
//     function()
//     {
//         alert("hi there!");
//     }, 

//     () =>
//     {
//         alert("111!");
//     }
// )

const myImage = document.querySelector("img");
myImage.onclick = () =>
{
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/my-test-image-2.png")
    {
        myImage.setAttribute("src", "images/my-test-image.png");
    }
    else
    {
        myImage.setAttribute("src", "images/my-test-image-2.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    const myName = prompt("please enter your name.");

    if (!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `hi, ${myName}`;
    }
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `hi, ${storedName}`;
}

myButton.onclick = () =>
{
    setUserName();
}