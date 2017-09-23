import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';
import {Picker, View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';

class EmployeeList extends Component {
  onPressButton(){
    const {name,phone,shift}= this.props;

    this.props.employeeCreate({name,phone,shift: shift||Monday});
  }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input label="Name" placeholder="Atik" value={this.props.name} onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}/>

          </CardSection>
          <CardSection>
            <Input label="Phone No." placeholder="555-555-5555" value={this.props.phone} onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}/>
          </CardSection>

          <CardSection>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker
               style={{
              flex: 1
            }}
            selectedValue={this.props.shift}
             onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
             >
              <Picker.Item label="Monday" value="Monday"/>
              <Picker.Item label="Tuesday" value="Tuesday"/>
              <Picker.Item label="Wednesday" value="Wednesday"/>
              <Picker.Item label="Thursday" value="Thursday"/>
              <Picker.Item label="Friday" value="Friday"/>
              <Picker.Item label="Saturday" value="Saturday"/>
              <Picker.Item label="Sunday" value="Sunday"/>
            </Picker>

          </CardSection>
          <CardSection>
            <Button onPress={this.onPressButton.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}
const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
}
export default connect(mapStateToProps, {employeeUpdate,employeeCreate})(EmployeeList);
