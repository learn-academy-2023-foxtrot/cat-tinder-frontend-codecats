import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


const CatNew = ({createCat}) => {
    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        hobbies: "",
        image: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setNewCat({...newCat, [e.target.name]: e.target.value})
    }
    console.log('newCat: ', newCat)
    const handleSubmit = () => {
        createCat(newCat)
        navigate('/catindex')
    }
    return (
        <>
        <h1>New Cat</h1>
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
      value={newCat.name}
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
      value={newCat.age}
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
      value={newCat.hobbies}
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
      value={newCat.image}
    />
  </FormGroup>
   <Button onClick={handleSubmit} name="submit">
    Submit
  </Button>
</Form>
</>
    )
}

export default CatNew