export type ModalContent = {
  id: number;
  text: string;
};

export type Modal = ModalContent[];

export type ElInfo = {
  el: JSX.Element;
  modal: Modal;
  name: string;
};

export type Props = {
  elInfo: ElInfo;
};
