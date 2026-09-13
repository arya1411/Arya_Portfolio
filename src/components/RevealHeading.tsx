type RevealHeadingProps = {
  as?: 'h2' | 'h3'
  text: string
  id?: string
  className?: string
}

export function RevealHeading({ as: Tag = 'h2', text, id, className }: RevealHeadingProps) {
  return (
    <Tag className={className} id={id} data-type-reveal aria-label={text}>
      {text.split(' ').map((word, index, words) => (
        <span className="type-word-clip" aria-hidden="true" key={`${word}-${index}`}>
          <span data-type-word>{word}</span>{index < words.length - 1 ? '\u00a0' : ''}
        </span>
      ))}
    </Tag>
  )
}
