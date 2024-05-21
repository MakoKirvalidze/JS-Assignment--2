///////N1/////////
const users = [{name: 'Temo', age: 25},{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

let index=users[0].age
let name=users[0].name

for(let youngest of users){
    if(index>youngest.age){
        index=youngest.age
        name=youngest.name
    }
    
}

console.log(name)

///////////N2////////////
function User(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
  const newUser = User('Temo', 25);
  console.log(newUser)

////////////N3////////////

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playDiceGame() {
    let attemptsA = 0;
    let attemptsB = 0;
    let winner = null;

    while (true) {
    // User A's turn
    attemptsA++;
    let rollA = rollDice();
    console.log(`User A rolled: ${rollA}`);
    if (rollA === 3) {
        winner = 'User A';
        break;
    }

    // User B's turn
    attemptsB++;
    let rollB = rollDice();
    console.log(`User B rolled: ${rollB}`);
    if (rollB === 3) {
        winner = 'User B';
        break;
    }
    }

    if (winner === 'User A') {
    console.log(`User A wins! It took them ${attemptsA} attempts.`);
    } else {
    console.log(`User B wins! It took them ${attemptsB} attempts.`);
    }
}

playDiceGame();
