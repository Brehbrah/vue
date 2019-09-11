new Vue({
    el: '#app',
    data: {
        newGame: false,
        gameRunning: false,
        turnBased: false,
        playerImg: 'img/player.jpg',
        monsterImg: 'img/monster.png',
        playerHealth: 100,
        monsterHealth: 100,
        attackMsg: ['Fuck', 'shit', 'Bi0000tch', 'hihi!', 'You su0ck!', 'Jezzuuss', '>___<', '^___^,', 'O__o', 'o__O'],
        healMsg: ['I healed Bitch!', 'Fuuuck yaaaaa', '^____^', '<3'],
        logs: []
    },
    computed: {
        healthBar: function () {
            return {
                backgroundColor: "green",
                margin: 0,
                width: this.playerHealth + "%",
                padding: 8 + "px"
            };
        },
    },
    methods: {
        startGame: function () {
            this.newGame = true,
                this.playerHealth = 100,
                this.monsterHealth = 100
        },
        gameOver: function (playerDmg, monsterDmg) {
            this.monsterHealth -= playerDmg;
            if (this.monsterHealth <= 0) {
                console.log(this.loose);
                this.monsterHealth = 0
                if (confirm('The Bad Monster Won! Want to try again n00b?')) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
            }

            this.playerHealth -= monsterDmg;
            if (this.playerHealth <= 0) {
                this.playerHealth = 0
                if (confirm("You won Hero! Want to try again?")) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
            }

            if (this.playerHealth === this.monsterHealth) {
                this.monsterHealth = 0;
                this.playerHealth = 0;
                if (confirm("Man, wtf bro??? restart???")) {
                    this.startGame();
                } else {
                    this.gameRunning = false;
                }
            }
        },
        atkDisplay: function () {
            return this.shuffle(this.attackMsg);
        },
        healDisplay: function () {
            return this.shuffle(this.healMsg)
        },
        attack: function () {
            let monsterDmg = this.calculateDmg(3, 10);
            let playerDmg = this.calculateDmg(5, 10);
            this.logPlayer(monsterDmg);
            this.logMonster(playerDmg);
            this.gameOver(playerDmg, monsterDmg);
        },
        specialAttack: function () {
            let monsterDmg = this.calculateDmg(10, 20);
            let playerDmg = this.calculateDmg(10, 20);
            this.logPlayer(monsterDmg);
            this.logMonster(playerDmg);
            this.gameOver(playerDmg, monsterDmg);
        },
        heal: function () {
            let playerHeal = this.playerHealth += this.calcHeal(1, 10);
            let monsterHeal = this.monsterHealth += this.calcHeal(1, 10);
            this.healPlayerLog(playerHeal);
            this.monsterHealLog(monsterHeal);
        },
        restart: function () {
            this.newGame = true,
                this.playerHealth = 100,
                this.monsterHealth = 100
            this.logs = []; // Reset the array to zero 

        },
        giveUp: function () {
            this.newGame = false,
                this.playerHealth = 0,
                this.monsterHealth = 0
            this.logs = [] // Reset the array to zero
        },
        logPlayer: function (monsterDmg) {
            this.logs.unshift({
                isPlayer: true,
                playerTxt: "The Hero Special Attack the monster for " + monsterDmg,
            });
        },
        logMonster: function (playerDmg) {
            this.logs.unshift({
                isMonster: true,
                monsterTxt: "The Monster Did Special Attack On the Hero " + playerDmg
            });
        },
        healPlayerLog: function (heal) {
            this.logs.unshift({
                isPlayer: true,
                playerTxt: "The Hero healed " + heal
            });
        },
        monsterHealLog: function (heal) {
            this.logs.unshift({
                isMonster: true,
                monsterTxt: "The uGly MoNsTeR healed " + heal
            });
        },
        calculateDmg: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        calcHeal: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        shuffle: function (myArray) {
                return myArray[Math.floor(Math.random() * myArray.length)];
        }
    }
});