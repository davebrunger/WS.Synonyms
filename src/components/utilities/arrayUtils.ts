import { Randomizer } from "./randomizer"

export class ArrayUtils {
    
    public static range(maxValueExclusive: number) {
        return Array.apply(null, {length : maxValueExclusive}).map(Number.call, Number) as number[];
    }

    public static shuffle<T>(source: T[]) {
        var indexes = ArrayUtils.range(source.length);

        for (var i = indexes.length - 1; i > 0; i--) {
            var n = Randomizer.random(i + 1);
            var temp = indexes[i];
            indexes[i] = indexes[n];
            indexes[n] = temp;
        }

        return indexes.map(n => source[n]);
    }

    public static distinct<T>(source: T[]) {
        return source.filter((value, index, self) => self.indexOf(value) === index);
    }
}