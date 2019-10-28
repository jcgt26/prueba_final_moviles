window.onload = init;
var array_card_numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var array_cartas = [];
var cards_reference = {};
var cardStack = [];

function init(){

    for (let i = 0; i <= 13; i++) {
        array_cartas[i] = document.getElementById('carta_'+i+'');
        shuffle(array_card_numbers);
        
        
    }
    addCardClass();

}


function addCardClass(){
    // console.log(array_cartas);
         
    for (let i = 0; i < array_cartas.length; i++) {
        let number_card = array_card_numbers[i]
        let card = array_cartas[i];
        let nameCardClass = "";
        switch (number_card) {
            case 1:
                nameCardClass = 'cruz'; 
                card.classList.add("1");
                break;
            case 2:
                nameCardClass = 'iglesia';
                card.classList.add("2");
                break;
            case 3:
                nameCardClass = 'jesus';
                card.classList.add("3");
                break;
            case 4:
                nameCardClass = 'metrocable';
                card.classList.add("4");
                break;
            case 5:
                nameCardClass = 'puente';
                card.classList.add("5");
                break;
            case 6:
                nameCardClass = 'silla';
                card.classList.add("6");
                break;
            case 7:
                nameCardClass = 'virgen';
                card.classList.add("7");
                break;
        
            default:
                break;
        }
        cards_reference[`${i}`] = [nameCardClass, false]; //[0] -> classname, [1] -> if checked
        
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    
}

function flip(element){
    element.classList.add('flipInY');
    cardStack.push(element);
    reveal(element)
    
}
function unFlip(){

}

function check(){
    if(cardStack.length === 2){
         setTimeout(function(){
            let card1 = cardStack[0];
            let card2 = cardStack[1];
            let id1 =cards_reference[card1.id.substring(6)][0];
            let id2 =cards_reference[card2.id.substring(6)][0];
            if(id1 === id2){
                
                cardStack.pop();
                cardStack.pop();
                card1.onclick = null;
                card2.onclick = null;
                cards_reference[card1.id.substring(6)][1] = true;
                cards_reference[card2.id.substring(6)][1] = true;
            }
            else{
                cardStack.pop();
                cardStack.pop();
                card1.classList.remove(id1);
                card2.classList.remove(id2);
                console.log(cardStack);
                
            }
          }, 1000);
       
        
        
    }else{

    }
}
function reveal(card){
    let id = card.id.substring(6);
    card.classList.add(cards_reference[id][0])
    check()
    win();
    
}
function win(){// verion machetera
    let count = 0;
    for (let i = 0; i < 13; i++) {
        cards_reference[i][1]==true?count++: count;
        
    }
    if(count === 14){
    document.getElementById('game_concentrate').classList.add('ocultar');
    document.getElementById('ganar').classList.remove('ocultar');
    }else{

    }
}






