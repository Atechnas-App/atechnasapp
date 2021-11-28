import CardPeople from "../../Cards/CardPeople"
import { useSelector } from "react-redux";




export default function Cards(){
    const cards = useSelector((state) => state.search)
   



    return(
        <div>
            {cards?.map((e) => {
            return <CardPeople
            profilePicture={e.profilePicture}
            name={e.name}
            lastName={e.lastName}
            technology = {e.technology}
            qualification = {e.qualification}
            id={e.id}
            key={e.id}
            />
            })}
        </div>
    )
}