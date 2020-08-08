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
    properties: {
      property_id: '',
      property_type: 'apartment',
      property_name: '',
      area: '',
      location: {
        name: '',
        coords: {
          lat: '',
          long: ''
        }
      },
      total_units: 0,
      available_units: 0,
      property_picture: '',
      bedroom: {
        balcony: '',
        ensuite: '',
        mirror: '',
        bedroom_picture: ''
      },
      kitchen: {
        wall_tiles: '',
        wall_cabinets: '',
        wall_shelves: '',
        cooker_sockets: '',
        kitchen_picture: ''

      },
      living: {
        wall_lights: '',
        balcony: '',
        living_picture: ''

      },
      washroom: {
        wall_lighting: '',
        electric_heater: '',
        bath_tub: '',
        solar_heater: '',
        washroom_picture: ''

      },

      details: {

        livingRoom: [],
        washRoom: [],
        rent_amount: 0,
        bathrooms: '',
        house_type: ''
      }
    }
  },
  getters,
  actions,
  mutations
}
