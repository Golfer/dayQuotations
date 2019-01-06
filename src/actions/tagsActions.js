import axios from 'axios'

export function getRandomTags() {
  return (dispatch) => {
    axios.get('https://prod-quotations.herokuapp.com/api/v1/tags')
      .then(response => {
        console.log(response.data, 'DATA');
        dispatch({
          type: 'LOAD_RANDOM_TAGS_SUCCESS',
          payload: response.data.tags
        })
      })
  }
}