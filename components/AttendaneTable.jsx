import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AttendanceTable = () => {
  const [students, setStudents] = useState([]);

  // Fetch the list of students from the backend API
  useEffect(() => {
    fetch('http://your-api-endpoint/students')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Status</Text>
      </View>
      {students.map((student) => (
        <View style={styles.tableRow} key={student.id}>
          <Text style={styles.rowText}>{student.name}</Text>
          <TouchableOpacity style={styles.statusButton}>
            <Text style={styles.buttonText}>Absent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusButton}>
            <Text style={styles.buttonText}>Late</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusButton}>
            <Text style={styles.buttonText}>Present</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rowText: {
    fontSize: 16,
  },
  statusButton: {
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default AttendanceTable;


