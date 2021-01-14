const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const get = require('got')
const fetch = require('node-fetch')
const color = require('./lib/color')
const errorImg = 'https://i.ibb.co/x5Ms3wc/10435152-0.png'
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const speed = require('performance-now')
const os = require('os')
const qrcode = require('qrcode')
const ms = require('parse-ms')
const Math_js = require('mathjs')
const ppbot = 'https://i.ibb.co/bPsF72Q/Benny-BOT-3-20201227-221100.jpg'
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const acak = JSON.parse(fs.readFileSync('./lib/acak.json'))
const config = JSON.parse(fs.readFileSync('./config.json'))
const ngegas = JSON.parse(fs.readFileSync('./lib/kasar.json'))
const wel = JSON.parse(fs.readFileSync('./lib/welcome.json')) 
const rate = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
const { artinama, liriklagu, stickerburn, uploadImages, quotemaker, processTime, getStickerMaker, covidworld, randomNimek, fb, sleep, jadwalTv, ss, wall } = require('./lib/functions')
const { menuowner, menusuperowner, help, snk, info, donate, readme, listChannel } = require('./lib/help')
const { stdout } = require('process')
const nsfwgrp = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')
const _registered = JSON.parse(fs.readFileSync('./ingfo/registered.json'))
const _premium = JSON.parse(fs.readFileSync('./ingfo/premium.json'))
const ban = JSON.parse(fs.readFileSync('./lib/banned.json'))                           
const ben = JSON.parse(fs.readFileSync('./settings/banned.json'))
const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
const owner = JSON.parse(fs.readFileSync('./settings/owner.json'))
const msgFilter = require('./lib/msgFilter')
const ruleArr = JSON.parse(fs.readFileSync('./settings/rule.json'))
const images = require('./utils/images')
const rugaapi = require('./utils/rugaApi')
const nekopoi = require('./lib/nekopoi')
const shortener = require('./utils/shortener')
const isUrls = require('./utils/index')
const meme = require('./utils/meme')
const translate = require('./utils/translate')
const rugapoi = require('./utils/nekopoi')
const getLocationData = require('./utils/location')
const vhtear = 'KepoAjgMauApiKeyBeliAsu'

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = bennymsg = async (benny = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, author, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')

        const msgs = (message) => {
            if (command.startsWith('#')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }
		

        const mess = {
			write: '*[WAIT]* Nama & Nick Anda Sedang Di Masukan Ke DataBase⏳',
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            error: {
                St: '[❗] Kirim gambar dengan caption *#sticker* atau tag gambar yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan admin group!',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }
        
		const prefix = '#'
		const isCmd = command.startsWith('#')
        const isCmdo = command.startsWith('!')
        const isCmdi = command.startsWith('$')
        const isCmdn = command.startsWith('.')
        const isCmdv = command.startsWith('/')
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const url = args.length !== 0 ? args[0] : ''
        const botNumber = await benny.getHostNumber()
		const superOwner = JSON.parse(fs.readFileSync('./settings/superowner.json'))
        const blockNumber = await benny.getBlockedIds() 
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await benny.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
		const pengirim = sender.id
		const cvdwrld = await fetch(`https://api.terhambar.com/negara/World`)
		const cvd = await cvdwrld.json()
		const kopit = `*➸NEGARA*: ${cvd.negara} \n*➸TOTAL*: ${cvd.total} \n*➸KASUS BARU*: ${cvd.kasus_baru} \n*➸MENINGGAL*: ${cvd.meninggal} \n*➸MENINGGAL BARU*: ${cvd.meninggal_baru} \n*➸SEMBUH*: ${cvd.sembuh} \n*➸PENANGANAN*: ${cvd.penanganan} \n*➸TERAKHIR*: ${cvd.terakhir}*`
		const isRule = ruleArr.includes(chat.id)
		const saya = '6285283200715@c.us'
		const isNgegas = ngegas.includes(chatId)
        const pilotNumber = (saya, JSON.parse(fs.readFileSync('./settings/owner.json')))
        const isPilot = owner.includes(sender.id)
		const isSuper = superOwner.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
		const isRegistered = _registered.includes(sender.id)
		const isPremium = _premium.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
		const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
		const q = args.join(' ')
		const isAfk = afk.includes(sender.id)
		const isBanned = ban.includes(sender.id)
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
		
        if (!isGroupMsg && command.startsWith('#')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
        if (isGroupMsg && command.startsWith('#')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
        
		if (message.length > 65536) benny.removeParticipant(sender.id)
		
		msgFilter.addFilter(from)
		
		benny.sendSeen(chatId)
		
		if (isCmd && isBanned) return await benny.sendTextWithMentions(from, `Maaf @${sender.id.replace('@c.us','')}, Nomor kamu telah dibanned!`, id)
		if (isCmdi) return await benny.reply(from, `Maaf ${pushname}, Untuk menggunakan perintah bot menggunakan ${prefix}`, id)
		if (isCmdn) return await benny.reply(from, `Maaf ${pushname}, Untuk menggunakan perintah bot menggunakan ${prefix}`, id)
		if (isCmdv) return await benny.reply(from, `Maaf ${pushname}, Untuk menggunakan perintah bot menggunakan ${prefix}`, id)
		if (isCmdo) return await benny.reply(from, `Maaf ${pushname}, Untuk menggunakan perintah bot menggunakan ${prefix}`, id)
		
	    switch(command) {
		//Ping
	case '#ping':
                    const loadedMsg = await benny.getAmountOfLoadedMessages()
                    const chatIds = await benny.getAllChatIds()
                    const groups = await benny.getAllGroups()
                    const me = await benny.getMe()
                    const battery = await benny.getBatteryLevel()
                    const isCharging = await benny.getIsPlugged()
                    await benny.reply(from,
                        `Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
                            
*CPU :* ${os.cpus()[0].model}

*Status FrenzY X BOT :*
- ${loadedMsg} Loaded Messages
- ${groups.length} Group Chats
- ${chatIds.length - groups.length} Personal Chats
- ${chatIds.length} Total Chats

*Status Device  :*
${(`*Battery : ${battery}% ${isCharging ? 'is Charging' : 'is not Charging'}
${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}`.slice(1, -1))}

*Speed :* ${processTime(t, moment())} _second_ 
*Provider :* INDIHOME ASU`, id)
                    break
					
	    //Sticker Fiture
	case '#sticker':
    case '#stiker':
    case '#stckr':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Nomor Kamu Belum Terdaftar Disini! \n\nKamu Bisa Register Dengan Cara:\n*!daftar* <nama> Terdaftar Disini! \n\nKamu Bisa Register Dengan Cara:\n*!daftar* <nama>`, id)
            if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			benny.reply(from, mess.wait, id)
			if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await benny.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await benny.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await benny.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    benny.reply(from, mess.error.Iv, id)
                }
            } else {
                    benny.reply(from, mess.error.St, id)
            }
            break
	case '#stickerpetir':
	case '#stickpetir':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			benny.reply(from, mess.wait, id)
			const texts = body.slice(11)
			const petirnyi = `https://docs-jojo.herokuapp.com/api/thunder?text=${texts}`
			benny.sendStickerfromUrl(from, petirnyi)
            break
	case '#stickerfire':
                    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                   if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		           benny.reply(from, mess.wait, id)
				   if (isMedia && type === 'image' || isQuotedImage) {
                        const dataMediaa = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(dataMediaa, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await stickerburn(getUrli)
                        const Sfire = imgnya.result.imgUrl
                        await benny.sendStickerfromUrl(from, Sfire)
                    } else {
                        await benny.reply(from, 'Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !stickerfire', id)
                    }
                    break
	case '#sticker3d':
	case '#stick3d':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			benny.reply(from, mess.wait, id)
			const textnyi = body.slice(8)
			const gbrnyi = `https://docs-jojo.herokuapp.com/api/text3d?text=${textnyi}`
			benny.sendStickerfromUrl(from, gbrnyi)
            break
	case '#stickerbp':
	case '#stickbp':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			benny.reply(from, mess.wait, id)
			const textnyu = body.slice(8)
			const bpnyi = `http://docs-jojo.herokuapp.com/api/blackpink?text=${textnyu}`
			benny.sendStickerfromUrl(from, bpnyi)
            break
	case '#stickerglitch':
	case '#stickglitch':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const texta = arg[1]
			const textb = arg[2]
			const glitchnyi = `http://docs-jojo.herokuapp.com/api/ttlogo?text1=${texta}&text2=${textb}`
			benny.sendStickerfromUrl(from, glitchnyi)
            break
	case '#sticktahta':
	case '#stickertahta':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const tahtalu = arg[1]
	        benny.sendStickerfromUrl(from, `https://api.vhtear.com/hartatahta?text=${tahtalu}&apikey=WadoehhHengkerAbieezz`)
			break
	case '#stickerwolf':
	case '#stickwolf':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const textc = arg[1]
			const textd = arg[2]
			const wolfnyi = `http://docs-jojo.herokuapp.com/api/wolf?text1=${textc}&text2=${textd}`
			benny.sendStickerfromUrl(from, wolfnyi)
            break
	case '#tsticker':
	if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	   const tstnya = await fetch(`http://melodicxt-api.herokuapp.com/api/img-text?text=${body.slice(10)}&apiKey=administrator`)
	   const tst = await tstnya.json()
	   benny.sendStickerfromUrl(from, tst.result.result, id)
	   break
	case '#stickerph':
	case '#stickph':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const ph3 = arg[1]
			const ph4 = arg[2]
			const phnyi = `http://docs-jojo.herokuapp.com/api/phblogo?text1=${ph3}&text2=${ph4}`
			benny.sendStickerfromUrl(from, phnyi)
            break
	case '#stickerneon':
	case '#stickneon':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const textx = arg[1]
			const textt = arg[2]
			const texth = arg[3]
			const neonnyi = `http://docs-jojo.herokuapp.com/api/neon?text1=${textx}&text2=${textt}&text3=${texth}`
			benny.sendStickerfromUrl(from, neonnyi)
            break
	case '#sticker2':
		      if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
              if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			  if (args.length == 0) return benny.reply(from, `Untuk mencari sticker dari pinterest\nketik: ${prefix}sticker2 [search]\ncontoh: ${prefix}sticker2 naruto`, id)
            const cariwallu = body.slice(8)
            const hasilwallu = await images.fdci(cariwallu)
            await benny.sendStickerfromUrl(from, hasilwallu, '', '', id)
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
	case '#stikertoimg':
	case '#stickertoimg':
	case '#stimg':
	case '#toimg':
			if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (isMedia && types === 'sticker') {
                const mediaDatas = await decryptMedia(message, uaOverride)
                benny.reply(from, mess.wait, id)
				const imageBase64a = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await benny.sendImage(from, imageBase64a, '', `*Sukses convert sticker to Image${processTime(t, moment())} _second_ *`, id)
            } else if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaDatas = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64a = `data:${quotedMsg.mimetype};base64,${mediaDatas.toString('base64')}`
                await benny.sendImage(from, imageBase64a, '', `*Sukses convert sticker to Image${processTime(t, moment())} _second_ *`, id)
            } else if (args.length === 2) {
                const urls = args[1]
                if (urls.match(isUrl)) {
                    await benny.sendImagefromUrl(from, urls, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    benny.reply(from, mess.error.Iv, id)
                }
            } else {
                    benny.reply(from, mess.error.St, id)
            }
            break
	case '#stickergif':
	case '#gifsticker':
    case '#gs':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)       
		if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10)  {
                    const mediaData = await decryptMedia(message, uaOverride)
                    benny.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=60 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await benny.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    benny.reply(from, '[❗] Kirim video dengan caption *#stickerGif* max 10 sec!', id)
                )
            }
            break
	 break
	 case '#stickerbokep':
	 case '#stickhot':
	 case '#stickbokep':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
       benny.reply(from, mess.wait, id)
	   const bokepi = ['https://i.ibb.co/8jRQ01J/IMG-20201205-223443-917.jpg','https://i.ibb.co/KKzmXzY/IMG-20201206-033352-192.jpg','https://i.ibb.co/8srYLFL/IMG-20201206-034512-690.jpg','https://i.ibb.co/B32Nq01/E0yui-GCvum-STqdm-G2-6-Os-FBJYMh2-Vd-Da4ayhip-Ub-B4-Xx-Cl-H7-Vt-Ju-j-J-s-Ri-A9kww-Q83-GFPnp-W9nl-Zva.jpg','https://i.ibb.co/9psS49T/Lvu-JQ8-Ut-AELo-AGZ0o-F9-RDQNk-W28e-QHj-CZPo-Ak-Wm2u-Rey-RAay-Ku-Ub4-f2-P-m-F6-DLdc67l-Ko-IRy-NZZIth.jpg','https://i.ibb.co/BVB8fbj/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/BTFg7yT/IEsp-UDTc6-YFw-Hro-E3-Eq-VXGgo-PV8-4-Il4-HWy-Usc-Kw-JMVW4ql-WVBOSzmxjz6-W6r-Dw4-E2-GPo7cygc-HH6-XFy7.jpg','https://i.ibb.co/bsJfgz7/H3-GSk-Spdcw-Uc-E8t-Mk-A5-ZM6y-MO2-Kk-Fdp5qxr-E0ju-Y3-N-Dx-Ln-YWp-Epx2jug-DEFg-LAloq-1g5-NYr-A2tz-O4.jpg','https://i.ibb.co/KNsD0tT/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/g6Fwp8S/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/gPFMxr6/image.png','https://i.ibb.co/0YPwyVc/image.png','https://i.ibb.co/vCWZWQP/image.png','https://i.ibb.co/c66fNtR/image.png','https://i.ibb.co/XDB3nxX/image.png','https://i.ibb.co/s9dJRr1/image.png','https://i.ibb.co/tqXh4c7/image.png','https://i.ibb.co/ZBBxgqy/image.png','https://i.ibb.co/jWx7DHR/image.png','https://i.ibb.co/SRQ590w/image.png','https://i.ibb.co/CsL5XWy/image.png','https://i.ibb.co/zsSh5t8/image.png','https://i.ibb.co/L9M2pH4/image.png','https://i.ibb.co/q53mKTp/image.png','https://i.ibb.co/12myv6w/image.png','https://i.ibb.co/yhbnjtR/image.png']
	   let bokepio = bokepi[Math.floor(Math.random() * bokepi.length)]
		   benny.sendStickerfromUrl(from, bokepio)
		   break
    case '#randomgif':
	case '#rgif':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
    benny.reply(from, mess.wait, id)
	const giffo = ['https://c.tenor.com/wgX4i8giG9wAAAAj/mochi-peachcat-cat.gif','https://c.tenor.com/UUhe2fIowxAAAAAj/love-mochi.gif','https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif','https://media.tenor.com/images/ebb65bb0ca7bdd155c198a066ecfcb92/tenor.gif','https://media.tenor.com/images/75b3c8eca95d917c650cd574b91db7f7/tenor.gif','https://media.tenor.com/images/492a250e5ac486d298ec88e71079eeb1/tenor.gif','https://media.tenor.com/images/6321fa6690d59b2f37c25ce0d271cb6c/tenor.gif','https://media.tenor.com/images/ec85a866a451e1a47008ac6a8534d1c4/tenor.gif','https://media.tenor.com/images/73b6bc522e27fcc81fcdbf7012bdd323/tenor.gif','https://media.tenor.com/images/e411846cebbe99eb56e42a4d188cf5ca/tenor.gif','https://media.tenor.com/images/b418cde4ddb9ed4a8548500048d3bafb/tenor.gif','https://media.tenor.com/images/a13ada2790e7e128cd87958c9d166073/tenor.gif','https://media.tenor.com/images/f2f20ce49f0ecc1c3315c146e737bdc9/tenor.gif','https://media.tenor.com/images/23bfa35425bcd3794bea802adb5b9bfc/tenor.gif','https://media.tenor.com/images/eafc0f0bef6d6fd135908eaba24393ac/tenor.gif','https://media.tenor.com/images/d4173fe821ee176f5077ba98d7cdf417/tenor.gif','https://media.tenor.com/images/9164f10a0dbbf7cdb6aeb46184b16365/tenor.gif','https://media.tenor.com/images/3a9d2bd1bde9ed8ea02b2222988be6da/tenor.gif','https://media.tenor.com/images/fae2bbbba0be4db589e47dac43e266f9/tenor.gif','https://media.tenor.com/images/f599d464f0041f9899f8ec41a8e280ac/tenor.gif','https://media.tenor.com/images/8d94e004d553aa9edbb38c823454e421/tenor.gif','https://media.tenor.com/images/269250f1277adbbdafff69f2595ece0c/tenor.gif','https://media.tenor.com/images/558ebbab68370c33c69517b341c3f627/tenor.gif']
	let giffok = giffo[Math.floor(Math.random() * giffo.length)]
		   benny.sendStickerfromUrl(from, giffok)
		   break
    case '#giphysticker':
	case '#gpsticker':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
    benny.reply(from, mess.wait, id)
	const giph = ['http://i.imgur.com/UGw1mKB.gif','http://i.imgur.com/pqnXV9o.gif','http://25.media.tumblr.com/3001a8872eff95532084422a9e3bbb5e/tumblr_mgt8eaMwyS1r75klfo1_250.gif']
	      let giphy = giph[Math.floor(Math.random() * giph.length)]
		   benny.sendStickerfromUrl(from, giphy)
		   break
	case '#patrickgif':
	case '#gifpatrick':
	   if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         benny.reply(from, mess.wait, id)
		 const patric = ['https://media.tenor.com/images/1f73d3b99fc0e8edc83d42b42ac54dd3/tenor.gif','https://media.tenor.com/images/4c22f6e140a8985084d91b1de596b84b/tenor.gif','https://media.tenor.com/images/aa5230a94e9417487ceae9ad432d66d3/tenor.gif','https://media.tenor.com/images/f6b093b763e7d716dd7d25cfa7af46bc/tenor.gif','https://media.tenor.com/images/5751fce6378d5aa8ae5f09167a4430d2/tenor.gif','https://media.tenor.com/images/38d85cb97f2438e31bb6b1f441a1b862/tenor.gif','https://media.tenor.com/images/1263f70a2fb28a9512b8dd0c9c16b3af/tenor.gif','https://media.tenor.com/images/18c974ee6d824dde7170f6c40bb14bc6/tenor.gif','https://media.tenor.com/images/ff7a1b585d019c58862afc5075338606/tenor.gif','https://media.tenor.com/images/a71554b96df82b06fbaa2510a906b847/tenor.gif','https://media.tenor.com/images/2a3cfb4899aca0b8b772490320948363/tenor.gif','https://media.tenor.com/images/89296e552a8f155726f37e5d883776e1/tenor.gif']
	     let patrick = patric[Math.floor(Math.random() * patric.length)]
	     benny.sendStickerfromUrl(from, patrick, 'Neh..', id)
		 break
    case '#patrickstick':
	case '#stickpatrick':
	case '#patricksticker':
	case '#stickerpatrick':
	     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         const pati = ['https://ibb.co/cbQS7Tx','https://ibb.co/HpFMhqq','https://ibb.co/DMYpBJy','https://ibb.co/4KtL6VZ','https://ibb.co/VSkKVdY','https://ibb.co/GxgsMFf','https://ibb.co/hHSC82g','https://ibb.co/jWnW0XG','https://ibb.co/Vw9FjPq','https://ibb.co/s24LJ9P','https://ibb.co/7j07dGL','https://ibb.co/n3DgpV1','https://ibb.co/1z4Hk0Y','https://ibb.co/2WNykDP','https://ibb.co/5v9sHsX']
	     benny.reply(from, mess.wait, id)
		 let patri = pati[Math.floor(Math.random() * pati.length)]
	     benny.sendStickerfromUrl(from, patri)
		 break
	case '#randomsticker':
	case '#randomstick':
	case '#randomstik':
	case '#rstick':
	case '#rstik':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           const walnimeo = ['https://camo.githubusercontent.com/9c184e56a76795eaeb8e7584424520de07a9aa4db57323f626ef9ff7730f62b9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f34644d3155373661415133646245366263332f67697068792e676966','https://camo.githubusercontent.com/0afcc6050ce6d1858e1f8136ad418fadea998a0188ae20364504ed6c9bbb6b2c/68747470733a2f2f696d61676573352e616c706861636f646572732e636f6d2f3931312f3931313631342e706e67','https://raw.githubusercontent.com/mhankbarbar/whatsapp-bot/master/media/img/Kaguya.png','https://images.alphacoders.com/605/thumb-350-605592.png','https://images5.alphacoders.com/481/thumb-350-481903.png','https://images7.alphacoders.com/611/thumb-350-611138.png','https://images4.alphacoders.com/476/thumb-350-47698.png','https://images2.alphacoders.com/727/thumb-350-72732.png','https://images5.alphacoders.com/314/thumb-350-314574.png','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
		   benny.reply(from, mess.wait, id)
		   let walnimeok = walnimeo[Math.floor(Math.random() * walnimeo.length)]
		   benny.sendStickerfromUrl(from, walnimeok)
		   break
            case '#stickerlightning':
            case '#slightning':
                if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)       
		        if (isMedia && type === 'image' || isQuotedImage) {
                    await benny.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData, `lightning.${sender.id}`)
                    sticker.stickerLight(imageLink)
                        .then(async ({ result }) => {
                            await benny.sendStickerfromUrl(from, result.imgUrl)
                                .then(async () => {
                                    console.log(`Sticker processed for a seconds`)
                                    await benny.sendText(from, `ok`)
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await benny.reply(from, `Error!\n${err}`, id)
                        })
                } else {
                    await benny.reply(from, `Format salah!`, id)
                }
            break
			case '#stickerhentai':
			case '#shentai':
			if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)       
			     benny.reply(from, mess.wait, id)
				 const hentayo = ['http://i4.xxxhentaigallery.com/photos/204/747-part.jpg','http://i1.xxxhentaigallery.com/photos/193/809__8.jpg','http://i2.xxxhentaigallery.com/photos/165/356_Kidmo.jpg','http://i4.xxxhentaigallery.com/photos/192/811___.jpg','http://i2.xxxhentaigallery.com/photos/179/075_.jpg','http://i1.xxxhentaigallery.com/photos/174/070_Zeroshiki.jpg','http://i1.xxxhentaigallery.com/photos/132/678__Captain_.jpg']
				 let hentayok = hentayo[Math.floor(Math.random() * hentayo.length)]
				 benny.sendStickerfromUrl(from, hentayok, '', 'Neh...', id)
				 break
	case '#stickernobg':
    case '#stikernobg':
	case '#sticknobg':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: '5LXrQ1MAYDnE1iib6B6NaHMv', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await benny.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break
		//Donate me :)
	case '#donasi':
    case '#donate':
           return await benny.reply(from, `Ya, Mau Donasi? \nGOPAY: 089636006352 \nPULSA: 081387289617 \n\nTerima Kasih Sudah Membantu :)`, id)
            break
	
	    //Speaking In Voice
	case '#tts':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#tts [id, en, jp, ar] [teks]*, contoh *#tts id halo semua*')
            benny.reply(from, mess.wait, id)
			const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return benny.reply(from, 'Baka?', id)
            if (dataText.length > 65536) return benny.reply(from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice(5, 7)
	    if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    benny.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    benny.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    benny.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    benny.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                benny.reply(from, 'Masukkan data bahasa : [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break
			
		//Quotes Maker
	case '#gambarquotes':
	case '#quotesgambar':
            if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.reply(from, mess.wait, id)
			const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
            await benny.sendFileFromUrl(from, aiquote.data, 'quote.jpg', 'Powered By http://inspirobot.me/ With ❤️' , id )
            break
	case '#quotemaker':
		if (isBanned) return await benny.reply(from, `Maaf ${pushname}, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            arg = body.trim().split(' ')
            if (arg.length >= 4) {
                benny.reply(from, mess.wait, id)
                const quotes = arg[1]
                const author = arg[2]
				const theme = arg[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    benny.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       benny.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                benny.reply(from, 'Usage: \n#quotemaker teks pembuat tema nya\n\nEx :\n#quotemaker |ini contoh|bicit|random', id)
            }
            break
	case '#quoteit':
	case '#qouteit':
	if (isBanned) return await benny.reply(from, `Maaf ${pushname}, Nomor kamu telah dibanned!`, id)
    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
   if (args.length === 1) return benny.reply(from, 'authornya mana??', id)
   benny.reply(from, mess.wait, id)
   arg = body.trim().split(' ')
	const tqt = body.slice(9)
	const qtny = `https://terhambar.com/aw/qts/proses.php?kata=${tqt}&author=${pushname}&tipe=random&font=./font/font4.otf&size=40`
	benny.sendFileFromUrl(from, qtny, 'quotes.jpg', 'Neh..', id)
	break
			case '#ttp':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
                try
                {
                    const string = body.toLowerCase().includes('#ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await benny.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await benny.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await benny.reply(from, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await benny.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await benny.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await benny.reply(from, gasMake.reason, id)
                            }
                        }
                       
                    }else{
                        await benny.reply(from, 'Tidak boleh kosong.', id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break
	case '#bikinteks':
	case '#bikintext':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
	        const txtnya = await fetch(`http://melodicxt-api.herokuapp.com/api/img-text?text=${body.slice(11)}&apiKey=administrator`)
			const txt = await txtnya.json()
			benny.sendFileFromUrl(from, txt.result.result, 'txt.jpg', 'Neh...', id)
			break
	case '#tahta':
	if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
	    const tahtanya = `https://api.vhtear.com/hartatahta?text=${body.slice(7)}&apikey=WadoehhHengkerAbieezz`
		benny.sendFileFromUrl(from, tahtanya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		break
	case '#textdaun':
	case '#teksdaun':
	if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
	      const daunnya = await fetch(`https://api-zeks.harispoppy.com/api/leavest?text=${body.slice(10)}&apikey=apivinz`)
		  const daun = await daunnya.json()
		  benny.sendFileFromUrl(from, daun.result, 'daun.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		  break
	case '#textmatrix':
	case '#teksmatrix':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
			const matrixnya = await fetch(`http://melodicxt-api.herokuapp.com/api/txtcustom?theme=matrix&text=${body.slice(12)}&apiKey=administrator`)
	        const matrix = await matrixnya.json()
			benny.sendFileFromUrl(from, matrix.result.result, 'matrix.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
			break
	case '#texttechno':
	case '#tekstecho':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
			const technonya = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${body.slice(11)}&apikey=BotWeA`)
			const techno = await technonya.json()
			benny.sendFileFromUrl(from, techno.result, 'techo.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
			break
	case '#textpetir':
	case '#tekspetir':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
			const textnye = body.slice(11)
			const petirnya = `https://docs-jojo.herokuapp.com/api/thunder?text=${textnye}`
			benny.sendFileFromUrl(from, petirnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	case '#text3d':
	case '#teks3d':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
			const textnya = body.slice(8)
			const gbrnya = `https://docs-jojo.herokuapp.com/api/text3d?text=${textnya}`
			benny.sendFileFromUrl(from, gbrnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	case '#textsunset':
                    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                    const jokqas = body.slice(12)
                    const jokiqas = `http://nzcha-api.herokuapp.com/styletext/senja?text1=${jokqas}`
                    benny.sendFile(from, jokiqas.result, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
                    break
	case '#textbp':
	case '#teksbp':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length === 1) return benny.reply(from, 'Teksnya mana??', id)
			benny.reply(from, mess.wait, id)
			const textnyo = body.slice(8)
			const bpnya = `http://docs-jojo.herokuapp.com/api/blackpink?text=${textnyo}`
			benny.sendFileFromUrl(from, bpnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	
	case '#textglitch':
	case '#teksglitch':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Silahkan ketik #textglitch text1 text2 Contoh #textglitch Benny Ganteng', id)
            if (args.length === 2) return benny.reply(from, 'Silahkan ketik #textglitch text1 text2 Contoh #textglitch Benny Ganteng', id)
			arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const text1 = arg[1]
			const text2 = arg[2]
			const glitchnya = `http://docs-jojo.herokuapp.com/api/ttlogo?text1=${text1}&text2=${text2}`
			benny.sendFileFromUrl(from, glitchnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	case '#textwolf':
	case '#tekswolf':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           if (args.length === 1) return benny.reply(from, 'Silahkan ketik #textwolf text1 text2 Contoh #textwolf Benny Ganteng', id)
           if (args.length === 2) return benny.reply(from, 'Silahkan ketik #textwolf text1 text2 Contoh #textwolf Benny Ganteng', id)
		   arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const textn = arg[1]
			const textm = arg[2]
			const wolfnya = `http://docs-jojo.herokuapp.com/api/wolf?text1=${textn}&text2=${textm}`
			benny.sendFileFromUrl(from, wolfnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	case '#textph':
	case '#teksph':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Silahkan ketik #textph text1 text2 Contoh #textph Benny Ganteng', id)
            if (args.length === 2) return benny.reply(from, 'Silahkan ketik #textph text1 text2 Contoh #textph Benny Ganteng', id)
			arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const ph1 = arg[1]
			const ph2 = arg[2]
			const phnya = `http://docs-jojo.herokuapp.com/api/phblogo?text1=${ph1}&text2=${ph2}`
			benny.sendFileFromUrl(from, phnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	case '#textneon':
	case '#teksneon':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Silahkan ketik #textneon text1 text2 text3 Contoh #textneon Benny Ganteng Banget', id)
            if (args.length === 2) return benny.reply(from, 'Silahkan ketik #textneon text1 text2 text3 Contoh #textneon Benny Ganteng Banget', id)
            if (args.length === 3) return benny.reply(from, 'Silahkan ketik #textneon text1 text2 text3 Contoh #textneon Benny Ganteng Banget', id)
			arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const text3 = arg[1]
			const text4 = arg[2]
			const text5 = arg[3]
			const neonnya = `http://docs-jojo.herokuapp.com/api/neon?text1=${text3}&text2=${text4}&text3=${text5}`
			benny.sendFileFromUrl(from, neonnya, '', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
            break
	case '#ttg':
	      if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                 benny.reply(from, mess.wait, id)
                await benny.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=WadoehhHengkerAbieezz`)
                    .then(() => console.log('Success creating GIF!'))
                    .catch(async (err) => {
                        console.error(err)
                        await benny.reply(from, 'Error!', id)
                    })
            break
	 case '#emojisticker':
     case '#emojistiker':
               if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		       if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                const emoji = emojiUnicode(args[0])
                await benny.reply(from, mess.wait, id)
                console.log('Creating emoji code for =>', emoji)
                await benny.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=WadoehhHengkerAbieezz`)
                    .then(async () => {
                        await benny.reply(from, ind.ok(), id)
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await benny.reply(from, 'Emoji not supported!', id)
                    })
            break
	case '#textff':
	case '#teksff':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textff = body.slice(8)
		 const ff = await fetch(`https://api-jojo.herokuapp.com/api/epep?text=${textff}`)
		 const ffnya = await ff.json()
		 benny.sendFile(from, ffnya.result, 'epep.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textlight':
	case '#tekslight':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textlight = body.slice(11)
		 const light = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${textlight}&apikey=BotWeA`)
		 const lightnya = await light.json()
		 benny.sendFile(from, lightnya.result, 'light.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textgplay':
	case '#textgplay':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textgold = body.slice(11)
		 const gold = await fetch(`https://api-zeks.harispoppy.com/api/gplaybutton?text=${textgold}&apikey=apivinz`)
		 const goldnya = await gold.json()
		 benny.sendFile(from, goldnya.result, 'gold.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textsplay':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textsilver = body.slice(11)
		 const silvernya = await fetch(`https://api-zeks.harispoppy.com/api/splaybutton?text=${textsilver}&apikey=apivinz`)
		 const silver = await silvernya.json()
		 benny.sendFile(from, silver.result, 'silver.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textnatal':
	case '#textnatal':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textnatal = body.slice(11)
		 const natal = await fetch(`https://api-zeks.harispoppy.com/api/crismes?text=${textnatal}&apikey=apivinz`)
		 const natalnya = await natal.json()
		 benny.sendFile(from, natalnya.result, 'natal.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
    case '#textlion':
	case '#tekslion':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 if (args.length === 2) return benny.reply(from, 'Silahkan ketik #textlion text1 text2 Contoh #textlion Benny Ganteng', id)
		 arg = body.trim().split(' ')
		 benny.reply(from, mess.wait, id)
		 const textlion = arg[1]
		 const liontext = arg[2]
		 const lion = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${textlion}&text2=${liontext}&apikey=BotWeA`)
		 const lionnya = await lion.json()
		 benny.sendFile(from, lionnya.result, 'lion.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textsnow':
	case '#tekssnow':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		const snownya = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${body.slice(10)}&apikey=BotWeA`)
		const snow = await snownya.json()
		benny.sendFileFromUrl(from, snow.result, 'snow.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		break
	case '#textmarvel':
	case '#teksmarvel':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 if (args.length === 2) return benny.reply(from, 'Silahkan ketik #textmarvel text1 text2 Contoh #textmarvel Benny Ganteng', id)
		 arg = body.trim().split(' ')
		 benny.reply(from, mess.wait, id)
		 const textmarvel = arg[1]
		 const marveltext = arg[2]
		 const marvel = await fetch(`https://api-zeks.harispoppy.com/api/marvellogo?text1=${textmarvel}&text2=${marveltext}&apikey=apivinz`)
		 const marvelnya = await marvel.json()
		 benny.sendFile(from, marvelnya.result, 'marvel.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textcolor':
	case '#tekscolor':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textcolor = body.slice(11)
		 const color = await fetch(`https://api-zeks.harispoppy.com/api/colortext?text=${textcolor}&apikey=apivinz`)
		 const colornya = await color.json()
		 benny.sendFile(from, colornya.result, 'color.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textfire':
	case '#teksfire':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textfire = body.slice(10)
		 const fire = await fetch(`https://api-zeks.harispoppy.com/api/tfire?text=${textfire}&apikey=apivinz`)
		 const firenya = await fire.json()
		 benny.sendFile(from, firenya.result, 'color.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textgrafiti':
	case '#teksgrafiti':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textgrafiti = body.slice(13)
		 const grafiti = await fetch(`https://api-zeks.harispoppy.com/api/grafiti?text=${textgrafiti}&apikey=apivinz`)
		 const grafitinya = await grafiti.json()
		 benny.sendFile(from, grafitinya.result, 'grafiti.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textblood':
	case '#teksblood':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textblood = body.slice(11)
		 const blood = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${textblood}&apikey=BotWeA`)
		 const bloodnya = await blood.json()
		 benny.sendFile(from, bloodnya.result, 'blood.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textpantai':
	case '#tekspantai':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textpantai = body.slice(12)
		 const pantai = await fetch(`https://api-zeks.harispoppy.com/api/tpantai?text=${textpantai}&apikey=apivinz`)
		 const pantainya = await pantai.json()
		 benny.sendFile(from, pantainya.result, 'pantai.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textwater':
	case '#tekswater':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textwater = body.slice(11)
		 const water = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=dropwater&text=${textwater}&apikey=BotWeA`)
		 const waternya = await water.json()
		 benny.sendFile(from, waternya.result, 'water.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
    case '#textjoker':
	case '#teksjoker':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
		 benny.reply(from, mess.wait, id)
		 const textjoker = body.slice(11)
		 const joker = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${textjoker}&apikey=BotWeA`)
		 const jokernya = await joker.json()
		 benny.sendFile(from, jokernya.result, 'joker.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#textgaming':
	case '#teksgaming':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
       if (args.length === 1) return benny.reply(from, 'Teks nya mana??', id)
	   benny.reply(from, mess.wait, id)
		const gamenya = body.slice(12)
		 const gaming = await fetch(`https://api-jojo.herokuapp.com/api/gaming?text=${gamenya}`)
		 const gamnya = await gaming.json()
		 benny.sendFile(from, gamnya.result, 'gaming.jpg', 'Anjay Keren Kali Bah\n\Tambah Keren Kalo Follow *@kenajaga.exe* <3', id)
		 break
	case '#quote':
    case '#quotes':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const quotes = await fetch(`https://api.terhambar.com/qts/`)
			const qts = await quotes.json()
            return await benny.reply(from, `➸ *Author* : ${pushname} \n➸ *Quotes* : ${qts.quotes}`, id)
            break
	case '#quotesnime':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const skya = await fetch(`https://api-jojo.herokuapp.com/api/quotesnime/random`)
            const skya_ = await skya.json()
            benny.reply(from, `➸ *Quotes* : ${skya_.data.quote}\n➸ *Character* : ${skya_.data.character}\n➸ *Anime* : ${skya_.data.anime}`, id)
            break
			
	    //Meme Maker
	case '#memes':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = q.split('|').join('-')[0]
                const bottom = q.split('').join('-')[1]
			const encryptMedia = isQuotedImage ? quotedMsg : message}
               const mmsnya = await fetch(`http://melodicxt-api.herokuapp.com/api/meme-maker?url=https://i.ibb.co/QXqY76v/Image-rtb.jpg&text=atas|bawah`)
            break
			
	case '#meme':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            benny.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
			
		//Premium User Fiture
	case '#wifipass':
    case '#shentaiprem':
    case '#asupanprem':
		if (!isPremium) return benny.sendText(from, `Maaf Kamu Bukan User Premium!`)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#join* linkgroup\n\nEx:\n#join https://chat.whatsapp.com/blablablablablabla', id)
            const link = body.slice(6)
            const tGr = await benny.getAllGroups()
            const minMem = 0
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await benny.inviteInfo(link)
            if (!isLink) return benny.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 50) return benny.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return benny.reply(from, 'Member group tidak melebihi 30, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await benny.joinGroupViaLink(link).then(() => benny.reply(from, 'Otw join gan!', id))
            } else {
                benny.reply(from, 'Link group tidak valid!', id)
            }
            break
		//Uproot Fiture	
    case '#roll':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            const dice = Math.floor(Math.random() * 6) + 1
            await benny.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
            break
	case '#flip':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
               benny.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
            } else {
               benny.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
            }
            break					
	case '#slap':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            arg = body.trim().split(' ')
            const person = author.replace('@c.us', '')
            await benny.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
            benny.sendTextWithMentions(from, '@' + person + ' *Telah MenSlap ( Menampar )* ' + arg[1])
            break	
	case '#hug':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
                    arg = body.trim().split(' ')
                    const janjing = author.replace('@c.us', '')
                    await benny.sendGiphyAsSticker(from, 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
                    benny.sendTextWithMentions(from, '@' + janjing + ' *peyuuuk* ' + arg[1])
                    break
                case '#nye': 
				if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
                    arg = body.trim().split('')
                    const jancuk7 = author.replace('@c.us', '')
                    await benny.sendGiphyAsSticker(from, 'https://media.giphy.com/media/cute-baka-13LunYkkBppSBa/giphy.gif')
                    benny.sendTextWithMentions(from, '@' + jancuk7 + ' *nye nye ' + arg[1])
                    break
                case '#pat':
				if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
                    arg = body.trim().split(' ')
                    const jartod = author.replace('@c.us', '')
                    await benny.sendGiphyAsSticker(from, 'https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif')
                    benny.sendTextWithMentions(from, '@' + jartod + ' *👈 Si Mengelu-elus si👉* ' + arg[1])
                    break
		//18++
   /*  case '#indohot':
    case '#nekopoi':
    case '#bokeo':
	      if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
          benny.reply(from, mess.wait, id)
          const boke = await fetch(`https://arugaz.herokuapp.com/api/indohot`)
          const bokek = await boke.json()
		  benny.reply(from, `➸ *Judul* : ${bokek.result.judul} \n➸ *Negara* : ${bokek.result.country} \n➸ *Genre* : ${bokek.result.genre} \n➸ *Durasi* : ${bokek.result.durasi}`, id)
          await benny.sendFileFromUrl(from, bokek.result.url, '', 'Neh..', id)
          break */
			
		//Group Fitures
	case '#setgpname':
	case '#setgcname':
            if (!isGroupMsg) return benny.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return benny.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return benny.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
                    arg = body.trim().split(' ')
					const detv = await benny.getChatById(groupId)
			        const gropnama = detv.contact.formattedName 
					const namagrup = body.slice(11)
                    let halaman = global.page ? global.page : await benny.getPage()
                    await halaman.evaluate((chatId, subject) =>
                        Store.WapQuery.changeSubject(chatId, subject), groupId, `${namagrup}`)
                    benny.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us','')}\n\n• Before: ${gropnama}\n• After: ${namagrup}`)
                    break
	 case '#groupicon':
		 if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           if (!isGroupMsg) return benny.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            var grouppic = await benny.getProfilePicFromServer(chatId)
            var gp = grouppic 
            await benny.sendFileFromUrl(from, gp, 'group.png')
			break
    case '#mutegrup':
	case '#mutegroup':
			if (!isGroupMsg) return benny.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
            if (!isGroupAdmins) return benny.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return benny.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
			if (args.length === 1) return benny.reply(from, 'Pilih on atau off!', id)
			if (args[1].toLowerCase() === 'on') {
				benny.setGroupToAdminsOnly(groupId, true).then(() => benny.sendText(from, 'Berhasil mengubah agar hanya admin yang dapat chat!'))
		    } else if (args[1].toLowerCase() === 'off') {
				benny.setGroupToAdminsOnly(groupId, false).then(() => benny.sendText(from, 'Berhasil mengubah agar semua anggota dapat chat!'))
			} else {
				benny.reply(from, `Untuk mengubah settingan group chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
			}
			break
    case '#setprofile':
	case '#seticongroup':
	case '#seticon':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (!isGroupMsg) return benny.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
        if (!isGroupAdmins) return benny.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
		if (isMedia && type == 'image' || isQuotedImage) {
				const url = args.length !== 0 ? args[0] : ''
				benny.reply(from, mess.wait, id)
				const dataMedia = isQuotedImage ? quotedMsg : message
				const _mimetype = dataMedia.mimetype
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
				await benny.setGroupIcon(groupId, imageBase64)
			} else if (args.length === 1) {
				if (!isUrl(url)) { await benny.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
				benny.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? benny.reply(from, 'Maaf, link yang kamu kirim tidak memuat gambar.', id)
				: benny.reply(from, 'Berhasil mengubah profile group', id))
			} else {
				benny.reply(from, `Commands ini digunakan untuk mengganti icon/profile group chat\n\n\nPenggunaan:\n1. Silahkan kirim/reply sebuah gambar dengan caption ${prefix}setprofile\n\n2. Silahkan ketik ${prefix}setprofile linkImage`)
			}
			break
	case '#nsfw':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return benny.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                benny.reply(from, 'NSWF Command berhasil di aktifkan di group ini! kirim perintah *#nsfwMenu* untuk mengetahui menu', id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                benny.reply(from, 'NSFW Command berhasil di nonaktifkan di group ini!', id)
            } else {
                benny.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
    case '#welcome':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
        if (args.length === 1) return benny.reply(from, 'Pilih enable atau disable!', id)
        if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                benny.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                benny.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                benny.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
    case '#nsfwmenu':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
        if (!isNsfw) return
            benny.reply(from, '1. #randomHentai\n2. #randomNsfwNeko', id)
            break
    case '#nh':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                benny.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            benny.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id).then(() => 
                            benny.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() => 
                            benny.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        benny.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    benny.reply(from, '[❗] Kode nuClear Salah!')
                }
            } else {
                benny.reply(from, '[ WRONG ] Kirim perintah *#nh [nuClear]* untuk contoh kirim perintah *#readme*')
            }
        	break
    case '#linkgroup':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
        if (isGroupMsg) {
                const inviteLink = await benny.getGroupInviteLink(groupId);
                benny.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}*`)
            } else {
            	benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            }
            break
    case '#adminlist':
	if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
    if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await benny.sendTextWithMentions(from, mimin)
            break
    case '#mentionall':
	case '#tagall':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
        if (!isGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await benny.getGroupMembers(groupId)
            let hehe = '' 
            for (let i = 0; i < groupMem.length; i++) {
                hehe += ''
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += ''
            await sleep(2000)
            await benny.sendTextWithMentions(from, hehe, id)
            break
    case '#kickall':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
		if (!isGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa digunakan oleh admin group!', id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await benny.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                    await benny.removeParticipant(groupId, allMem[i].id)
            }
            await benny.reply(from, 'Succes kick all members', id)
            break
    case '#banall':
			if (!isPilot) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
		    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
			const grupmem = await benny.getGroupMembers(groupId)
            for (let blast of grupmem) 
                    ben.push(blast)
                    fs.writeFileSync('./settings/banned.json', JSON.stringify(ben))
            await benny.reply(from, 'Succes ban all members', id)
            break
	case '#unbanall':
		if (!isPilot) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let beneta = ben.indexOf(ban[0])
                ben.splice(beneta)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(ben))
            await benny.reply(from, 'Succes unban all members', id)
            break
    case '#deskgrup':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	    if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa digunakan didalam grup', id)
			const det = await benny.getChatById(groupId)
			const groupname = det.contact.formattedName 
		    const deskripsi = det.groupMetadata.desc
		    await benny.reply(from, `Ini deskripsi grup \n[${groupname}] \n${deskripsi}`, id)
		    break
    case '#demoteall':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isBotGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMemi = await benny.getGroupMembers(groupId)
            for (let i = 0; i < allMemi.length; i++) {
                    await benny.demoteParticipant(groupId, allMemi.id)
            }
            benny.reply(from, 'Succes demote all member', id)
            break
	case '#promoteall':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isBotGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMemu = await benny.getGroupMembers(groupId) 
                    benny.promoteParticipant(groupId, allMemu)
            await benny.reply(from, 'Succes promote all member', id)
            break
    case '#groupinfo':
		 if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, '.', message.id) 
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupnama = name
            var welgrp = wel.includes(chat.id)
            var ngrp = nsfwgrp.includes(chat.id)
            var grouppic = await benny.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await benny.sendFileFromUrl(from, pfp, 'group.png', `*${groupnama}* 

🌐️ *Members: ${totalMem}*

💌️ *Welcome: ${welgrp}*

🔮️ *Rule* : *${isRule}*

⚜️ *NSFW: ${ngrp}*

💌️ *All GAY : Ya, Maybe

📃️ *Group Description* 

${desc}`)
            break
	case '#add':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const orang = args[1]
            if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return benny.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await benny.addParticipant(from,`${orang}@c.us`)
            } catch {
                benny.reply(from, mess.error.Ad, id)
            }
            break
        case '#kick':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return benny.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return benny.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await benny.sendText(from, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await benny.removeParticipant(groupId, mentionedJidList[i])
            }
            break
    case '#leave':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
        if (!isPilot) return benny.reply(from, 'Perintah ini hanya bisa di gunakan oleh owner bot', id)
            await benny.sendText(from,'Dadah').then(() => benny.leaveGroup(groupId))
            break
    case '#promote':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
	    if (!isGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
        if (mentionedJidList.length === 0) return benny.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
        if (groupAdmins.includes(mentionedJidList[0])) return benny.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await benny.promoteParticipant(groupId, mentionedJidList[0])
            await benny.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
    case '#demote':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
        if (!isGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
        if (mentionedJidList.length === 0) return benny.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
        if (mentionedJidList.length >= 2) return benny.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
        if (!groupAdmins.includes(mentionedJidList[0])) return benny.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await benny.demoteParticipant(groupId, mentionedJidList[0])
            await benny.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
	case '#revlinkgroup':
	case '#resetlink':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if(isGroupMsg && isBotGroupAdmins && isGroupAdmins) {
			benny.reply(from, mess.wait, id)
            await benny.revokeGroupInviteLink(groupId)
            } else if(!isGroupMsg) {
                benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            } else if(!isGroupAdmins) {
                benny.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', message.id)
            } else if(!isBotGroupAdmins) {
                benny.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            }
			await benny.reply(from, `Berhasil reset link group`, id)
            break
    case '#delete':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
        if (!isGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
        if (!quotedMsg) return benny.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
        if (!quotedMsgObj.fromMe) return benny.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            benny.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
	case '#katakasar':
        if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (!isGroupMsg) return benny.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
			benny.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			break
    case '#antikasar':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (!isGroupMsg) return benny.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
		if (args.length === 1) return benny.reply(from, 'Pilih on atau off!', id)
		if (args[1].toLowerCase() === 'on') {
				ngegas.push(chatId)
				fs.writeFileSync('./lib/kasar.json', JSON.stringify(ngegas))
				benny.reply(from, 'Fitur Anti Kasar sudah di Aktifkan', id)
			} else if (args[1].toLowerCase() === 'off') {
				let nixx = ngegas.indexOf(chatId)
				ngegas.splice(nixx, 1)
				fs.writeFileSync('./lib/kasar.json', JSON.stringify(ngegas))
				benny.reply(from, 'Fitur Anti Kasar sudah di non-Aktifkan', id)
			} else {
				benny.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n#antikasar on --mengaktifkan\n#antikasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			}
			break
    case '#randomhentai':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)       
			   benny.reply(from, mess.wait, id)
			   const hentaio = await fetch(`https://tobz-api.herokuapp.com/api/hentai&apikey=BotWeA`)
				 const hentaiok = await hentaio.json()
				 benny.sendFileFromUrl(from, hentaiok.result, '', 'Neh..', id)
				 break
    case '#randomnsfwneko':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (isGroupMsg) {
        if (!isNsfw) return benny.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                benny.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            } else {
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                benny.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            }
            break
	case '#randomquran':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)       
			   benny.reply(from, mess.wait, id)
			   const quran = await fetch(`https://api-zeks.harispoppy.com/api/randomquran`)
			   const qrn = await quran.json()
			   benny.reply(from, `➸*Nama Surah* : ${qrn.result.nama} \n➸*Arti* : ${qrn.result.arti} \n➸*Asma* : ${qrn.result.asma} \n➸*Ayat* : ${qrn.result.ayat} \n➸*Keterangan* : ${qrn.result.keterangan} \n➸*Dari* : ${qrn.result.type} \n➸*Urutan* : ${qrn.result.urut} \n➸*Nomor* : ${qrn.result.nomor} \n➸*Audio* : ${qrn.result.audio}`, id)
			   break
    case '#randomnekonime':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const nekonime = await fetch(`https://docs-jojo.herokuapp.com/api/nekonime`)
			const nekon = await nekonime.json()
            benny.sendFileFromUrl(from, nekon.result, `Nekonime${ext}`, 'Nih Nekonime\n*Spam = No Respon\n\nJika Kamu Dapat *No Bra!* Mungkin Kamu Bruntung', id)
            break
    
	    //Owner Fitures
	case '#shutdown':
	case '#matikanbot':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                if (!isPilot) return await benny.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
                return await benny.reply(from, 'Baik Bot Segera Off', id)
                    .then(async () => await benny.kill())
            break
	case '#setstatus':
            case '#setstats':
            case '#setstat':
			if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                if (!isPilot) return await benny.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
                if (!q) return await benny.reply(from, `Harap masukkan pesan yang ingin disampaikan!`, id)
                await benny.setMyStatus(q)
                await benny.sendText(from, `Sudah selesai, Owner-sama~`)
            break
	case '#bc':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned Oleh Owner!`, id)
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isPilot) return benny.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length == 0) return benny.reply(from, `Untuk broadcast ke semua chat ketik:\n${prefix}bc [isi chat]`)
            let msg = body.slice(4)
            const chatz = await benny.getAllChatIds()
            for (let idk of chatz) {
                var cvk = await benny.getChatById(idk)
                if (!cvk.isReadOnly) benny.sendText(idk, `❉──────────────────❉
      *_BROADCAST_*
❉──────────────────❉\n\n${msg}`)
                if (cvk.isReadOnly) benny.sendText(idk, `❉──────────────────❉
      *_BROADCAST_*
❉──────────────────❉\n\n${msg}`)
            }
            benny.reply(from, 'Broadcast Success!', id)
            break
	case '#blokdia':
		    if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
			if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (!isPilot) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
			for (let blost of mentionedJidList) {
                    ban.push(blost)
                    fs.writeFileSync('./lib/blokir.json', JSON.stringify(ban))
				await benny.contactBlock(mentionedJidList)
                }
                await benny.reply(from, `Success blokir target!`, id)
            break
	case '#ban':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
        if (!isPilot) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
        if (mentionedJidList.length === 0) return await benny.reply(from, `Format salah!`, id)
        if (mentionedJidList[0] === botNumber) return await benny.reply(from, `Format salah!`, id)
            const allMemek = await benny.getGroupMembers(groupId)
             for (let p = 0; p < allMemek.length; p++) {
			 for (let blist of mentionedJidList) 
					if (superOwner.includes(allMemek[p].id)) {
                            console.log('Upss this is Super Owner')
				} else { 
                    ban.push(blist)
                    fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                }
				}
                await benny.reply(from, `Success ban target!`, id)
            break
    case '#unban':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
        if (!isPilot) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
                if (mentionedJidList.length === 0) return await benny.reply(from, `Format salah!`, id)
                if (mentionedJidList[0] === botNumber) return await benny.reply(from, `Format salah!`, id)
                let benet = ban.indexOf(mentionedJidList[0])
                ban.splice(benet, 1)
                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                await benny.reply(from, `Success unban target!`, id)
            break
	case '#leaveall':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isPilot) return benny.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChats = await benny.getAllChatIds()
            const allGroups = await benny.getAllGroups()
            for (let gclist of allGroups) {
                await benny.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await benny.leaveGroup(gclist.contact.id)
            }
            benny.reply(from, 'Succes leave all group!', id)
            break
	case '#clearall':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isPilot) return benny.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await benny.getAllChats()
            for (let dchat of allChatz) {
                await benny.deleteChat(dchat.id)
            }
            benny.reply(from, 'Succes clear all chat!', id)
            break	
	case '#leave':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isPilot) return benny.reply(from, 'Perintah ini hanya bisa di gunakan oleh owner bot', id)
            await benny.reply(from,'Dadah', id).then(() => benny.leaveGroup(groupId))
            break		
			
		//Super Owner Fitures
	case '#getses': 
			if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		    benny.reply(from, mess.wait, id)
			const sesPic = await benny.getSnapshot()
            benny.sendFile(from, sesPic, 'session.png', 'Neh...', id)
            break
	case '#setname':
	    if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		arg = body.trim().split(' ')
		benny.reply(from, mess.wait, id)
		const grap = body.slice(9)
		await benny.setMyName(grap)
                benny.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
	case '#setstatus':
            if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
			    const setstat = body.slice(11)
                await benny.setMyStatus(setstat)
                benny.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case '#setpp':
            if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
			const isqwtimg1 = quotedMsg && quotedMsg.type === 'image'
                    if (isMedia && type == 'image' || isqwtimg1) {
                        const dataMediax = isqwtimg1 ? quotedMsg : message
                        const _mimetypep = dataMediax.mimetype
                        const mediaDatax = await decryptMedia(dataMediax, uaOverride)
                        const imageBase64j = `data:${_mimetypep};base64,${mediaDatax.toString('base64')}`
                        await benny.setMyProfile(imageBase64j)
                        await benny.reply(from, 'Berhasil mengubah foto profile!', id)
                    }
                    break
        case '#getpic':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            benny.reply(from, mess.wait, id)
			const texnugm = body.slice(8)
            const getnomber =  await benny.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await benny.getProfilePicFromServer(useriq)

                    benny.sendFileFromUrl(from, jnck, `awok.jpg`)
                } catch {
                    benny.reply(from, `Tidak Ada Foto Profile!`, id)
                }
            break
	case '#jadikanowner':	
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
                    owner.push(sender.id)
                    fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
		 await benny.reply(from, `Success menambahkan ${pushname} menjadi owner bot!`, id)
            break
	case '#superowner':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	   benny.sendContact(from, superOwner)
		break
	case '#adminme':
	case '#promoteme':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
	    if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            await benny.promoteParticipant(groupId, pengirim)
            await benny.sendTextWithMentions(from, `Perintah diterima, menambahkan @${pengirim} sebagai admin.`)
            break
	case '#unadminme':
	case '#demoteme':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (!isGroupMsg) return benny.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
	    if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
        if (!isBotGroupAdmins) return benny.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            await benny.demoteParticipant(groupId, pengirim)
            await benny.sendTextWithMentions(from, `Perintah diterima, menghapus @${pilotNumber} sebagai admin.`)
            break
	case '#bikingrup':
	case '#creategroup':
	    if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
            arg = body.trim().split(' ')
			benny.reply(from, mess.wait, id)
			const gcname = arg[1]
		    benny.createGroup(gcname, saya)
            await benny.reply(from, 'Group Created ✨️', id)
            break
	case '#culikdia':
	        if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
            arg = body.trim().split(' ')
            const gcnamo = arg[1]
            benny.createGroup(gcnamo, mentionedJidList)
            await benny.sendText(from, 'Group Created ✨️')
            break
	case '#chatowner':
	    if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		arg = body.trim().split(' ')
		const msgn = arg[1]
		benny.sendText(pilotNumber[1], `${msgn}`)
		await benny.reply(from, `Sukses chat owner bot!`, id)
		break
    case '#tambahsowner':	
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
				  for (let addo of mentionedJidList) {
                    owner.push(addo)
                    fs.writeFileSync('./settings/superowner.json', JSON.stringify(owner))
                }
		 await benny.reply(from, `Success menambahkan ${mentionedJidList.join('\n')} menjadi super owner bot!`, id)
            break
	case '#tambahpremium':	
	    if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
				  for (let addi of mentionedJidList) {
                    _premium.push(addi)
                    fs.writeFileSync('./lib/premium.json', JSON.stringify(_premium))
                }
		 await benny.reply(from, `Success menambahkan ${mentionedJidList.join('\n')} menjadi premium user!`, id)
            break
	case '#tambahowner':	
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		if (mentionedJidList.length === 0) return benny.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
        		  for (let add of mentionedJidList) {
                    owner.push(add)
                    fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
                }
		 await benny.reply(from, `Success menambahkan ${mentionedJidList.join('\n')} menjadi owner bot!`, id)
            break
	case '#hapusowner':
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
			let beneto = ban.indexOf(mentionedJidList[1])
                owner.splice(beneto, 1)
                fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
                await benny.reply(from, `Success menghapus ${mentionedJidList.join('\n')} dari owner bot!`, id)
            break
	case '#setprefix':
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
                    if (args.length === 1) return benny.reply(from, `*Kirim Perintah ${prefix}setprefix [prefix baru]*. Contoh: ${prefix}setprefix #`, id)
                    const pf = body.slice(11)
                    config.prefix = `${pf}`
                    fs.writeFileSync('./config.json', JSON.stringify(config))
                    benny.reply(from, `Change Prefix To ${pf} SUCCESS!`, id)
                    break
	case '#hapussemuaowner':
		if (!isSuper) return await benny.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
		  let benetc = owner.indexOf(pilotNumber[0])
                owner.splice(benetc)
                fs.writeFileSync('./settings/owner.json', JSON.stringify(owner))
            await benny.reply(from, 'Succes delete all owner', id)
            break
			
		//Islami Fitures
	case '#jadwalshalat':
			if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 0) return benny.reply(from, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
            const solatx = body.slice(14)
		const solatj = await fetch(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${solatx}&apikey=BotWeA`)
		const solatp = await solatj.json()
        benny.reply(from, solatp.result, id)
            break
    case '#infosurah':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 0) return benny.reply(from, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                benny.reply(from, pesan, message.id)
              break
    case '#surah':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 0) return benny.reply(from, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  benny.reply(from, pesan, message.id)
                }
              break
    case '#tafsir':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 0) return benny.reply(from, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responsih.data
                  pesan = ""
                  pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
                  pesan = pesan + data.text.arab + "\n\n"
                  pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                  benny.reply(from, pesan, message.id)
              }
              break
    case '#alaudio':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 0) return benny.reply(from, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {nama, nama_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+nama+" ("+nama_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[0].nama+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[1].nama+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[2].nama+" : "+recitations[2].audio_url+"\n"
                    benny.reply(from, pesan, message.id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.nama.transliteration.id+":"+args[1]+")"
                    await benny.sendFileFromUrl(from, data.audio.secondary[0])
                    await benny.reply(from, pesan, message.id)
                  }
              }
              break
	case '#randomtrapnime':
		if (!isRegistered) return benny.sendText(from, `OMaaf *${pushname}!* Nomor Kamu Belum Terdaftar Disini! \n\nKamu Bisa Register Dengan Cara:\n*!daftar* <nama> Terdaftar Disini! \n\nKamu Bisa Register Dengan Cara:\n*!daftar* <nama>.. Nomor Kamu Belum Terdaftar Disini! \n\nKamu Bisa Register Dengan Cara:\n*!daftar* <nama> terdafar! \n\nSilahkan register dengan format:\n#daftar`)
            const trap = await fetch(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`)
			const trapi = await trap.json()
            benny.sendFileFromUrl(from, trapi.result, `trapnime${ext}`, 'Trapnime!', id)
            break
	case '#randomayat':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
          if (body.length > 6) {
            const response = await get.get('https://api.quran.sutanlab.id/surah')
            const data = response.data
            nmr = Math.floor(Math.random() * 115);
            maks = data[nmr-1].numberOfVerses
            ayat = Math.floor(Math.random() * maks) + 1;
            if(!isNaN(nmr)) {
              const responsi2 = await get.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
              const {data} = responsi2.data
              var last = function last(array, n) {
                if (array == null) return void 0;
                if (n == null) return array[array.length - 1];
                return array.slice(Math.max(array.length - n, 0));
              };
              bhs = last(args)
              pesan = ""
              pesan = pesan + data.text.arab + "\n\n"
              if(bhs == "en") {
                pesan = pesan + data.translation.en
              } else {
                pesan = pesan + data.translation.id
              }
              pesan = pesan + "\n\n(Q.S. "+data.surah.nama.transliteration.id+":"+ayat+")"
              benny.sendText(from, pesan)
            }
          }
          break
		  
	    //Other Fiturs
	
	case '#pantun':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                benny.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
	case '#motivasi':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                benny.reply(from, randommotivasi, id)
            })
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
	      case '#howgay':
		  if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        		if (args.length == 0) return benny.reply(from, `Untuk mengetahui seberapa gay seseorang gunakan ${prefix}howgay namanya\n\nContoh: ${prefix}howgay burhan`, id)
            fetch('https://raw.githubusercontent.com/MrPawNO/howgay/main/howgay.txt')
            .then(res => res.text())
            .then(body => {
                let splithowgay = body.split('\n')
                let randomhowgay = splithowgay[Math.floor(Math.random() * splithowgay.length)]
                benny.reply(from, randomhowgay, id)
            })
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
        case '#fakta':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                benny.reply(from, randomnix, id)
            })
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
        case '#katabijak':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                benny.reply(from, randombijak, id)
            })
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
	case '#cerpen':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
      			rugaapi.cerpen()
      			.then(async (res) => {
		    		await benny.reply(from, res.result, id)
      			})
		      	break
	case '#cersex':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			      rugaapi.cersex()
			      .then(async (res) => {
			    	await benny.reply(from, res.result, id)
		      	})
		      	break
	case '#puisi':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		      	rugaapi.puisi()
		      	.then(async (res) => {
			    	await benny.reply(from, res.result, id)
		      	})
		      	break
			 case '#shortlink':
			 if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			 if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 1) return benny.reply(from, `ketik #shortlink <url>`, id)
			const short = body.slice(11)
            const shortlink = await fetch(`https://tobz-api.herokuapp.com/api/shorturl?url=${short}&apikey=BotWeA`)
			const shortnya = await shortlink.json()
            benny.reply(from, shortnya.result, id)
            break
	case '#bitly':
	 if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			 if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 1) return benny.reply(from, `ketik #bitly <url>`, id)
			const bitly = body.slice(7)
			const bitlynya = await fetch(`https://tobz-api.herokuapp.com/api/bitly?url=${bitly}&apikey=BotWeA`)
			const btly = await bitlynya.json()
			benny.sendText(from, btly.result)
			break
	case '#spamcall':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			 if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
            if (args.length == 1) return benny.reply(from, `ketik #bitly <url>`, id)
		const target = body.slice(10)
			const targetnya = await fetch(`https://tobz-api.herokuapp.com/api/spamcall?no=${target}&apikey=BotWeA`)
			const trgt = await targetnya.json()
			benny.reply(from, trgt.logs, id)
			break
	case '#infoloker':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			 if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	         const lokernya = await fetch('http://docs-jojo.herokuapp.com/api/infoloker')
			 const lokr = await lokernya.json()
			 benny.reply(from, `➸ *Perusahaan* : ${lokr.result.perusahaan} \n➸ *Deskripsi* : ${lokr.result.desc} \n➸ *Edukasi* : ${lokr.result.edukasi} \n➸ *Lokasi* : ${lokr.result.lokasi} \n➸ *Gaji* : ${lokr.result.gaji} \n➸ *Syarat* : ${lokr.result.syarat} \n➸ *Pengalaman* : ${lokr.result.pengalaman} \n➸ *Level Karir* : ${lokr.result.levelKarir} \n➸ *Profesi* : ${lokr.result.profesi} \n➸ *Job Function* : ${lokr.result.jobFunction} \n➸ *Link* : ${lokr.result.link}`, id)
			 break
	case '#randomanime':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	      const ranimenya = await fetch(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`)
		  const ranime = await ranimenya.json()
		  benny.sendFileFromUrl(from, ranime.result, '', 'Neh..', id)
		  break
	case '#covidindo':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			rugaapi.covidindo()
			.then(async (res) => {
				await benny.reply(from, `${res}`, id)
			})
			break
	case '#bapakfont':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			if (args.length == 1) return benny.reply(from, `Mengubah kalimat menjadi alayyyyy\n\nketik #bapakfont kalimat`, id)
			const bapak = body.slice(11)
			const bapakfont = await fetch(`https://api.terhambar.com/bpk?kata=${bapak}`)
			const bapack = await bapakfont.json()
				 benny.reply(from, `${bapack.text}`, id)
			break
	case '#cekzodiak':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           		   if (args.length == 1) return benny.reply(from, `Untuk mengecek zodiak, gunakan #cekzodiak nama tanggallahir-bulanlahir-tahunlahir\nContoh: #cekzodiak fikri 13-06-2004`, id)
		arg = body.trim().split(' ')
         benny.reply(from, mess.wait, id)
		const nmny = arg[1]
		const tanggal = arg[2]
		const cekzodiak = await fetch(`https://arugaz.herokuapp.com/api/getzodiak?nama=${nmny}&tgl-bln-thn=${tanggal}`)
		const cekzodiaku = await cekzodiak.json()
            await benny.reply(from, `➸*Nama*: ${cekzodiaku.nama}\n➸*Lahir*: ${cekzodiaku.lahir}\n➸*Usia*: ${cekzodiaku.usia}\n➸*Ultah*: ${cekzodiaku.ultah}\n➸*Zodiak*: ${cekzodiaku.zodiak}`, id)
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
		case '#artinama':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length == 1) return benny.reply(from, `Untuk mengetahui arti nama seseorang\nketik ${prefix}artinama namakamu`, id)
            const arti = body.slice(10)
			const artiname = await artinama(arti)
				await benny.reply(from, `➸ *Nama* : ${arti} \n➸ *Arti* : ${artiname}`, id)
			break
		case '#cekjodoh':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			       arg = body.trim().split(' ')
                    if (arg.length >= 3) {
                        benny.reply(from, mess.wait, id)
                        const kamu = arg[1]
                        const pacar = arg[2]
                        const rpmn = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn2 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn3 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn4 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn5 = rate[Math.floor(Math.random() * rate.length)]
                        const rpmn6 = rate[Math.floor(Math.random() * rate.length)]
                        await benny.reply(from, `*Hasil Pengamatan!*\nPasangan dengan nama *${kamu}* dan *${pacar}*\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}\n *Pembantuan! :*\n  Jika Cinta Diatas *60%* Mungkin Kalian Jodoh:>\n SUPPORT BY : *@kenajaga.exe*`, id)
                    } else {
                        await benny.reply(from, 'Cek Jodoh Tuh Kek Gini\n*#cekjodoh kiki Reemar*\nHarus Ada Nama Ceweknya :)', id)
                    }
                    break
	case '#tiktok':
	     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Kirim perintah *#tiktok [linkTiktok]*\nContoh : *#tiktok https://vt.tiktok.com/yqyjPX/*', id)
                        benny.reply(from, mess.wait, id)
                        const tikt = await fetch(`https://api.vhtear.com/tiktokdl?link=${body.slice(8)}&apikey=WadoehhHengkerAbieezz`)
                       const tktk = await tikt.json()
					   benny.sendFileFromUrl(from, tktk.result.video, 'tiktok.mp4', 'Neh..', id)
					break
	case '#hitung':
                    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                    if (args.length === 1) return benny.reply(from, '[❗] Kirim perintah *!hitung [ Angka ]*\nContoh : !hitung 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
                    const mtk = body.slice(8)
                    if (typeof Math_js.evaluate(mtk) !== "number") {
                        benny.reply(from, `"${mtk}", bukan angka!\n[❗] Kirim perintah *!hitung [ Angka ]*\nContoh : !hitung 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
                    } else {
                        benny.reply(from, `*[ MATEMATIKA ]*\n\n*Kalkulator*\n\nHasil dari:\n${mtk} = ${Math_js.evaluate(mtk)}`, id)
                    }
                    break
	case '#cekip':
	case '#checkip':
	     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		 if (args.length === 1) return benny.reply(from, 'Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*', id)
                    benny.reply(from, mess.wait, id)
                    arg = body.trim().split(' ')
                    console.log(...arg[1])
                    var slicedArgs = Array.prototype.slice.call(arg, 1);
                    console.log(slicedArgs)
                    const cekip = await slicedArgs.join(' ')
                    console.log(cekip)
                    try {
                        const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
                        const {
                            city,
                            continent_name,
                            country_name,
                            ip,
                            latitude,
                            location,
                            longitude,
                            region_name
                        } = cekip2.data
                        const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`

                        const pictk = await bent("buffer")(location.country_flag)
                        const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                        benny.sendImage(from, base64, city, cekip3)
                    } catch (err) {
                        console.error(err.message)
                        await benny.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                        benny.sendText(ownerNumber, 'Error Check IP : ' + err)
                    }
                    break
    case '#infonomor':
        if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        if (args.length == 1) return benny.reply(from, 'Nomornya mana??', id)
        const nomro = body.slice(11)
      const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
      const nmro = await nomronya.json()
      benny.reply(from, `➸ *Nomor* : ${nmro.nomor} \n➸ *Internasional* : ${nmro.international} \n➸ *Operator* : ${nmro.op}`, id)
     break
      case '#play':
                    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                    if (args.length == 1) return benny.reply(from, `Untuk mencari lagu from youtube\n\nPenggunaan: !play judul lagu`, id)
                        benny.reply(from, mess.wait, id)
                        const serplay = body.slice(6)
                        const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=WadoehhHengkerAbieezz`)
                        const webplay2 = await webplay.json()
                            const captplay = `*「 PLAY 」*\n\n➸ *Judul* : ${webplay2.result.title} \n➸ *Format* : ${webplay2.result.ext} \n➸ *Durasi* : ${webplay2.result.duration}\n_*Music Sedang Dikirim*_`
                            benny.sendFileFromUrl(from, webplay2.result.image, 'thumb.jpg', captplay, id)
                            await benny.sendFileFromUrl(from, webplay2.result.mp3, `${webplay2.result.title}.mp3`, '', id)
                    break
      case '#joox':
                        if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                        if (args.length == 1) return benny.reply(from, `Untuk mencari lagu from youtube\n\nPenggunaan: !play judul lagu`, id)
                            benny.reply(from, mess.wait, id)
                            const textjoox = body.slice(6)
                            const jooxnya = await fetch(`https://tobz-api.herokuapp.com/api/joox?q=${textjoox}&apikey=BotWeA`)
                            const joox = await jooxnya.json()
                            benny.sendFileFromUrl(from, joox.result.thumb, 'thumb.jpg', `[*JOOX*] \n➸ *Judul* : ${joox.result.judul} \n➸ *Album* : ${joox.result.album} \n➸ *Diupload* : ${joox.result.dipublikasi} \nMohon tunggu sebentar lagu sedang di download`, id)
                            await benny.sendFileFromUrl(from, joox.result.mp3, `${joox.result.judul}`, '', id)
                   break
     case '#ytmp3':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         if (args.length === 1) return benny.reply(from, 'Kirim perintah *#ytmp3 [linkYt]*, untuk contoh silahkan kirim perintah *#readme*')
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return benny.reply(from, mess.error.Iv, id)
                benny.reply(from, mess.wait, id)
				const linkyta = body.slice(7)
                const resp = await fetch(`https://api-zeks.harispoppy.com/api/ytmp3?url=${linkyta}&apikey=apivinz`)
                    const resps = await resp.json()
					benny.sendFileFromUrl(from, resps.result.thumbnail, 'thumb.jpg', `➸ *Title* : ${resps.result.title}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await benny.sendFileFromUrl(from, resps.result.url_audio, `${resps.result.title}.mp3`, '', id)
            break
    case '#ytmp4':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           if (args.length === 1) return benny.reply(from, 'Kirim perintah *#ytmp4 [linkYt]*, untuk contoh silahkan kirim perintah *#readme*')
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return benny.reply(from, mess.error.Iv, id)
                benny.reply(from, mess.wait, id)
				const linkytv = body.slice(7)
                const ytv = await fetch(`https://api-zeks.harispoppy.com/api/ytmp4?url=${linkytv}&apikey=apivinz`)
				const ytvs = await ytv.json()
                    benny.sendFileFromUrl(from, ytvs.result.thumbnail, 'thumb.jpg', `➸ *Title* : ${ytvs.result.title}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await benny.sendFileFromUrl(from, ytvs.result.url_audio, `${ytvs.title}.mp4`, '', id)
            break
	case '#ytsearch':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         const linknye = body.slice(10)
		 const searchnya = await fetch(`http://melodicxt-api.herokuapp.com/api/youtubesearch?query=${linknye}&apiKey=administrator`)
		 const srch = await searchnya.json()
		 const srkn = `*Channel* : ${srch.result.channel} \n➸ *Chanel ID* : ${srch.result.chanelId} \n➸ *Title* : ${srch.result.title} \n➸ *Views* : ${srch.result.views} \n➸ *Upload* : ${srch.result.publishTime} \n➸ *ID* : ${srch.result.id} \n➸ *Url* : ${srch.result.link}`
		 benny.sendFileFromUrl(from, srch.result.thumbnails, 'thumb.jpg', srkn, id)
		  break
	case '#infofilm':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		const filmnya = await fetch(`https://tobz-api.herokuapp.com/api/film?q=${body.slice(10)}&apikey=BotWeA`)
		const film = await filmnya.json()
		benny.sendFileFromUrl(from, film.result.thumb, 'thumb.jpg', `*INFO FILM* \n➸ *Judul* : ${film.result.judul} \n➸ *Genre* : ${film.result.genre_negara} \n➸ *Rating* : ${film.result.rating} \n➸ *Link* : ${film.result.link}`, id)
	    break
	case '#spekhp':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	    const speknya = await fetch(`https://api.vhtear.com/gsmarena?query=${body.slice(8)}&apikey=WadoehhHengkerAbieezz`)
	    const spek = await speknya.json()
		benny.sendFileFromUrl(from, spek.result.image, 'spek.jpg', `*Spekifikasi Hp ${body.slice(8)}* \n➸ *Nama HP* : ${spek.result.title} \n➸ *Spekifikasi* : ${spek.result.spec}`, id)
		break
	case '#images':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        if (args.length == 0) return benny.reply(from, `Untuk mencari gambar dari pinterest\nketik: ${prefix}images [search]\ncontoh: ${prefix}images naruto`, id)
            benny.reply(from, mess.wait, id)
			const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            await benny.sendFileFromUrl(from, hasilwall, '', '', id)
            .catch(() => {
                benny.reply(from, '*#images* Anda Error! Mungkin Chat Anda Tertumpuk!\n*Dan Pastikan Use [ # ]*', id)
            })
            break
	case '#tutorial':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.reply(from, mess.wait, id)
			const tutornih = 'https://r6---sn-uvu-c33d.googlevideo.com/videoplayback?expire=1609687429&ei=JI3xX8iPOIHeWYGku2g&ip=1.10.240.76&id=o-AGiYPWxWFUSEes4i4718WRqHyUKYObEo2-rPqSDODXXp&itag=22&source=youtube&requiressl=yes&mh=cp&mm=31%2C29&mn=sn-uvu-c33d%2Csn-uvu-c336&ms=au%2Crdu&mv=m&mvi=6&pl=22&initcwndbps=1167500&vprv=1&mime=video%2Fmp4&ns=F3OIUK8BPJzkkjLLN7FFx1cF&ratebypass=yes&dur=329.398&lmt=1601549706627200&mt=1609665634&fvip=6&c=WEB&txp=6216222&n=RJqq359lrKq14-DH&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAL2-FX-GUnSkxEMsFzAahW4ps_pzf2Dv9cF_HnWe0aI7AiEA2pJ5IW0DJFHtphtDkF8_OgA_Fp19_xQTsH5njIzokA8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgYDUHKu-l6IkX5DnpOsoWt31AsY_4pYV8l9rxCmcEFMQCIC9buPspDRwlKp09vFYdu6Qf6-PMUk0Chd1-n0MPoA9q&title=TUTORIAL%20MEMASANG%20BOT%20STICKER%20WHATSAPP'
			benny.sendFileFromUrl(from, tutornih, 'tutornih.mp4', '', id)
			break
		case '#bot':
		if (isBanned) return await benny.reply(from, `Maaf, Nomor kamu telah dibanned!`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		benny.sendLinkWithAutoPreview(from, `https://github.com/bennyganteng/FrenzY8`)
        break
    case '#fotocewe':
    case '#fotocewek':
        if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
        benny.reply(from, mess.wait, id)
		const cangti = ['https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
        benny.sendFileFromUrl(from, cangtip, 'cewk.jpg')
        break
        case '#wiki':
        if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        if (args.length === 1) return benny.reply(from, 'Kirim perintah *#wiki [query]*\nContoh : *#wiki asu*', id)
            const query_ = body.slice(6)
            const wiki = await fetch(`https://docs-jojo.herokuapp.com/api/wiki?q=${query_}`)
			const wikia = await wiki.json()
                    if (wiki.error) {
                        benny.reply(from, wiki.error, id)
                    } else {
                        benny.reply(from, `➸ *Query* : ${query_}\n\n➸ *Result* : ${wikia.result}\n\n➸*Gambar* : ${wikia.img}`, id)
                    }
                    break
	case '#ceksange':
	      if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
          if (!isGroupMsg) return await benny.reply(from, 'Perintah ini hanya bisa digunakan didalam grup!', id)
		  if (mentionedJidList.length === 0) return benny.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#ceksange* @tagmember', id)
		  const groupMemc = await benny.getGroupMembers(groupId)
		  let prsen = rate[Math.floor(Math.random() * rate.length)]
		  await benny.reply(from, `Sange Si @${mentionedJidList} adalah ${prsen}`, id)
		  break
    case '#cuaca':
	case '#weather':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 0) return benny.reply(from, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
            benny.reply(from, mess.wait, id)
			const cuacaq = body.slice(7)
            const cuacap = await rugaapi.cuaca(cuacaq)
            await benny.reply(from, cuacap, id)
            .catch(() => {
                benny.reply(from, 'Ada yang Error!', id)
            })
            break
		case '#fb':
		case '#facebook':
		    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
			if (args.length == 0) return benny.reply(from, `Untuk mendownload video dari link facebook\nketik: ${prefix}fb [link_fb]`, id)
			rugaapi.fb(args[0])
			.then(async (res) => {
				const { link, linkhd, linksd } = res
				if (res.status == 'error') return benny.sendFileFromUrl(from, link, '', 'Maaf url anda tidak dapat ditemukan', id)
				await benny.sendFileFromUrl(from, linkhd, '', 'Nih ngab videonya', id)
				.catch(async () => {
					await benny.sendFileFromUrl(from, linksd, '', 'Nih ngab videonya', id)
					.catch(() => {
						benny.reply(from, 'Maaf url anda tidak dapat ditemukan', id)
					})
				})
			})
			break
    case '#owner':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.sendContact(from, pilotNumber)
            break
    case '#ig':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#ig [linkIg]* untuk contoh silahkan kirim perintah *#readme*')
           const igtxt = body.slice(4)
		  const igdnya = await fetch(`https://api-zefian.glitch.me/api/ig?url=${igtxt}`)
		  const flig = await igdnya.json()
		  benny.sendFileFromUrl(from, flig.result, '', 'Neh..', id)
		  break
	case '#igstalk':
		case '#stalkig':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1)  return benny.reply(from, 'Kirim perintah *#igStalk @username*\nConntoh *#igStalk @duar_amjay*', id)
		   const stalk = await fetch(`https://api-zeks.harispoppy.com/api/igstalk?username=${args[1]}&apikey=apivinz`)
		   const stlk = await stalk.json()
		   const profile_pic = stlk.profile_pic
            if (stalk.error) return benny.reply(from, stalk.error, id)
            const caps = `➸ *Nama* : ${stlk.fullname}\n➸ *Username* : ${stlk.username}\n➸ *Jumlah Followers* : ${stlk.follower}\n➸ *Jumlah Following* : ${stlk.following}\n➸ *Biodata* : ${stlk.bio}`
		await benny.sendFile(from, profile_pic, 'Pict.jpg', `➸ *Nama* : ${stlk.fullname}\n➸ *Username* : ${stlk.username}\n➸ *Jumlah Followers* : ${stlk.follower}\n➸ *Jumlah Following* : ${stlk.following}\n➸ *Biodata* : ${stlk.bio}`, id)
            break
    case '#infogempa':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const bmkg = await fetch(`https://docs-jojo.herokuappcom/api/infogempa`)
			const bmth = await bmkg.json()
            const mapnya = bmth.map
			const hasil = `*${bmth.waktu}*\n📍 *Lokasi* : *${bmth.lokasi}*\n〽️ *Kedalaman* : *${bmth.kedalaman}*\n💢 *Magnitude* : *${bmth.magnitude}*\n🔘 *Potensi* : *${bmth.potensi}*\n📍 *Koordinat* : *${bmth.koordinat}*`
            benny.sendFile(from, mapnya, `map.jpg`, `${hasil}`, id)
            break
    case '#anime':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const keyword = message.body.replace('#anime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await benny.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime', id)
              console.log("Sent!")
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Found!*
✨️ *Title:* ${title}

🎆️ *Episodes:* ${episodes}

💌️ *Rating:* ${rated}

❤️ *Score:* ${score}

💚️ *Synopsis:* ${synopsis}

🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            benny.sendImage(from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await benny.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
           }
          break
	case '#anime2':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#anime [query]*\nContoh : *#anime darling in the franxx*', id)
            const animeku = await get.get('https://docs-jojo.herokuapp.com/api/dewabatch?q=' + body.slice(7)).json()
            if (animeku.error) return benny.reply(from, animeku.error, id)
            const res_animeku = `${animeku.result}\n\n${animeku.sinopsis}`
            benny.sendFileFromUrl(from, animeku.thumb, 'dewabatch.jpg', res_animeku, id)
            break
    case '#brainly':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return benny.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                benny.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            benny.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            benny.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                benny.reply(from, 'Usage :\n#brainly [pertanyaan] [.jumlah]\n\nEx : \n#brainly NKRI .2', id)
            }
            break
	case '#ceklokasi':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
        if (quotedMsg && quotedMsg.type == 'location') return benny.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) benny.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            benny.sendText(from, texto)
            break	
	case '#manga':
            if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
         	const keywrd = (args)
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/manga?q=${keywrd}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await benny.sendFileFromUrl(from, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested manga', id)
              console.log("Sent!")
              return null
              }
            const { title, synopsis, chapters, url, volumes, score, image_url } = parsed.results[1]
            const content = `*Manga found*
*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            benny.sendImage(from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await benny.sendFileFromUrl(from, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested manga')
           }
          break
    case '#rpaper':
	case '#randomwallpaper':
	case '#rwallpaper':
	       if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           const walnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            benny.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break
    case '#wait':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                benny.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		benny.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    benny.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        benny.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    benny.reply(from, 'Error !', id)
                })
            } else {
                benny.sendFile(from, './media/img/tutod.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break	
	case '#profile':
     case '#me':
            if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (quotedMsg) return profile(quotedMsgObj.sender.id, message, fs, groupAdmins, benny)
	    if (mentionedJidList.length >= 1) return profile(mentionedJidList[1], message, fs, groupAdmins, benny)
	    return profile(sender.id, message, fs, groupAdmins, benny)
            break
	case '#filmgangster':
	     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		  const gangste = JSON.parse(fs.readFileSync('./lib/gangster.json')) 
		  let gangster = gangste[Math.floor(Math.random() * gangste.length)]
		  benny.sendFileFromUrl(from, gangster, 'gangster.mp4', '', id)
		  break
	case '#chord':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await fetch(`http://docs-jojo.herokuapp.com/api/chord?q=${query__}`)
			const cordnya = await chord.json()
            benny.reply(from, chordnya.result, id)
            break
    case '#listdaerah':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const listDaerah = await get('https://docs-jojo.herokuapp.com/api/daerah').json()
            benny.reply(from, listDaerah, id)
            break
    case '#listblock':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            benny.sendTextWithMentions(from, hih, id)
            break
	case '#karakter':
	case '#karakter':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
 	    const keywr = (args)
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywr}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await benny.sendFileFromUrl(from, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested character', id)
              console.log("Sent!")
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[1]
            const content = `*Character found!*
*Name:* ${name}
*Nickname:* ${alternative_names}
*Link*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            benny.sendImage(from, base64, name, content)
           } catch (err) {
             console.error(err.message)
             await benny.sendFileFromUrl(from, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested character')
           }
          break
        case '#wallpaper':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 0) return benny.reply(from, 'Wrong Format!', id)
            const query = body.slice(6)
            const walls = await wall(query)
            await benny.sendFileFromUrl(from, walls, 'walls.jpg', '', id)
	    break
	case '#afk':
		     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
                   if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
 				  afk.push(sender.id)
                    fs.writeFileSync('./lib/afk.json', JSON.stringify(afk))
                await benny.reply(from, `Berhasil, ${pushname} sekarang afk!`, id)
            break
	case '#unafk':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (!isGroupMsg) return benny.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let afko = afk.indexOf(sender.id)
                afk.splice(afko, 1)
                fs.writeFileSync('./lib/afk.json', JSON.stringify(afk))
                return await benny.reply(from, `${pushname} telah mematikan afk!`, id)
            break
    case '#listchannel':
				if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.reply(from, listChannel, id)
            break
    case '#jadwaltv':
		    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#jadwalTv [channel]*', id)
            const queri = body.slice(10)
            const jadwal = await fetch(`https://api-zeks.harispoppy.com/api/jadwaltv?channel=${queri}&apikey=apivinz`)
			const jdwl = await jadwal.json()
            benny.reply(from, `Nih gan \n${jdwl.result}\n`, id)
            break
    case '#jadwaltvnow':
				if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const jadwalNow = await fetch(`http://docs-jojo.herokuapp.com/api/jadwaltvnow`)
            const jdn = await jadwalNow.json()
            benny.reply(from, `Jam : ${jdn.result.jam}\n\nJadwalTV : ${jdn.result.jadwalTV}join\n`, id)
            break
	case '#lirik':
            if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 1) return benny.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            benny.reply(from, lirik, id)
            break
	case '#nulis':
		 if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length === 1) return benny.reply(from, 'Kirim perintah *#nulis [teks]*', id)
             const text = body.slice(7)
            benny.reply(from, mess.wait, id)
            const splitText = text.replace(/(\S+\s*){1,10}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 30).join('\n')
            spawn('convert', [
                './media/img/before.jpg',
                '-font',
                'IndieFlower-Regular',
                '-size',
                '700x960',
                '-pointsize',
                '25',
                '-interline-spacing',
                '1',
                '-annotate',
                '+170+222',
                fixHeight,
                './media/img/after.jpg'
            ])
            .on('error', () => benny.reply(from, 'Error gan', id))
            .on('exit', () => {
                benny.sendImage(from, './media/img/after.jpg', 'nulis.jpg', 'Nih gan dah jadi', id)
            })
            break
	case '#magernulis':
	if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
    if (args.length == 1) return benny.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
	benny.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${body.slice(12)}&apikey=WadoehhHengkerAbieezz`, 'nulis.jpg', 'Neh..', id)
	break
    case '#daftar':
            if (isRegistered) return await benny.reply(from, `Nomor kamu sudah terdaftar!, Kamu Tidak Bisa Mendaftar 2x\n Jika Ingin Lgout Ketik *#unreg*`, id)
			if (args.length === 1) return benny.reply(from, `Kirim perintah *#daftar <nama>*, contoh *#daftar Benny*`, id)
			arg = body.trim().split(' ')
			benny.reply(from, mess.write, id)
			const nimi = arg[1]
            const nimir = sender.id
                _registered.push(sender.id)
                fs.writeFileSync('./ingfo/registered.json', JSON.stringify(_registered))
                await benny.reply(from, `╭───「 *REGISTRASI* 」───
│++
│+ *Nama* : ${nimi}
│+ *Nick* : ${pushname}
│+ *Link NO* : wa.me/${nimir.replace(/[@c.us]/g, '')}
│+ *STATUS* : Maybe GAY
│+ *REGION : INDONESIA
│++
╰───────────────────
Terima kasih telah melakukan registrasi.
Total user terdaftar : ${_registered.length}

       ║▌│█║▌│ █║▌│█│║▌║
       ║▌│█║▌│ █║▌│█│║▌║
          
                         *_FrenzY X BOT_*`, id)
            break
	case '#unreg':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            let unreg = _registered.indexOf(sender.id)
                _registered.splice(unreg, 1)
                fs.writeFileSync('./ingfo/registered.json', JSON.stringify(_registered))
                return await benny.reply(from, `${pushname} telah logout dari FrenzYBOT!\nUntuk Daftar Lagi Ketik *#daftar <nama lo>*`, id)
            break
    case '#loli':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const loli = await get.get('https://mhankbarbar.herokuapp.com/api/randomloli').json()
            benny.sendFileFromUrl(from, loli.result, 'loli.jpeg', 'Lolinya om', id)
            break
    case '#waifu':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const waifu = await fetch(`https://api-jojo.herokuapp.com/api/waifu`)
            const waifus = await waifu.json()
            benny.sendFileFromUrl(from, waifus.image, 'Waifu.jpg', `➸ Name : ${waifus.name}\n➸ Description : ${waifus.desc}\n\n➸ Source : ${waifus.source}`, id)
            break	
    case '#husbu':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            benny.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break	
    case '#inu':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            benny.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Arti Inu Itu ANJING\nJangan Ngira Inu Itu Hentai :)')
            break
        case '#neko':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            benny.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
    case '#pokemon':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            q7 = Math.floor(Math.random() * 890) + 1;
            benny.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
		case '#coolteks':
	case '#cooltext':
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.leOOngth == 0) return benny.reply(from, `Untuk membuat teks keren CoolText pada gambar, gunakan ${prefix}cooltext teks\n\nContoh: ${prefix}cooltext arugaz`, id)
		rugaapi.cooltext(args[0])
		.then(async(res) => {
		await benny.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
		})
		break
	case '#ttp2':
           if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
           if (args.length === 1) return benny.reply(from, `Kirim perintah *#ttp2 [ Teks ]*, contoh *#ttp2 Elaina*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await benny.sendImageAsSticker(from, `https://docs-jojo.herokuapp.com/api/ttp?text=${ttp2t}&warna=${rttp2}`)
            break
	case '#pinterest':
			if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 1) return benny.reply(from, `Membuat bot men-screenshot sebuah web\n\nPemakaian: #ss [url]\n\ncontoh: #ss http://google.com`, id)
         const pinterest = body.slice(11)
	     const pinternya = await fetch(`https://api-zeks.harispoppy.com/api/pin?q=${pinterest}&apikey=apivinz`)
		 const pinter = await pinternya.json()
		 benny.sendFile(from, pinter.result, 'Pinter.jpg', 'Nih gan..', id)
		 break
    case '#ss':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            if (args.length == 1) return benny.reply(from, `Membuat bot men-screenshot sebuah web\n\nPemakaian: #ss [url]\n\ncontoh: #ss http://google.com`, id)
            const ss = body.slice(4)
			const scrinshit = await fetch(`https://api-zeks.harispoppy.com/api/ssweb?url=${ss}&apikey=apivinz`)
            const ssweb = await scrinshit.json()
		    benny.sendFile(from, ssweb.result, 'ss.jpg', 'cekrek', id)
            break
	case '#asupan':
	      if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		  const asupa = JSON.parse(fs.readFileSync('./lib/asupan.json')) 
		  let asupan = asupa[Math.floor(Math.random() * asupa.length)]
		  benny.sendFileFromUrl(from, asupan, 'asupan.mp4', '', id)
		  break
    
    case '#stickerasupan':
	case '#stickasupan':
	      if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		  const asupao = JSON.parse(fs.readFileSync('./lib/asupan.json')) 
		  let asupano = asupao[Math.floor(Math.random() * asupao.length)] 
		  benny.sendMp4AsSticker(from, asupano, 'asupano.gif', '', id)
		  break
    case '#help':
		case '#command':
		case '#perintah':
		case '#menu':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	      if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
 		  return await benny.reply(from, `Hi *${pushname}👋🏻* \n*Tanggal dan Waktu* : ${time}\n\n*JUMLAH USER FrenzYBOT* : *_${_registered.length}_*\n\n*${pushname}!* Mungkin Dari *${_registered.length}* User, Lo Yg Paling *Gay*\n\n*COVID - 19 DETIK DUNIA*\n${kopit}\n${help}\n\n*JUMLAH FEATURES : 114*`, id)
            break
	case '#menuowner':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isPilot) return await benny.reply(from, `Maaf ${pushname}, Perintah ini hanya untuk Owner bot!`, id)
		return await benny.reply(from, `Hi ${pushname}👋🏻 \n\n${menuowner}`, id)
		break
	case '#menusuperowner':
	    if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
	    if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isSuper) return await benny.reply(from, `Maaf ${pushname}, Perintah ini hanya untuk SuperOwner bot!`, id)
		return await benny.reply(from, `Hi ${pushname}👋🏻 \n\n${menusuperowner}`, id)
		break
        case '#readme':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.reply(from, readme, id)
            break	
        case 'anjing':
        case 'bangsat':
		case 'ngentot':
		case 'memek':
		case 'kontol':
		case 'kntl':
		case 'anjg':
		case 'ajg':
	    case 'asu':
		case 'mmk':
		case 'goblok':
		case 'gblk':
		case 'tolol':
		case 'tll':
              benny.sendPtt(from, './media/tts/kontol.mp3', id)
			  break
		case 'p':
		case 'Woy':
		case 'woy':
		case 'Bot':
		case 'bot':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
		    benny.sendText(from, 'Apa')
			break
		case '#botstat': {
			if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            const loadedMsg = await benny.getAmountOfLoadedMessages()
            const chatIds = await benny.getAllChatIds()
            const groups = await benny.getAllGroups()
            const blok = await benny.getBlockedIds()
            benny.sendText(from, `Status :\n- ${loadedMsg} Loaded Messages\n- ${groups.length} Group Chats\n- ${blok.length} Kontak Terblokir\n- ${chatIds.length - groups.length} Personal Chats\n- ${chatIds.length} Total Chats`)
            }
			break
		case 'assalamualaikum':
		case 'asalamualaikum':
		   return await benny.reply(from, 'Waalaikumsalam', id)
			break
			case '#antivirtex':
			return await benny.reply(from, `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhttps://youtube.com/c/bennyhidayat\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`, id)
			break
		case 'makasih':
		case 'terima kasih':
		case 'terima kasih':
		    return await benny.reply(from, 'Sama Sama Bre', id)
			break
		case '#daftarpremium':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (isPremium) return benny.sendText(from, `Nomor kamu sudah terdaftar di user premium`)
          const key = args[1]
	  if (key !== 'adadeh') return benny.reply(from, '*key* salah! silahkan chat owner bot unruk mendapatkan key yang valid', id)
	   _premium.push(sender.id)
   fs.writeFileSync('./lib/premium.json', JSON.stringify(_premium))
 await benny.reply(from, `╭───「 *PREMIUM USER* 」───
│++
│+ *Nama* : ${pushname}
│+ *Nomor* : wa.me/${sender.id}
│
╰───────────────────
Terima kasih telah melakukan pembayaran.
Total user premium : ${_premium.length}

       ║▌│█║▌│ █║▌│█│║▌║
       ║▌│█║▌│ █║▌│█│║▌║
          
                        *_FrenzY X BOT_*`, id)
   break
   case '#unprem':
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            let unprem = _premium.indexOf(sender.id)
                _premium.splice(unprem, 1)
                fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                return await benny.reply(from, `${pushname} telah keluar dari premium user!`, id)
            break
   case '#loveyou':
   if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
   return await benny.reply(from, `LoveYou Too >//<`, id)
   break
   case '#info':
   if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.sendLinkWithAutoPreview(from, 'https://github.com/FrenzY8', info)
            break
        case '#snk':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
            benny.reply(from, snk, id)
            break
		case '#pc':
		     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
             if (args.length == 0) return benny.reply(from, `Untuk Pribadi Chat, Silahkan ketik #pc [pesannya]`, id)
			  arg = body.trim().split(' ')
			  const poso = arg[1]
			  benny.sendText(pengirim, `${poso}\n\nFrenzY X BOT`)
			  await benny.reply(from, 'Silahkan cek pesan Bot', id)
			  break
		case '#chat':
		case '#chatdia':
		     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
             if (args.length == 0) return benny.reply(from, `Untuk  Chat Dia, Silahkan ketik #chat [pesannya]`, id)
			  arg = body.trim().split(' ')
			  const poson = arg[1]
			  benny.sendText(mentionedJidList, `KAMU MENDAPATKAN PESAN ! DARI: [${pengirim}] \n${poson}`)
			  await benny.reply(from, 'Berhasil chat dia', id)
			  break
		case '#bhwhatsapp':
		     if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
             const apk = 'https://www.mediafire.com/download/sv5q4pei2nhuv7v'
			  benny.sendFile(from, apk, '', 'BHWhatsApp.apk', id)
			 break
		case '#linkppbot':
		return await benny.reply(from, ppbot, id)
		     break
		case '#ppbot':
		     benny.sendFileFromUrl(from, ppbot, '', 'pp.jpg')
			 break
		case '#lapor':
		case '#report':
		if (isAfk) return await benny.reply(from, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		      if (!isRegistered) return await benny.reply(from, `Maaf *${pushname}!* Kamu Blum Login Di BOT Ini !!\nKamu Bisa Daftar Dengan Cara\n*#daftar <nama lo>*\n\nSetelah Login Kamu Akan Bisa Menikmati Fitur Dari *iFrenzYBOT !!*`, id)
              if (args.length == 0) return benny.reply(from, `Untuk lapor ke owner, Silahkan ketik #lapor [pesannya]`, id)
			  arg = body.trim().split(' ')
			  const keluhan = arg[1]
			  benny.sendText(saya, `*[REPORT]* \nDARI: [wa.me/${pengirim}] \n${keluhan}`)
			  await benny.reply(from, 'Terima Kasih atas laporannya', id)
			  break
		case 'iri':
		case 'Iri':
		    benny.sendPtt(from, './media/tts/iri.mp3', id)
			break
	    case '#wa.me':
        case '#wame':
            await benny.reply(from, `*This Is Your WhatsApp Number Link ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}*\n\n*or*\n\n*api.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}*`, id)
            break
        case '#profile':
            if (quotedMsg) return profile(quotedMsgObj.sender.id, message, fs, groupAdmins, client)
	    if (mentionedJidList.length >= 1) return profile(mentionedJidList[1], message, fs, groupAdmins, client)
	    return profile(sender.id, message, fs, groupAdmins, client)
            break
		}
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //benny.kill().then(a => console.log(a))
    }
}			
