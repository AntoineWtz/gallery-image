import React from 'react';
import Masonry from 'react-masonry-css';

interface ImageGalleryProps {
    images: { id: string, urls: { small: string }, alt_description: string, user: { name: string } }[];
    onImageClick: (image: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {images.map((image) => (
                <div key={image.id} className="relative p-2" onClick={() => onImageClick(image.urls.small)}>
                    <div className="rounded overflow-hidden shadow-lg relative">
                        <img src={image.urls.small} alt={image.alt_description} className="w-full h-auto block" />
                        <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                            <p className="truncate">{image.user.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Masonry>
    );
};

export default ImageGallery;
