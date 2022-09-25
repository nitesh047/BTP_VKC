import React from 'react'
import { Text } from 'react-native-elements'

const SingleData = (props) => {


    const CityName = props.route.params.Data.Question1;
    // const index = props.route.params.Data;
    return (
        <Text style={{ fontSize: 20 }}> Showing Data for {CityName}</Text>
    )
}

export default SingleData