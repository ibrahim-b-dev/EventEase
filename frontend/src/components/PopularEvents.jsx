import styled from "styled-components"
import Button from "./Button"
import eventBackground from "../assets/hero3.webp"

const Container = styled.section`
  padding: 1rem;
`

const TitleContainer = styled.div``

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5em;
`

const CardContainer = styled.div`
  display: flex;
  margin: 1em 0;
  gap: 10px;
  justify-content: space-between;
`

const Card = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: calc(33.33% - 10px);
  max-width: 300px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`

const Background = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: url(${eventBackground}) no-repeat top left;
  background-size: cover;
  border-radius: 12px;
`

const Name = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`

const Description = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: #4f964f;
`

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

  return (
    <Container>
      <TitleContainer>
        <Title>Popular event categories</Title>
        <Button label="view all popular categories" />
      </TitleContainer>

      <CardContainer>
        {events.map(({ id, name, description }) => (
          <Card key={id}>
            <Background src={eventBackground} />
            <Name>{name}</Name>
            <Description>{description}</Description>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
}

export default PopularEvents