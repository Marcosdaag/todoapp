// Modelo que hace referencia al schema utilizado para los objetos pendigs dentro de la db

export class Pending{
    constructor(
        public _id: string,
        public name: string,
        public realized: boolean
    ){}
}