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
  width: '900px',
  height: '900px'
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

 const [markers, setMarkers] = React.useState([]);

 const mapRef = React.useRef();
 const onMapLoad = React.useCallback((map) => {
   mapRef.current = map;
 }, []);

const panOver = React.useCallback(({lat, lng}) => {
  mapRef.current.pan({lat, lng});
  mapRef.current.setZoom(12);
}, []);

 if (loadError) return "Error loading maps";
 if (!isLoaded) return "Loading Maps";

 return (
    <div>
      <Search panOver={panOver}/>
        <GoogleMap 
            mapContainerStyle={containerStyle} 
            zoom={6.6}
            center={center}
            options={options}
            onLoad={onMapLoad}
         >
         </GoogleMap>
    </div>
 );
}

function Search({panOver}) {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 37.2884, lng: () => -118.8233},
      radius: 200 * 10000,
    },
  });

  return(
    <div className="search">
      <Combobox
        onSelect={async (address) => {
            try {
              const results = await getGeocode({address});
              const { lat, lng } = await getLatLng(results[0]);
              panOver({lat, lng});
              console.log(results[0]);
            } catch(error){
              console.log("error!");
            }
        console.log(address);
      }}
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


