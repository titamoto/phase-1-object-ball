function gameObject() {
    return obj = {
        home : {
            teamName : "Brooklyn Nets",
            colors : ["Black", "White"],
            players : {
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks: 1,
                },
                "Reggie Evans" : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks: 7,
                },
                "Brook Lopez" : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    slamDunks: 15,
                },
                "Mason Plumlee" : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunks: 5,
                },
                "Jason Terry" : {
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    slamDunks: 1,
                },

            },
        },
        away : {
            teamName : "Charlotte Hornets",
            colors : ["Turquoise", "Purple"],
            players : {
                "Jeff Adrien" : {
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo" : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    slamDunks: 10,
                },
                "DeSagna Diop" : {
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5,
                    slamDunks: 5,
                },
                "Ben Gordon" : {
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2,
                    steals : 1,
                    blocks : 1,
                    slamDunks: 0,
                },
                "Brendan Haywood" : {
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    slamDunks: 12,
                },

            },
        },
    };
}

//console.log(gameObject());

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

console.log(homeTeamName());

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team]["players"]) {
                if (player === playerName) {
                    const points = game[team]["players"][player]["points"];
                    return points; } } } } 

// function keyIterator(object, neededKey) {
   
//     if (typeof object === "object") {
//         for (const key in object) {
//             if (key === neededKey) {
//                 return object[key];
//             } else {
//                 keyIterator(object[key], neededKey) }}}
// }
// function numPointsScored(playerName) {
//     const game = gameObject();
//     const value = keyIterator(game, playerName);
//     return value;
// }

 console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team]["players"]) {
            if (player === playerName) {
                return game[team]["players"][player]["shoe"];
            }
        }

    }
}

 console.log(shoeSize("Alan Anderson"));

 function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team]["teamName"] === teamName) {
            return game[team]["colors"];
        }
    }
 }

 console.log(teamColors("Brooklyn Nets"));
 //console.log(teamColors("Charlotte Hornets"));


 function teamNames() {
    const game = gameObject();
    const teamsArray = [];
    for (let i = 0; i < 1; i++) {
        for (let team in game) {
            teamsArray[i++] = game[team]["teamName"];
        }}
        
    return teamsArray; 
 }
 
 console.log(teamNames());

function playerNumbers(teamName) {
    const game = gameObject();
    const numbersArray = [];
    for (let i = 0; i < 4; i++) {
        for (const team in game) {
            if (game[team]["teamName"] === teamName) {
                for (const player in game[team]["players"]) {
                    numbersArray[i++] = game[team]["players"][player]["number"];
        } } }
    }
    return numbersArray;
}

console.log(playerNumbers("Brooklyn Nets"))
//console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team]["players"]) {
            if (player === playerName) {
                const stats = game[team]["players"][player];
                return stats; }
    } } 
    
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    const game = gameObject();
    function largestShoe() {
    const shoeArray = [];
    for (let i = 0; i < 9; i++) {
        for (const team in game) {
            for (const player in game[team]["players"]) {
                shoeArray[i++] = Math.max(game[team]["players"][player]["shoe"]);
                        
                } } } 
                debugger;
                return Math.max(...shoeArray); 
            }

    const bigShoe = largestShoe();
    debugger;
    for (const team in game) {
        for (const player in game[team]["players"]) {
            if (game[team]["players"][player]["shoe"] === bigShoe) {
                debugger;
                return game[team]["players"][player]["rebounds"];
            }
        }
    }
            }

console.log(bigShoeRebounds());

