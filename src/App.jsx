import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Cursor from './components/Cursor';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import NotFoundPage from './pages/NotFoundPage';
import { pages } from './data/seo';

/** Where the policy used to live, before it became a real URL. */
const LEGACY_POLICY_HASH = '#privacy-policy';

/** `/privacy-policy`, `/privacy-policy/` and `/privacy-policy/?x=1` are one page. */
export function normalisePath(raw = '/') {
  const path = String(raw).split('?')[0].split('#')[0];
  if (path === '' || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function pageFor(path) {
  if (path === pages.home.path) return { meta: pages.home, View: HomePage };
  if (path === pages.privacy.path) return { meta: pages.privacy, View: PrivacyPolicyPage };
  if (path === pages.terms.path) return { meta: pages.terms, View: TermsConditionsPage };
  return { meta: pages.notFound, View: NotFoundPage };
}

/**
 * `url` is supplied when rendering on the server at build time; in the browser
 * we read the address bar. Navigation between the two pages is ordinary
 * document navigation over crawlable <a href> links, so there is no
 * client-side router to keep in sync.
 */
export default function App({ url }) {
  const path = normalisePath(
    url ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  );
  const { View } = pageFor(path);

  useEffect(() => {
    // Anyone arriving on an old /#privacy-policy link lands on the real page.
    if (window.location.hash === LEGACY_POLICY_HASH) {
      window.location.replace(pages.privacy.path);
      return;
    }
    // The markup is already in the HTML, but re-assert the anchor position in
    // case fonts or images shifted the layout between parse and hydration.
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, []);

  return (
    <>
      <Header />
      <View />
      <Footer />
      <BackToTop />
      <Cursor />
    </>
  );
}
