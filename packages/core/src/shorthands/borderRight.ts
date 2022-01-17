import type { BorderColorProperty, BorderStyleProperty, BorderWidthProperty } from 'csstype';
import type { GriffelStylesStrictCSSObject, GriffelStylesCSSValue } from '../types';

type BorderRightStyle = Pick<
  GriffelStylesStrictCSSObject,
  'borderRightWidth' | 'borderRightStyle' | 'borderRightColor'
>;

export function borderRight(width: BorderWidthProperty<GriffelStylesCSSValue>): BorderRightStyle;
export function borderRight(
  width: BorderWidthProperty<GriffelStylesCSSValue>,
  style: BorderStyleProperty,
): BorderRightStyle;
export function borderRight(
  width: BorderWidthProperty<GriffelStylesCSSValue>,
  style: BorderStyleProperty,
  color: BorderColorProperty,
): BorderRightStyle;

/**
 * A function that implements expansion for "border-right", it's simplified - check usage examples.
 *
 * @example
 *  borderRight('2px')
 *  borderRight('2px', 'solid')
 *  borderRight('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
 */
export function borderRight(
  ...values: [BorderWidthProperty<GriffelStylesCSSValue>, BorderStyleProperty?, BorderColorProperty?]
): BorderRightStyle {
  return {
    borderRightWidth: values[0],
    ...(values[1] && ({ borderRightStyle: values[1] } as BorderRightStyle)),
    ...(values[2] && { borderRightColor: values[2] }),
  };
}