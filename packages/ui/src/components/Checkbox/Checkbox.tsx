import { styled, Checkbox, Label, SizeTokens, XStack, YStack } from 'tamagui'
import { Check as CheckIcon,} from '@tamagui/lucide-icons'

export const StyledCheckbox = styled(Checkbox, {
  name: 'Checkbox',
  borderRadius:5,

  variants: {
    checked: {
      true: {
        backgroundColor: '#875bf7',
      }
    }
  } as const,
})


export function CheckboxWithLabel(props: { text: string, size: SizeTokens; defaultChecked?: boolean, variant: string, }) {
    const id = `checkbox-${props.size.toString().slice(1)}`
    return (
      <XStack w={300} ai="center" space="$4">
        <StyledCheckbox id={id} size={props.size} defaultChecked={props.defaultChecked}>
          <StyledCheckbox.Indicator>
            {props.variant === 'check' ? <CheckIcon color="white" /> : <CheckIcon color="blue" />}
          </StyledCheckbox.Indicator>
        </StyledCheckbox>
        <Label size={props.size} htmlFor={id}>
          {props.text}
        </Label>
      </XStack>
    )
  }

  export default CheckboxWithLabel;
  
