import { useEffect, useState } from "react"
import Button from "../../components/Button"
import { getPopularEvents } from "../../services/popular"
import eventBackground from "../../assets/hero3.webp"
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

const PopularEvents = () => {
  const events = [
    {
      id: 1,
      name: "Festivals and Concerts",
      description: "Music festivals, concerts, and live performances",
    },
    {
      id: 2,
      name: "Sports and Marathons",
      description: "Marathons, football games, and other sports events",
    },
    {
      id: 3,
      name: "Art and Exhibitions",
      description: "Art galleries, exhibitions, and creative workshops",
    },
    {
      id: 4,
      name: "Tech and Conferences",
      description: "Technology meetups, conferences, and hackathons",
    },
    {
      id: 5,
      name: "Food and Markets",
      description: "Food festivals, farmers' markets, and culinary events",
    },
  ]

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
        <Button label="view all popular categories" />
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
