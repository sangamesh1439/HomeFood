import React, {useState} from 'react';
import {Modal, Text, View, Image} from 'react-native';
import {Button, Icon} from 'native-base';
import {
  TimeSelection,
  Counter,
  ModalTitle,
} from '../../../../../common/components';
import {makeReservationModalStyles} from './MakeReservationModal.styles';
import {Divider} from '../../../../../common/components/Divider/Divider';

const MakeReservationModalComponent = props => {
  const [counterValue, updateCounterValue] = useState(2);

  const [, setSelectedHour] = useState('');

  const {name, shortDescription, uri, food=[] } = props.restaurant;
  console.log('food',food);
  return (
    <Modal
      onBackdropPress={props.hideModal}
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.hideModal}>
      <View style={makeReservationModalStyles.mainContainer}>
        <View style={makeReservationModalStyles.overley} />
        <View style={makeReservationModalStyles.modalContainer}>
          <View>
            <ModalTitle title={'Reservation'} hideModal={props.hideModal} />
            <View style={makeReservationModalStyles.row}>
              <View style={makeReservationModalStyles.nameContainer}>
                <Text style={makeReservationModalStyles.name}>{name}</Text>
                <Text style={makeReservationModalStyles.description}>
                  {shortDescription}
                </Text>
              </View>
              <View style={makeReservationModalStyles.imageContainer}>
                <Image
                  style={makeReservationModalStyles.image}
                  source={{
                    uri,
                  }}
                />
              </View>
            </View>
            <Divider />
            <View style={makeReservationModalStyles.counterContainer}>
             
              <Counter
                counterValue={counterValue}
                updateCounterValue={updateCounterValue}
              />
              <TimeSelection setSelectedHour={setSelectedHour} />
            </View>

            <Button
              onPress={() => {
                props.hideModal();
              }}
              style={makeReservationModalStyles.appleIconContainer}>
              <Icon
                type={'AntDesign'}
                name="apple1"
                style={makeReservationModalStyles.appleIcon}
              />

              <Text style={makeReservationModalStyles.payButton}> Pay </Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const MakeReservationModal = MakeReservationModalComponent;
