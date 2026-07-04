let score = [10, 25, 40, 60, 80, 100];

let highest = score[0];
let lowest = score[0];
let total = 0;

for (let i = 0; i < score.length; i++) {

    if (score[i] > highest) {
        highest = score[i];
    }

    if (score[i] < lowest) {
        lowest = score[i];
    }

    total += score[i];
}

let average = total / score.length;

console.log("Highest Score : " + highest);
console.log("Lowest Score : " + lowest);
console.log("Total Score : " + total);
console.log("Average Score : " + average);
