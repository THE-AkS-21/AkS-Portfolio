import React, { useState } from 'react';

interface ProjectGalleryProps {
    images: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="card p-4">
            <div className="flex flex-col md:flex-row gap-4">

                {/* Main Image Container */}
                <div className="w-full md:w-3/4">
                    <div className="relative w-full bg-black/10 rounded-lg" style={{ paddingBottom: '56.25%' }}>
                        <img
                            src={selectedImage}
                            alt="Project screenshot"
                            className="absolute top-0 left-0 w-full h-full object-contain p-2"
                        />
                    </div>
                </div>

                {/* Thumbnails Container */}
                <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-3 overflow-y-auto" style={{ maxHeight: '500px' }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            // Replaced h-16 with aspect-video for correct aspect ratio
                            className={`flex-shrink-0 w-20 md:w-full aspect-video rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                                selectedImage === image ? 'border-blue-500 scale-90' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};