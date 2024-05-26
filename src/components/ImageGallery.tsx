import React from 'react';

interface ImageGalleryProps {
    images: { id: string, urls: { small: string }, alt_description: string, user: { name: string } }[];
    onImageClick: (image: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
                <div key={image.id} className="rounded overflow-hidden shadow-lg relative" onClick={() => onImageClick(image.urls.small)}>
                    <img src={image.urls.small} alt={image.alt_description} className="w-full" />
                    <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                        <p>{image.user.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
