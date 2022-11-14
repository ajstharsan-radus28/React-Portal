import { Layout } from 'react-admin';
import QLERAppBar from './QLERAppBar';
// import MySidebar from './MySidebar';
import QLERMenu from './QLERMenu';

const QLERLayout = props => <Layout
    {...props}
    appBar={QLERAppBar}
    // sidebar={MySidebar}
    menu={QLERMenu}
/>;

export default QLERLayout;
