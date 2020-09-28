import { ElInfo, ModalContent } from '@/types/header/modal';

export type ItemInfo = {
  item: ModalContent;
  elInfo: ElInfo;
};

export type Props = {
  itemInfo: ItemInfo;
};
