import React from 'react';
import { ScrollView, Text, Linking, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';

const images = [
  {
    key: 1,
    name: 'Nathan Anderson',
    image: img1,
    url: 'https://unsplash.com/photos/C9t94JC4_L8'
  },
  {
    key: 2,
    name: 'Jamison McAndie',
    image: img2,
    url: 'https://unsplash.com/photos/waZEHLRP98s'
  },
  {
    key: 3,
    name: 'Alberto Restifo',
    image: img3,
    url: 'https://unsplash.com/photos/cFplR9ZGnAk'
  },
  {
    key: 4,
    name: 'John Towner',
    image: img4,
    url: 'https://unsplash.com/photos/89PFnHKg8HE'
  }
];

export default () => (
  <View style={{
    flex: 1
  }}
  >
    <ScrollView contentContainerStyle={{
      paddingVertical: 20
    }}
    >
      {images.map(({ name, image, url, key }) => (
        <Card title={`CARD ${key}`} image={image} key={key}>
          <Text style={{
            marginBottom: 10
          }}
          >Photo by {name}.
          </Text>
          <Button backgroundColor="#03A9F4" title="VIEW NOW" onPress={() => Linking.openURL(url)} />
        </Card>
      ))}
    </ScrollView>
  </View>
);
