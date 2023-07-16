
const compteur = document.querySelector('#compteur');
let i : number = 0;
const increment = (e: Event): void =>
{
    e.preventDefault();
     i++;
    let  span = compteur?.querySelector('span');

    if (span){
        span.innerText = i.toString();
    }
}

compteur?.addEventListener('click', increment);

class Test {
     test:string = '';
}
let test = new Test();

const age : number = 11 ;