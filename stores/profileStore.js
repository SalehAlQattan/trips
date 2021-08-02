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

    fecthProfiles = async () => {
        try {
            const response = await instance.get(`/profiles`);
            this.profiles = response.data;
            this.loading = false;
        } catch (error) {
            console.error("fecthProfiles: ", error);
        }
    };
}

const profileStore = new ProfileStore(); // create instance
profileStore.fecthProfiles();
export default profileStore; // export it
