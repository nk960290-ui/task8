let signal=prompt("Enter traffic signal (red/yellow/green):");

switch(signal) {
    case "red":
        alert("Stop");
        break;
    case "yellow":
        alert("Get ready");
        break;
    case "green":
        alert("Go");
        break;
    default:
        alert("Invalid signal color");
}