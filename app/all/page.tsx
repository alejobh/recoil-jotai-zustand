import { LibHeader } from '../_components/LibHeader';
import { PageContainer } from '../_components/PageContainer';
import { Toasts } from '../_components/Toast/Toasts';
import { useToast as useJotaiToast } from '../jotai/_hooks/useToast';
import { useToast as useStateToast } from '../state/_hooks/useToast';

import { Zustand } from './Zustand';
import { Recoil } from './Recoil';
import { Valtio } from './Valtio';

const All = () => {
  return (
    <PageContainer>
      <LibHeader name="All" />
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
        <Toasts title="State" useToast={useStateToast} />
        <Zustand />
        <Recoil />
        <Toasts title="Jotai" useToast={useJotaiToast} />
        <Valtio />
      </div>
    </PageContainer>
  );
};

export default All;
