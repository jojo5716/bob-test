import {
    FETCH_CARD_LIST,
} from '@src/constants/actions';


const fetchCards = () => ({
    type: FETCH_CARD_LIST,
    payload: {},
});

export default {
    fetchCards,
};
