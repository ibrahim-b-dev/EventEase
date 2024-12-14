import { Card, Background, Name, Description } from "./EventCard.styled"

const EventCard = ({ bgImg, name, description }) => {
  return (
    <Card>
      <Background src={bgImg} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Card>
  )
}

export default EventCard
