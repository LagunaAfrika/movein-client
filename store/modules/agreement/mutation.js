export default {
  SET_DRAFT_DATE(state, data) {
    console.log(data, 'data')
    state.agreement.draft_date = data
  },
  SET_APARTMENT_TYPE(state, data) {
    state.agreement.apartment_type = data
  },
  SET_LR_NO(state, data) {
    state.agreement.lr_no = data
  },
  SET_HOUSE_DETAILS(state, data) {
    state.agreement.house_details = data
  },
  SET_DRAFTED_BY(state, data) {
    const { full_name, postal_code, postal_address, city, sign_date } = data
    state.agreement.drafted_by.full_name = full_name
    state.agreement.drafted_by.postal_code = postal_code
    state.agreement.drafted_by.postal_address = postal_address
    state.agreement.drafted_by.city = city
    state.agreement.drafted_by.sign_date = sign_date
  },
  SET_LANDLORD_DETAILS(state, data) {
    const { full_name, postal_code, postal_address, city, sign_date } = data
    state.agreement.drafted_by.full_name = full_name
    state.agreement.drafted_by.postal_code = postal_code
    state.agreement.drafted_by.postal_address = postal_address
    state.agreement.drafted_by.city = city
    state.agreement.drafted_by.sign_date = sign_date
  },
  SET_TENANT_DETAILS(state, data) {
    const { full_name, postal_code, postal_address, city, sign_date } = data
    state.agreement.drafted_by.full_name = full_name
    state.agreement.drafted_by.postal_code = postal_code
    state.agreement.drafted_by.postal_address = postal_address
    state.agreement.drafted_by.city = city
    state.agreement.drafted_by.sign_date = sign_date
  },


}
