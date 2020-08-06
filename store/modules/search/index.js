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
      area: "",
      hood: "",
      house_type: "",
      rent: "",
     
    },
  },
  getters,
  actions,
  mutations
};
