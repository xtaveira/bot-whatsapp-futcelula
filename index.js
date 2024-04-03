const { create, Client } = require('@wppconnect-team/wppconnect');

async function start(client) {

    async function showList(client, message, list) {
      await client.sendText(message.from,`Lista FUTCÉLULA:\n${list}\nPara fazer parte da lista digite "vou (nome)"`)
}


let listMessage = ''
let listCounter = 0


    client.onMessage(async (message) => {
        console.log(`mensagem from: ${message.from}`)
        console.log(`mensagem recebida: ${message.body}`)
        console.log(`mensagem recebida de grupo: ${message.isGroupMsg}`)

        if (message.isGroupMsg) {
            if (message.body == '/list' && listMessage == '') {
                await client.reply(message.from, 'Lista criada!')
                await showList(client,message, listMessage)
            } if (message.body.includes('vou ') && message.body.length > 5) {
                const name = message.body.split(' ')
                listCounter ++
                listMessage += `${listCounter}- ${name[1]}\n`
                showList(client,message,listMessage)
            }
        }

    })

}

create({session: 'base'}).then((client) => start(client))