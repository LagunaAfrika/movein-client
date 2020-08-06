export default {
  SET_AREA(state, data) {
    console.log(data, "data");
    const { property_name, location } = data;
    state.properties.property_name = property_name;
    state.properties.location.name = location;
  },
 
  
  SET_RENT(state, data){
    state.properties.details.rent_amount = data
  },
  SET_HOUSE_TYPE(state, data){
    const {bathrooms, description, house_type} = data
    state.properties.details.description = description
    state.properties.details.bathrooms = bathrooms
    state.properties.details.house_type = house_type
  },
};
