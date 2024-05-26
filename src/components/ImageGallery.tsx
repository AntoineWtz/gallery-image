import React from 'react';

interface ImageGalleryProps {
    images: { id: string, urls: { small: string }, alt_description: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
                <div key={image.id} className="rounded overflow-hidden shadow-lg">
                    <img src={image.urls.small} alt={image.alt_description} className="w-full" />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
