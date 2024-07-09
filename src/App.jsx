import Input from './components/Input'
import { RecoilRoot } from 'recoil'
import Display from './components/Display'
function App() {
  return (
    <>
      <RecoilRoot>
        <Input />
        <Display />
      </RecoilRoot>
    </>
  )
}

export default App
