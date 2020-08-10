/***
 *
 * user Module
 *
 *
 */

import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default {
  state: {
    user: {
      usertype: '',
      fullname: '',
      email: '',
      phonenumber: '',
      verificationCode: '',
      token: ''

    }
  },
  getters,
  actions,
  mutations
}
