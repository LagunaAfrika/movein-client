export default {
  SET_LOCATION (state, data) {
    // eslint-disable-next-line no-console
    console.log(data, 'data')
    state.search.input.location = data
  },
  SET_HOOD (state, data) {
    state.search.input.hood = data
  },

  SET_RENT (state, data) {
    state.search.input.rent = data
  },
  SET_HOUSE_TYPE (state, data) {
    state.search.input.house_type = data
  },
  SET_BEDROOM_AND_BATHROOM (state, data) {
    const { bedroom, bathroom } = data
    state.search.input.bedroom = bedroom
    state.search.input.bathroom = bathroom
  },
  SET_AMENITIES (state, data) {
    state.search.input.amenities = data
  },

  SET_SEARCH_RESULTS (state, data) {
    state.search.search_results = data
    localStorage.setItem('searchResults', JSON.stringify(data))
    // JSON.parse(localStorage.getItem('searchResults'))
  }
}
