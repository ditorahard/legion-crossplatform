import { styled, Input as TamaguiInput } from 'tamagui'

export const Textfield = styled(TamaguiInput, {
  name: 'Textfield',
  borderRadius:5,
  variants: {
    primary: {
      true:{
        backgroundColor: '#875bf7',
        color: '#fff',
        hoverStyle: { backgroundColor: '#6927da' },
      }
    },
    outline: {
      true: {
        borderColor: '#875BF7',
        color: '#875BF7',
        borderWidth: 1,
        hoverStyle: {
          backgroundColor: '#ECE9FE',
          borderColor: '#7839EE',
          color: '#7839EE',
          boxShadow: 'none !important',
          borderWidth: 1,
        },
      },
    },
  } as const,
})
