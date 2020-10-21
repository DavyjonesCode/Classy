import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Icon,
  Divider,
  View,
} from "@ui-kitten/components";

export const HomeIcon = (props) => (
  <Icon {...props} name="home" pack="material" />
);

export const HomeButton = () => <Button accessoryLeft={HomeIcon}>Home</Button>;

export const HomeScreen = () => (
  <React.Fragment>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">HOME</Text>
    </View>
    <Divider />
    <Text category="h2">Not home</Text>
  </React.Fragment>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
