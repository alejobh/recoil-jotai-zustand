import { Toasts } from "../_components/Toast/Toasts";
import { RecoilWrapper } from "../recoil/_components/RecoilWrapper";
import { useToast } from "../recoil/_hooks/useToast";

export const RecoilServer = () => (
  <RecoilWrapper>
    <Toasts title="Recoil" useToast={useToast} />
  </RecoilWrapper>
)
