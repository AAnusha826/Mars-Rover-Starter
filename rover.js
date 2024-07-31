const Command = require('./command');
const Message = require('./message');
class Rover {
    constructor(position) {
        this.position = position;
        if (!position) {
          throw Error('position required.');
        }
        this.mode = 'NORMAL';
        this.generatorWatts = 110;
      }
      receiveMessage(message) {
        let results = message.commands.map(command => {
            if (command.commandType === 'MOVE') {
                if (this.mode === 'LOW_POWER') {
                    return { completed: false };
                } else {
                    this.position = command.value;
                    return { completed: true };
                }
            } else if (command.commandType === 'MODE_CHANGE') {
                this.mode = command.value;
                return { completed: true };
            } else if (command.commandType === 'STATUS_CHECK') {
                return {
                    completed: true,
                    roverStatus: {
                        position: this.position,
                        mode: this.mode,
                        generatorWatts: this.generatorWatts
                    }
                };
            }
        });

        return {
            message: message.name,
            results: results
        };
    }
}
    module.exports = Rover;