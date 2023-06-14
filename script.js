const btn = Array.from(document.querySelectorAll('button'));

const rock = document.getElementById('rock');

const paper = document.getElementById('paper');

const scissors = document.getElementById('scissors');

const arrSign = ["Rock" , "Paper" , "Scissors"]

function randomize() {
    return Math.floor((Math.random() * 3) + 1);
}


btn.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "Rock":
                
                const cse1 = randomize();
                const valor = arrSign[cse1];

                if (valor === "Rock") {
                    console.log('equal');
                } else if (valor === "Paper") {
                    console.log('you win');
                } else {
                    console.log('you lose');
                }

                break;

            case "Paper":
                
                const cse2 = randomize();
                const valor2 = arrSign[cse2];

                if (valor2 === "Paper") {
                    console.log('equal');
                } else if (valor2 === "Scissors") {
                    console.log('you win');
                } else {
                    console.log('you lose');
                }
                break;

            case "Scissors":
                
                const cse3 = randomize();
                const valor3 = arrSign[cse3];

                if (valor3 === "Scissors") {
                    console.log('equal');
                } else if (valor3 === "Rock") {
                    console.log('you win');
                } else {
                    console.log('you lose');
                }
                break;
        
            default:
                console.log('pipu');
                break;
        }
    })
})