import { usePageination } from '../../hooks/usePageination';
import './groupStyle.scss'
const Groups = () => {

       const data = [
        { name: 'Group 1', id: 1 },
        { name: 'Group 2', id: 2 },
        { name: 'Group 3', id: 3 },
        { name: 'Group 4', id: 4 },
        { name: 'Group 5', id: 5 },
        { name: 'Group 6', id: 6 },
        { name: 'Group 7', id: 7 },
        { name: 'Group 8', id: 8 },
        { name: 'Group 9', id: 9 },
        { name: 'Group 10', id: 10 },
    ];

    const { courentData, courentPage, numberArr, setCourentPage } = usePageination({ data });

    return (
        <div className='group-container'>
            {courentData.map((item: any, index: number) => (
                <div key={index} className="group-card">
                    <p>{item.name}</p>
                </div>
            ))}
            <div className="pageination-container">
                <button onClick={() => setCourentPage(courentPage > 1 ? courentPage - 1 : 1)}>Prev</button>
                <div className="pageination">
                    {numberArr.map((pageNumber: number, index: number) => (
                        <div className={`eace-page ${courentPage === pageNumber ? "active" : ""}`} key={index} onClick={() => setCourentPage(pageNumber)}>
                            {pageNumber}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Groups