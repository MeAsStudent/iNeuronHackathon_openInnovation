import React, { useState } from 'react'
import { Alert, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { NativeBaseProvider, Box, Stagger, IconButton, HStack, useDisclose, Icon, VStack, Avatar, ScrollView, Text, extendTheme } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const [title, setTitle] = useState("https://www.pexels.com/photo/fashion-man-love-people-12430047/");
  const [vaadi, setVaadi] = useState("https://www.youtube.com/watch?v=tFX2UvkQj44&list=RDtFX2UvkQj44&start_radio=1");

  const {
    isOpen,
    onToggle
  } = useDisclose();

  return (
    <NativeBaseProvider>

      <Box p="12" bg="primary.500" rounded="xl" marginTop={"20%"} marginLeft={"15%"} marginRight={"15%"} _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        textAlign: "center",
      }}> 
      <Image source={title}  />
      <video source={vaadi} />
{/* 
        <video width="100" height="100" controls >
          <source src="https://vod-progressive.akamaized.net/exp=1657363529~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3824%2F27%2F694124248%2F3207125427.mp4~hmac=e9627d0ff19993efabe0f07103dd617fdf61ec5b6493f1ff7bea030a99ae1d12/vimeo-prod-skyfire-std-us/01/3824/27/694124248/3207125427.mp4" type="video/mp4" />
        </video> */}

        <TextInput value={title}></TextInput>
      </Box>

      <Box _text={{
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}>

        <Box>
          <Box alignItems="center" _text={{
            marginTop: 20,
            padding: 20
          }}>
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
                    <HStack space={10} justifyContent='space-evenly' alignItems="center">

                      <TouchableOpacity
                        onPress={() => { setTitle("https://www.pexels.com/photo/fashion-man-love-people-12430047/"),  setVaadi("https://www.youtube.com/watch?v=SPmec1w1sXU&list=RDtFX2UvkQj44&index=2") }} >
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          AJ
                        </Avatar>
                        <Text fontSize="sm" textAlign="center" >Podcasts</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => { setTitle("https://www.pexels.com/photo/fashion-man-love-people-12430047/") , setVaadi("https://www.youtube.com/watch?v=SPmec1w1sXU&list=RDtFX2UvkQj44&index=2") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TE
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("https://www.pexels.com/photo/red-macaw-close-up-12568038/") , setVaadi("https://www.youtube.com/watch?v=SPmec1w1sXU&list=RDtFX2UvkQj44&index=2") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          JB
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("4") , setVaadi("https://www.youtube.com/watch?v=SPmec1w1sXU&list=RDtFX2UvkQj44&index=2") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TS
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => { setTitle("5") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          AJ
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("6") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TE
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("7") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          JB
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("8") }}>
                        <Avatar bg="white" size="xl" _image={{ borderRadius: '30' }} source={{
                          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TS
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      {/* <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon size="9" name="location-pin" _dark={{
                color: "warmGray.50"
              }} color="warmGray.50" />} />   */}
                    </HStack>
                  </ScrollView>
                </HStack>

                <HStack justifyContent="space-evenly" >
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <HStack space={10} justifyContent='space-evenly'>
                      <TouchableOpacity
                        onPress={() => { setTitle("9") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          AJ
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("10") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TE
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("11") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          JB
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("12") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TS
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => { setTitle("13") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          AJ
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("14") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TE
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("15") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                          JB
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => { setTitle("16") }}>
                        <Avatar bg="white" size="xl" _image={{ rounded: 'sm', borderTopLeftRadius: '45', borderTopRightRadius: '30', borderBottomLeftRadius: '30', borderBottomRightRadius: '45' }} borderTopLeftRadius={"50"} source={{
                          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }}>
                          TS
                        </Avatar>
                        <Text fontSize="sm" textAlign="center">Podcasts</Text>
                      </TouchableOpacity>
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
