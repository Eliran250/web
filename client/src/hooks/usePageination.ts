import { useState } from "react";

interface IProps {
    data: any,
}

export const usePageination = ({ data }: IProps) => {
    const [courentPage, setCourentPage] = useState<number>(1);

    const itemPerPage = 10;

    const totalPages = Math.ceil(data.users.length / itemPerPage)

    const courentData = data.users.slice((courentPage - 1) * itemPerPage, courentPage * itemPerPage);

    const numberArr = Array.from({ length: totalPages }, (_, i) => i + 1);

    return {
        setCourentPage,
        courentPage,
        numberArr,
        courentData
    }
}
