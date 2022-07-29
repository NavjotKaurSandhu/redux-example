// export const ADD_BOOK = 'ADD_BOOK'

export const ADD_BOOK = '[Book] Add Book';
export const REMOVE_BOOK = '[Book] Remove Book';

export class AddBook {
    readonly type = ADD_BOOK;

    constructor(private payload: any) {}
}

export class RemoveBook {
    readonly type = REMOVE_BOOK;

    constructor(private payload: any) {}
}