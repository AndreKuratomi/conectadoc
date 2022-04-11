// mobiscroll, fullcalendar";
import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Header } from "../../components/Header";

const Schedules = () => {
  const editorTemplate = (props) => {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Summary</td>
            <td style={{ colspan: "4" }}>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Patient</td>
            <td style={{ colspan: "4" }}>
              <input
                id="Patient"
                className="e-field e-input"
                type="text"
                name="Patient"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Professional</td>
            <td style={{ colspan: "4" }}>
              <input
                id="Professional"
                className="e-field e-input"
                type="text"
                name="Professional"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Status</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["New", "Finished", "Canceled"]}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td style={{ colspan: "4" }}>
              <DateTimePickerComponent
                id="StartTime"
                format="dd/MM/yy hh:mm a"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td style={{ colspan: "4" }}>
              <DateTimePickerComponent
                id="EndTime"
                format="dd/MM/yy hh:mm a"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Reason</td>
            <td style={{ colspan: "4" }}>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px",
                  resize: "vertical",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div />
    );
  };

  return (
    <>
      <Header />
      <main>
        {/* SchedulesContainer */}
        <section>
          {/* IndicadorContent */}
          <article>
            <h2>Agenda médica</h2>
          </article>
          <ScheduleComponent
            currentView="Week"
            selectedDate={new Date(2022, 4, 11, 9, 0)}
            // eventSettings={{ dataSource: dataManager }}
            editorTemplate={editorTemplate}
          >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </section>
      </main>
    </>
  );
};

export default Schedules;
