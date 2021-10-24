import GalleryItem from '../GalleryItem/GalleryItem';//import the image, key, and like from GalleryItem
import './GalleryList.css'
function GalleryList({ gallery, updateLike }) {
    //gallery/updateLikes are props that are coming in from App.jsx props only move from root component to children
    console.log('Props', gallery, updateLike)

    return (
        <>
            <div className="listDiv">
                {
                    gallery.map(images => {
                        return (
                        < GalleryItem
                        images = { images }
                        key = { images.id }
                        updateLike = { updateLike }
                        />
                        )}
                )}
                        
            </div>

        </>
    );
};


export default GalleryList;


