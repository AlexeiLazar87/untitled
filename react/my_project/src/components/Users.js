import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import User from "./User";

export default function Users(props) {
    let {match: {url}} = props;

    let [users, setUsers] = useState([]);
    let [numPage, setNumPage] = useState((1));
    let [totalPage, setTotalPage] = useState((1));

    function newPage() {
        if (numPage > totalPage) {
            return
        }
        setNumPage(numPage + 1)
    }

    function PreviousPage() {
        if (numPage === totalPage) {
            return
        }
        setNumPage(numPage - 1)
    }

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + numPage)
            .then(value => value.json())
            .then(value => {
                setUsers([...value.data])
            })
    }, [numPage])

    return (
        <div>
            <div>
                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }
            </div>
            <div>
                <Link to={'/users'}>
                    <button onClick={PreviousPage}>PreviousPage</button>
                </Link>
                <Link to={'/users'}>
                    <button onClick={newPage}>NextPage</button>
                </Link>
            </div>
        </div>
    );
}