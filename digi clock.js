let clock = setInterval(() => {

    let now = new Date();

    console.log(now.toLocaleTimeString());

}, 1000);

setTimeout(() => {

    clearInterval(clock);
    console.log("Clock Stopped");

}, 10000);
