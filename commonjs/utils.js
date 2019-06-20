const utils = {
    add(...numbers){
        let sum = 0;
        for(let i in numbers){
            sum += numbers[i]
        }
        return String(sum);
    }
}

module.exports = utils