export default {
  SET_LOCATION(state, data) {
    console.log(data, "data");
    state.input.location = data;
  },
  SET_HOOD(state, data) {

    state.input.hood = data;
  },


  SET_RENT(state, data) {
    state.input.rent = data
  },
  SET_HOUSE_TYPE(state, data) {
    state.input.house_type = data
  },
  SET_AMENITIES(state, data) {
    state.input.amenities = data
  },
};
