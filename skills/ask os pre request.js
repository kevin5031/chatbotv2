
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'When you want study os please make sure you have pass Foundations of IT Infrastructure (COMP502) and Programming 2 (COMP503) or Data Structures & Algorithms (COMP610)');
};
