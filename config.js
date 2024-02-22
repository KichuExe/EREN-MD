const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) {dotenv.config({path: './config.env'})}

const HANDLERS =  process.env.HANDLER === undefined ? "^[#]" : process.env.HANDLER;
const AUTHOR = process.env.AUTHOR || 'TOXIC-KICHUX';
const SUDO = process.env.SUDO || '919961857267,917594898804';
const OWNER_NAME = process.env.OWNER_NAME || 'TOXIC-KICHUX';
const BOT_NAME = process.env.BOT_NAME || 'EREN-MD';
const WORK_TYPE = process.env.WORK_TYPE || 'private';
const MENU_INFO = process.env.MENU_URL || 'https://i.imgur.com/gDREtnF.jpeg;https://instagram.com/withonly.kichu;https://i.imgur.com/OFX3CwB.jpeg'; //for image or video menu follow the steps [image/video url(false for text menu);source url; preview image url]
const DATABASE_URL = process.env.DATABASE_URL || './lib/database/database.db';
const DATABASE = DATABASE_URL === './lib/database/database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })  
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          native: true,
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      })

module.exports = {HANDLERS, AUTHOR, SUDO, OWNER_NAME, BOT_NAME, WORK_TYPE, DATABASE, MENU_URL};
