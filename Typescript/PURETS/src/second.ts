interface TakePhoto{
    cameraMode:string;
    filter:string;
    burst:number
}

class SubUser implements TakePhoto{
    cameraMode: string='';
    filter: string='';
    burst: number=0;

}
interface Story{
    createStory():void
}

class Instagram implements TakePhoto,Story{
     cameraMode: string="scl,";
     filter: string='';
     burst: number=45;

    createStory(): void {
        console.log("hrllo")
    }
}