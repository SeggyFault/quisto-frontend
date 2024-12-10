import Heading from "./Heading"

const Feature = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <img src={image} alt={heading.children} className="mb-4 w-18 h-18" />
      <Heading {...heading} />
      <p className="text-grey-300">{description}</p>
    </div>
  )
}

export default Feature