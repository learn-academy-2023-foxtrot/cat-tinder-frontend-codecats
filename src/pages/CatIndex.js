import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"
import catImage from "../assets/belinda.avif"
import catImage2 from "../assets/franklin.webp"
import catImage3 from "../assets/solo.avif"

const CatIndex = ({ cats }) => {
    const cardStyle = {
        width: "18rem",
        margin: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        padding: "0 20px"
    }
    const imageStyle = {
        width: "100%",
        height: "500px",
        borderRadius: "10px 10px 0 0",
    }
    const buttonStyle = {
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "0 0 10px 10px",
        padding: "10px 20px",
        cursor: "pointer",
        transition: "background 0.3s",
    }
    const buttonHoverStyle = {
        background: "#0056b3",
    }
    const cardTitleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
    }
    const cardSubtitleStyle = {
        fontSize: "1rem",
        color: "#555"
    }
    const containerStyle = {
        margin: "40px",
    }
    return (
        <main style={{display: "flex", flexWrap: "wrap"}}>
            {cats?.map((cat, index) => {
                return (
                    <div 
                        key={index}
                        style={containerStyle}
                    >
                         <Card
                            style={{
                                cardStyle
                             }}
                            >
                        <CardBody>
                         <CardTitle tag="h5" style={cardTitleStyle}>
                            {cat.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            style={cardSubtitleStyle}
                        >
                            Age: {cat.age}
                        </CardSubtitle>
                        </CardBody>
                            <img
                                alt={`image of ${cat.name}`}
                                src= {index % 3 === 0 ? catImage2 : index % 2 === 0 ? catImage3 : catImage}
                                style={imageStyle}
                                width="100%"
                            />
                        <CardBody>
                             <Button 
                                style={buttonStyle} 
                                onMouseEnter={(e) => (e.target.style = buttonHoverStyle)} 
                                onMouseLeave ={(e) => (e.target.style = buttonStyle)}>
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