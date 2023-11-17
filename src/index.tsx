/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */
import React, { ReactElement, ReactNode } from 'react';


/**
 * Joins the elements of an array into a ReactNode
 * @param array The array to join
 * @param separator The separator to be inserted between each element
 * @returns A ReactNode containing the elements of the array
 */
export function joinReact(array: any[], separator: ReactNode) {
    const joinedElements: ReactNode[] = [];

    if (array.length === 0) {
        // No elements, so just return empty node
        return <></>;
    }

    if (array.length === 1) {
        // Only one element, so just return it
        return React.isValidElement(array[0]) ? array[0] : <>{array[0]}</>;
    }


    array.forEach((child, index) => {
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

        if (index < array.length - 1) {
            // Add the separator component between elements
            joinedElements.push(separator);
        }
    });

    // return and add key props
    return <>{joinedElements.map((element, index) => React.cloneElement(element as ReactElement, { key: index }))}</>;
};

/**
 * Joins the elements of an array into a ReactNode
 * @param param0 The array to join and the separator to be inserted between each element
 * @returns A ReactNode containing the elements of the array
 */
export function JoinReact({ array, separator }: { array: any[], separator: ReactNode }) {
    return joinReact(array, separator);
}