import { IMyDayLabels } from './dayLabels.interface';
import { IMyMonthLabels } from './monthLabels.interface';
import { IMyDate } from './date.interface';
import { IMyDateRange } from './dateRange.interface';
import { IMyMarkedDates } from './markedDates.interface';
import { IMyMarkedDate } from './markedDate.interface';
export interface IMyOptions {
    closeAfterSelect?: boolean;
    startDate?: string;
    dayLabelsFull?: IMyDayLabels;
    dayLabels?: IMyDayLabels;
    monthLabelsFull?: IMyMonthLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    showTodayBtn?: boolean;
    todayBtnTxt?: string;
    clearBtnTxt?: string;
    closeBtnTxt?: string;
    firstDayOfWeek?: string;
    sunHighlight?: boolean;
    markCurrentDay?: boolean;
    disableUntil?: IMyDate;
    disableSince?: IMyDate;
    disableDays?: Array<IMyDate | number>;
    enableDays?: Array<IMyDate | number>;
    markDates?: Array<IMyMarkedDates>;
    markWeekends?: IMyMarkedDate;
    disableDateRanges?: Array<IMyDateRange>;
    disableWeekends?: boolean;
    showWeekNumbers?: boolean;
    height?: string;
    width?: string;
    selectionTxtFontSize?: string;
    inline?: boolean;
    showClearDateBtn?: boolean;
    alignSelectorRight?: boolean;
    openSelectorTopOfInput?: boolean;
    indicateInvalidDate?: boolean;
    editableDateField?: boolean;
    editableMonthAndYear?: boolean;
    disableHeaderButtons?: boolean;
    minYear?: number;
    maxYear?: number;
    componentDisabled?: boolean;
    showSelectorArrow?: boolean;
    showInputField?: boolean;
    openSelectorOnInputClick?: boolean;
    inputAutoFill?: boolean;
    ariaLabelInputField?: string;
    ariaLabelClearDate?: string;
    ariaLabelOpenCalendar?: string;
    ariaLabelPrevMonth?: string;
    ariaLabelNextMonth?: string;
    ariaLabelPrevYear?: string;
    ariaLabelNextYear?: string;
}
