//library imports
import { makeAutoObservable } from "mobx";
//components
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fecthTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fecthTrips: ", error);
    }
  };

  deleteTrip = async (itemId) => {
    try {
      await instance.delete(`/trips/${itemId}`);
      const updateTrip = this.trips = this.trips.filter((item) => item.id !== itemId)
      this.trips = updateTrip;
    } catch (error) {
      console.error(error)
    }

  }

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore(); // create instance
tripStore.fecthTrips();
export default tripStore; // export it
