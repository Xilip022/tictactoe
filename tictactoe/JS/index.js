var tryb = 0;

function start(t){
    if(t==1){
        tryb = 1;

    }else if(t==2){
        tryb = 2;
    }else{
        //cos poszlo nie tak i to dosc mocno
    }
}

function logo(q){
    if(tryb==2){
    if(q==1){
        document.getElementById("Player1").innerHTML = document.getElementById("player1_nick").value;
        document.getElementById("gracz1img").setAttribute('src', document.getElementById("player1_logo").value);
        document.getElementById("gracz1img").style.display = "inline";
    }else if(q==2){
        document.getElementById("Player2").innerHTML = document.getElementById("player2_nick").value;
        document.getElementById("gracz2img").setAttribute('src',  document.getElementById("player2_logo").value);
        document.getElementById("gracz2img").style.display = "inline";
    }
}else{
    var robot = ["Connor", "Markus", "Kara", "North", "Luther", "Alice", "Simeon", "Josh"]
    var i = Math.floor(Math.random() * 8);
    var robot_logo = "";
    document.getElementById("Player1").innerHTML = document.getElementById("player1_nick").value;
    document.getElementById("gracz1img").setAttribute('src', document.getElementById("player1_logo").value);
    document.getElementById("gracz1img").style.display = "inline";

    if(i==0){
        robot_logo = "https://pbs.twimg.com/profile_images/1106230235320717314/9wNWIIFa_400x400.jpg";
    }else if(i==1){
        robot_logo = "https://static.wikia.nocookie.net/detroit-bh/images/a/ae/Markus1.jpeg/revision/latest/scale-to-width-down/350?cb=20200801153108&path-prefix=pl";
    }else if(i==2){
        robot_logo = "https://static.wikia.nocookie.net/detroit-bh/images/f/f7/Kara2.jpeg/revision/latest/scale-to-width-down/350?cb=20200730182431&path-prefix=pl";
    }else if(i==3){
        robot_logo = "https://static.wikia.nocookie.net/detroit-bh/images/8/8a/831a5cb33efcbe03e2ec3f17ac395079.jpg/revision/latest/scale-to-width-down/344?cb=20190906164204&path-prefix=pl";
    }else if(i==4){
        robot_logo = "https://static.wikia.nocookie.net/detroit-bh/images/d/dc/Luther.jpg/revision/latest/scale-to-width-down/350?cb=20210421173950&path-prefix=pl";
    }else if(i==5){
        robot_logo = "https://static.wikia.nocookie.net/detroit-bh/images/b/bb/ALICE.jpg/revision/latest/scale-to-width-down/350?cb=20210421172435&path-prefix=pl";
    }else if(i==6){
        robot_logo = "https://static.wikia.nocookie.net/detroit-become-human/images/4/43/Simon_%21.jpg/revision/latest/scale-to-width-down/350?cb=20200505094645";
    }else if(i==7){
        robot_logo = "https://static.wikia.nocookie.net/detroit-bh/images/5/54/Josh.jpg/revision/latest/scale-to-width-down/350?cb=20210421173306&path-prefix=pl";
    }
    document.getElementById("Player2").innerHTML = robot[i];
    document.getElementById("gracz2img").setAttribute('src',  robot_logo);
    document.getElementById("gracz2img").style.display = "inline";
}
}

var o = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/240px-Blue_circle_for_diabetes.svg.png";
var x = "x.png";
var czyMoznaGrac = true;
var timeoutId = null;
var tura = 1;

function gra(pole){
    if(tryb==0){
        alert("Wybierz tryb gry!");
    }else if(tryb==1){
        if(czyMoznaGrac){
            if(document.getElementById("td_" + pole).getAttribute('src') === "") {
                document.getElementById("td_" + pole).setAttribute('src', x);
                document.getElementById("td_" + pole).style.display = "inline";
            
        var slowka = document.getElementById("slowka");
        var slowa = ["Nieźle!", "Ciekawie!", "Mocno!", "WOW!", "Tak trzymaj!", "Super!", "Niesamowicie!", "Brawo!"];
        var slowo_liczba = Math.floor(Math.random() * 8);
        slowka.style.color = "white";
        slowka.innerHTML = slowa[slowo_liczba];
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }
    
          timeoutId = setTimeout(kasuj, 2000);
          czyMoznaGrac = false;
        
            }else{
                //nic
            }
        //komputer
        //https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/240px-Blue_circle_for_diabetes.svg.png
    }
    }else if(tryb==2){
        var z = "";
        if(tura%2 != 0){
            z = x;
        }else if(tura%2 == 0){
            z = o;
        }
        if(czyMoznaGrac){
            if(document.getElementById("td_" + pole).getAttribute('src') === "") {
                document.getElementById("td_" + pole).setAttribute('src', z);
                document.getElementById("td_" + pole).style.display = "inline";
            
        var slowka = document.getElementById("slowka");
        var slowa = ["Nieźle!", "Ciekawie!", "Mocno!", "WOW!", "Tak trzymaj!", "Super!", "Niesamowicie!", "Brawo!"];
        var slowo_liczba = Math.floor(Math.random() * 8);
        slowka.style.color = "white";
        slowka.innerHTML = slowa[slowo_liczba];
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }
    
          timeoutId = setTimeout(kasuj_duo, 2000);
          czyMoznaGrac = false;
          tura+=1;
            }else{
                tura += 0;
            }
    }  
    
    test();
}
}
function kasuj_duo(){
    document.getElementById("slowka").innerHTML = "Easter egg";
    document.getElementById("slowka").style.color = "transparent";
    czyMoznaGrac = true;
    timeoutId = null;
}
function kasuj(){
    document.getElementById("slowka").innerHTML = "Easter egg";
    document.getElementById("slowka").style.color = "transparent";
    czyMoznaGrac = true;
    timeoutId = null;
    if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_2").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_3").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_4").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_4").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== ""){
        if(document.getElementById("td_4").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_7").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_7").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_7").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_4").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_2").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_2").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== ""){
        if(document.getElementById("td_2").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_3").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
        if(document.getElementById("td_3").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else{
    if(document.getElementById("td_5").getAttribute('src') === ""){
        document.getElementById("td_5").setAttribute('src', o);
        document.getElementById("td_5").style.display = "inline";
    }else{
        if(document.getElementById("td_3").getAttribute('src') === ""){
            document.getElementById("td_3").setAttribute('src', o);
            document.getElementById("td_3").style.display = "inline";
        }else if(document.getElementById("td_1").getAttribute('src') === ""){
            document.getElementById("td_1").setAttribute('src', o);
            document.getElementById("td_1").style.display = "inline";
        }else if(document.getElementById("td_7").getAttribute('src') === ""){
            document.getElementById("td_7").setAttribute('src', o);
            document.getElementById("td_7").style.display = "inline";
        }else if(document.getElementById("td_9").getAttribute('src') === ""){
            document.getElementById("td_9").setAttribute('src', o);
            document.getElementById("td_9").style.display = "inline";
        }else{
            if(document.getElementById("td_2").getAttribute('src') === ""){
                document.getElementById("td_2").setAttribute('src', o);
                document.getElementById("td_2").style.display = "inline";
            }else if(document.getElementById("td_4").getAttribute('src') === ""){
                document.getElementById("td_4").setAttribute('src', o);
                document.getElementById("td_4").style.display = "inline";
            }else if(document.getElementById("td_6").getAttribute('src') === ""){
                document.getElementById("td_6").setAttribute('src', o);
                document.getElementById("td_6").style.display = "inline";
            }else if(document.getElementById("td_8").getAttribute('src') === ""){
                document.getElementById("td_8").setAttribute('src', o);
                document.getElementById("td_8").style.display = "inline";
            }else{
                document.getElementById("slowka").innerHTML = "KONIEC! REMIS!";
                document.getElementById("slowka").style.color = "white";
                koniec();
            }
        }
    }
    setTimeout(test, 1);
}
}
function test(){
    if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_2").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_3").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_4").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_4").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== ""){
        if(document.getElementById("td_4").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_7").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_7").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_7").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_4").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_2").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_2").getAttribute('src') === document.getElementById("td_8").getAttribute('src') && document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== ""){
        if(document.getElementById("td_2").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_6").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_3").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_1").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_1").getAttribute('src') === document.getElementById("td_9").getAttribute('src') && document.getElementById("td_1").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== ""){
        if(document.getElementById("td_1").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
}
    }else if(document.getElementById("td_3").getAttribute('src') === document.getElementById("td_5").getAttribute('src') && document.getElementById("td_3").getAttribute('src') === document.getElementById("td_7").getAttribute('src') && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== ""){
        if(document.getElementById("td_3").getAttribute('src') === o){
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają kółka!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }else{
            document.getElementById("slowka").innerHTML = "KONIEC! Wygrywają krzyżyki!";
            document.getElementById("slowka").style.color = "white";
            koniec();
        }
    }else if(document.getElementById("td_2").getAttribute('src') !== "" && document.getElementById("td_3").getAttribute('src') !== "" && document.getElementById("td_4").getAttribute('src') !== "" && document.getElementById("td_5").getAttribute('src') !== "" && document.getElementById("td_6").getAttribute('src') !== "" && document.getElementById("td_7").getAttribute('src') !== "" && document.getElementById("td_8").getAttribute('src') !== "" && document.getElementById("td_9").getAttribute('src') !== "" && document.getElementById("td_1").getAttribute('src') !== ""){
            document.getElementById("slowka").innerHTML = "KONIEC! REMIS!";
            document.getElementById("slowka").style.color = "white";
            koniec();
    }
}
function koniec(){

    var wszystko = document.querySelectorAll('*');
        for (var i = 0; i < wszystko.length; i++) {
            wszystko[i].onclick = null;
            wszystko[i].onchange = null;
        }
}