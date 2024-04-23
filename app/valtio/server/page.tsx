import { LibHeader } from '@/app/_components/LibHeader';
import { PageContainer } from '@/app/_components/PageContainer';
import { jokesMock } from '@/app/_data/jokes';

import { ToastContainer } from '../ToastContainer';

const ValtioServer = async () => {
  const toasts = await getData();

  return (
    <PageContainer>
      <LibHeader name="Valtio" server />
      <ToastContainer initial={toasts} />
    </PageContainer>
  );
};

const getData = async () => Promise.resolve([jokesMock[10], jokesMock[11], jokesMock[12], jokesMock[13], jokesMock[14], jokesMock[15]]);

export default ValtioServer;
