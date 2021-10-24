import { useState } from 'react';
import './GalleryItem.css'
function GalleryItem({ images, updateLike }) {

    const [isClicked, setIsClicked] = useState(false);


    const togglePhoto = () => {
        console.log('clicked')
        setIsClicked(!isClicked);
    };

    return (
        <>
            <div>
                <div className="images">


                    <img className={isClicked ? "imageClass toggle" : "imageClass"}
                        src={images.path}
                        alt={images.description}
                        onClick={togglePhoto} />
                    {isClicked && (<div className="description">{images.description}</div>)}
                </div>

                <div>
                    <button onClick={() => updateLike(images)}>Like</button>
                    {images.likes ? <p><span>{images.likes}</span> people love this</p> : <p> No one likes this</p>}
                </div>
            </div>
        </>
    )

};

export default GalleryItem;