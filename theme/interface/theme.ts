import { Color } from 'theme/interface/color';
import { ZIndex} from 'theme/interface/zIndex';
import { ViewPort } from 'theme/interface/viewport';
export interface Theme<
	ColorType = Color,
	ZIndexType = ZIndex,
	ViewPortType = ViewPort
> {
	colors: Readonly<ColorType & Color>;
	zIndex: Readonly<ZIndexType & ZIndex>; 
	viewPort: Readonly<ViewPortType & ViewPort>; 
}