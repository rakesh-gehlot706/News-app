import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description ,imageUrl ,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/aditya-l1-144619887-16x9.jpg?VersionId=X0BCcGS.lZU6jrd3qgoj9X46xuuNl.P0":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body my-2">
         <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a rel="noreferrer" href={newsUrl} target="_blank" id='btn' className="btn btn-sm btn-danger  ">Read More</a>
       </div>
     </div>
      </div>
    )
  }
}

export default NewsItem
