import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { categoryArray, categoryDetail } from '@/constans/header';
import { ModalContent } from '@/types/header/modal';
import { ModalContext } from '@/contexts';
import { categoryListTextCheck } from '@/logic/header/list-item-logic';
import { DetailListItem } from '@/display/components/header';

const rendering = (item: ModalContent): void => {
  const history = createMemoryHistory();
  render(
    <ModalContext.Provider value={{ state: {}, setState: () => jest.fn() }}>
      <Router history={history}>
        <DetailListItem item={item} />
      </Router>
    </ModalContext.Provider>
  );
};

describe('ModalDetailList Components', () => {
  test('categoryDetail ListItem background color switching test', () => {
    categoryArray.forEach((categoryListItemItem: ModalContent) => {
      if (categoryListTextCheck(categoryListItemItem.text)) return;
      categoryDetail[`categoryDetail${categoryListItemItem.id}`].forEach(
        (detailListItem: ModalContent, index: number) => {
          rendering(detailListItem);
          const list = screen.getAllByRole('listitem');
          expect(list[index]).not.toHaveClass('hoverListItem');
          fireEvent.mouseEnter(list[index]);
          expect(list[index]).toHaveClass('hoverListItem');
          fireEvent.mouseLeave(list[index]);
          expect(list[index]).not.toHaveClass('hoverListItem');
        }
      );
    });
  });
});
