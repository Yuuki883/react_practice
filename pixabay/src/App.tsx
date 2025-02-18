import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import logo from './logo.png';

interface ImageType {
  id: number;
  pageURL: string;
  webformatURL: string;
  tags: string;
}
const APP = () => {
  const [images, setImages] = useState<ImageType[]>(() => []);
  const ApiKey: string = process.env.REACT_APP_PIXABAY_APIKEY || '';
  const onSearchSubmit = async (term: string) => {
    if (!ApiKey) {
      alert('APIキーが設定されていません');
      return;
    }
    try {
      const params = {
        key: ApiKey,
        q: term,
      };
      const response = await axios.get('https://pixabay.com/api/', {
        params,
      });
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert('お探しの画像はありません');
      }
    } catch {
      window.alert('写真の取得に失敗しました。');
    }
  };
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <img src={logo} alt="pixabay-logo" className="pixabay-logo" />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default APP;
