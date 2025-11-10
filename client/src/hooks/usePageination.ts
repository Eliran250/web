import { useState } from "react";

interface IProps {
    data: any,
}

export const usePageination = ({ data }: IProps) => {
    const [currentPage, setCourentPage] = useState<number>(1);

    const itemPerPage = 10;

     const dataArray = Array.isArray(data)
    ? data
    : Object.values(data).find((val) => Array.isArray(val)) || [];

  const totalPages = Math.ceil(dataArray.length / itemPerPage) || 1;

    const courentData = dataArray.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);

    const numberArr = Array.from({ length: totalPages }, (_, i) => i + 1);

    return {
        setCourentPage,
        courentPage: currentPage,
        numberArr,
        courentData
    }
}
