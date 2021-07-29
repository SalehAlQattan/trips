//library imports
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
//components
import instance from "./instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signin = async (userData) => {
    try {
      const response = await instance.post("/signin", userData);
      this.setUser(response.data.token);
    } catch (error) {
      console.error("userSignin:", error);
    }
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("userToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      const user = decode(token);
      if (user.expires >= Date.now()) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkToken();
export default authStore;
