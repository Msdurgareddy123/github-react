import React, { Component } from 'react';
import people from '../people.png';
import email from '../email.svg';
import locate from '../locate.png';
import book from '../book.png';
import weight from '../weight.png';
import './Posts.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { fetchPosts2 } from '../actions/postActions'


class Posts extends Component {
  componentWillMount() {
    console.log('will Mount')
    this.props.fetchPosts();
    this.props.fetchPosts2();
  }



  render() {
    console.log('render')
    const fetchItems2 = this.props.Posts2.map(post => (
      <div key={post.id}>
        <div>
                <h2 className="react-redux">{post.name}</h2>
                <div className="description">
                  <p>{post.description}</p>
                </div>
                <ul>
                  <li>
                    {post.language ?    <div className="tech"><span className="tech_lang">{post.language}</span></div> :''}
                   
                  </li>
                  <li className="weight_line">
                  
                    <img src={post.license ? weight : ''} class="weight_image"/><span className="weight_span">{post.license ? post.license.spdx_id : '' }</span>
                  </li>
                </ul>
        </div>
        <div class="first_line"></div>
        
      </div>
    ));
    const login = this.props.posts.login
    const name = this.props.posts.name
    const bio = this.props.posts.bio
    const company = this.props.posts.company
    const location = this.props.posts.location
    const avatar_url= this.props.posts.avatar_url  
    const public_repos = this.props.posts.public_repos
    const following = this.props.posts.following
    const followers = this.props.posts.followers
    return (

      <div>
        <header className="header1">
          <div className="left">
              <img src={avatar_url} class="profile"/><br></br><br></br>
              <span className="u_name">{name}</span><br></br><span className="p_name"><h7>{login}</h7></span>
              <br></br><br></br>
              <span className="experiene">{bio}</span><br></br>
              <button class="edit">Edit bio</button>
              <div class="line"></div>
              <div className="target_corporation">
                 <img src={people} class="image_target"/>
                 <span className="target_span">{company}</span>
              </div>
              <div className="country">
                 <img src={locate} class="image_location"/>
                 <span className="country_span">{location}</span>
              </div>
              <div className="email_div">
                 <img src={email} class="image_email"/>
                 <span className="email_span">supreetsingh247@gmail.com</span>
              </div>
             
          </div>

          <div className="right">
            <ul>
              <a href="#"> <li><span class="all">Overview</span></li></a>
              <a href="#"><li><span class="alla">Repositories<span className="number">{public_repos}</span></span></li></a>
              <a href="#"><li><span class="all">Stars<span className="number1"> 6&nbsp;</span></span></li></a>
              <a href="#"><li><span class="all">Followers<span className="number2"> {followers}&nbsp;</span></span></li></a>
              <a href="#"><li><span class="all">Following<span className="number3"> {following}&nbsp;</span></span></li></a>
            </ul>
            <div class="first_line"></div>
            <div>
              <ul class="forms">
                <li><input type="text"  className="searchbar" placeholder="Search repositories..."/></li>
                <li>
                  <select className="dropdown_type">
                    <option selected disabled hidden>Type:ALL</option>
                    <option  value="1">All</option>
                    <option disabled>durga</option>
                    <option value="2"></option>
                  </select>
                </li>
                <li>
                  <select className="dropdown_language">
                    <option selected disabled hidden>Language:ALL</option>
                    <option disabled>durga</option>
                    <option ></option>
                  </select>
                </li>
                <li><button className="new">
                       
                        <img src={book} class="image_book"/>
                        <span className="new_span">New</span>

                    </button>
                </li>
              </ul>
            </div>
            <div class="first_line"></div>
            {/* //fun */}
            {fetchItems2}
          </div>
         
        </header>
        
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  Posts2: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  Posts2: state.posts.items2
});

export default connect(mapStateToProps, { fetchPosts,fetchPosts2 })(Posts);
