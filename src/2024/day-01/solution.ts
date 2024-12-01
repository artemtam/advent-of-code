export const solvePart1 = (input: string): number => {
    const listA: number[] = [];
    const listB: number[] = [];

    for (const line of input.trim().split('\n')) {
        const [a, b] = line.trim().split('   ');

        listA.push(Number.parseInt(a, 10));
        listB.push(Number.parseInt(b, 10));
    }

    // sort both lists

    listA.sort((a, b) => a - b);
    listB.sort((a, b) => a - b);

    // calculate distance

    let distance = 0;

    for (let i = 0; i < listA.length; i++) {
        distance += Math.abs(listA[i] - listB[i]);
    }

    return distance;
};

export const solvePart2 = (input: string): number => {
    const listA: number[] = [];
    const listB = new Map<number, number>(); // value -> count

    for (const line of input.trim().split('\n')) {
        const values = line.trim().split('   ');

        const a = Number.parseInt(values[0], 10);
        const b = Number.parseInt(values[1], 10);

        listA.push(a);
        listB.set(b, (listB.get(b) ?? 0) + 1);
    }

    let score = 0;

    for (const a of listA) {
        score += a * (listB.get(a) ?? 0);
    }

    return score;
};
