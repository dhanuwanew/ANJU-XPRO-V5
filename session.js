//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9JaHZoYi9USW41cTJocW1HblBwOFdGdStGazlFNTNEVVdJaVJiTEQwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFVtN0Z4NUJiQ0JvdUNkR1hXRDZwc3BnMHkxb1FycU9iUGpJYTI5TTdSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQTd0SmJIZHRTYWVSMkVRUmhzOHNaaHJOT0ludUVSdTRlVFh4VHZISTBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtenZPLzlPcjY1dmI1cm02TnUybUlPVDBqRHVYWC9zNEJJRFJoUUJUYm13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKR1ZpOEx5b1hTWlNpa1dpemNjVmdOdkxJcXFSK3FaWnNBWnZsWGZja3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhkSkwzK1UvcHlNdEtOcG0wQys0MEtBVzd2ME9Uc3N2WFN4TGxYRWtMVU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUYzWlNRem1GNjlaV3g2Yk12VzNnRGd6TmRhMmVGLzBtRE9FY1BRQ1RXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXZRMGl4S2VEeXpXU1Q5ZS9rOGF3SWFSSmVNMGRWR2l6eS84KzJmL1RSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDODVCcTcxV1BsNnBuZnNxOWkxNTh2QUg2aXZkVjJETEcyQ1N1eXFnMnUxcFFSaGRMOHEzRTJNWEMxTTFSM09RK1RqUG1Nd25ua0F2VDFXdnQzVkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiIxOUp0ZGhLd2Z4YkRMSDBzWk9RWmEzcVdpL2Z6VG5wM0RHcmpRanBvSEhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYxMDQ3MjU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA5MzhENkM1RDI1QTFGRDZCRkMwNUQ0NUVFRjg2RkEyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE1OTc3NDR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9teGVxeUpDUkVtaHZQTVRlMXFQY0EiLCJwaG9uZUlkIjoiMjJlNWMwMDQtNzc4Zi00YjUxLTkyNDAtMzNmZDdiMGZmMTRlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA0MkZtWkg4bUtIcTlaaXlSUXJ2UUVOYVYxQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXVm1qcUt1U21CQjFReG1nMWdqNTA5VDVzWGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUNHR0RSNUsiLCJtZSI6eyJpZCI6Ijk0NzYxMDQ3MjU0OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjQ2NDc4NjUzMTk1MjE6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05hVDVNSUdFS0tGbmNNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNEYTMrZmU3NndVSkRYaUNYZS8yeTlqNlBSeXhsUG1VckpxRFVnZGwwV0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBuMVFIZTBiRVpzMzdwYnRqcFBGTU4vZWdXS0Y4QVhQRTBPOG9STFp0ZmhBMG9Ed2xYUWxrQVJadDVuY0RzZ0lrYmZxcXpKS2hIdUR4RXBhVVpFd0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMSGF2TEFVdW8rRWg0L0xqYWgyNTdXazcxUUx5YW9DUUJJSElpRXFkOTlNZGtHcitLR3VCZDFVYWdEcVRuZHNOVGpHdzNCTWFXUW5jVHl3eEhjdTdCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYxMDQ3MjU0OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEEydC9uM3Urc0ZDUTE0Z2wzdjlzdlkrajBjc1pUNWxLeWFnMUlIWmRGaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNTk3NzQyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVh2In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94761047254",
  PASSWORD: 
    process.env.PASSWORD || "Dhanuka12",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94701669543", "94761047254"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
