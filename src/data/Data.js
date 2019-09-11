import Realm from 'realm'

export const InfoProduct = {
    name: 'Info',
    properties: {
        id:'int?',
        name:'string?',
        price:'int?',
        amount:'int?',
    }
}



export default new Realm({schema:[InfoProduct]})

