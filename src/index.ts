/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */


/**
 * This is an example function
 * It returns the n-th fibonacci number
 * @param n The n-th fibonacci number to return
 * @returns The n-th fibonacci number
 */
export function fib(n: number): number {
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}