let token = Number(prompt(`
Hospital Appointment

Enter Token
1. Doctor A
2. Doctor B
3. Doctor C

Enter Your Token:
`));

switch (token) {

    case 1:
        console.log("Appointment Confirmed with Doctor A");
        break;

    case 2:
        console.log("Appointment Confirmed with Doctor B");
        break;

    case 3:
        console.log("Appointment Confirmed with Doctor C");
        break;

    default:
        console.log("Invalid Token Number");
}
