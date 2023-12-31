import Image from 'next/image'

import Skills from '@/content/skills.json'

export type SkillType = keyof typeof Skills.skills

type SkillProps = {
  skill: SkillType
  size?: 'small' | 'large' | 'auto'
}

export default function Skill({ skill, size = 'auto' }: SkillProps) {
  const assetPath = Skills.skills[skill]

  return (
    <div className="flex shrink-0 items-center">
      <picture>
        {size !== 'small' && (
          <source
            srcSet={assetPath}
            media="(min-width: 576px)"
            width={24}
            height={24}
          />
        )}
        {size !== 'large' && (
          <source
            srcSet={assetPath}
            media="(min-width: 0px)"
            width={16}
            height={16}
          />
        )}
        <Image src={assetPath} alt={skill} width={24} height={24} />
      </picture>
      <span
        className={`ml-[10px] font-heading text-xs text-heading-color xs:text-lg ${
          size === 'small' && '!text-xs'
        } ${size === 'large' && '!text-lg'}`}
      >
        {skill}
      </span>
    </div>
  )
}
