import React, { Component } from 'react'
import { Table } from 'antd';
import style from './table.scss'

class ManageTable extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loading: false,
  //
  //   }
  // }

  render() {
    // const { loading, selectedRowKeys } = this.state;
    const { columns, tableData, rowKey, onSelectChange, selectedRowKeys } = this.props
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange
    }
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
