const {join} = require('path')

const commandMap = (jobID, language) => {
    switch (language) {
        
        case 'cpp':
            return {
                compileCodeCommand: 'g++',
                compilationArgs: [
                    join(process.cwd(), `codes/${jobID}.cpp`),
                    '-o',
                    join(process.cwd(), `outputs/${jobID}.out`)
                ],
                executeCodeCommand: join(process.cwd(), `outputs/${jobID}.out`),
                outputExt: 'out',
                compilerInfoCommand: 'g++ --version'
            };
        case 'py':
            return {
                executeCodeCommand: 'python3',
                executionArgs: [
                    join(process.cwd(), `codes/${jobID}.py`)
                ],
                compilerInfoCommand: 'python3 --version'
            }
    }
}

const supportedLanguages = ['cpp', 'py'];

module.exports = {commandMap, supportedLanguages}