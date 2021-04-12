
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


class Scheduler extends React.Component {

    scheduleData = data => {
        console.log(data)
    }


    render() {

        return (
            <ScheduleComponent actionBegin={this.scheduleData}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>

        )
    }
}

export default Scheduler; 
