import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle  } from 'reactstrap';
  

  function RenderDish({dish}){
      if(dish!=null){
             return(
              <div className="container">
               <div className="row">
               <div className="col-12 col-md-5 m-1">
                   <Card>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                     <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                     </CardBody>
                   </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                < RenderComments comments = {dish.comments} />
                </div>
                </div>
                </div>
             );}
      else {
        return(
          <div></div>
        );}
   }

  function RenderComments({comments}){
     const display = comments.map((mycom) => {
     return (
    <div>
       <li key={mycom.id}>{mycom.comment}
       <p> -- {mycom.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short',
        day: '2-digit'}).format(new Date(Date.parse(mycom.date)))} </p></li>
    </div>
    );
     });
     return(
          <div>
             <h4>Comments</h4>
             <ul className="list-unstyled">{display}</ul>
          </div>
        );
     }

  const DishDetail= (props) => {

    console.log("DishDetail's render invoked");

    return(
      <div>
      <div className="row">
        {
          <RenderDish dish= {props.dish} />
        }
        </div>
      </div>
    );
  }

export default DishDetail;