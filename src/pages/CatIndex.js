import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"

const CatIndex = ({ cats }) => {
    console.log(cats)
    return (
        <main>
            {cats?.map((cat, index) => {
                return (
                    <div key={index}>
                         <Card
                            style={{
                                width: '18rem'
                             }}
                            >
                        <CardBody>
                         <CardTitle tag="h5">
                            {cat.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Age: {cat.age}
                        </CardSubtitle>
                        </CardBody>
                            <img
                                alt={`image of ${cat.name}`}
                                src={cat.image}
                                width="100%"
                            />
                        <CardBody>
                             <Button>
                                <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                                More Info
                                </NavLink>
                            </Button>
                        </CardBody>
                        </Card>
                    </div>
                )
            })}
        </main>
    )
}

export default CatIndex