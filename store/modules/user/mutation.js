export default {
  SET_USER(state, payload) {
    console.log(payload)
    const { fullname,email,phonenumber,usertype } = payload
    state.user.fullname = fullname
    state.user.email = email
    state.user.phonenumber = phonenumber
    state.user.usertype = usertype
  }
};
