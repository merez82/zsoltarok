class ColorProvider{
    constructor(){
        this.colors = [ "w3-blue", "w3-brown", "w3-deep-orange", "w3-blue-grey", "w3-deep-purple"];
        this.count = this.colors.length;
        this.position = 0;
    }

    getColour(){
        let currentColor = this.colors[this.position];
        this.movePosition();
        return currentColor;
    }

    movePosition(){
        if (this.position === this.count -1){
            this.position = 0;
        }
        else{
            this.position = this.position +1;
        }
    }
}

export default ColorProvider;