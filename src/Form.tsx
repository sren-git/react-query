import { useMutation } from "@tanstack/react-query"
import { useRef } from "react"


export const Form = () => {
  const taskRef = useRef<HTMLInputElement>(null)

  const taskMutation = useMutation({
    mutationFn: async (task:string|undefined) => {
      return task
    }
  })
  console.log(taskMutation)
  return (
    <div>
    <p>Todo</p>
    <input type="text" ref={taskRef} />
    <button onClick={() => taskMutation.mutate(taskRef.current?.value)}>作成</button>
    <p>{taskMutation.data}</p>
    </div>
  )
}