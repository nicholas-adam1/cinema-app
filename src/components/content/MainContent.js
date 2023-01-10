import React from 'react';
import './MainContent.scss';
import Slideshow from './slide-show/Slideshow';

const MainContent = () => {
  const images = [
    {
      url: 'https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg'
    },
    {
      url: 'https://wallpaperaccess.com/full/51363.jpg'
    },
    {
      url: 'https://static-cse.canva.com/blob/562138/RightBackground4.jpg'
    }
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
