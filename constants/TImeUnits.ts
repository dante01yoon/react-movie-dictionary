export enum TimeUnit {
	MS = 1,
	SECOND = TimeUnit.MS * 1000, 
	MINUTE = TimeUnit.SECOND * 60,
	HOUR = TimeUnit.MINUTE * 60,
	DAY = TimeUnit.HOUR * 24, 
}
