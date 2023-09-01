import MainLayout from 'src/layouts/main';
import HomeView from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'pandora',
};

export default function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
