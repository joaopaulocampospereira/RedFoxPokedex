import {Col, Container, Row, Table} from "react-bootstrap";
import CustomNavbar from "../../src/Components/CustomNavbar";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";
import CustomHead from "../../src/Components/CustomHead";

export default function Search({pokemons}) {
    return (
        <>
            <CustomHead />
            <CustomNavbar />

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Nº</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Weather</th>
                </tr>
                </thead>
                <tbody>
                {pokemons.map((pokemon)=>(
                    <tr>
                        <td>{pokemon.id}</td>
                        <td>
                            <div>
                                <Image loader={() => 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.img_name+'.png'} src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.img_name+'.png'} width={96} height={96}/>
                            </div>
                        </td>
                        <td>{pokemon.name}</td>
                        <td>
                            {
                                pokemon.type.map((item)=>(
                                    item.name.toString()+ " "
                                ))
                            }
                        </td>
                        <td>
                            {
                                pokemon.weather.map((item)=>(
                                    item.name.toString()+" "
                                ))
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}

export async function getStaticPaths() {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({params}){
    const res = await fetch(`http://localhost:3333/search?search=`+params.name)
    const data = await res.json()
console.log("teste")
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            pokemons: data
        }, // will be passed to the page component as props
    }
}
