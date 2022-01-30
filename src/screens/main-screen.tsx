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
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
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
