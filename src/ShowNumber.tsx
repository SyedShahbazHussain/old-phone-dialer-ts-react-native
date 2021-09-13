import React from 'react'
import { View, Text } from 'react-native'

    interface StatusProps {
        passcode: object;
    }
      
    const ShowNumber = ({ passcode }: StatusProps) => {
    return (
        <View>
            <Text style={{fontSize:24}}>No:{passcode.value}</Text>
        </View>
    )
}

export default ShowNumber
