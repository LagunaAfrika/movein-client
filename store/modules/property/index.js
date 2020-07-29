/***
 *
 * Property Module
 *
 *
 */

import getters from "./getter";
import mutations from "./mutation";
import actions from "./action";

export default {
  state: {
    properties: { 
      property_type: "apartment",
      property_name: "",
      area: "",
      location: {
        name: "",
        coords: {
          lat: "",
          long: ""
        }
      },
      total_units: 0,
      available_units: 0,
      property_picture: "",
      details: {
        bedroom: [],
        kitchen: [],
        livingRoom: [],
        washRoom: [],
        rent_amount: 0
      }
     
    }
  },
  getters,
  actions,
  mutations
};
