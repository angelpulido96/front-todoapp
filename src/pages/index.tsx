import Login from '../modules/Login'

export default function Home() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Login />
    </div>
  )
}
