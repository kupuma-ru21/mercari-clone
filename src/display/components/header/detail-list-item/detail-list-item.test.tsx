import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { brandArray, categoryArray, categoryDetail } from '@/constans/header';
import { ElInfo, ModalContent } from '@/types/header/modal';
import { ModalContext } from '@/contexts';
import { categoryListTextCheck } from '@/logic/header/list-item-logic';
import {
  DetailListItem,
  Modal,
  SearchByBrand,
  SearchByCategory,
} from '@/display/components/header';

type RenderTypes = {
  history: MemoryHistory;
};

const modalRender = (elInfo: ElInfo): void => {
  const history = createMemoryHistory();
  const { el, modalList, name } = elInfo;
  render(
    <Router history={history}>
      <Modal elInfo={{ el, modalList, name }} />
    </Router>
  );
};

const detailListItemRender = (item: ModalContent): RenderTypes => {
  const history = createMemoryHistory();
  render(
    <ModalContext.Provider value={{ state: {}, setState: () => jest.fn() }}>
      <Router history={history}>
        <DetailListItem item={item} />
      </Router>
    </ModalContext.Provider>
  );
  return { history };
};

const modalDetailDisplayControlTest = (elInfo: ElInfo): void => {
  modalRender(elInfo);
  const modalDetail = screen.getByRole('group');
  expect(modalDetail.childElementCount).toBe(0);

  const directory = screen.getByRole('directory');
  fireEvent.mouseEnter(directory);

  const { modalList, name } = elInfo;
  modalList.forEach((item, index) => {
    if (name === 'brand') {
      expect(modalDetail.childElementCount).toBe(0);
      return;
    }

    const listItems = screen.getAllByRole('listitem');
    expect(listItems[index].textContent).toBe(item.text);

    fireEvent.mouseEnter(listItems[index]);
    if (categoryListTextCheck(item.text)) {
      expect(modalDetail.childElementCount).toBe(0);
      return;
    }
    expect(modalDetail.childElementCount).not.toBe(0);
  });

  fireEvent.mouseLeave(directory);
  expect(modalDetail.childElementCount).toBe(0);
};

const detailListItemBackColorSwitchTest = (detailkey: number) => {
  test(`categoryDetail${detailkey} BackColorSwitchTest`, () => {
    categoryDetail[`categoryDetail${detailkey}`].forEach(
      (detailListItem: ModalContent, index: number) => {
        detailListItemRender(detailListItem);
        const list = screen.getAllByRole('listitem');
        expect(list[index].textContent).toBe(detailListItem.text);
        expect(list[index]).not.toHaveClass('hoverListItem');
        fireEvent.mouseEnter(list[index]);
        expect(list[index]).toHaveClass('hoverListItem');
        fireEvent.mouseLeave(list[index]);
        expect(list[index]).not.toHaveClass('hoverListItem');
      }
    );
  });
};

const detailListItemClickTest = (detailkey: number) => {
  test(`categoryDetail${detailkey} ClickTest`, () => {
    categoryDetail[`categoryDetail${detailkey}`].forEach(
      (detailListItem: ModalContent, index: number) => {
        const { history } = detailListItemRender(detailListItem);
        const list = screen.getAllByRole('listitem');
        expect(list[index].textContent).toBe(detailListItem.text);
        fireEvent.click(list[index]);
        expect(history.location.pathname).toBe(
          `/category/${detailListItem.id}`
        );
      }
    );
  });
};

describe('ModalDetailList Components', () => {
  const elCategoryInfo: ElInfo = {
    el: <SearchByCategory />,
    modalList: categoryArray,
    name: 'category',
  };
  const elBrandInfo: ElInfo = {
    el: <SearchByBrand />,
    modalList: brandArray,
    name: 'brand',
  };
  test('modalDetail display control test CategoryInfo', () => {
    modalDetailDisplayControlTest(elCategoryInfo);
  });
  test('modalDetail display control test BrandInfo', () => {
    modalDetailDisplayControlTest(elBrandInfo);
  });

  describe('categoryDetail Tests', () => {
    categoryArray.forEach((categoryListItemItem: ModalContent) => {
      if (categoryListTextCheck(categoryListItemItem.text)) return;
      detailListItemBackColorSwitchTest(categoryListItemItem.id);
      detailListItemClickTest(categoryListItemItem.id);
    });
  });
});
