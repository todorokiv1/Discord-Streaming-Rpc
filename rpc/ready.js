///////////////////////////////////

// Youtube:
//https://www.youtube.com/channel/UC4zkPH1ticImcO4-fjM2pZA

///////////////////////////////////

const rpc = require("discordrpcgenerator");




let NAME = "zzzzzz"
let DETAILS = "zzzzzz"
let STATE = "Szzzzzzze"
let URL = "https://m.twitch.tv/xtasiaego/home"
let APPID = "1043168841326403594"
let LARGEIMG = "https://media.discordapp.net/attachments/1108081101328629823/1236764044174561381/image0.gif?ex=663931c6&is=6637e046&hm=7c8b64867caebf7f68473a2cf0134523716bef2f8207fc6aff770b1ff1bf5ff6&"
let LARGETEXT = "Large Text"
let SMALLIMG = "https://media.discordapp.net/attachments/1108081101328629823/1236764044174561381/image0.gif?ex=663931c6&is=6637e046&hm=7c8b64867caebf7f68473a2cf0134523716bef2f8207fc6aff770b1ff1bf5ff6&"
let SMALLTEXT = "HELP"



module.exports = async (client) => {
  const small = await rpc.getRpcImage
  (APPID, SMALLIMG);//1°setApplicationId, 2°Name(Key)smallimage
  
  
rpc.getRpcImage
(APPID, LARGEIMG)//1°setApplicationId, 2°Name(Key)largename
.then(large => {
  
  
     let presence = new rpc.Rpc()
               
         .setName(NAME)
         .setDetails(DETAILS)
         .setState(STATE)
        
        
         .setUrl(URL)
         .setType("STREAMING")
         .setApplicationId(APPID)
        
         .setAssetsLargeImage(large.id)
         .setAssetsLargeText(LARGETEXT)
        
         .setAssetsSmallImage(small.id)
         .setAssetsSmallText(SMALLTEXT)
        

          
           client.user.setStatus("dnd");
      
     console.log(presence.toDiscord())
        
      
      client.user.setPresence(presence.toDiscord()).catch(console.error);
      
    })
      
console.log("Rpc ready")

}
