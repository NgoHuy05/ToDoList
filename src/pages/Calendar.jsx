import moment from "moment";
import {
  Calendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
 
  return (
    <div className="h-[90vh] p-4 bg-white">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}     
        views={["day", "week", "month"]} 
        step={60}                    
        timeslots={1}                
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default MyCalendar;
