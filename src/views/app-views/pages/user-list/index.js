import React from 'react';
import { Card, Table} from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useGetUsersQuery } from 'redux/usersApi';
import Loading from 'components/shared-components/Loading';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
export default function UserList() {
  const { data } = useGetUsersQuery();
  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <Link to={`${APP_PREFIX_PATH}/pages/setting/edit-profile/${record.id}`} >
          <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
          </Link>
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: adress => (
        <span>{adress.city}<br></br>{adress.street}, {adress.suite} </span>
      ),
      sorter: {
        compare: (a, b) => {
           a = a.address.city.toLowerCase();
           b = b.address.city.toLowerCase();
          return a.localeCompare(b);
        },
      },
    },

  ];

  return (
    <Card bodyStyle={{ padding: '0px' }}>
      {data ? <Table columns={tableColumns} dataSource={data} rowKey="id" />
    :(
      <Loading cover="content"/>
    )  
    }
    </Card>
  );
};

