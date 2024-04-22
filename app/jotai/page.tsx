import { LibHeader } from '../_components/LibHeader';
import { PageContainer } from '../_components/PageContainer';
import { Toasts } from '../_components/Toast/Toasts';

import { useToast } from './_hooks/useToast';

const Jotai = () => {
  return (
    <PageContainer>
      <LibHeader name="Jotai" />
      <Toasts useToast={useToast} />
    </PageContainer>
  );
};

export default Jotai;
