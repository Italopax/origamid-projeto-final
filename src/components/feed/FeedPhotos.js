import React from "react";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import Loading from "../helper/Loading";

const FeedPhotos = ({setModalPhoto, user, page, setInfinite})=>{

  const {data, loading, error, request} = useFetch();

  React.useEffect(()=>{
    async function fetchPhotos(){
      const total = 3;
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request(url, options);
      if(response && response.ok && json.length < total){
        setInfinite(false)
      }
      console.log('req', json)
    }
    fetchPhotos();
  }, [request, user, page, setInfinite])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
    return(
        <ul className={`${styles.feed} animeLeft`}>
          {data.map(photo => <FeedPhotosItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto} /> )}
        </ul>
      )
  else return null;
}

export default FeedPhotos;