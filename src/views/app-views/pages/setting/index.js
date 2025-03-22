import React, { Component } from 'react'
import { LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Notification from './Notification';

const SettingOption = ({ match, location }) => {
	return (
		<Menu
			defaultSelectedKeys={`${match.url}/edit-profile`}
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			{/* <Menu.Item key={`${match.url}/change-password`}>
				<LockOutlined />
				<span>Change Password</span>
				<Link to={'change-password'} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/billing`}>
				<CreditCardOutlined />
				<span>DND</span>
				<Link to={`dnd`} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/notification`}>
				<BellOutlined />
				<span>Notification</span>
				<Link to={`notification`} />
			</Menu.Item> */}
		</Menu>
	);
};

const SettingContent = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.url}/edit-profile/:id`} component={EditProfile} />
			<Route path={`${match.url}/change-password`} component={ChangePassword} />
			<Route path={`${match.url}/notification`} component={Notification} />
		</Switch>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout 
				sideContentWidth={320}
				sideContent={<SettingOption {...this.props}/>}
				mainContent={<SettingContent {...this.props}/>}
			/>
    );
	}
}

export default Setting
