import { renderToString } from 'react-dom/server';
import App from './App';

/** Render one route to static HTML for the build-time prerender. */
export function render(url) {
  return renderToString(<App url={url} />);
}

export { pages, indexablePages, siteUrl, absolute, ogImage, structuredData } from './data/seo';
