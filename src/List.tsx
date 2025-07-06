import { useQuery } from "@tanstack/react-query"


const studentsData = [
  {
    id: "0001",
    name: "yamada",
    age: 20
  },
  {
    id: "0002",
    name: "tanaka",
    age: 21
  },
  {
    id: "0003",
    name: "yoshida",
    age: 22
  }
]

export const List = () => {
    const studentsQuery = useQuery({
    queryKey: ["students"],
    queryFn: () => {
      return [...studentsData]
    },
    placeholderData: [
      {
        id: "0000",
        name: "Sample",
        age: 99
      }
    ]
  })
  console.log(studentsQuery)

  if (studentsQuery.status === "pending") return <p>ローディング中・・・</p>
  if (studentsQuery.status === "error") return <p>エラー！</p>
  return (
    <>
    {studentsQuery.data.map(student => (
      <p key={student.id}>{student.name}</p>
    ))}
    </>
  )
}