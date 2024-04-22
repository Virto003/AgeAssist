import isEmpty from 'lodash/isEmpty';
import {MarkedDates, MarkingTypes} from './types';

// Suponha que você tenha um arquivo JSON com as informações do calendário
import calendarData from '../../../data/calendarData.json';

const med = {key: 'med', color: 'red', selectedDotColor: 'blue'};
const doc = {key: 'doc', color: 'blue', selectedDotColor: 'blue'};

export const agendaItems = calendarData.map(item => {
  return {
    title: item.date,
    data: item.events.map(event => {
      return {
        hour: event.hour,
        title: event.title,
        type: event.type,
        especialidade: event.especialidade,
        dots: [med, doc]
      };
    })
  };
});

export function getMarkedDates() {
  const marked: MarkedDates = {};
  
  agendaItems.forEach(item => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = {marked: true};
    } 
  });
  return marked;
}
