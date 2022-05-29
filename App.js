
import React, {useState,useEffect} from 'react';
import {SafeAreaView,Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { RadioButton} from 'react-native-paper';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { BarChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';



const App = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [checked, setChecked] = React.useState('first');
  const [ischecked, setisChecked] = React.useState('third');
  const [achecked, setaChecked] = React.useState('fifth');
  const [orchecked, setorChecked] = React.useState('seven');
  const [rchecked, setrChecked] = React.useState('nine');
  
const storedata=async()=>{
  try{
    await AsyncStorage.setItem("savedate",JSON.stringify(selectedStartDate, setSelectedStartDate));
    await AsyncStorage.setItem("@saveinfo",JSON.stringify(checked, setChecked));
    await AsyncStorage.setItem("@saveinfo",JSON.stringify(ischecked, setisChecked));
    await AsyncStorage.setItem("@saveinfo",JSON.stringify(achecked, setaChecked));
    await AsyncStorage.setItem("@saveinfo",JSON.stringify(orchecked, setorChecked));
    await AsyncStorage.setItem("@saveinfo",JSON.stringify(rchecked, setrChecked));
    
    
  }catch(e){
    console.log(e);
  }
  useEffect(()=>{
    selectedStartDate;
  })

};



  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          WELCOME TO SALAH TRACKER
        </Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle={"Next"}
          onPress={()=>{storedata}}
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <View style={styles.textStyle}>
          <Text style={styles.textStyle}>
            Selected Start Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyle}>
            Selected End Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View>
        <View style={{flex:1, flexDirection:'row', backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
        <Image source={require('./assets/fajar.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>

          <RadioButton 
           value="first"
           status={ checked === 'first' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('first')}/>
      <Image source={require('./assets/prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>
         
<RadioButton 
value="second"
status={ checked === 'second' ? 'checked' : 'unchecked' }
onPress={() => setChecked('second')}

/>
<Image source={require('./assets/not prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}} />
</TouchableOpacity>
        </View>
        <View style={{flex:1, flexDirection:'row', backgroundColor:"gray", justifyContent:"center", alignItems:"center",padding:20}}>
        <TouchableOpacity style={{flexDirection:'row' , justifyContent:"center",alignItems:"center"}}>
        <Image source={require('./assets/duhar.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>

          <RadioButton 
           value="third"
           status={ ischecked === 'third' ? 'checked' : 'unchecked' }
           onPress={() => setisChecked('third')}/>
      <Image source={require('./assets/prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>
         
<RadioButton 
value="fourth"
status={ ischecked === 'fourth' ? 'checked' : 'unchecked' }
onPress={() => setisChecked('fourth')}

/>
<Image source={require('./assets/not prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}} />
</TouchableOpacity>
        </View>
        <View style={{flex:1, flexDirection:'row', backgroundColor:"brown", justifyContent:"center", alignItems:"center",padding:20}}>
        <TouchableOpacity style={{flexDirection:'row' , justifyContent:"center",alignItems:"center"}}>
        <Image source={require('./assets/ashar.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>

          <RadioButton 
           value="fifth"
           status={ achecked === 'fifth' ? 'checked' : 'unchecked' }
           onPress={() => setaChecked('fifth')}/>
      <Image source={require('./assets/prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>
         
<RadioButton 
value="six"
status={ achecked === 'six' ? 'checked' : 'unchecked' }
onPress={() => setaChecked('six')}

/>
<Image source={require('./assets/not prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}} />
       </TouchableOpacity>
        </View>

        <View style={{flex:1, flexDirection:'row', backgroundColor:"pink", justifyContent:"center", alignItems:"center",padding:20}}>
        <TouchableOpacity style={{flexDirection:'row' , justifyContent:"center",alignItems:"center"}}>
        <Image source={require('./assets/maghrib.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>

          <RadioButton 
           value="seven"
           status={ orchecked === 'seven' ? 'checked' : 'unchecked' }
           onPress={() => setorChecked('seven')}/>
      <Image source={require('./assets/prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>
         
<RadioButton 
value="eight"
status={ orchecked === 'eight' ? 'checked' : 'unchecked' }
onPress={() => setorChecked('eight')}

/>
<Image source={require('./assets/not prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}} />
       </TouchableOpacity>
        </View>

        <View style={{flex:1, flexDirection:'row', backgroundColor:"red", justifyContent:"center", alignItems:"center",padding:20}}>
        <TouchableOpacity style={{flexDirection:'row' , justifyContent:"center",alignItems:"center"}}>
        <Image source={require('./assets/esha.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>

          <RadioButton 
           value="nine"
           status={ rchecked === 'nine' ? 'checked' : 'unchecked' }
           onPress={() => setrChecked('nine')}/>
      <Image source={require('./assets/prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}}/>
         
<RadioButton 
value="ten"
status={ rchecked === 'ten' ? 'checked' : 'unchecked' }
onPress={() => setrChecked('ten')}

/>
<Image source={require('./assets/not prayer.PNG')} style={{height:100, width:100, justifyContent:'center', alignSelf:"center"}} />
       </TouchableOpacity>
        </View>

        <View style={{justifyContent:"center",alignItems:"center", padding:8,paddingTop:20}}>
          <Text style={{justifyContent:"center", alignItems:"center", marginTop:48, marginBottom:70, fontWeight:'bold', fontSize:30}}> Streaks </Text>
          <TouchableOpacity>
          <CountdownCircleTimer
            duration={0}
            colors={["#C6C6C6", "BLUE"]}
            colorsTime={[0]}

          >
            {({ remainingTime }) => (
              <Text style={{ color: "#1B1B1B", fontSize: 40 }}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
          </TouchableOpacity>
          <Text style={{justifyContent:"center", alignItems:"center", marginTop:48, marginBottom:70, fontWeight:'bold', fontSize:30}}>Previous record</Text>

        </View>

        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",padding: 10}}>
          <Button title="LAst 7 DAYS" color={"blue"}/>
          <Button title="MONTHLY" color={"black"}/> 
          <Button title="DATARANGE" color={"pink"} />
        </View>
        <View style={{justifyContent:"center", alignItems:"center", marginTop:20,  backgroundColor:"cream"}}>

                <BarChart
  data={{

    labels: ['Fajar', 'Zohar', 'Assar', 'Magrib', 'Esha'],
    datasets: [{ data: [10, 50, 50, 10, 50] }],
  }}
  width={800}
  height={450}
  yAxisLabel={''}
  horizontalLabelRotation={true}
  verticalLabelRotation={false}

  chartConfig={{
    backgroundColor: 'white',
    backgroundGradientFrom: 'pink',
    backgroundGradientTo: 'blue',

    decimalPlaces: 3,
    color: (opacity = 255) => 'white',
    style: {
      borderRadius: 20, padding: 10
    },
  }}></BarChart>

        

        </View>
      </View>
    </SafeAreaView>


  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'cream',
    padding: 30,
  },
  textStyle:{
    marginTop: 10,
  },
  titleStyle: {
    color: "red",
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    fontWeight:'bold',
    fontFamily:'san-serif'
  },

});  