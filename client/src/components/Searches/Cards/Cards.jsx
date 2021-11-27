import UsersCard from "./UsersCard/UsersCard"
import { useDispatch, useSelector } from "react-redux";





export default function Cards(){
    const cards = useSelector((state) => state.search)

    return(
        <div>
            {cards?.map((e) => {
            return <UsersCard
            profilePicture={e.profilePicture}
            name={e.name}
            technology = {e.technology}
            qualification = {e.qualification}
            id={e.id}
            key={e.id}
            />
            })}
        </div>
    )
}