import React, {useState, /* useEffect */} from 'react';
/* import InfiniteScroll from 'react-infinite-scroll-component'; */
import { useSelector,/*  useDispatch */} from 'react-redux';
import CardPeople from '../../Cards/CardPeople';
import Paginado from '../Paginado/Paginado';
/* import Loading from '../../Loading/Loading' */

export default function Renderizado(){
    const searching = useSelector((state)=> state.rootReducer.search);
    // const [page, setPage] = useState(0)
    // const dispatch = useDispatch();
    // console.log("RENDER", search)
    // useEffect(() => {
    //     dispatch(Search(search, page))
    // }, [page])

    const [actualPage, setActualPage] = useState(1);         
    const [cardPage, /* setDogPage */] = useState(4);            
    const indexLast = actualPage * cardPage;               
    const indexFirst = indexLast - cardPage;              
    const totalCardsPage = searching?.slice(indexFirst, indexLast);
    const length = searching?.length;

    /* console.log(searching, 'SOY EL SEARCHING 06/12') */

    const paginado = (pageNumber) => {
        setActualPage(pageNumber);
    }

    return(
        // <InfiniteScroll dataLength={searching.length} hasMore={true} next={()=> setPage((prev) => prev + 1)}>
        <div className='renderizado-container'>
            <Paginado cardPage={cardPage} allCards={length} 
            paginado={paginado} actualPage={actualPage}/>
            <div className='container-cards'>
                        {   
                            

                            totalCardsPage?.map((e) => {
                                
                                return <CardPeople
                                profilePicture={e.profilePicture}
                                name={e.name}
                                lastName={e.lastName}
                                technology = {e.technologies}
                                qualification = {e.qualification}
                                id={e.id}
                                key={e.id}
                                categories={e.categories}
                                />
                            })
                            
                            
                            
                        }
                        </div>
        </div>
                // </InfiniteScroll>
    )
}