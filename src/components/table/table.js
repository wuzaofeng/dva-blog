import React, { Component } from 'react'
import { Table } from 'antd';
import style from './table.scss'

class ManageTable extends Component {
  state = {
    loading: false,
  }

  render() {
    // const { loading } = this.state;
    const { columns, tableData, rowKey } = this.props
    const rowSelection = {}
    const pagination = {
      hideOnSinglePage: true
    }
    const tableOption = {
      className: style.table,
      rowSelection,
      dataSource: tableData,
      columns,
      rowKey,
      pagination
    }
    return (
      <Table {...tableOption} />
    );
  }
}

export default ManageTable
