import React, { Component } from 'react'
import { Button, Icon, Popconfirm, message, Modal, Form, Input } from "antd"
import {getCategories, createCategories, updateCategories, delCategories} from "../../services/categories"
import ManageTable from '../../components/table/table'
import style from "./categories.scss"
import {CODE} from "../../config";

const ButtonGroup = Button.Group;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
  colon: false,
};

@Form.create({ name: 'userManage' })
class Categories extends Component {
  state = {
    list: [], // 数据
    count: 0, // 总条数
    visible: false, // 弹出层
    confirmLoading: false,  // 弹出层loading
    formModels: {}, // 编辑数据
    type: '', // 弹出层类型 默认添加 edit 编辑
    selectedRowKeys: [], // table选中框
  }

  componentDidMount() {
    this.getList()
  }

  // 获取列表
  getList = () => {
    getCategories().then(res => {
      const { data: { list, count } } = res
      this.setState({
        list,
        count
      })
    })
  }

  // 删除用户
  delete = (e) => {
    const { selectedRowKeys } = this.state
    if (!selectedRowKeys.length) {
      message.error('未选中行');
      return
    }
    delCategories({
      delData: selectedRowKeys
    }).then(res => {
      const { code } = res.data || {}
      if (code === CODE.SUCCESS) {
        message.success('删除成功');
        this.getList()
      } else {
        message.error('删除失败');
      }
    })
  }
  // 弹出层显示
  showModal = (type='', data='') => {

    let formModels = {}
    if (type && data) {
      const { _id, type, name } = data
      formModels = {
        _id, type, name
      }
    }
    this.setState({
      visible: true,
      formModels,
      type
    });
  }

  // 取消弹出层
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  // 弹出层确认
  handleSubmit = () => {
    this.setState({
      confirmLoading: true,
    });
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        this.setState({
          confirmLoading: false,
        });
        return;
      }
      const { type, formModels } = this.state
      if (type) {
        updateCategories({ ...formModels, ...fieldsValue}).then((res) => {
          const { code } = res.data || {}
          if (code === CODE.SUCCESS) {
            message.success('更新成功');
            this.setState({
              visible: false,
              confirmLoading: false
            });
            this.getList()
          } else {
            message.error('更新失败');
            this.setState({
              confirmLoading: false
            });
          }
        })
      } else {
        createCategories({...fieldsValue}).then(res => {
          const { code } = res.data || {}
          if (code === CODE.SUCCESS) {
            message.success('添加成功');
            this.setState({
              visible: false,
              confirmLoading: false
            });
            this.getList()
          } else {
            message.error('添加失败');
            this.setState({
              confirmLoading: false
            });
          }
        })
      }
    });
  }

  // 选中触发事件
  onSelectChange = (selectedRowKeys) => {
    this.setState({
      selectedRowKeys,
    })
  }


  render() {
    const { list, visible, confirmLoading, formModels, selectedRowKeys } = this.state
    const { form: { getFieldDecorator }} = this.props;
    const columns = [{
      title: '自定义标识(唯一)',
      dataIndex: 'type',
    }, {
      title: '分类名称',
      dataIndex: 'name',
    }, {
      title: '文章数量',
      dataIndex: 'count',
    }, {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => <Button size="small" block onClick={() => this.showModal('edit', record)}>修改</Button>,
    },]

    console.log(formModels)

    return (
      <div className={style.wrap}>
        <ButtonGroup className={style.buttonWrap}>
          <Button type="primary" onClick={() => this.showModal()}>
            <Icon type="user-add" />
            添加
          </Button>
          <Popconfirm
            okType="danger"
            title="你确定要删除文字分类么？"
            placement="rightTop"
            okText="是"
            cancelText="否"
            onConfirm={this.delete}>
            <Button>
              <Icon type="user-delete" />
              删除
            </Button>
          </Popconfirm>
        </ButtonGroup>
        <ManageTable
          columns={columns}
          tableData={list}
          rowKey="_id"
          onSelectChange={this.onSelectChange}
          selectedRowKeys={selectedRowKeys}
        />
        <Modal
          visible={visible}
          onOk={this.handleSubmit}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          cancelText="取消"
          okText="确定"
          destroyOnClose
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              {...formItemLayout}
              label="自定义标识"
            >
              {
                getFieldDecorator('type', {
                  initialValue: (formModels.type || formModels.type === 0) ? formModels.type : '',
                  rules: [{ required: true, message: '请输入唯一标识' }]
                })(<Input placeholder="请输入唯一标识" />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="分类名称"
            >
              {
                getFieldDecorator('name', {
                  initialValue: formModels.name || '',
                  rules: [{ required: true, message: '请输入分类名称' }]
                })(<Input placeholder="输入分类名称" />)
              }
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Categories
