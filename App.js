import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ClassSelector from './components/ClassSelector';
import AttendanceTable from './components/AttendaneTable';
import AttendanceForm from './components/AttendanceForm';
import TableTitle from './components/TableTitle'


export default function App() {
  const [tableData, setTableData] = useState([
    ['John Doe', 'Absent'],
    ['Jane Doe', 'Late'],
    ['Sam Smith', 'Present'],
    ['Sara Smith', 'Absent'],
  ]);

  const handleAttendanceOptionPress = (name, option) => {
    const updatedTableData = tableData.map((rowData) => {
      if (rowData[0] === name) {
        return [name, option];
      }
      return rowData;
    });
    setTableData(updatedTableData);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ClassSelector />
      <AttendanceForm />
      <TableTitle />
      <AttendanceTable
        tableData={tableData}
        onAttendanceOptionPress={handleAttendanceOptionPress}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});



