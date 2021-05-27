import {Link} from "react-router-dom";


export default function User ({item, url}) {
return (
<div>
    {item.id} - {item.name} -
    <Link to={url + '/' + item.id}>details</Link>
</div>
);
}