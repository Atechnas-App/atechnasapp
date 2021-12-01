import TechFilter from "./TechnologyFilter/TechnologyFilter"
import QualFilter from "./QualificationFilter/QualificationFilter"
import CatFilter from "./CategoryFilter/CategoryFilter"

export default function Filtros(){
    return(
        <div>
            <form>
            <CatFilter/>
            <QualFilter/>
            <TechFilter/>
            </form>
        </div>
    )
}