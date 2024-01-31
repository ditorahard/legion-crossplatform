import { Label, RadioGroup as TamaguiRadioGroup, SizeTokens, ThemeableStack, XStack, YStack } from 'tamagui'

export default function RadioButton(props: {
    size: SizeTokens
    value: string
    label: string
  }) {
    const id = `radiogroup-${props.value}`
    return (
      <TamaguiRadioGroup defaultValue="3" name="form">
        <XStack width={300} alignItems="center" space="$4">
          <TamaguiRadioGroup.Item value={props.value} id={id} size={props.size}>
            <TamaguiRadioGroup.Indicator />
          </TamaguiRadioGroup.Item>
          <Label size={props.size} htmlFor={id}>
            {props.label}
          </Label>
        </XStack>
      </TamaguiRadioGroup>
    )
  }
  