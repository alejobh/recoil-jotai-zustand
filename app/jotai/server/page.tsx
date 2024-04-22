import { Provider } from 'jotai';

import { LibHeader } from '@/app/_components/LibHeader';
import { PageContainer } from '@/app/_components/PageContainer';
import { jokesMock } from '@/app/_data/jokes';

import { JotaiWrapper } from './JotaiWrapper';

const JotaiServer = async () => {
  const toasts = await getData();

  return (
    <Provider>
      <PageContainer>
        <LibHeader name="Jotai" server />
        <JotaiWrapper toasts={toasts} />
      </PageContainer>
    </Provider>
  );
};

const getData = async () =>
  Promise.resolve([jokesMock[6], jokesMock[7], jokesMock[8], jokesMock[9]]);

export default JotaiServer;
