class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on(
            "value",function(data){
                gameState = data.val()
                 
            }
        )
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
    async start(){
        if(gameState === 0){
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once('value');
            if (playerCountRef.exists()) {
                playerCount= playerCountRef.val();
                player.getCount();     
            } else{
                playerCount = 0
            }
            form = new Form();
            form.display(playerCount);
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("game start",120,100);
        Player.getPlayerInfo();
        if (allPlayers !== undefined){
            var displayPos = 200;
            for (var plr in allPlayers){
                if (plr === "player"+player.index){
                    fill('brown')
                } else{
                  fill ('red')  
                }
                displayPos +=20
                textSize(30);
                text(allPlayers[plr].name+' : '+allPlayers[plr].distance,100,displayPos);
                
            }

        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
    
            player.update();
        }

    }

}