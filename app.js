

function clickme() {

    document.getElementById('newcontainer').style.display = 'block';



}

function unclickme() {

    document.getElementById('newcontainer').style.display = 'none';


}


// you can use onclick on the html to add the event or use addEventListener


// document.getElementById('enterme').addEventListener('click', enterme)
// function enterme() {

//     let number = document.getElementById('number').value;
//     let answer = number * number * number;
//     document.getElementById('alert').classList.remove('d-none');

//    setTimeout(() => {
//     document.getElementById('alert').classList.add('d-none')

//    }, 1500)
   

//     document.getElementById('result').innerHTML = answer
//     console.log(answer) 


// }







function enterme() {

    
    


    let number = document.getElementById('number').value;
    let answer = number * number * number;
    document.getElementById('alert').classList.remove('d-none');

   setTimeout(() => {
    document.getElementById('alert').classList.add('d-none')

   }, 1500)
   

    document.getElementById('result').innerHTML = answer
    document.getElementById('number').value = '';
    console.log(answer) 


}