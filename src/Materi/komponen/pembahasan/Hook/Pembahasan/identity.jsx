import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Identity = () => {
    const fetchUser = useCallback(() => ['abad', 'nando', 'bakri'], []);
    let [user, setuser] = useState([]);
    useEffect(() => {
        const data = fetchUser();
        setuser(data);

    }, [fetchUser])

    return(
        <div>
            <ul>
                {
                    user.map(u => <li key={u}>{u}</li>)
                }
            </ul>
        </div>
    )
}

export default Identity;