import React, { Component } from 'react'
import { Avatar, Button, Icon, Popconfirm, message, Modal,
  Form, Input, Upload
} from "antd"
import { getUser } from "../../services/user"
import ManageTable from '../../components/table/table'
import style from "./user.scss"
import {beforeUpload, getBase64} from "../../utils/utils";

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
    list: [],
    count: 0,
    visible: false,
    confirmLoading: false,
    imgLoading: false,
    editModels: {}
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    getUser().then(res => {
      const { data: { list, count } } = res
      this.setState({
        list,
        count
      })
    })
  }

  delUser = (e) => {
    message.success('Click on Yes');
  }

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
      editModels
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  handleSubmit = () => {
    this.setState({
      confirmLoading: true,
    });
    console.log(this.props)
    // this.props.form.validateFields((err, fieldsValue) => {
    //   if (err) {
    //     return;
    //   }
    //   console.log(fieldsValue)
    // });
  }


  render() {
    const { list, visible, confirmLoading, editModels } = this.state
    const { form: { getFieldDecorator }} = this.props;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
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
          <Button type="primary" onClick={this.showModal}>
            <Icon type="user-add" />
            添加
          </Button>
          <Popconfirm
            okType="danger"
            title="你确定要删除用户么？"
            placement="rightTop"
            onConfirm={this.delUser}
            okText="是"
            cancelText="否">
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
