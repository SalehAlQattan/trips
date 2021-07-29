import React from 'react';
/* Style */
import { List, Spinner } from 'native-base';
/* Store */
import tripStore from '../../stores/tripStore';
/* Component */
import TripItem from './TripItem';

const TripsList = () => {
    if (tripStore.loading) return <Spinner />
    const triplist = tripStore.trips.map(item => <TripItem item={item} />)
    return (
        <List>
            {triplist}
        </List>
    );
};

export default TripsList;