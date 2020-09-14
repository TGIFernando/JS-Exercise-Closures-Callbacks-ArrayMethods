// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
    return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 1 will return a function and remember multiple pieces of data where counter 2 will not.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * the fitst counter uses closer.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *conter 1 if you lan on having multiple games/counters and counter 2 if you only need 1.

 */

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
        count++;
    }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
    return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    let points = 0;
    return function addPoints() {
        points = points + Math.floor(Math.random() * (3 - 0) + 0);
        return points
    }
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(num) {
    let scores = [];
    let homeTeam = inning();
    let awayTeam = inning();
    for (let i = 0; i < num - 1; i++) {
        homeTeam();
        awayTeam();
        console.log(homeTeam(), awayTeam());
    }
    console.log(`Home: ${homeTeam()} Away: ${awayTeam()}`);
    return scores = [homeTeam(), awayTeam()];
}
finalScore(9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(num) {
    let homeTeam = inning();
    let awayTeam = inning();
    let inn = 0;
    let stat = [];
    for (let i = 0; i < num; i++) {
        homeTeam();
        awayTeam();
        inn++;
        stat.push({ inning: inn, home: homeTeam(), away: awayTeam() });
    }
    console.log(`${stat[0].inning}st inning: Away ${stat[0].away} - Home ${stat[0].home}`);
    console.log(`${stat[1].inning}nd inning: Away ${stat[1].away} - Home ${stat[1].home}`);
    console.log(`${stat[2].inning}rd inning: Away ${stat[2].away} - Home ${stat[2].home}`);
    for (let j = 2; j < num; j++) {
        console.log(`${stat[j].inning}th inning: Away ${stat[j].away} - Home ${stat[j].home}`);
    }
    console.log(`Final Score: inning: Away ${stat[8].away} - Home ${stat[8].home}`);
    return stat;
}
a = scoreboard(9);