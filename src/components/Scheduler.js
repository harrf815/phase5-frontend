
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


class Scheduler extends React.Component {
    
    state = {
        
    }
    
    scheduleData = data => {
        console.log(data)
    }


    render() {

        return (
            <div>
            <ScheduleComponent actionBegin={this.scheduleData}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
            <br />
            <div>
                <button>Publish</button>
            </div>
            </div>
            


        )
    }
}

export default Scheduler; 
