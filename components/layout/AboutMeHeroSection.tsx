'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import TypewriterEffect from '../typography/TypewriterEffect'
import { Heading3, Title } from '../typography/Typography'

export default function AboutMeHeroSection() {
  const avatarSrc = '/app/avatar.svg'

  const [showSubtitle, setShowSubtitle] = useState(false)

  return (
    <section className="mb-[50px] grid w-full grid-cols-[1fr_auto] grid-rows-[auto_auto] xs:mb-[100px]">
      <Title className="col-span-1 self-end">
        <TypewriterEffect onFinishedTyping={() => setShowSubtitle(true)}>
          Hi, I&apos;m Mika Reich
        </TypewriterEffect>
      </Title>
      <Heading3 className="self-start !text-body-color">
        {showSubtitle ? (
          <TypewriterEffect>Student & programming enthusiast</TypewriterEffect>
        ) : (
          <span>&#8203;</span>
        )}
      </Heading3>
      <picture className="col-start-2 row-span-2 row-start-1 self-center overflow-hidden rounded-full">
        <source
          srcSet={avatarSrc}
          media="(min-width: 1024px)"
          width={300}
          height={300}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 768px)"
          width={260}
          height={260}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 640px)"
          width={220}
          height={220}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 576px)"
          width={180}
          height={180}
        />
        <source
          srcSet={avatarSrc}
          media="(min-width: 0px)"
          width={140}
          height={140}
        />

        <Image src={avatarSrc} alt="Mika Reich" width={300} height={300} />
      </picture>
    </section>
  )
}
