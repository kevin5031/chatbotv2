
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study dms please make sure you have pass COMP611 Algorithm Design & Analysis.');
};
