
module.exports = function ChatMemes(mod) {
    let enabled = true;
    let memeChats = [0,4,3,27,213,214];
    
    mod.command.add('memes', {
        switch(){
            enabled = !enabled;
            mod.command.message(`Enabled: ${enabled}`);
        }
    });
    
    mod.hook('S_CHAT', mod.majorPatchVersion >= 108 ? 4 : 3, event => {
        if(enabled && memeChats.includes(event.channel)) {
          
            let content = /<FONT>(.*?)<\/FONT>/g.exec(event.message);
            if(content != null) {
                event.message = event.message.replace(content[1], content[1].split('').reverse().join(''));
                return true;
            }
           
        }
	});
};