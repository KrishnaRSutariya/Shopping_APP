import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import ALLCard from "./ALLCard";
import PreLoader from "./PreLoader";
import FULLCard from './FULLCard';
import { useParams } from "react-router-dom";

export const detailData = createContext();

const FullData = () => {

    const [data, setdata] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
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
                    ? <detailData.Provider value={{ data }}>
                        <FULLCard />
                    </detailData.Provider>
                    : <PreLoader />
            }
        </>
    )
}

export default FullData;