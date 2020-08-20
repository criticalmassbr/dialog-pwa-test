import { BUSCA } from './action.type';

export const buscarUsuarios = (termo) => {
    return {
        type: BUSCA,
        payload: { termo }
    };
};