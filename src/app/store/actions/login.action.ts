import {Action} from '@ngrx/store';

export class AddLogin implements Action {
    readonly type = 'ADD';
    constructor(public payload) {}
}

export class UpdateIngredient implements Action {
    readonly type = 'UPDATE';
    constructor(public payload: {index: number, data: any}) {}
}

export type LoginAction = AddLogin | UpdateIngredient;
