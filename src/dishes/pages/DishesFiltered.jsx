import { DishCard } from "../components/DishCard"

export const DishesFiltered = ({results}) => {
  return (
    <div>
        <ul>{results.map((text) => (
                    <DishCard key={text} text={text}></DishCard>
                ))}
            </ul>
    </div>
  )
}
