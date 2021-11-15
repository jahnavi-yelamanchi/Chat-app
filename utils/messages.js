/*const moment= require('moment');

function formatMessage(username,text){
    return{
        username,
        text,
        time: moment().format('h:mm a')
    };
}

module.export = formatMessage;*/

const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;