import React from 'react';
/* Style */
import { List, Spinner } from 'native-base';
/* Store */
import tripStore from '../../stores/tripStore';
/* Component */
import TripItem from './TripItem';

import { observer } from "mobx-react";

const TripsList = () => {
    if (tripStore.loading) return <Spinner />
    const triplist = tripStore.trips.map(item => <TripItem item={item} key={item.id} />)
    return (
        <List>
            {triplist}
        </List>
    );
};

export default observer(TripsList);