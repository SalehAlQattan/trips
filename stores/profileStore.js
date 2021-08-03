//library imports
import { makeAutoObservable } from "mobx";
//components
import instance from "./instance";
class ProfileStore {
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfile = async () => {
    try {
      const response = await instance.get(`/profiles`);
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchProfile: ", error);
    }
  };


    updateItem = async (updateItem, item) => {
        try {
            const formData = new FormData();
            for (const key in updateItem) formData.append(key, updateItem[key])
            const res = await instance.put(`/profiles/${item}`, formData)
            const profile = this.profiles.find((profile) => profile.id === item);
            for (const key in profile) profile[key] = res.data[key]
        } catch (error) {
            console.error(error)
        }
    };
}

const profileStore = new ProfileStore(); // create instance
profileStore.fetchProfile();
export default profileStore; // export it
