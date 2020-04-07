import { useCallback, useEffect } from 'react'; 

export type WatchProps = {
	target: Element,
	callback : IntersectionObserverCallback,
	options: IntersectionObserverInit
}; 
export type IntersectionCallbackProps = {
	entries: IntersectionObserverEntry[],
	observer: IntersectionObserver
}
export type IntersectionCallbackRefProps = {
	(
		entries: IntersectionObserverEntry[],
		observer: IntersectionObserver,
		sideEffect: () => void
	) : void
}
export const callback: IntersectionCallbackRefProps = ( entries: IntersectionObserverEntry[], observer: IntersectionObserver, sideEffect: () => void) : void => {
	return entries.forEach( entry => {
		if( entry.intersectionRatio === 1 ){
			sideEffect();			
		}
	})
}
export const watchRef = useCallback(({target, callback, options} : WatchProps) => {
	const observer = new IntersectionObserver(callback, options);
	
	useEffect(() => {
		observer.observe(target);

		return () => observer.disconnect(); 
	});
	
	 
},[callback]);

