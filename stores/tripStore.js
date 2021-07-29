import { makeAutoObservable } from 'mobx';
import axios from "axios"

class TripStore {
    trips = [];
    loading = true;
    constructor() {
        makeAutoObservable(this)
    }
    fecthTrips = async () => {
        try {
            const response = await axios.get("http://localhost:8000/trips");
            this.trips = response.data;
            this.loading = false
        } catch (error) {
            console.error("fecthTrips: ", error);
        }
    };
    getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}
const tripStore = new TripStore() // create instance
tripStore.fecthTrips();
export default tripStore; // export it 