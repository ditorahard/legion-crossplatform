import { styled, Select } from 'tamagui'

export const StyledSelect = styled(Select, {
    name: 'StyledSelect',
    padding:10,
    borderRadius:5,
  
    variants: {
      primary: {
        true:{
          backgroundColor: '#875bf7',
          color: '#fff'
        }
      },
    } as const,
  })