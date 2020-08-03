/***
 *
 * user Module
 *
 *
 */

import getters from "./getter";
import mutations from "./mutation";
import actions from "./action";

export default {
  state: {
    user: {
      usertype: "",
      fullname: "",
      email: "",
      phonenumber: "",
    },
  },
  getters,
  actions,
  mutations
};
