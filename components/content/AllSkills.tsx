import Skills from '@/content/skills.json'

import type { SkillType } from './Skill'
import Skill from './Skill'

export default function AllSkills() {
  const skills = Object.keys(Skills.skills)

  return (
    <div className="mt-[50px] flex flex-wrap gap-[20px] px-[20px]">
      {skills.map((skill) => (
        <Skill key={skill} skill={skill as SkillType} />
      ))}
    </div>
  )
}
