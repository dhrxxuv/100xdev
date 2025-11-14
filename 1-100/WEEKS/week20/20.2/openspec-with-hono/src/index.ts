import { createRoute, OpenAPIHono } from '@hono/zod-openapi'
import { ParamsSchema, PostBodySchema } from './input'
import { UserSchema } from './output'
import { swaggerUI } from '@hono/swagger-ui'

const getRoute = createRoute({
  method:'get',
  path:'/user/{id}',
  request:{
    params:ParamsSchema
  },
  responses:{
    200:{
      content:{
        'application/json':{
          schema:UserSchema
        }
      },
      description:"User detail"
    }
  }
})

const postRoute = createRoute({
  method: 'post',
  path: '/users', 
  request: {
    body: {
      content: {
        'application/json': {
          schema: PostBodySchema,
        },
      },
    },
  },
  responses: {
    200: { 
      content: {
        'application/json': {
          schema: UserSchema, 
        },
      },
      description: "User successfully created",
    },
  },
})

const app = new OpenAPIHono()

app.openapi(getRoute,(c)=>{
  const{id} = c.req.valid('param')
  return c.json({
    id,
    name:"Joe don",
    age:22
  })
})

app.openapi(postRoute,(c)=>{
  const{id} = c.req.valid('json')

  return c.json({
    id,
    name:"Joe don",
    age:22
  })
})


app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
  servers:[
    {
      url:'http://127.0.0.1:8787'
    }
  ]
})

app.get('/ui', swaggerUI({ url: '/doc' }))

export default app
