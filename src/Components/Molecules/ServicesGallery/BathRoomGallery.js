import React from "react"
import { connect } from "react-redux"
import ImageGallery from "react-image-gallery"
import 'react-image-gallery/styles/css/image-gallery.css'
import { StyledGalleryContainer, StyledGalleryWrapper } from "./ServicesGallery.styles"
const BathRoomGallery = ({ langReducer }) => {
  const images = [
    {
      original: 'https://i.ibb.co/zxyVKm3/PHOTO-2020-05-09-22-17-42.jpg',
      thumbnail: 'https://i.ibb.co/zxyVKm3/PHOTO-2020-05-09-22-17-42.jpg',
    },
    {
      original: 'https://i.ibb.co/L9TXZW3/PHOTO-2020-05-09-22-04-10.jpg',
      thumbnail: 'https://i.ibb.co/L9TXZW3/PHOTO-2020-05-09-22-04-10.jpg',
    },
    {
      original: 'https://i.ibb.co/5M8fYy2/PHOTO-2020-05-09-22-17-41.jpg',
      thumbnail: 'https://i.ibb.co/5M8fYy2/PHOTO-2020-05-09-22-17-41.jpg',
    },
    {
      original: 'https://i.ibb.co/GQS4R78/PHOTO-2020-05-09-22-17-41-2.jpg',
      thumbnail: 'https://i.ibb.co/GQS4R78/PHOTO-2020-05-09-22-17-41-2.jpg',
    }
  ];
  return (
    <>
      <StyledGalleryContainer>
        <StyledGalleryWrapper>
          <ImageGallery items={images}/>
        </StyledGalleryWrapper>
      </StyledGalleryContainer>
    </>
  )
}

const mapStateToProps = ({ langReducer }) => {
  return { langReducer }
}

export default connect(mapStateToProps)(BathRoomGallery)