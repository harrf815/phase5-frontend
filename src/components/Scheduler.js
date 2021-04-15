
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
        console.log(data)

        if (data.data && data.requestType === "eventCreate") {
            console.log(data.data[0])
            // this.setState({ subject: data.data[0].Subject})
            // this.setState({ startTime: data.data[0].StartTime})
            // this.setState({ endTime: data.data[0].EndTime}) 
            const newShift = {
                subject: data.data[0].Subject,
                startTime: data.data[0].StartTime,
                endTime: data.data[0].EndTime
            }
            api.schedule.addSchedule(newShift).then(data => this.props.postSchedule(data))        
        }
       
    }

    componentDidMount() {
        api.schedule.getSchedule().then(data => this.props.fetchSchedule(data))
           
    }

    renderShift = () => {
        return this.props.schedules.map(data => {
            return {
                Id: data.id,
                Subject: data.subject,
                StartTime: new Date(data.startTime),
                EndTime: new Date(data.endTime),
                IsAllDay: false
            }
        })
    }


    render() {

        return (
            <div>
                <ScheduleComponent actionBegin={this.scheduleData} eventSettings={{ dataSource: this.renderShift(),
                    fields: {
                        id: 'Id',
                        subject: {name: "Subject"},
                        startTime: {name: "StartTime"},
                        endTime: {name : "EndTime"}
                    }
                }}>
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
    console.log(state.schedule)
    return { schedules: state.schedule}
}

export default connect(mapStateToProps,{ postSchedule, fetchSchedule })(Scheduler);
