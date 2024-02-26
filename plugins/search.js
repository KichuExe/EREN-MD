const {cmd, isPublic} = require("../lib/plugins.js");
const {FindMusic} = require("../lib/message.js");

cmd({
name: "find", fromMe: isPublic, category: "search", desc: "Finds music metadata from replied audio/video.", category: "misc",
},
async ({
m,
client
}) => {
if (!m.quoted || !(m.quoted.message.audioMessage || m.quoted.message.videoMessage)) {
return m.reply("_*Reply to audio/video message!*_");
}
let msg = await m.sendMsg(m.jid, "*_Please wait..._*",{quoted:m});
try {
return await FindMusic(m, client);
} catch (e) {
await m.sendMsg(m.jid,"_*No result found!*_",{edit:msg.key});
return await m.reporterror(e);
}
});
