export type ModalContent = {
  id: number;
  text: string;
};

export type ModalList = ModalContent[];

export type ElInfo = {
  el: JSX.Element;
  modal: ModalList;
  name: string;
};

export type Props = {
  elInfo: ElInfo;
};
