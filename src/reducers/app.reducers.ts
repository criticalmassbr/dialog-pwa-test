import { BUSCA } from '../actions/action.type';

const state_default = {
    termo_busca_usuario: localStorage.ultimo_termo_busca || ''
};

const app = (state = state_default, action) => {
    console.log(action);
    switch (action.type) {
        case BUSCA:
            localStorage.ultimo_termo_busca = action.payload.termo;
            return {
                termo_busca_usuario: action.payload.termo
            };
        default:
            return state;
    }
};

export default app;
