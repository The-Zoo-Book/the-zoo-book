import { Flex, Text, IconButton } from '@chakra-ui/react'
import { MdFilterList } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

export default function TopNav() {
  return(
    <>
      <Flex justifyContent="space-between" alignItems="center" p={2} bg="#407B55" color='white'>
        <IconButton
          colorScheme='none'
          aria-label='list'
          icon={<MdFilterList size={24} />}
        />
        <Text fontSize="3xl">The Zoo Book</Text>
        <IconButton
          colorScheme='none'
          aria-label='search'
          icon={<FiSearch size={24} />}
        />
      </Flex>
    </>
  )
}
