import React from 'react';
import { useTransition } from '@react-spring/web';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  // return messagesWithTransitions((style, item) => (
  //   <animated.div style={style}>{item}</animated.div>
  // ));

  // <Container>
  //   {messages.map((message) => (
  //     <Toast key={message.id} message={message} />
  //   ))}
  // </Container>;
  return (
    <Container>
      {messagesWithTransitions((style, item) => (
        <Toast key={item.id} message={item} style={style} />
      ))}
    </Container>
  );
};

export default ToastContainer;
