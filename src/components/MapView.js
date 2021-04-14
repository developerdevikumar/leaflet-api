import React, { useEffect, useRef  } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';


function MapView() {
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    //const{ addmarkers: map}

    map.locate({
     setView: true,
    });

    map.on('locationfound', handleOnLocationFound);

    map.on('locationerror', handleOnLocationError);

    return () => {
      map.off('locationfound', handleOnLocationFound);
      map.off('locationerror', handleOnLocationError);
    }
  }, []);

  /**
   * handleOnLocationFound
   * @param {object} event Leaflet LocationEvent object
   */

  function handleOnLocationFound() {

  }


    /**
     * handleOnLocationError
   * @param {object} error Leaflet ErrorEvent object
   */

  function handleOnLocationError(error) {
    alert(`Unable to determine location: ${error.message}`);
  }

    return (
      <Map ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
 <script>
              function myFunction() {
                  alert("are you sure")
              }
              </script>
        <Markers venues={data.venues} onclick={onclick}/>
      </Map>
    );
  }


export default MapView;
