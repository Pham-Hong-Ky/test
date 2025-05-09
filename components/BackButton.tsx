import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = ({ onPress }: { onPress?: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
