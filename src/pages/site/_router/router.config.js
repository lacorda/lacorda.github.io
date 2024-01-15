import Demo from '../_views/demo';
import NotFound from '../_views/notFound';
import FirstChild from '../_views/html-css/first-child';
import CssTrickTransitionFromHeight0toauto from '../_views/html-css/CSS-trick_transition-from-height0toauto';
import UseEffectDemo from '../_views/react-hooks/useEffect';
import UseCallbackDemo from '../_views/react-hooks/useCallback';
import UseMemoDemo from '../_views/react-hooks/useMemo';
import Element from '../_views/devtools/element';

export default [
  {
    path: "/tools/demo",
    Component: Demo,
  },
  {
    path: "/html-css/first-child",
    Component: FirstChild,
  },
  {
    path: "/html-css/CssTrickTransitionFromHeight0toauto",
    Component: CssTrickTransitionFromHeight0toauto,
  },
  {
    path: "/react-hooks/useEffect",
    Component: UseEffectDemo,
  },
  {
    path: "/react-hooks/useCallback",
    Component: UseCallbackDemo,
  },
  {
    path: "/react-hooks/useMemo",
    Component: UseMemoDemo,
  },
  {
    path: "/devtools/element",
    Component: Element,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
