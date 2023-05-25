abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia():void
    getRealTime():number{
        //some complex calculation 
        return 10
    }

}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
        
        ){
            super(cameraMode,filter)
        }
        getSepia(): void {
            
        }
    }
    const somnath=new Instagram('test','test',10);