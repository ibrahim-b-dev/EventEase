import { ArrowLeftCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    color: #17cc17;
  }
`

const BackIcon = styled(ArrowLeftCircle)`
  pointer-events: none;
`

const BackButton = ({ size = "2rem" }) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <IconWrapper onClick={handleBackClick}>
      <BackIcon size={size} />
    </IconWrapper>
  )
}

export default BackButton
