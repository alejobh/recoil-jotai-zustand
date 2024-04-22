import { LibHeader } from '../_components/LibHeader';
import { PageContainer } from '../_components/PageContainer';
import { Toasts } from '../_components/Toast/Toasts';

import { useToast } from './_hooks/useToast';

const Zustand = () => {
  return (
    <PageContainer>
      <LibHeader name="State" />
      <Toasts useToast={useToast} />
    </PageContainer>
  );
};

export default Zustand;
