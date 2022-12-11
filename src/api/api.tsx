import { createClient, Photo, Photos } from 'pexels';
import { categories, Category } from '../constants/categories';
import { Orientation } from '../constants/filters';

const client = createClient('563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf');
export const perPage:number = 30;

export async function fetchMainPic(){

    const {name:query} = categories[Math.floor(Math.random() * 40)];
    const orientation:string = 'landscape';
    const data = await client.photos.search({ per_page: perPage, orientation, query});
    let randPic = Math.floor(Math.random() * perPage);
    const {id,src,photographer,photographer_url,alt,avg_color,width,height} = (data as Photos).photos[randPic];
    const mainPicture = {id,photographer,photographer_url,src,alt,avg_color,width,height};

    return mainPicture;
}

export async function fetchPics(currentPage:number = 0){

    const data = await client.photos.curated({ per_page: perPage+1, page: currentPage+1 });
    const dataPhotos = (data as Photos).photos.slice(1,perPage+1);
    const photos = dataPhotos.map( photo =>{
        const {id,src,photographer,photographer_url,alt,avg_color,width,height} = photo;
        return {id,photographer,photographer_url,src,alt,avg_color,width,height};
    });

    return photos;
}