import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import ALLCard from "./ALLCard";
import PreLoader from "./PreLoader";

export const userData = createContext();

const CardData = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setdata(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });

    return (
        <>
            {
                data != ''
                    ? <userData.Provider value={{ data }}>
                        <ALLCard />
                    </userData.Provider>
                    : <PreLoader />
            }
        </>
    )
}

export default CardData;