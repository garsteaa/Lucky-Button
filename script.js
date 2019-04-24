/*const age = 10;
const ageRestriction= 13;
const supervisior = true;
const ageAllowance = ()=> {
   return age > ageRestriction;
};

const random = () => {
   if(ageAllowance() || supervisior){
       return 'se poate de intrat'
   } else {
       return 'nu se poate de intrat'
       };
    };

const myFunction = () => {
let x = document.getElementById('nume').innerHTML;
  document.getElementById('data').innerHTML = random() +' '+ x;
};
*/


const number = () => {
    return Math.floor(Math.random() * 13);
};

const ball = () => {
    switch(number()){
        case 1:
        return 'Zimbeste ca cineva se indragosteste de zimbetu tau';
        break;
        case 2:
        return 'Nu lasa miinele in jos';
        break;
        case 3:
        return 'Ridica miinele in sus si cauta';
        break;
        case 4:
        return 'Suna de cine tii dor';
        break;
        case 5: 
        return 'Aduti aminte de cuprinsu Mamei';
        break;
        case 6:
        return 'Fa o cunostinta noua.';
        break;
        case 7:
        return 'Sadeste un copac.';
        break;
        case 8:
        return 'Alearga 2 Km.';
        break;
        case 9:
        return 'Trimite un mesaj de felicitare fara ocazie';
        break;
        case 10:
        return 'Aduti aminte un cintect din copilarie';
        break;
        case 11:
        return 'Invata sa joci Sah';
        break;
        case 12:
        return 'Adopta un Animal';
        break;
        default:
        return 'Colectioneaza 101 obiecte asemanatoare';
        break;

    }
};

const myFunction = () => {
    let x = document.getElementById('nume').innerHTML;
    document.getElementById('data').innerHTML =`${ball()}`;
}
