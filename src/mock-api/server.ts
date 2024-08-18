import api from '@/configs/api'
import { Model, createServer } from 'miragejs'

export default function server() {
  createServer({
    models: {
      reminder: Model,
    },

    routes() {
      this.namespace = 'api'

      this.get(api.test, (schema) => schema.all('reminder'), { timing: 500 })

      this.post(api.test, (schema, request) => {
        const attr = JSON.parse(request.requestBody)
        return schema.create('reminder', attr)
      })
    },
  })
}
