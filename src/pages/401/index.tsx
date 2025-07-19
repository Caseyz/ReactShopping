import { Link } from 'react-router-dom'

const Page401 = () => {
  return (
    <>
      <div>401</div>
      <Link to='/login' style={{color: 'blue'}}>Login</Link>
    </>
  )
}

export default Page401