export type ElInfo = {
  el: JSX.Element;
  modal: {
    id: number;
    text: string;
  }[];
};

export type Props = {
  elInfo: ElInfo;
};
