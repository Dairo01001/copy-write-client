import { URL_BACKEND } from '../config';


export const getText = async (text) => {
    const response = await fetch(`${URL_BACKEND}/iecho?text=${text}`);
    return await response.json();
};