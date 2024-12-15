import { useEffect, useState } from "react"
import Button from "../../components/Button"
import {
  EventsContainer,
  TitleContainer,
  Title,
  CardContainer,
  Card,
  Background,
  Name,
  Description,
} from "./PopularEvents.styled"
import { getPopularEvents } from "../../services/popular"
import eventBackground from "../../assets/hero3.webp"
import { useNavigate } from "react-router-dom"

const PopularEvents = () => {
  const navigate = useNavigate()
  const [popular, setPopular] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const events = await getPopularEvents()
        setPopular(events)
      } catch (error) {
        setError(error)
      }
    }

    fetchPopular()
  }, [])

  return (
    <EventsContainer>
      <TitleContainer>
        <Title>Popular events</Title>
        <Button
          label="view all popular categories"
          onClick={() => navigate("events")}
        />
      </TitleContainer>

      <CardContainer>
        {popular.map(({ id, name, description }) => (
          <Card key={id}>
            <Background src={eventBackground} />
            <Name>{name}</Name>
            <Description>{description}</Description>
          </Card>
        ))}
      </CardContainer>
    </EventsContainer>
  )
}

export default PopularEvents
