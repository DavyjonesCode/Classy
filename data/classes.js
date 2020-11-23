import React, {useState, useEffect} from "react";
import {View,Text} from 'react-native'
import useUsers from "../hooks/useUsers"

export default () => {
  const [loading, posts] = useUers('https://run.mocky.io/v3/e8201a37-60a8-4c05-9030-3055ad1a0ef4')
  
  return(
    <View>
      <View>
        {loading ? (<Text>loading...</Text>) :  (
          <View>
           <Text>id</Text>
           <Text>title</Text>
          </View>
        )}
      </View>
    </View>
  )
}