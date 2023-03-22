import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const onLevelChange = (itemValue) => {
    setSelectedLevel(itemValue);
  };

  const onSectionChange = (itemValue) => {
    setSelectedSection(itemValue);
  };

  // const x = [
  //   {
  //     "_id":1,
  //     "class":"1",
  //     "grade":{
  //       "id":1,
  //       "levelName":"One",
  //       "sections":{
  //         "id":1,
  //         "sectionName":"A"
  //       },
  //     },
  //     "student":"John Doe"
  //   },
  //   {
  //     "_id":2,
  //     "class":"1",
  //     "grade":{
  //       "id":2,
  //       "levelName":"Two",
  //       "sections":{
  //         "id":2,
  //         "sectionName":"B"
  //       },
  //     },
  //     "student":"Jane Doe"
  //   },
  //   {
  //     "_id":3,
  //     "class":"1",
  //     "grade":{
  //       "id":3,
  //       "levelName":"Three",
  //       "sections":{
  //         "id":3,
  //         "sectionName":"C"
  //       },
  //     },
  //     "student":"Sam Smith"
  //   },
  //   {
  //     "_id":4,
  //     "class":"1",
  //     "grade":{
  //       "id":4,
  //       "levelName":"Four",
  //       "sections":{
  //         "id":4,
  //         "sectionName":"D"
  //       },
  //     },
  //     "student":"Sara Smith"
  //   },
  // ]



const Attendance = () => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // let cimo = [];
  const [indexofGrade,setIndexOfGrade]=useState("");
  const Request =async () => {
    try{
   const res= await fetch('http://localhost:8000/api/levels',{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const response = await res.json();
      console.log(response);
      setData(response);
      // cimo=response;
      // console.log("data",cimo);  

    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    Request();
  }, []);
  

  const handleGradeChange = (value) => {
    setSelectedGrade(value);
  };

  const handleSectionChange = (value) => {
    setSelectedSection(value)
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedGrade}
        onValueChange={handleGradeChange}
        prompt="Please select a grade">
        <Picker.Item label="Please select a grade" value=""
/>
        {data && data.map((grade,index) => (
          <Picker.Item
            key={index}
            label={grade.levelName}
            value={grade.levelName}
          />
        ))}
      </Picker>

    {selectedGrade && (
     <Picker
        selectedValue={selectedSection}
        onValueChange={handleSectionChange}
        prompt="Please select a section">
        <Picker.Item label="Please select a section" value=""
/>
        {data && data.map((grade,index) => (
          grade.levelName === selectedGrade &&
          grade.sections.map((section,index)=>{
            return(
            <Picker.Item
            key={index}
            label={section.sectionName}
            value={section.sectionName}
          />
            )
          })
          
        ))}
      </Picker>
   
     )}  

      <Text>You selected: {selectedGrade} - {selectedSection}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color: 'black',
  },
});

export default Attendance;
