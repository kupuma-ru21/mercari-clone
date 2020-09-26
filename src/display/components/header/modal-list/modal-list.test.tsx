import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, brandArray } from '@/constans/header';
import { ElInfo, ModalContent } from '@/types/modal';
import { textCheck } from '@/logic/modal-list-logic';
import {
  ModalList,
  SearchByCategory,
  SearchByBrand,
} from '@/display/components';

type RenderTypes = {
  history: MemoryHistory;
};

const rendering = (itemInfo): RenderTypes => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <ModalList itemInfo={itemInfo} />
    </Router>
  );
  return { history };
};

const listItemClickTest = (elInfo: ElInfo): void => {
  const { name, modalList } = elInfo;
  modalList.forEach((item: ModalContent, index: number): void => {
    const { history } = rendering({ item, elInfo });
    const list = screen.getAllByRole('listitem');
    fireEvent.click(list[index]);
    if (textCheck(list[index].textContent)) {
      expect(history.location.pathname).toBe(`/${name}`);
      return;
    }
    expect(history.location.pathname).toBe(`/${name}/${item.id}`);
  });
};

const listItemBackColorSwitchTest = (elInfo: ElInfo): void => {
  const { modalList } = elInfo;
  modalList.forEach((item: ModalContent, index: number) => {
    rendering({ item, elInfo });
    const list = screen.getAllByRole('listitem');
    expect(list[index]).not.toHaveClass('hoverListItem');
    fireEvent.mouseEnter(list[index]);
    expect(list[index]).toHaveClass('hoverListItem');
    fireEvent.mouseLeave(list[index]);
    expect(list[index]).not.toHaveClass('hoverListItem');
  });
};

describe('ModalList Components', () => {
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
  test('listItem click category/itemID page display', () => {
    listItemClickTest(elCategoryInfo);
  });
  test('listItem click brand/itemID page display', () => {
    listItemClickTest(elBrandInfo);
  });
  test('categoryListItem background color switching test', () => {
    listItemBackColorSwitchTest(elCategoryInfo);
  });
  test('brandListItem background color switching test', () => {
    listItemBackColorSwitchTest(elBrandInfo);
  });
});
