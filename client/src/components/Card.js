import '../css/components/card.css'

export default function Card (props) {
  return (
    <div className="card">
      <h2 className='card-title'>
        {props.cardTitle}
      </h2>
    </div>
  )
}