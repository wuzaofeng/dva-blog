import React from 'react';
import { connect } from 'dva';
import { List } from 'antd';
import Item from '../components/item/item'
import Pagin from '../components/pagin/pagin'
import style from './Home.scss';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

function Home() {
  return (
    <div className={style.home}>
      <List
        className={style.list}
        grid={{
          gutter: 15, xs: 1, sm: 2, md: 2, lg: 2
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Item />
          </List.Item>
        )}
      />
      <Pagin />
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
