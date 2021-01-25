import { GOOD, BAD } from '../types/types';
import axios from 'axios';

const FormAction = (number) => (dispatch) => {

    const info = JSON.stringify({ number });
   
    const options = {
        method: 'POST',
        body: info,
        headers : {
            'content-type' : 'application/json',
            'accepts' : 'application/json'
        }
    };

    axios.post("http://localhost:5050/api", options)
    .then(response => {
        dispatch({
            type: GOOD,
            payload: response
        });
    })
    .catch(err => {
        dispatch({
            type: BAD,
            payload: err
        });
    })
}

export default FormAction;