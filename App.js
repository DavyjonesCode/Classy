import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Icon,
} from "@ui-kitten/components";

export const HomeIcon = (props) => (
  <Icon {...props} name="home" pack="material" />
);

export const HomeButton = () => <Button accessoryLeft={HomeIcon}>Home</Button>;

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
