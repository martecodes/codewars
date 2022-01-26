class HallOfFame {
    constructor(size = 5, players = []) {
        this.size = size;
        this.scores = [];
        players.forEach(player => this.add(player));
    }
    get list() {
        return this.scores
            .map(x => `${x[0]}: ${x[1]}`)
            .concat(Array.from({ length: this.size - this.scores.length }).map(_ => ''));
    }
    add(player) {
        this.scores.push(player);
        this.scores.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).splice(this.size);
        return this;
    }
}

/*
Task
Create a HallOfFame object to store some game-of-the-century best players name and score.

On creation a HallOfFame may take 2 arguments :

size : an int (default: 5), defining the size of the Hall.
players : an array of players.
A player is a 2-items array of the form [name, score] with :

name : a string, the name of the player.
score : an int, the score of this player.
An HallOfFame object should provide an attribute list and a method add(player).

list : is an array of player of the form "Name: score", sorted by score in descending order (in alphabetic order of name in case of same score).

eg : ["Alya: 325", "Boris: 253", "Clem: 235"]
list.length is limited to size items. If a "list-slot" is empty, return an "empty-player" ("")

eg : ["Alya: 325", "", ""] // in case only 1st player is provided
add(player) should :

add the player to the list (if its score is high enough).
eventually re-sort the list.
and return the object (to permit chaining adds).
*/

/* EXAMPLE
const top3 = new HallOfFame(3, [["Ada",99], ["Bob","42], ["Clo", 101], ["Dan", 3]])

top3.list -> ["Clo: 101", "Ada: 99", "Bob: 42"] // -- only 3 players kept 'cause size of the Hall is 3

top3.add(["Dan",54])
top3.list -> ["Clo: 101", "Ada: 99", "Dan: 54"]

top3.add(["Eva",75]).add(["Fox",120]).list --> ["Fox: 120","Clo: 101","Ada: 99"]

const top5 = new HallOfFame(); // -- size=5 by default
top5.add(["A",4]).add(["E",3]).add(["I",1])
top5.list --> ["A: 4","E: 3","I: 1","",""] // <-- 2 "empty players" at the end of list

top5.add(["S",5]).add(["T",7])
top5.list --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]
*/