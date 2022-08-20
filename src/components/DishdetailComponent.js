import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg } from 'reactstrap'

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 col-xl-5 col-xs-12 col-xm-12 m-1">
                    <Card >
                        {this.renderDish(props.dish)}
                    </Card>
                </div>
                <div className="col-12 col-md-5 col-xl-5 col-xs-12 col-xm-12 m-1">
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {this.renderComments(props.dish)}
                    </ul>
                </div>
            </div>
        )
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card >
                    <p>{dish.title}</p>
                    <p>{dish.description}</p>
                </Card>
            )
        } else {
            return (<div></div>)
        }
    }

    renderComments(comments) {
        if (comments != null) {
            this.comments.map((comment) => {
                return (
                    <li>
                        <div>{comment.comment}</div>
                        <div>{comment.author} {comment.date}</div>
                    </li>
                )
            });
        } else {
            return (<div></div>)
        }
    }
}
export default DishDetail