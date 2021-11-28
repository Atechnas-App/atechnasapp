import CardPeople from "../../Cards/CardPeople"
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react';
import {Search} from '../../../actions/actions';


export default function Cards(){
    const [search, setSearch] = useState('');
    const cards = useSelector((state) => state.search)
    const dispatch = useDispatch();



    return(
        <div>
            {cards?.map((e) => {
            return <CardPeople
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