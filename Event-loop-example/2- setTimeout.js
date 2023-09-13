// Started operation System process

console.log("first");
setTimeout(() => {
    console.log("second")
}, 0);

console.log("third");

// Completed and executed operating system.

// Output : first ----> First Console.log
//          third ----> Third console.log
//          second----> Second Log inside the setTimeout.

// By obseving the above we get know that even if the timeout interval is 0millisec the timeout function gets Offloaded and the log outside of the settimeout interval gets executed and then the timeout functions get invoked. 