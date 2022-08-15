import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({user})=>{

  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(()=>{
    const wait = false;
    function infiniteScroll () {
      if(infinite){
        const scrool = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight;
        if(scrool > height * .75 && !wait){
          setPages((pages) => [...pages, pages.length + 1])
          wait = true;
          setTimeout(() => wait = false, 500)
        }
      }
    }

    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);
    
    return ()=>{
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }
  }, [infinite])

  return(
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map(page => 
        <FeedPhotos 
          user={user} 
          key={page} 
          page={page} 
          setModalPhoto={setModalPhoto} 
          setInfinite={setInfinite}
        />
      )}
    </div>
  )
}

export default Feed;