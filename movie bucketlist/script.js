let i = 0;
let j = 0;
var form = document.getElementById("movieinput");

function submitform(event) {
    
    event.preventDefault();
    
    
    let inputtime = document.getElementById("avtime").value
    let inputgenre = document.getElementById("avgenre").value
    let inputera = document.getElementById("avera").value
    var movieselect = [inputtime , inputgenre, inputera];
    
    for (let i = 0; i < movielist.length; i++){
       

        document.getElementById("imdbrating").innerHTML = "There is no such movie " + "<br />" + " in the IMDB Top 250 :(";
        document.getElementById("movierecimgcont").innerHTML = ""; 
        document.getElementById("subbutton").innerHTML = "Another one please!";
        document.getElementById("movierectext").innerText = "";

        if(movielist[i].slice(3).toString() === movieselect.toString()){
          
            var movierectitle = (movielist[i][0]);
            var movieimg = new Image();
            movieimg.src = (movielist[i][1]).toString();
            var rating= (movielist[i][2]).toString();
            movielist.splice(i,1);


            document.getElementById("movierectext").innerText = movierectitle;
           
            
            document.getElementById("movierecimgcont").innerHTML = ""; 
            document.getElementById("movierecimgcont").appendChild(movieimg); 
            document.getElementById("imdbrating").innerText="";
            document.getElementById("imdbrating").innerText = rating + " ★";
            
            
            document.getElementById("subbutton").innerHTML = "Another one please!";
            
            
            break

        }
        






    }    
   


}

function randomform(event){
    
    event.preventDefault();

    j = Math.floor((Math.random() * movielist.length)+1);


    var movierectitle = (movielist[j][0]);
    var movieimg = new Image();
    movieimg.src = (movielist[j][1]).toString();
    var rating= (movielist[j][2]).toString();
    movielist.splice(j,1);


    document.getElementById("movierectext").innerText = movierectitle;
   
    
    document.getElementById("movierecimgcont").innerHTML = ""; 
    document.getElementById("movierecimgcont").appendChild(movieimg); 
    document.getElementById("imdbrating").innerText="";
    document.getElementById("imdbrating").innerText = rating + " ★";

    if(movielist.length === 1){

        document.getElementById("randombutton").innerHTML = "Literally none...";
        document.getElementById("subbutton").innerHTML = "No more movies left";


    }

}



