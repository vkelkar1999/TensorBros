import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { render } from '@testing-library/react';


const mapStyles = {
  width: '100%',
  height: '100%'
};


const center = {
  lat: 37.2884,
  lng: -118.8233,
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: null
      })
    }
  };
  
  render() {
    return (
      <Map
        google={this.props.google} zoom={6.67}
        style={mapStyles}
        initialCenter={{lat: 37.2884,lng: -118.8233}}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDvhDxlY-Z3XfoLZezjG5keQdlxqSlE-nU'
})(MapContainer);
