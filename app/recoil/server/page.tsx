import { LibHeader } from '@/app/_components/LibHeader';
import { PageContainer } from '@/app/_components/PageContainer';
import { jokesMock } from '@/app/_data/jokes';
import { ToastContainer } from '../ToastContainer';

const StateServer = async () => {
  const toasts = await getData();

  return (
    <PageContainer>
      <LibHeader name="Recoil" server />
      <ToastContainer initial={toasts} />
    </PageContainer>
  );
};

const getData = async () =>
  Promise.resolve([jokesMock[3], jokesMock[4], jokesMock[5]]);

export default StateServer;
