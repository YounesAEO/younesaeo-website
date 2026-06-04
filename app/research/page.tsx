'use client';

import { useEffect, useRef } from 'react';

export default function Research() {
	const iframeRef = useRef<HTMLIFrameElement>(null);

	// The pipeline page is a self-contained static doc served from /public.
	// It's same-origin, so we can read its content height and size the iframe
	// to match — giving a single, seamless page scroll instead of a nested one.
	useEffect(() => {
		const iframe = iframeRef.current;
		if (!iframe) return;

		let observer: ResizeObserver | null = null;

		const resize = () => {
			const doc = iframe.contentDocument;
			if (!doc) return;
			iframe.style.height = `${doc.documentElement.scrollHeight}px`;
		};

		const onLoad = () => {
			resize();
			const doc = iframe.contentDocument;
			if (doc && 'ResizeObserver' in window) {
				observer = new ResizeObserver(resize);
				observer.observe(doc.documentElement);
			}
		};

		iframe.addEventListener('load', onLoad);
		// In case the iframe is already loaded before the effect runs.
		if (iframe.contentDocument?.readyState === 'complete') onLoad();

		window.addEventListener('resize', resize);

		return () => {
			iframe.removeEventListener('load', onLoad);
			window.removeEventListener('resize', resize);
			observer?.disconnect();
		};
	}, []);

	return (
		<iframe
			ref={iframeRef}
			src="/research/pipeline.html"
			title="founder-research-agent · pipeline"
			className="block w-full border-0"
			style={{ height: '100vh' }}
		/>
	);
}
