import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser ,Login, CustomRoutes, Title} from 'react-admin';
import { Route } from "react-router-dom";
import authProvider from './authProvider';
import QLERLayout from './QLERLayout';
import QLERLoginPage from './QLERLoginPage';
import SubHeader from './SubHeader'


// const QLERLoginPage = () => (
//     <Login
//         // A random image that changes everyday
//         logo = "https://qlertelepsych.com/wp-content/uploads/2022/03/QLER-Telepsychiatry_Color-Logo-2021.png"
//         backgroundImage="https://qlertelepsych.com/wp-content/uploads/2022/06/Partner-with-QLER-1-1024x469.jpg"
//     />
// );
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (

<>
<CustomRoutes>
    <Route path="/SubHeader" element={<SubHeader />} />
</CustomRoutes>

        <Admin layout={QLERLayout} loginPage={QLERLoginPage} dataProvider={dataProvider} authProvider={authProvider}>

            <Resource name="todos" list={ListGuesser} />
        </Admin>
        </>

);

export default App;
