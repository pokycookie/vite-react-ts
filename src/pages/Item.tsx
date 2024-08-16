import useParamId from '@/hooks/use-param-id'

export default function Item() {
  const id = useParamId()

  if (id === null) {
    return <div>ERROR</div>
  }

  return <>Item: {id}</>
}
