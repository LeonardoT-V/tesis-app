function TitleContainer({ title, className, Icon }) {
  return (
    <h2
      className={`bg-content2 py-unit-xs px-unit-md rounded-md font-bold text-warning-600 flex gap-unit-sm items-center ${className}`}
    >
      {Icon && Icon}
      {title}
    </h2>
  )
}

export default TitleContainer
