import React from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class App extends React.Component {
  state = {
    modalViible: false,
    from: 'From',
    modalVisible2: false,
    to: 'To',
    input: '',
    hasil: '0',
    mataUang: ['Rupiah', 'Dolar', 'Ringgit'],
  };
  submitConverter = () => {
    const from = this.state.from;
    const to = this.state.to;
    const input = parseInt(this.state.input);

    if (from == 'Dolar' && to == 'Rupiah') {
      const hasil = input * 14679.5;
      this.setState({hasil: hasil});
    } else if (from == 'Dolar' && to == 'Ringgit') {
      const hasil = input * 4.15;
      this.setState({hasil: hasil});
    } else if (from == 'Rupiah' && to == 'Ringgit') {
      const hasil = input * 0.00028;
      this.setState({hasil: hasil});
    } else if (from == 'Rupiah' && to == 'Dolar') {
      const hasil = input * 0.000068;
      this.setState({hasil: hasil});
    } else if (from == 'Ringgit' && to == 'Dolar') {
      const hasil = input * 0.24;
      this.setState({hasil: hasil});
    } else if (from == 'Ringgit' && to == 'Rupiah') {
      const hasil = input * 3540.03;
      this.setState({hasil: hasil});
    }
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalViible}
          onRequestClose={() => this.setState({modalViible: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                width: '80%',
                backgroundColor: 'white',
                borderRadius: 5,
                height: 120,
                justifyContent: 'center',
              }}>
              {this.state.mataUang.map((value, key) => {
                return (
                  <Text
                    style={{
                      borderBottomWidth: 0.5,
                      margin: 10,
                      marginHorizontal: '5%',
                    }}
                    key={key}
                    onPress={() => {
                      this.setState({from: value, modalViible: false});
                    }}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible2}
          onRequestClose={() => this.setState({modalVisible2: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                width: '80%',
                backgroundColor: 'white',
                borderRadius: 5,
                height: 120,
                justifyContent: 'center',
              }}>
              {this.state.mataUang.map((value, key) => {
                return (
                  <Text
                    style={{
                      borderBottomWidth: 0.5,
                      margin: 10,
                      marginHorizontal: '5%',
                    }}
                    key={key}
                    onPress={() => {
                      this.setState({to: value, modalVisible2: false});
                    }}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
        </Modal>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: 30,
            elevation: 9,
          }}>
          <Text style={{fontSize: 30}}>CurrencyConverter</Text>
        </View>
        <View
          style={{
            width: '90%',
            marginHorizontal: '5%',
            flexDirection: 'row',
            marginBottom: 30,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <View
              style={{
                height: 35,
                width: '70%',
                borderWidth: 1,
                borderRadius: 4,
                justifyContent: 'center',
                padding: 5,
              }}>
              <Text>{this.state.from}</Text>
            </View>
            <View
              style={{
                backgroundColor: '#1D9D2A',
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Icon
                size={30}
                color="white"
                name="chevron-down"
                onPress={() => this.setState({modalViible: true})}
              />
            </View>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <View
              style={{
                height: 35,
                width: '70%',
                borderWidth: 1,
                borderRadius: 4,
                justifyContent: 'center',
                padding: 5,
              }}>
              <Text>{this.state.to}</Text>
            </View>

            <View
              style={{
                backgroundColor: '#1D9D2A',
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Icon
                size={30}
                color="white"
                name="chevron-down"
                onPress={() => this.setState({modalVisible2: true})}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            marginBottom: 30,
            marginHorizontal: '5%',
            borderRadius: 9,
            height: 50,
          }}>
          <TextInput
            style={{alignItems: 'center', justifyContent: 'center'}}
            value={this.state.input}
            placeholder="Masukkan Nilai"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({input: text})}
          />
        </View>
        <View
          style={{
            marginBottom: 30,
            marginHorizontal: '5%',
            borderRadius:9
          }}>
          <Button
            title="Konversikan"
            color="#1D9D2A"
            onPress={() => this.submitConverter()}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: '5%',
            height: 120,
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
              height: 30,
              backgroundColor: '#C4C4C4',
            }}>
            <Text>Hasil</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>{this.state.hasil}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default App;
