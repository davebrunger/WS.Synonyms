export class Randomizer {
    public static random(maxValueExclusive: number) {
        return Math.floor(Math.random() * maxValueExclusive);
    }
}