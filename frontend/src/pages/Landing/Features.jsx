import {
  Calendar,
  CreditCard,
  Globe,
  MessageCircle,
  PieChart,
} from "lucide-react"
import {
  Container,
  CardContainer,
  Card,
  Name,
  Description,
  Title,
} from "./Features.styled"

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Reach a global audience",
      description:
        "Promote your events to millions of people around the world.",
      icon: Globe,
    },
    {
      id: 2,
      name: "Manage events with ease",
      description:
        "Create, manage, and promote your events easily. Plus, manage your sales, view your reports, and check in attendees with our free mobile app.",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Engage with your audience",
      description:
        "Use our promotional tools to engage with your audience before, during, and after your events.",
      icon: MessageCircle,
    },
    {
      id: 4,
      name: "Understand your performance",
      description:
        "Track your sales, view your reports, and manage your sales and payouts using our online dashboard or mobile app.",
      icon: PieChart,
    },
    {
      id: 5,
      name: "Flexible payment options",
      description:
        "Choose from our flexible payout options and get paid quickly. You can even get paid before your event ends if you need funds upfront.",
      icon: CreditCard,
    },
    {
      id: 6,
      name: "Sell tickets in multiple currencies",
      description:
        "Sell tickets in over 170 countries and territories, and receive payments in your currency.",
      icon: Globe,
    },
  ]

  return (
    <Container>
      <Title>Why host your events on EventEase?</Title>
      <CardContainer>
        {features.map(({ id, name, description, icon: Icon }) => (
          <Card key={id}>
            <Icon />
            <Name>{name}</Name>
            <Description>{description}</Description>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
}

export default Features
