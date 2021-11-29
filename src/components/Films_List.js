import Films from "./Films";

const Films_List = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <Films name={film.name} 
                         key={film.id} 
                         url={film.url}/>
        )
    })

    return (
        <>
         <ul>
         {filmNodes}
         </ul>
        </>
    )
};

export default Films_List;