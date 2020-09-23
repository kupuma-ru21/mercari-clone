export type ModalContent = {
  id: number;
  text: string;
};

export type ModalList = ModalContent[];

export type ElInfo = {
  el: JSX.Element;
  modalList: ModalList;
  name: string;
};

export type Props = {
  elInfo: ElInfo;
};
