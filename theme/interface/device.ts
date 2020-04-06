import {
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

export interface BaseDevice {
  xl: (
    s: CSSObject | TemplateStringsArray,
    ...ss: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
  lg: (
    s: CSSObject | TemplateStringsArray,
    ...ss: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
  md: (
    s: CSSObject | TemplateStringsArray,
    ...ss: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
  sm: (
    s: CSSObject | TemplateStringsArray,
    ...ss: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
  xs: (
    s: CSSObject | TemplateStringsArray,
    ...ss: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
}

export interface Device extends BaseDevice {
  lt: BaseDevice;
  gt: BaseDevice;
}
