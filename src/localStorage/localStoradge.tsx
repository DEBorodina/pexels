export const getLiked = ():Array<number> => {
    if (localStorage.getItem('liked') === null){
        localStorage.setItem('liked',JSON.stringify([]));
        return [];
    }else{
        return JSON.parse(localStorage.getItem('liked')!);
    }
}

export const addLiked = (id:number):void => {
    if (localStorage.getItem('liked') === null){
        localStorage.setItem('liked',JSON.stringify([id]));
    }else{
        let liked = JSON.parse(localStorage.getItem('liked')!);
        localStorage.setItem('liked',JSON.stringify([...liked,id]));
    }
}

export const removeLiked = (id:number):void => {
    if (localStorage.getItem('liked') === null){
        localStorage.setItem('liked',JSON.stringify([]));
    }else{
        let liked = JSON.parse(localStorage.getItem('liked')!);
        const index = liked.indexOf(id);
        if (index !== -1) liked.splice(index, 1);

        localStorage.setItem('liked',JSON.stringify(liked));
    }
}