import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Icon icon="solar:airbuds-case-open-bold" width={20} height={20} />
    </div>
  )
}
