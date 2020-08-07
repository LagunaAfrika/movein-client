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
    input: {
      location: "",
      hood: "",
      house_type: "",
      rent: "",
      amenities: ""

    },
  },
  getters,
  actions,
  mutations
};
