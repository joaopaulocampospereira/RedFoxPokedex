import Image from 'next/image'
import {Container, Form, FormControl, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";
import logo from "../../public/RedDexlogo.png";


export default function CustomNavbar() {

    const [weathers, setWeather] = useState([])
    const [types, setTypes] = useState([])

    const router = useRouter()

    useEffect(()=>{
        const getWeather = async () =>{
            try{
                const res = await fetch("http://localhost:3333/weather/")
                const data = await res.json()

                setWeather(data)
            }catch (e) {
                setWeather([])
            }

        }

        const getTypes = async ()=>{
            try {
                const res = await  fetch("http://localhost:3333/type")
                const data = await res.json()

                setTypes(data)
            }catch (e) {
                setTypes([])
            }
        }

        getWeather()
        getTypes()
    }, [])

    const search = e =>{
        e.preventDefault()

        // alert()

        router.push('/search/'+e.target.search.value)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky={"top"}>
            <Container >
                <Navbar.Brand href="/">
                    <Image
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="RedDex logo"
                    />{' '}
                    RedDex
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-around">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Link  href="/"><a className="nav-link">Home</a></Link>

                        <NavDropdown title="Weather" id="navbarScrollingDropdown">
                            {

                                weathers.map((item)=>(
                                    <Link  href={"/weather/"+item.name}><a className="dropdown-item">{item.name}</a></Link>
                                ))
                            }
                        </NavDropdown>
                        <NavDropdown title="Type" id="navbarScrollingDropdown">
                            {
                                types.map((item)=>(
                                    <Link  href={"/types/"+item.name}><a className="dropdown-item">{item.name}</a></Link>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" onSubmit={search}>
                        <FormControl
                            name="search"
                            type="search"
                            placeholder="Buscar"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button type="submit" variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// export async function getStaticProps(context)  {
//     const weatherres = await fetch("http://localhost:3333/weather")
//     const weathers = await weatherres.json()
//
//     const typeres = await  fetch("http://localhost:3333/type")
//     const types = await typeres.json()
//
//     return {
//         props: {
//             weathers: weathers
//         }, // will be passed to the page component as props
//     }
// }