import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { GiftedChat } from '../GiftedChat';

const messages = [
  {
    id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      id: 2,
      name: 'React Native',
    },
  },
];

it('should render <GiftedChat/> and compare with snapshot', () => {
  const tree = renderer
    .create(
      <GiftedChat
        messages={messages}
        onSend={() => {}}
        user={{
          id: 1,
        }}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
