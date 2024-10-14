function rolldice(event){
    event.preventDefault();

    let sidecount = document.getElementById("sidecount").value;
    
    let dice1 = Math.floor((Math.random() * sidecount)+1);
    let dice2 = Math.floor((Math.random() * sidecount)+1);
    let dice3 = Math.floor((Math.random() * sidecount)+1);
    let dice4 = Math.floor((Math.random() * sidecount)+1);
    let dice5 = Math.floor((Math.random() * sidecount)+1);
    let dice6 = Math.floor((Math.random() * sidecount)+1);
    let dice7 = Math.floor((Math.random() * sidecount)+1);
    let dice8 = Math.floor((Math.random() * sidecount)+1);
    let dice9 = Math.floor((Math.random() * sidecount)+1);
    let dice10 = Math.floor((Math.random() * sidecount)+1);
    var roll = [dice1,dice2,dice3,dice4,dice5,dice6,dice7,dice8,dice9,dice10];
    
    let dicecount = document.getElementById("diceamount").value;
    let narrowroll = roll.slice(dicecount*-1);


    let rollsum = 0;

    narrowroll.forEach(n=> rollsum += n);

    
    document.getElementById("drolls").innerText= narrowroll;
    document.getElementById("droll").innerText= rollsum;
}