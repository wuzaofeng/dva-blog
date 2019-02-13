import React from 'react';
import { connect } from 'dva';
import { List, Card } from 'antd';
import styles from './Home.scss';

const { Meta } = Card;

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
    <div className={styles.home}>
      <List
        grid={{
          gutter: 15, xs: 1, sm: 2, md: 2, lg: 2
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
