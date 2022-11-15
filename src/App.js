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
const dataProviderComments = jsonServerProvider('https://jsonplaceholder.typicode.com/comments');

const App = () => (
    <>
        <Admin layout={QLERLayout} loginPage={QLERLoginPage} dataProvider={dataProvider} authProvider={authProvider}>

            <Resource name="todos" list={ListGuesser} />
            <Resource name="posts" list={ListGuesser} />
                        <Resource name="comments" list={ListGuesser} />
            <Resource name="users" list={ListGuesser} />

        </Admin>

    </>

);

export default App;
