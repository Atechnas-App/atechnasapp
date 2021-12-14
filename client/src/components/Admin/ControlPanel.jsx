import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Testimonials from './Testimonials';
import Publications from './Publications';
import Users from './Users';
import Comentarios from './Comentarios';

export default function ControlPanel(){
    return(
        <div>
            <Tabs>
                <TabList>
                    <Tab>Testimonios</Tab>
                    <Tab>Usuarios</Tab>
                    <Tab>Publicaciones</Tab>
                    <Tab>Comentarios</Tab>
                </TabList>

                <TabPanel>
                    <Testimonials/>
                </TabPanel>
                <TabPanel>
                    <Users/>
                </TabPanel>
                <TabPanel>
                    <Publications/>
                </TabPanel>
                <TabPanel>
                    <Comentarios/>
                </TabPanel>
            </Tabs>
        </div>
    )
}