class RandomGenerator {
    static getUID(min = 11111111, max = 99999999) {
        return Math.round(min + (Math.random() * (max - min)));
    }
}

export default RandomGenerator;
