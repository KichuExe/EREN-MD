const {cmd, isPublic} = require("../lib/plugins.js");
const util = require("util");

cmd({
name: "jid", fromMe: isPublic, category: "misc", desc: "Get jids of the chat.",
},
async ({
m,
client
}) => {
await m.reply(`${m.jid}`)
});

cmd({
name: "runtime", fromMe: isPublic, category: "misc", desc: "Get runtime of the bot.",
},
async ({
m,
client 
}) => {
await m.reply(`_*Runtime : ${await m.runtime()}*_`)
 });

cmd({
name: "uptime", fromMe: isPublic, category: "misc", desc: "Get uptime of the bot.",
},
async ({
m,
client 
}) => {
await m.reply(`_*Uptime : ${await m.uptime()}*_`)
 });

cmd({
name: "ping", fromMe: isPublic, category: "misc", desc: "Get response speed of the bot.",
},
async ({
m,
client 
}) => {
const start = new Date().getTime();   
let data = await m.sendMsg(m.jid,"*_Assessing..._*", {quoted:m});
const end = new Date().getTime();
var delay = end - start;
return await m.sendMsg(m.jid,`*_Network delay:${delay}ms_*`,{edit:data.key});
});
