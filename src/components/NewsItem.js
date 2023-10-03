import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description ,imageUrl ,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/aditya-l1-144619887-16x9.jpg?VersionId=X0BCcGS.lZU6jrd3qgoj9X46xuuNl.P0":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}... </p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger ">Read More</a>
       </div>
     </div>
      </div>
    )
  }
}

export default NewsItem
