import Card from "../components/Card"
import '../css/pages/main.css'

export default function Main () {
  const arr = [
    "배열",
    "문자열",
    "해쉬",
    "다이나믹 프로그래밍",
    "그래프",
    "트리"
  ]
  return (
    <div className="main-container">
      {
        arr.map((el, idx) => {
          return (
            <Card
              key={idx}
              cardTitle={el}
            />)
        })
      }

    </div>

  )
}
