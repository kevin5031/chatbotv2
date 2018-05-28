
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study pdd please make sure you have pass Programming 2 (COMP503) and INFS601 Logical Database Design.');
};
