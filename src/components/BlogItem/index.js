// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {title, description, publishedDate} = blogDetails

    return (
      <li className="blog-item">
        <div className="blog-container">
          <h1 className="comment-title">{title}</h1>
          <p className="date">{publishedDate}</p>
        </div>
        <p className="comment">{description}</p>
        <hr className="horizantal" />
      </li>
    )
  }
}

export default BlogItem
