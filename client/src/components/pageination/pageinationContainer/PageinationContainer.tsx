import { useState } from "react"
import PageinationEmployees from "../pageinaitionEmployees/PageinationEmployees";

interface IProps {
    data: any,
}

const PageinationContainer = ({ data }: IProps) => {
    const [courentPage, setCourentPage] = useState<number>(1);
    
    const itemPerPage = 10;

    const totalPages = Math.ceil(data.users.length / itemPerPage)

    const courentData = data.users.slice((courentPage - 1) * itemPerPage, courentPage * itemPerPage);

    const numberArr = Array.from({ length: totalPages }, (_, i) => i + 1);

    for (let index = 1; index <= totalPages; index++) {
        numberArr.push(index);
    }


    return <PageinationEmployees setCourentPage={setCourentPage} courentPage={courentPage} 
    numberArr={numberArr} courentData={courentData}/>

    
}

export default PageinationContainer