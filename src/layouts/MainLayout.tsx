import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div style={{ padding: 20, backgroundColor: 'red' }}>
      <Outlet />
    </div>
  )
}
