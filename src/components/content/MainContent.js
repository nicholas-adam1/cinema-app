import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from './slide-show/Slideshow';
import Paginate from './paginate/Paginate';
import Grid from './grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg',
      rating: 7.5
    },
    {
      url: 'https://wallpaperaccess.com/full/51363.jpg',
      rating: 8.5
    },
    {
      url: 'https://static-cse.canva.com/blob/562138/RightBackground4.jpg',
      rating: 7.8
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate paginate={paginate} currentPage={currentPage} totalPages={10} />
        </div>
      </div>
      <Grid images={images}/>
    </div>
  );
};

export default MainContent;
