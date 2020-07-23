import Vuex from "vuex";
import property from "./modules/property";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      property
    },
    state: {
     
    }
  });
};

export default createStore;
