import Navbar from './components/navbar/Navbar';
import ImageItem from './components/imageItem/ImageItem';
import { useEffect, useState } from 'react';
import ImageSearch from './components/imageSearch/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=20264754-e10e72d67787917de5a2999eb&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term])

  return (
    <div className="mb-10">
      <Navbar></Navbar>
      <ImageSearch inputText={(searchText) => setTerm(searchText)}/>
      {
        !isLoading && images.length === 0 && <h1 className="text-5xl mx-auto text-center mt-32">No Images Found</h1> 
      }
      <div className="container mx-auto">
        {
          isLoading? <h1 className="text-6xl mx-auto text-center mt-32">Loading...</h1> : 
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                images.map(image =>  <ImageItem key={image.id} image={image}></ImageItem>)
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
