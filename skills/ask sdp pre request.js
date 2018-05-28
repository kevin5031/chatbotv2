
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study sdp please make sure you have pass Program Design & Construction (COMP603) or Data Structures & Algorithms (COMP610) and core request Data & Process Modelling (COMP600).');
};
