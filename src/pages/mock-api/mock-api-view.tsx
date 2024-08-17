import api from '@/configs/api'
import { useState } from 'react'
import axios from '@/configs/axios'

import { Stack, Button, Container } from '@mui/material'

export default function MockApiView() {
  const [test, setTest] = useState()

  const get = async () => {
    const { data } = await axios.get(api.test)
    setTest(data)
    console.log(data)
  }

  const post = async () => {
    const { data } = await axios.post(api.test, {
      text: 'Test Post',
    })
    console.log(data)
  }

  return (
    <Container>
      <Stack spacing={1}>
        <Button onClick={get}>GET</Button>
        <Button onClick={post}>POST</Button>
      </Stack>
    </Container>
  )
}
