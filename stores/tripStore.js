//library imports
import { makeAutoObservable } from 'mobx';
//components
import instance from './instance';

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fecthTrips = async () => {
    try {
      const response = await instance.get('/trips');
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error('fecthTrips: ', error);
    }
  };

  createTrips = async (newTrip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const response = await instance.post('/trips', formData);
      this.trips.push(response.data);
      navigation.replace('Explore');
    } catch (error) {
      console.error('createTrips:', error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      const reposne = await instance.put(`/trips/${updatedTrip.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === reposne.data.id);
      for (const key in trip) trip[key] = reposne.data[key];
    } catch (error) {
      console.error(error);
    }
  };

  deleteTrip = async (itemId) => {
    try {
      await instance.delete(`/trips/${itemId}`);
      const updateTrip = (this.trips = this.trips.filter(
        (item) => item.id !== itemId
      ));
      this.trips = updateTrip;
    } catch (error) {
      console.error(error);
    }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore(); // create instance
tripStore.fecthTrips();
export default tripStore; // export it
