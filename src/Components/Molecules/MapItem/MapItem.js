import React from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapItemContainer, MapItemWrapper } from "./MapItem.styles"
import pinIcon from '../../../Assets/Icons/pin.png'

const MapItem = () => {

  const markers = [
    {
      lat: 48.2267984,
      long: 16.5037139
    },
    {
      lat: 49.9769293,
      long: 20.6438859
    }
  ];

  const getIcon = () => {
    let icon = pinIcon;

    return L.icon({
      iconUrl: icon,
      iconSize: [30, 30],
    })
  }

  return (
    <>
      <MapItemContainer>
        <MapItemWrapper>
          <MapContainer center={[markers[0].lat, markers[0].long]} zoom={6} style={{ width: 300, height: 400, zIndex: 1 }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
            {markers.map((item, index) => {
              return(
                <Marker position={[item.lat, item.long]} icon={getIcon()}/>
              )
            })}
          </MapContainer>
        </MapItemWrapper>
      </MapItemContainer>
    </>
  )
}

export default MapItem
