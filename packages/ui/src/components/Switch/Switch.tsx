import { styled, Switch as TamaguiSwitch } from 'tamagui'

export const StyledSwitch = styled(TamaguiSwitch, {
    name: 'Switch',
  
    variants: {
      primary: {
        true:{
          backgroundColor: '#875bf7',
          color: '#fff'
        }
      },
    } as const,
  })



export function Switch(props) {
  return (
    <TamaguiSwitch id="notify" backgroundColor='#875bf7'>
      <TamaguiSwitch.Thumb animation="quick" />
    </TamaguiSwitch>
  )
}

export default Switch;
  
