import { createClient, ErrorResponse, Photo, Photos, PhotosWithTotalResults } from 'pexels';
import { useSelector } from 'react-redux';
import { categories, Category } from '../constants/categories';
import { FilterQuery } from '../constants/filters';
import { Filters } from '../redux/pictureReducer';

const client = createClient('563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf');
export const perPage:number = 30;

export async function fetchMainPic(){
    const {name:query} = categories[Math.floor(Math.random() * 40)];
    const orientation:string = 'landscape';

    const data:Photos = await client.photos.search({ per_page: perPage, orientation, query}) as Photos;
    let randPic:number = Math.floor(Math.random() * perPage);
    return (data as Photos).photos[randPic];
}

export async function fetchPics(currentPage:number = 0, category?:string, query?:FilterQuery){

    let data:Photos|ErrorResponse;

    if(!category){
        data = await client.photos.curated({ per_page: perPage, page: currentPage+1});
    } else {
        console.log({ per_page: perPage, page: currentPage+1,query:category+1,...query})
        data = await client.photos.search({ per_page: perPage, page: currentPage+1,query:category+1,...query});
    }

    const {total_results} = (data as PhotosWithTotalResults);
    const dataPhotos:Array<Photo> = (data as Photos).photos;
    return {pictures:dataPhotos,total:total_results};

}

