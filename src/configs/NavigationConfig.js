import { 
  FileTextOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const homePart = [
  {
    key: 'homeApp1',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: []
      },
    ]

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'sidenav.pages',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'sidenav.pages',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-list',
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: 'sidenav.pages.userlist',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          
        ]
      },
    ]
  }
]
const navigationConfig = [
  ...homePart,
  ...extraNavTree,
]

export default navigationConfig;
