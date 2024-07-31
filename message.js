const Command = require('./command.js');
class Message {
   // Write code here!
   constructor(name, commands) {
      if(!name) {
        throw new Error('Name required.');
     }
      this.name = name;
      this.commands = commands;
   }
}

module.exports = Message;