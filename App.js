/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         <View style={styles.head}>
            <Text style={styles.textHead}>Ficha Financeira</Text>
         </View>
          <View style={styles.body}>

            <View style={styles.sectionContainer}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding:10, borderBottomWidth: 0.5}}>
            <Icon name='assessment' color='#32CD32' size={32} />
               <Text style={styles.sectionTitle}>
                Boleto atual
               </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding:10, borderBottomWidth: 0}}>
              <Text style={styles.sectionDescription}>Vencimento: </Text><Text style={{fontSize:24, fontWeight:'bold', textAlign: 'right',marginLeft:100,}}>10/02/2020</Text>
              </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding:10, borderBottomWidth: 0}}>

              <Text style={styles.sectionDescription}>Valor: </Text><Text  style={{fontSize:24, fontWeight:'bold', textAlign: 'right', marginLeft:170,}}>R$ 685,84</Text>
              </View>
            
              {/* <Text style={styles.sectionDescription}>Linha Digitável:</Text> */}
              
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding:10, borderBottomWidth: 0}}>
              <Button
              title='Histórico'
              color='#32CD32'
              
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
                 <Icon name='assessment' color='#32CD32' size={32} />
              </Button>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  head: {
    position: 'relative',
    backgroundColor: Colors.LimeGreen,
    right: 0,
  },
  textHead:{
    color: Colors.white,
    textAlign:"center",
    textAlignVertical: "center",
    fontSize: 22,
    height:40,
  },
  imagem:{
    width:5,
    height:5,
  },
  button:{
    backgroundColor: Colors.LimeGreen,
    margin:10,
  },
  body: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderWidth: 0.5,
    margin:10,
    borderColor: Colors.LimeGreen,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.LimeGreen,
    marginLeft: 5,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
