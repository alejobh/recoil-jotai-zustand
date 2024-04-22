import { LibHeader } from '@/app/_components/LibHeader';
import { PageContainer } from '@/app/_components/PageContainer';
import { Toasts } from '@/app/_components/Toast/Toasts';
import { ToastProvider, useToastContext } from './_components/ToastProvider';
import { jokesMock } from '@/app/_data/jokes';

const StateServer = async () => {
  const toasts = await getData();

  return (
    <ToastProvider initialToasts={toasts}>
      <PageContainer>
        <LibHeader name="State" server />
        <Toasts useToast={useToastContext} />
      </PageContainer>
    </ToastProvider>
  );
};

export const getData = async () => Promise.resolve([jokesMock[0]]);

export default StateServer;
