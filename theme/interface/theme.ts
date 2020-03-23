import { Color } from 'theme/interface/color';

export interface Theme<
	ColorType = Color
> {
	colors: Readonly<ColorType & Color>;
}