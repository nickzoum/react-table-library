/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { getList } from '@server/list';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell
} from '@table';

import { HeaderCellSort } from '@sort';

storiesOf('05. Server/ 02. Sort', module)
  .addParameters({ component: Table })
  .add('default WIP', () => {
    const [list, setList] = React.useState([]);

    const doGetList = React.useCallback(async params => {
      const result = await getList(params);
      setList(result);
    }, []);

    React.useEffect(() => {
      doGetList({});
    }, [doGetList]);

    const handleTableStateChange = (type, tableState) => {
      const SERVER_SIDE_OPERATIONS = ['SORT'];

      let params = {};

      params = {
        ...params,
        sortKey: tableState.sort.sortState.key,
        sortReverse: tableState.sort.sortState.reverse
      };

      if (SERVER_SIDE_OPERATIONS.includes(type)) {
        doGetList(params);
      }
    };

    return (
      <Table
        list={list}
        server={{
          sort: true
        }}
        tableStateChange={{
          onTableStateChange: handleTableStateChange
        }}
      >
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="name"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                >
                  Name
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="stars"
                  sortFn={array =>
                    array.sort((a, b) => a.stars - b.stars)
                  }
                >
                  Stars
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="light"
                  sortFn={array =>
                    array.sort((a, b) => a.light - b.light)
                  }
                >
                  Light
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="count"
                  sortFn={array =>
                    array.sort((a, b) => a.count - b.count)
                  }
                >
                  Count
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row key={item.id} item={item}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>{tableItem.stars}</Cell>
                      <Cell>{tableItem.light.toString()}</Cell>
                      <Cell>{tableItem.count}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  });
