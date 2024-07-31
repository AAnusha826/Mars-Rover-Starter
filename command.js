class Command {
   constructor(commandType, value) {
     
     if (!commandType) {
       throw new Error("Command type required.");
     }
     this.commandType = commandType;
     this.value = value;
   }
}
 
 module.exports = Command;