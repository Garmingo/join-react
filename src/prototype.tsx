/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */
import { ReactNode } from 'react';
import { joinReact } from '.';

declare global {
    interface Array<T> {
        /**
         * Joins the elements of an array into a ReactNode
         * @param separator The separator to be inserted between each element
         * @returns A ReactNode containing the elements of the array
         */
        joinReact: (separator: ReactNode) => ReactNode;
    }
}

// Export the joinReact extension to be used as a separate function
Array.prototype.joinReact = function (separator: ReactNode) {
    return joinReact(this, separator);
}