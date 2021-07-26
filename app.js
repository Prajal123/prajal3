var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.height = innerHeight - 22;
canvas.width = innerWidth - 22;

var missilearray = [], alienfall = [];
// var dx=.1;
var timer = 00, count = 0;
var found = 0;
var score = 0;
var c = 0;
var highscore = localStorage.getItem('highscore');
var a = canvas.width / 2, b = canvas.height;
ctx.beginPath();
ctx.moveTo(a, b);
ctx.lineTo(a + 5, b - 25);
ctx.lineTo(a + 10, b - 5);
ctx.lineTo(a + 30, b - 50);
ctx.lineTo(a + 50, b - 5);
ctx.lineTo(a + 55, b - 25);
ctx.lineTo(a + 60, b);
ctx.lineTo(a, b);
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();
ctx.closePath();

window.addEventListener("keypress", function (e) {
    if (e.key == 'd' || e.key == 's') {
        if (e.key == 'd' && (a >= -1 && a + 61 <= canvas.width)) {
            a += 5;
            ctx.clearRect(a - 5, b - 50, 62, 51);
        }
        else if (e.key == 's' && (b - 50 >= canvas.height - 290 && b < canvas.height)) {
            b += 5;
            ctx.clearRect(a - 1, b - 50, 62, 50);
        }

        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a + 5, b - 25);
        ctx.lineTo(a + 10, b - 5);
        ctx.lineTo(a + 30, b - 50);
        ctx.lineTo(a + 50, b - 5);
        ctx.lineTo(a + 55, b - 25);
        ctx.lineTo(a + 60, b);
        ctx.lineTo(a, b);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

    }
    else if (e.key == 'a' || e.key == 'w') {
        if (e.key == 'a' && (a >= 0 && a + 59 <= canvas.width)) {
            a -= 5;
            ctx.clearRect(a + 5, b - 50, 62, 51);
        }
        else if (e.key == 'w' && (b - 51 > canvas.height - 290 && b <= canvas.height)) {
            b -= 5;
            ctx.clearRect(a - 1, b, 62, 6);
        }

        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a + 5, b - 25);
        ctx.lineTo(a + 10, b - 5);
        ctx.lineTo(a + 30, b - 50);
        ctx.lineTo(a + 50, b - 5);
        ctx.lineTo(a + 55, b - 25);
        ctx.lineTo(a + 60, b);
        ctx.lineTo(a, b);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

})
function alien(x, y) {
    this.x = x;
    this.y = y;
    this.check = 0;
    this.draw = function () {
        ctx.beginPath();
        ctx.moveTo(5 + 5 * this.x, 5 + 5 * this.y);
        ctx.lineTo(25 + 5 * this.x, 25 + 5 * this.y);
        ctx.lineTo(45 + 5 * this.x, 5 + 5 * this.y);
        ctx.lineTo(45 + 5 * this.x, 45 + 5 * this.y);
        ctx.lineTo(25 + 5 * this.x, 25 + 5 * this.y);
        ctx.lineTo(5 + 5 * this.x, 45 + 5 * this.y);
        ctx.lineTo(5 + 5 * this.x, 5 + 5 * this.y);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.font = "16px Arial";
        ctx.fillStyle = "lime";
        ctx.fillText("Score :" + score, 10, 350);

        timer += .01;
        if (timer > 60) {
            count++; timer = 0;
            ctx.fillText(count + ":0" + Math.floor(timer), 10, 400);
        }
        else if (timer > 10) {
            ctx.fillText("Timer:" + count + ":" + Math.floor(timer), 10, 400);
        }
        else if (timer < 10) {
            ctx.fillText("Timer:" + count + ":0" + Math.floor(timer), 10, 400);
        }
    }

    this.update = function () {

        if (alienarray[0].x + 1245 >= canvas.width) {
            found = 1;
            this.x -= 0.1;
        }
        else if (alienarray[0].x + 1 <= 0) {
            found = 0;
            this.x += .1;
        }
        else {
            if (found == 0) {
                this.x += .1;
            }
            else {
                this.x -= 0.1;
            }
        }


        this.draw();
    }
}

function alien2(x, y) {
    this.x = x;
    this.y = y;
    this.check = 1;
    this.draw = function () {
        ctx.beginPath();
        ctx.moveTo(5 + 5 * this.x, 5 + 5 * this.y);
        ctx.lineTo(25 + 5 * this.x, 25 + 5 * this.y);
        ctx.lineTo(45 + 5 * this.x, 5 + 5 * this.y);
        ctx.lineTo(45 + 5 * this.x, 45 + 5 * this.y);
        ctx.lineTo(25 + 5 * this.x, 25 + 5 * this.y);
        ctx.lineTo(5 + 5 * this.x, 45 + 5 * this.y);
        ctx.lineTo(5 + 5 * this.x, 5 + 5 * this.y);
        ctx.fillStyle = "lime";
        ctx.fill();
        ctx.stroke();

        ctx.font = "16px Arial";
        ctx.fillStyle = "lime";
        ctx.fillText("Score :" + score, 10, 350);

        timer += .01;
        if (timer > 60) {
            count++; timer = 0;
            ctx.fillText(count + ":0" + Math.floor(timer), 10, 400);
        }
        else if (timer > 10) {
            ctx.fillText("Timer:" + count + ":" + Math.floor(timer), 10, 400);
        }
        else if (timer < 10) {
            ctx.fillText("Timer:" + count + ":0" + Math.floor(timer), 10, 400);
        }
    }

    this.update = function () {

        if (alienarray[0].x + 1245 >= canvas.width) {
            found = 1;
            this.x -= 0.1;
        }
        else if (alienarray[0].x + 1 <= 0) {
            found = 0;
            this.x += .1;
        }
        else {
            if (found == 0) {
                this.x += .1;
            }
            else {
                this.x -= 0.1;
            }
        }


        this.draw();
    }
}
window.addEventListener("click", mouseclick);

function mouseclick() {
    missilearray.push(new missile(a + 30, b - 50));
    animate1(a + 30, b - 50);
}
function missile(x, y) {
    this.x = x;
    this.y = y;
    this.draw1 = function () {

        if (score <= 150) {
            for (var i = 0; i < alienarray.length; i++) {
                if (this.x >= (alienarray[i].x * 5 + 5) && this.x <= (alienarray[i].x * 5 + 45) && this.y == (alienarray[i].y * 5 + 45)) {
                    if (alienarray[i].check == 0) {
                        alienarray.splice(i, 1);
                        missilearray.splice(missilearray.length - 1, 1);
                        score += 10;
                    }
                    else if (alienarray[i].check == 1) {
                        if (count1[i] == 1) {
                            alienarray.splice(i, 1);
                            missilearray.splice(missilearray.length - 1, 1);
                            score += 10;
                        }
                        else {
                            missilearray.splice(missilearray.length - 1, 1);
                            score += 10;
                            count1[i] = 1;
                        }
                    }
                }
            }

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y - 30);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();
        }
        else {

            for (var i = 0; i < alienarray.length; i++) {
                if ((this.x >= (alienarray[i].x * 5 + 5) && this.x <= (alienarray[i].x * 5 + 45) && this.y == (alienarray[i].y * 5 + 45)) || (this.x - 25 >= (alienarray[i].x * 5 + 5) && this.x - 25 <= (alienarray[i].x * 5 + 45) && this.y == (alienarray[i].y * 5 + 45)) || (this.x + 25 >= (alienarray[i].x * 5 + 5) && this.x + 25 <= (alienarray[i].x * 5 + 45) && this.y == (alienarray[i].y * 5 + 45))) {
                    if (alienarray[i].check == 0) {
                        alienarray.splice(i, 1);
                        missilearray.splice(missilearray.length - 1, 1);
                        score += 10;
                    }
                    else if (alienarray[i].check == 1) {
                        if (count1[i] == 1) {
                            alienarray.splice(i, 1);
                            missilearray.splice(missilearray.length - 1, 1);
                            score += 10;
                        }
                        else {
                            missilearray.splice(missilearray.length - 1, 1);
                            score += 10;
                            count1[i] = 1;
                        }
                    }
                }
            }

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y - 30);
            ctx.moveTo(this.x - 25, this.y);
            ctx.lineTo(this.x - 25, this.y - 30);
            ctx.moveTo(this.x + 25, this.y);
            ctx.lineTo(this.x + 25, this.y - 30);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();

        }
    }
    this.update1 = function () {
        this.y -= 1;
        this.draw1();
    }
}

function animate1() {

    requestAnimationFrame(animate1);
    if (missilearray[missilearray.length - 1] == null) {
        return;
    }
    missilearray[missilearray.length - 1].update1();

}
var alienarray = [], count1 = [];
for (var i = 0; i < 240; i += 10) {
    for (var j = 0; j < 60; j += 10) {
        if (Math.floor(Math.random() * 2) == 0) {
            alienarray.push(new alien(i, j));
        }
        else {
            alienarray.push(new alien2(i, j));
            count1.push(0);
        }
    }
}

var animation;
function animate() {
    animation = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, b - 50);
    for (var i = 0; i < alienarray.length; i++) {

        alienarray[i].update();
    }
    ctx.fillText("Level 1", 1100, 320);

}
animate();

var alienfall1 = new fall();
var t = setInterval(function () {
    alienfall1 = new fall();
}, 5000);
var animation3;

function fall() {
    var j = Math.floor(Math.random() * alienarray.length);
    // alienfall.push(alienarray[j]);
    this.al = alienarray[j];
    alienarray.splice(j, 1);
    //  alienfall1=alienfall[alienfall.length-1];
    this.update3 = function () {
        this.al.y += 1;
        this.al.draw();

        if (((this.al.x * 5 + 45 >= a && this.al.x * 5 <= a) || (this.al.x * 5 <= a + 60 && this.al.x * 5 + 45 >= a + 60)) && this.al.y * 5 >= b - 50 && this.al.y * 5 <= b) {
            cancelAnimationFrame(animation);
            cancelAnimationFrame(animation3);
            highscore1();
            ctx.fillText("You lost", canvas.width / 2, canvas.height / 2);
            clearTimeout(t);
        }
        if (alienarray.length == 0 || count > 10) {
            cancelAnimationFrame(animation);
            cancelAnimationFrame(animation3);
            highscore1();
            ctx.fillText("You Won,Level Up", canvas.width / 2, canvas.height / 2 + 50);
            ctx.fillText("Bonus Points :50 ", canvas.width / 2, canvas.height / 2 + 75);
            ctx.fillText("Total score:" + Math.floor(score + 50), canvas.width / 2, canvas.height / 2 + 100);
            clearTimeout(t);
            levelup();


        }
    }
}

function animate3() {
    ctx.clearRect(0, b - 50, a, canvas.height - b + 50);
    ctx.clearRect(a + 60, b - 50, canvas.width - a - 60, canvas.height - b + 50);
    animation3 = requestAnimationFrame(animate3);

    alienfall1.update3();
}
animate3();

function highscore1() {
    if (highscore != null) {
        if (score > highscore) {
            localStorage.setItem("highscore", score);
        }
    }
    else {
        localStorage.setItem("highscore", score);
    }

    ctx.fillText("Highscore :" + highscore, canvas.width / 2, canvas.height / 2 + 25);

}

function levelup() {
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a + 5, b - 25);
        ctx.lineTo(a + 10, b - 5);
        ctx.lineTo(a + 30, b - 50);
        ctx.lineTo(a + 50, b - 5);
        ctx.lineTo(a + 55, b - 25);
        ctx.lineTo(a + 60, b);
        ctx.lineTo(a, b);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        alienarray = [];
        alienarray.length = 0;
        alienarray.splice(0, alienarray.length);

        for (var i = 0; i < 240; i += 10) {
            for (var j = 0; j < 60; j += 10) {
                if (Math.floor(Math.random() * 2) == 0) {
                    alienarray.push(new alien(i, j));
                }
                else {
                    alienarray.push(new alien2(i, j));
                    count1.push(0);
                }
            }
        }
        var animation4;
        function animate4() {
            animation4 = requestAnimationFrame(animate4);
            ctx.clearRect(0, 0, canvas.width, b - 50);
            for (var i = 0; i < alienarray.length; i++) {

                alienarray[i].update();
            }
            ctx.fillText("Level 2", 1100, 320);
        }
        animate4();

        var animation5;
        var alienfall2, alienfall3;
        alienfall2 = new fall1();
        alienfall3 = new fall1();
        var s = setInterval(function () {
            alienfall2 = new fall1();
            alienfall3 = new fall1();
        }, 5000);
        function fall1() {
            var j = Math.floor(Math.random() * alienarray.length);

            this.al = alienarray[j];
            alienarray.splice(j, 1);

            this.update = function () {
                this.al.y += 1;
                this.al.draw();

                if (((this.al.x * 5 + 45 >= a && this.al.x * 5 <= a) || (this.al.x * 5 <= a + 60 && this.al.x * 5 + 45 >= a + 60)) && this.al.y * 5 >= b - 50 && this.al.y * 5 <= b) {
                    cancelAnimationFrame(animation4);
                    cancelAnimationFrame(animation5);
                    highscore1();
                    ctx.fillText("You lost", canvas.width / 2, canvas.height / 2);
                    clearTimeout(s);
                }
                if (alienarray.length == 0 || count > 20) {
                    cancelAnimationFrame(animation4);
                    cancelAnimationFrame(animation5);
                    highscore1();
                    ctx.fillText("You Won, Level up", canvas.width / 2, canvas.height / 2 + 50);
                    ctx.fillText("Bonus Points :100 ", canvas.width / 2, canvas.height / 2 + 75);
                    score += 100;
                    ctx.fillText("Total score:" + Math.floor(score), canvas.width / 2, canvas.height / 2 + 100);
                    clearTimeout(s);
                    levelup2();
                }
            }
        }
        function animate5() {
            ctx.clearRect(0, b - 50, a, canvas.height - b + 50);
            ctx.clearRect(a + 60, b - 50, canvas.width - a - 60, canvas.height - b + 50);
            animation5 = requestAnimationFrame(animate5);

            alienfall2.update();
            alienfall3.update();
        }
        animate5();

    }, 3000);


}
function levelup2() {
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a + 5, b - 25);
        ctx.lineTo(a + 10, b - 5);
        ctx.lineTo(a + 30, b - 50);
        ctx.lineTo(a + 50, b - 5);
        ctx.lineTo(a + 55, b - 25);
        ctx.lineTo(a + 60, b);
        ctx.lineTo(a, b);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        alienarray = [];
        alienarray.length = 0;
        alienarray.splice(0, alienarray.length);

        for (var i = 0; i < 240; i += 10) {
            for (var j = 0; j < 60; j += 10) {
                if (Math.floor(Math.random() * 2) == 0) {
                    alienarray.push(new alien(i, j));
                }
                else {
                    alienarray.push(new alien2(i, j));
                    count1.push(0);
                }
            }
        }
        var animation6;
        function animate6() {
            animation6 = requestAnimationFrame(animate6);
            ctx.clearRect(0, 0, canvas.width, b - 50);
            for (var i = 0; i < alienarray.length; i++) {

                alienarray[i].update();
            }
            ctx.fillText("Level 3", 1100, 320);
        }
        animate6();

        var animation7;
        var alienfall4, alienfall5, alienfall6;
        alienfall4 = new fall2();
        alienfall5 = new fall2();
        alienfall6 = new fall2();
        var r = setInterval(function () {
            alienfall4 = new fall2();
            alienfall5 = new fall2();
            alienfall6 = new fall2();
        }, 5000);
        function fall2() {
            var j = Math.floor(Math.random() * alienarray.length);

            this.al = alienarray[j];
            alienarray.splice(j, 1);

            this.update = function () {
                this.al.y += 1;
                this.al.draw();

                if (((this.al.x * 5 + 45 >= a && this.al.x * 5 <= a) || (this.al.x * 5 <= a + 60 && this.al.x * 5 + 45 >= a + 60)) && this.al.y * 5 >= b - 50 && this.al.y * 5 <= b) {
                    cancelAnimationFrame(animation6);
                    cancelAnimationFrame(animation7);
                    highscore1();
                    ctx.fillText("You lost", canvas.width / 2, canvas.height / 2);
                    clearTimeout(r);
                }
                if (alienarray.length == 0 || count > 30) {
                    cancelAnimationFrame(animation6);
                    cancelAnimationFrame(animation7);
                    highscore1();
                    clearTimeout(r);
                    levelup2b();
                }
            }
        }
        function animate7() {
            ctx.clearRect(0, b - 50, a, canvas.height - b + 50);
            ctx.clearRect(a + 60, b - 50, canvas.width - a - 60, canvas.height - b + 50);
            animation7 = requestAnimationFrame(animate7);

            alienfall4.update();
            alienfall5.update();
            alienfall6.update();
        }
        animate7();

    }, 3000);


}
function levelup2b() {
    ctx.clearRect(0, 0, canvas.width, b - 50);
    var animation8, dx = 1, animation9, counting = 0;
    var missilearray2 = [];
    alienarray = [];
    alienarray.length = 0;
    alienarray.splice(0, alienarray.length);
    function bigalien(x, y) {
        this.x = x;
        this.y = y;
        this.draw = function () {

            ctx.beginPath();
            ctx.moveTo(this.x - 100, this.y - 200);
            ctx.lineTo(this.x, this.y - 100);
            ctx.lineTo(this.x + 100, this.y - 200);
            ctx.fillStyle = "lime";
            ctx.fill();
            ctx.closePath();
        }
        this.update = function () {
            if (this.x - 100 <= 0 || this.x + 100 >= canvas.width) {
                dx = -dx;
            }
            this.x += dx;
            this.draw();

            ctx.fillText("Score:" + score, 10, 350);
        }

    }
    var bigalien1 = new bigalien(canvas.width / 2, canvas.height / 2);
    function animate8() {
        ctx.clearRect(0, 0, canvas.width, b - 50);
        animation8 = requestAnimationFrame(animate8);
        bigalien1.update();
    }
    animate8();

    function missile1(x, y) {
        this.x = x;
        this.y = y;
        this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + 30);
            ctx.stroke();
            ctx.strokeStyle = "white";
            ctx.closePath();

        }
        this.update = function () {
            this.y += 2;
            this.draw();

            if (this.x >= a && this.x <= a + 60 && this.y >= b - 50) {
                clearTimeout(q);
                cancelAnimationFrame(animation8);
                cancelAnimationFrame(animation9);
                highscore1();
                ctx.fillText("You lost", canvas.width / 2, canvas.height / 2);
            }
        }
    }
    var missilefall = new missile1(bigalien1.x, bigalien1.y - 100);
    var q = setInterval(function () {
        missilefall = new missile1(bigalien1.x, bigalien1.y - 100);
    }, 3000);
    function animate9() {
        ctx.clearRect(0, b - 50, a, canvas.height - b + 50);
        ctx.clearRect(a + 60, b - 50, canvas.width - a - 60, canvas.height - b + 50);
        animation9 = requestAnimationFrame(animate9);
        missilefall.update();
    }
    animate9();

    function missile2(x, y) {
        this.x = x;
        this.y = y;
        this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y - 30);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();
        }
        this.update = function () {
            this.y -= 1;
            this.draw();
            if (this.x >= bigalien1.x - 100 && this.x <= bigalien1.x + 100 && this.y - 30 <= bigalien1.y - 200) {
                missilearray2.splice(missilearray2.length - 1, 1);
                counting++;
                score += 20;
            }
            if (counting >= 5) {
                bigalien1 = null;
                cancelAnimationFrame(animation8);
                cancelAnimationFrame(animation9);
                clearTimeout(q);
                ctx.clearRect(0, 0, canvas.width, b - 50);
                highscore1();

                ctx.fillText("Congratulations,you won all the levels", canvas.width / 2, canvas.height / 2 + 50);
                ctx.fillText("Bonus Points :150 ", canvas.width / 2, canvas.height / 2 + 75);
                score += 150;
                ctx.fillText("Your Total score:" + Math.floor(score), canvas.width / 2, canvas.height / 2 + 100);
            }
        }
    }

    window.removeEventListener("click", mouseclick);
    window.addEventListener("click", function () {
        missilearray2.push(new missile2(a + 30, b - 50));
        animate10();
    })

    function animate10() {
        requestAnimationFrame(animate10);
        missilearray2[missilearray2.length - 1].update();
    }

}
