
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study dpm please make sure you have pass programming 1(COMP500)');
};
