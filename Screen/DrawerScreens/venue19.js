import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

export default function venu19() {
 
  const [name1, setName1] = useState ('No register yet');
  const [name2, setName2] = useState ('No register yet');
  const [name3, setName3] = useState ('No register yet');
  const [name4, setName4] = useState ('No register yet');
  const [name5, setName5] = useState ('No register yet');
  const [name6, setName6] = useState ('No register yet');
  const [name7, setName7] = useState ('No register yet');
  const [name8, setName8] = useState ('No register yet');
  const [name9, setName9] = useState ('No register yet');
  const [name10, setName10] = useState ('No register yet');
  const [name11, setName11] = useState ('No register yet');
  const [name12, setName12] = useState ('No register yet');
  const [name13, setName13] = useState ('No register yet');
  const [name14, setName14] = useState ('No register yet')
  const [name15, setName15] = useState ('No register yet');;

 return (
 <View style={styles.container}>
   <ScrollView style={styles.scrollView}>
 <Text style={styles.contents}>TIME
 <Text style={styles.contents}>                                  Register Name</Text></Text>
 <Text style={styles.contents}>08.00a.m - 09.00a.m
 <Text style={styles.contents}>     {name1}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName1(val)}
  />
  <Text style={styles.contents}>09.00a.m - 10.00a.m
 <Text style={styles.contents}>     {name2}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName2(val)}
  />
  <Text style={styles.contents}>10.00a.m - 11.00a.m
 <Text style={styles.contents}>     {name3}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName3(val)}
  />
  <Text style={styles.contents}>11.00a.m - 12.00p.m
 <Text style={styles.contents}>     {name4}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName4(val)}
  />
  <Text style={styles.contents}>12.00p.m - 01.00p.m
 <Text style={styles.contents}>     {name5}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName5(val)}
  />
  <Text style={styles.contents}>01.00p.m - 02.00p.m
 <Text style={styles.contents}>     {name6}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName6(val)}
  />
  <Text style={styles.contents}>02.00p.m - 03.00p.m
 <Text style={styles.contents}>     {name7}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName7(val)}
  />
  <Text style={styles.contents}>03.00p.m - 04.00p.m
 <Text style={styles.contents}>     {name8}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName8(val)}
  />
  <Text style={styles.contents}>04.00p.m - 05.00p.m
 <Text style={styles.contents}>     {name9}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName9(val)}
  />
  <Text style={styles.contents}>05.00a.m - 06.00a.m
 <Text style={styles.contents}>     {name10}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName10(val)}
  />
  <Text style={styles.contents}>06.00p.m - 07.00p.m
 <Text style={styles.contents}>     {name11}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName11(val)}
  />
  <Text style={styles.contents}>07.00p.m - 08.00p.m
 <Text style={styles.contents}>     {name12}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName12(val)}
  />
  <Text style={styles.contents}>08.00p.m - 09.00p.m
 <Text style={styles.contents}>     {name13}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName13(val)}
  />
  <Text style={styles.contents}>09.00p.m - 10.00p.m
 <Text style={styles.contents}>     {name14}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName14(val)}
  />
  <Text style={styles.contents}>09.00p.m - 10.00p.m
 <Text style={styles.contents}>     {name14}</Text></Text>
  <TextInput style={styles.input}
              placeholder="Register venue"
            onChangeText= {(val) => setName14(val)}
  /><Text style={styles.contents}>10.00p.m - 11.00p.m
  <Text style={styles.contents}>     {name15}</Text></Text>
   <TextInput style={styles.input}
               placeholder="Register venue"
             onChangeText= {(val) => setName15(val)}
   />
  </ScrollView>
 </View>
 
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 justifyContent: 'flex-start',
 //alignItems: 'center',
 backgroundColor: '#f7f4ea',
 
 },
 header: {
   marginTop: 40,
 fontSize: 60,
 textAlign: 'center',
 margin: 10,
 },
 contents: {
 //textAlign: 'right',
 color: '#333333',
 margin: 5,
 },
 input: {
  height: 35,
  margin: 5,
  borderWidth: 1,
  width: 200,
},
scrollView: {
  //backgroundColor: 'pink',
  marginHorizontal: 20,
},

 });