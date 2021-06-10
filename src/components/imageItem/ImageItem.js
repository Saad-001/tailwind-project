import React from 'react';

const ImageItem = ({image}) => {
    const tags = image.tags.split(",")
    
    return (
        <div className="max-w-sm mt-4 rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL}className="w-full" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-green-500 text-xl mb-2">
              Photo by {image.user}
          </div>
          <ul>
            <li>
                <strong>Views: {image.views}</strong>
            </li>
            <li>
                <strong>Downloads: {image.downloads}</strong>
            </li>
            <li>
                <strong>Likes: {image.likes}</strong>
            </li>
        </ul>
        </div>
        <div className="px-6 py-4">
            {
                tags.map((tag, index)=> <span key={index} className="font-semibold px-3 py-1 bg-gray-200 inline-block text-sm text-gray-700 mr-1 rounded-full">#{tag}</span>)
            }
        </div>
      </div>
    );
};

export default ImageItem;