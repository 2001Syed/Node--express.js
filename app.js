const {readFile} = require("fs");

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        })
    })
}

// getText("./Content/First.txt")
//     .then((result) => {console.log(result)})
//     .catch((err) => {console.log(err)}) 

const start = async()=>{
    try {
        const first = await getText(`./Content/First.txt`);
        console.log(first);       
    } catch (error) {
        console.log(error);       
    }
}

start();


// in the first method we have to nest everything 


function loadScript(src, callback){   //We are Using Callback function as a input parameter so that we could call that function in another function this is callback functions.

    let script = document.createElement("script");// Here we are creating the elements

    script.src = src;  // Here we are assigning the src value to script.src to src attribute in the script tag.

    script.onload = ()=>{   // Here this event can apply to launch a particular function when the page is fully displayed. as the script tag created onload function occurs to it.

        callback(null);
    }
    script.onerror = () => {
        console.log(`The site ${src} is incorrect.`);
        callback(new Error("src got some error."), src)
    }
    document.body.appendChild(script)  //Here the script tag is getting appended in the body


}

function hello(error, src){   // this is one function, the function that we want to callback
    if (error) {
        console.log(error);
        alert(`The given link is incorrect ${src}`)
        return
    }
}

function goodmorning(){                   // this is second function, the function that we want to callback

    console.log("GoodMorning People!!!!!")
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css", hello); // here we are passing and arguments and invoking the function. 