import React, { useCallback, useState } from 'react'
import { Pressable } from 'react-native'
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from '../components/animated-checkbox'
import TaskItem from '../components/task-item'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const [subject, setSubject] = useState('Task Item')
  const [isEditing, setEditing] = useState(false)

  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <Box w="100px" h="100px">
          <TaskItem
            isEditing={isEditing}
            isDone={checked}
            onToggleCheckbox={handlePressCheckbox}
            subject={subject}
            onPressLabel={() => setEditing(true)}
            onChangeSubject={setSubject}
            onFinishEditing={() => setEditing(false)}
          />
          <AnimatedCheckbox checked={checked} />
        </Box>
        <Box>
          <Text>ハローワーク</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
