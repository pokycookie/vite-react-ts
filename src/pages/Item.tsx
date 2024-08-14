import useParamId from '@/hooks/useParamId'

export default function Item() {
  const id = useParamId()

  if (id === null) {
    return <div>ERROR</div>
  }

  return <>Item: {id}</>
}
