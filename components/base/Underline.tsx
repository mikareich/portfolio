import clsx from 'clsx'

type UnderlineProps = {
  active?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export default function Underline({
  children,
  active,
  className,
  ...props
}: UnderlineProps) {
  return (
    <span
      className={clsx('group/underline relative whitespace-nowrap', className)}
      {...props}
    >
      <span className="absolute bottom-1 left-0 h-[4px] w-full bg-primary-color opacity-60 transition-all group-hover/underline:h-full" />
      <span
        className={`relative ${
          active ? 'text-heading-color' : 'text-body-color'
        }`}
      >
        {children}
      </span>
    </span>
  )
}
