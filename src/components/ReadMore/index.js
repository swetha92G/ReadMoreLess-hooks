// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Title,
  Description,
  HooksImage,
  Data,
  ButtonContainer,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isButtonClicked, setButton] = useState(false)
  const data = isButtonClicked
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const btn = isButtonClicked ? 'Read Less' : 'Read More'

  const onClickButton = () => {
    setButton(prevState => !prevState)
  }

  return (
    <MainContainer>
      <Title>React Hooks</Title>
      <Description>Hooks are a new addition to React</Description>
      <HooksImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />
      <Data>{data}</Data>
      <ButtonContainer>
        <Button type="button" onClick={onClickButton}>
          {btn}
        </Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default ReadMore
