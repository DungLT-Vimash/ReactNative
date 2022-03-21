import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'

const ExampleContainer = () => {
  const { t } = useTranslation()
  // const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
     
    >
      <View>
        <Brand />
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text >{error}</Text>
        ) : (
          <Text >
            {t('example.helloUser', { name: data?.name })}
          </Text>
        )}
      </View>
      <View
       
      >
        <Text >
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={setUserId}
          editable={!isLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
        
        />
      </View>
      <Text >DarkMode :</Text>

      <TouchableOpacity
       
        onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text >Auto</Text>
      </TouchableOpacity>

      <TouchableOpacity
    
        onPress={() => onChangeTheme({ darkMode: true })}
      >
        <Text >Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        
        onPress={() => onChangeTheme({ darkMode: false })}
      >
        <Text>Light</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ExampleContainer
