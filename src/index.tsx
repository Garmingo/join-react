/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */
import React, { ReactNode } from 'react';

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

Array.prototype.joinReact = function (separator: ReactNode) {
    const joinedElements: ReactNode[] = [];

    if (this.length === 0) {
        // No elements, so just return empty node
        return <></>;
    }

    if (this.length === 1) {
        // Only one element, so just return it
        return React.isValidElement(this[0]) ? this[0] : <>{this[0]}</>;
    }


    this.forEach((child, index) => {
        // Check if the child is a React element or not
        // If not, wrap it in a fragment
        if (React.isValidElement(child)) {
            joinedElements.push(child);
        } else {
            joinedElements.push(<>{child}</>);
        }

        if (separator === null) {
            // No separator, so just return the child
            return;
        }

        if (index < this.length - 1) {
            // Add the separator component between elements
            joinedElements.push(separator);
        }
    });

    return <>{joinedElements}</>;
};

// Export the joinReact extension to be used as a separate function
export const joinReact = Array.prototype.joinReact;