import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import AccountButton from '../components/AccountButton';
import MainStyle from '../style/mainStyle';

// @ts-ignore
const MemberEditComponent = ({ member, onSave }) => {
  const [editedMember, setEditedMember] = useState(member);

  const handleInputChange = (name: string, value: string) => {
    setEditedMember({ ...editedMember, [name]: value });
  };

  const saveMember = () => {
    // Handle the save logic here
    member = editedMember;
    console.log('Saved Member:', member);
  };

  const prettierName = (name: string): string => {
    const stringArray = name.split(/(?=[A-Z]|[0-9])/);
    if (!stringArray) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    const rejoinedString = stringArray.join(' ');
    return rejoinedString.charAt(0).toUpperCase() + rejoinedString.slice(1);
  }

  const ignoredFields = ['id', 'membershipNumber', 'bookings'];

  return (
    <ScrollView style={styles.container}>
      {Object.keys(member)
        .filter(key => !ignoredFields.includes(key))
        .map((key) => (
        <View key={key} style={styles.inputContainer}>
          <Text style={styles.label}>{prettierName(key)}:</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={MainStyle.colors.secondaryFaded}
            placeholder={prettierName(key)}
            value={editedMember[key]}
            onChangeText={(text) => handleInputChange(key, text)}
            keyboardType={key.includes('email') ? 'email-address' : key.includes('phone') ? 'phone-pad' : 'default'}
            secureTextEntry={key.includes('password')}
          />
        </View>
      ))}
      <AccountButton title="Save" onPress={saveMember} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: MainStyle.colors.backgroundColor,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: MainStyle.colors.secondary
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: MainStyle.colors.secondary,
    padding: 10,
    color: MainStyle.colors.secondary,
    borderRadius: 5
  }
});

MemberEditComponent.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    prefix: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    membershipNumber: PropTypes.string,
    email: PropTypes.string,
    suffix: PropTypes.string,
    preferredName: PropTypes.string,
    phone: PropTypes.string,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    city: PropTypes.string,
    postCode: PropTypes.string
  }).isRequired
};

export default MemberEditComponent;
