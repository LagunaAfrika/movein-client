export default {
  SET_HOUSE_NAME_AREA(state, data) {
    console.log(data, "data");
    const { property_name, location } = data;
    state.properties.property_name = property_name;
    state.properties.location.name = location;
  },
  SET_COORDS(state, data) {
    const { lat, long } = data;
    state.properties.location.coords.lat = lat;
    state.properties.location.coords.long = long;
  },
  ADD_NUMBER_OF_ROOMS(state, data) {
    const { total, vacant } = data;
    state.properties.total_units = total;
    state.properties.available_units = vacant;
  },
  SET_PROPERTY_PICTURE(state, data){
    state.properties.property_picture = data
  },
  SET_BEDROOM_DETAILS(state, data){
    const {ensuite, mirror, balcony} = data
    state.properties.bedroom.ensuite = ensuite
    state.properties.bedroom.mirror = mirror
    state.properties.bedroom.balcony = balcony
  },
  SET_KITCHEN_DETAILS(state, data){
    state.properties.details.kitchen = data
  },
  SET_LIVINGROOM_DETAILS(state, data){
    state.properties.details.livingRoom = data
  },
  SET_WASHROOM_DETAILS(state, data){
    state.properties.details.washRoom = data
  },
  SET_RENTAMOUNT_DETAILS(state, data){
    state.properties.details.rent_amount = data
  },
  SET_HOUSE_DESCRIPTION(state, data){
    const {bathrooms, description, house_type} = data
    state.properties.details.description = description
    state.properties.details.bathrooms = bathrooms
    state.properties.details.house_type = house_type
  },
};
