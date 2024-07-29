class Command {
   constructor(commandType, value = null) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
}
 
 module.exports = Command;