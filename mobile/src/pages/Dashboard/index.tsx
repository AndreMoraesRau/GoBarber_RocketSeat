import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  Username,
  ProfileButton,
  UserAvatar,
} from './styles';
import { StackNavigation } from '../../routes/app.routes';

const Dashboard: React.FC = () => {
  const navigation = useNavigation<StackNavigation>();

  const { signOut, user } = useAuth();

  const navigateToProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Welcome, {'\n'} <Username>{user?.name}</Username>
        </HeaderTitle>

        <ProfileButton
          onPress={() => {
            navigateToProfile;
          }}
        >
          <UserAvatar source={{ uri: user?.avatar_url }} />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
