export const BREED = 'BREED';
export const SHOW_BIRD = 'SHOW_BIRD';

export function fetchBreed(breed,callback){
    callback();
    console.log('actions', breed);
    return{
        type: BREED,
        payload: breed
    }
}

export function showBird(birdData){
    return{
        type: SHOW_BIRD,
        payload: birdData
    }
}