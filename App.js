import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box , Center, Image, Stagger, IconButton, HStack, useDisclose, Icon, VStack, Thumbnail} from "native-base";
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import image from './assets/images/hint.jpg';

const App = () => {

  const {
    isOpen,
    onToggle
  } = useDisclose();


     return (
      <NativeBaseProvider>
             <Box  p="12" bg="primary.500" rounded="xl" marginTop={20} marginBottom={40} marginLeft={35} marginRight={35} _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      textAlign: "center",
      height: "100%"
    }}>
        This is a Box with Linear Gradient
        </Box>
      
      <Box _text={{
          flexDirection: "row",
          justifyContent: "space-evenly"
      }}>
        {/* <Center >
              <Image size={50} resizeMode={"contain"} borderRadius={100} display={"flex"} source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />
                    <Image size={50} resizeMode={"contain"} borderRadius={100} display={"flex"} source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />       
       </Center>; */}

       <Box>
      <Box alignItems="center" _text={{
        marginTop: 100,
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

       <VStack space={4} alignItems="center" justifyContent="space-evenly" marginBottom={60} >
       <HStack space={10} justifyContent="space-evenly" >
            
            <IconButton mb="4" variant="solid" bg="pink.500" colorScheme="pink" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
                color: "white"
              }} color="white" />}  />
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="image" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />      
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   
                  
            {/* <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="9" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   */}
                </HStack>
          <HStack space={10} justifyContent="center">
            
      <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />
      <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />      
      <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />  
            
            {/* <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="7" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />    */}
          </HStack>
          <HStack space={10}  justifyContent="center">
            
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />      
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="12" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   
                  
            {/* <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="7" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   */}
                </HStack>
          {/* <HStack space={7} justifyContent="center">
            
      <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="7" name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />
      <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="7" name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />      
      <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="7" name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />  
            
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="7" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   
          </HStack> */}

        </VStack> 

        </Stagger>
      </Box>
      <HStack justifyContent="center">
        <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" color="warmGray.50" _dark={{
        color: "warmGray.50"
      }} />} />
      </HStack>
    </Box>;
      </Box>

      </NativeBaseProvider>
  )
}

export default App;