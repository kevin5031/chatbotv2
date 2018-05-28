
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study pdc please make sure you have pass programming 2(COMP503) and core paper Data Process Modelling (INFS600).');
};
