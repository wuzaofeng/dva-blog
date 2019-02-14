import React, { Component } from 'react';
import { connect } from 'dva';
import { List } from 'antd';
import Item from '../components/item/item'
import Pagin from '../components/pagin/pagin'
import style from './Home.scss';

class Home extends Component {
  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    this.props.dispatch({
      type: 'articles/fetchArticles'
    })
  }

  render() {
    const { articles } = this.props
    const { list, total } = articles
    return (
      <div className={style.home}>
        <List
          className={style.list}
          grid={{
            gutter: 16, xs: 1
          }}
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <Item data={item}  />
            </List.Item>
          )}
        />
        <Pagin total={total} />
      </div>
    );
  }
}

Home.propTypes = {
};

export default connect(({ articles }) => ({
  articles
}))(Home);
