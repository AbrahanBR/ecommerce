export interface UserInterface {
    id?: number;
    email: string;
    name: string;
    lastName: string;
    userName: string;
    password: string;
    cart?: Array<number>;
    favs?: Array<number>;
    credCard?: Array<{
        name: string;
        number: number;
    }>;
}