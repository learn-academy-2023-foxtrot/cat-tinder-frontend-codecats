import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap"

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)
    console.log(currentCat)
    return (
        <>
        <h1>Show Cat</h1>
            <main className="card">
                {currentCat && (
                    <Card
                            style={{
                                width: '18rem'
                             }}
                            >
                        <CardBody>
                         <CardTitle tag="h5">
                            {currentCat.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Age: {currentCat.age}
                        </CardSubtitle>
                        </CardBody>
                            <img
                                alt={`image of ${currentCat.name}`}
                                src={currentCat.image}
                                width="100%"
                            />
                        <CardBody>
                            {currentCat.hobbies}
                        </CardBody>
                    </Card>
                )}
             </main>
        </>
    )
}

export default CatShow