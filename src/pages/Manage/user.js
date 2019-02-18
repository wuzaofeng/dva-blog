import React, { Component } from 'react'
import { Avatar, Button, Icon, Popconfirm, message, Modal,
  Form, Input } from "antd"
import {getUser, createUser, updateUser, delUser} from "../../services/user"
import ManageTable from '../../components/table/table'
import style from "./user.scss"
import {CODE} from "../../config";

console.log(CODE)

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
class UserManage extends Component {
  state = {
    list: [], // 数据
    count: 0, // 总条数
    visible: false, // 弹出层
    confirmLoading: false,  // 弹出层loading
    editModels: {}, // 编辑数据
    type: '', // 弹出层类型 默认添加 edit 编辑
    selectedRowKeys: [], // table选中框
  }

  componentDidMount() {
    this.getList()
  }

  // 获取列表
  getList = () => {
    getUser().then(res => {
      const { data: { list, count } } = res
      this.setState({
        list,
        count
      })
    })
  }

  // 删除用户
  delUser = (e) => {
    const { selectedRowKeys } = this.state
    if (!selectedRowKeys.length) {
      message.error('未选中行');
      return
    }
    delUser({
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
    let editModels = {}
    if (type && data) {
      const {authorSrc, email, location, _id, username} = data
      editModels = {
        authorSrc, email, location, _id, username
      }
    }
    this.setState({
      visible: true,
      editModels,
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
      const { type, editModels } = this.state
      if (type) {
        updateUser({ ...editModels, ...fieldsValue}).then((res) => {
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
        createUser(fieldsValue).then(res => {
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
    const { list, visible, confirmLoading, editModels, selectedRowKeys } = this.state
    const { form: { getFieldDecorator }} = this.props;
    const columns = [{
      title: '用户信息',
      dataIndex: 'authorSrc',
      render: (authorSrc, record) => (
        <div className={style.author}>
          <Avatar src={authorSrc} icon="user" />
          <span className={style.text}>{record.username}</span>
        </div>)
    }, {
      title: '地址',
      dataIndex: 'location',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }, {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => <Button size="small" block onClick={() => this.showModal('edit', record)}>修改</Button>,
    },]

    return (
      <div className={style.wrap}>
        <ButtonGroup className={style.buttonWrap}>
          <Button type="primary" onClick={() => this.showModal()}>
            <Icon type="user-add" />
            添加
          </Button>
          <Popconfirm
            okType="danger"
            title="你确定要删除用户么？"
            placement="rightTop"
            okText="是"
            cancelText="否"
            onConfirm={this.delUser}>
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
              label="头像"
            >
              <Avatar src={editModels.authorSrc} icon="user" size={64} />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="用户名"
            >
              {
                getFieldDecorator('username', {
                  initialValue: editModels.username || '',
                  rules: [{ required: true, message: '请输入用户名' }]
                })(<Input placeholder="作为Blog标题" />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="地址"
            >
              {
                getFieldDecorator('location', {
                  initialValue: editModels.location || '',
                  rules: [{ required: true, message: '请输入地址' }]
                })(<Input placeholder="输入地址" />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="邮箱"
            >
              {
                getFieldDecorator('email', {
                  initialValue: editModels.email || '',
                  rules: [{ required: true, message: '请输入地址' }]
                })(<Input placeholder="输入邮箱" />)
              }
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default UserManage
