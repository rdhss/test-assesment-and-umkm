import { ModuleResolutionKind } from "typescript"

type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]

// CASE 1

/*------------------- NO 1 ---------------------- */
const jumlahBuah = (data: IFruit[]) => {
    let fruit = data.map(item => item.fruitName)
    return fruit
}

console.log(jumlahBuah(fruits))
// JAWABAN 
// [ 'Apel', 'Kurma', 'apel', 'Manggis', 'Jeruk Bali', 'KURMA', 'Salak' ]



/*------------------- NO 2 ---------------------- */
const JumlahWadah = (data : IFruit[]) => {
    let wadah :Array<object> = []
    let tipebuah = [...new Set(data.map(item => item.fruitType))]
    for (let i = 0; i < tipebuah.length; i++) {
        let name = tipebuah[i]
        let obj :  { [key: string]: Array<string>; } = {}
        obj[name] = fruits.filter(item => item.fruitType === tipebuah[i]).map(item => item.fruitName)
        wadah.push(obj)
     }

     return wadah
}

console.log(JumlahWadah(fruits))
// JAWABAN
// Wadah yang dibutuhkan 2 
// [
//     { IMPORT: [ 'Apel', 'Kurma', 'apel', 'KURMA' ] },
//     { LOCAL: [ 'Manggis', 'Jeruk Bali', 'Salak' ] }
//   ]



/*------------------- NO 3 ---------------------- */

const StockWadah = (data : IFruit[]) => {
    let wadah :Array<object> = []
    let tipebuah = [...new Set(data.map(item => item.fruitType))]
    for (let i = 0; i < tipebuah.length; i++) {
        let name = tipebuah[i]
        let obj :  { [key: string]: number; } = {}
        obj[name] = fruits.filter(item => item.fruitType === tipebuah[i]).map(item => item.stock).reduce((a, b) => a + b, 0)
        wadah.push(obj)
     }

     return wadah
}



console.log(StockWadah(fruits))


/*------------------- NO 4 ---------------------- */

//* tidak ada */