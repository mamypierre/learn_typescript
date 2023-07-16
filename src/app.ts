
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

interface Employer<t> {
    post : string;
    salary: number;

    skills : Array<t>
}

function showEmployer(employer : EmployerString ){
    console.log('post: ' + employer.post  + ', salary: ' + employer.salary);
}

type EmployerString = Employer<string>;


showEmployer({post: "dev", salary:500, skills : ['tests'] });