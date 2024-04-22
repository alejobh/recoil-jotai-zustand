import { LibHeader } from '@/app/_components/LibHeader';
import { PageContainer } from '@/app/_components/PageContainer';
import { jokesMock } from '@/app/_data/jokes';
import { ToastContainer } from '../ToastContainer';

const ZustandServer = async () => {
  const toasts = await getData();

  return (
    <PageContainer>
      <LibHeader name="Zustand" server />
      <ToastContainer initial={toasts} />
    </PageContainer>
  );
};

const getData = async () => Promise.resolve([jokesMock[1], jokesMock[2]]);

export default ZustandServer;
