const { create, Client } = require('@wppconnect-team/wppconnect');

async function start(client) {
    client.onMessage(async (message) => {
        console.log('mensagem recebida: ',message.body)

        await client.sendText(messa.from, 'Olá! Está é uma resposta automática')
    })
}

create().then((client) => start(client))