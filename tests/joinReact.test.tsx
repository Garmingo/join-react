/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */
import React from 'react';
import { joinReact } from '../src/index';

test('joinReact function joins React elements with a separator', () => {
  const elementsToJoin = [
    <span key="1">Hello</span>,
    <span key="2">World</span>,
    <span key="3">!</span>,
  ];

  const result = joinReact.call(elementsToJoin, <span key="separator">, </span>);


  const expectedOutput = (
    <>
      <span key="1">Hello</span>
      <span key="separator">, </span>
      <span key="2">World</span>
      <span key="separator">, </span>
      <span key="3">!</span>
    </>
  );

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins React elements without a separator', () => {
  const elementsToJoin = [
    <span key="1">Hello</span>,
    <span key="2">World</span>,
    <span key="3">!</span>,
  ];

  const result = joinReact.call(elementsToJoin, null);


  const expectedOutput = (
    <>
      <span key="1">Hello</span>
      <span key="2">World</span>
      <span key="3">!</span>
    </>
  );

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins React elements with a separator and a single element', () => {
  const elementsToJoin = [<span key="1">Hello</span>];

  const result = joinReact.call(elementsToJoin, <span key="separator">, </span>);


  const expectedOutput = <span key="1">Hello</span>;

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins React elements without a separator and a single element', () => {
  const elementsToJoin = [<span key="1">Hello</span>];

  const result = joinReact.call(elementsToJoin, null);


  const expectedOutput = <span key="1">Hello</span>;

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins React elements with a separator and no elements', () => {
  const elementsToJoin: React.ReactNode[] = [];

  const result = joinReact.call(elementsToJoin, <span key="separator">, </span>);


  const expectedOutput = <></>;

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins React elements without a separator and no elements', () => {
  const elementsToJoin: React.ReactNode[] = [];

  const result = joinReact.call(elementsToJoin, null);


  const expectedOutput = <></>;

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins strings with a separator', () => {
  const elementsToJoin = ['Hello', 'World', '!'];

  const result = joinReact.call(elementsToJoin, <span key="separator">, </span>);


  const expectedOutput = (
    <>
      <>Hello</><span key="separator">, </span><>World</><span key="separator">, </span><>!</>
    </>
  );

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins strings without a separator', () => {
  const elementsToJoin = ['Hello', 'World', '!'];

  const result = joinReact.call(elementsToJoin, null);


  const expectedOutput = (
    <>
      <>Hello</><>World</><>!</>
    </>
  );

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins strings with a separator and a single element', () => {
  const elementsToJoin = ['Hello'];

  const result = joinReact.call(elementsToJoin, <span key="separator">, </span>);


  const expectedOutput = <>Hello</>;

  expect(result).toEqual(expectedOutput);
});

test('joinReact function joins numbers with a separator', () => {
  const elementsToJoin = [1, 2, 3];

  const result = joinReact.call(elementsToJoin, <span key="separator">, </span>);


  const expectedOutput = (
    <>
      <>1</><span key="separator">, </span><>2</><span key="separator">, </span><>3</>
    </>
  );

  // Compare the string representations of the elements instead of the elements themselves to avoid errors due to React's internal representation of elements
  expect(result!.toString()).toEqual(expectedOutput.toString());
});

test('joinReact function joins numbers without a separator', () => {
  const elementsToJoin = [1, 2, 3];

  const result = joinReact.call(elementsToJoin, null);

  const expectedOutput = (
    <>
      <>1</><>2</><>3</>
    </>
  );

  // Compare the string representations of the elements instead of the elements themselves to avoid errors due to React's internal representation of elements
  expect(result!.toString()).toEqual(expectedOutput.toString());
});