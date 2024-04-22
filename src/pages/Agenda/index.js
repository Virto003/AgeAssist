import React, { useRef, useCallback } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar, LocaleConfig } from 'react-native-calendars';
import testIDs from './testIDs.ts';
import { agendaItems, getMarkedDates } from './mocks/agendaItems';
import AgendaItem from './mocks/AgendaItem';
import { getTheme, themeColor, lightThemeColor } from './mocks/theme';

LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    today: 'Hoje'
  };
  LocaleConfig.defaultLocale = 'pt';

const leftArrowIcon = require('./img/previous.png');
const rightArrowIcon = require('./img/next.png');
const ITEMS = agendaItems;

const Agenda = (props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor
  });

  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <CalendarProvider
    date={ITEMS[1]?.title}
    showTodayButton
    theme={todayBtnTheme.current}
    firstDay={0} // Domingo é o primeiro dia da semana no Brasil
  >
    {weekView ? (
      <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} markingType={'multi-dot'} firstDay={0} markedDates={marked.current} />
    ) : (
      <ExpandableCalendar
        testID={testIDs.expandableCalendar.CONTAINER}
        theme={theme.current}
        firstDay={0} // Domingo é o primeiro dia da semana no Brasil
        markingType={'multi-dot'}
        markedDates={marked.current}
        leftArrowImageSource={leftArrowIcon}
        rightArrowImageSource={rightArrowIcon}
      />
    )}
    <AgendaList
      sections={ITEMS}
      renderItem={renderItem}
      sectionStyle={styles.section}
    />
  </CalendarProvider>
  
  );
};

export default Agenda;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  }
});
