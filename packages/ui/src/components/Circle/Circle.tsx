import { Stack, styled } from '@tamagui/core'

export const Circle = styled(Stack, {
  borderRadius: 100_000_000,

  variants: {
    pin: {
      top: {
        position: 'absolute',
        top: 0,
      },
    },

    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },

    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  } as const,
})
