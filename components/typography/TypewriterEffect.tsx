'use client'

import type {
  Options as TypewriterOptions,
  TypewriterState,
} from 'typewriter-effect'
import Typewriter from 'typewriter-effect'

type TypewriterEffectProps = {
  children: string
  removeCursorAfterTyping?: boolean
  onFinishedTyping?: (props: TypewriterState) => void
} & TypewriterOptions

export default function TypewriterEffect({
  children,
  removeCursorAfterTyping = true,
  onFinishedTyping,
  ...options
}: TypewriterEffectProps) {
  return (
    <span className="flex">
      <span>&#8203;</span>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(children)
            .start()
            .callFunction(({ elements }) => {
              const { cursor } = elements
              if (removeCursorAfterTyping && cursor) cursor.remove()

              onFinishedTyping?.({ elements })
            })
        }}
        options={options}
      />
    </span>
  )
}
