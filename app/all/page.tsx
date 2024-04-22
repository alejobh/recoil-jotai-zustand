import { RecoilRoot } from 'recoil';
import { LibHeader } from '../_components/LibHeader';
import { PageContainer } from '../_components/PageContainer';
import { Toasts } from '../_components/Toast/Toasts';
import { useToast as useJotaiToast } from '../jotai/_hooks/useToast';
import { useToast as useRecoilToast } from '../recoil/_hooks/useToast';
import { useToast as useStateToast } from '../state/_hooks/useToast';
import { useToast as useZustandToast } from '../zustand/_hooks/useToast';
import { RecoilWrapper } from '../recoil/_components/RecoilWrapper';

const All = () => {
  return (
    <PageContainer>
      <LibHeader name="All" />
      <div className="flex gap-x-3">
        <Toasts title="State" useToast={useStateToast} />
        <Toasts title="Jotai" useToast={useJotaiToast} />
        <RecoilWrapper>
          <Toasts title="Recoil" useToast={useRecoilToast} />
        </RecoilWrapper>
        <Toasts title="Zustand" useToast={useZustandToast} />
      </div>
    </PageContainer>
  );
};

export default All;
