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
}

const profileStore = new ProfileStore(); // create instance
profileStore.fetchProfile();
export default profileStore; // export it
