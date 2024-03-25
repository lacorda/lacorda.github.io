import NotFound from '../_views/notFound';
import Two01 from '../_views/2D/01';

export default [
  {
    path: "/2D/01",
    Component: Two01,
  },
  {
    path: "/3D/01",
    Component: Two01,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
