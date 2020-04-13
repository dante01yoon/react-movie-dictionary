import { observable, computed } from 'mobx';
import { CommonMv } from 'models/movie'; 
export class MovieVM {
	@observable PopularMv: CommonMv = {} as CommonMv;
	@observable TopRatedMv: CommonMv = {} as CommonMv;
	
}