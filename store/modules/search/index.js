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
    search: {
      input: {
        location: '',
        hood: '',
        bedroom_and_bathroom: '',
        rent: '',
        amenities: ''

      },
      search_results: ''
    }
  },
  getters,
  actions,
  mutations
}
