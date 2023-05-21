import Item from "../Item/Item"
import './results.css'

interface ResultsProps {
  items: ItemProps[]
}

const Results: React.FC<ResultsProps> = ({ items }) => {
  return (
    <div className="results">
      {items.map((item: ItemProps, index) => (
      <Item link={item.link} title={item.title}
          key={index}
        />
      ))
      }
    </div>
  )
}

export default Results
