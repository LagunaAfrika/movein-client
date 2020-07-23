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
      property_type: "sajkfbakjs",
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
      property_picture: ""
    }
  },
  getters,
  actions,
  mutations
};
