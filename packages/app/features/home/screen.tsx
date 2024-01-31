import {
  Anchor,
  Button,
  H1,
  H2,
  H3,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
  Textfield, 
  RadioButton, 
  Textarea,
  Select,
  Adapt,
  LinearGradient,
  ScrollView, 
  Switch, 
  Checkbox, 
  Circle,

} from '@my/ui'
import { ChevronDown, ChevronUp, Check } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/dito',
  })

  return (
    <ScrollView>
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4">
        <H1 ta="center">Welcome to Legion.</H1>
        <Paragraph ta="center">
          This is a simple page to showcase legion design system in react native. Touch each component to test the components function.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Initiated by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @ditorahard
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
      </YStack>

      <YStack f={1} jc="center" ai="center" space>
          <H2 ta="center">Components</H2>
          <H3 ta="center">
            Bottom Sheet
          </H3>
          <SheetDemo />
          <H3 ta="center">
            Button
          </H3>
          <Button {...linkProps} primary>
          Solid
          </Button>
          <Button {...linkProps} outline>
            Outline
          </Button>
          <H3 ta="center">
            Select
          </H3>
          <SelectDemo />
          <H3 ta="center">
            Switch
          </H3>
          <Switch />
          <H3 ta="center">
            Textfield
          </H3>
          <XStack alignItems="center" space="$2">
            <Textfield size="$4" borderWidth={2} />
          </XStack>
          <H3 ta="center">
            Textarea
          </H3>
          <XStack alignItems="center" space="$2">
          <Textarea  size="$4" borderWidth={2}/>
          </XStack>
          <H3 ta="center">
            Checkbox
          </H3>
          <Checkbox variants={{checked:true}} size="$3" defaultChecked text="this is checkbox" />
          <H3 ta="center">
            RadioButton
          </H3>
            <RadioButton />
        </YStack>

    </ScrollView>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

export function SelectDemo() {
  const [val, setVal] = useState('apple')
  return (
    <Select id="food" value={val} onValueChange={setVal}>
      <Select.Trigger w={180} iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton ai="center" jc="center" pos="relative" w="100%" h="$3">
          <YStack zi={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', '$backgroundTransparent']}
            br="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <Select.Group space="$-0">
            <Select.Label>Fruits</Select.Label>
            {items.map((item, i) => {
              return (
                <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                  <Select.ItemText>{item.name}</Select.ItemText>
                  <Select.ItemIndicator ml="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              )
            })}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton ai="center" jc="center" pos="relative" w="100%" h="$3">
          <YStack zi={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$backgroundTransparent', '$background']}
            br="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}

const items = [
  { name: 'Apple' },
  { name: 'Pear' },
  { name: 'Blackberry' },
  { name: 'Peach' },
  { name: 'Apricot' },
  { name: 'Melon' },
  { name: 'Honeydew' },
  { name: 'Starfruit' },
  { name: 'Blueberry' },
  { name: 'Rasberry' },
  { name: 'Strawberry' },
  { name: 'Mango' },
  { name: 'Pineapple' },
  { name: 'Lime' },
  { name: 'Lemon' },
  { name: 'Coconut' },
  { name: 'Guava' },
  { name: 'Papaya' },
  { name: 'Orange' },
  { name: 'Grape' },
  { name: 'Jackfruit' },
  { name: 'Durian' },
]

