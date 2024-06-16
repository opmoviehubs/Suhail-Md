const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923007521749";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_28_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDc2LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlmc2hETmpuTXViUFBya2h3dWFKcW1nMmxDMDZnbkZkcGw0LzVwOVkwaVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRZLThQNkJpU2llTEdSckpTdnRsV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTlkNmJiMjktMThmYS00MzRiLWI3MzQtMmIyYjI5Nzc1NmUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTcyLFxuICAgICAgMjgsXG4gICAgICAyMzEsXG4gICAgICA4OCxcbiAgICAgIDIyMyxcbiAgICAgIDIwOSxcbiAgICAgIDQwLFxuICAgICAgMjQ0LFxuICAgICAgMTM0LFxuICAgICAgMjAwLFxuICAgICAgMTIsXG4gICAgICAxODAsXG4gICAgICAxOTgsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDI5LFxuICAgICAgNTksXG4gICAgICAxMzAsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTc2LFxuICAgICAgMTY2LFxuICAgICAgMTc1LFxuICAgICAgMjU1LFxuICAgICAgNjUsXG4gICAgICAyNDgsXG4gICAgICAxMzksXG4gICAgICA4OCxcbiAgICAgIDE5NSxcbiAgICAgIDEyNSxcbiAgICAgIDIxMyxcbiAgICAgIDIwMyxcbiAgICAgIDgwLFxuICAgICAgMTQwLFxuICAgICAgMjIzLFxuICAgICAgMTYyLFxuICAgICAgMzAsXG4gICAgICAxMTIsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzM0RVY3M1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwNzUyMTc0OTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyMzk4MDc4Njc3MjMyOjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTam03b0NFTzZWdmJNR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYVdpeEZKRFdSRldzU1E0ZW1CNUw0dUg2eXhCTEo4NS8vNEFGRnFibjdoMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4ckQwOVFBWnc4RGgxRzVoSCthVVVDSEFxNWRDSDFXdkdDcjBVdmRER0VCdUlJMkxSY1JRVGlpMmp2TjhPTHRaZTcycW9LYWZFMllDZktYb0Zsa3ZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTaGtzQzR5SlQrSUxwK3ltdGwwdW5LbFIvTjYyb2ZkOTlITlpITTZmcWkvc3FRSm5WVkllOEo0bFV0UkIwbGJnTmxGdTlUOS9YRCtSQ2NudFNPcmdDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMDc1MjE3NDk6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1Njk3MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGenpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ6ei5qc29uIjogIntcImtleURhdGFcIjpcIk5tTE9rcFEvY1huZzNuNWEweEsyU1RPdGFQZHFLV1RYWUJjSGNYZVJrRjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU4OTUyNjEyLFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3OTc2NzMzMTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
