export default {
  SET_USER (state, payload) {
    console.log('i am in set user' + state + payload)
    const { fullname, email, phonenumber, usertype, verificationCode, password } = payload
    state.user.fullname = fullname
    state.user.email = email
    state.user.phonenumber = phonenumber
    state.user.usertype = usertype
    state.user.verificationCode = verificationCode
    state.user.password = password
  }
}
