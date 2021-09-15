const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const bennymsg = require('./bennymsg')
const color = require('./lib/color')
const options = require('./options')
// frenzy.xyz
const start = async (client = new Client()) => {
        console.log(color('[SERVER] FrenzY X BOT Activated', 'yellow'))
		console.log(color('[AUTHOR,DEVELOPER] FrenzY8', 'orange'))
		console.log(color('[PLEASE] SUBSCRIBE TO FrenzY8', 'green'))
		 		 console.log(color('[CODING] FrenzY8', 'blue'))
				 console.log(color('[LOADING] 10%', 'blue'))
				 console.log(color('[LOADING] 30%', 'blue'))
				 console.log(color('[LOADING] 40%', 'blue'))
				 console.log(color('[LOADING] 50%', 'blue'))
				 console.log(color('[LOADING] 60%', 'blue'))
				 console.log(color('[LOADING] 70%', 'blue'))
				 console.log(color('[LOADING] 80%', 'blue'))
				 console.log(color('[LOADING] 90%', 'blue'))
				 console.log(color('[LOADING] 100%', 'blue'))
				 console.log(color('[LOADING] 200%', 'blue'))
				 console.log(color('[LOADING] 300%', 'blue'))
				 console.log(color('[LOADING] 400%', 'blue'))
				 console.log(color('[LOADING] 500%', 'blue'))
				 console.log(color('[LOADING] 700%', 'blue'))
				 console.log(color('[LOADING] 800%', 'blue'))
				 console.log(color('[LOADING] 900%', 'blue'))
				 console.log(color('[LOADING] 1000%', 'blue'))
				 console.log(color('[SUCCES] PROCESSED SUCCES', 'red'))
				 console.log(color('[UP] BOT STATUS ONLINE !!', 'yellow'))
        // Force it to keep the current session
        client.onStateChanged((state) => {
            console.log(color('[Subscribe To FrenzY8!!]', 'red'), state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
        })
        // listening on message
        client.onMessage((async (message) => {
            client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 500) {
                    client.cutMsgCache()
                }
            })
            bennymsg(client, message)
        }))

        client.onGlobalParicipantsChanged((async (heuh) => {
            await welcome(client, heuh)
            //left(client, heuh)
            }))
		
        client.onAddedToGroup(((chat) => {
            let totalMem = chat.groupMetadata.participants.length
            if (totalMem < 10) { 
            	client.sendText(chat.id, `Sebelumnya Saya Ingin Berterima Kasih Kpda Yang Invite BOT ini\nTetapi Karna Jumlah Member GRUP *${totalMem}* BOT Akan Keluar Otomatis! Max Member 100\n Jika Ingin BOT Masuk Ke Grup Anda Silakhan Private Chat Ke BOT!, `).then(() => client.leaveGroup(chat.id)).then(() => client.deleteChat(chat.id))
            } else {
                client.sendText(chat.groupMetadata.id, `Halo warga grup *${chat.contact.name}* terimakasih sudah menginvite bot ini, untuk melihat menu silahkan kirim *#help*`)
            }
        }))

        /*client.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) client.sendSeen(to)
        }))*/

        // listening on Incoming Call
        client.onIncomingCall(( async (call) => {
            await client.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!')
            .then(() => client.contactBlock(call.peerJid))
        }))
    }

create(options(true, start))
    .then(client => start(client))
    .catch((error) => console.log(error))
