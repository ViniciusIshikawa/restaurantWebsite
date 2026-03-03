import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    FullCalendarModule,
    MatDialogModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  isDisable:boolean = false;
  readonly dialog = inject(MatDialog);

  calendarOptions: CalendarOptions = {
    timeZone: 'local',
    plugins: [
      dayGridPlugin,
      interactionPlugin
    ],
    selectable: true,
    select: this.handleDateSelect.bind(this),
    initialView: 'dayGridMonth',
    initialDate: new Date(),
    events: []
  };

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  ngAfterViewInit() {
    const calendarApi = this.calendarComponent.getApi();

    const today = new Date();
    const start = new Date(today.setHours(0, 0, 0, 0));
    const end = new Date(today.setHours(23, 59, 59, 999));

    setTimeout(() => {
      calendarApi.select({ start, end });
    }, 500);
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    let weekDay = selectInfo.start.getDay();
    const calendarApi = selectInfo.view.calendar;

    if(weekDay === 1 || weekDay === 2) {
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
  }



  openDialog(hour: string) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result === true) alert(`Booking confirmed at ${hour}! Thank you!`);
    });
  }

}
