import React, { Component } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class Routess extends Component {
    render() {
        const GetDog = props => {
            let { name } = useParams();
            let CurrentDog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
            return <DogDetails dog={CurrentDog} {...props} />
        }
        return (
            <Routes>
                <Route end path='/dogs' element={<DogList dogs={this.props.dogs} />} />
                <Route end path='/dogs/:name' element={<GetDog />} />
                <Route path="*" element={<Navigate to="/dogs" replace />}
                />
            </Routes>
        )
    }
}

export default Routess;