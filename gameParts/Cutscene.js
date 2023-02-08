class Cutscene{
    constructor(){
        this.Background=loadImage("/assets/Bank.png");
        this.PoliceImg=loadImage("/assets/Policial.png");
        this.ThiefImg=loadImage("/assets/Fugitivo.png");
       
    
    }
    showCutscene(){
        image(this.Background,0,0,600,400);
        text("História",300,200);

    }
}