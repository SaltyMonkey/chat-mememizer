const Command = require('command')
module.exports = function ChatMemes(dispatch) {
    const command = Command(dispatch)
    let enabled = true
    let memeChats = [0,4,3,27,213]
    command.add('rc', (option) => {
		switch (option) {
            case 'switch': 
                enabled = !enabled
                break
		}
    });
    
    dispatch.hook('S_CHAT', 2, event => {
        if(enabled && memeChats.includes(event.channel)) {
          
            let content = /<FONT>(.*?)<\/FONT>/g.exec(event.message) 
            if(content != null) {
                event.message = event.message.replace(content[1], content[1].split('').reverse().join(''))
                return true
            }
           
        }
	})

}