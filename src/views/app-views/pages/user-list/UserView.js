import React from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CompassOutlined,
	CalendarOutlined,
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
	GlobalOutlined
} from '@ant-design/icons';

const UserView = ({ data, visible, close }) => {
	return (
		<Drawer
			width={300}
			placement="right"
			onClose={close}
			closable={false}
			open={visible} // Заменяем `visible` на `open`, так как Ant Design обновил API
		>
			<div className="text-center mt-3">
				<Avatar size={80} src={data?.img} />
				<h3 className="mt-2 mb-0">{data?.name}</h3>
				<span className="text-muted">{data?.personalInfo?.title}</span>
			</div>
			<Divider dashed />
			<div>
				<h6 className="text-muted text-uppercase mb-3">Account details</h6>
				<p>
					<UserOutlined />
					<span className="ml-3 text-dark">ID: {data?.id}</span>
				</p>
				<p>
					<CalendarOutlined />
					<span className="ml-3 text-dark">Born in {data?.personalInfo?.birthday}</span>
				</p>
			</div>
			<div className="mt-5">
				<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
				<p>
					<MobileOutlined />
					<span className="ml-3 text-dark">{data?.personalInfo?.phoneNumber || '-'}</span>
				</p>
				<p>
					<MailOutlined />
					<span className="ml-3 text-dark">{data?.email || '-'}</span>
				</p>
				<p>
					<CompassOutlined />
					<span className="ml-3 text-dark">{data?.personalInfo?.location || '-'}</span>
				</p>
			</div>
			<div className="mt-5">
				<h6 className="text-muted text-uppercase mb-3">Social profiles</h6>
				<p>
					<FacebookOutlined />
					<a href={data?.personalInfo?.facebook || "#"} className="ml-3 text-dark">
						{data?.personalInfo?.facebook || '-'}
					</a>
				</p>
				<p>
					<TwitterOutlined />
					<a href={data?.personalInfo?.twitter || "#"} className="ml-3 text-dark">
						{data?.personalInfo?.twitter || '-'}
					</a>
				</p>
				<p>
					<InstagramOutlined />
					<a href={data?.personalInfo?.instagram || "#"} className="ml-3 text-dark">
						{data?.personalInfo?.instagram || '-'}
					</a>
				</p>
				<p>
					<GlobalOutlined />
					<a href={data?.personalInfo?.site || "#"} className="ml-3 text-dark">
						{data?.personalInfo?.site || '-'}
					</a>
				</p>
			</div>
		</Drawer>
	);
};

export default UserView;
