import { Box, Button, Heading, Input, Select, Textarea, Img, Center, HStack, Flex } from '@chakra-ui/react'
import { FiImage } from 'react-icons/fi'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <Box 
      w='33rem' 
      h='41rem' 
      bg='white' 
      borderRadius='0.5rem' 
      position='absolute'     
      >
        <Center>
          <Heading as='h1' color='#5DB94F' size='3xl' mt='3rem' fontWeight='bold' >
            BioDex
          </Heading>          
        </Center>

        <Center>
          <Input 
          placeholder='Nome da planta'
          w='28rem'
          h='3rem'        
          mt='3rem'
          bgColor='#F3F3F3'
          />
        </Center>

        <Center >
          <Input
          placeholder='Nome cientifico'
          w='28rem'
          h='3rem'        
          mt='1rem'
          bgColor='#F3F3F3'
          />
        </Center>

        <Center>
          <Select
          placeholder='Selecione'
          w='28rem'
          h='3rem'        
          mt='1rem'
          bgColor='#F3F3F3'
          cursor='pointer'
          >
            <option value='option1'>Árvores</option>
            <option value='option2'>Arbustos</option>
            <option value='option3'>Palmeiras</option>
            <option value='option3'>Flores</option>
            <option value='option3'>Orquídeas</option>
            <option value='option3'>Bromélias</option>
            <option value='option3'>Suculentas</option>
            <option value='option3'>Carnívoras</option>
            <option value='option3'>Folhagem</option>
            <option value='option3'>Gramados</option>
            <option value='option3'>Forrações</option>
            <option value='option3'>Aquáticas</option>
            <option value='option3'>Hortiliças</option>
            <option value='option3'>Trepadeiras</option>
            <option value='option3'>Ervas Daninhas</option>
          </Select>
        </Center>

        <Center>
          <Textarea  
          placeholder='Principais cuidados' 
          w='28rem'
          h='3rem'        
          mt='1rem'
          bgColor='#F3F3F3'
          />
        </Center>
        
        <Center  className="flex items-center justify-center alignItems justifyContent">
          <Box className="bg-[#F3F3F3] flex items-center justify-center alignItems justifyContent" 
          mt='1rem'
          w='28rem'
          h='5rem'
          borderRadius='0.5rem'
          cursor='pointer'
          >  
            <Flex as={Box} className="items-center justify-center alignItems justifyContent fitContent"
              borderRadius='0.3rem'
              mt='1rem'
              w='26rem'
              h='3rem'
              border='dashed 0.13rem'
              borderColor='#C9C9C9'
              boxSizing='border-box'
              alignItems='center'
              >        
              <HStack spacing='3rem' display='flex'>
                <Center>
                  <FiImage size='1rem' color='#C9C9C9'/>
                </Center>
                <Heading 
                as='h5' 
                color='#C9C9C9' 
                fontSize='1rem'
                cursor='pointer'
                >
                  Adicione a imagem da planta aqui
                  </Heading>   
              </HStack>
            </Flex>          
          </Box>
        </Center>

        <Center>
          <Button 
          w='28rem'
          h='3rem'
          size='lg' 
          colorScheme='green' 
          bgColor='#5DB94F'
          mt='1rem'
          bgPosition='center'
          >
            Registrar Planta
          </Button>
        </Center>
      </Box>
    </div>
  )
}

export default Home
