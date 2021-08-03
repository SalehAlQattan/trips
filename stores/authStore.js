//library imports
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
//components
import instance from "./instance";
import profileStore from "./profileStore";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser, navigation) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.setUser(res.data.token);
      navigation.replace("Explore");
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const response = await instance.post("/signin", userData);
      this.setUser(response.data.token, navigation);
    } catch (error) {
      console.error("userSignin:", error);
    }
  };

  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  setUser = async (token, navigation) => {
    await AsyncStorage.setItem("userToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    profileStore.fetchProfile(); //will check later
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
