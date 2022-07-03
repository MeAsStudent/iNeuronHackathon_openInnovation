import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NativeBaseProvider, Box , Center, Image, Stagger, IconButton, HStack, useDisclose, Icon, VStack, Avatar, ScrollView} from "native-base";
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import image from './assets/images/hint.jpg';

const App = () => {

  const [title, setTitle] = useState("The elemet is ntg");

  const {
    isOpen,
    onToggle
  } = useDisclose();

  const getlogin = () => {
      console.log("hi")
      setTitle("hii")
  }

     return (
      <NativeBaseProvider>
             <Box  p="12" bg="primary.500" rounded="xl" marginTop={"20%"} marginLeft={"15%"} marginRight={"15%"} marginBottom={"60%"}  _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      textAlign: "center",
    }}><TextInput value = {title}></TextInput>
        </Box>
      
      <Box _text={{
          flexDirection: "row",
          justifyContent: "space-evenly"
      }}>

       <Box>
      <Box alignItems="center" _text={{
        marginTop: 20,
        padding: 20 }}>
        <Stagger visible={isOpen} initial={{
        opacity: 0,
        scale: 0,
        translateY: 34
      }} animate={{
        translateY: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 0.8,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }} exit={{
        translateY: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }}>

        
          <VStack space={10} alignItems="center" marginLeft={5} marginRight={5} justifyContent="space-evenly" marginBottom={"20%"}  >
            <HStack justifyContent="space-evenly" >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={10}  justifyContent='space-evenly'>
     
      <TouchableOpacity 
          onPress = { () => getlogin() }> 
          <Avatar bg="green.500" size="lg"  rounded='sm'  _image={{rounded: 'sm'}} source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }}>
            AJ
          </Avatar>
      </TouchableOpacity>


      
      <Avatar bg="cyan.500" size="lg"  rounded='sm'  _image={{rounded: 'sm'}} source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TE
      </Avatar>
      <Avatar bg="indigo.500" size="lg" rounded='full'  _image={{rounded: 'xs'}} source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        JB
      </Avatar>
      <Avatar bg="amber.500" size="lg" rounded='sm'  _image={{rounded: 'sm'}} source={{
      uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TS
      </Avatar>

      <Avatar bg="green.500" size="lg" rounded='sm'  _image={{rounded: 'sm'}} source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
      <Avatar bg="cyan.500" size="lg" rounded='sm'  _image={{rounded: 'sm'}} source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TE
      </Avatar>
      <Avatar bg="indigo.500" size="lg" rounded='sm'  _image={{rounded: 'sm'}} source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        JB
      </Avatar>
      <Avatar bg="amber.500" size="lg" rounded='sm'  _image={{rounded: 'sm'}} source={{
      uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TS
      </Avatar>
      
            {/* <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="9" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   */}
            </HStack>
            </ScrollView>
            </HStack>        
          
            <HStack justifyContent="space-evenly" >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={10} justifyContent='space-evenly'>
       <Avatar bg="green.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
      <Avatar bg="cyan.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TE
      </Avatar>
      <Avatar bg="indigo.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        JB
      </Avatar>
      <Avatar bg="amber.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TS
      </Avatar>

      <Avatar bg="green.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
      <Avatar bg="cyan.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TE
      </Avatar>
      <Avatar bg="indigo.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        JB
      </Avatar>
      <Avatar bg="amber.500" size="lg" source={{
      uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TS
      </Avatar>
      
            {/* <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="9" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   */}
            </HStack>
            </ScrollView>
            </HStack>        
          


        </VStack> 

        </Stagger>
      </Box>
      <HStack justifyContent="center" bottom={-50}>
        <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" bottom={-50} color="warmGray.50" _dark={{
        color: "warmGray.50"
      }} />} />
      </HStack>
    </Box>;
      </Box>

      </NativeBaseProvider>
  )
}

export default App;
