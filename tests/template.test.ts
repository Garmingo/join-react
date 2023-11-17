/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */
import { fib } from '../src/index';

test('Test the fibonacci function', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
    expect(fib(7)).toBe(13);
    expect(fib(8)).toBe(21);
    expect(fib(9)).toBe(34);
    expect(fib(10)).toBe(55);
    expect(fib(11)).toBe(89);
    expect(fib(12)).toBe(144);
    expect(fib(13)).toBe(233);
    expect(fib(14)).toBe(377);
    expect(fib(15)).toBe(610);
    expect(fib(16)).toBe(987);
    expect(fib(17)).toBe(1597);
    expect(fib(18)).toBe(2584);
    expect(fib(19)).toBe(4181);
    expect(fib(20)).toBe(6765);
    expect(fib(21)).toBe(10946);
    expect(fib(22)).toBe(17711);
    expect(fib(23)).toBe(28657);
    expect(fib(24)).toBe(46368);
    expect(fib(25)).toBe(75025);
    expect(fib(26)).toBe(121393);
    expect(fib(27)).toBe(196418);
    expect(fib(28)).toBe(317811);
    expect(fib(29)).toBe(514229);
    expect(fib(30)).toBe(832040);
    expect(fib(31)).toBe(1346269);
    expect(fib(32)).toBe(2178309);
    expect(fib(33)).toBe(3524578);
    expect(fib(34)).toBe(5702887);
    expect(fib(35)).toBe(9227465);
    expect(fib(36)).toBe(14930352);
    expect(fib(37)).toBe(24157817);
    expect(fib(38)).toBe(39088169);
    expect(fib(39)).toBe(63245986);
    expect(fib(40)).toBe(102334155);
    expect(fib(41)).toBe(165580141);
});
