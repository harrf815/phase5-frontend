
import * as React from 'react';
import { connect } from 'react-redux'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject} from '@syncfusion/ej2-react-schedule';

import { api } from '../services/api'
import { postSchedule, fetchSchedule } from '../actions'


class Scheduler extends React.Component {

    state = {
        subject: '',
        startTime: '',
        endTime: '',

    }

    scheduleData = data => {

        if (data.data) {
            console.log(data.data[0])
            this.setState({ subject: data.data[0].Subject})
            this.setState({ startTime: data.data[0].StartTime})
            this.setState({ endTime: data.data[0].EndTime})         
        }
        const newShift = {
            subject: this.state.subject,
            startTime: this.state.startTime,
            endTime: this.state.endTime
        }
        api.schedule.addSchedule(newShift).then(data => this.props.postSchedule(data))
    }

    componentDidMount() {
        api.schedule.getSchedule().then(data => console.log(data))
    }

    renderShift = data => {
        
    }

    


    render() {

        return (
            <div>
                <ScheduleComponent actionBegin={this.scheduleData}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
                <br />
                <div>
                    <button>Publish</button>
                </div>
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps,{ postSchedule, fetchSchedule })(Scheduler);
