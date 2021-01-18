import React from 'react'
import { GoogleMap, useLoadScript, Markers } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import { StandaloneSearchBox } from '@react-google-maps/api';
import App from './App';
import mapStyles from "./mapStyles.js";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const containerStyle = {
  width: '1960px',
  height: '1080px'
};
const center = {
  lat: 37.2884,
  lng: -118.8233,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries = ["places"]

export default function MyComponent() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyDvhDxlY-Z3XfoLZezjG5keQdlxqSlE-nU",
    libraries,
 })

 if (loadError) return "Error loading maps";
 if (!isLoaded) return "Loading Maps";

 return (
    <div>
      <Search />
        <GoogleMap 
            
            mapContainerStyle={containerStyle} 
            zoom={6.6}
            center={center}
            options={options}
            
         >
         </GoogleMap>
    </div>
 );
}

function Search({}) {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 37.2884, lng: () => -118.8233},
      radius: 200 * 10000,
    },
  });

  return(
    <div className="search">
      <Combobox
      >
      <ComboboxInput
        value={value} 
        onChange={(e) => {
          setValue(e.target.value); 
        }}
        disabled={!ready}
        placeholder="Enter your zip Code"
      />
      <ComboboxPopover>
        {status === "OK" && 
          data.map(({id, description}) => 
            <ComboboxOption key={id} value={description} />
        )} 
      </ComboboxPopover>
      </Combobox>
    </div>
  );
}


