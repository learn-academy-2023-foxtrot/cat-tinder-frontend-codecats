import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate, useParams } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)

    const [editCat, setEditCat] = useState({
        name: currentCat?.name,
        age: currentCat?.age,
        hobbies: currentCat?.hobbies,
        image: currentCat?.image
    })
    const handleChange = (e) => {
        setEditCat({...editCat, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate("/catindex")
    }
    return (
        <>
        <h1>Update Your Cat</h1>
        <Form>
  <FormGroup>
    <Label for="name">
      Name
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Enter Cats Name Here"
      type="text"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="age">
      Age
    </Label>
    <Input
      id="age"
      name="age"
      placeholder="Enter Cats Age Here"
      type="number"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="hobbies">
      Hobbies
    </Label>
    <Input
      id="hobbies"
      name="hobbies"
      placeholder="Cats Hobby"
      type="text"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="image">
      Image
    </Label>
    <Input
      id="image"
      name="image"
      placeholder="Enter Image URL Here"
      type="url"
      onChange={handleChange}
    />
  </FormGroup>
   <Button onClick={handleSubmit} name="submit">
    Submit Updates
  </Button>
</Form>
        </>
    )
}

export default CatEdit