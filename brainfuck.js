const MAX_V = 255, MIN_V = 0;
let buf = [], ptr = 0;

let parseDepth = 0, statementArray = [[]];
require("fs").readFileSync(process.argv[2], "utf-8").replaceAll(/(?:\r\n|\r|\n)/g, "").split("").forEach(char => {
    switch (char) {
        case "[":
            parseDepth++;
            statementArray[parseDepth] = [];
            break;
        case "]":
            parseDepth--;
            statementArray[parseDepth].push(statementArray[parseDepth + 1]);
            break;
        default:
            statementArray[parseDepth].push(char);
    }
});
statementArray = statementArray[0];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const exec = async (code) => {
    for (let statement of code) {
        if (typeof statement === "string") switch (statement) {
            case "+":
                buf[ptr] === undefined ? buf[ptr] = 1 : buf[ptr] === MAX_V ? buf[ptr] = MIN_V : buf[ptr]++;
                break;
            case "-":
                buf[ptr] === undefined ? buf[ptr] = MAX_V : buf[ptr] === MIN_V ? buf[ptr] = MAX_V : buf[ptr]--;
                break;
            case ">":
                ptr++;
                break;
            case "<":
                if (ptr !== 0) ptr--;
                break;
            case ".":
                process.stdout.write(String.fromCharCode(buf[ptr]));
                break;
            case ",":
                buf[ptr] = await new Promise(resolve => readline.question("Enter one char: ", v => resolve(v.charAt(0))));
                break;
        } else {
            while (buf[ptr] !== 0) {
                await exec(statement);
                if (buf[ptr] === 0) break;
            }
        }
    }
}
(async () => {
    await exec(statementArray);
    process.exit(0);
})();
