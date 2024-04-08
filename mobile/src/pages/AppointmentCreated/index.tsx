import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import {
  Container,
  Title,
  Description,
  OKButton,
  OKButtonText,
} from './styles';
import { StackNavigation } from '../../routes/app.routes';

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const navigation = useNavigation<StackNavigation>();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOKPressed = useCallback(() => {
    navigation.reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [navigation]);

  const formattedDate = useMemo(() => {
    return format(routeParams.date, 'EEEE, MMMM dd');
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Appointment Scheduled!</Title>
      <Description>{formattedDate}</Description>

      <OKButton
        onPress={() => {
          handleOKPressed();
        }}
      >
        <OKButtonText>OK</OKButtonText>
      </OKButton>
    </Container>
  );
};

export default AppointmentCreated;
