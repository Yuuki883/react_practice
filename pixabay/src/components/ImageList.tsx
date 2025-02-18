import React from 'react';
import Masonry from 'react-masonry-css';

import '../styles/ImageList.css';

interface ImageType {
  id: number;
  pageURL: string;
  webformatURL: string;
  tags: string;
}

interface ImageListProps {
  images: ImageType[];
}

// Masonry のブレークポイント設定
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="image-list-container"
      columnClassName="image-list-column"
    >
      {images.length > 0 ? (
        images.map((image) => (
          <a
            href={image.pageURL}
            key={image.id}
            target="_blank"
            rel="noopener noreferrer"
            className="ui medium image"
          >
            <img src={image.webformatURL} alt={image.tags} />
          </a>
        ))
      ) : (
        <p>画像が見つかりませんでした。</p>
      )}
    </Masonry>
  );
};

export default ImageList;
