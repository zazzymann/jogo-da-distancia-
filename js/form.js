class Form{
    constructor(){
        this.input = createInput('nickname');
        this.button = createButton('play');
        this.msg = createElement('h4');
    }
    hide(){
        this.msg.hide();
        this.button.hide();
        this.input.hide();        
    }
    display(playerCount){
        var title = createElement('h2');
        title.html("PUDIM MULTIPLAYER");
        title.position(130,0);
           this.input.position(130,160);
           this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           var name = this.input.value();
           playerCount+=1;
           player.update(name);
           player.updateCount(playerCount);
           this.msg.html("bem vindo ao mundo "+ name);
           this.msg.position(130,160);
        })
        
    }
}