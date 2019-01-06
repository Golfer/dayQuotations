import axios from 'axios'

export function getRandomQuotations() {
  return (dispatch) => {
    axios.get('https://prod-quotations.herokuapp.com/api/v1/quotations')
      .then(response => {
        // console.log(response.data, 'DATA');
        dispatch({
          type: 'LOAD_RANDOM_QUOTATIONS_SUCCESS',
          payload: response.data.quotations
        })
      })
  }
}
