import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from './slide-show/Slideshow';
import Paginate from './paginate/Paginate';

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
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
