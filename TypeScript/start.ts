let asd: string = 'asd';
let asd4: any = 'asd';    // будь який тип даних
let asd2: number | null = 13;
let asd3: boolean | null = true;

let arr: number[] = [1, 2, 3];
let arr1: Array<number> = [1, 2, 3];   // аналогічно для string

let arr2: [ number, number, string] = [1, 2, '3'];

///////////////////////////////////////////
function asds (): void {        // якщо функція нічого не повертає.  never - функції які ніколи не закінчуються
    console.log('123')
};

let aasd: (num: number) => number;    //обявляємо що зміній буде присвоєна функція

function aasd1 (num: number) {
    return num
};

aasd = aasd1;

//////////////////////////////////
const obj: {name: string, age: number} = {
    name: 'asd',
    age: 20,
}


type User = {name: string, age: number, logName?: () => void}  // ? вказує що дане поле не є обовязковим

const obj1: User = {
    name: 'asd',
    age: 20,
}

/////////////////////////////////////////////////////////
enum User {
    Leo,
    Leo1,
    Leo2
}

const user: User = User.Leo;
console.log(user)       // 0

////////////////////////////////
function genericGet<T> (date: T): T {            // <T> означає що в функцію передадуть якісь дані і вона верне щось тогож типу  
    return date
}