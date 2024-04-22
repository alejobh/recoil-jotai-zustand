import { LibHeader } from '../_components/LibHeader';
import { PageContainer } from '../_components/PageContainer';
import { Toasts } from '../_components/Toast/Toasts';
import { RecoilWrapper } from './_components/RecoilWrapper';
import { useToast } from './_hooks/useToast';

const Recoil = () => {
  return (
    <PageContainer>
      <LibHeader name="Recoil" />
      <RecoilWrapper>
        <Toasts useToast={useToast} />
      </RecoilWrapper>
    </PageContainer>
  );
};

export default Recoil;
