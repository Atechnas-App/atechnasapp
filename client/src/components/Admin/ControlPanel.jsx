import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Testimonials from './Testimonials';

export default function ControlPanel(){
    return(
        <div>
            <Tabs>
                <TabList>
                    <Tab>Testimonios</Tab>
                    <Tab>Usuarios</Tab>
                </TabList>

                <TabPanel>
                    <Testimonials/>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}