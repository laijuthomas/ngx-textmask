import {placeholderChar as defaultPlaceholderChar} from './constants';

const emptyArray: any[] = [];

export function convertMaskToPlaceholder(mask: (string | RegExp)[] = emptyArray, placeholderChar: string = defaultPlaceholderChar) {
  if (!isArray(mask)) {
    throw new Error(
      'Text-mask:convertMaskToPlaceholder; The mask property must be an array.'
    );
  }

  if (mask.indexOf(placeholderChar) !== -1) {
    throw new Error(
      'Placeholder character must not be used as part of the mask. Please specify a character ' +
      'that is not present in your mask as your placeholder character.\n\n' +
      `The placeholder character that was received is: ${JSON.stringify(placeholderChar)}\n\n` +
      `The mask that was received is: ${JSON.stringify(mask)}`
    );
  }

  return mask.map((char) => {
    return (char instanceof RegExp) ? placeholderChar : char;
  }).join('');
}

export function isArray(value: any): value is any[] {
  return (Array.isArray && Array.isArray(value)) || value instanceof Array;
}

export function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}

export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isNil(value: any): value is null | undefined {
  return typeof value === 'undefined' || value === null;
}

const strCaretTrap = '[]';
export function processCaretTraps(mask: (string | RegExp)[]) {
  const indexes: number[] = [];

  let indexOfCaretTrap: number;
  while(indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
    indexes.push(indexOfCaretTrap);

    mask.splice(indexOfCaretTrap, 1);
  }

  return {maskWithoutCaretTraps: mask, indexes};
}
