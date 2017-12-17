namespace Model {
    export class Catalog {
        public id: number;
        public firstName: string;
        public lastName: string;
    }

    export class Garment {
        public id: number;
        public type: string;
        public gender: string;
        public season: string;
        public color: string;
        public price: number;
        public photo: string;
        public presence ?: string;
    }
}

