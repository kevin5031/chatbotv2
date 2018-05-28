
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study se please make sure you have pass Program Design & Construction (COMP603) or COMP610 Data Structures & Algorithms.');
};
