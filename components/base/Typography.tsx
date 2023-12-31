import appendStyles from '@/utils/appendStyles'

export const Title = appendStyles(
  'h1',
  'font-heading text-2xl xs:text-5xl font-bold text-heading-color',
)

const headingStyles = 'font-heading font-medium text-heading-color'
export const Heading1 = appendStyles(
  'h1',
  `${headingStyles} text-xl xs:text-4xl mb-[14px]`,
)
export const Heading2 = appendStyles(
  'h2',
  `${headingStyles} text-lg xs:text-3xl mb-[16px]`,
)
export const Heading3 = appendStyles(
  'h3',
  `${headingStyles} text-base xs:text-2xl mb-[12px]`,
)
export const Heading4 = appendStyles(
  'h4',
  `${headingStyles} text-base xs:text-xl mb-[8px]`,
)
export const Heading5 = appendStyles(
  'h5',
  `${headingStyles} text-base xs:text-lg mb-[8px]`,
)

const bodyStyles = 'font-body text-body-color'
export const TextLarge = appendStyles('p', `${bodyStyles} xs:text-lg my-[20px]`)

export const Text = appendStyles(
  'p',
  `${bodyStyles} leading-normal text-small xs:text-base my-[20px]`,
)

export const Small = appendStyles('p', `${bodyStyles} leading-loose text-xs`)
