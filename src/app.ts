
const compteur = document.querySelector('#compteur');
let i : number = 0;
const increment = (e: Event): void =>
{
    e.preventDefault();
     i++;
    let  span : HTMLSpanElement = compteur?.querySelector('span') as HTMLSpanElement;

    if (span){
        span.innerText = i.toString();
    }
}

compteur?.addEventListener('click', increment);


type User = {
    firstname : string;
    lastName : string;
}

 let user : User = {
    firstname : "coucou",
    lastName : "cwcdcw"
 }

class Test {
     test:string = '';
}
let test = new Test();

const age : number = 11 ;

interface Employer<t> {
    post : string;
    salary: number;

    skills? : t[]
}


const  arr : Array<string> = [''];
const  arr1 : string[] = [''];
function showEmployer(employer : EmployerString ){
    console.log('post: ' + employer.post  + ', salary: ' + employer.salary);
}

type EmployerString = Employer<string>;


showEmployer({post: "dev", salary:500 });



function identity<t>(arg: t): t {
    return arg;
}

const a = identity<number>(3);

function first<Type>( arg : Type[]): Type | boolean {
    if (arg[0])
        return arg[0];
   return false;
}

const test1 = first<number>([12,25]);

type Fist<Type> = ( arg : Type[]) => Type ;

class A {
    protected b : string = 'est';
    private a : number = 5; // aces a['a']
    #c : number = 5; // real private ; js
}

interface Point {
     x: number;
}
interface Point { // ouvert
     y: number;
}

class TwoDimensionalPoint implements Point {
    x: number = 2;
    y: number = 1;

}

// tuple
 type tuple =  [string, number];