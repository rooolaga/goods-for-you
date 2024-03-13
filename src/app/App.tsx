import { Checkbox } from '@/shared/ui/Checkbox'
import { Text } from '../shared/ui/Text'
import './styles/index.scss'

function App() {

  return (
    <div className='ml-64'> 
      <Text as='h1' color='gray'>asd</Text>
      <Text>asd</Text>
      <Text as='h2'>asd</Text>
      <Checkbox label='Check label' id="first_check" />
    </div>
  )
}

export default App
