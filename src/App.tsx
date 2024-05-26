import React, { useState, useEffect } from 'react';
import { unsplashAPI } from './api';
import ImageGallery from './components/ImageGallery';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await unsplashAPI.get('/search/photos', {
          params: {
            query,
            page,
            per_page: 10,
          },
        });
        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Image Gallery</h1>
      <SearchBar onSearch={setQuery} />
      <ImageGallery images={images} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default App;
