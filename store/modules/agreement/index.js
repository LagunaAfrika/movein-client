/***
 *
 * Property Module
 *
 *
 */

import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default {
  state: {
    agreement: {
      draft_date: '',
      apartment_type: '',
      lr_no: '',
      drafted_by: {
        full_name: '',
        postal_code: '',
        postal_address: '',
        city: '',
        sign_date: '',
      },
      house_details: '',
      landlord_details: {
        full_name: '',
        postal_code: '',
        postal_address: '',
        city: '',
        sign_date: '',
      },
      tenant_details: {
        full_name: '',
        postal_code: '',
        postal_address: '',
        city: '',
        sign_date: '',
      }

    }
  },
  getters,
  actions,
  mutations
}
