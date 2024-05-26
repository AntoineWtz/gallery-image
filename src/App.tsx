import React, { useState, useEffect } from 'react';
import { unsplashAPI } from './api';
import ImageGallery from './components/ImageGallery';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import Modal from 'react-modal';

const App: React.FC = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await unsplashAPI.get('/search/photos', {
          params: {
            query,
            page,
            per_page: 12,
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

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold m-4 text-center">Image Gallery</h1>
      <p className="text-center text-gray-600">Search for images with Unsplash API</p>
      <SearchBar onSearch={setQuery} />
      <ImageGallery images={images} onImageClick={openModal} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedImage && (
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full object-contain" />
        )}
        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
      </Modal>
    </div>
  );
};

Modal.setAppElement('#root');

export default App;
