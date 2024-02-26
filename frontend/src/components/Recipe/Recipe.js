import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import axios from "axios";
import "./Recipe.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Recipe = () => {
  const navigate = useNavigate()
  const [recipes,setRecipes]=useState([])
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [calorieRange, setCalorieRange] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { token, userId } = useSelector((state) => {
    return {
      token: state.auth.token,
      userId: state.auth.userId,
    };
  });

  const fetchRecipes = (query) => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=8fe04fdd&app_key=71c0b5bf11e8df07b68092d65bde92da&from=0&to=20&calories=0-2000&health=alcohol-free`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      
      .then((response) => {
        console.log( "recipes",response);
        setRecipes(response.data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderRecipes = (query) => {
    fetchRecipes(query);
  };

  useEffect(() => {
    fetchRecipes("");
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query.trim() === "") {
      setFilteredRecipes([]);
    } else {
      fetchRecipes(query);
    }
  };
  const handleDropdownChange = (from,to) => {
   const newArr=recipes.filter((ele,i)=>ele.recipe.calories>=from&&ele.recipe.calories<=to)
   setFilteredRecipes(newArr)
    setIsDropdownOpen(false);
  };

  return (
    <div className="recipe">
      <div className="recipe_card">
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={handleSearchChange}
            className="searchbar"
          />
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              {calorieRange ? `${calorieRange} Calories`:"Calories"}
            </Dropdown.Toggle>

            <Dropdown.Menu >
              
              <Dropdown.Item
               onClick={() =>{
                setCalorieRange("0-200")
                handleDropdownChange(0,200)}}>
                0-200 Calories
              </Dropdown.Item>
              <Dropdown.Item onClick={() =>{
                setCalorieRange("201-400")
                handleDropdownChange(201,400)}}>
                201-400 Calories
              </Dropdown.Item>
              <Dropdown.Item onClick={() => {
                setCalorieRange("401-600")
                handleDropdownChange(401,600)}}>
                401-600 Calories
              </Dropdown.Item>
              <Dropdown.Item onClick={() => {
                setCalorieRange("601-800")
                handleDropdownChange(601,800)}}>
                601-800 Calories
              </Dropdown.Item>
              <Dropdown.Item onClick={() =>{
                setCalorieRange("801-1000")
                handleDropdownChange(801,1000)}}>
                801-1000 Calories
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="recipe_buttons">
          <Button
            variant="outline-success"
            onClick={() => renderRecipes("rice")}
          >
            Rice
          </Button>{" "}
          <Button
            variant="outline-success"
            onClick={() => renderRecipes("meat")}
          >
            Meat
          </Button>{" "}
          <Button
            variant="outline-success"
            onClick={() => renderRecipes("chicken")}
          >
            Chicken
          </Button>{" "}
          <Button
            variant="outline-success"
            onClick={() => renderRecipes("vegetable")}
          >
            Vegetables
          </Button>{" "}
        </div>
        <div className="card">
          <Row xs={1} md={4} className="g-2" style={{ background: "#272727" }}>
            {filteredRecipes.length?filteredRecipes.map((recipe, index) => (
              <Col key={index}>
                <Card
                  className="ccard"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  
                    <Image
                      src={recipe.recipe.image}
                      rounded
                      className="image_card"
                    />
            
                  <Card.Body className="cardbody">
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {recipe.recipe.label}
                    </Card.Title>
                    <Card.Text className="text-card">
                      <div className="calory">
                        <div style={{ color: "red" }}>CALORIES</div>{" "}
                        {recipe.recipe.calories}
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline-success" onClick={() => {}}>
                      {" "}
                      ingredients
                    </Button>{" "}
                  </Card.Footer>
                </Card>
              </Col>
            )):recipes.map((recipe, index) => (
              <Col key={index}>
                <Card
                  className="ccard"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  
                    <Image
                      src={recipe.recipe.image}
                      rounded
                      className="image_card"
                    />
            
                  <Card.Body className="cardbody">
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {recipe.recipe.label}
                    </Card.Title>
                    <Card.Text className="text-card">
                      <div className="calory">
                        <div style={{ color: "red" }}>CALORIES</div>{" "}
                        {recipe.recipe.calories}
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="outline-success" onClick={() => {

                      const uri = recipe.recipe.uri.split("_");
                      navigate(`/recipe/${uri[1]}/ingredients`)
                    }}>
                      {" "}
                      ingredients
                    </Button>{" "}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Recipe;