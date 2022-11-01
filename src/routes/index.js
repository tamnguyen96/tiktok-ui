import { HeaderOnlyLayout } from '~/components/Layout';
import UploadLayout from '~/components/Layout/Upload';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: UploadLayout, layout: HeaderOnlyLayout },
  { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
